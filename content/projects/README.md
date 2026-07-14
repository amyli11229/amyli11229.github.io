# How to edit project files

Each project is one `.md` file. You mostly edit **plain text** — no HTML tags.

---

## Two parts of every file

```
---                          ← settings (top section)
title: My Project
lead: Opening paragraph...
---

Your extra paragraphs here.  ← main writing (bottom section)
Write like a normal document.
```

---

## Field guide (top section)

### Always edit these

| Label | Plain English | Example |
|-------|---------------|---------|
| **title** | Project name (big heading on the project page) | `Procedural Poetry Funhouse` |
| **lead** | First paragraph on the project page | Your opening summary |
| **contributions** | “Key contributions” bullet list | Lines starting with `- ` |
| **Body** (below `---`) | More paragraphs on the project page | Normal writing |

### Project page details

| Label | Plain English |
|-------|---------------|
| **organization** | Course or org line under the title (e.g. “EML Experimental VR Project”) |
| **tags** | Tools/tech shown on the **project page** (comma-separated) |

### Preview on homepage & Projects list (“card” = the small preview box)

When someone sees your project in the grid **before** they click in:

| Label | Plain English |
|-------|---------------|
| **card_year** | Small badge in the corner (e.g. `EML`, `CPSC 344`) |
| **card_description** | Short summary on the **Projects page** card |
| **card_description_home** | Optional: different summary on the **homepage** only. Delete this line if same as `card_description`. |
| **card_medium** | Subtitle on the Projects page card (e.g. “EML Experimental VR Project”) |
| **card_medium_home** | Optional: different subtitle on homepage only |
| **card_tags** | Tools shown on the card (can differ from `tags`) |
| **hero_image** | Main photo path — usually leave as-is unless you uploaded a new image |

### Usually leave alone

| Label | Plain English |
|-------|---------------|
| **slug** | **Web address name.** Creates `projects/YOUR-SLUG.html`. Example: slug `procedural-poetry-funhouse` → `…/projects/procedural-poetry-funhouse.html`. **Don’t change** unless you want a new URL. |
| **sort_order** | Order in the list (`1` = first, `2` = second) |
| **published** | `true` = show project, `false` = hide |
| **layout** | Internal template name — **never edit** |

---

## What “slug” means

**Slug** = the filename part of the link.

- slug: `autogreater` → website: `amyli11229.github.io/projects/autogreater.html`
- Use lowercase words with hyphens, no spaces.

Think of it as the **URL nickname**, not something you rewrite often.

---

## What “card” means

**Card** = the **preview tile** on your homepage and Projects page (image + title + short blurb).

- **Detail page** = full project write-up after someone clicks.
- **Card fields** = what people see **before** they click.

That’s why there are two descriptions sometimes (`card_description` vs `lead`):

- **card_description** → short, for the grid preview  
- **lead** → longer opening on the full page  

---

## Quick checklist when adding content

1. Update **lead** and/or paragraphs **below `---`** for the full story  
2. Shorten **card_description** if the preview text feels too long  
3. Update **contributions** bullets if your role changed  
4. Ignore **slug** and **layout** unless you know you need them  
