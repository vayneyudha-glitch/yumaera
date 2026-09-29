# Yumaera Marketplace

LUMEA by Yumaera is a premium Indonesian marketplace storefront with catalog browsing, cart, checkout, order tracking, notifications, and seller/admin views.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/yumaera-marketplace/src/App.tsx` — storefront routes, cart state, order tracking, seller/admin views
- `artifacts/yumaera-marketplace/src/index.css` — LUMEA cream, ink, and brass theme tokens
- `artifacts/yumaera-marketplace/public/` — PWA manifest, service worker, favicon, and install icons
- `artifacts/api-server/src/routes/` — catalog, orders, notification, and dashboard API routes
- `lib/api-spec/openapi.yaml` — source of truth for the generated API client and Zod schemas

## Architecture decisions

- The first storefront build uses typed demo API routes so the complete buyer and seller flows are usable before connecting external commerce providers.
- Product imagery is served from stable remote image URLs while catalog persistence and uploads are still being wired.
- Cart state is intentionally local to the browser; orders and seller dashboard data flow through the shared API service.

## Product

- Buyers can browse and filter products, open product details, add to cart, checkout, view notifications, and track orders through a visual timeline.
- Sellers can view weekly sales, recent orders, low-stock signals, and advance an order into packing.
- Admins can review marketplace summary metrics and order statuses.
- The app can be installed as a PWA and includes print-friendly invoice output.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
