import { SERVICES } from '../data/content'
import { Icon } from './Icons'

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-white py-20 sm:py-28">
      <div className="container-app">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to run your business on Zoho"
          desc="From first setup to advanced automation — we cover the full Zoho lifecycle so you don't have to juggle multiple vendors."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/5"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-900 group-hover:text-white">
                <Icon name={service.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-brand-950">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-950/60">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, desc, light = false }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span
        className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest ${
          light ? 'bg-white/10 text-accent-400' : 'bg-accent-500/10 text-accent-600'
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-4 font-display text-3xl font-extrabold sm:text-4xl ${
          light ? 'text-white' : 'text-brand-950'
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-white/60' : 'text-brand-950/60'}`}>
          {desc}
        </p>
      )}
    </div>
  )
}
