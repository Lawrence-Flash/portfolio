# Portfolio

Personal site for Sphamandla Lawrence Tshabalala, a junior DevSecOps engineer and cybersecurity analyst in South Africa. Project cards link to public GitHub repositories and describe only what those repositories contain.

## Stack

- React 19
- Vite 8
- Oxlint

`vite.config.js` sets the production base path to `/portfolio/`, which matches a GitHub Pages project site.

## Run locally

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run build
```

`npm run preview` serves the production build.

## Deploy config already in the repo

`package.json` has `predeploy` and `deploy` scripts. `npm run deploy` publishes the `dist/` folder with the `gh-pages` package. A `gh-pages` branch already exists on the remote. This repository has no GitHub Actions workflow, and no Vercel or Netlify config. Deployment was not set up or run as part of the content update.
