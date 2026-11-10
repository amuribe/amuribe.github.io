# AMUdev

Personal site of Alex McPherson Uribe. Built with [Astro](https://astro.build), deployed to GitHub Pages at <https://amuribe.github.io>.

## Develop

Requires Node ≥ 22.23.4 (see `.nvmrc`).

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # type-check + build to dist/
npm run preview    # serve the built site
```

## Where things live

| What | Where |
|---|---|
| Design tokens (colors, type, spacing) | `src/styles/tokens.css` |
| Base element styles | `src/styles/base.css` |
| Name, email, links, nav | `src/site.ts` |
| Logo / wordmark | `src/components/Wordmark.astro` |
| Projects (one file each) | `src/content/projects/*.mdx` |
| Blog posts | `src/content/writing/*.mdx` |
| Books, films, music | `src/data/shelf.yaml` |
| Content schemas (required fields) | `src/content.config.ts` |
| Design specimen page | `/styleguide` |
| Brand brief and design system | `docs/` |

Pushing to `main` deploys automatically (`.github/workflows/deploy.yml`).
