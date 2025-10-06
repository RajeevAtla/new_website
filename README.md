# Personal SvelteKit website

A polished, content-first personal site built with SvelteKit and Tailwind CSS. It ships as a fully static bundle, so you can deploy it to GitHub Pages with zero backend setup.

## Local development (PowerShell 7.6)

```powershell
npm install
npm run dev
```

The dev command prints a local URL. Hold Ctrl and click it in the terminal to open the site in your browser. Tailwind class changes and Svelte edits hot-reload instantly.

## Project structure

- `src/lib/config/site.ts` stores global metadata (name, tagline, email, links) and navigation items.
- `src/lib/data/*.ts` holds structured content for projects, experience, and skills.
- `src/routes` contains page components (`/`, `/about`, `/projects`, `/contact`) that render the content using shared UI primitives.
- `src/lib/components` bundles reusable layout pieces such as the header, footer, and section wrapper.

## Editing content

1. Update `siteConfig` in `src/lib/config/site.ts` with your details (name, socials, contact email).
2. Tweak projects and experience entries in `src/lib/data`. You can add or remove items; the UI adjusts automatically.
3. Adjust copy inside the page components to reflect your tone.
4. Tailor colors or fonts in `src/app.css` by editing the values inside the `@theme` block.

## Deploying to GitHub Pages

1. Push this repository to GitHub and open the **Settings -> Pages** panel.
2. Choose the GitHub Actions source. This repository already ships with `.github/workflows/build.yml` that builds and deploys the site automatically on every push to `main`.
3. The workflow sets the correct `BASE_PATH` for the project name and publishes the static `build` directory to the `gh-pages` environment.
4. (Optional) If you rename the repository or want to serve the site from a custom domain, update the `BASE_PATH` environment variable in the workflow or add a `static/CNAME` file.

## Handy scripts

- `npm run dev` - start the dev server with hot module replacement.
- `npm run build` - generate the prerendered static site in `build/`.
- `npm run check` - run Svelte check with strict TypeScript settings.

## Next ideas

- Replace placeholder data with real case studies and link previews.
- Add a blog or notes section by dropping Markdown files into `src/routes/blog` and parsing them with your preferred library.
- Integrate a form service (Formspree, Netlify Forms, etc.) for the contact page once you need submissions.
