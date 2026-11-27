import { Clock3, Phone } from 'lucide-react'
import AnimatedContent from '@/components/react-bits/AnimatedContent'
import GradientText from '@/components/react-bits/GradientText'
import { BrandLogo } from '@/components/BrandLogo'
import { Section, SectionEyebrow, SectionInner } from '@/components/Section'
import { site } from '@/content/site'

export function Contact() {
  const { contact } = site

  return (
    <Section id={contact.id} tone="dusk" bridge="to-footer" className="pb-24 sm:pb-28">
      <SectionInner>
        <AnimatedContent distance={40} duration={0.7}>
          <SectionEyebrow>{contact.eyebrow}</SectionEyebrow>
          <h2 className="font-display mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
            <GradientText
              colors={['#0b1c2c', '#a9853f', '#0b1c2c']}
              animationSpeed={6}
              className="font-display"
            >
              {contact.title}
            </GradientText>
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-8 text-navy-600">{contact.subtitle}</p>
        </AnimatedContent>

        <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <AnimatedContent distance={32} duration={0.65}>
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={contact.phoneHref}
                className="card-on-mist flex items-start gap-3 rounded-3xl p-5 transition hover:border-gold-500/40"
              >
                <Phone className="mt-0.5 size-5 shrink-0 text-gold-600" strokeWidth={1.7} />
                <span>
                  <span className="block text-sm text-navy-500">تلفن</span>
                  <span className="mt-1 block font-semibold text-navy-900" dir="ltr">
                    {contact.phone}
                  </span>
                </span>
              </a>
              <div className="card-on-mist flex items-start gap-3 rounded-3xl p-5">
                <Clock3 className="mt-0.5 size-5 shrink-0 text-gold-600" strokeWidth={1.7} />
                <span>
                  <span className="block text-sm text-navy-500">ساعات کاری</span>
                  <span className="mt-1 block font-semibold text-navy-900">{contact.workingHours}</span>
                </span>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent distance={32} delay={0.1} duration={0.65}>
            <div className="flex h-full flex-col justify-between rounded-[2rem] border border-navy-800/40 bg-navy-900 p-7 text-white shadow-[0_30px_60px_-36px_rgba(6,13,23,0.7)] sm:p-8">
              <div>
                <div className="flex items-center gap-3">
                  <BrandLogo size="md" href={null} />
                  <p className="font-display text-xl font-bold text-gold-300 sm:text-2xl">
                    {site.brand.legalName}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-8 text-white/70">{site.brand.sloganSupport}</p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={contact.baleHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 flex-1 items-center justify-center rounded-2xl bg-gold-500 px-6 text-sm font-bold text-navy-950 transition hover:bg-gold-400"
                >
                  {contact.baleCta}
                </a>
                <a
                  href={contact.phoneHref}
                  className="inline-flex h-12 flex-1 items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white transition hover:border-gold-400/40 hover:bg-white/10"
                >
                  {contact.cta}
                </a>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </SectionInner>
    </Section>
  )
}
