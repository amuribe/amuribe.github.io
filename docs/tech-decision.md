# Tech Decision: Stack and Hosting

> **Status: decided (2026-11-10).** Astro, static output, hosted on GitHub Pages.
> Reconsidered against Next.js, Zola, plain HTML and a custom Rust generator. Astro won because the site is mostly content, and occasionally interactive inside figures.

## Decision: Astro + GitHub Pages

### What Astro is (in one paragraph)
Astro is a framework for **content-heavy static sites**. You write pages as `.astro` files: plain HTML with a TypeScript block at the top, which reads a lot like a JSX component. Blog posts and project write-ups are **Markdown/MDX files** in a folder, with typed frontmatter (title, date, stack, demo URL…) validated by a schema. At build time Astro turns all of this into plain HTML/CSS and ships **zero JavaScript by default**.

### Why it fits you
- **Your React + TypeScript skills carry over.** When you want a playful interactive figure later, you write a normal React component and drop it into a page or MDX file (`<PrinterMap client:visible />`). Only that component ships JS. Astro calls these "islands".
- **Content-first.** Adding a project = adding one `.mdx` file. That matches the "paper" structure exactly.
- **Fast and accessible by default.** Static HTML, no hydration overhead, and a good Lighthouse score without extra effort.
- **GitHub Pages.** There's an official `withastro/action` GitHub Action: push to `main` → the site deploys.
- **Plain CSS works great.** The design system becomes one `tokens.css` file, with no Tailwind required. That's also less likely to look generic.

### Alternatives considered
| Option | Verdict |
|---|---|
| **Next.js** (static export) | Works, and you know React. But it's built for apps, so it's heavier, and features like image optimization need workarounds on GitHub Pages. |
| **Zola** (Rust static site generator) | A single binary, fast, and uses your Rust. But it's template-based (Tera), and adding interactive JS pieces later is manual. A good choice if you never want JS. |
| **Plain HTML/CSS** | Maximum control, but writing every project and post page by hand gets tedious. |

### Hosting
- **Now:** GitHub Pages at `https://<username>.github.io` (the repo is named `<username>.github.io`), or a project repo at `/<repo>`.
- **Later:** buy a domain (e.g. `amudev.dev` / `amudev.ca`), then add a `CNAME` file and DNS records. Free HTTPS through GitHub.
- No contact form at launch: a `mailto:` link avoids needing a backend.

### Proposed project shape (for the build phase)
```
src/
  styles/tokens.css      ← design-system.md §1–3 as CSS variables
  styles/base.css
  layouts/Base.astro     ← header, footer, theme script
  layouts/Paper.astro    ← project/post layout (abstract, figures, sidenotes)
  components/            ← Figure, Sidenote, Abstract, Byline, ThemeToggle…
  content/projects/*.mdx
  content/writing/*.mdx
  pages/ index, projects/, writing/, about, 404
public/ resume.pdf, images
.github/workflows/deploy.yml
```
