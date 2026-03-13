export default function Footer() {
  return (
    <footer className="mt-20 border-t border-primary/10 bg-white px-4 py-12 transition-colors duration-500 ease-in-out md:px-10 lg:px-40 dark:border-white/10 dark:bg-slate-950">
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <div className="flex items-center gap-3 text-primary dark:text-accent">
            <span className="material-symbols-outlined text-2xl font-bold">terminal</span>
            <h2 className="text-lg font-black tracking-tight">Farmerland</h2>
          </div>
          <p className="max-w-xs text-center text-sm text-slate-500 md:text-left dark:text-slate-400">
            Deep technical articles for seasoned engineers. No fluff, just the code and the concepts that matter.
          </p>
        </div>
        <div className="flex gap-12">
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">Connect</h4>
            <a className="text-sm text-slate-500 transition-colors hover:text-accent dark:text-slate-400" href="#">
              Twitter
            </a>
            <a className="text-sm text-slate-500 transition-colors hover:text-accent dark:text-slate-400" href="#">
              GitHub
            </a>
            <a className="text-sm text-slate-500 transition-colors hover:text-accent dark:text-slate-400" href="#">
              LinkedIn
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">Newsletter</h4>
            <div className="flex gap-2">
              <input
                className="form-input w-48 rounded-lg border-primary/10 bg-primary/5 text-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                placeholder="email@example.com"
              />
              <button className="rounded-lg bg-primary px-4 py-2 text-xs font-bold text-white">Join</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col justify-between border-t border-primary/5 pt-8 text-xs text-slate-400 md:flex-row dark:border-white/5">
        <span>© 2024 TechBlog Engineering. All rights reserved.</span>
        <div className="mt-4 flex gap-6 md:mt-0">
          <a className="transition-colors hover:text-primary dark:hover:text-slate-300" href="#">
            Privacy Policy
          </a>
          <a className="transition-colors hover:text-primary dark:hover:text-slate-300" href="#">
            Cookie Settings
          </a>
        </div>
      </div>
    </footer>
  );
}
