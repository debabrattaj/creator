import { useState } from 'react'
import { CONTACT, LEAD_API_ENDPOINT } from '../data/content'
import { Icon } from './Icons'
import { SectionHeading } from './Services'

const SERVICE_OPTIONS = [
  'Zoho CRM',
  'Zoho Books',
  'Zoho People',
  'Zoho One',
  'Custom Development',
  'Data Migration',
  'Integrations',
  'Not sure yet',
]

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: SERVICE_OPTIONS[0],
  message: '',
  website: '', // honeypot — real visitors never fill this in
}

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(LEAD_API_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json().catch(() => null)
      if (!res.ok || !data?.ok) throw new Error('Form submission failed')

      setStatus('sent')
      setForm(INITIAL_FORM)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 relative overflow-hidden bg-brand-950 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-30" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-600/30 blur-3xl" />

      <div className="container-app relative">
        <SectionHeading
          eyebrow="Contact"
          title="Let's map out your Zoho rollout"
          desc="Tell us a bit about your business and we'll get back with next steps — usually within one business day."
          light
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <CallWhatsAppCard
              value={CONTACT.phoneDisplay}
              callHref={`tel:+91${CONTACT.phoneRaw}`}
              whatsappHref={CONTACT.whatsappLink}
            />
            <ContactCard icon="mail" title="Email us" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
            <ContactCard
              icon="map-pin"
              title="Visit us"
              value={CONTACT.addressLines.join(' ')}
              href={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}`}
            />

            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="ZohoGeeks location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&output=embed`}
                className="h-52 w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
          >
            {/* Honeypot field for basic bot/spam protection — kept off-screen
                rather than display:none, since some bots skip hidden fields */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={update('website')}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name">
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Your name"
                  className="input"
                />
              </Field>
              <Field label="Email">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@company.com"
                  className="input"
                />
              </Field>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <Field label="Phone number (optional)">
                <input
                  type="tel"
                  value={form.phone}
                  onChange={update('phone')}
                  placeholder="10-digit mobile number"
                  className="input"
                />
              </Field>
              <Field label="Company (optional)">
                <input
                  type="text"
                  value={form.company}
                  onChange={update('company')}
                  placeholder="Your company name"
                  className="input"
                />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="What are you interested in?">
                <select value={form.service} onChange={update('service')} className="input">
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Tell us about your business (optional)">
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={update('message')}
                  placeholder="E.g. team size, current tools, what's not working today..."
                  className="input resize-none"
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent-500/30 transition hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Icon name="mail" className="h-4 w-4" />
              {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
            </button>

            {status === 'sent' && (
              <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-sm font-semibold text-emerald-600">
                <Icon name="check" className="h-4 w-4" />
                Thanks — your enquiry is on its way. We'll get back within one business day.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-3 text-center text-sm font-semibold text-red-600">
                Something went wrong sending that. Please call or WhatsApp us instead — details on the left.
              </p>
            )}
            {status !== 'sent' && status !== 'error' && (
              <p className="mt-3 text-center text-xs text-brand-950/40">
                Your enquiry goes straight to our team's inbox — nothing is shared elsewhere.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ icon, title, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:bg-white/[0.07]"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-accent-400">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <span>
        <span className="block text-xs font-semibold uppercase tracking-wide text-white/40">{title}</span>
        <span className="mt-0.5 block text-sm font-semibold text-white">{value}</span>
      </span>
    </a>
  )
}

function CallWhatsAppCard({ value, callHref, whatsappHref }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-accent-400">
        <Icon name="phone" className="h-5 w-5" />
      </span>
      <span className="flex-1">
        <span className="block text-xs font-semibold uppercase tracking-wide text-white/40">Call / WhatsApp</span>
        <span className="mt-0.5 block text-sm font-semibold text-white">{value}</span>
        <span className="mt-2 flex gap-4">
          <a href={callHref} className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 transition hover:text-accent-400">
            <Icon name="phone" className="h-3.5 w-3.5" />
            Call
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 transition hover:text-accent-400"
          >
            <Icon name="whatsapp" className="h-3.5 w-3.5" />
            WhatsApp
          </a>
        </span>
      </span>
    </div>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-brand-950/50">{label}</span>
      {children}
    </label>
  )
}
