import { Link } from 'react-router-dom'
import { INDUSTRY_LIST } from '../data/industries'
import { Icon } from './Icons'
import { SectionHeading } from './Services'

export default function IndustriesTeaser() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-app">
        <SectionHeading
          eyebrow="Industries"
          title="Built for how your industry actually sells"
          desc="Generic CRM setups miss the details that matter. See how we configure Zoho CRM for these industries specifically."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {INDUSTRY_LIST.map((ind) => (
            <Link
              key={ind.slug}
              to={`/${ind.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-brand-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/5 sm:p-8"
            >
              <div>
                <span className="w-fit rounded-full bg-accent-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent-600">
                  {ind.industry}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-brand-950 transition-colors group-hover:text-brand-700">
                  {ind.heroHeadline}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-brand-950/60">{ind.heroSubheadline}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
                See what we build
                <Icon name="arrow-right" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
