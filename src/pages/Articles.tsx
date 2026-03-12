import { useArticleStore } from '../store/useArticleStore';
import { posts } from '../../.velite';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

export default function Articles() {
  const { searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, selectedTags, toggleTag, clearFilters } = useArticleStore();

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
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
        const matchesTags = selectedTags.length > 0
          ? selectedTags.every((tag) => post.tags?.includes(tag))
          : true;

        return matchesSearch && matchesCategory && matchesTags;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [searchQuery, selectedCategory, selectedTags]);

  return (
    <div className="flex-1 flex justify-center py-10 px-4 md:px-20">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content Area */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {/* Search Bar Section */}
          <div className="w-full">
            <label className="flex flex-col w-full h-14">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm border border-primary/10 overflow-hidden">
                <div className="text-primary/50 flex bg-white dark:bg-slate-800 items-center justify-center pl-4">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 border-none bg-white dark:bg-slate-800 focus:ring-0 h-full placeholder:text-primary/40 px-4 text-base font-normal dark:text-slate-100"
                  placeholder="Search the archives..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </label>
          </div>

          <div className="flex items-baseline justify-between border-b border-primary/10 dark:border-white/10 pb-4">
            <h1 className="text-primary dark:text-slate-100 text-3xl font-bold tracking-tight">Latest Articles</h1>
            <span className="text-sm text-primary/60 dark:text-slate-400 font-medium">Sorted by date</span>
          </div>

          {/* Active Filters */}
          {(selectedCategory || selectedTags.length > 0) && (
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm text-primary/60 dark:text-slate-400">Filters:</span>
              {selectedCategory && (
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="flex items-center gap-1 px-3 py-1 bg-primary/10 dark:bg-slate-700 text-primary dark:text-slate-200 text-sm font-medium rounded-full hover:bg-primary/20 transition-colors"
                >
                  {selectedCategory}
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              )}
              {selectedTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className="flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full hover:bg-accent/20 transition-colors"
                >
                  {tag}
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              ))}
              <button
                onClick={clearFilters}
                className="text-sm text-primary/50 dark:text-slate-500 hover:text-primary dark:hover:text-slate-300 ml-2"
              >
                Clear All
              </button>
            </div>
          )}

          {/* Article List */}
          <div className="flex flex-col gap-10">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-10 text-primary/60 dark:text-slate-400">
                <p>No articles found matching your criteria.</p>
              </div>
            ) : (
              filteredPosts.map((post) => (
                <article key={post.slug} className="group @container">
                  <div className="flex flex-col @xl:flex-row gap-6">
                    <div
                      className="w-full @xl:w-1/3 aspect-[16/9] bg-cover bg-center rounded-xl transition-transform group-hover:scale-[1.02] duration-300"
                      title={post.coverAlt || post.title}
                      style={{
                        backgroundImage: `url('${post.cover || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}')`,
                      }}
                    />
                    <div className="flex flex-1 flex-col justify-between py-1">
                      <div>
                        {post.category && (
                          <p className="text-accent text-xs font-bold uppercase tracking-wider mb-2">
                            {post.category}
                          </p>
                        )}
                        <h3 className="text-primary dark:text-slate-100 text-2xl font-bold leading-tight group-hover:text-accent transition-colors mb-3">
                          {post.title}
                        </h3>
                        <p className="text-primary/70 dark:text-slate-400 text-base leading-relaxed line-clamp-2 mb-4">
                          {post.excerpt || post.content.substring(0, 150) + '...'}
                        </p>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2 text-primary/50 dark:text-slate-500 text-sm">
                          <span className="material-symbols-outlined text-sm">calendar_today</span>
                          <span>
                            {new Date(post.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                            })}
                          </span>
                        </div>
                        <Link
                          to={`/articles/${post.slug}`}
                          className="flex items-center gap-1 text-accent font-bold text-sm hover:underline"
                        >
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
          <div className="flex items-center justify-center gap-2 py-8 mt-4">
            <button className="p-2 rounded hover:bg-primary/5 dark:hover:bg-white/5 text-primary/50 dark:text-slate-500 cursor-not-allowed">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 rounded-lg bg-primary dark:bg-slate-700 text-white font-bold">1</button>
            <button className="p-2 rounded hover:bg-primary/5 dark:hover:bg-white/5 text-primary dark:text-slate-300">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Sidebar Area */}
        <aside className="lg:col-span-4 flex flex-col gap-10">
          {/* Categories */}
          <section className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-primary/10 dark:border-white/5 shadow-sm">
            <h4 className="text-primary dark:text-slate-100 text-lg font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-accent">category</span>
              Categories
            </h4>
            <ul className="flex flex-col gap-3">
              {categories.map(([category, count]) => (
                <li key={category}>
                  <button
                    onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                    className="w-full flex items-center justify-between group"
                  >
                    <span
                      className={`transition-colors ${
                        selectedCategory === category
                          ? 'text-accent font-bold'
                          : 'text-primary/70 dark:text-slate-300 group-hover:text-accent'
                      }`}
                    >
                      {category}
                    </span>
                    <span className="bg-primary/5 dark:bg-slate-700 text-primary/60 dark:text-slate-400 text-xs px-2 py-1 rounded-full font-bold">
                      {count}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* Tags Cloud */}
          <section className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-primary/10 dark:border-white/5 shadow-sm">
            <h4 className="text-primary dark:text-slate-100 text-lg font-bold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-accent">sell</span>
              Popular Tags
            </h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1.5 transition-all rounded text-sm font-medium ${
                    selectedTags.includes(tag)
                      ? 'bg-accent text-white'
                      : 'bg-primary/5 dark:bg-slate-700 hover:bg-accent hover:text-white text-primary/70 dark:text-slate-300'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </section>

          {/* Newsletter Sidebar Box */}
          <section className="bg-primary dark:bg-slate-900 p-6 rounded-xl shadow-lg text-white">
            <h4 className="text-lg font-bold mb-2">Weekly Archive</h4>
            <p className="text-white/80 text-sm mb-4 leading-relaxed">
              Get the best articles and design resources straight to your inbox.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                className="w-full bg-white/10 border-white/20 rounded-lg text-sm px-4 py-2 focus:ring-accent focus:border-accent placeholder:text-white/50 text-white"
                placeholder="Email address"
                type="email"
              />
              <button className="w-full bg-accent hover:bg-accent/90 transition-colors py-2 rounded-lg font-bold text-sm">
                Subscribe
              </button>
            </form>
          </section>
        </aside>
      </div>
    </div>
  );
}
