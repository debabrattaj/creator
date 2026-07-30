import { useEffect, useState } from 'react'
import { NAV_LINKS, CONTACT } from '../data/content'
import { Icon } from './Icons'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'bg-white/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container-app flex h-16 sm:h-18 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-600 to-accent-500 font-display text-sm font-extrabold text-white">
            ZG
          </span>
          <span className={`font-display text-lg font-bold transition-colors ${solid ? 'text-brand-950' : 'text-white'}`}>
            Zoho<span className="text-accent-500">Geeks</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-accent-500 ${
                  solid ? 'text-brand-950/70' : 'text-white/80'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:+91${CONTACT.phoneRaw}`}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors hover:text-accent-500 ${
              solid ? 'text-brand-950/80' : 'text-white/80'
            }`}
          >
            <Icon name="phone" className="h-4 w-4" />
            {CONTACT.phoneDisplay}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-brand-900 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-900/20 transition hover:bg-brand-800"
          >
            Get Free Consultation
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`grid h-11 w-11 place-items-center rounded-lg lg:hidden transition-colors ${
            solid ? 'text-brand-950' : 'text-white'
          }`}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 sm:top-18 h-[calc(100vh-4rem)] sm:h-[calc(100vh-4.5rem)] bg-white transition-transform duration-300 ease-out overflow-y-auto ${
          open ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        <ul className="container-app flex flex-col gap-1 py-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3.5 text-base font-semibold text-brand-950 active:bg-brand-50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="container-app mt-2 flex flex-col gap-3 border-t border-brand-100 pt-6 pb-10">
          <a
            href={`tel:+91${CONTACT.phoneRaw}`}
            className="flex items-center justify-center gap-2 rounded-full border border-brand-200 px-5 py-3.5 text-sm font-semibold text-brand-900"
          >
            <Icon name="phone" className="h-4 w-4" /> Call {CONTACT.phoneDisplay}
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center rounded-full bg-brand-900 px-5 py-3.5 text-sm font-semibold text-white"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </header>
  )
}
