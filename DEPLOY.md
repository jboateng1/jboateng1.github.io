# Deploying your site

This is your al-folio site, already customized for you. Follow these steps to take it from this folder to a live URL at **https://jboateng1.github.io**.

---

## 1. Create the GitHub repository

1. Sign in to GitHub as **jboateng1**.
2. Click **New repository**.
3. **Name it exactly:** `jboateng1.github.io` (this is required for the user-page URL).
4. **Visibility:** Public.
5. Do NOT initialize with README/license/.gitignore — this folder already has everything.
6. Click **Create repository**. Leave the page open.

## 2. Push this folder to GitHub

From this directory (`/home/joshua/Documentation/webpage/site`), run:

```bash
# This folder is already a git repo (cloned from al-folio).
# Re-point its origin to your new repo:
git remote set-url origin https://github.com/jboateng1/jboateng1.github.io.git

# Optional: start fresh history (recommended — keeps your repo clean)
rm -rf .git
git init -b main
git add .
git commit -m "Initial commit: customized al-folio site"
git remote add origin https://github.com/jboateng1/jboateng1.github.io.git
git push -u origin main
```

## 3. Turn on GitHub Pages

1. In your new repo on GitHub: **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. The included workflow `.github/workflows/deploy.yml` will run automatically on every push to `main`. The first build takes ~5 minutes.
4. Watch progress under the **Actions** tab. When it finishes, your site is live at **https://jboateng1.github.io**.

## 4. Fill in the TODOs

A few values were left as placeholders so you can paste in the right ones:

| File | What to replace |
|---|---|
| `_data/socials.yml` | `scholar_userid` — copy from your Google Scholar URL (`https://scholar.google.com/citations?user=XXXXXX`) |
| `_data/socials.yml` | `orcid_id` — paste your ORCID iD (`0000-0000-0000-0000`) |
| `_data/socials.yml` | `gitlab_username` — your actual GitLab handle |
| `_data/repositories.yml` | Add any of your personal/research repos under `github_repos:` |

Commit and push — the site rebuilds automatically.

## 5. (Optional) Custom domain

If you want `joshuaoforiboateng.com` instead of `jboateng1.github.io`:

1. Buy the domain (Namecheap, Cloudflare, Google Domains).
2. In **Settings → Pages → Custom domain**, enter the domain. GitHub will create a `CNAME` file in your repo.
3. At your DNS provider, add the records GitHub shows you (4 A records + 1 AAAA or a CNAME).
4. Edit `_config.yml`: change `url: https://jboateng1.github.io` to your custom URL.

## 6. Previewing locally (optional but useful)

You don't *need* this to deploy — GitHub Pages builds for you. But to preview locally before pushing:

```bash
# One-time setup (Ubuntu/Debian):
sudo apt install ruby-full build-essential imagemagick
gem install bundler
bundle install

# Run the dev server:
bundle exec jekyll serve --livereload
# → browse to http://localhost:4000
```

Or use Docker (avoids the Ruby setup):

```bash
docker compose -f docker-compose-slim.yml up
# → browse to http://localhost:8080
```

## 7. Updating content as your career evolves

| You want to... | Edit this |
|---|---|
| Add a news item (talk, award, paper) | Create a new file in `_news/YYYY-MM-DD-slug.md` |
| Add a publication | Append a BibTeX entry to `_bibliography/papers.bib`. Use `selected = {true}` to feature it on the home page, `award = {true}` to mark a best paper. |
| Add a project | New file in `_projects/N_slug.md` |
| Update CV | Replace `assets/pdf/Joshua_Ofori_Boateng_CV.pdf` |
| Change your bio | Edit `_pages/about.md` |
| Change colors / theme | `_config.yml` and the al-folio theme docs |

Push to `main` → GitHub Actions rebuilds → site updates within ~5 minutes.

---

## What's been pre-built for you

- **Landing page** (`/`) — bio, three research-interest cards, "at a glance" stats panel, latest news (auto-scrolling), selected publications.
- **Research / projects page** (`/projects/`) — feature cards for **AraSDR**, **AraRACH** (with Best Paper badge), **FlexRU**, and **ARA Wireless Living Lab**.
- **Publications page** (`/publications/`) — auto-generated from `_bibliography/papers.bib`, grouped by year, with Best Paper / Best Demo icons on the right papers, BibTeX-toggle and external links.
- **Awards page** (`/awards/`) — gold-accented cards for the three best-paper/demo awards, plus scholarships and distinctions.
- **CV page** (`/cv/`) — embedded PDF + download button.
- **Teaching page** (`/teaching/`) — REU mentoring, courses taught, reviewing service.
- **Code page** (`/repositories/`) — GitHub stats and curated repo list.
- **Socials in nav + footer** — email, LinkedIn, GitHub, GitLab, Google Scholar, ORCID, CV (once you fill in the IDs).

Enjoy 🚀
