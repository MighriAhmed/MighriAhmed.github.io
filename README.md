# Ahmed Mighri — Portfolio

Personal portfolio for **Ahmed Mighri** (Software Engineer & full-stack developer).  
Built with **Astro**, **React**, **Tailwind CSS**, **TypeScript**, **GSAP**, **Framer Motion**, and **Lenis**.

Production site: [https://mighriahmed.github.io](https://mighriahmed.github.io)

## Features

- Multilingual UI (FR / EN / AR)
- Project showcase, experience, skills, services, contact
- SEO: metadata, Open Graph, JSON-LD, sitemap, `robots.txt`
- Downloadable CV (`public/MIGHRI_AHMED-CV.pdf`)

## Requirements

- **Node.js** `>= 22.12.0`
- **npm** (comes with Node)

## Setup & installation

```bash
git clone https://github.com/MighriAhmed/MighriAhmed.github.io.git
cd MighriAhmed.github.io
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
- If you later add private integrations, store values in **GitHub → Settings → Secrets and variables → Actions**.

## Project structure

```
src/
  content/site.ts     # Profile, projects, experience, skills
  seo/config.ts       # Canonical SEO & sitemap rules
  i18n/               # FR / EN / AR translations
  components/         # Layout, sections, React islands
  pages/              # Routes
  styles/global.css   # Design tokens & global styles
public/               # Static assets, CV, robots.txt, OG images
.github/workflows/    # CI + GitHub Pages deploy
```

## Deployment (GitHub Pages)

CI/CD is configured via GitHub Actions:

- **CI** (`.github/workflows/ci.yml`) — install + build + SEO artifact checks on push/PR to `main`
- **Deploy** (`.github/workflows/deploy.yml`) — builds `dist/` and publishes to **GitHub Pages** on push to `main`

Live URL: **https://mighriahmed.github.io** (free GitHub Pages user site).

### One-time GitHub setup

1. Repository must be named `MighriAhmed.github.io` (user/organization site).
2. **Settings → Pages** → Source: **GitHub Actions**.
3. Push to `main` triggers deploy automatically.

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
- Canonical site URL: `https://mighriahmed.github.io`

## License

Private portfolio project — all rights reserved.
