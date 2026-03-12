export default function Footer() {
  return (
    <footer className="mt-20 border-t border-primary/10 dark:border-white/10 px-4 md:px-10 lg:px-40 py-12 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-4 items-center md:items-start">
          <div className="flex items-center gap-3 text-primary dark:text-accent">
            <span className="material-symbols-outlined text-2xl font-bold">terminal</span>
            <h2 className="text-lg font-black tracking-tight">Farmerland</h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs text-center md:text-left">
            Deep technical articles for seasoned engineers. No fluff, just the code and the concepts that matter.
          </p>
        </div>
        <div className="flex gap-12">
          <div className="flex flex-col gap-3">
            <h4 className="text-slate-900 dark:text-slate-100 text-sm font-bold">Connect</h4>
            <a className="text-slate-500 dark:text-slate-400 text-sm hover:text-accent transition-colors" href="#">Twitter</a>
            <a className="text-slate-500 dark:text-slate-400 text-sm hover:text-accent transition-colors" href="#">GitHub</a>
            <a className="text-slate-500 dark:text-slate-400 text-sm hover:text-accent transition-colors" href="#">LinkedIn</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-slate-900 dark:text-slate-100 text-sm font-bold">Newsletter</h4>
            <div className="flex gap-2">
              <input className="form-input rounded-lg border-primary/10 dark:border-white/10 bg-primary/5 dark:bg-white/5 text-sm w-48 dark:text-slate-100" placeholder="email@example.com" />
              <button className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg">Join</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-primary/5 dark:border-white/5 flex flex-col md:flex-row justify-between text-slate-400 text-xs">
        <span>© 2024 TechBlog Engineering. All rights reserved.</span>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a className="hover:text-primary dark:hover:text-slate-300 transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-primary dark:hover:text-slate-300 transition-colors" href="#">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}
