import { useArticleStore } from "@/store/useArticleStore";

export interface CategoryFilterProps {
  availableCategories: [string, number][];
}

export default function CategoryFilter({ availableCategories }: CategoryFilterProps) {
  const { selectedCategory, setSelectedCategory } = useArticleStore();

  if (availableCategories.length === 0) return null;

  return (
    <section className="rounded-xl border border-primary/10 bg-white p-6 shadow-sm transition-colors duration-500 ease-in-out dark:border-white/5 dark:bg-slate-800">
      <h4 className="mb-4 flex items-center gap-2 text-lg font-bold text-primary dark:text-slate-100">
        <span className="material-symbols-outlined text-accent">category</span>
        Categories
      </h4>
      <ul className="flex flex-col gap-3">
        {availableCategories.map(([categoryName, postCount]) => (
          <li key={categoryName}>
            <button
              onClick={() => setSelectedCategory(selectedCategory === categoryName ? null : categoryName)}
              aria-label={`過濾分類：${categoryName}`}
              className="group flex w-full items-center justify-between">
              <span
                className={`transition-colors ${
                  selectedCategory === categoryName
                    ? "font-bold text-accent"
                    : "text-primary/70 group-hover:text-accent dark:text-slate-300"
                }`}>
                {categoryName}
              </span>
              <span className="rounded-full bg-primary/5 px-2 py-1 text-xs font-bold text-primary/60 dark:bg-slate-700 dark:text-slate-400">
                {postCount}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
