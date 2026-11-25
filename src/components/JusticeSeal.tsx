import CircularText from '@/components/react-bits/CircularText'
import Orb from '@/components/react-bits/Orb'
import { site } from '@/content/site'
import { cn } from '@/lib/cn'

type JusticeSealProps = {
  className?: string
  size?: 'sm' | 'md'
}

/**
 * انیمیشن نوآورانه هدر: مهر سه‌بعدی عدالت —
 * حلقهٔ متن چرخان طلایی دور یک Orb تعاملی.
 */
export function JusticeSeal({ className, size = 'md' }: JusticeSealProps) {
  const dim = size === 'sm' ? 72 : 96
  const fontSize = size === 'sm' ? 11 : 13

  return (
    <div
      className={cn(
        'relative grid place-items-center',
        size === 'sm' ? 'size-[4.5rem]' : 'size-[6.25rem]',
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-90">
        <CircularText
          text={site.header.sealText}
          spinDuration={28}
          onHover="slowDown"
          direction="counterclockwise"
          size={dim}
          fontSize={fontSize}
          fontWeight={600}
          color="#c9a86c"
          letterSpacing={2}
          tilt={8}
          hoverTilt={18}
          className="!absolute !inset-0"
        />
      </div>
      <div
        className={cn(
          'relative overflow-hidden rounded-full',
          size === 'sm' ? 'size-10' : 'size-14',
        )}
      >
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
    </div>
  )
}
