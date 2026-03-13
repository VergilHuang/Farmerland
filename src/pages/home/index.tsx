import { Link } from "react-router-dom";
import HeroSection from "./HeroSection";

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
          {/* Card 1 */}
          <Link
            to="/articles/scaling-microservices"
            className="group flex flex-col overflow-hidden rounded-xl border border-primary/5 bg-slate-50 transition-all hover:-translate-y-1 hover:shadow-xl dark:border-white/5 dark:bg-slate-800">
            <div className="aspect-video overflow-hidden">
              <img
                alt="Cloud computing server racks"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuClOGIxIu45v1mE_5OtkDDzDsV4Lj14Zv1IqYyQzjoewJeIYctvrmDv7tLa1oi-mDP_neol3R_iHP1ktwYg985_rBBZ6n_aLbu59YBKUSU7XD4wopkIEJ0x9AEs_4bUoj-OYg3FZVYSAKE1lV8pyS--vOLzZdI3UvLcHLTI1LaKOmJQy2Ei1xjevS0oAVVYnZ-l0pbPIVsYv6VHjZzVS7zWV00ydJIyh3gm1G_M3oelzhyh8w_pclTWFh2X5Sjq1GOqW8DbNoY7UGaO"
              />
            </div>
            <div className="flex flex-col gap-3 p-5">
              <div className="flex gap-2">
                <span className="rounded-md bg-accent/10 px-2 py-0.5 text-[10px] font-bold tracking-tight text-accent uppercase">
                  Architecture
                </span>
                <span className="rounded-md bg-primary/5 px-2 py-0.5 text-[10px] font-bold tracking-tight text-slate-500 uppercase dark:bg-slate-800 dark:text-slate-400">
                  2024
                </span>
              </div>
              <h3 className="text-lg leading-snug font-bold text-slate-900 transition-colors group-hover:text-accent dark:text-slate-100">
                Scaling Microservices: Patterns and Pitfalls
              </h3>
              <p className="line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
                A comprehensive guide on managing state and consistency across distributed databases in high-traffic
                environments.
              </p>
              <div className="flex items-center justify-between border-t border-primary/5 pt-4 text-xs font-medium text-slate-400 dark:border-white/5 dark:text-slate-500">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  Jan 12, 2024
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">schedule</span>8 min read
                </span>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            to="/articles/rust-vs-go"
            className="group flex flex-col overflow-hidden rounded-xl border border-primary/5 bg-slate-50 transition-all hover:-translate-y-1 hover:shadow-xl dark:border-white/5 dark:bg-slate-800">
            <div className="aspect-video overflow-hidden">
              <img
                alt="Cybersecurity conceptual image"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpBCBwb6XeOkVzTQWIcrQavBShssjpW3SDofBV61y6wKn14D-O5Ac3FGwMzF0HUawTYA1GbGii6JNfkI7xnBK861xr1bld052gC2NLR6g7U4Q4kBKLV_Wyb5w9E3t3QXlN_8MiYyjvdfX665GE6fP_jrPLhd1LIS0JLUUgvetokAvf_PdAotxqoV2pZ__ECqTQUy42IYy0jhd50zcib6rIrCAYwrp_HbxjXydr4Vw8C2CKOqKH0WCOxPk0r2F2gDsZF0JZaXoHo3DI"
              />
            </div>
            <div className="flex flex-col gap-3 p-5">
              <div className="flex gap-2">
                <span className="rounded-md bg-accent/10 px-2 py-0.5 text-[10px] font-bold tracking-tight text-accent uppercase">
                  Performance
                </span>
                <span className="rounded-md bg-primary/5 px-2 py-0.5 text-[10px] font-bold tracking-tight text-slate-500 uppercase dark:bg-slate-800 dark:text-slate-400">
                  Rust
                </span>
              </div>
              <h3 className="text-lg leading-snug font-bold text-slate-900 transition-colors group-hover:text-accent dark:text-slate-100">
                Rust vs Go: The Performance Debate
              </h3>
              <p className="line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
                Exploring memory safety and runtime overhead in modern systems programming languages for enterprise
                tools.
              </p>
              <div className="flex items-center justify-between border-t border-primary/5 pt-4 text-xs font-medium text-slate-400 dark:border-white/5 dark:text-slate-500">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  Jan 10, 2024
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  12 min read
                </span>
              </div>
            </div>
          </Link>

          {/* Card 3 */}
          <Link
            to="/articles/deep-dive-k8s-schedulers"
            className="group flex flex-col overflow-hidden rounded-xl border border-primary/5 bg-slate-50 transition-all hover:-translate-y-1 hover:shadow-xl dark:border-white/5 dark:bg-slate-800">
            <div className="aspect-video overflow-hidden">
              <img
                alt="Kubernetes logo abstract"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb35gdeS9ryF9DkxYA8b9s6xok1u9Py-amzmP5mQyoxdSlTk8OdPeYfWJ-U3cWlZm2SqZnoKIt3ynbCOeITcptG8pR2OAP7AdwGKT_QjIkp8p3xrYtE8aKSwmZNCrsTe4-JbCOTN-rCE5wKIDCgfvxoDl3cglQJxDMK3UTbk5mSyicKwJ_Q5pTxNfwOoYF9Z_0s3NHMqRY_DN_FetZtBWhsINMQk8QeNpl9HtI_lKQGAzCu-VTW9XYrh8AsPHXRHtpIZ1jlGgSyG3E"
              />
            </div>
            <div className="flex flex-col gap-3 p-5">
              <div className="flex gap-2">
                <span className="rounded-md bg-accent/10 px-2 py-0.5 text-[10px] font-bold tracking-tight text-accent uppercase">
                  DevOps
                </span>
                <span className="rounded-md bg-primary/5 px-2 py-0.5 text-[10px] font-bold tracking-tight text-slate-500 uppercase dark:bg-slate-800 dark:text-slate-400">
                  Cloud
                </span>
              </div>
              <h3 className="text-lg leading-snug font-bold text-slate-900 transition-colors group-hover:text-accent dark:text-slate-100">
                Deep Dive into K8s Schedulers
              </h3>
              <p className="line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
                How custom scheduling logic can optimize your resource utilization and decrease cloud billing costs
                significantly.
              </p>
              <div className="flex items-center justify-between border-t border-primary/5 pt-4 text-xs font-medium text-slate-400 dark:border-white/5 dark:text-slate-500">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  Jan 08, 2024
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  15 min read
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Latest Research Section */}
      <section>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="flex items-center gap-3 text-2xl leading-tight font-bold text-primary dark:text-slate-50">
            <span className="material-symbols-outlined text-accent">science</span>
            Latest Research
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-xl border border-primary/5 bg-slate-50 p-6 shadow-sm md:flex-row dark:border-white/5 dark:bg-slate-800">
            <div className="flex h-32 w-full flex-shrink-0 items-center justify-center rounded-lg bg-primary/5 md:w-32 dark:bg-white/5">
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

          <div className="flex flex-col gap-6 rounded-xl border border-primary/5 bg-slate-50 p-6 shadow-sm md:flex-row dark:border-white/5 dark:bg-slate-800">
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
      </section>
    </div>
  );
}
