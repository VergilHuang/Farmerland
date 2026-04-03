export interface TagCloudFilterProps {
  availableTags: string[];
  selectedTags: string[];
  onToggleTag: (toggleTarget: string) => void;
}

export default function TagCloudFilter({ availableTags, selectedTags, onToggleTag }: TagCloudFilterProps) {
  if (availableTags.length === 0) return null;

  return (
    <section className="rounded-xl border border-primary/10 bg-white p-6 shadow-sm transition-colors duration-500 ease-in-out dark:border-white/5 dark:bg-slate-800">
      <h4 className="mb-4 flex items-center gap-2 text-lg font-bold text-primary dark:text-slate-100">
        <span className="material-symbols-outlined text-accent">sell</span>
        Popular Tags
      </h4>
      <div className="flex flex-wrap gap-2">
        {availableTags.map((tagName) => (
          <button
            key={tagName}
            onClick={() => onToggleTag(tagName)}
            aria-label={`切換標籤過濾：${tagName}`}
            className={`rounded px-3 py-1.5 text-sm font-medium transition-all ${
              selectedTags.includes(tagName)
                ? "bg-accent text-white"
                : "bg-primary/5 text-primary/70 hover:bg-accent hover:text-white dark:bg-slate-700 dark:text-slate-300"
            }`}>
            {tagName}
          </button>
        ))}
      </div>
    </section>
  );
}
