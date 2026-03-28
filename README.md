# linh-hai-seafood

Website for shop Linh Hải Seafood.

## Live site

- Production: https://linh-hai-seafood.vercel.app
- Repository: https://github.com/tsbdysv1/linh-hai-seafood

## Current stack

- Vite
- React
- React Router
- ESLint
- Vercel

## Current state

This project is already:
- deployed to Vercel
- connected to GitHub
- structured as a small product-focused landing site
- prepared for product detail pages at `/san-pham/:slug`

The current codebase intentionally uses placeholder business data in some places while the technical foundation is being built.

Recent polish work also added:
- reusable SEO/meta plumbing for page-level title, description, canonical, Open Graph, and Twitter tags
- cleaner product commerce helpers for phone links, Zalo inquiry links, and display pricing
- improved 404 recovery CTAs
- cleanup of unused starter assets

## Project files worth reading first

- `PROJECT_CONTEXT.md` — design/dev history and reasoning so far
- `TECH_DEBT.md` — deferred business info and content backlog
- `src/data/site.js` — current site-level config
- `src/data/products.js` — current product catalog data

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run lint
```

## Routing

- `/` — homepage
- `/san-pham/:slug` — product detail page

## Notes

- Business info like phone, Zalo, address, hours, and real product data are still pending final confirmation.
- The preferred workflow so far is: branch -> PR -> Vercel preview -> merge to `main`.
