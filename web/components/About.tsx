const clients = [
  'Swietelsky',
  'ÖBB',
  'Google',
  'ASFINAG',
  'Land NÖ',
  'Saalbach-Hinterglemm',
  'BUWOG',
  'Österreichisches Parlament',
  'ISTA Institute of Science and Technology',
  'STRABAG',
]

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-widest uppercase opacity-100 mb-16">About</p>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-light leading-snug mb-8">
              Designing with purpose,<br />built to last.
            </h2>
            <p className="opacity-100 leading-relaxed mb-6">
              Industrial designer based in Vienna with a passion for creating products
              that balance form and function. Working with companies of all sizes to
              bring thoughtful, human-centered design solutions to life.
            </p>
            <p className="opacity-100 leading-relaxed">
              With a background rooted in the principles of good design and a deep
              understanding of manufacturing processes, I bridge the gap between
              concept and reality — creating products people love to use.
            </p>
            <div className="mt-10">
              <a
                href="https://www.linkedin.com/in/florian-huber-055700169/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-widest uppercase opacity-100 hover:opacity-100 transition-opacity"
              >
                LinkedIn →
              </a>
            </div>
          </div>
          <div>
            <p className="font-mono text-xs tracking-widest uppercase opacity-100 mb-6">Selected Clients</p>
            <div className="flex flex-wrap gap-2">
              {clients.map(client => (
                <span
                  key={client}
                  className="font-mono text-xs px-3 py-1.5 border border-[var(--border)]"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
