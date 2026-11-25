import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import AnimatedContent from '@/components/react-bits/AnimatedContent'
import GradientText from '@/components/react-bits/GradientText'
import { site } from '@/content/site'

export function Contact() {
  const { contact } = site

  return (
    <section id={contact.id} className="relative bg-navy-100/60 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedContent distance={40} duration={0.7}>
          <p className="text-xs font-semibold tracking-[0.25em] text-gold-600">{contact.eyebrow}</p>
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
                className="flex items-start gap-3 rounded-3xl border border-navy-200 bg-white p-5 transition hover:border-gold-500/40"
              >
                <Phone className="mt-0.5 size-5 shrink-0 text-gold-600" strokeWidth={1.7} />
                <span>
                  <span className="block text-sm text-navy-500">تلفن</span>
                  <span className="mt-1 block font-semibold text-navy-900" dir="ltr">
                    {contact.phone}
                  </span>
                </span>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-start gap-3 rounded-3xl border border-navy-200 bg-white p-5 transition hover:border-gold-500/40"
              >
                <Mail className="mt-0.5 size-5 shrink-0 text-gold-600" strokeWidth={1.7} />
                <span>
                  <span className="block text-sm text-navy-500">ایمیل</span>
                  <span className="mt-1 block font-semibold text-navy-900" dir="ltr">
                    {contact.email}
                  </span>
                </span>
              </a>
              <div className="flex items-start gap-3 rounded-3xl border border-navy-200 bg-white p-5 sm:col-span-2">
                <MapPin className="mt-0.5 size-5 shrink-0 text-gold-600" strokeWidth={1.7} />
                <span>
                  <span className="block text-sm text-navy-500">آدرس</span>
                  <span className="mt-1 block font-semibold leading-7 text-navy-900">
                    {contact.address}
                  </span>
                </span>
              </div>
              <div className="flex items-start gap-3 rounded-3xl border border-navy-200 bg-white p-5 sm:col-span-2">
                <Clock3 className="mt-0.5 size-5 shrink-0 text-gold-600" strokeWidth={1.7} />
                <span>
                  <span className="block text-sm text-navy-500">ساعات کاری</span>
                  <span className="mt-1 block font-semibold text-navy-900">{contact.workingHours}</span>
                </span>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent distance={32} delay={0.1} duration={0.65}>
            <div className="flex h-full flex-col justify-between rounded-[2rem] bg-navy-900 p-7 text-white sm:p-8">
              <div>
                <p className="font-display text-2xl font-bold text-gold-300">{site.brand.legalName}</p>
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
      </div>
    </section>
  )
}
