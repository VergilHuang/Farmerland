export default function NewsletterSubscription() {
  return (
    <section className="rounded-xl bg-primary p-6 text-white shadow-lg transition-colors duration-500 ease-in-out dark:bg-slate-900">
      <h4 className="mb-2 text-lg font-bold">Weekly Archive</h4>
      <p className="mb-4 text-sm leading-relaxed text-white/80">
        Get the best articles and design resources straight to your inbox.
      </p>
      {/* TODO: Connect to newsletter API */}
      <form className="flex flex-col gap-3" onSubmit={(submitEvent) => submitEvent.preventDefault()}>
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          className="w-full rounded-lg border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/50 focus:border-accent focus:ring-accent"
          placeholder="Email address"
          type="email"
          aria-label="Email address for weekly archive"
        />
        <button
          aria-label="Subscribe to weekly archive"
          className="w-full rounded-lg bg-accent py-2 text-sm font-bold transition-colors hover:bg-accent/90">
          Subscribe
        </button>
      </form>
    </section>
  );
}
