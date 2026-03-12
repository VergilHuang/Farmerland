import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const getLinkClasses = (path: string) => {
    const isActive = location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
    const baseClasses = "text-sm font-semibold transition-colors duration-500 ease-in-out";

    if (isActive) {
      return `${baseClasses} text-accent underline underline-offset-4`;
    }
    return `${baseClasses} text-slate-700 dark:text-slate-300 hover:text-accent`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 dark:border-white/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-4 md:px-10 lg:px-40 py-3 transition-colors duration-500 ease-in-out">
      <div className="flex items-center justify-between whitespace-nowrap">
        <Link to="/" className="flex items-center gap-3 text-primary dark:text-accent">
          <span className="material-symbols-outlined text-3xl font-bold">terminal</span>
          <h2 className="text-xl font-black leading-tight tracking-tight">Farmerland</h2>
        </Link>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className={getLinkClasses('/')}>Home</Link>
            <Link to="/articles" className={getLinkClasses('/articles')}>Articles</Link>
            <Link to="/about" className={getLinkClasses('/about')}>About</Link>
            <Link to="/portfolio" className={getLinkClasses('/portfolio')}>Portfolio</Link>
            <a className="text-slate-700 dark:text-slate-300 text-sm font-semibold hover:text-accent transition-colors duration-500 ease-in-out" href="#">Contact</a>
            <a className="text-slate-700 dark:text-slate-300 text-sm font-semibold hover:text-accent transition-colors duration-500 ease-in-out" href="#">Research</a>
          </nav>
          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center rounded-lg h-10 w-10 bg-primary/5 dark:bg-white/10 text-primary dark:text-slate-100 hover:bg-primary/10 dark:hover:bg-white/20 transition-all duration-500 ease-in-out"
          >
            <span className="material-symbols-outlined">{isDark ? 'light_mode' : 'dark_mode'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
