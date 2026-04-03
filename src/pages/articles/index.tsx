import { useArticleStore } from "@/store/useArticleStore";
import { posts } from "../../../.velite";
import { useMemo } from "react";
import { Link } from "react-router-dom";

export default function Articles() {
  const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, selectedTags, toggleTag, clearFilters } =
    useArticleStore();

  const categories = useMemo(() => {
    const counts: Record<string, number> = {};
    posts.forEach((post) => {
      if (post.category) {
        counts[post.category] = (counts[post.category] || 0) + 1;
      }
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, []);

  const tags = useMemo(() => {
    const allTags = new Set<string>();
    posts.forEach((post) => {
      post.tags?.forEach((tag) => allTags.add(tag));
    });
    return Array.from(allTags).sort();
  }, []);

  const filteredPosts = useMemo(() => {
    return posts
      .filter((post) => {
        const matchesSearch =
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
        const matchesTags = selectedTags.length > 0 ? selectedTags.every((tag) => post.tags?.includes(tag)) : true;

        return matchesSearch && matchesCategory && matchesTags;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [searchQuery, selectedCategory, selectedTags]);

  return (
    <div className="flex flex-1 justify-center px-4 py-10 md:px-20">
      <div className="grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Main Content Area */}
        <div className="flex flex-col gap-8 lg:col-span-8">
          {/* Search Bar Section */}
          <div className="w-full">
            <label className="flex h-14 w-full flex-col">
              <div className="flex h-full w-full flex-1 items-stretch overflow-hidden rounded-xl border border-primary/10 shadow-sm">
                <div className="flex items-center justify-center bg-white pl-4 text-primary/50 dark:bg-slate-800">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="form-input flex h-full w-full min-w-0 flex-1 border-none bg-white px-4 text-base font-normal placeholder:text-primary/40 focus:ring-0 dark:bg-slate-800 dark:text-slate-100"
                  placeholder="Search the archives..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </label>
          </div>

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
                  className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary transition-colors hover:bg-primary/20 dark:bg-slate-700 dark:text-slate-200">
                  {selectedCategory}
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              )}
              {selectedTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className="flex items-center gap-1 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent transition-colors hover:bg-accent/20">
                  {tag}
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              ))}
              <button
                onClick={clearFilters}
                className="ml-2 text-sm text-primary/50 hover:text-primary dark:text-slate-500 dark:hover:text-slate-300">
                Clear All
              </button>
            </div>
          )}

          {/* Article List */}
          <div className="flex flex-col gap-10">
            {filteredPosts.length === 0 ? (
              <div className="py-10 text-center text-primary/60 dark:text-slate-400">
                <p>No articles found matching your criteria.</p>
              </div>
            ) : (
              filteredPosts.map((post) => (
                <article key={post.slug} className="group @container">
                  <div className="flex flex-col gap-6 @xl:flex-row">
                    <div
                      className="aspect-video w-full rounded-xl bg-cover bg-center transition-transform duration-300 group-hover:scale-[1.02] @xl:w-1/3"
                      title={post.coverAlt || post.title}
                      style={{
                        backgroundImage: `url('${post.cover || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}')`,
                      }}
                    />
                    <div className="flex flex-1 flex-col justify-between py-1">
                      <div>
                        {post.category && (
                          <p className="mb-2 text-xs font-bold tracking-wider text-accent uppercase">{post.category}</p>
                        )}
                        <h3 className="mb-3 text-2xl leading-tight font-bold text-primary transition-colors group-hover:text-accent dark:text-slate-100">
                          {post.title}
                        </h3>
                        <p className="mb-4 line-clamp-2 text-base leading-relaxed text-primary/70 dark:text-slate-400">
                          {post.excerpt || post.content.substring(0, 150) + "..."}
                        </p>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-primary/50 dark:text-slate-500">
                          <span className="material-symbols-outlined text-sm">calendar_today</span>
                          <span>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <Link
                          to={`/articles/${post.slug}`}
                          className="flex items-center gap-1 text-sm font-bold text-accent hover:underline">
                          Read Article <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>

          {/* Pagination */}
          <div className="mt-4 flex items-center justify-center gap-2 py-8">
            <button className="cursor-not-allowed rounded p-2 text-primary/50 hover:bg-primary/5 dark:text-slate-500 dark:hover:bg-white/5">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="h-10 w-10 rounded-lg bg-primary font-bold text-white dark:bg-slate-700">1</button>
            <button className="rounded p-2 text-primary hover:bg-primary/5 dark:text-slate-300 dark:hover:bg-white/5">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Sidebar Area */}
        <aside className="flex flex-col gap-10 lg:col-span-4">
          {/* Categories */}
          <section className="rounded-xl border border-primary/10 bg-white p-6 shadow-sm transition-colors duration-500 ease-in-out dark:border-white/5 dark:bg-slate-800">
            <h4 className="mb-4 flex items-center gap-2 text-lg font-bold text-primary dark:text-slate-100">
              <span className="material-symbols-outlined text-accent">category</span>
              Categories
            </h4>
            <ul className="flex flex-col gap-3">
              {categories.map(([category, count]) => (
                <li key={category}>
                  <button
                    onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                    className="group flex w-full items-center justify-between">
                    <span
                      className={`transition-colors ${
                        selectedCategory === category
                          ? "font-bold text-accent"
                          : "text-primary/70 group-hover:text-accent dark:text-slate-300"
                      }`}>
                      {category}
                    </span>
                    <span className="rounded-full bg-primary/5 px-2 py-1 text-xs font-bold text-primary/60 dark:bg-slate-700 dark:text-slate-400">
                      {count}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* Tags Cloud */}
          <section className="rounded-xl border border-primary/10 bg-white p-6 shadow-sm transition-colors duration-500 ease-in-out dark:border-white/5 dark:bg-slate-800">
            <h4 className="mb-4 flex items-center gap-2 text-lg font-bold text-primary dark:text-slate-100">
              <span className="material-symbols-outlined text-accent">sell</span>
              Popular Tags
            </h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`rounded px-3 py-1.5 text-sm font-medium transition-all ${
                    selectedTags.includes(tag)
                      ? "bg-accent text-white"
                      : "bg-primary/5 text-primary/70 hover:bg-accent hover:text-white dark:bg-slate-700 dark:text-slate-300"
                  }`}>
                  {tag}
                </button>
              ))}
            </div>
          </section>

          {/* Newsletter Sidebar Box */}
          <section className="rounded-xl bg-primary p-6 text-white shadow-lg transition-colors duration-500 ease-in-out dark:bg-slate-900">
            <h4 className="mb-2 text-lg font-bold">Weekly Archive</h4>
            <p className="mb-4 text-sm leading-relaxed text-white/80">
              Get the best articles and design resources straight to your inbox.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                className="w-full rounded-lg border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/50 focus:border-accent focus:ring-accent"
                placeholder="Email address"
                type="email"
              />
              <button className="w-full rounded-lg bg-accent py-2 text-sm font-bold transition-colors hover:bg-accent/90">
                Subscribe
              </button>
            </form>
          </section>
        </aside>
      </div>
    </div>
  );
}
