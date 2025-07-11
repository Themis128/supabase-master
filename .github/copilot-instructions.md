# Copilot Instructions for supabase/supabase-monorepo

## Project Architecture
- **Monorepo managed by Turborepo**: All apps and packages are in a single repo, with shared code in `/packages` and apps in `/apps`.
- **Major apps**: `www` (main site), `studio` (dashboard, requires Docker), `docs` (Next.js-based documentation), and others under `/apps`.
- **Shared packages**: UI, config, data, and AI helpers are in `/packages/*`.
- **Federated docs**: Docs can be sourced from external repos and integrated at build time using Next.js `getStaticProps` and custom MDX plugins.

## Developer Workflows
- **Install dependencies**: `pnpm install` at the repo root.
- **Start all apps**: `pnpm dev` (runs all apps concurrently).
- **Run a single app**: `pnpm dev:<scope>` (e.g., `pnpm dev:www`).
- **Add a package to a workspace**: `cd` into the workspace, then `pnpm add <package>`.
- **Studio dashboard**: Requires Docker. See `/docker` for setup. Use `docker compose up` after copying `.env.example` to `.env`.
- **Build, test, lint**: Use `pnpm build`, `pnpm test`, `pnpm lint` (or with scope, e.g., `pnpm build:docs`).

## Project Conventions & Patterns
- **Environment variables**: Copy `.env.local.example` to `.env.local` in each app as needed.
- **Redirects**: Add to `apps/www/lib/redirects.js` for main site redirects.
- **Docs build pipeline**: Uses custom MDX plugins for link and markdown extension support. See `apps/docs/lib/mdx/plugins/`.
- **External docs integration**: Reference `apps/docs/pages/guides/ai/python/[slug].tsx` for federated doc examples.
- **No issue assignment**: Contributors self-select issues; communicate in GitHub Issues to avoid duplicate work.

## Integration Points
- **Supabase CLI**: Used for local development and running Supabase services.
- **Docker**: Required for running the Studio dashboard and some services.
- **External docs**: Integrated via build-time fetch and transformation.

## Key Files & Directories
- `/apps` — All main applications
- `/packages` — Shared code and utilities
- `/docker` — Docker setup for local services
- `/apps/docs/lib/mdx/plugins/` — Custom MDX/remark/rehype plugins
- `/apps/www/lib/redirects.js` — Main site redirects
- `/DEVELOPERS.md` — Full contributor/developer guide

## Example Commands
- `pnpm install` — Install all dependencies
- `pnpm dev` — Start all apps
- `pnpm dev:www` — Start only the main site
- `docker compose up` (in `/docker`) — Start Studio dashboard

---
For more details, see `/DEVELOPERS.md` and app-specific READMEs. If you encounter non-obvious patterns or workflows, document them here for future agents.
