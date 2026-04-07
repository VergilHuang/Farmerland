import { useMemo } from "react";
import { useArticleStore } from "@/store/useArticleStore";
import { posts } from "../../../.velite";
import FarmPagination from "@/components/FarmPagination";
import PostArticleCard from "./components/PostArticleCard";
import ArticlesSidebar from "./components/ArticlesSidebar";
import PostSearchBar from "./components/PostSearchBar";

export default function Articles() {
  const {
    currentPage,
    setCurrentPage,
    searchQuery,
    selectedCategory,
    selectedTags,
    clearFilters,
    setSelectedCategory,
    toggleTag,
  } = useArticleStore();

  const pageSize = 6;

  // 篩選條件後的文章
  const filteredPosts = useMemo(() => {
    return posts
      .filter((postItem) => {
        const matchesSearch =
          postItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          postItem.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory ? postItem.category === selectedCategory : true;
        const matchesTags =
          selectedTags.length > 0 ? selectedTags.every((tagItem) => postItem.tags?.includes(tagItem)) : true;

        return matchesSearch && matchesCategory && matchesTags;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [searchQuery, selectedCategory, selectedTags]);

  // 分頁後需要呈現的文章
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredPosts.slice(startIndex, startIndex + pageSize);
  }, [filteredPosts, currentPage, pageSize]);

  return (
    <div className="flex flex-1 justify-center px-4 py-10 md:px-20">
      <div className="grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Main Content Area */}
        <div className="flex flex-col gap-8 lg:col-span-8">
          {/* Search Bar Section */}
          <PostSearchBar />

          <div className="flex items-baseline justify-between border-b border-primary/10 pb-4 dark:border-white/10">
            <h1 className="text-3xl font-bold tracking-tight text-primary dark:text-slate-100">Latest Articles</h1>
            <span className="text-sm font-medium text-primary/60 dark:text-slate-400">Sorted by date</span>
          </div>

          {/* Active Filters */}
          {(selectedCategory || selectedTags.length > 0) && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-primary/60 dark:text-slate-400">Filters:</span>
              {selectedCategory && (
                <button
                  onClick={() => setSelectedCategory(null)}
                  aria-label={`移除分類過濾：${selectedCategory}`}
                  className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary transition-colors hover:bg-primary/20 dark:bg-slate-700 dark:text-slate-200">
                  {selectedCategory}
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              )}
              {selectedTags.map((targetTag) => (
                <button
                  key={targetTag}
                  onClick={() => toggleTag(targetTag)}
                  aria-label={`移除標籤：${targetTag}`}
                  className="flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent transition-colors hover:bg-accent/20">
                  {targetTag}
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              ))}
              <button
                onClick={clearFilters}
                aria-label="清除所有過濾條件"
                className="ml-2 text-sm text-primary/50 hover:text-primary dark:text-slate-500 dark:hover:text-slate-300">
                Clear All
              </button>
            </div>
          )}

          {/* Article List */}
          <div className="flex flex-col gap-10">
            {paginatedPosts.length === 0 ? (
              <div className="py-10 text-center text-primary/60 dark:text-slate-400">
                <p>No articles found matching your criteria.</p>
              </div>
            ) : (
              paginatedPosts.map((postItem) => <PostArticleCard key={postItem.slug} postItem={postItem} />)
            )}
          </div>

          <FarmPagination
            currentPage={currentPage}
            totalCount={filteredPosts.length}
            pageSize={pageSize}
            onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
          />
        </div>

        <ArticlesSidebar posts={posts} />
      </div>
    </div>
  );
}
