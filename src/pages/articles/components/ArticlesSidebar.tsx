import CategoryFilter from "./CategoryFilter";
import TagCloudFilter from "./TagCloudFilter";
import NewsletterSubscription from "./NewsletterSubscription";
import { type PostArticleType } from "@/types";

export interface ArticlesSidebarProps {
  posts: PostArticleType[];
}

export default function ArticlesSidebar({ posts }: ArticlesSidebarProps) {
  // categories
  const categoryMap = posts.reduce((acc, postItem) => {
    if (postItem.category) {
      acc.set(postItem.category, (acc.get(postItem.category) || 0) + 1);
    }
    return acc;
  }, new Map<string, number>());

  // tags
  const tagSet = new Set<string>();
  posts.forEach((postItem) => {
    postItem.tags?.forEach((tagItem) => tagSet.add(tagItem));
  });

  const availableCategories = Array.from(categoryMap.entries());
  const availableTags = Array.from(tagSet).sort();

  return (
    <aside className="flex flex-col gap-10 lg:col-span-4">
      <CategoryFilter availableCategories={availableCategories} />

      <TagCloudFilter availableTags={availableTags} />

      <NewsletterSubscription />
    </aside>
  );
}
