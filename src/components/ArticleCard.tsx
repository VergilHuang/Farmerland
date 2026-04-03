import { Link } from "react-router-dom";

export interface ArticleCardProps {
  to: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  year: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

export default function ArticleCard({
  to,
  imageUrl,
  imageAlt,
  category,
  year,
  title,
  description,
  date,
  readTime,
}: ArticleCardProps) {
  return (
    <Link
      to={to}
      className="group flex flex-col overflow-hidden rounded-xl border border-primary/5 bg-slate-50 transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-xl dark:border-white/5 dark:bg-slate-800">
      <div className="aspect-video overflow-hidden">
        <img
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={imageUrl}
        />
      </div>
      <div className="flex flex-col gap-3 p-5">
        <div className="flex gap-2">
          <span className="rounded-md bg-accent/10 px-2 py-0.5 text-[10px] font-bold tracking-tight text-accent uppercase">
            {category}
          </span>
          <span className="rounded-md bg-primary/5 px-2 py-0.5 text-[10px] font-bold tracking-tight text-slate-500 uppercase dark:bg-slate-800 dark:text-slate-400">
            {year}
          </span>
        </div>
        <h3 className="text-lg leading-snug font-bold text-slate-900 transition-colors group-hover:text-accent dark:text-slate-100">
          {title}
        </h3>
        <p className="line-clamp-2 text-sm text-slate-500 dark:text-slate-400">{description}</p>
        <div className="flex items-center justify-between border-t border-primary/5 pt-4 text-xs font-medium text-slate-400 dark:border-white/5 dark:text-slate-500">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">calendar_today</span>
            {date}
          </span>
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">schedule</span>
            {readTime}
          </span>
        </div>
      </div>
    </Link>
  );
}
