export default function Portfolio() {
  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-1 flex-col px-6 py-10 md:px-20">
      {/* Hero Section */}
      <div className="mb-10 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold tracking-widest text-accent uppercase">Portfolio</span>
          <h1 className="text-4xl leading-tight font-black tracking-tight text-primary md:text-5xl dark:text-slate-100">
            Projects & Technical Research
          </h1>
          <p className="max-w-2xl text-lg text-primary/60 dark:text-slate-400">
            A curated collection of experimental builds, open-source contributions, and deep-dives into modern
            infrastructure.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="scrollbar-hide mb-8 flex gap-3 overflow-x-auto pb-2">
        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary px-5 text-sm font-bold text-white shadow-md shadow-primary/20">
          <span>All Projects</span>
        </button>
        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full border border-primary/10 bg-white px-5 text-sm font-medium text-primary transition-all hover:border-accent dark:border-white/10 dark:bg-slate-800 dark:text-slate-300">
          <span>React</span>
        </button>
        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full border border-primary/10 bg-white px-5 text-sm font-medium text-primary transition-all hover:border-accent dark:border-white/10 dark:bg-slate-800 dark:text-slate-300">
          <span>Node.js</span>
        </button>
        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full border border-primary/10 bg-white px-5 text-sm font-medium text-primary transition-all hover:border-accent dark:border-white/10 dark:bg-slate-800 dark:text-slate-300">
          <span>AWS</span>
        </button>
        <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full border border-primary/10 bg-white px-5 text-sm font-medium text-primary transition-all hover:border-accent dark:border-white/10 dark:bg-slate-800 dark:text-slate-300">
          <span>AI/ML</span>
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Card 1 */}
        <div className="flex flex-col overflow-hidden rounded-xl border border-primary/5 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl dark:border-white/5 dark:bg-slate-800">
          <div
            className="group relative aspect-video w-full bg-cover bg-center bg-no-repeat"
            title="Abstract geometric AI neural network visualization"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuARxlLKpzQ6dPL_3AWavWn9r0a2TtzI1H1vvMr-x0U143T1OiEBHN2BbUSgGiRHGKDHtDnRfRzSE00FjfuFKcUGpR0e5fq7_k-thvKsLB25P8gduexoKQtybAvZWC7MSce9LiOMyYqlCUyqLgamSxgY9iES-bzfN9ruQpS8KirC-QFzBcGAqsN-1cv1OCYcJf1uLtr7FrGWhbmXSvKtuPCmhw425ZKJWbk1nAs-SRuI60EehjnjugXCvipXo3C13xnNV6rQHJwe_UR-")',
            }}>
            <div className="absolute inset-0 flex items-center justify-center gap-4 bg-primary/40 opacity-0 transition-opacity group-hover:opacity-100">
              <a className="rounded-full bg-white p-3 text-primary transition-colors hover:text-accent" href="#">
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
              <a className="rounded-full bg-white p-3 text-primary transition-colors hover:text-accent" href="#">
                <span className="material-symbols-outlined">code</span>
              </a>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded-sm bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent uppercase">
                React
              </span>
              <span className="rounded-sm bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent uppercase">
                OpenAI
              </span>
              <span className="rounded-sm bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent uppercase">
                Tailwind
              </span>
            </div>
            <h3 className="mb-2 text-xl font-bold text-primary dark:text-slate-100">AI Task Planner</h3>
            <p className="flex-1 text-sm leading-relaxed text-primary/60 dark:text-slate-400">
              Intelligent scheduling system with automated priority mapping and natural language processing for task
              entry.
            </p>
            <div className="mt-4 flex items-center justify-between border-t border-primary/5 pt-4 dark:border-white/5">
              <span className="text-xs font-medium text-primary/40 dark:text-slate-500">Last updated 2 days ago</span>
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

        {/* Card 2 */}
        <div className="flex flex-col overflow-hidden rounded-xl border border-primary/5 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl dark:border-white/5 dark:bg-slate-800">
          <div
            className="group relative aspect-video w-full bg-cover bg-center bg-no-repeat"
            title="Cyberpunk style real-time data dashboard interface"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAoKi6wtG7myQMDYjYjbakvlaKeuxvVWRcypwAv5g2YXxyxGYdD4iFmeSFUNI2G0eyj2NkFZHbZcxkPd1fZPx6VyzTfwCMkDdAAutF56RCvfxhlteyB0ini_fbp7DErkiekRskS7KWr12p5MyiY_PQbWJkAtE9Bo2V2D7NMeWTy9TjLvBUjTDSOabDoxDlwEZPLtrAlv1ZvTmdqLcNq7Ebf3dFq_6mjBP_YWD0NfXyOoGySzw_GwQ4OhnfKHb6lUF334hUMY35jKQNK")',
            }}>
            <div className="absolute inset-0 flex items-center justify-center gap-4 bg-primary/40 opacity-0 transition-opacity group-hover:opacity-100">
              <a className="rounded-full bg-white p-3 text-primary transition-colors hover:text-accent" href="#">
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
              <a className="rounded-full bg-white p-3 text-primary transition-colors hover:text-accent" href="#">
                <span className="material-symbols-outlined">code</span>
              </a>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded-sm bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent uppercase">
                Node.js
              </span>
              <span className="rounded-sm bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent uppercase">
                Socket.io
              </span>
              <span className="rounded-sm bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent uppercase">
                Redis
              </span>
            </div>
            <h3 className="mb-2 text-xl font-bold text-primary dark:text-slate-100">Real-time Dashboard</h3>
            <p className="flex-1 text-sm leading-relaxed text-primary/60 dark:text-slate-400">
              Low-latency data visualization engine designed for high-traffic monitoring and telemetry streaming.
            </p>
            <div className="mt-4 flex items-center justify-between border-t border-primary/5 pt-4 dark:border-white/5">
              <span className="text-xs font-medium text-primary/40 dark:text-slate-500">Last updated 1 week ago</span>
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

        {/* Card 3 */}
        <div className="flex flex-col overflow-hidden rounded-xl border border-primary/5 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl dark:border-white/5 dark:bg-slate-800">
          <div
            className="group relative aspect-video w-full bg-cover bg-center bg-no-repeat"
            title="Digital network earth with cloud infrastructure nodes"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0n3qwBJGYyAIQ1ZoNMzYCmOv3mBUQwjM45icfu5qRfZc-lYzHWrCj-CtCixgblQZXYMjEVR_S2GzCrenewSapNr8Nhv_2-ksBgMaz9xgwhZBskA7XPzJ8YdXRrkNjFUu36FhefmlSQ4EUCKdUR2UdEEIt55oz2eWHGVLPiYKXI-rDEH7xIsCaYpGh3qM9fHps29ZOhjvZZQcnXyl2-qLssLssurA_QJ9aM78HNf9RuNgonlSkymF3o2b92AexgCHlm5GoJn68MS8l")',
            }}>
            <div className="absolute inset-0 flex items-center justify-center gap-4 bg-primary/40 opacity-0 transition-opacity group-hover:opacity-100">
              <a className="rounded-full bg-white p-3 text-primary transition-colors hover:text-accent" href="#">
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
              <a className="rounded-full bg-white p-3 text-primary transition-colors hover:text-accent" href="#">
                <span className="material-symbols-outlined">code</span>
              </a>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded-sm bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent uppercase">
                AWS
              </span>
              <span className="rounded-sm bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent uppercase">
                Terraform
              </span>
              <span className="rounded-sm bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent uppercase">
                Docker
              </span>
            </div>
            <h3 className="mb-2 text-xl font-bold text-primary dark:text-slate-100">Cloud Infrastructure</h3>
            <p className="flex-1 text-sm leading-relaxed text-primary/60 dark:text-slate-400">
              Scalable multi-region deployment architecture blueprint for enterprise-grade SaaS applications.
            </p>
            <div className="mt-4 flex items-center justify-between border-t border-primary/5 pt-4 dark:border-white/5">
              <span className="text-xs font-medium text-primary/40 dark:text-slate-500">Last updated 2 weeks ago</span>
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

        {/* Card 4 */}
        <div className="flex flex-col overflow-hidden rounded-xl border border-primary/5 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl dark:border-white/5 dark:bg-slate-800">
          <div
            className="group relative aspect-video w-full bg-cover bg-center bg-no-repeat"
            title="Abstract colorful light waves representing neural mesh"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgv0Mfd5D7qKzeAGHAO1mPm24Pi5gmFlp4LieeQWMvD8QZbGDBy-sGnwrNw5D7B_dsMBV7OjB4UpScRxswyrY03iAEvt4EMUi46Npu_KIgoAY1gxPdKmH8s0HdTPkXHh4Zdf268YtGF-GQ9cwSX4HzD-RwZj_fyw93RWWsSbMOPAdcUH5-DddDpDCj-8WS6732xTNoHnGGHUgfEznHzrNs13tVu6QrAQgNg_P0aP5ic5zUmWanSxeugf8FM25SHd8TTGs510P6r-eC")',
            }}>
            <div className="absolute inset-0 flex items-center justify-center gap-4 bg-primary/40 opacity-0 transition-opacity group-hover:opacity-100">
              <a className="rounded-full bg-white p-3 text-primary transition-colors hover:text-accent" href="#">
                <span className="material-symbols-outlined">description</span>
              </a>
              <a className="rounded-full bg-white p-3 text-primary transition-colors hover:text-accent" href="#">
                <span className="material-symbols-outlined">code</span>
              </a>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded-sm bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent uppercase">
                Python
              </span>
              <span className="rounded-sm bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent uppercase">
                PyTorch
              </span>
              <span className="rounded-sm bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent uppercase">
                Research
              </span>
            </div>
            <h3 className="mb-2 text-xl font-bold text-primary dark:text-slate-100">Neural Mesh</h3>
            <p className="flex-1 text-sm leading-relaxed text-primary/60 dark:text-slate-400">
              Ongoing research exploration on self-optimizing neural network topologies for edge computing devices.
            </p>
            <div className="mt-4 flex items-center justify-between border-t border-primary/5 pt-4 dark:border-white/5">
              <span className="text-xs font-medium text-primary/40 dark:text-slate-500">Last updated 1 month ago</span>
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

        {/* Card 5 */}
        <div className="flex flex-col overflow-hidden rounded-xl border border-primary/5 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl dark:border-white/5 dark:bg-slate-800">
          <div
            className="group relative aspect-video w-full bg-cover bg-center bg-no-repeat"
            title="Modern server room with blue lights for data storage project"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBr9m78acN3J9pj5qOG1FBWbNgXX-HYBklIpQSkk2r-n3sVK1ZlJH4fp7SKtA1oQOXsvahEFcMJWS2YPeaCagVkgZhV-7Y3ZaP_3NyXAldExY5mdToF6nMxpxH_M6alairjZo50oxNWqSAnZlfHv07IAH4lK3H5xOghSt2fJ2XQZmKorEBSIKVmB-xaZGC1uPClPLieLZw2yI4qeBNgDcxD97RJ1TkRuS8UDwFusfBgdeqXx4-aUTH_20kdR20TjK4BJP4sdXIsqPm")',
            }}>
            <div className="absolute inset-0 flex items-center justify-center gap-4 bg-primary/40 opacity-0 transition-opacity group-hover:opacity-100">
              <a className="rounded-full bg-white p-3 text-primary transition-colors hover:text-accent" href="#">
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
              <a className="rounded-full bg-white p-3 text-primary transition-colors hover:text-accent" href="#">
                <span className="material-symbols-outlined">code</span>
              </a>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded-sm bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent uppercase">
                Go
              </span>
              <span className="rounded-sm bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent uppercase">
                gRPC
              </span>
              <span className="rounded-sm bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent uppercase">
                PostgreSQL
              </span>
            </div>
            <h3 className="mb-2 text-xl font-bold text-primary dark:text-slate-100">Distributed Storage</h3>
            <p className="flex-1 text-sm leading-relaxed text-primary/60 dark:text-slate-400">
              High-performance distributed key-value store with consistent hashing and raft consensus protocol.
            </p>
            <div className="mt-4 flex items-center justify-between border-t border-primary/5 pt-4 dark:border-white/5">
              <span className="text-xs font-medium text-primary/40 dark:text-slate-500">Last updated 3 days ago</span>
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

        {/* Card 6 */}
        <div className="flex flex-col overflow-hidden rounded-xl border border-primary/5 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl dark:border-white/5 dark:bg-slate-800">
          <div
            className="group relative aspect-video w-full bg-cover bg-center bg-no-repeat"
            title="Minimalist desk with developer tools and abstract background"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCXoRbIgoNd96VFht_LVbqG0452FQVynad3tRQYzMSyyMb86CF2BWH173s_D9VouK4RsIbvcCiGwddCjFUlMCkYILChJBD3TjFdFuWtF6jQEQAQ_xMs6Qd6zU9GYuRdFV7JSd57-uUhnDTBKY6dTKPaIwLLdeuXvHH73LasKra6TuY9HLth3iu_1U3OWqSL9j_fUXw39EXTrz2GfR6qJHAs3C89wpVdsGvWcn-ZTmHBPqVi6UdDDOtT53iwduf0zFterogYVvfDWQi2")',
            }}>
            <div className="absolute inset-0 flex items-center justify-center gap-4 bg-primary/40 opacity-0 transition-opacity group-hover:opacity-100">
              <a className="rounded-full bg-white p-3 text-primary transition-colors hover:text-accent" href="#">
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
              <a className="rounded-full bg-white p-3 text-primary transition-colors hover:text-accent" href="#">
                <span className="material-symbols-outlined">code</span>
              </a>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded-sm bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent uppercase">
                Next.js
              </span>
              <span className="rounded-sm bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent uppercase">
                Vercel
              </span>
              <span className="rounded-sm bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent uppercase">
                Framer Motion
              </span>
            </div>
            <h3 className="mb-2 text-xl font-bold text-primary dark:text-slate-100">Portfolio Engine</h3>
            <p className="flex-1 text-sm leading-relaxed text-primary/60 dark:text-slate-400">
              A blazingly fast, headless CMS driven portfolio template designed for modern web developers.
            </p>
            <div className="mt-4 flex items-center justify-between border-t border-primary/5 pt-4 dark:border-white/5">
              <span className="text-xs font-medium text-primary/40 dark:text-slate-500">Last updated 5 days ago</span>
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
      </div>
    </div>
  );
}
