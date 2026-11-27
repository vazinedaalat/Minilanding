import { site } from '@/content/site'
import { cn } from '@/lib/cn'

type BrandLogoProps = {
  className?: string
  imgClassName?: string
  size?: 'sm' | 'md' | 'lg'
  withName?: boolean
  tone?: 'light' | 'dark'
  /** لینک برند؛ `null` یعنی بدون لینک */
  href?: string | null
}

const SIZES = {
  sm: 'size-10',
  md: 'size-12',
  lg: 'size-16',
} as const

/**
 * لوگوی رسمی مؤسسه — برای هدر، فوتر و نقاط برندینگ.
 */
export function BrandLogo({
  className,
  imgClassName,
  size = 'sm',
  withName = false,
  tone = 'dark',
  href = '#home',
}: BrandLogoProps) {
  const linked = href !== null
  const mark = (
    <img
      src={site.brand.logo}
      alt={site.brand.legalName}
      width={160}
      height={150}
      decoding="async"
      className={cn(
        'rounded-full bg-white object-contain shadow-[0_0_0_1px_rgba(201,168,108,0.28)]',
        SIZES[size],
        imgClassName,
      )}
    />
  )

  if (!withName) {
    return linked ? (
      <a href={href!} className={cn('inline-flex shrink-0', className)} aria-label={site.brand.name}>
        {mark}
      </a>
    ) : (
      <span className={cn('inline-flex shrink-0', className)}>{mark}</span>
    )
  }

  const content = (
    <>
      {mark}
      <span className="min-w-0">
        <span
          className={cn(
            'font-display block truncate text-lg font-bold tracking-tight sm:text-xl',
            tone === 'dark' ? 'text-white' : 'text-navy-900',
          )}
        >
          <span className={tone === 'dark' ? 'text-gold-400' : 'text-gold-600'}>
            {site.brand.nameLead}
          </span>{' '}
          {site.brand.nameTrail}
        </span>
        <span
          className={cn(
            'hidden text-[0.7rem] sm:block',
            tone === 'dark' ? 'text-gold-200/70' : 'text-navy-500',
          )}
        >
          {site.brand.tagline}
        </span>
      </span>
    </>
  )

  if (!linked) {
    return <span className={cn('inline-flex min-w-0 items-center gap-3', className)}>{content}</span>
  }

  return (
    <a href={href!} className={cn('group inline-flex min-w-0 items-center gap-3', className)}>
      {content}
    </a>
  )
}
