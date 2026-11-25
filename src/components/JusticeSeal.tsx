import Orb from '@/components/react-bits/Orb'
import { cn } from '@/lib/cn'

type JusticeSealProps = {
  className?: string
  size?: 'sm' | 'md'
}

/**
 * انیمیشن هدر: مهر عدالت —
 * حلقه‌های طلایی چرخان + Orb تعاملی + نماد ترازو (بدون متن ناخوانا).
 */
export function JusticeSeal({ className, size = 'md' }: JusticeSealProps) {
  const outer = size === 'sm' ? 'size-14' : 'size-[5.5rem]'
  const orb = size === 'sm' ? 'size-8' : 'size-12'
  const icon = size === 'sm' ? 'size-3.5' : 'size-5'

  return (
    <div
      className={cn('relative grid place-items-center', outer, className)}
      aria-hidden="true"
    >
      {/* Outer dashed orbit */}
      <span
        className={cn(
          'pointer-events-none absolute inset-0 rounded-full border border-dashed border-gold-500/45',
          'animate-[seal-spin_18s_linear_infinite]',
        )}
      />
      {/* Inner solid ring with soft glow */}
      <span
        className={cn(
          'pointer-events-none absolute inset-[18%] rounded-full border border-gold-400/35',
          'shadow-[0_0_18px_-4px_rgba(201,168,108,0.55)]',
          'animate-[seal-spin-rev_12s_linear_infinite]',
        )}
      />
      {/* Orbiting gold bead */}
      <span className="pointer-events-none absolute inset-0 animate-[seal-spin_9s_linear_infinite]">
        <span
          className={cn(
            'absolute start-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400',
            size === 'sm' ? 'size-1.5' : 'size-2',
            'shadow-[0_0_10px_2px_rgba(201,168,108,0.7)]',
          )}
        />
      </span>

      <div className={cn('relative overflow-hidden rounded-full', orb)}>
        <Orb
          colors={['#c9a86c', '#0b1c2c', '#e7d5ae']}
          hue={35}
          backgroundColor="transparent"
          size={1.15}
          glow={0.55}
          speed={0.35}
          hoverIntensity={0.45}
          rotateOnHover
          followCursor
          className="h-full w-full"
        />
      </div>

      {/* Scales mark over the orb */}
      <svg
        viewBox="0 0 24 24"
        className={cn(
          'pointer-events-none absolute text-gold-200/90 drop-shadow-[0_0_6px_rgba(201,168,108,0.45)]',
          icon,
        )}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path d="M12 3v15" strokeLinecap="round" />
        <path d="M7 8h10" strokeLinecap="round" />
        <path d="M8.5 8l-2 5.5h5L8.5 8zM15.5 8l-2 5.5h5L15.5 8z" strokeLinejoin="round" />
        <path d="M9 18h6" strokeLinecap="round" />
      </svg>
    </div>
  )
}
