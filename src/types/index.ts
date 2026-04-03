import { z } from "zod";

const PostSchema = z.object({
  content: z.string(),
  date: z.string(),
  title: z.string(),
  slug: z.string(),
  excerpt: z.string().optional(),
  category: z.string().optional(),
  cover: z.string().optional(),
  coverAlt: z.string().optional(),
  metadata: z.any().optional(),
  tags: z.array(z.string()).optional(),
});

export { PostSchema };

export type PostArticleType = z.infer<typeof PostSchema>;
