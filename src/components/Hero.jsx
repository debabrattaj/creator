import { Link } from 'react-router-dom'
import { CONTACT } from '../data/content'
import { Icon } from './Icons'

const STATS = [
  { value: '80+', label: 'Zoho projects delivered' },
  { value: '12+', label: 'Zoho apps we implement' },
  { value: '48 hrs', label: 'Avg. support response' },
  { value: '100%', label: 'Data migration accuracy' },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-950 pt-28 pb-20 sm:pt-32 sm:pb-28">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" />
      <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-brand-600/40 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-24 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />

      <div className="container-app relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Zoho Implementation & Consulting Studio
          </div>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Automate your business with{' '}
            <span className="text-gradient bg-gradient-to-r from-accent-400 to-brand-300">Zoho</span>
          </h1>

          <p className="mt-5 font-display text-lg font-bold text-white/90 sm:text-xl">
            Empowering Businesses Through Expert Zoho Implementation
          </p>

          <p className="mx-auto mt-5 max-w-xl text-base text-white/70 sm:text-lg">
            ZohoGeeks helps growing businesses implement, customize and automate
            Zoho CRM, Books, People and the full Zoho One suite — configured
            around how your team actually works, not a generic template.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent-500/30 transition hover:brightness-110 active:scale-[0.98]"
            >
              Get Free Consultation
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10 active:scale-[0.98]"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          <p className="mt-5 text-xs text-white/50">
            Free 30-min discovery call · No obligation quote · Response within 24 hours
          </p>
        </div>

        {/* Stats bar */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:mt-20 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-2xl font-extrabold text-white sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs text-white/50 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
