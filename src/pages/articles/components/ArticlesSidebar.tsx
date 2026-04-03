import CategoryFilter from "./CategoryFilter";
import TagCloudFilter from "./TagCloudFilter";
import NewsletterSubscription from "./NewsletterSubscription";

export interface ArticlesSidebarProps {
  categoryCounts: [string, number][];
  activeCategory: string | null;
  onSelectCategory: (targetCategory: string | null) => void;
  availableTags: string[];
  selectedTags: string[];
  onToggleTag: (toggleTarget: string) => void;
}

export default function ArticlesSidebar({
  categoryCounts,
  activeCategory,
  onSelectCategory,
  availableTags,
  selectedTags,
  onToggleTag,
}: ArticlesSidebarProps) {
  return (
    <aside className="flex flex-col gap-10 lg:col-span-4">
      <CategoryFilter
        categoryCounts={categoryCounts}
        activeCategory={activeCategory}
        onSelectCategory={onSelectCategory}
      />

      <TagCloudFilter availableTags={availableTags} selectedTags={selectedTags} onToggleTag={onToggleTag} />

      <NewsletterSubscription />
    </aside>
  );
}
