// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { satteri } from '@astrojs/markdown-satteri';

// https://astro.build/config
export default defineConfig({
  site: 'https://amuribe.github.io',
  integrations: [mdx()],
  markdown: {
    // Sätteri is Astro 7's default Markdown processor. Footnotes come from
    // GitHub-flavoured Markdown ([^1]); these options set their labels.
    processor: satteri({
      features: {
        gfm: {
          footnotes: {
            label: 'Notes',
            backContent: '↩',
            backLabel: 'Back to reference {reference}',
          },
        },
      },
    }),
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
    },
  },
});
