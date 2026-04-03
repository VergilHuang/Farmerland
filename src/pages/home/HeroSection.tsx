import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 items-center gap-8 overflow-hidden rounded-xl border border-primary/5 bg-slate-50 shadow-sm transition-colors duration-500 ease-in-out lg:grid-cols-2 dark:border-white/5 dark:bg-slate-800">
        <div className="relative overflow-hidden bg-slate-200 transition-colors duration-500 ease-in-out lg:h-full dark:bg-slate-800">
          <div className="absolute inset-0 bg-linear-to-br from-primary to-accent opacity-20"></div>
          <img
            alt="Professional developer workstation"
            className="h-full w-full object-cover object-center"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5P7RcuniZUsSxm__C6TNPQzeqnzDAsrAymNVQgQ9A86ZUgeItYdOHX1TeNSM8XYmC1ZjuCifBk6V6OuVyHZQBu56Ej6OoasUeaUva4mwI7T2atD5H8qKHAZeODOxswuyn1UNhag8ODbQvtQxCT8xknVColJ6KnXl87o_xcUrX5jMfpnoBlBtEmXhAXjewSxj_uhisCgae9XhGHWkn7VgpRyuFX2ydcEp6a-byRRTQGQTw6IpveE9I1b8KE3b8IiLmad3F1PeIIV0h"
          />
        </div>
        <div className="flex flex-col gap-6 p-8 lg:p-12">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold tracking-wider text-accent uppercase">
            <span className="material-symbols-outlined text-sm">verified</span>
            Tech & Life
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl leading-tight font-black tracking-tight text-primary md:text-3xl lg:text-4xl dark:text-slate-50">
              Farmerland
            </h1>
            <p className="text-md max-w-lg leading-relaxed text-slate-600 lg:text-lg dark:text-slate-400">
              這裡記錄了我各種學習與實踐的點滴，包含程式開發、AI 應用、生活感悟等，希望能幫助到他人，共同成長。
            </p>
          </div>
          <div className="flex flex-wrap justify-around gap-4 lg:justify-start">
            <Link
              to="/portfolio"
              className="flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-bold text-white shadow-md transition-all hover:bg-primary/90 dark:bg-slate-700">
              View My Projects
            </Link>
            {/* <Link
              to="/about"
              className="flex h-12 items-center justify-center rounded-lg border-2 border-primary/10 px-8 text-sm font-bold text-primary transition-all hover:bg-primary/5 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5">
              Read Resume
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
