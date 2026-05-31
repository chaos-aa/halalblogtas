import { defineCollection, z } from 'astro:content';

const restaurants = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    suburb: z.string(),
    cuisine: z.string(),
    rating: z.number().min(1).max(10),
    halal_status: z.enum(['Certified', 'Verified by author/community', 'Restaurant confirmed', 'Unverified']),
    visited: z.date(),
  }),
});

export const collections = { restaurants };
