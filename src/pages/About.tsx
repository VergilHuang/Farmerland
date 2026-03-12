export default function About() {
  return (
    <div className="flex flex-col flex-1 max-w-[960px] mx-auto w-full px-4 py-10">
      {/* Profile Hero Section */}
      <div className="flex p-4 @container mb-8">
        <div className="flex w-full flex-col gap-6 items-center">
          <div className="flex gap-6 flex-col items-center">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-40 w-40 ring-4 ring-accent/20 ring-offset-4 ring-offset-background-light dark:ring-offset-background-dark"
              title="Close up portrait of the developer"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSM7HBPAd7qEv2zd3zIF8rvtyyTZph5ypEk3oCXZGorymwU63KvEUWby4_Ic1XdnfSFVuxc1g4ko7FDShuOuvI3tIua21OBVyFQwHM7mrBatWGxMU-c4auQ87woeFTy6gl1ht0HvFacX77XI7DKvp-3mpFvYVRrsafyqV5n6VjBEDyuO4EbE2umppSQM7bT9D7dBP4jEzhoCyF-OeqYD51yDuTgqHtFFtqNO_-M7ivDZq5u1AO_AgNF2XM8hPDc4wrlyY-MWsm08Kx")',
              }}
            ></div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-primary dark:text-slate-100 text-4xl font-extrabold leading-tight tracking-[-0.015em] text-center">
                The Farmer
              </h1>
              <p className="text-accent text-lg font-semibold leading-normal text-center mt-1">Full-Stack Architect</p>
              <div className="flex items-center gap-2 mt-2 text-primary/70 dark:text-slate-400">
                <span className="material-symbols-outlined text-sm">verified</span>
                <p className="text-base font-medium">10 Years of Front-End Mastery & Beyond</p>
              </div>
            </div>
          </div>
          <button className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-accent text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-accent/30 hover:bg-accent/90 transition-all active:scale-95">
            <span className="material-symbols-outlined mr-2">download</span>
            <span className="truncate">Download Resume</span>
          </button>
        </div>
      </div>

      {/* Personal Bio Section */}
      <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 mb-12 shadow-sm border border-primary/5 dark:border-white/5">
        <div className="flex flex-wrap justify-between gap-3 mb-4">
          <div className="flex min-w-72 flex-col gap-2">
            <h2 className="text-primary dark:text-slate-100 tracking-light text-[32px] font-bold leading-tight">
              Cultivating Digital Landscapes
            </h2>
            <div className="h-1 w-20 bg-accent rounded-full"></div>
          </div>
        </div>
        <p className="text-primary/80 dark:text-slate-300 text-lg font-normal leading-relaxed">
          With over a decade of experience in front-end development, I have spent years perfecting the art of the user
          interface—nurturing pixels like a farmer tends to his crops. My journey recently evolved into high-performance
          full-stack development, allowing me to build comprehensive, end-to-end digital experiences. I bridge the gap
          between stunning visual interfaces and robust, scalable back-end systems using React, Node.js, and TypeScript.
        </p>
      </div>

      {/* Journey Timeline */}
      <h2 className="text-primary dark:text-slate-100 text-[28px] font-bold leading-tight tracking-[-0.015em] px-4 pb-8">
        The Professional Growth Timeline
      </h2>
      <div className="px-4 space-y-0">
        {/* Full Stack Transition */}
        <div className="relative pl-10 pb-12 border-l-2 border-accent/30 ml-4">
          <div className="absolute -left-[11px] top-0 size-5 rounded-full bg-accent border-4 border-background-light dark:border-background-dark"></div>
          <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl shadow-sm border border-primary/5 dark:border-white/5">
            <span className="text-accent font-bold text-sm uppercase tracking-wider">2021 — Present</span>
            <h3 className="text-primary dark:text-slate-100 text-xl font-bold mt-1">Full-Stack Evolution</h3>
            <p className="text-primary/60 dark:text-slate-400 font-medium mb-3">Expanding the Ecosystem</p>
            <p className="text-primary/80 dark:text-slate-300">
              Transitioned to architecture-level roles, managing both client-side performance and server-side
              scalability. Expertise in AWS, PostgreSQL, and building custom APIs that power modern web applications.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full">Node.js</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full">Docker</span>
              <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-bold rounded-full">GraphQL</span>
            </div>
          </div>
        </div>

        {/* Front-End Mastery */}
        <div className="relative pl-10 pb-12 border-l-2 border-accent/30 ml-4">
          <div className="absolute -left-[11px] top-0 size-5 rounded-full bg-primary border-4 border-background-light dark:border-background-dark"></div>
          <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl shadow-sm border border-primary/5 dark:border-white/5">
            <span className="text-primary/50 dark:text-slate-400 font-bold text-sm uppercase tracking-wider">
              2014 — 2021
            </span>
            <h3 className="text-primary dark:text-slate-100 text-xl font-bold mt-1">Senior Front-End Specialist</h3>
            <p className="text-primary/60 dark:text-slate-400 font-medium mb-3">The Decade of UI Perfection</p>
            <p className="text-primary/80 dark:text-slate-300">
              Spent 7 years mastering the art of React, Vue, and modern CSS architectures. Focused on accessibility,
              animation, and building component libraries used by millions of users worldwide.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-primary/10 dark:bg-slate-700 text-primary dark:text-slate-300 text-xs font-bold rounded-full">
                React
              </span>
              <span className="px-3 py-1 bg-primary/10 dark:bg-slate-700 text-primary dark:text-slate-300 text-xs font-bold rounded-full">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-primary/10 dark:bg-slate-700 text-primary dark:text-slate-300 text-xs font-bold rounded-full">
                Tailwind
              </span>
            </div>
          </div>
        </div>

        {/* The Beginning */}
        <div className="relative pl-10 pb-4 border-l-2 border-transparent ml-4">
          <div className="absolute -left-[11px] top-0 size-5 rounded-full bg-primary/30 border-4 border-background-light dark:border-background-dark"></div>
          <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl shadow-sm border border-primary/5 dark:border-white/5">
            <span className="text-primary/50 dark:text-slate-400 font-bold text-sm uppercase tracking-wider">2013</span>
            <h3 className="text-primary dark:text-slate-100 text-xl font-bold mt-1">Planting the Seeds</h3>
            <p className="text-primary/60 dark:text-slate-400 font-medium mb-3">Junior Developer Roots</p>
            <p className="text-primary/80 dark:text-slate-300">
              Where it all began. Mastering HTML, CSS, and Vanilla JavaScript. Developing a keen eye for design and
              performance from day one.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 mt-8">
        <div className="flex flex-col gap-4">
          <h4 className="text-primary dark:text-slate-100 font-bold text-lg flex items-center gap-2">
            <span className="material-symbols-outlined text-accent">brush</span> Front-End Expertise
          </h4>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-semibold">React & Ecosystem</span>
                <span className="text-sm font-semibold text-accent">95%</span>
              </div>
              <div className="w-full bg-primary/10 dark:bg-slate-800 rounded-full h-2">
                <div className="bg-accent h-2 rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-semibold">UI/UX Implementation</span>
                <span className="text-sm font-semibold text-accent">100%</span>
              </div>
              <div className="w-full bg-primary/10 dark:bg-slate-800 rounded-full h-2">
                <div className="bg-accent h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-primary dark:text-slate-100 font-bold text-lg flex items-center gap-2">
            <span className="material-symbols-outlined text-accent">database</span> Back-End Knowledge
          </h4>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-semibold">Node.js / Express</span>
                <span className="text-sm font-semibold text-accent">85%</span>
              </div>
              <div className="w-full bg-primary/10 dark:bg-slate-800 rounded-full h-2">
                <div className="bg-primary dark:bg-slate-600 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-semibold">Database Architecture</span>
                <span className="text-sm font-semibold text-accent">80%</span>
              </div>
              <div className="w-full bg-primary/10 dark:bg-slate-800 rounded-full h-2">
                <div className="bg-primary dark:bg-slate-600 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="flex flex-col items-center justify-center p-12 mt-12 bg-primary rounded-3xl text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Let's grow something amazing together.</h2>
        <p className="text-white/70 max-w-lg mb-8 text-lg">
          Whether you need a full-scale platform or a refined user interface, I bring a decade of expertise to every
          project.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-accent text-white font-bold hover:brightness-110 transition-all">
            Get In Touch
          </button>
          <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-white/10 text-white font-bold border border-white/20 hover:bg-white/20 transition-all">
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}
