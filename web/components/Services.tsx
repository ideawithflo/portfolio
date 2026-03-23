const services = [
  {
    number: '01',
    title: 'Product Design',
    desc: 'End-to-end product development from initial concept to production-ready design. Combining aesthetics with engineering requirements.',
  },
  {
    number: '02',
    title: 'Concept Development',
    desc: 'Translating ideas into tangible concepts through research, sketching, and iterative exploration of design directions.',
  },
  {
    number: '03',
    title: '3D Modeling & CAD',
    desc: 'Precise digital models for visualization, engineering handoff, and manufacturing using industry-standard tools.',
  },
  {
    number: '04',
    title: 'Prototyping',
    desc: 'Rapid physical prototypes to test ideas, validate ergonomics, and communicate design intent to stakeholders.',
  },
  {
    number: '05',
    title: 'Vibe-Coding',
    desc: 'Bringing ideas to life through rapid digital prototyping, interactive concepts and AI-assisted development — from sketch to working product.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-32 px-6 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-widest uppercase opacity-100 mb-16">Services</p>
        <div className="divide-y divide-[var(--border)]">
          {services.map(s => (
            <div key={s.number} className="py-8 grid md:grid-cols-12 gap-4 md:gap-8 group">
              <span className="font-mono text-xs opacity-100 md:col-span-1">{s.number}</span>
              <h3 className="text-xl font-light md:col-span-3">{s.title}</h3>
              <p className="opacity-100 leading-relaxed font-light md:col-span-8">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
