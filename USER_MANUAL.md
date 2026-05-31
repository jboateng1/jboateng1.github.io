# Editing your website — a plain-English user manual

This guide explains **how to change every section of your site yourself**. You do not need to be a programmer. Each section below tells you:

- **What it is** (the part of the site you see)
- **Which file to edit**
- **How to make the change**, with copy-paste examples

> **Your site lives at:** https://jboateng1.github.io
> **The files live in:** `/home/joshua/Documentation/webpage/site`

---

## Before you start: the 3 things that are always true

1. **Content lives in text files.** Almost everything you'll edit is a `.md` (Markdown) or `.yml` (settings) file. You open them in any text editor, change the words, and save.

2. **The top of many files has a "front matter" block** between two lines of `---`. That's settings (title, order, etc.). The part _below_ the second `---` is the actual page content.

   ```markdown
   ---
   title: about ← settings up here
   nav_order: 1
   ---

   This is the visible page content. ← your writing goes here
   ```

3. **To publish a change, you commit and push.** Editing a file on your computer does **not** update the live site by itself. See [Publishing your changes](#publishing-your-changes) at the bottom. The site rebuilds automatically ~2–3 minutes after you push.

---

## Quick reference: "I want to change X → edit this file"

| I want to change…                                 | Edit this file                           |
| ------------------------------------------------- | ---------------------------------------- |
| Homepage intro text, title, photo caption         | `_pages/about.md`                        |
| The "Research Interests" / "At a Glance" boxes    | `_pages/about.md` (lower down)           |
| A news item (add/edit/remove)                     | files in `_news/`                        |
| A project page                                    | files in `_projects/`                    |
| Publications list                                 | `_bibliography/papers.bib`               |
| Awards page                                       | `_pages/awards.md`                       |
| Your CV PDF                                       | `assets/pdf/Joshua_Ofori_Boateng_CV.pdf` |
| Email, LinkedIn, GitHub, Scholar, ORCID links     | `_data/socials.yml`                      |
| Which pages show in the top menu, and their order | the `nav:` / `nav_order:` in each page   |
| Site-wide name, description, favicon              | `_config.yml`                            |
| Photos / images                                   | `assets/img/`                            |

---

## 1. The homepage (the "about" page)

**File:** `_pages/about.md`

This is the most important page. It has four parts.

### 1a. Your title and photo caption (the front matter)

At the very top, between the `---` lines:

```yaml
subtitle: <strong>Research Assistant Professor</strong> &middot; ...
profile:
  image: prof_pic.jpg # your photo, stored in assets/img/
  more_info: >
    <p><i class="fa-solid fa-location-dot"></i> 391C Durham Center</p>
    <p>613 Morrill Road, Ames, IA 50011</p>
```

- **To change your title:** edit the text inside `subtitle:`.
- **To change your office / affiliation lines:** edit the `<p>...</p>` lines under `more_info`.
- **To change your photo:** drop a new image into `assets/img/` and update `image: prof_pic.jpg` to the new file name.

> `&middot;` is just a dot separator (·) and `&amp;` is an ampersand (&). Keep them as-is.

### 1b. Your bio (the paragraphs)

Below the second `---` you'll find your intro paragraphs in plain Markdown:

- `**bold text**` makes text **bold**
- `_italic text_` makes text _italic_
- `[link text](https://example.com)` makes a link

Just edit the words. Example — to update your role, find the sentence starting "I am a **Research Assistant Professor**…" and change it.

### 1c. The "Research Interests" and "At a Glance" boxes

Further down are colored boxes built with HTML. You can edit the **numbers and labels** safely:

```html
<div style="font-size: 1.6rem; ...">170+</div>
<div style="font-size: 0.85rem; ...">Researchers using ARA</div>
```

Change `170+` or the label text. Leave the `<div ...>` tags around them alone.

### 1d. The contact line at the bottom

The last block has your email, CV link, and LinkedIn. Update the addresses inside the `href="..."` quotes if they change.

---

## 2. News items (the "news" feed on the homepage and /news page)

**Folder:** `_news/`

Each news item is **its own small file**. The file name sets the date and must follow this pattern:

```
YYYY-MM-DD-short-description.md
```

Example: `2026-05-31-research-assistant-professor.md`

### Add a news item

1. Copy an existing file in `_news/` and rename it with today's date.
2. Edit the contents. A news file looks like this:

   ```markdown
   ---
   layout: post
   date: 2026-05-31
   inline: true
   related_posts: false
   ---

   <i class="fa-solid fa-newspaper" style="color: var(--global-theme-color);"></i> &nbsp;Your news text here, with **bold** and [links](https://example.com).
   ```

3. Make sure the `date:` inside matches the date in the file name.

### Edit or remove a news item

- **Edit:** open the file and change the text.
- **Remove:** delete the file.

### Notes

- News items show **newest first**, automatically, based on the date.
- The homepage shows the most recent few (currently 6 — controlled by `limit:` in `_pages/about.md`).
- The little icon at the start is a [Font Awesome](https://fontawesome.com/search) icon. Copy the `fa-...` name from another news item to reuse a style, or browse the site to pick a new one.

---

## 3. Projects

**Folder:** `_projects/`

Each project is one file: `1_arasdr.md`, `2_ararach.md`, etc. The number controls display order.

### Edit a project

Open the file. The top front matter controls the card:

```yaml
---
layout: page
title: AraSDR # the project name
description: <i class="fa-solid fa-tower-cell"></i>&nbsp; Short one-line summary
img: assets/img/9.jpg # the thumbnail image
importance: 1 # lower number = shown first
category: systems
related_publications: true
---
```

Below the front matter is the full project write-up in Markdown + HTML (headings, bullet points, the colored stat boxes). Edit the text like any document.

### Add a new project

1. Copy an existing project file, e.g. `4_ara.md` → `5_newproject.md`.
2. Change the `title`, `description`, `img`, and `importance`.
3. Rewrite the body.

### Remove a project

Delete the file.

---

## 4. Publications

**File:** `_bibliography/papers.bib`

Publications come from a **BibTeX** file (the standard academic citation format). Each paper is one entry:

```bibtex
@article{islam2025ara,
  abbr        = {ComNet},
  selected    = {true},        % true = also show on the homepage
  title       = {Design and Implementation of {ARA} Wireless Living Lab...},
  author      = {Islam, T. U. and Boateng, Joshua Ofori and Zhang, H.},
  journal     = {Elsevier Computer Networks},
  year        = {2025},
  url         = {https://example.com/paper},
}
```

### Add a paper

Paste a new `@article{...}` or `@inproceedings{...}` block. Most publishers and Google Scholar give you a "Cite → BibTeX" button you can copy from.

### Highlight a paper on the homepage

Add `selected = {true},` to its entry. Remove it (or set to `false`) to hide it from the homepage list.

> Wrap words that must keep their exact capitalization in `{curly braces}`, e.g. `{ARA}`, `{5G}` — otherwise BibTeX may lowercase them.

---

## 5. Awards

**File:** `_pages/awards.md`

This page is built from repeating HTML "cards." To add an award, **copy one existing card block** and edit the text inside it:

```html
<div class="col-12">
  <div class="p-4 rounded shadow-sm" style="...">
    <h5 class="mb-1">Best Paper Award</h5>
    <p class="mb-1"><strong>Conference name (Year)</strong></p>
    <p class="mb-0">Location · Date · for <em>Paper title</em></p>
  </div>
</div>
```

Change only the words inside the `<h5>`, `<strong>`, `<p>`, and `<em>` tags. Keep the surrounding `<div>` structure intact.

---

## 6. Your CV

**File:** `assets/pdf/Joshua_Ofori_Boateng_CV.pdf`

The CV page (`/cv/`) simply displays and links to this PDF. **To update your CV, replace this file** with a new PDF of the same name. Everything else updates automatically.

If you rename the PDF, also update the file name in:

- `_data/socials.yml` (`cv_pdf:` line)
- `_pages/about.md` (the "CV (PDF)" link at the bottom)
- `_pages/cv.md` (the download buttons)

The "updated …" note is in `_pages/cv.md` front matter: `description: Curriculum Vitae · updated Feb 2026`.

---

## 7. Your links and contact info (email, LinkedIn, GitHub, Scholar, ORCID)

**File:** `_data/socials.yml`

These power the social icons at the bottom of the homepage. Just edit the values:

```yaml
email: jboateng@iastate.edu
github_username: jboateng1
gitlab_username: jboateng
linkedin_username: joshua-ofori-boateng-22b2b0145
scholar_userid: ucRQ21wAAAAJ # the user= value from your Scholar URL
orcid_id: 0000-0003-4248-1642
```

For LinkedIn/GitHub etc., you enter only the **username**, not the full URL. The icon links are built for you.

---

## 8. The top navigation menu (which pages appear, and their order)

Each page decides whether it shows in the top menu via its front matter:

```yaml
nav: true # true = show in the top menu; remove or set false to hide
nav_order: 1 # smaller number = further left
```

Current order: news (1), then publications (3), awards (4), cv (5), etc. To **reorder** the menu, change the `nav_order:` numbers. To **hide** a page from the menu, set `nav: false`.

---

## 9. Site-wide settings (name, description, favicon)

**File:** `_config.yml`

This is the master settings file. The lines you might touch:

```yaml
first_name: Joshua
last_name: Boateng
description: > # the text search engines and social previews show
  Joshua Ofori Boateng — Research Assistant Professor at Iowa State University...
keywords: Joshua Ofori Boateng, Open RAN, 5G, 6G, ...
icon: 📡 # the emoji used as the browser-tab favicon
```

> **Be careful in `_config.yml`** — a typo here can stop the whole site from building. Change one thing at a time and keep the spacing exactly as it was.

---

## 10. Images

**Folder:** `assets/img/`

To use a new image (homepage photo, project thumbnail, etc.):

1. Copy your image file into `assets/img/`.
2. Reference it by name where needed, e.g. `image: prof_pic.jpg` in `about.md`, or `img: assets/img/9.jpg` in a project.

Use ordinary `.jpg`/`.png` files. Keep file names simple (no spaces).

---

## Publishing your changes

Editing files on your computer does **not** update the live site until you push them to GitHub. From the project folder, the routine is always the same three commands:

```bash
git add -A                      # stage all your edits
git commit -m "Describe what you changed"
git push                        # send them to GitHub
```

After you push:

- GitHub automatically rebuilds the site (watch the **Actions** tab on your repo).
- The live site at https://jboateng1.github.io updates within ~2–3 minutes.

### Important: run the formatter before you push

This project has an automatic style check (**Prettier**) that fails if files aren't formatted its way. Before committing, run:

```bash
npx prettier . --write
```

This tidies spacing/formatting automatically. (The first time, run `npm ci` once to install it.) Then `git add`, `commit`, and `push` as above. This keeps the green checkmark on your commits.

### Preview before publishing (optional)

To see changes on your own computer before pushing, see **Section 6, "Previewing locally"** in `DEPLOY.md`. In short:

```bash
bundle exec jekyll serve --livereload
# then open http://localhost:4000 in your browser
```

---

## If something breaks

- **The site didn't update:** check the **Actions** tab on GitHub for a red ✗. Click it to see the error.
- **A red ✗ on "Prettier":** you forgot to run `npx prettier . --write` before pushing. Run it, then commit and push again.
- **The whole site fails to build after editing `_config.yml`:** you likely have a YAML typo (often a stray space or missing colon). Undo your last change and try again more carefully.
- **You want to undo your local edits to a file:** `git checkout -- path/to/file` restores it to the last committed version.

---

## Cheat sheet

```bash
# 1. Edit files in a text editor and save.

# 2. Tidy formatting (avoids the Prettier check failing):
npx prettier . --write

# 3. Preview locally (optional):
bundle exec jekyll serve --livereload   # → http://localhost:4000

# 4. Publish:
git add -A
git commit -m "What I changed"
git push
```
