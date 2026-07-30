import { Link } from 'react-router-dom'
import { COMPARISON_LIST } from '../data/comparisons'
import { Icon } from './Icons'
import { SectionHeading } from './Services'

export default function ComparisonsTeaser() {
  return (
    <section className="bg-brand-50/50 py-20 sm:py-28">
      <div className="container-app">
        <SectionHeading
          eyebrow="Comparisons"
          title="Zoho CRM vs. everything else"
          desc="Honest, no-hype comparisons to help you decide — not just a Zoho sales pitch."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPARISON_LIST.map((c) => (
            <Link
              key={c.slug}
              to={`/blog/${c.slug}`}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-brand-100 bg-white px-6 py-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="font-display text-sm font-bold text-brand-950 transition-colors group-hover:text-brand-700">
                Zoho vs {c.competitor}
              </span>
              <Icon name="arrow-right" className="h-4 w-4 shrink-0 text-brand-950/30 transition-transform group-hover:translate-x-1 group-hover:text-brand-700" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
