# Amir Sadat — Portfolio

A premium, futuristic AI engineer portfolio built with React, Vite, Tailwind CSS, shadcn/ui, Framer Motion, and React Three Fiber.

**Live site:** https://amirsadat1980-lgtm.github.io/amirportfolio/

## Featured projects

Each project below is a real, standalone repository with its own test suite and a live demo hosted on GitHub Pages, generated from the project's own real (not fabricated) output.

| Project | Live demo | Source |
| --- | --- | --- |
| RAG Knowledge Assistant | [Demo](https://amirsadat1980-lgtm.github.io/rag-knowledge-assistant/) | [GitHub](https://github.com/amirsadat1980-lgtm/rag-knowledge-assistant) |
| AI Content Quality Workflow | [Demo](https://amirsadat1980-lgtm.github.io/ai-content-quality-workflow/) | [GitHub](https://github.com/amirsadat1980-lgtm/ai-content-quality-workflow) |
| Prompt Evaluation Framework | [Demo](https://amirsadat1980-lgtm.github.io/prompt-evaluation-framework/) | [GitHub](https://github.com/amirsadat1980-lgtm/prompt-evaluation-framework) |
| Prompt Safety & Evaluation Toolkit | [Demo](https://amirsadat1980-lgtm.github.io/prompt-safety-toolkit/) | [GitHub](https://github.com/amirsadat1980-lgtm/prompt-safety-toolkit) |

## Live RAG Q&A demo

The site includes a "Try It Live" section where visitors can ask a question and get a real, grounded answer — a small retrieval-augmented-generation (RAG) pipeline backed by a real OpenAI API call.

- **Frontend:** [`src/components/sections/LiveDemo.jsx`](src/components/sections/LiveDemo.jsx) — a question box that posts to a Cloudflare Worker.
- **Backend:** [`worker/`](worker) — a standalone Cloudflare Worker, deployed separately from the static site. It embeds the visitor's question, does a cosine-similarity search over a small precomputed knowledge base ([`worker/src/knowledge.js`](worker/src/knowledge.js)), and asks OpenAI (`gpt-4o-mini` via the Responses API) to answer using only the retrieved context.
- **The OpenAI API key never touches the frontend.** It's stored as a Cloudflare Worker secret and only ever used server-side.
- **Abuse protection:** CORS restricted to this site's real origin, per-IP rate limiting (5/hour) and a global daily cap, enforced via Workers KV; strict input validation (3–300 characters, size-capped request body); generic error responses that never leak upstream details.

See [`worker/wrangler.toml`](worker/wrangler.toml) and [`worker/package.json`](worker/package.json) for the Worker's own dev/deploy commands (`npm run build-embeddings`, `npm run deploy`, etc.) — it's developed and deployed independently of the Vite frontend via Wrangler.

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

## Contact

- Email: [amir.sadat1980@gmail.com](mailto:amir.sadat1980@gmail.com)
- GitHub: [github.com/amirsadat1980-lgtm](https://github.com/amirsadat1980-lgtm)
- LinkedIn: [linkedin.com/in/amir-sadat-442349168](https://www.linkedin.com/in/amir-sadat-442349168/)
