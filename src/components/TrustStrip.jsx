import { ZOHO_APPS } from '../data/content'

export default function TrustStrip() {
  const items = [...ZOHO_APPS, ...ZOHO_APPS]

  return (
    <section className="border-b border-brand-100 bg-white py-8">
      <div className="container-app">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-brand-950/40">
          Apps we implement &amp; customize
        </p>
      </div>
      <div className="relative mt-5 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-marquee gap-3">
          {items.map((app, i) => (
            <span
              key={`${app}-${i}`}
              className="whitespace-nowrap rounded-full border border-brand-100 bg-brand-50/60 px-5 py-2 text-sm font-semibold text-brand-900/70"
            >
              {app}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
