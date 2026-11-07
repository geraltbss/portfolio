# Buddhima Senarathna's portfolio

A personal portfolio built with Next.js, TypeScript, and Tailwind CSS. It highlights selected projects in data, AI, finance, and bioinformatics.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run build
```

The production build is statically exported to `out/`.

## Deploy to GitHub Pages

1. Push this project to a GitHub repository.
2. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
3. Push to the `main` branch. The workflow in `.github/workflows/nextjs.yml` builds the static site and deploys it.

The workflow configures the Next.js base path from the repository name, so it supports both project sites and `username.github.io` sites.

## Customize

- Update project descriptions, links, and technology tags in `src/app/page.tsx`.
- Adjust the page layout and visual styling in `src/app/globals.css`.
- Edit the page title and description in `src/app/layout.tsx`.
