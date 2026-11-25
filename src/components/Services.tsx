import {
  FileCheck2,
  FolderSearch,
  MessagesSquare,
  PenLine,
  Scale,
  ScrollText,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import AnimatedContent from '@/components/react-bits/AnimatedContent'
import SpotlightCard from '@/components/react-bits/SpotlightCard'
import { site } from '@/content/site'

const ICONS: Record<string, LucideIcon> = {
  'legal-affairs': Scale,
  'brief-writing': PenLine,
  petition: ScrollText,
  consultation: MessagesSquare,
  contracts: FileCheck2,
  'case-tracking': FolderSearch,
}

export function Services() {
  const { services } = site

  return (
    <section id={services.id} className="relative bg-navy-50 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedContent distance={40} duration={0.7} blur={4}>
          <p className="text-xs font-semibold tracking-[0.25em] text-gold-600">{services.eyebrow}</p>
          <h2 className="font-display mt-3 text-3xl font-bold text-navy-900 sm:text-4xl">
            {services.title}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-8 text-navy-600">{services.subtitle}</p>
        </AnimatedContent>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.items.map((item, index) => {
            const Icon = ICONS[item.id] ?? Scale
            return (
              <AnimatedContent
                key={item.id}
                distance={36}
                duration={0.65}
                delay={0.06 * index}
                tilt={4}
              >
                <SpotlightCard
                  theme="light"
                  spotlightColor="rgba(201, 168, 108, 0.35)"
                  className="h-full !rounded-3xl !border-navy-200/80 !bg-white !p-6 !shadow-none"
                >
                  <div className="mb-4 inline-flex size-11 items-center justify-center rounded-2xl bg-navy-900 text-gold-400">
                    <Icon className="size-5" strokeWidth={1.7} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-navy-600">{item.description}</p>
                </SpotlightCard>
              </AnimatedContent>
            )
          })}
        </div>
      </div>
    </section>
  )
}
