import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Projects are written like short papers (see docs/brand-brief.md §4).
 * Every field here is checked at build time, so a missing abstract fails the build.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Plain-language, 2–3 sentences, no jargon. */
      abstract: z.string(),
      start: z.coerce.date(),
      end: z.coerce.date().optional(), // omit for ongoing
      role: z.string(),
      stack: z.array(z.string()),
      demo: z.url().optional(),
      source: z.url().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      featured: z.boolean().default(false),
      /** Position among featured projects on the home page (lower first). */
      order: z.number().default(99),
      draft: z.boolean().default(false),
    }),
});

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

/** Books, films and music, listed like a bibliography. Edit src/data/shelf.yaml. */
const shelf = defineCollection({
  loader: file('./src/data/shelf.yaml'),
  schema: z.object({
    medium: z.enum(['book', 'film', 'music']),
    title: z.string(),
    creator: z.string(), // author, director, or artist
    year: z.number().int(),
    note: z.string().optional(), // a line in your own words
    current: z.boolean().default(false), // shows in the home page "Currently" line
    link: z.url().optional(),
  }),
});

export const collections = { projects, writing, shelf };
