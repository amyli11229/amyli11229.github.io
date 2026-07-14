---
permalink: false
---
# How to edit homepage & About page copy

Bio text lives in one file and appears on **both** the homepage and the About page.

---

## File to edit

| File | What it controls |
|------|------------------|
| **`bio.md`** | Your name, intro line, and bio paragraph (homepage + About page) |

Page layout files (`home.md`, `about.md`) are mostly settings — you rarely need to touch them.

---

## Field guide (`bio.md`)

| Field | Plain English | Example |
|-------|---------------|---------|
| **lead** | Large intro line at the top | `Hi, I'm **AMY LI**, an interdisciplinary designer…` |
| **intro** | Second paragraph below the lead | Your current role, past work, and links |

Use normal **Markdown** in both fields:

- `**bold text**` for emphasis (e.g. **AMY LI**, **UI/UX**, **XR**)
- `[link label](https://example.com)` for links (e.g. [UBC's Emerging Media Lab](https://eml.ubc.ca/projects/))

---

## Homepage vs About page

| Page | "ABOUT" heading | "Full About page →" link |
|------|-----------------|--------------------------|
| Homepage | Yes | Yes |
| About page | No | No |

Both pull the same **lead** and **intro** from `bio.md`. Edit once — it updates both pages after the next build.

---

## Preview locally

```bash
npm install
npm run serve
```

Open http://localhost:8080

### Text editor UI

```bash
npm run dev
```

Open http://localhost:8080/admin/ — see `content/EDIT-TEXT.md` for details.

---

## Projects

Project copy is edited separately in `content/projects/*.md`. See `content/projects/README.md`.
