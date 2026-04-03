export default function About() {
  return (
    <div className="mx-auto flex w-full max-w-[960px] flex-1 flex-col px-4 py-10">
      {/* Profile Hero Section */}
      <div className="@container mb-8 flex p-4">
        <div className="flex w-full flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-6">
            <div
              className="aspect-square min-h-40 w-40 rounded-full bg-cover bg-center bg-no-repeat ring-4 ring-accent/20 ring-offset-4 ring-offset-background-light dark:ring-offset-background-dark"
              title="Close up portrait of the developer"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSM7HBPAd7qEv2zd3zIF8rvtyyTZph5ypEk3oCXZGorymwU63KvEUWby4_Ic1XdnfSFVuxc1g4ko7FDShuOuvI3tIua21OBVyFQwHM7mrBatWGxMU-c4auQ87woeFTy6gl1ht0HvFacX77XI7DKvp-3mpFvYVRrsafyqV5n6VjBEDyuO4EbE2umppSQM7bT9D7dBP4jEzhoCyF-OeqYD51yDuTgqHtFFtqNO_-M7ivDZq5u1AO_AgNF2XM8hPDc4wrlyY-MWsm08Kx")',
              }}></div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-center text-4xl leading-tight font-extrabold tracking-[-0.015em] text-primary dark:text-slate-100">
                The Farmer
              </h1>
              <p className="mt-1 text-center text-lg leading-normal font-semibold text-accent">Full-Stack Architect</p>
              <div className="mt-2 flex items-center gap-2 text-primary/70 dark:text-slate-400">
                <span className="material-symbols-outlined text-sm">verified</span>
                <p className="text-base font-medium">10 Years of Front-End Mastery & Beyond</p>
              </div>
            </div>
          </div>
          <button className="flex h-12 min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-accent px-6 text-base leading-normal font-bold tracking-[0.015em] text-white shadow-lg shadow-accent/30 transition-all hover:bg-accent/90 active:scale-95">
            <span className="material-symbols-outlined mr-2">download</span>
            <span className="truncate">Download Resume</span>
          </button>
        </div>
      </div>

      {/* Personal Bio Section */}
      <div className="mb-12 rounded-2xl border border-primary/5 bg-white p-8 shadow-sm transition-colors duration-500 ease-in-out dark:border-white/5 dark:bg-slate-800/50">
        <div className="mb-4 flex flex-wrap justify-between gap-3">
          <div className="flex min-w-72 flex-col gap-2">
            <h2 className="tracking-light text-[32px] leading-tight font-bold text-primary dark:text-slate-100">
              Cultivating Digital Landscapes
            </h2>
            <div className="h-1 w-20 rounded-full bg-accent"></div>
          </div>
        </div>
        <p className="text-lg leading-relaxed font-normal text-primary/80 dark:text-slate-300">
          With over a decade of experience in front-end development, I have spent years perfecting the art of the user
          interface—nurturing pixels like a farmer tends to his crops. My journey recently evolved into high-performance
          full-stack development, allowing me to build comprehensive, end-to-end digital experiences. I bridge the gap
          between stunning visual interfaces and robust, scalable back-end systems using React, Node.js, and TypeScript.
        </p>
      </div>

      {/* Journey Timeline */}
      <h2 className="px-4 pb-8 text-[28px] leading-tight font-bold tracking-[-0.015em] text-primary dark:text-slate-100">
        The Professional Growth Timeline
      </h2>
      <div className="space-y-0 px-4">
        {/* Full Stack Transition */}
        <div className="relative ml-4 border-l-2 border-accent/30 pb-12 pl-10">
          <div className="absolute top-0 -left-[11px] size-5 rounded-full border-4 border-background-light bg-accent dark:border-background-dark"></div>
          <div className="rounded-xl border border-primary/5 bg-white p-6 shadow-sm transition-colors duration-500 ease-in-out dark:border-white/5 dark:bg-slate-800/50">
            <span className="text-sm font-bold tracking-wider text-accent uppercase">2021 — Present</span>
            <h3 className="mt-1 text-xl font-bold text-primary dark:text-slate-100">Full-Stack Evolution</h3>
            <p className="mb-3 font-medium text-primary/60 dark:text-slate-400">Expanding the Ecosystem</p>
            <p className="text-primary/80 dark:text-slate-300">
              Transitioned to architecture-level roles, managing both client-side performance and server-side
              scalability. Expertise in AWS, PostgreSQL, and building custom APIs that power modern web applications.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">Node.js</span>
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">Docker</span>
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent">GraphQL</span>
            </div>
          </div>
        </div>

        {/* Front-End Mastery */}
        <div className="relative ml-4 border-l-2 border-accent/30 pb-12 pl-10">
          <div className="absolute top-0 -left-[11px] size-5 rounded-full border-4 border-background-light bg-primary dark:border-background-dark"></div>
          <div className="rounded-xl border border-primary/5 bg-white p-6 shadow-sm transition-colors duration-500 ease-in-out dark:border-white/5 dark:bg-slate-800/50">
            <span className="text-sm font-bold tracking-wider text-primary/50 uppercase dark:text-slate-400">
              2014 — 2021
            </span>
            <h3 className="mt-1 text-xl font-bold text-primary dark:text-slate-100">Senior Front-End Specialist</h3>
            <p className="mb-3 font-medium text-primary/60 dark:text-slate-400">The Decade of UI Perfection</p>
            <p className="text-primary/80 dark:text-slate-300">
              Spent 7 years mastering the art of React, Vue, and modern CSS architectures. Focused on accessibility,
              animation, and building component libraries used by millions of users worldwide.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary dark:bg-slate-700 dark:text-slate-300">
                React
              </span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary dark:bg-slate-700 dark:text-slate-300">
                TypeScript
              </span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary dark:bg-slate-700 dark:text-slate-300">
                Tailwind
              </span>
            </div>
          </div>
        </div>

        {/* The Beginning */}
        <div className="relative ml-4 border-l-2 border-transparent pb-4 pl-10">
          <div className="absolute top-0 -left-[11px] size-5 rounded-full border-4 border-background-light bg-primary/30 dark:border-background-dark"></div>
          <div className="rounded-xl border border-primary/5 bg-white p-6 shadow-sm transition-colors duration-500 ease-in-out dark:border-white/5 dark:bg-slate-800/50">
            <span className="text-sm font-bold tracking-wider text-primary/50 uppercase dark:text-slate-400">2013</span>
            <h3 className="mt-1 text-xl font-bold text-primary dark:text-slate-100">Planting the Seeds</h3>
            <p className="mb-3 font-medium text-primary/60 dark:text-slate-400">Junior Developer Roots</p>
            <p className="text-primary/80 dark:text-slate-300">
              Where it all began. Mastering HTML, CSS, and Vanilla JavaScript. Developing a keen eye for design and
              performance from day one.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="mt-8 grid grid-cols-1 gap-6 p-4 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h4 className="flex items-center gap-2 text-lg font-bold text-primary dark:text-slate-100">
            <span className="material-symbols-outlined text-accent">brush</span> Front-End Expertise
          </h4>
          <div className="space-y-4">
            <div>
              <div className="mb-1 flex justify-between">
                <span className="text-sm font-semibold">React & Ecosystem</span>
                <span className="text-sm font-semibold text-accent">95%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-primary/10 dark:bg-slate-800">
                <div className="h-2 rounded-full bg-accent" style={{ width: "95%" }}></div>
              </div>
            </div>
            <div>
              <div className="mb-1 flex justify-between">
                <span className="text-sm font-semibold">UI/UX Implementation</span>
                <span className="text-sm font-semibold text-accent">100%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-primary/10 dark:bg-slate-800">
                <div className="h-2 rounded-full bg-accent" style={{ width: "100%" }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="flex items-center gap-2 text-lg font-bold text-primary dark:text-slate-100">
            <span className="material-symbols-outlined text-accent">database</span> Back-End Knowledge
          </h4>
          <div className="space-y-4">
            <div>
              <div className="mb-1 flex justify-between">
                <span className="text-sm font-semibold">Node.js / Express</span>
                <span className="text-sm font-semibold text-accent">85%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-primary/10 dark:bg-slate-800">
                <div className="h-2 rounded-full bg-primary dark:bg-slate-600" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div>
              <div className="mb-1 flex justify-between">
                <span className="text-sm font-semibold">Database Architecture</span>
                <span className="text-sm font-semibold text-accent">80%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-primary/10 dark:bg-slate-800">
                <div className="h-2 rounded-full bg-primary dark:bg-slate-600" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="mt-12 flex flex-col items-center justify-center rounded-3xl bg-primary p-12 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">Let's grow something amazing together.</h2>
        <p className="mb-8 max-w-lg text-lg text-white/70">
          Whether you need a full-scale platform or a refined user interface, I bring a decade of expertise to every
          project.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center rounded-xl bg-accent px-6 font-bold text-white transition-all hover:brightness-110">
            Get In Touch
          </button>
          <button className="flex h-12 min-w-[160px] cursor-pointer items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 font-bold text-white transition-all hover:bg-white/20">
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
