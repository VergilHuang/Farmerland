export default function Portfolio() {
  return (
    <div className="flex flex-col flex-1 max-w-[1200px] mx-auto w-full px-6 md:px-20 py-10">
      {/* Hero Section */}
      <div className="flex flex-col gap-4 mb-10">
        <div className="flex flex-col gap-2">
          <span className="text-accent font-bold tracking-widest text-xs uppercase">Portfolio</span>
          <h1 className="text-primary dark:text-slate-100 text-4xl md:text-5xl font-black leading-tight tracking-tight">
            Projects & Technical Research
          </h1>
          <p className="text-primary/60 dark:text-slate-400 text-lg max-w-2xl">
            A curated collection of experimental builds, open-source contributions, and deep-dives into modern infrastructure.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-5 text-sm font-bold shadow-md shadow-primary/20">
          <span>All Projects</span>
        </button>
        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-800 border border-primary/10 dark:border-white/10 px-5 text-sm font-medium text-primary dark:text-slate-300 hover:border-accent transition-all">
          <span>React</span>
        </button>
        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-800 border border-primary/10 dark:border-white/10 px-5 text-sm font-medium text-primary dark:text-slate-300 hover:border-accent transition-all">
          <span>Node.js</span>
        </button>
        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-800 border border-primary/10 dark:border-white/10 px-5 text-sm font-medium text-primary dark:text-slate-300 hover:border-accent transition-all">
          <span>AWS</span>
        </button>
        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-800 border border-primary/10 dark:border-white/10 px-5 text-sm font-medium text-primary dark:text-slate-300 hover:border-accent transition-all">
          <span>AI/ML</span>
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-primary/5 dark:border-white/5">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover relative group"
            title="Abstract geometric AI neural network visualization"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuARxlLKpzQ6dPL_3AWavWn9r0a2TtzI1H1vvMr-x0U143T1OiEBHN2BbUSgGiRHGKDHtDnRfRzSE00FjfuFKcUGpR0e5fq7_k-thvKsLB25P8gduexoKQtybAvZWC7MSce9LiOMyYqlCUyqLgamSxgY9iES-bzfN9ruQpS8KirC-QFzBcGAqsN-1cv1OCYcJf1uLtr7FrGWhbmXSvKtuPCmhw425ZKJWbk1nAs-SRuI60EehjnjugXCvipXo3C13xnNV6rQHJwe_UR-")',
            }}
          >
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
              <a className="p-3 bg-white rounded-full text-primary hover:text-accent transition-colors" href="#">
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
              <a className="p-3 bg-white rounded-full text-primary hover:text-accent transition-colors" href="#">
                <span className="material-symbols-outlined">code</span>
              </a>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-1">
            <div className="flex gap-2 mb-3 flex-wrap">
              <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-bold uppercase rounded-sm">React</span>
              <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-bold uppercase rounded-sm">OpenAI</span>
              <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-bold uppercase rounded-sm">Tailwind</span>
            </div>
            <h3 className="text-primary dark:text-slate-100 text-xl font-bold mb-2">AI Task Planner</h3>
            <p className="text-primary/60 dark:text-slate-400 text-sm leading-relaxed flex-1">
              Intelligent scheduling system with automated priority mapping and natural language processing for task entry.
            </p>
            <div className="mt-4 pt-4 border-t border-primary/5 dark:border-white/5 flex justify-between items-center">
              <span className="text-xs text-primary/40 dark:text-slate-500 font-medium">Last updated 2 days ago</span>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary/40 text-lg hover:text-accent cursor-pointer">star</span>
                <span className="material-symbols-outlined text-primary/40 text-lg hover:text-accent cursor-pointer">share</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-primary/5 dark:border-white/5">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover relative group"
            title="Cyberpunk style real-time data dashboard interface"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAoKi6wtG7myQMDYjYjbakvlaKeuxvVWRcypwAv5g2YXxyxGYdD4iFmeSFUNI2G0eyj2NkFZHbZcxkPd1fZPx6VyzTfwCMkDdAAutF56RCvfxhlteyB0ini_fbp7DErkiekRskS7KWr12p5MyiY_PQbWJkAtE9Bo2V2D7NMeWTy9TjLvBUjTDSOabDoxDlwEZPLtrAlv1ZvTmdqLcNq7Ebf3dFq_6mjBP_YWD0NfXyOoGySzw_GwQ4OhnfKHb6lUF334hUMY35jKQNK")',
            }}
          >
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
              <a className="p-3 bg-white rounded-full text-primary hover:text-accent transition-colors" href="#">
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
              <a className="p-3 bg-white rounded-full text-primary hover:text-accent transition-colors" href="#">
                <span className="material-symbols-outlined">code</span>
              </a>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-1">
            <div className="flex gap-2 mb-3 flex-wrap">
              <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-bold uppercase rounded-sm">Node.js</span>
              <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-bold uppercase rounded-sm">Socket.io</span>
              <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-bold uppercase rounded-sm">Redis</span>
            </div>
            <h3 className="text-primary dark:text-slate-100 text-xl font-bold mb-2">Real-time Dashboard</h3>
            <p className="text-primary/60 dark:text-slate-400 text-sm leading-relaxed flex-1">
              Low-latency data visualization engine designed for high-traffic monitoring and telemetry streaming.
            </p>
            <div className="mt-4 pt-4 border-t border-primary/5 dark:border-white/5 flex justify-between items-center">
              <span className="text-xs text-primary/40 dark:text-slate-500 font-medium">Last updated 1 week ago</span>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary/40 text-lg hover:text-accent cursor-pointer">star</span>
                <span className="material-symbols-outlined text-primary/40 text-lg hover:text-accent cursor-pointer">share</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-primary/5 dark:border-white/5">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover relative group"
            title="Digital network earth with cloud infrastructure nodes"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0n3qwBJGYyAIQ1ZoNMzYCmOv3mBUQwjM45icfu5qRfZc-lYzHWrCj-CtCixgblQZXYMjEVR_S2GzCrenewSapNr8Nhv_2-ksBgMaz9xgwhZBskA7XPzJ8YdXRrkNjFUu36FhefmlSQ4EUCKdUR2UdEEIt55oz2eWHGVLPiYKXI-rDEH7xIsCaYpGh3qM9fHps29ZOhjvZZQcnXyl2-qLssLssurA_QJ9aM78HNf9RuNgonlSkymF3o2b92AexgCHlm5GoJn68MS8l")',
            }}
          >
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
              <a className="p-3 bg-white rounded-full text-primary hover:text-accent transition-colors" href="#">
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
              <a className="p-3 bg-white rounded-full text-primary hover:text-accent transition-colors" href="#">
                <span className="material-symbols-outlined">code</span>
              </a>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-1">
            <div className="flex gap-2 mb-3 flex-wrap">
              <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-bold uppercase rounded-sm">AWS</span>
              <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-bold uppercase rounded-sm">Terraform</span>
              <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-bold uppercase rounded-sm">Docker</span>
            </div>
            <h3 className="text-primary dark:text-slate-100 text-xl font-bold mb-2">Cloud Infrastructure</h3>
            <p className="text-primary/60 dark:text-slate-400 text-sm leading-relaxed flex-1">
              Scalable multi-region deployment architecture blueprint for enterprise-grade SaaS applications.
            </p>
            <div className="mt-4 pt-4 border-t border-primary/5 dark:border-white/5 flex justify-between items-center">
              <span className="text-xs text-primary/40 dark:text-slate-500 font-medium">Last updated 2 weeks ago</span>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary/40 text-lg hover:text-accent cursor-pointer">star</span>
                <span className="material-symbols-outlined text-primary/40 text-lg hover:text-accent cursor-pointer">share</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-primary/5 dark:border-white/5">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover relative group"
            title="Abstract colorful light waves representing neural mesh"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgv0Mfd5D7qKzeAGHAO1mPm24Pi5gmFlp4LieeQWMvD8QZbGDBy-sGnwrNw5D7B_dsMBV7OjB4UpScRxswyrY03iAEvt4EMUi46Npu_KIgoAY1gxPdKmH8s0HdTPkXHh4Zdf268YtGF-GQ9cwSX4HzD-RwZj_fyw93RWWsSbMOPAdcUH5-DddDpDCj-8WS6732xTNoHnGGHUgfEznHzrNs13tVu6QrAQgNg_P0aP5ic5zUmWanSxeugf8FM25SHd8TTGs510P6r-eC")',
            }}
          >
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
              <a className="p-3 bg-white rounded-full text-primary hover:text-accent transition-colors" href="#">
                <span className="material-symbols-outlined">description</span>
              </a>
              <a className="p-3 bg-white rounded-full text-primary hover:text-accent transition-colors" href="#">
                <span className="material-symbols-outlined">code</span>
              </a>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-1">
            <div className="flex gap-2 mb-3 flex-wrap">
              <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-bold uppercase rounded-sm">Python</span>
              <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-bold uppercase rounded-sm">PyTorch</span>
              <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-bold uppercase rounded-sm">Research</span>
            </div>
            <h3 className="text-primary dark:text-slate-100 text-xl font-bold mb-2">Neural Mesh</h3>
            <p className="text-primary/60 dark:text-slate-400 text-sm leading-relaxed flex-1">
              Ongoing research exploration on self-optimizing neural network topologies for edge computing devices.
            </p>
            <div className="mt-4 pt-4 border-t border-primary/5 dark:border-white/5 flex justify-between items-center">
              <span className="text-xs text-primary/40 dark:text-slate-500 font-medium">Last updated 1 month ago</span>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary/40 text-lg hover:text-accent cursor-pointer">star</span>
                <span className="material-symbols-outlined text-primary/40 text-lg hover:text-accent cursor-pointer">share</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-primary/5 dark:border-white/5">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover relative group"
            title="Modern server room with blue lights for data storage project"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBr9m78acN3J9pj5qOG1FBWbNgXX-HYBklIpQSkk2r-n3sVK1ZlJH4fp7SKtA1oQOXsvahEFcMJWS2YPeaCagVkgZhV-7Y3ZaP_3NyXAldExY5mdToF6nMxpxH_M6alairjZo50oxNWqSAnZlfHv07IAH4lK3H5xOghSt2fJ2XQZmKorEBSIKVmB-xaZGC1uPClPLieLZw2yI4qeBNgDcxD97RJ1TkRuS8UDwFusfBgdeqXx4-aUTH_20kdR20TjK4BJP4sdXIsqPm")',
            }}
          >
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
              <a className="p-3 bg-white rounded-full text-primary hover:text-accent transition-colors" href="#">
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
              <a className="p-3 bg-white rounded-full text-primary hover:text-accent transition-colors" href="#">
                <span className="material-symbols-outlined">code</span>
              </a>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-1">
            <div className="flex gap-2 mb-3 flex-wrap">
              <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-bold uppercase rounded-sm">Go</span>
              <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-bold uppercase rounded-sm">gRPC</span>
              <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-bold uppercase rounded-sm">PostgreSQL</span>
            </div>
            <h3 className="text-primary dark:text-slate-100 text-xl font-bold mb-2">Distributed Storage</h3>
            <p className="text-primary/60 dark:text-slate-400 text-sm leading-relaxed flex-1">
              High-performance distributed key-value store with consistent hashing and raft consensus protocol.
            </p>
            <div className="mt-4 pt-4 border-t border-primary/5 dark:border-white/5 flex justify-between items-center">
              <span className="text-xs text-primary/40 dark:text-slate-500 font-medium">Last updated 3 days ago</span>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary/40 text-lg hover:text-accent cursor-pointer">star</span>
                <span className="material-symbols-outlined text-primary/40 text-lg hover:text-accent cursor-pointer">share</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="flex flex-col bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-primary/5 dark:border-white/5">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover relative group"
            title="Minimalist desk with developer tools and abstract background"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCXoRbIgoNd96VFht_LVbqG0452FQVynad3tRQYzMSyyMb86CF2BWH173s_D9VouK4RsIbvcCiGwddCjFUlMCkYILChJBD3TjFdFuWtF6jQEQAQ_xMs6Qd6zU9GYuRdFV7JSd57-uUhnDTBKY6dTKPaIwLLdeuXvHH73LasKra6TuY9HLth3iu_1U3OWqSL9j_fUXw39EXTrz2GfR6qJHAs3C89wpVdsGvWcn-ZTmHBPqVi6UdDDOtT53iwduf0zFterogYVvfDWQi2")',
            }}
          >
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
              <a className="p-3 bg-white rounded-full text-primary hover:text-accent transition-colors" href="#">
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
              <a className="p-3 bg-white rounded-full text-primary hover:text-accent transition-colors" href="#">
                <span className="material-symbols-outlined">code</span>
              </a>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-1">
            <div className="flex gap-2 mb-3 flex-wrap">
              <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-bold uppercase rounded-sm">Next.js</span>
              <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-bold uppercase rounded-sm">Vercel</span>
              <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-bold uppercase rounded-sm">Framer Motion</span>
            </div>
            <h3 className="text-primary dark:text-slate-100 text-xl font-bold mb-2">Portfolio Engine</h3>
            <p className="text-primary/60 dark:text-slate-400 text-sm leading-relaxed flex-1">
              A blazingly fast, headless CMS driven portfolio template designed for modern web developers.
            </p>
            <div className="mt-4 pt-4 border-t border-primary/5 dark:border-white/5 flex justify-between items-center">
              <span className="text-xs text-primary/40 dark:text-slate-500 font-medium">Last updated 5 days ago</span>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary/40 text-lg hover:text-accent cursor-pointer">star</span>
                <span className="material-symbols-outlined text-primary/40 text-lg hover:text-accent cursor-pointer">share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
