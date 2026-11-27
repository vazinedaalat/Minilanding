import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BrandLogo } from '@/components/BrandLogo'
import { JusticeSeal } from '@/components/JusticeSeal'
import { SocialLinks } from '@/components/SocialLinks'
import { site } from '@/content/site'
import { cn } from '@/lib/cn'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-white/10 bg-navy-950/85 shadow-[0_12px_40px_-24px_rgba(0,0,0,0.7)] backdrop-blur-xl'
          : 'border-b border-transparent bg-gradient-to-b from-navy-950/70 to-transparent',
      )}
    >
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-navy-950"
      >
        {site.header.skipToContent}
      </a>

      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-[5.25rem] lg:px-8">
        <BrandLogo withName size="sm" tone="dark" href="#home" />

        <nav className="hidden items-center gap-1 lg:flex" aria-label={site.header.navAria}>
          {site.nav.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-white/75 transition-colors hover:bg-white/5 hover:text-gold-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-3">
          <SocialLinks compact />
          <JusticeSeal size="sm" className="hidden md:grid" />
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-white/15 text-white lg:hidden"
            aria-label={open ? site.header.menuClose : site.header.menuOpen}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy-950/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6">
            <div className="flex justify-center md:hidden">
              <JusticeSeal size="md" />
            </div>
            <nav className="flex flex-col gap-1" aria-label={site.header.navAria}>
              {site.nav.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-white/85 hover:bg-white/5 hover:text-gold-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
