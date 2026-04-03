export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  tags?: string[];
  lastUpdated: string;
  demoUrl?: string;
  codeUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  imageAlt,
  tags,
  lastUpdated,
  demoUrl = "#",
  codeUrl = "#",
}: ProjectCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-primary/5 bg-white shadow-sm transition-[background-color,box-shadow] duration-500 ease-in-out hover:shadow-xl dark:border-white/5 dark:bg-slate-800">
      <div
        className="group relative aspect-video w-full bg-cover bg-center bg-no-repeat"
        title={imageAlt}
        style={{ backgroundImage: `url("${imageUrl}")` }}>
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-primary/40 opacity-0 transition-opacity group-hover:opacity-100">
          <a className="rounded-full bg-white p-3 text-primary transition-colors hover:text-accent" href={demoUrl}>
            <span className="material-symbols-outlined">open_in_new</span>
          </a>
          <a className="rounded-full bg-white p-3 text-primary transition-colors hover:text-accent" href={codeUrl}>
            <span className="material-symbols-outlined">code</span>
          </a>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <span key={tag} className="rounded-sm bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent uppercase">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mb-2 text-xl font-bold text-primary dark:text-slate-100">{title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-primary/60 dark:text-slate-400">{description}</p>
        <div className="mt-4 flex items-center justify-between border-t border-primary/5 pt-4 dark:border-white/5">
          <span className="text-xs font-medium text-primary/40 dark:text-slate-500">Last updated {lastUpdated}</span>
          <div className="flex gap-3">
            <span className="material-symbols-outlined cursor-pointer text-lg text-primary/40 hover:text-accent">
              star
            </span>
            <span className="material-symbols-outlined cursor-pointer text-lg text-primary/40 hover:text-accent">
              share
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
