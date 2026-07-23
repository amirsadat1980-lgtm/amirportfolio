# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Amir Sadat's personal portfolio site: a static React SPA (Vite + Tailwind v4 + shadcn/ui + Framer Motion + React Three Fiber) deployed to GitHub Pages, plus a small standalone Cloudflare Worker (`worker/`) that powers a live RAG Q&A demo embedded in the site. The two are separate npm projects with separate dependency trees, deployed independently.

## Commands

All frontend commands run from the repo root.

```bash
npm install       # install frontend deps
npm run dev        # start Vite dev server
npm run build       # production build to dist/ (builds both index.html and presentation.html — see vite.config.js rollupOptions.input)
npm run preview      # preview the production build locally
npm run lint        # oxlint (see .oxlintrc.json — react/rules-of-hooks is an error)
```

There is no test suite in this repo (the RAG/eval/safety test suites referenced on the site live in the *other*, separate project repos linked from `src/data/projects.js`, not here).

The Worker (`worker/`) has its own `package.json` and is developed/deployed independently via Wrangler:

```bash
cd worker
npm install
npm run dev            # wrangler dev (local worker, needs worker/.dev.vars — copy from .dev.vars.example)
npm run deploy          # wrangler deploy
npm run tail            # wrangler tail (live prod logs)
OPENAI_API_KEY=sk-... npm run build-embeddings   # regenerate worker/src/data/embeddings.json after editing worker/src/knowledge.js
```

## Architecture

### Two Vite entry points, one app codebase

`vite.config.js` builds two separate HTML entry points from `src/`:
- `index.html` → `src/main.jsx` → `src/App.jsx` — the main portfolio site, a straight-line composition of section components (`Navbar`, `Hero`, `About`, `Skills`, `Projects`, `LiveDemo`, `Experience`, `Contact`, `Footer`) from `src/components/sections/`.
- `presentation.html` → `src/presentation/main.jsx` → `src/presentation/PresentationApp.jsx` — a separate slide-deck app (`noindex` in its meta tags) under `src/presentation/`, with its own slide components in `src/presentation/slides/` registered as an ordered array in `src/presentation/slides/index.js`. Slides are numerically prefixed (`01-Opening.jsx`, etc.); note some numbers are reused/out of order (`06-`/`07-`/`08-` appear twice) — check `slides/index.js` for actual presentation order, not filenames.

Both entry points share `src/index.css`, the `@/` path alias (→ `src/`, configured in both `vite.config.js` and `jsconfig.json`), and the same CSP defined redundantly in `index.html` and `presentation.html` — **update both if you change either**.

### Content is data-driven

Site copy/content lives in `src/data/*.js` (`profile.js`, `projects.js`, `experience.js`, `skills.js`) as plain exported objects/arrays, imported by section components — not hardcoded in JSX. `src/presentation/data/projectDetails.js` is the presentation deck's equivalent. When asked to change site copy or add/edit a project, edit these data files rather than the components.

### UI conventions

- shadcn/ui components live in `src/components/ui/` (config in `components.json`, style "new-york", no RSC/TSX). Add new shadcn components the standard shadcn-cli way if needed; otherwise treat these as generated/vendored and prefer composing them over editing internals.
- `cn()` in `src/lib/utils.js` (clsx + tailwind-merge) is the standard way to compose conditional Tailwind classes throughout the codebase.
- `Reveal` (`src/components/motion/Reveal.jsx`) is the shared scroll-in-view Framer Motion wrapper used across section components — reuse it instead of writing ad hoc `whileInView` animations.
- Assets referenced from data files use `import.meta.env.BASE_URL` (see the `asset()` helper in `src/data/projects.js`) since the site is served from a subpath (`/amirportfolio/`), not the domain root.

### The Live Demo: frontend/Worker split

`src/components/sections/LiveDemo.jsx` is a plain fetch client with no framework-level API layer — it POSTs `{ question }` to `${import.meta.env.VITE_DEMO_API_URL}/api/demo` (set via `.env.production`, gitignored `.env.local` for dev) and renders the JSON response. If `VITE_DEMO_API_URL` is unset, the section renders a "not configured" placeholder instead of failing.

The Worker (`worker/src/index.js`) is a single-file Cloudflare Worker handler that, per request:
1. Validates CORS origin against `ALLOWED_ORIGINS` (set in `worker/wrangler.toml`).
2. Enforces a global daily cap and a per-IP hourly rate limit via Workers KV (`RATE_LIMIT` binding).
3. Validates/sanitizes the question (length bounds, control-char stripping, body-size cap).
4. Embeds the question with OpenAI (`text-embedding-3-small`), does in-memory cosine-similarity retrieval over `worker/src/data/embeddings.json` (top-3 chunks), then calls OpenAI's Responses API (`gpt-4o-mini`) constrained to answer only from retrieved context.

`worker/src/data/embeddings.json` is a **precomputed, committed artifact** — it is not regenerated automatically. If you edit `worker/src/knowledge.js` (the source knowledge base), you must re-run `npm run build-embeddings` (from `worker/`, with `OPENAI_API_KEY` set) and commit the regenerated JSON, or the Worker will keep answering from stale knowledge.

`OPENAI_API_KEY` is a Worker secret (`wrangler secret put OPENAI_API_KEY`), never a `wrangler.toml` var and never committed — it only ever runs server-side in the Worker, never reaches the frontend bundle.

### Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`: `npm ci && npm run build`, then deploys `dist/` to GitHub Pages via `actions/deploy-pages`. The Worker is **not** part of this pipeline — it's deployed manually/separately via `npm run deploy` from `worker/` using Wrangler.

## Secrets and env files

Per `.gitignore`, all `.env*` files are ignored by default except two explicit allowlisted exceptions: `.env.example` (template) and `.env.production` (committed — it only holds the public Worker URL, not a secret). Similarly `worker/.dev.vars*` is ignored except `worker/.dev.vars.example`. Don't break this pattern by committing a real `.env.local` or `worker/.dev.vars`.
