# Portfolio content migration (phased)

This repo is moving project content from hand-edited HTML to **Markdown + Eleventy**, with optional **Decap CMS** added later. The goal is maintainability without extra infrastructure until you need it.

---

## Current phase: **1 — Markdown + Eleventy (preview only)**

### What is live today

GitHub Pages still serves the **original HTML files** from the repo root, exactly as before:

- `index.html`, `projects.html`, `about.html`, `cv.html`, `contact.html`
- `projects/*.html`

**Nothing about public hosting changed.** Push to `master` → site updates the same way it always has.

### What is new (not live yet)

| Path | Purpose |
|------|---------|
| `content/projects/*.md` | Single source of truth for project copy |
| `content/pages/bio.md` | Homepage + About bio copy (lead & intro) |
| `content/pages/home.md`, `about.md` | Page settings (rarely edited) |
| `_includes/` | Shared layouts and project card template |
| `*.njk` | Eleventy page templates |
| `.eleventy.js` | Build config |
| `package.json` | `npm run build` / `npm run serve` |

Legacy HTML is listed in `.eleventyignore` so Eleventy **does not** overwrite or duplicate it during local builds.

Build output goes to `_site/` (gitignored). That folder is what will eventually replace the root HTML files.

### Verify the new build matches the current design

```bash
npm install
npm run serve
```

Open **http://localhost:8080** and compare each page to the live site:

| Page | Local (Eleventy) | Live (GitHub Pages) |
|------|------------------|---------------------|
| Home projects section | http://localhost:8080/index.html | https://amyli11229.github.io/ |
| Projects list | http://localhost:8080/projects.html | …/projects.html |
| AutoGreater | …/projects/autogreater.html | same path on live site |
| Soil Science Viewer | …/projects/soil-science-viewer.html | same |
| Procedural Poetry | …/projects/procedural-poetry-funhouse.html | same |

Check layout, typography, dark mode, card animations, and copy (homepage vs projects page variants are preserved via optional `*_home` fields in frontmatter).

Optional diff against legacy files:

```bash
npm run build
diff projects/autogreater.html _site/projects/autogreater.html
```

Small differences in HTML whitespace are fine; visible content and structure should match.

### Edit project content today (no CMS)

Edit Markdown in `content/projects/`:

```bash
content/projects/autogreater.md
content/projects/soil-science-viewer.md
content/projects/procedural-poetry-funhouse.md
```

Run `npm run serve` to preview. **Live site will not change** until you complete Phase 2 cutover.

---

## Phase 2 — Cut over to Eleventy on GitHub Pages

Do this **only after** local verification.

1. Enable **GitHub Actions** as the Pages source (Settings → Pages → Build and deployment → GitHub Actions).
2. Add the deploy workflow (`.github/workflows/deploy.yml`) — build `npm run build`, publish `_site/`.
3. Remove legacy HTML once the Action deploy succeeds:
   - `index.html`, `projects.html`, `about.html`, `cv.html`, `contact.html`
   - `projects/*.html`
4. Remove those paths from `.eleventyignore`.

URLs stay the same (`/projects/autogreater.html`, etc.) because Eleventy permalinks match the old filenames.

---

## Phase 3 — Optional: Decap CMS

Add `/admin` only if you want a visual editor in the browser. This is **optional**.

### Do you need Netlify Identity + Git Gateway?

**No — not for a personal portfolio.**

| Approach | Infrastructure | Best for |
|----------|----------------|----------|
| **Edit Markdown in GitHub** | None | Small site, infrequent updates, maximum reliability |
| **Edit locally + preview** | Node only (`npm run serve`) | Comfortable with files, want WYSIWYG-free control |
| **Decap CMS + GitHub backend** | OAuth proxy server you host | In-browser editing without Netlify |
| **Decap CMS + Netlify Identity + Git Gateway** | Netlify account + Identity | Easiest in-browser login; extra service |

**Recommendation for this site:** stay on **GitHub-based editing** unless you strongly dislike the GitHub web editor:

1. **github.com → your repo → `content/projects/` → edit `.md`** — GitHub’s Markdown editor is enough for title, lead, lists, and body text.
2. **`npm run serve` locally** — preview before push.
3. **Push to `master`** — after Phase 2 cutover, GitHub Actions rebuilds the site.

That gives you one source of truth (`content/projects/*.md`), no Netlify, no OAuth proxy, and the same GitHub Pages workflow you already use (with Actions only at cutover).

### When Netlify *is* worth it

Choose Netlify Identity + Git Gateway only if you:

- Want a WordPress-like `/admin` form UI
- Prefer not to open Markdown/frontmatter in GitHub
- Are fine maintaining a Netlify site linked to the same repo

It is a convenience layer, not a requirement for CMS-managed content.

### If you add Decap later

1. Add `admin/index.html` + `admin/config.yml` (collection pointing at `content/projects/`).
2. Either:
   - **Netlify:** connect repo, enable Identity + Git Gateway, use `backend: git-gateway`, or
   - **GitHub only:** use `backend: github` with a small OAuth proxy, or `local_backend: true` for local-only CMS sessions.
3. Passthrough-copy `admin/` in `.eleventy.js` so `/admin` is published.

Decap always commits **Markdown** to the repo; Eleventy still builds the HTML. The CMS does not replace the build step.

---

## Project content fields

Each `content/projects/*.md` file supports:

| Field | Used on |
|-------|---------|
| `title` | Detail page + default card title |
| `slug` | URL `/projects/{slug}.html` |
| `sort_order` | Card order (lower first) |
| `published` | Hide when `false` |
| `organization` | Course/org on detail page |
| `tags` | Tools on detail page |
| `hero_image` | Hero + card thumbnail |
| `card_year` | Badge on cards |
| `card_description` | Projects page card text |
| `card_description_home` | Optional homepage override |
| `card_medium` / `card_medium_home` | Card meta lines |
| `card_title_home` | Optional shorter homepage title |
| `card_tags` | Card tags (defaults to `tags`) |
| `lead` | Lead paragraph |
| **Markdown body** | Detail paragraphs |
| `contributions` | Key contributions list |
| `external_links` | Optional links section |
| `prototype_callout` | Optional Figma block (AutoGreater) |
| `additional_images` | Optional extra figures |

---

## File map

```
content/projects/     ← edit project text (Phase 1+)
content/pages/        ← edit homepage & About bio (bio.md)
_includes/            ← templates (rarely edited)
*.njk                 ← page shells
index.html etc.       ← legacy live site (remove in Phase 2)
_site/                ← local build output (gitignored)
style.css, main.js    ← unchanged design + behavior
images/projects/      ← project images
```

---

## Summary

- **Phase 1 (now):** Markdown + Eleventy in parallel; GitHub Pages unchanged; legacy HTML kept.
- **Phase 2:** Verify locally → Actions deploy from `_site/` → remove legacy HTML.
- **Phase 3 (optional):** Decap CMS if you want a form UI; **GitHub Markdown editing is the simpler default.**

Priority: maintainability and reliability — extra services only when they clearly save you time.
