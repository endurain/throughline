import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { site } from './config/site';

// Labs posts. A malformed frontmatter block fails the build.
const labs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/labs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default(site.owner),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { labs };
