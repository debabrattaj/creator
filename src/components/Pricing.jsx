import { Link } from 'react-router-dom'
import { PACKAGES, CONTACT } from '../data/content'
import { Icon } from './Icons'
import { SectionHeading } from './Services'

export default function Pricing() {
  return (
    <section id="packages" className="scroll-mt-20 bg-brand-50/50 py-20 sm:py-28">
      <div className="container-app">
        <SectionHeading
          eyebrow="Packages"
          title="Engagement plans that scale with you"
          desc="Every business is different, so every quote is custom. These packages give you a starting point — share your requirements for exact pricing."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col rounded-3xl p-7 sm:p-8 ${
                pkg.highlight
                  ? 'bg-brand-950 text-white shadow-2xl shadow-brand-900/30 lg:-translate-y-3'
                  : 'bg-white text-brand-950 ring-1 ring-brand-100'
              }`}
            >
              {pkg.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-500 px-4 py-1 text-xs font-bold text-white">
                  Most Popular
                </span>
              )}

              <h3 className="font-display text-xl font-extrabold">{pkg.name}</h3>
              <p className={`mt-2 text-sm ${pkg.highlight ? 'text-white/60' : 'text-brand-950/60'}`}>
                {pkg.tagline}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span
                      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                        pkg.highlight ? 'bg-white/10 text-accent-400' : 'bg-emerald-50 text-emerald-600'
                      }`}
                    >
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    <span className={pkg.highlight ? 'text-white/80' : 'text-brand-950/70'}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/#contact"
                className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition ${
                  pkg.highlight
                    ? 'bg-white text-brand-900 hover:bg-white/90'
                    : 'bg-brand-900 text-white hover:bg-brand-800'
                }`}
              >
                Get Custom Quote
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-brand-950/50">
          Prefer to talk it through first? Call{' '}
          <a href={`tel:+91${CONTACT.phoneRaw}`} className="font-semibold text-brand-700">
            {CONTACT.phoneDisplay}
          </a>{' '}
          or message us on{' '}
          <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-700">
            WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  )
}
