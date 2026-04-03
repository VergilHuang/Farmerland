import { Link } from "react-router-dom";
import { type PostArticleType } from "@/types/index";

export interface PostArticleCardProps {
  postItem: PostArticleType;
}

export default function PostArticleCard({ postItem }: PostArticleCardProps) {
  const formattedDate = new Date(postItem.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="group @container">
      <div className="flex flex-col gap-6 @xl:flex-row">
        <div
          className="aspect-video w-full rounded-xl bg-cover bg-center transition-transform duration-300 group-hover:scale-[1.02] @xl:w-1/3"
          title={postItem.coverAlt || postItem.title}
          style={{
            backgroundImage: `url('${postItem.cover || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"}')`,
          }}
        />
        <div className="flex flex-1 flex-col justify-between py-1">
          <div>
            {postItem.category && (
              <p className="mb-2 text-xs font-bold tracking-wider text-accent uppercase">{postItem.category}</p>
            )}
            <h3 className="mb-3 text-2xl leading-tight font-bold text-primary transition-colors group-hover:text-accent dark:text-slate-100">
              {postItem.title}
            </h3>
            <p className="mb-4 line-clamp-2 text-base leading-relaxed text-primary/70 dark:text-slate-400">
              {postItem.excerpt || postItem.content.substring(0, 150) + "..."}
            </p>
          </div>
          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-primary/50 dark:text-slate-500">
              <span className="material-symbols-outlined text-sm">calendar_today</span>
              <span>{formattedDate}</span>
            </div>
            <Link
              to={`/articles/${postItem.slug}`}
              aria-label={`Read article: ${postItem.title}`}
              className="flex items-center gap-1 text-sm font-bold text-accent hover:underline">
              Read Article <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
