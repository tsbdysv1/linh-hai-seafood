# PROJECT_CONTEXT

## What this project is

`linh-hai-seafood` is the current website codebase for Linh Hải Seafood.

Current stack:
- Vite
- React
- React Router
- ESLint
- Vercel deployment

Production URL:
- https://linh-hai-seafood.vercel.app

GitHub repo:
- https://github.com/tsbdysv1/linh-hai-seafood

## What has been done so far

### Phase 1 — import and deploy
Rooney found the local project in the workspace, initialized Git, connected it to the existing GitHub repo, pushed the code through a safe branch/PR flow, and deployed it to Vercel.

Important note:
- The repo already had an existing `main` history on GitHub.
- Because of that, Rooney used branch + PR flow instead of overwriting `main`.
- README conflict was resolved by keeping the existing simple repo title/description first.

### Phase 2 — technical foundation pass
Rooney then created a technical improvement round and merged it.

That round included:
- refactoring homepage code into a cleaner structure
- moving site-level config into `src/data/site.js`
- moving product data into `src/data/products.js`
- adding reusable components in `src/components/`
- adding page-level structure in `src/pages/`
- adding React Router routes
- adding product detail pages at `/san-pham/:slug`
- adding sticky mobile CTA buttons
- adding basic SEO title/description handling
- adding `TECH_DEBT.md` to preserve deferred business info

### Phase 3 — quick polish round
Rooney continued with a polish pass focused on quality, conversion flow, and maintainability without waiting on deferred business content.

That round included:
- adding canonical, Open Graph, and Twitter meta handling in the SEO hook
- making product pages pass pathname/image data into SEO metadata
- restructuring product pricing data so schema output uses numeric `priceValue`
- adding small commerce helpers for display price formatting, clean phone links, and product-specific Zalo inquiry links
- improving 404 recovery with direct paths back to catalog and contact CTA
- removing unused starter assets from the repo

### Phase 4 — production routing fix
After QA on the live deployment, Rooney found that direct visits to nested routes like `/san-pham/:slug` were returning Vercel 404 pages instead of loading the React app.

That round adds:
- `vercel.json` SPA rewrites so deep links resolve to `index.html`
- a deployment config note in the README so future collaborators do not accidentally remove the rewrite behavior

## Design / product direction so far

The current design direction is:
- clean seafood brand feel
- modern but simple landing page
- mobile-friendly first
- elegant blue / cream visual direction
- strong CTA toward calling or ordering via Zalo
- product catalog cards that can later become real product entries
- product detail pages that can later hold richer merchant content

### Why product detail pages were added
Danh wanted each product to have its own detail page so the site can later explain:
- health / nutrition benefits
- dish ideas
- how to prepare or use the product
- storage guidance
- richer sales copy

Rooney agreed this is the right direction because it gives the site more depth, helps future SEO, and makes the catalog easier to expand.

## Current structure

### Data
- `src/data/site.js` — site-level placeholders and SEO defaults
- `src/data/products.js` — product catalog placeholders and detail content

### Components
- `src/components/ProductCard.jsx`
- `src/components/StickyMobileBar.jsx`

### Pages
- `src/pages/HomePage.jsx`
- `src/pages/ProductDetailPage.jsx`

### Other key files
- `TECH_DEBT.md` — deferred business info and content backlog
- `README.md` — quick start / current repo overview

## What is still intentionally deferred

Business information is not final yet. These remain placeholders on purpose:
- phone number
- Zalo link
- address
- opening hours
- delivery area
- real catalog data
- real pricing
- slogan / final business copy
- social links
- final logo / brand assets

Also deferred:
- merchant-approved product narratives
- real health / nutrition claims
- real sourcing notes
- real storage guidance

Those are tracked in `TECH_DEBT.md`.

## Working style / process that has worked

So far, the best process has been:
1. make technical changes in a branch
2. open PR
3. preview on Vercel
4. merge to `main`
5. let production stay tied to `main`

This is the safest path for continuing work.

## Recommended next steps later

When Danh is ready, the next highest-value steps are:
1. replace placeholder business info
2. replace placeholder product content with real catalog data
3. improve product detail pages with merchant-approved copy
4. add LocalBusiness / Product structured data
5. improve SEO and social sharing metadata
6. possibly add a simple content workflow / CMS-like editing path

## Notes for future Rooney / future collaborators

If context is missing later, start by reading in this order:
1. `README.md`
2. `PROJECT_CONTEXT.md`
3. `TECH_DEBT.md`
4. `src/data/site.js`
5. `src/data/products.js`

That should be enough to understand both the technical state and the product intent.
