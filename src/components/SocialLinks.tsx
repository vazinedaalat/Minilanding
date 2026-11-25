import Magnet from '@/components/react-bits/Magnet'
import { site } from '@/content/site'
import { cn } from '@/lib/cn'

type SocialLinksProps = {
  className?: string
  compact?: boolean
}

function BaleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.2 2 11.4c0 3.1 1.6 5.85 4.1 7.6v2.7c0 .35.4.55.7.35l3.05-1.9c.7.15 1.4.25 2.15.25 5.52 0 10-4.2 10-9.4S17.52 2 12 2zm4.35 7.55-1.55 7.35c-.1.5-.4.6-.8.4l-2.25-1.65-1.1 1.05c-.12.12-.25.2-.5.2l.15-2.35 4.35-3.95c.2-.15-.05-.25-.3-.1l-5.4 3.4-2.3-.7c-.5-.15-.5-.5.1-.75l9-3.45c.4-.15.75.1.55.55z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 4.5h2.2c.4 0 .75.25.9.65l1 2.7c.15.4.05.85-.25 1.1l-1.35 1.1a12.5 12.5 0 005.3 5.3l1.1-1.35c.25-.3.7-.4 1.1-.25l2.7 1c.4.15.65.5.65.9v2.2c0 .55-.45 1-1 1A14.5 14.5 0 016.5 5.5c0-.55.45-1 1-1z"
      />
    </svg>
  )
}

const linkBase =
  'inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-gold-500/25 bg-navy-900/40 px-3 text-gold-200 backdrop-blur-sm transition-colors hover:border-gold-400/50 hover:bg-navy-800/70 hover:text-gold-100'

export function SocialLinks({ className, compact = false }: SocialLinksProps) {
  const { phone, bale, instagram } = site.social

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Magnet padding={28} magnetStrength={2.2} maxOffset={14} tilt={6} scale={1.04}>
        <a href={phone.href} className={cn(linkBase, compact ? 'px-2.5' : 'ps-2.5 pe-3')} aria-label={phone.aria}>
          <PhoneIcon className="size-4 shrink-0" />
          {!compact && (
            <span className="hidden font-medium tracking-wide xl:inline" dir="ltr">
              {phone.display}
            </span>
          )}
        </a>
      </Magnet>

      <Magnet padding={28} magnetStrength={2.2} maxOffset={14} tilt={6} scale={1.04}>
        <a
          href={bale.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(linkBase, 'w-10 px-0')}
          aria-label={bale.aria}
          title={bale.label}
        >
          <BaleIcon className="size-4" />
        </a>
      </Magnet>

      <Magnet padding={28} magnetStrength={2.2} maxOffset={14} tilt={6} scale={1.04}>
        <a
          href={instagram.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(linkBase, 'w-10 px-0')}
          aria-label={instagram.aria}
          title={instagram.label}
        >
          <InstagramIcon className="size-4" />
        </a>
      </Magnet>
    </div>
  )
}
