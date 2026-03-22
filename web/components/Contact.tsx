export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-widest uppercase opacity-40 mb-16">Contact</p>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              Let's work<br />together.
            </h2>
            <p className="opacity-60 leading-relaxed mb-10">
              Have a project in mind? I'd love to hear about it.
              Book a free 30-minute intro call or reach out directly.
            </p>
            <a
              href="/new"
              className="self-start font-mono text-xs tracking-widest uppercase border border-[var(--fg)] px-6 py-3 hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors mb-8 block"
            >
              Book a Call →
            </a>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:office@florianhuber.at"
                className="font-mono text-sm opacity-60 hover:opacity-100 transition-opacity"
              >
                office@florianhuber.at
              </a>
              <a
                href="https://www.linkedin.com/in/florian-huber-055700169/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm opacity-60 hover:opacity-100 transition-opacity"
              >
                LinkedIn →
              </a>
            </div>
          </div>
          <form
            action="mailto:office@florianhuber.at"
            method="post"
            encType="text/plain"
            className="flex flex-col gap-6"
          >
            <div>
              <label className="font-mono text-xs tracking-widest uppercase opacity-40 block mb-2">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-transparent border-b border-[var(--border)] pb-3 focus:outline-none focus:border-[var(--fg)] transition-colors placeholder:opacity-30 font-light"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-mono text-xs tracking-widest uppercase opacity-40 block mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-transparent border-b border-[var(--border)] pb-3 focus:outline-none focus:border-[var(--fg)] transition-colors placeholder:opacity-30 font-light"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="font-mono text-xs tracking-widest uppercase opacity-40 block mb-2">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full bg-transparent border-b border-[var(--border)] pb-3 focus:outline-none focus:border-[var(--fg)] transition-colors placeholder:opacity-30 font-light resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="self-start font-mono text-xs tracking-widest uppercase border border-[var(--fg)] px-8 py-3 hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
