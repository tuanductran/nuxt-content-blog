import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: "page",
      source: "articles/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        published: z.date(),
        slug: z.string(),
        cover: z.string(),
      }),
    }),
    bookmarks: defineCollection({
      type: "data",
      source: "bookmarks/**.yml",
      schema: z.object({
        name: z.string(),
        url: z.string(),
      }),
    }),
    notes: defineCollection({
      type: "page",
      source: "notes/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        published: z.date(),
        slug: z.string(),
        cover: z.string(),
      }),
    }),
    pages: defineCollection({
      type: "page",
      source: "pages/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        slug: z.string(),
        cover: z.string(),
      }),
    }),
    projects: defineCollection({
      type: "data",
      source: "projects/**.yml",
      schema: z.object({
        name: z.string(),
        description: z.string(),
        url: z.string(),
        language: z.string(),
        icon: z.string(),
      }),
    }),
    social: defineCollection({
      type: "data",
      source: "social/**.yml",
      schema: z.object({
        name: z.string(),
        url: z.string(),
        icon: z.string(),
      }),
    }),
    uses: defineCollection({
      type: "data",
      source: "uses/**.yml",
      schema: z.object({
        name: z.string(),
        description: z.string(),
        url: z.string(),
        category: z.string(),
      }),
    }),
  },
});
