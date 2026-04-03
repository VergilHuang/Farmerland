import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const getLinkClasses = (path: string) => {
    const isActive = location.pathname === path || (path !== "/" && location.pathname.startsWith(path));
    const baseClasses = "text-sm font-semibold transition-colors duration-500 ease-in-out";

    if (isActive) {
      return cn(baseClasses, "text-accent underline underline-offset-4");
    }
    return cn(baseClasses, "text-slate-700 dark:text-slate-300 hover:text-accent");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 px-4 py-3 backdrop-blur-md transition-colors duration-500 ease-in-out md:px-10 lg:px-40 dark:border-white/10 dark:bg-background-dark/80">
      <div className="flex items-center justify-between whitespace-nowrap">
        <Link to="/" className="flex items-center gap-3 text-primary dark:text-accent">
          <span className="material-symbols-outlined text-3xl font-bold">terminal</span>
          <h2 className="text-xl leading-tight font-black tracking-tight">Farmerland</h2>
        </Link>
        <div className="flex items-center gap-8">
          <nav className="hidden items-center gap-6 md:flex">
            <Link to="/" className={getLinkClasses("/")}>
              Home
            </Link>
            <Link to="/articles" className={getLinkClasses("/articles")}>
              Articles
            </Link>
            <Link to="/about" className={getLinkClasses("/about")}>
              About
            </Link>
            <Link to="/portfolio" className={getLinkClasses("/portfolio")}>
              Portfolio
            </Link>
            <a
              className="text-sm font-semibold text-slate-700 transition-colors duration-500 ease-in-out hover:text-accent dark:text-slate-300"
              href="#">
              Contact
            </a>
            <a
              className="text-sm font-semibold text-slate-700 transition-colors duration-500 ease-in-out hover:text-accent dark:text-slate-300"
              href="#">
              Research
            </a>
          </nav>
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary transition-all duration-500 ease-in-out hover:bg-primary/10 dark:bg-white/10 dark:text-slate-100 dark:hover:bg-white/20">
            <span className="material-symbols-outlined">{isDark ? "light_mode" : "dark_mode"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
