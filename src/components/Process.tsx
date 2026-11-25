import AnimatedContent from '@/components/react-bits/AnimatedContent'
import { Section, SectionEyebrow, SectionInner } from '@/components/Section'
import { site } from '@/content/site'

export function Process() {
  const { process } = site

  return (
    <Section id={process.id} tone="slate" bridge="to-mist">
      <SectionInner>
        <AnimatedContent distance={40} duration={0.7}>
          <SectionEyebrow tone="dark">{process.eyebrow}</SectionEyebrow>
          <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">{process.title}</h2>
          <p className="mt-3 max-w-2xl text-base leading-8 text-white/70">{process.subtitle}</p>
        </AnimatedContent>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {process.steps.map((step, index) => (
            <AnimatedContent key={step.step} distance={30} delay={0.05 * index} duration={0.6}>
              <li className="card-on-ink group relative h-full overflow-hidden rounded-3xl p-6 backdrop-blur-sm transition hover:border-gold-500/35 hover:bg-white/[0.06]">
                <span className="font-display text-4xl font-extrabold text-gold-500/30 transition group-hover:text-gold-500/45">
                  {String(step.step).padStart(2, '0')}
                </span>
                <h3 className="font-display mt-3 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{step.description}</p>
              </li>
            </AnimatedContent>
          ))}
        </ol>
      </SectionInner>
    </Section>
  )
}
