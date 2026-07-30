import { Link } from 'react-router-dom'
import { CONTACT } from '../data/content'
import { Icon } from '../components/Icons'
import { SectionHeading } from '../components/Services'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import SEOHead from '../components/SEOHead'
import ComparisonSchema from '../components/ComparisonSchema'

export default function ComparisonPage({ data }) {
  return (
    <>
      <SEOHead title={data.metaTitle} description={data.metaDescription} path={`/blog/${data.slug}`} />
      <ComparisonSchema data={data} />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-brand-950 pt-28 pb-20 sm:pt-32 sm:pb-24">
          <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" />
          <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-brand-600/40 blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 -left-24 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />

          <div className="container-app relative flex flex-col items-center text-center">
            <Link
              to="/blog"
              className="mb-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-white/60 hover:text-white"
            >
              <Icon name="arrow-right" className="h-4 w-4 rotate-180" />
              Back to Blog
            </Link>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {data.eyebrow}
            </span>

            <h1 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl lg:text-[2.6rem]">
              {data.heroHeadline}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
              {data.heroSubheadline}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
          </div>
        </section>

        {/* Quick verdict */}
        <section className="bg-white py-20 sm:py-28">
          <div className="container-app">
            <SectionHeading
              eyebrow="Quick Verdict"
              title="Which one should you actually pick?"
              desc="No single CRM is universally 'better' — it depends on your size, budget and what you need connected to it."
            />
            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              <div className="rounded-2xl border-2 border-brand-200 bg-brand-50/50 p-7 sm:p-8">
                <h3 className="font-display text-lg font-bold text-brand-950">{data.quickVerdict.zohoTitle}</h3>
                <ul className="mt-5 space-y-3">
                  {data.quickVerdict.zohoPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-brand-950/70">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-brand-100 p-7 sm:p-8">
                <h3 className="font-display text-lg font-bold text-brand-950">{data.quickVerdict.competitorTitle}</h3>
                <ul className="mt-5 space-y-3">
                  {data.quickVerdict.competitorPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-brand-950/70">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700">
                        <Icon name="check" className="h-3 w-3" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Spotlight — a unique analytical take, not a bulleted checklist */}
        {data.spotlight && (
          <section className="bg-brand-950 py-20 sm:py-28">
            <div className="container-app">
              <div className="mx-auto max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-400">
                  Beyond the Feature List
                </span>
                <Icon name="quote" className="mt-6 h-8 w-8 text-accent-500/60" />
                <h2 className="mt-4 font-display text-2xl font-extrabold leading-snug text-white sm:text-3xl">
                  {data.spotlight.title}
                </h2>
                <div className="mt-6 space-y-5">
                  {data.spotlight.paragraphs.map((para, i) => (
                    <p key={i} className="text-base leading-[1.8] text-white/70">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Comparison table */}
        <section className="bg-brand-50/50 py-20 sm:py-28">
          <div className="container-app">
            <SectionHeading
              eyebrow="Side by Side"
              title={`Zoho CRM vs ${data.competitor}, aspect by aspect`}
            />
            <div className="mx-auto mt-14 max-w-4xl space-y-3">
              {/* Column labels — desktop only */}
              <div className="hidden grid-cols-[1fr_1.2fr_1.2fr] gap-4 px-6 sm:grid">
                <span className="text-xs font-bold uppercase tracking-wide text-brand-950/40">Aspect</span>
                <span className="text-xs font-bold uppercase tracking-wide text-brand-700">Zoho CRM</span>
                <span className="text-xs font-bold uppercase tracking-wide text-brand-950/40">{data.competitor}</span>
              </div>

              {data.comparisonRows.map((row) => (
                <div
                  key={row.aspect}
                  className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-100 sm:grid sm:grid-cols-[1fr_1.2fr_1.2fr] sm:items-start sm:gap-4"
                >
                  <p className="font-display text-sm font-bold text-brand-950 sm:pt-0.5">{row.aspect}</p>
                  <div className="mt-3 sm:mt-0">
                    <span className="mb-1 block text-[11px] font-bold uppercase tracking-wide text-brand-700 sm:hidden">
                      Zoho CRM
                    </span>
                    <p className="text-sm leading-relaxed text-brand-950/70">{row.zoho}</p>
                  </div>
                  <div className="mt-3 sm:mt-0">
                    <span className="mb-1 block text-[11px] font-bold uppercase tracking-wide text-brand-950/40 sm:hidden">
                      {data.competitor}
                    </span>
                    <p className="text-sm leading-relaxed text-brand-950/70">{row.competitor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration note */}
        <section className="bg-white py-20 sm:py-28">
          <div className="container-app">
            <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl bg-brand-950 p-8 text-center sm:p-10">
              <div className="pointer-events-none absolute -top-10 -right-10 h-48 w-48 rounded-full bg-accent-500/20 blur-3xl" />
              <h3 className="relative font-display text-xl font-bold text-white sm:text-2xl">
                {data.migrationNote.title}
              </h3>
              <p className="relative mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
                {data.migrationNote.desc}
              </p>
              <div className="relative mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-accent-500/30 transition hover:brightness-110"
                >
                  Get Free Consultation
                  <Icon name="arrow-right" className="h-4 w-4" />
                </Link>
                <a
                  href={CONTACT.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  <Icon name="whatsapp" className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <FAQ
          items={data.faqs}
          title={`Questions about Zoho CRM vs ${data.competitor}`}
          desc="Can't find your answer? Reach out directly and we'll get back within one business day."
        />

        <Contact />
      </main>
    </>
  )
}
