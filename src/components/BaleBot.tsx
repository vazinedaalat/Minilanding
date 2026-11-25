import { FileUp, MessageCircle, ShieldCheck, ClipboardList } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import AnimatedContent from '@/components/react-bits/AnimatedContent'
import { site } from '@/content/site'

const ICONS: Record<string, LucideIcon> = {
  consult: MessageCircle,
  docs: FileUp,
  track: ClipboardList,
  secure: ShieldCheck,
}

export function BaleBot() {
  const { baleBot } = site

  return (
    <section id={baleBot.id} className="relative overflow-hidden bg-navy-900 py-20 text-white sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -end-20 top-0 size-72 rounded-full bg-gold-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -start-16 bottom-0 size-80 rounded-full bg-navy-500/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
          <AnimatedContent distance={40} duration={0.7}>
            <p className="text-xs font-semibold tracking-[0.25em] text-gold-400">{baleBot.eyebrow}</p>
            <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">{baleBot.title}</h2>
            <p className="mt-2 text-sm font-medium text-gold-300">
              ربات بله · {baleBot.name}
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/75">{baleBot.subtitle}</p>
            <p className="mt-4 max-w-xl text-sm leading-8 text-white/60">{baleBot.description}</p>
            <a
              href={baleBot.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-2xl bg-gold-500 px-6 text-sm font-bold text-navy-950 transition hover:bg-gold-400"
            >
              {baleBot.cta}
            </a>
          </AnimatedContent>

          <div className="grid gap-3 sm:grid-cols-2">
            {baleBot.features.map((feature, index) => {
              const Icon = ICONS[feature.id] ?? MessageCircle
              return (
                <AnimatedContent key={feature.id} distance={28} delay={0.05 * index} duration={0.55}>
                  <article className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                    <div className="mb-3 inline-flex size-10 items-center justify-center rounded-2xl bg-gold-500/15 text-gold-300">
                      <Icon className="size-5" strokeWidth={1.7} />
                    </div>
                    <h3 className="font-display text-lg font-bold">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/65">{feature.description}</p>
                  </article>
                </AnimatedContent>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
