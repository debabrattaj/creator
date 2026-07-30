import { Link } from 'react-router-dom'
import { CONTACT } from '../data/content'
import { Icon } from '../components/Icons'
import { SectionHeading } from '../components/Services'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import SEOHead from '../components/SEOHead'
import IndustrySchema from '../components/IndustrySchema'

export default function IndustryPage({ data }) {
  return (
    <>
      <SEOHead title={data.metaTitle} description={data.metaDescription} path={`/${data.slug}`} />
      <IndustrySchema data={data} />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-brand-950 pt-28 pb-20 sm:pt-32 sm:pb-24">
          <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" />
          <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-brand-600/40 blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 -left-24 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl" />

          <div className="container-app relative text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-white/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {data.eyebrow}
            </span>

            <h1 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
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

        {/* Pain points */}
        <section className="bg-white py-20 sm:py-28">
          <div className="container-app">
            <SectionHeading
              eyebrow="The Problem"
              title={`What we hear from ${data.industry} businesses`}
              desc="These are the recurring gaps we're brought in to fix — see if any sound familiar."
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {data.painPoints.map((p) => (
                <div key={p.title} className="flex gap-4 rounded-2xl border border-brand-100 p-6">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-red-50 text-red-500">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-brand-950">{p.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-950/60">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-brand-50/50 py-20 sm:py-28">
          <div className="container-app">
            <SectionHeading
              eyebrow="What We Build"
              title={`Zoho CRM, configured for ${data.industry}`}
              desc="Every module below is something we've actually configured for this industry, not a generic feature list."
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {data.features.map((f) => (
                <div key={f.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-100">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <Icon name={f.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-brand-950">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-brand-950/60">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="bg-white py-20 sm:py-28">
          <div className="container-app">
            <SectionHeading eyebrow="How It Works" title="What the day-to-day looks like" />
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {data.workflow.map((step, i) => (
                <div key={step.step} className="relative">
                  {i < data.workflow.length - 1 && (
                    <div className="absolute top-6 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-brand-200 to-transparent lg:block" />
                  )}
                  <span className="font-display grid h-12 w-12 place-items-center rounded-full bg-brand-900 text-sm font-extrabold text-white">
                    {step.step}
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-brand-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-950/60">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQ
          items={data.faqs}
          title={`Questions about Zoho CRM for ${data.industry}`}
          desc="Can't find your answer? Reach out directly and we'll get back within one business day."
        />

        <Contact />
      </main>
    </>
  )
}
