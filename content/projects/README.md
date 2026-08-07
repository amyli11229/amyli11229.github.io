# How to edit projects

Each project is one file in this folder (example: `dig-dig-dig.md`).

## Quick start

1. Open a project `.md` file
2. Change the text next to the labels you care about
3. Run:

```bash
npm run sync
```

4. Preview with `npm run serve`, then push when ready

Or use the visual editor: `npm run dev` → http://localhost:8080/admin/

---

## What to edit (plain English)

| Label in the file | What it is |
|-------------------|------------|
| **title** | Big project name |
| **lead** | First paragraph on the project page |
| **organization** | Small line under the title (course / lab / jam) |
| **tags** | Tools listed under the title |
| **card_year** | Small badge on the preview card (`EML`, `Game Jam`) |
| **card_description** | Short blurb on the preview card |
| **card_medium** | Subtitle on the preview card |
| **hero_image** | Cover image path |
| **contributions** | Bullet list (“Key contributions”) |
| **Body** (below `---`) | The rest of the story — write normally |

### Optional (only if you need them)

| Label | What it is |
|-------|------------|
| **project_video** | YouTube embed (`youtube_id` from `watch?v=XXXX`) |
| **prototype_callout** | Download / Visit button block |
| **external_links** | Extra links at the bottom |
| **card_*_home** | Different card text on the homepage only |

### Leave alone unless you know why

| Label | Why |
|-------|-----|
| **slug** | Creates the URL (`projects/this-name.html`) |
| **sort_order** | List order (`1` = first) |
| **published** | `false` hides the project |
| **layout** | Template name — do not change |

---

## Tips

- You only need **one** description for most projects. Add `card_description_home` only if the homepage blurb should be different.
- If `tags` and `card_tags` would be the same, just set **tags** (or **card_tags**) — the site fills in the rest.
- After editing Markdown, always run **`npm run sync`** before pushing so the live GitHub Pages HTML updates.
