---
permalink: false
---
# How to edit site text

You can edit website text in two ways.

---

## Option A — Editor UI (recommended)

Run both the site preview and the content editor:

```bash
npm install
npm run dev
```

Then open **http://localhost:8080/admin/** in your browser.

| Section in admin | What you can edit |
|------------------|-------------------|
| **Contact links & email** | Name, email, LinkedIn, GitHub, contact form URLs |
| **Bio** | Homepage + About intro lines |
| **Contact page text** | Contact page headings and form section copy |
| **Projects** | All project titles, descriptions, and story text |

Click **Publish** (top right) to save changes to the files in this repo.

> The editor runs on your computer only. Changes are saved to the Markdown/JSON files — push to GitHub when you're ready to go live.

---

## Option B — Edit files on GitHub

| File | Content |
|------|---------|
| `content/pages/bio.md` | Bio on homepage & About page |
| `content/pages/contact.md` | Contact page text |
| `_data/site.json` | Email, social links, form URLs |
| `content/projects/*.md` | Each project |

See also `content/projects/README.md` for project field details.

---

## Preview without the editor

```bash
npm run serve
```

Open http://localhost:8080

---

## What still requires code

Layout, fonts, colors, animations, and the CV PDF are not in the editor — those live in `style.css`, templates, and `cv.pdf`.
