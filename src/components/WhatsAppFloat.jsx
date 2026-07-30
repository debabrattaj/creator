import { CONTACT } from '../data/content'
import { Icon } from './Icons'

export default function WhatsAppFloat() {
  return (
    <a
      href={CONTACT.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ZohoGeeks on WhatsApp"
      className="fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/30 transition hover:scale-105 hover:bg-emerald-600 sm:flex"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-emerald-400 opacity-60" />
      <Icon name="whatsapp" className="h-7 w-7" />
    </a>
  )
}
