# Personal Website (new)

This repository contains the source code for my personal site, built with SvelteKit and Tailwind CSS.

## Features

- Fully static build served via GitHub Pages using `@sveltejs/adapter-static`
- Home, About, Projects, and Contact pages driven by structured data in `src/lib/data`
- Global layout with a light/dark theme toggle that persists the user's preference
- Reusable UI primitives (`SiteHeader`, `PageSection`, `SiteFooter`) for consistent styling
- Tailwind v4 design tokens and gradients configured in `src/app.css`

## Tech Stack

- SvelteKit 2
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- TypeScript
- GitHub Actions for automated builds and deployments

## Getting Started

```bash
npm install
npm run dev
```

Visit the printed localhost URL to view the site. Edits to Svelte components, Tailwind classes, or data files hot-reload immediately.

## Project Structure

- `src/lib/config/site.ts` - Global metadata (name, tagline, socials, contact email)
- `src/lib/data` - Structured content for projects, experience, and skills
- `src/lib/components` - Shared UI components and the theme toggle
- `src/routes` - Page components for `/`, `/about`, `/projects`, and `/contact`
- `src/lib/stores/theme.ts` - Handles light/dark mode persistence and system preference detection

## Useful Commands

- `npm run dev` - Start the local development server
- `npm run check` - Run `svelte-check` with the repo's TypeScript configuration
- `npm run build` - Produce a prerendered static build in `build/`
- `npm run preview` - Preview the production build locally

## Deployment

GitHub Actions (`.github/workflows/build.yml`) installs dependencies, sets the correct `BASE_PATH`, 
runs the type checks, 
and builds the static site. 
The `build/` output is published to GitHub Pages automatically on pushes to `main`.

If you fork or rename the repository, update the environment variables in the workflow or add a `static/CNAME` file for a custom domain.
