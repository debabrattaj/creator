import { WHY_US } from '../data/content'
import { Icon } from './Icons'
import { SectionHeading } from './Services'

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-brand-50/50 py-20 sm:py-28">
      <div className="container-app">
        <SectionHeading
          eyebrow="Why ZohoGeeks"
          title="Consultants who know Zoho, not just the sales pitch"
          desc="We've configured Zoho for real businesses across retail, manufacturing, services and D2C — here's what that experience means for you."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((item) => (
            <div key={item.title} className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-100">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-white">
                <Icon name={item.icon} className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-brand-950">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-950/60">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
