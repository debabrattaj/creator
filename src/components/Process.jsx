import { PROCESS_STEPS } from '../data/content'
import { SectionHeading } from './Services'

export default function Process() {
  return (
    <section id="process" className="bg-white py-20 sm:py-28">
      <div className="container-app">
        <SectionHeading
          eyebrow="How We Work"
          title="A clear, five-step path from chaos to automated"
          desc="No open-ended engagements. Every project follows the same proven process so you always know what's next."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5 lg:gap-4">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.step} className="relative">
              {i < PROCESS_STEPS.length - 1 && (
                <div className="absolute top-6 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-brand-200 to-transparent lg:block" />
              )}
              <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-0">
                <span className="font-display grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-900 text-sm font-extrabold text-white">
                  {step.step}
                </span>
                <div className="lg:mt-4">
                  <h3 className="font-display text-base font-bold text-brand-950">{step.title}</h3>
                </div>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-brand-950/60 lg:mt-3">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
