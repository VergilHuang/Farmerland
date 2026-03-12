import { useParams, Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { posts } from '../../.velite';

export default function ArticleDetail() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-3xl font-bold text-primary dark:text-slate-100 mb-4">Article Not Found</h1>
        <Link to="/articles" className="text-accent hover:underline">
          Return to Articles
        </Link>
      </div>
    );
  }

  // Sanitize the HTML content
  const sanitizedContent = typeof window !== 'undefined' ? DOMPurify.sanitize(post.content) : post.content;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-8 flex items-center gap-2 text-sm font-medium text-primary/60 dark:text-slate-400">
        <Link to="/" className="hover:text-accent">Home</Link>
        <span className="material-symbols-outlined text-xs">chevron_right</span>
        <Link to="/articles" className="hover:text-accent">Articles</Link>
        {post.category && (
          <>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-primary dark:text-slate-300">{post.category}</span>
          </>
        )}
      </nav>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <article className="lg:col-span-8">
          <header className="mb-10">
            <div className="mb-4 flex flex-wrap gap-2">
              {post.category && (
                <span className="rounded-full bg-accent/10 dark:bg-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent dark:text-accent">
                  {post.category}
                </span>
              )}
              {post.tags?.map((tag) => (
                <span key={tag} className="rounded-full bg-primary/10 dark:bg-slate-700 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary dark:text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-primary dark:text-slate-100 md:text-5xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-primary/60 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">calendar_today</span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          </header>

          <div
            className="prose prose-lg dark:prose-invert max-w-none prose-pre:bg-slate-800 prose-pre:text-slate-100 prose-a:text-accent hover:prose-a:text-accent/80 prose-headings:text-primary dark:prose-headings:text-slate-100"
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
          />

          <footer className="mt-16 border-t border-primary/10 dark:border-white/10 pt-10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold uppercase tracking-widest text-primary/40 dark:text-slate-500">Tags:</span>
                <div className="flex flex-wrap gap-2">
                  {post.tags?.map((tag) => (
                    <span key={tag} className="rounded-lg bg-primary/5 dark:bg-slate-800 px-3 py-1 text-sm font-medium text-primary/80 dark:text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-primary/60 dark:text-slate-400">Was this helpful?</span>
                <div className="flex gap-2">
                  <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/10 dark:border-white/10 hover:bg-green-50 dark:hover:bg-green-900/30 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                    <span className="material-symbols-outlined">thumb_up</span>
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/10 dark:border-white/10 hover:bg-red-50 dark:hover:bg-red-900/30 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                    <span className="material-symbols-outlined">thumb_down</span>
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </article>

        <aside className="hidden lg:block lg:col-span-4">
          <div className="sticky top-28 space-y-8">
            <div className="rounded-xl border border-primary/10 dark:border-white/10 bg-white/50 dark:bg-slate-800/50 p-6 backdrop-blur-sm shadow-sm">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-primary/40 dark:text-slate-500">Table of Contents</h3>
              <nav className="flex flex-col gap-1 text-sm">
                <span className="text-primary/60 dark:text-slate-400 italic">No headings found in this article.</span>
              </nav>
            </div>

            <div className="rounded-xl border border-primary/10 dark:border-white/10 bg-white/30 dark:bg-slate-800/30 p-6">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-primary/40 dark:text-slate-500">Related Posts</h3>
              <div className="space-y-4">
                {posts.filter((p) => p.slug !== post.slug).slice(0, 3).map((relatedPost) => (
                  <Link key={relatedPost.slug} to={`/articles/${relatedPost.slug}`} className="group block">
                    <p className="text-sm font-bold text-primary dark:text-slate-200 group-hover:text-accent transition-colors">
                      {relatedPost.title}
                    </p>
                    <p className="text-xs text-primary/50 dark:text-slate-400 mt-1">
                      {new Date(relatedPost.date).toLocaleDateString()}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
