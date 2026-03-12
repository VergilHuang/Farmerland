import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="px-4 md:px-10 lg:px-40 py-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-primary/5 dark:border-white/5">
          <div className="aspect-video lg:aspect-square bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-20"></div>
            <img
              alt="Professional developer workstation"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5P7RcuniZUsSxm__C6TNPQzeqnzDAsrAymNVQgQ9A86ZUgeItYdOHX1TeNSM8XYmC1ZjuCifBk6V6OuVyHZQBu56Ej6OoasUeaUva4mwI7T2atD5H8qKHAZeODOxswuyn1UNhag8ODbQvtQxCT8xknVColJ6KnXl87o_xcUrX5jMfpnoBlBtEmXhAXjewSxj_uhisCgae9XhGHWkn7VgpRyuFX2ydcEp6a-byRRTQGQTw6IpveE9I1b8KE3b8IiLmad3F1PeIIV0h"
            />
          </div>
          <div className="p-8 lg:p-12 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider w-fit">
              <span className="material-symbols-outlined text-sm">verified</span>
              Senior Engineering
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-primary dark:text-slate-50 text-4xl md:text-5xl font-black leading-tight tracking-tight">
                Welcome back,<br />Senior Dev
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-lg">
                10 years of engineering excellence distilled into technical deep-dives. Explore the latest in distributed systems, high-performance computing, and cloud-native architecture.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/portfolio" className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary dark:bg-slate-700 text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-md">
                View My Projects
              </Link>
              <Link to="/about" className="flex items-center justify-center rounded-lg h-12 px-8 border-2 border-primary/10 dark:border-white/10 text-primary dark:text-slate-300 text-sm font-bold hover:bg-primary/5 dark:hover:bg-white/5 transition-all">
                Read Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-primary dark:text-slate-50 text-2xl font-bold leading-tight flex items-center gap-3">
            <span className="material-symbols-outlined text-accent">auto_awesome</span>
            Featured Posts
          </h2>
          <Link to="/articles" className="text-accent text-sm font-bold hover:underline">View All Posts</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Link to="/articles/scaling-microservices" className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-primary/5 dark:border-white/5 overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="aspect-video overflow-hidden">
              <img
                alt="Cloud computing server racks"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuClOGIxIu45v1mE_5OtkDDzDsV4Lj14Zv1IqYyQzjoewJeIYctvrmDv7tLa1oi-mDP_neol3R_iHP1ktwYg985_rBBZ6n_aLbu59YBKUSU7XD4wopkIEJ0x9AEs_4bUoj-OYg3FZVYSAKE1lV8pyS--vOLzZdI3UvLcHLTI1LaKOmJQy2Ei1xjevS0oAVVYnZ-l0pbPIVsYv6VHjZzVS7zWV00ydJIyh3gm1G_M3oelzhyh8w_pclTWFh2X5Sjq1GOqW8DbNoY7UGaO"
              />
            </div>
            <div className="p-5 flex flex-col gap-3">
              <div className="flex gap-2">
                <span className="px-2 py-0.5 rounded-md bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-tight">Architecture</span>
                <span className="px-2 py-0.5 rounded-md bg-primary/5 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-tight">2024</span>
              </div>
              <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-snug group-hover:text-accent transition-colors">Scaling Microservices: Patterns and Pitfalls</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">A comprehensive guide on managing state and consistency across distributed databases in high-traffic environments.</p>
              <div className="pt-4 flex items-center justify-between text-slate-400 dark:text-slate-500 text-xs font-medium border-t border-primary/5 dark:border-white/5">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">calendar_today</span>
                  Jan 12, 2024
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  8 min read
                </span>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/articles/rust-vs-go" className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-primary/5 dark:border-white/5 overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="aspect-video overflow-hidden">
              <img
                alt="Cybersecurity conceptual image"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpBCBwb6XeOkVzTQWIcrQavBShssjpW3SDofBV61y6wKn14D-O5Ac3FGwMzF0HUawTYA1GbGii6JNfkI7xnBK861xr1bld052gC2NLR6g7U4Q4kBKLV_Wyb5w9E3t3QXlN_8MiYyjvdfX665GE6fP_jrPLhd1LIS0JLUUgvetokAvf_PdAotxqoV2pZ__ECqTQUy42IYy0jhd50zcib6rIrCAYwrp_HbxjXydr4Vw8C2CKOqKH0WCOxPk0r2F2gDsZF0JZaXoHo3DI"
              />
            </div>
            <div className="p-5 flex flex-col gap-3">
              <div className="flex gap-2">
                <span className="px-2 py-0.5 rounded-md bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-tight">Performance</span>
                <span className="px-2 py-0.5 rounded-md bg-primary/5 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-tight">Rust</span>
              </div>
              <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-snug group-hover:text-accent transition-colors">Rust vs Go: The Performance Debate</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">Exploring memory safety and runtime overhead in modern systems programming languages for enterprise tools.</p>
              <div className="pt-4 flex items-center justify-between text-slate-400 dark:text-slate-500 text-xs font-medium border-t border-primary/5 dark:border-white/5">
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
          <Link to="/articles/deep-dive-k8s-schedulers" className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-primary/5 dark:border-white/5 overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
            <div className="aspect-video overflow-hidden">
              <img
                alt="Kubernetes logo abstract"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb35gdeS9ryF9DkxYA8b9s6xok1u9Py-amzmP5mQyoxdSlTk8OdPeYfWJ-U3cWlZm2SqZnoKIt3ynbCOeITcptG8pR2OAP7AdwGKT_QjIkp8p3xrYtE8aKSwmZNCrsTe4-JbCOTN-rCE5wKIDCgfvxoDl3cglQJxDMK3UTbk5mSyicKwJ_Q5pTxNfwOoYF9Z_0s3NHMqRY_DN_FetZtBWhsINMQk8QeNpl9HtI_lKQGAzCu-VTW9XYrh8AsPHXRHtpIZ1jlGgSyG3E"
              />
            </div>
            <div className="p-5 flex flex-col gap-3">
              <div className="flex gap-2">
                <span className="px-2 py-0.5 rounded-md bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-tight">DevOps</span>
                <span className="px-2 py-0.5 rounded-md bg-primary/5 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-tight">Cloud</span>
              </div>
              <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-snug group-hover:text-accent transition-colors">Deep Dive into K8s Schedulers</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">How custom scheduling logic can optimize your resource utilization and decrease cloud billing costs significantly.</p>
              <div className="pt-4 flex items-center justify-between text-slate-400 dark:text-slate-500 text-xs font-medium border-t border-primary/5 dark:border-white/5">
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
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-primary dark:text-slate-50 text-2xl font-bold leading-tight flex items-center gap-3">
            <span className="material-symbols-outlined text-accent">science</span>
            Latest Research
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-white dark:bg-slate-900 rounded-xl border border-primary/5 dark:border-white/5 shadow-sm">
            <div className="w-full md:w-32 h-32 flex-shrink-0 bg-primary/5 dark:bg-white/5 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-accent/40">memory</span>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <h4 className="text-slate-900 dark:text-slate-100 font-bold text-lg leading-tight">Post-Quantum Cryptography in Web Browsers</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm">A study on the performance impact of Kyber768 algorithm on mobile latency.</p>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-xs text-primary/60 dark:text-slate-500 font-bold">PDF Research Paper</span>
                <button className="text-accent text-xs font-bold flex items-center gap-1 hover:underline">
                  <span className="material-symbols-outlined text-sm">download</span> Download
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 p-6 bg-white dark:bg-slate-900 rounded-xl border border-primary/5 dark:border-white/5 shadow-sm">
            <div className="w-full md:w-32 h-32 flex-shrink-0 bg-primary/5 dark:bg-white/5 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-accent/40">hub</span>
            </div>
            <div className="flex flex-col justify-center gap-2">
              <h4 className="text-slate-900 dark:text-slate-100 font-bold text-lg leading-tight">Next-Gen Consensus Mechanisms</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Analyzing the tradeoffs between Proof of Stake and modern DAG architectures.</p>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-xs text-primary/60 dark:text-slate-500 font-bold">Technical Report</span>
                <button className="text-accent text-xs font-bold flex items-center gap-1 hover:underline">
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
