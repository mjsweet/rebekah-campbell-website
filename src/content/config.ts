import { defineCollection, z } from 'astro:content';

// Articles collection
const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('Rebekah Campbell'),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
});

// Videos collection
const videos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    videoUrl: z.string().optional(),
    embedCode: z.string().optional(),
    thumbnail: z.string().optional(),
    duration: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  articles,
  videos,
};
