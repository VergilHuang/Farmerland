import { useMemo } from "react";
import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";

import ArticleCard from "@/components/ArticleCard";
import { posts } from "@/../.velite";

export default function Home() {
  const featuredPosts = useMemo(() => {
    return [...posts]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3)
      .map((post) => ({
        to: `/articles/${post.slug}`,
        imageUrl:
          post.cover ||
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        imageAlt: post.coverAlt || post.title,
        category: post.category || "Uncategorized",
        year: new Date(post.date).getFullYear().toString(),
        title: post.title,
        description: post.excerpt || post.content.substring(0, 150) + "...",
        date: new Date(post.date).toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
        readTime: post.readingTime ? `${post.readingTime} min read` : "5 min read",
      }));
  }, []);

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
          {featuredPosts.map((post, idx) => (
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
