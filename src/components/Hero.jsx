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
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Zoho Implementation & Consulting Studio
            </div>

            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-[3.4rem]">
              Zoho, implemented by
              <span className="block text-gradient bg-gradient-to-r from-accent-400 to-brand-300">
                consultants who live in it daily
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base text-white/70 sm:text-lg lg:mx-0">
              ZohoGeeks helps growing businesses implement, customize and automate
              Zoho CRM, Books, People and the full Zoho One suite — configured
              around how your team actually works, not a generic template.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
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

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="animate-float rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-[11px] font-semibold text-white/40">Zoho CRM · Pipeline</span>
              </div>

              <div className="mt-4 space-y-3">
                {[
                  { name: 'Qualification', pct: 82, color: 'bg-brand-400' },
                  { name: 'Proposal Sent', pct: 61, color: 'bg-accent-400' },
                  { name: 'Negotiation', pct: 45, color: 'bg-emerald-400' },
                ].map((row) => (
                  <div key={row.name}>
                    <div className="mb-1.5 flex justify-between text-xs font-medium text-white/70">
                      <span>{row.name}</span>
                      <span>{row.pct}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/10">
                      <div className={`h-2 rounded-full ${row.color}`} style={{ width: `${row.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/[0.06] p-4">
                  <p className="text-2xl font-extrabold text-white">₹4.2L</p>
                  <p className="text-[11px] text-white/50">Deals closed this month</p>
                </div>
                <div className="rounded-2xl bg-white/[0.06] p-4">
                  <p className="text-2xl font-extrabold text-white">32%</p>
                  <p className="text-[11px] text-white/50">Faster follow-ups</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 hidden sm:flex items-center gap-2 rounded-2xl bg-white p-3 pr-4 shadow-xl">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                <Icon name="check" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold text-brand-950">Automation Live</p>
                <p className="text-[11px] text-brand-950/50">Zero manual follow-up</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:mt-20 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center lg:text-left">
              <p className="font-display text-2xl font-extrabold text-white sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs text-white/50 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
