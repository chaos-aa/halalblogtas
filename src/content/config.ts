import { defineCollection, z } from 'astro:content';

const restaurants = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    suburb: z.string(),
    cuisine: z.string(),
    rating: z.number().min(1).max(10),
    price: z.enum(['$', '$$', '$$$', '$$$$']),
    visited: z.date(),
    tags: z.array(z.string()),
    address: z.string().optional(),
    highlight: z.string(), // one-line summary shown on cards
    recommended_dishes: z.array(z.string()).optional(),
    would_return: z.boolean().default(true),
  }),
});

export const collections = { restaurants };
