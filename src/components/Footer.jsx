import { Link } from 'react-router-dom'
import { CONTACT, NAV_LINKS, SERVICES } from '../data/content'
import { INDUSTRY_LIST } from '../data/industries'
import { COMPARISON_LIST } from '../data/comparisons'
import { Icon } from './Icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-950 pt-16 pb-28 text-white/70 sm:pb-16">
      <div className="container-app">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 font-display text-sm font-extrabold text-white">
                ZG
              </span>
              <span className="font-display text-lg font-bold text-white">
                Zoho<span className="text-accent-400">Geeks</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              A Zoho implementation and consulting studio helping businesses automate sales,
              finance and operations on the Zoho platform.
            </p>
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/15"
            >
              <Icon name="whatsapp" className="h-4 w-4" />
              Chat with us
            </a>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-white/50 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <Link to="/#services" className="text-sm text-white/50 hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
              {INDUSTRY_LIST.map((ind) => (
                <li key={ind.slug}>
                  <Link to={`/${ind.slug}`} className="text-sm text-white/50 hover:text-white">
                    Zoho CRM for {ind.industry}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">Compare</h4>
            <ul className="mt-4 space-y-2.5">
              {COMPARISON_LIST.map((c) => (
                <li key={c.slug}>
                  <Link to={`/${c.slug}`} className="text-sm text-white/50 hover:text-white">
                    Zoho vs {c.competitor}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">Get in Touch</h4>
            <ul className="mt-4 space-y-3.5">
              <li>
                <a href={`tel:+91${CONTACT.phoneRaw}`} className="flex items-start gap-2.5 text-sm text-white/50 hover:text-white">
                  <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-2.5 text-sm text-white/50 hover:text-white">
                  <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/50">
                <Icon name="map-pin" className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{CONTACT.addressLines.join(' ')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© {year} ZohoGeeks. All rights reserved.</p>
          <p>Independent Zoho consulting studio · Not affiliated with Zoho Corporation</p>
        </div>
      </div>
    </footer>
  )
}
