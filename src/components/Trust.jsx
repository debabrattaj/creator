import { GUARANTEES, FOUNDER_NOTE } from '../data/content'
import { Icon } from './Icons'
import { SectionHeading } from './Services'

export default function Trust() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-app">
        <SectionHeading
          eyebrow="Our Promise"
          title="We're a new studio — here's what we guarantee instead of recycled reviews"
          desc="ZohoGeeks is early-stage, so we'd rather be upfront: these are firm commitments we hold ourselves to on every engagement, not quotes from clients you can't verify."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GUARANTEES.map((item) => (
            <div key={item.title} className="rounded-2xl border border-brand-100 p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <Icon name={item.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-brand-950">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-950/60">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-14 overflow-hidden rounded-3xl bg-brand-950 p-8 sm:p-10">
          <div className="pointer-events-none absolute -top-10 -right-10 h-48 w-48 rounded-full bg-accent-500/20 blur-3xl" />
          <Icon name="quote" className="h-8 w-8 text-accent-500/60" />
          <p className="relative mt-4 font-display text-lg font-medium leading-relaxed text-white sm:text-xl">
            {FOUNDER_NOTE.quote}
          </p>
          <p className="relative mt-5 text-sm font-semibold text-white/60">— {FOUNDER_NOTE.name}</p>
        </div>
      </div>
    </section>
  )
}
