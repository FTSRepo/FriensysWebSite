import { defineConfig, defineCollection, s } from "velite";

const posts = defineCollection({
  name: "Post",
  pattern: "posts/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(120),
      description: s.string().max(200),
      date: s.isodate(),
      updated: s.isodate().optional(),
      author: s.string().default("Friensys"),
      tags: s.array(s.string()).default([]),
      cover: s.string().optional(),
      ogImage: s.string().optional(),
      published: s.boolean().default(true),
      content: s.raw(),
      excerpt: s.excerpt(),
      metadata: s.metadata(),
    })
    .transform((data) => ({
      ...data,
      slug: data.slug.replace(/^posts\//, ""),
      url: `/blog/${data.slug.replace(/^posts\//, "")}`,
      readingTime: data.metadata.readingTime,
    })),
});

const legal = defineCollection({
  name: "Legal",
  pattern: "legal/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(120),
      description: s.string().max(200),
      updated: s.isodate(),
      content: s.raw(),
    })
    .transform((data) => ({
      ...data,
      slug: data.slug.replace(/^legal\//, ""),
      url: `/legal/${data.slug.replace(/^legal\//, "")}`,
    })),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts, legal },
});
