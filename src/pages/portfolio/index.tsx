import ProjectCard from "@/components/ProjectCard";

const PROJECTS = [
  {
    title: "AI Task Planner",
    description:
      "Intelligent scheduling system with automated priority mapping and natural language processing for task entry.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuARxlLKpzQ6dPL_3AWavWn9r0a2TtzI1H1vvMr-x0U143T1OiEBHN2BbUSgGiRHGKDHtDnRfRzSE00FjfuFKcUGpR0e5fq7_k-thvKsLB25P8gduexoKQtybAvZWC7MSce9LiOMyYqlCUyqLgamSxgY9iES-bzfN9ruQpS8KirC-QFzBcGAqsN-1cv1OCYcJf1uLtr7FrGWhbmXSvKtuPCmhw425ZKJWbk1nAs-SRuI60EehjnjugXCvipXo3C13xnNV6rQHJwe_UR-",
    imageAlt: "Abstract geometric AI neural network visualization",
    tags: ["React", "OpenAI", "Tailwind"],
    lastUpdated: "2 days ago",
  },
  {
    title: "Real-time Dashboard",
    description: "Low-latency data visualization engine designed for high-traffic monitoring and telemetry streaming.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAoKi6wtG7myQMDYjYjbakvlaKeuxvVWRcypwAv5g2YXxyxGYdD4iFmeSFUNI2G0eyj2NkFZHbZcxkPd1fZPx6VyzTfwCMkDdAAutF56RCvfxhlteyB0ini_fbp7DErkiekRskS7KWr12p5MyiY_PQbWJkAtE9Bo2V2D7NMeWTy9TjLvBUjTDSOabDoxDlwEZPLtrAlv1ZvTmdqLcNq7Ebf3dFq_6mjBP_YWD0NfXyOoGySzw_GwQ4OhnfKHb6lUF334hUMY35jKQNK",
    imageAlt: "Cyberpunk style real-time data dashboard interface",
    tags: ["Node.js", "Socket.io", "Redis"],
    lastUpdated: "1 week ago",
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable multi-region deployment architecture blueprint for enterprise-grade SaaS applications.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0n3qwBJGYyAIQ1ZoNMzYCmOv3mBUQwjM45icfu5qRfZc-lYzHWrCj-CtCixgblQZXYMjEVR_S2GzCrenewSapNr8Nhv_2-ksBgMaz9xgwhZBskA7XPzJ8YdXRrkNjFUu36FhefmlSQ4EUCKdUR2UdEEIt55oz2eWHGVLPiYKXI-rDEH7xIsCaYpGh3qM9fHps29ZOhjvZZQcnXyl2-qLssLssurA_QJ9aM78HNf9RuNgonlSkymF3o2b92AexgCHlm5GoJn68MS8l",
    imageAlt: "Digital network earth with cloud infrastructure nodes",
    tags: ["AWS", "Terraform", "Docker"],
    lastUpdated: "2 weeks ago",
  },
  {
    title: "Neural Mesh",
    description:
      "Ongoing research exploration on self-optimizing neural network topologies for edge computing devices.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAgv0Mfd5D7qKzeAGHAO1mPm24Pi5gmFlp4LieeQWMvD8QZbGDBy-sGnwrNw5D7B_dsMBV7OjB4UpScRxswyrY03iAEvt4EMUi46Npu_KIgoAY1gxPdKmH8s0HdTPkXHh4Zdf268YtGF-GQ9cwSX4HzD-RwZj_fyw93RWWsSbMOPAdcUH5-DddDpDCj-8WS6732xTNoHnGGHUgfEznHzrNs13tVu6QrAQgNg_P0aP5ic5zUmWanSxeugf8FM25SHd8TTGs510P6r-eC",
    imageAlt: "Abstract colorful light waves representing neural mesh",
    tags: ["Python", "PyTorch", "Research"],
    lastUpdated: "1 month ago",
  },
  {
    title: "Distributed Storage",
    description: "High-performance distributed key-value store with consistent hashing and raft consensus protocol.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDBr9m78acN3J9pj5qOG1FBWbNgXX-HYBklIpQSkk2r-n3sVK1ZlJH4fp7SKtA1oQOXsvahEFcMJWS2YPeaCagVkgZhV-7Y3ZaP_3NyXAldExY5mdToF6nMxpxH_M6alairjZo50oxNWqSAnZlfHv07IAH4lK3H5xOghSt2fJ2XQZmKorEBSIKVmB-xaZGC1uPClPLieLZw2yI4qeBNgDcxD97RJ1TkRuS8UDwFusfBgdeqXx4-aUTH_20kdR20TjK4BJP4sdXIsqPm",
    imageAlt: "Modern server room with blue lights for data storage project",
    tags: ["Go", "gRPC", "PostgreSQL"],
    lastUpdated: "3 days ago",
  },
  {
    title: "Portfolio Engine",
    description: "A blazingly fast, headless CMS driven portfolio template designed for modern web developers.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXoRbIgoNd96VFht_LVbqG0452FQVynad3tRQYzMSyyMb86CF2BWH173s_D9VouK4RsIbvcCiGwddCjFUlMCkYILChJBD3TjFdFuWtF6jQEQAQ_xMs6Qd6zU9GYuRdFV7JSd57-uUhnDTBKY6dTKPaIwLLdeuXvHH73LasKra6TuY9HLth3iu_1U3OWqSL9j_fUXw39EXTrz2GfR6qJHAs3C89wpVdsGvWcn-ZTmHBPqVi6UdDDOtT53iwduf0zFterogYVvfDWQi2",
    imageAlt: "Minimalist desk with developer tools and abstract background",
    tags: ["Next.js", "Vercel", "Framer Motion"],
    lastUpdated: "5 days ago",
  },
];

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
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
}
