import { useState } from 'react'
import { FAQS } from '../data/content'
import { Icon } from './Icons'
import { SectionHeading } from './Services'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-brand-50/50 py-20 sm:py-28">
      <div className="container-app">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions we hear before every project"
          desc="Can't find your answer? Reach out directly and we'll get back within one business day."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isOpen ? 'border-brand-200 bg-white' : 'border-brand-100 bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left sm:px-6 sm:py-5"
                >
                  <span className="text-sm font-bold text-brand-950 sm:text-base">{item.q}</span>
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <Icon name="chevron-down" className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-brand-950/60 sm:px-6">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
