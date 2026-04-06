import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";

import ArticleCard from "@/components/ArticleCard";

const FEATURED_POSTS = [
  {
    to: "/articles/scaling-microservices",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClOGIxIu45v1mE_5OtkDDzDsV4Lj14Zv1IqYyQzjoewJeIYctvrmDv7tLa1oi-mDP_neol3R_iHP1ktwYg985_rBBZ6n_aLbu59YBKUSU7XD4wopkIEJ0x9AEs_4bUoj-OYg3FZVYSAKE1lV8pyS--vOLzZdI3UvLcHLTI1LaKOmJQy2Ei1xjevS0oAVVYnZ-l0pbPIVsYv6VHjZzVS7zWV00ydJIyh3gm1G_M3oelzhyh8w_pclTWFh2X5Sjq1GOqW8DbNoY7UGaO",
    imageAlt: "Cloud computing server racks",
    category: "Architecture",
    year: "2024",
    title: "Scaling Microservices: Patterns and Pitfalls",
    description:
      "A comprehensive guide on managing state and consistency across distributed databases in high-traffic environments.",
    date: "Jan 12, 2024",
    readTime: "8 min read",
  },
  {
    to: "/articles/rust-vs-go",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpBCBwb6XeOkVzTQWIcrQavBShssjpW3SDofBV61y6wKn14D-O5Ac3FGwMzF0HUawTYA1GbGii6JNfkI7xnBK861xr1bld052gC2NLR6g7U4Q4kBKLV_Wyb5w9E3t3QXlN_8MiYyjvdfX665GE6fP_jrPLhd1LIS0JLUUgvetokAvf_PdAotxqoV2pZ__ECqTQUy42IYy0jhd50zcib6rIrCAYwrp_HbxjXydr4Vw8C2CKOqKH0WCOxPk0r2F2gDsZF0JZaXoHo3DI",
    imageAlt: "Cybersecurity conceptual image",
    category: "Performance",
    year: "Rust",
    title: "Rust vs Go: The Performance Debate",
    description:
      "Exploring memory safety and runtime overhead in modern systems programming languages for enterprise tools.",
    date: "Jan 10, 2024",
    readTime: "12 min read",
  },
  {
    to: "/articles/deep-dive-k8s-schedulers",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCb35gdeS9ryF9DkxYA8b9s6xok1u9Py-amzmP5mQyoxdSlTk8OdPeYfWJ-U3cWlZm2SqZnoKIt3ynbCOeITcptG8pR2OAP7AdwGKT_QjIkp8p3xrYtE8aKSwmZNCrsTe4-JbCOTN-rCE5wKIDCgfvxoDl3cglQJxDMK3UTbk5mSyicKwJ_Q5pTxNfwOoYF9Z_0s3NHMqRY_DN_FetZtBWhsINMQk8QeNpl9HtI_lKQGAzCu-VTW9XYrh8AsPHXRHtpIZ1jlGgSyG3E",
    imageAlt: "Kubernetes logo abstract",
    category: "DevOps",
    year: "Cloud",
    title: "Deep Dive into K8s Schedulers",
    description:
      "How custom scheduling logic can optimize your resource utilization and decrease cloud billing costs significantly.",
    date: "Jan 08, 2024",
    readTime: "15 min read",
  },
];

export default function Home() {
  return (
    <div className="px-4 py-8 md:px-10 lg:px-40">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Posts Section */}
      <section className="mb-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="flex items-center gap-3 text-2xl leading-tight font-bold text-primary dark:text-slate-50">
            <span className="material-symbols-outlined text-accent">auto_awesome</span>
            Featured Posts
          </h2>
          <Link to="/articles" className="text-sm font-bold text-accent hover:underline">
            View All Posts
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED_POSTS.map((post, idx) => (
            <ArticleCard key={idx} {...post} />
          ))}
        </div>
      </section>

      {/* Latest Research Section */}
      {/* <section>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="flex items-center gap-3 text-2xl leading-tight font-bold text-primary dark:text-slate-50">
            <span className="material-symbols-outlined text-accent">science</span>
            Latest Research
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-xl border border-primary/5 bg-slate-50 p-6 shadow-sm transition-colors duration-500 ease-in-out md:flex-row dark:border-white/5 dark:bg-slate-800">
            <div className="flex h-32 w-full shrink-0 items-center justify-center rounded-lg bg-primary/5 md:w-32 dark:bg-white/5">
              <span className="material-symbols-outlined text-5xl text-accent/40">memory</span>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <h4 className="text-lg leading-tight font-bold text-slate-900 dark:text-slate-100">
                Post-Quantum Cryptography in Web Browsers
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                A study on the performance impact of Kyber768 algorithm on mobile latency.
              </p>
              <div className="mt-2 flex items-center gap-4">
                <span className="text-xs font-bold text-primary/60 dark:text-slate-500">PDF Research Paper</span>
                <button className="flex items-center gap-1 text-xs font-bold text-accent hover:underline">
                  <span className="material-symbols-outlined text-sm">download</span> Download
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-xl border border-primary/5 bg-slate-50 p-6 shadow-sm transition-colors duration-500 ease-in-out md:flex-row dark:border-white/5 dark:bg-slate-800">
            <div className="flex h-32 w-full shrink-0 items-center justify-center rounded-lg bg-primary/5 md:w-32 dark:bg-white/5">
              <span className="material-symbols-outlined text-5xl text-accent/40">hub</span>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <h4 className="text-lg leading-tight font-bold text-slate-900 dark:text-slate-100">
                Next-Gen Consensus Mechanisms
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Analyzing the tradeoffs between Proof of Stake and modern DAG architectures.
              </p>
              <div className="mt-2 flex items-center gap-4">
                <span className="text-xs font-bold text-primary/60 dark:text-slate-500">Technical Report</span>
                <button className="flex items-center gap-1 text-xs font-bold text-accent hover:underline">
                  <span className="material-symbols-outlined text-sm">download</span> Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
