import { useArticleStore } from "@/store/useArticleStore";
import { cn } from "@/lib/utils";

/**
 * PostSearchBar - 專門用於搜尋文章的獨立元件
 * 從 useArticleStore 取得搜尋狀態並進行控制。
 */
export default function PostSearchBar() {
  const { searchQuery, setSearchQuery } = useArticleStore();

  return (
    <div className="w-full">
      <label className="flex h-14 w-full flex-col">
        <span className="sr-only">Search articles</span>
        <div
          className={cn(
            "group flex h-full w-full flex-1 items-stretch overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm transition-all duration-300 ease-in-out",
            "focus-within:border-accent/40 focus-within:ring-4 focus-within:ring-accent/10",
            "dark:border-white/10 dark:bg-slate-800 dark:focus-within:border-accent/40",
          )}>
          {/* Search Icon Container */}
          <div className="flex items-center justify-center bg-inherit pl-4 text-primary/50 transition-all duration-300 ease-in-out dark:text-slate-400">
            <span className="material-symbols-outlined transition-all duration-300 ease-in-out group-focus-within:text-accent">
              search
            </span>
          </div>

          {/* Search Input */}
          <input
            className={cn(
              "form-input flex h-full w-full min-w-0 flex-1 border-none bg-inherit px-4 text-base font-normal transition-all duration-300 ease-in-out focus:ring-0",
              "text-primary placeholder:text-primary/40",
              "dark:text-slate-100 dark:placeholder:text-slate-500",
            )}
            placeholder="Search the archives..."
            aria-label="Search the archives"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </label>
    </div>
  );
}
