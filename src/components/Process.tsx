import AnimatedContent from '@/components/react-bits/AnimatedContent'
import { site } from '@/content/site'

export function Process() {
  const { process } = site

  return (
    <section id={process.id} className="relative overflow-hidden bg-navy-900 py-20 text-white sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -start-24 top-10 size-72 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -end-16 bottom-0 size-80 rounded-full bg-navy-500/30 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedContent distance={40} duration={0.7}>
          <p className="text-xs font-semibold tracking-[0.25em] text-gold-400">{process.eyebrow}</p>
          <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">{process.title}</h2>
          <p className="mt-3 max-w-2xl text-base leading-8 text-white/70">{process.subtitle}</p>
        </AnimatedContent>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {process.steps.map((step, index) => (
            <AnimatedContent key={step.step} distance={30} delay={0.05 * index} duration={0.6}>
              <li className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:border-gold-500/35 hover:bg-white/[0.05]">
                <span className="font-display text-4xl font-extrabold text-gold-500/25 transition group-hover:text-gold-500/40">
                  {String(step.step).padStart(2, '0')}
                </span>
                <h3 className="font-display mt-3 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{step.description}</p>
              </li>
            </AnimatedContent>
          ))}
        </ol>
      </div>
    </section>
  )
}
