export interface FarmPaginationProps {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

export default function FarmPagination({ currentPage, totalCount, pageSize, onPageChange }: FarmPaginationProps) {
  const totalPages = Math.ceil(totalCount / pageSize);

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 py-8">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="上一頁"
        className="rounded p-2 text-primary hover:bg-primary/5 disabled:cursor-not-allowed disabled:text-primary/50 dark:text-slate-300 dark:hover:bg-white/5 disabled:dark:text-slate-500">
        <span className="material-symbols-outlined">chevron_left</span>
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          aria-label={`前往第 ${pageNumber} 頁`}
          className={`h-10 w-10 rounded-lg font-bold transition-colors ${
            currentPage === pageNumber
              ? "bg-primary text-white dark:bg-slate-700"
              : "text-primary hover:bg-primary/10 dark:text-slate-300 dark:hover:bg-slate-800"
          }`}>
          {pageNumber}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="下一頁"
        className="rounded p-2 text-primary hover:bg-primary/5 disabled:cursor-not-allowed disabled:text-primary/50 dark:text-slate-300 dark:hover:bg-white/5 disabled:dark:text-slate-500">
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </div>
  );
}
