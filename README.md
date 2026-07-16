# Mohamad Sameel Ihsaan — Portfolio

Personal multi-page portfolio built with **Vite + React (JavaScript) + React Router + Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Scripts

- `npm run dev` – start the dev server
- `npm run build` – production build to `dist/`
- `npm run preview` – preview the production build

## Structure

```
src/
  assets/         # images (profile, project covers)
  components/     # Nav, Footer, PageHeader
  data/           # site info, projects, skills
  lib/            # theme provider
  pages/          # route components (Home, About, Skills, Services, Projects, Contact)
  App.jsx         # router shell
  main.jsx        # entry
  styles.css      # Tailwind v4 + design tokens
```

Add new projects by editing `src/data/projects.js`.
