import { BrandLogo } from '@/components/BrandLogo'
import { site } from '@/content/site'

export function Footer() {
  return (
    <footer className="relative border-t border-gold-500/15 bg-navy-950 text-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-gold-500/50 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:py-14">
        <div>
          <BrandLogo withName size="md" tone="dark" href="#home" />
          <p className="mt-4 max-w-md text-sm leading-7 text-white/65">{site.brand.slogan}</p>
        </div>

        <div className="text-sm text-white/55 lg:text-end">
          <p>{site.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
