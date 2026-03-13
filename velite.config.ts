import { defineConfig, s } from "velite";
import rehypePrettyCode from "rehype-pretty-code";

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: {
    posts: {
      name: "Post",
      pattern: "posts/**/*.md",
      schema: s.object({
        title: s.string().max(99),
        slug: s.slug("posts"),
        date: s.isodate(),
        excerpt: s.string().optional(),
        category: s.string().optional(),
        cover: s.string().optional(),
        coverAlt: s.string().optional(),
        metadata: s.metadata().optional(),
        tags: s.array(s.string()).optional(),
        content: s.markdown(),
      }),
    },
  },
  markdown: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: {
            light: "github-light",
            dark: "github-dark",
          },
        },
      ],
    ],
  },
});
