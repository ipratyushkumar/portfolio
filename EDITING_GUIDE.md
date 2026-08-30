# Editing Guide

This site is built so you can change almost everything by editing the files in `src/data/` — you shouldn't need to touch component code for routine updates. Each section below gives the exact file and a copy-pasteable example.

After editing, run `npm run dev` to preview changes, or `npm run build` before deploying.

---

## 1. Change your name

**File:** `src/data/profile.js`

```js
const profile = {
  name: "Pratyush Kumar", // ← change this
  initials: "PK",          // ← shown in the navbar logo, update to match
```

## 2. Change your bio

**File:** `src/data/profile.js`

- `heroSummary` — the short paragraph in the Hero section.
- `aboutParagraphs` — an array of paragraphs shown in the About section. Add, remove, or edit entries freely:

```js
aboutParagraphs: [
  "First paragraph...",
  "Second paragraph...",
  "Add a third paragraph if you want — the layout adapts automatically.",
],
```

## 3. How to add a project

**File:** `src/data/projects.js`

Copy an existing project object, paste it as a new array entry, and edit the fields:

```js
{
  id: "my-new-project",       // unique, no spaces
  featured: false,             // true = large showcase, false = grid card
  title: "My New Project",
  tagline: "One-line summary shown on the card.",
  overview: "A short paragraph describing the project.",
  problem: "What problem this project solves.",
  howItWorks: ["Step one...", "Step two..."],
  technologies: ["React", "Node.js"],
  features: ["Feature one", "Feature two"],
  image: "/projects/my-new-project.jpg", // add the image file to public/projects/
  github: "YOUR_PROJECT_GITHUB_URL",
  demo: "YOUR_LIVE_DEMO_URL",            // leave as "" to hide the demo button
},
```

No changes are needed anywhere else — `Projects.jsx` reads this array automatically.

## 4. How to remove a project

**File:** `src/data/projects.js` — delete the corresponding object from the `projects` array (including its surrounding `{ ... },`).

## 5. How to change project images

1. Add your image file to `public/projects/` (e.g. `public/projects/my-project.jpg`).
2. Point the project's `image` field at it: `image: "/projects/my-project.jpg"`.

If an image file is missing, the card gracefully shows just the text — it won't show a broken-image icon.

## 6. How to add a certification

**File:** `src/data/certifications.js`

```js
{
  id: "new-cert",
  name: "Certification Name",
  issuer: "Issuing Organization",
  year: "2026",
  certificateUrl: "/certificates/new-cert.pdf", // or a link; leave "" to hide the button
},
```

## 7. How to change skills

**File:** `src/data/skills.js`

Each category has a name and a list of items:

```js
{
  category: "Programming",
  items: ["Python", "C", "JavaScript", "Java"], // add/remove freely
},
```

To add a whole new category, copy the shape above as a new array entry. If the category name doesn't already have an icon mapped in `src/components/Skills.jsx`, it will fall back to a default icon — the section still works fine.

## 8. How to change your GitHub link

**File:** `src/data/profile.js`

```js
github: "https://github.com/your-username",
```

This single value powers the Contact section and Footer icon automatically.

## 9. How to change your LinkedIn link

**File:** `src/data/profile.js`

```js
linkedin: "https://linkedin.com/in/your-profile",
```

## 10. How to change your email

**File:** `src/data/profile.js`

```js
email: "you@example.com",
```

## 11. How to replace your resume

Put your actual PDF file at `public/resume.pdf` (same filename). The "Download Resume" buttons in the Hero and Resume sections already point to `/resume.pdf` — no code changes needed.

If you'd rather use a different filename, update `resumeUrl` in `src/data/profile.js` to match.

## 12. How to change colors

**File:** `tailwind.config.js`, under `theme.extend.colors`.

The whole site is built from a small set of tokens:

```js
colors: {
  base: {
    DEFAULT: "#0A0E14", // page background
    raised: "#10151D",  // card backgrounds
    line: "#1E2530",    // borders
  },
  ink: {
    DEFAULT: "#E7EAEE", // main text
    muted: "#8B95A5",   // secondary text
  },
  signal: {
    DEFAULT: "#4FD1C5", // ← the single accent color used across the whole site
    bright: "#7BE8DC",  // hover state
    dim: "#2E8A80",     // subtle borders/backgrounds
  },
},
```

To change the accent color, replace the three `signal.*` hex values. To swap between a dark and light overall theme, you'd re-map the `base.*` and `ink.*` values (bigger change — not required for this brief, but the tokens are structured so it's possible).

## 13. How to change fonts

**Files:** `src/index.css` (Google Fonts import) and `tailwind.config.js` (`theme.extend.fontFamily`).

1. Swap the font names in the `@import url(...)` line at the top of `src/index.css`.
2. Update the matching entries in `tailwind.config.js`:

```js
fontFamily: {
  display: ["Space Grotesk", "system-ui", "sans-serif"], // headings
  body: ["Inter", "system-ui", "sans-serif"],             // paragraphs
  mono: ["JetBrains Mono", "ui-monospace", "monospace"],   // labels, tags
},
```

## 14. How to change sections (add, remove, reorder)

**File:** `src/App.jsx`

The page is just a list of section components:

```jsx
<Hero />
<About />
<Skills />
<Projects />
<Education />
<Certifications />
<Resume />
<Contact />
```

- **Reorder:** move a line up or down.
- **Remove:** delete the line (and remove its link from `src/components/Navbar.jsx` if you don't want it in the menu).
- **Add:** create a new component in `src/components/`, import it in `App.jsx`, and add it to the list.

---

## Contact form

The form in the Contact section currently only shows a confirmation message in the UI — it is **not connected to any email service**, so submissions are not actually sent anywhere yet. This is intentional: no backend is configured, and the site shouldn't pretend to send emails it can't.

The simplest beginner-friendly way to make it real is [Formspree](https://formspree.io):

1. Create a free Formspree account and a new form; copy the form endpoint it gives you (looks like `https://formspree.io/f/xxxxxxx`).
2. In `src/components/Contact.jsx`, change the `<form>` tag's `onSubmit` handler to instead `fetch` that endpoint with the form data, or simply set the form's `action` to that URL and `method="POST"` (Formspree's docs show both approaches).
3. Redeploy.

## Social preview image (optional)

`index.html` references `/og-image.jpg` for link previews on LinkedIn, Twitter/X, WhatsApp, etc. That file doesn't exist yet — add a 1200×630px image at `public/og-image.jpg` (e.g. a screenshot of your Hero section) if you want a rich preview when your link is shared. If you skip this, the site works fine; shared links just won't show a preview image.

## Future edits via chat

Because everything above lives in small, well-commented data files, you can describe changes in plain language (e.g. "add a new project," "change my bio," "add Python to my skills," "change the accent color to blue") and only the relevant data file or token needs to change — the layout and components stay the same.
