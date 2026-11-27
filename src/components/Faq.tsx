import AnimatedContent from '@/components/react-bits/AnimatedContent'
import { Section, SectionEyebrow, SectionInner } from '@/components/Section'
import { site } from '@/content/site'

export function Faq() {
  const { faq } = site

  return (
    <Section id={faq.id} tone="mist" bridge="to-dusk">
      <SectionInner>
        <AnimatedContent distance={36} duration={0.7}>
          <SectionEyebrow>{faq.eyebrow}</SectionEyebrow>
          <h2 className="font-display mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
            {faq.title}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-8 text-navy-600">{faq.subtitle}</p>
        </AnimatedContent>

        <div className="mt-10 space-y-3">
          {faq.items.map((item, index) => (
            <AnimatedContent key={item.id} distance={24} delay={0.04 * index} duration={0.5}>
              <details className="card-on-mist group rounded-3xl p-5 open:border-gold-500/35">
                <summary className="font-display cursor-pointer list-none text-lg font-bold text-navy-900 marker:content-none">
                  <span className="flex items-start justify-between gap-4">
                    {item.question}
                    <span className="mt-1 shrink-0 text-gold-600 transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-8 text-navy-600">{item.answer}</p>
              </details>
            </AnimatedContent>
          ))}
        </div>
      </SectionInner>
    </Section>
  )
}
