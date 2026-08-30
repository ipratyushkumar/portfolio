# Pratyush Kumar — Personal Portfolio

A fast, responsive personal portfolio built with React, Vite, and Tailwind CSS. Designed for internship and job applications, with a centralized data layer so the whole site can be updated by editing plain JS files — no component code required.

**Live site:** _add your deployed URL here once you've deployed (see Deployment below)_

---

## Features

- Sticky navbar with smooth-scroll section links and a mobile hamburger menu
- Hero, About, Skills, Projects, Education, Certifications, Resume, and Contact sections
- A reusable project-card system driven entirely by `src/data/projects.js`
- Flagship project showcase for the Smart Accident Detection and Alert System
- Dark, developer-oriented visual design with a single teal accent color
- Subtle scroll-reveal animations that respect `prefers-reduced-motion`
- Fully responsive from 320px mobile up to 1920px desktop, no horizontal scroll
- Semantic HTML, keyboard-navigable, visible focus states, alt text on images
- SEO metadata (title, description, Open Graph, Twitter card), `robots.txt`, `sitemap.xml`
- No fabricated content anywhere — every unknown detail is a clearly marked `YOUR_...` placeholder

## Tech stack

- **React 19** + **Vite** — fast dev server and build
- **Tailwind CSS** — utility-first styling, custom design tokens in `tailwind.config.js`
- **lucide-react** — icon set (GitHub/LinkedIn icons are drawn locally in `src/components/icons.jsx`, since recent lucide-react versions dropped brand logos)

## Folder structure

```
src/
 ├── data/              # Everything editable lives here
 │    ├── profile.js
 │    ├── projects.js
 │    ├── skills.js
 │    ├── education.js
 │    └── certifications.js
 ├── components/         # Page sections + reusable UI (rarely need edits)
 ├── hooks/               # useReveal — scroll-reveal animation hook
 └── App.jsx
public/
 ├── favicon.svg
 ├── robots.txt
 ├── sitemap.xml
 ├── profile.jpg          # ← add your photo here
 ├── resume.pdf           # ← add your resume here
 └── projects/
      ├── accident-detection.jpg   # ← add a project image here
      └── virtual-classroom.jpg    # ← add a project image here
```

See **[EDITING_GUIDE.md](./EDITING_GUIDE.md)** for exact, example-driven instructions on changing every piece of content.

## Running locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

## Building for production

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally to double-check it
```

## Adding your real content

Before deploying, at minimum:

1. Replace every `YOUR_...` placeholder in `src/data/profile.js`, `src/data/projects.js`, and `src/data/certifications.js` with your real details.
2. Drop your photo at `public/profile.jpg`, your resume at `public/resume.pdf`, and project screenshots at `public/projects/*.jpg`.
3. Update `https://YOUR_DOMAIN/` in `public/robots.txt` and `public/sitemap.xml` once you know your deployed URL.

Full walkthrough with examples: **[EDITING_GUIDE.md](./EDITING_GUIDE.md)**.

## Deployment (Vercel)

This project needs no special configuration for Vercel — it auto-detects Vite.

1. Push this project to a GitHub repository (see below).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **Add New → Project**, then select your repository.
4. Vercel auto-fills:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**. After a minute you'll get a live URL like `https://your-portfolio.vercel.app`.
6. Every future push to your main branch redeploys automatically.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## Contact form

The contact form in the Contact section is UI-only — it does not currently send emails, since no backend or email service is configured. See **EDITING_GUIDE.md → "Contact form"** for a beginner-friendly way to wire it up to a real service (e.g. Formspree) in a few minutes.

## Customization

Colors, fonts, spacing, and section content are all designed to be changed without touching component logic. See **EDITING_GUIDE.md** for a complete reference.
