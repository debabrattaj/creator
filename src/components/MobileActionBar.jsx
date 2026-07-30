import { CONTACT } from '../data/content'
import { Icon } from './Icons'

export default function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-brand-100 bg-white/95 backdrop-blur sm:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <a
        href={`tel:+91${CONTACT.phoneRaw}`}
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-bold text-brand-900 active:bg-brand-50"
      >
        <Icon name="phone" className="h-4 w-4" />
        Call Now
      </a>
      <a
        href={CONTACT.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-emerald-500 py-3.5 text-sm font-bold text-white active:bg-emerald-600"
      >
        <Icon name="whatsapp" className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  )
}
