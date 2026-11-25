import BlurText from '@/components/react-bits/BlurText'
import Silk from '@/components/react-bits/Silk'
import { site } from '@/content/site'

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[100svh] overflow-hidden atmosphere text-white"
    >
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <Silk
          speed={3.2}
          scale={1.15}
          color="#17293c"
          sheenColor="#c9a86c"
          noiseIntensity={1.1}
          sheen={0.62}
          depth={0.7}
          glow={0.28}
          rotation={-0.15}
          className="h-full w-full"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-950/40 via-transparent to-navy-950/85" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:justify-center lg:px-8 lg:pb-24 lg:pt-32">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-medium tracking-[0.28em] text-gold-400/90 sm:text-sm">
            {site.hero.eyebrow}
          </p>

          <h1 className="font-display text-[clamp(2.4rem,7vw,4.6rem)] font-extrabold leading-[1.12] tracking-tight text-balance">
            <span className="block text-gold-300">{site.brand.name}</span>
          </h1>

          <div className="mt-5 h-px w-24 hairline-gold sm:w-32" />

          <div className="mt-6 max-w-2xl">
            <BlurText
              text={site.hero.headline}
              delay={40}
              animateBy="words"
              direction="bottom"
              className="font-display justify-start text-xl font-semibold leading-relaxed text-white/95 sm:text-2xl lg:text-3xl"
            />
          </div>

          <p className="mt-5 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
            {site.hero.support}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={site.hero.primaryCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-gold-500 px-6 text-sm font-bold text-navy-950 transition hover:bg-gold-400"
            >
              {site.hero.primaryCta}
            </a>
            <a
              href="#services"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-gold-400/40 hover:bg-white/10"
            >
              {site.hero.secondaryCta}
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gold-200/80">
            {site.hero.promises.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-gold-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
