# Amir Sadat — Portfolio

A premium, futuristic AI engineer portfolio built with React, Vite, Tailwind CSS, shadcn/ui, Framer Motion, and React Three Fiber.

## Stack

- [Vite](https://vite.dev/) + React
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://motion.dev/)
- [React Three Fiber](https://r3f.docs.pmnd.rs/) + drei
- [Lucide Icons](https://lucide.dev/)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages.

To enable it the first time: in the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.

The site is served from `/amirportfolio/` (configured via `base` in `vite.config.js`) to match this repo's GitHub Pages URL.
