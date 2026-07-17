# Ahmed Mighri — Portfolio

Personal portfolio for **Ahmed Mighri** (Software Engineer & full-stack developer).  
Built with **Astro**, **React**, **Tailwind CSS**, **TypeScript**, **GSAP**, **Framer Motion**, and **Lenis**.

Production site: [https://ahmedmighri.com](https://ahmedmighri.com)

## Features

- Multilingual UI (FR / EN / AR)
- Project showcase, experience, skills, services, contact
- SEO: metadata, Open Graph, JSON-LD, sitemap, `robots.txt`
- Downloadable CV (`public/Ahmed-Mighri-CV.pdf`)

## Requirements

- **Node.js** `>= 22.12.0`
- **npm** (comes with Node)

## Setup & installation

```bash
git clone https://github.com/MighriAhmed/ahmed-mighri-portfolio.git
cd ahmed-mighri-portfolio
npm install
```

Copy the env example (optional — no secrets required today):

```bash
cp .env.example .env
```

### Development

```bash
npm run dev
```

Prefer background mode when using the Astro CLI locally:

```bash
astro dev --background
```

App: [http://localhost:4321](http://localhost:4321)

### Production build

```bash
npm run build
npm run preview
```

Output is written to `dist/`.

## Environment variables

This project is a **static** Astro site. It does **not** need API keys or secrets for build or runtime.

| Variable | Required | Description |
|----------|----------|-------------|
| — | — | No app env vars. Site URL & SEO live in `src/seo/config.ts`. |

Guidelines:

- Keep secrets out of git (see `.gitignore` / `.env.example`).
- If you add private integrations later, store values in **GitHub → Settings → Secrets and variables → Actions**.

## Project structure

```
src/
  content/site.ts     # Profile, projects, experience, skills
  seo/config.ts       # Canonical SEO & sitemap rules
  i18n/               # FR / EN / AR translations
  components/         # Layout, sections, React islands
  pages/              # Routes
  styles/global.css   # Design tokens & global styles
public/               # Static assets, CV, robots.txt, CNAME, OG images
.github/workflows/    # CI + GitHub Pages deploy
```

## Deployment (GitHub Pages)

CI/CD is configured via GitHub Actions:

- **CI** (`.github/workflows/ci.yml`) — install + build + SEO artifact checks on push/PR to `main`
- **Deploy** (`.github/workflows/deploy.yml`) — builds `dist/` and publishes to **GitHub Pages** on push to `main`

### One-time GitHub setup

1. Open the repository on GitHub → **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. (Recommended) **Custom domain**: `ahmedmighri.com`  
   - `public/CNAME` already contains `ahmedmighri.com` (keeps production URLs / SEO unchanged).
4. Point DNS for `ahmedmighri.com` to GitHub Pages (Apex and/or `www` as documented by GitHub).

After the first successful **Deploy GitHub Pages** workflow, the site is served from Pages. With the custom domain + existing SEO config (`https://ahmedmighri.com`), sitemap, canonicals, and `robots.txt` stay aligned.

### Manual deploy trigger

GitHub → **Actions → Deploy GitHub Pages → Run workflow**.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build |
| `npm run astro` | Astro CLI |

## Content & SEO

- Edit profile/projects in `src/content/site.ts`
- Edit SEO defaults & page metadata in `src/seo/config.ts`
- Do not change production URLs in SEO files unless you also update DNS and hosting

## License

Private portfolio project — all rights reserved.
