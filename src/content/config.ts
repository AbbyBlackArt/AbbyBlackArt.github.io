import { defineCollection, z } from "astro:content";

const projects = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        draft: z.boolean().optional(),
        demoURL: z.string().optional(),
        repoURL: z.string().optional(),
    }),
});

const works = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            summary: z.string().optional(),
            images: z.array(z.object({
                file: image(),
                title: z.string().optional(),
                description: z.string().optional(),
            })).min(1),
            categories: z.array(z.string()).optional(),
            date: z.coerce.date().optional(),
            draft: z.boolean().optional(),
        }),
});

const exhibitions = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        location: z.string(),
        date: z.coerce.date(),
        draft: z.boolean().optional(),
    }),
});

export const collections = { projects, works, exhibitions };
