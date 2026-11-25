import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

export type SectionTone = 'ink' | 'slate' | 'mist' | 'mist-warm' | 'dusk'

type SectionProps = {
  id?: string
  tone: SectionTone
  children: ReactNode
  className?: string
  /** Soft color bridge into the next band (Law of Continuity). */
  bridge?: 'to-mist' | 'to-slate' | 'to-ink' | 'to-dusk' | 'to-footer'
}

const TONE: Record<SectionTone, string> = {
  ink: 'surface-ink text-white',
  slate: 'surface-slate text-white',
  mist: 'surface-mist text-navy-900',
  'mist-warm': 'surface-mist-warm text-navy-900',
  dusk: 'surface-dusk text-navy-900',
}

const BRIDGE: Record<NonNullable<SectionProps['bridge']>, string> = {
  'to-mist': 'section-bridge-to-mist',
  'to-slate': 'section-bridge-to-slate',
  'to-ink': 'section-bridge-to-ink',
  'to-dusk': 'section-bridge-to-dusk',
  'to-footer': 'section-bridge-to-footer',
}

/**
 * Shared section shell — one palette system, continuous bands, soft seams.
 */
export function Section({ id, tone, children, className, bridge }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative overflow-hidden py-20 sm:py-24 lg:py-28',
        TONE[tone],
        bridge && BRIDGE[bridge],
        className,
      )}
    >
      <div className="section-glow" aria-hidden="true" />
      <div className="relative z-[1]">{children}</div>
    </section>
  )
}

export function SectionInner({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mx-auto max-w-6xl px-4 sm:px-6 lg:px-8', className)}>{children}</div>
}

export function SectionEyebrow({
  children,
  tone = 'light',
}: {
  children: ReactNode
  tone?: 'light' | 'dark'
}) {
  return (
    <p
      className={cn(
        'text-xs font-semibold tracking-[0.25em]',
        tone === 'dark' ? 'text-gold-400' : 'text-gold-600',
      )}
    >
      {children}
    </p>
  )
}
