import AnimatedContent from '@/components/react-bits/AnimatedContent'
import CountUp from '@/components/react-bits/CountUp'
import Cubes from '@/components/react-bits/Cubes'
import TrueFocus from '@/components/react-bits/TrueFocus'
import { BrandLogo } from '@/components/BrandLogo'
import { Section, SectionEyebrow, SectionInner } from '@/components/Section'
import { site } from '@/content/site'

export function WhyUs() {
  const { whyUs } = site

  return (
    <Section id={whyUs.id} tone="mist-warm" bridge="to-dusk">
      <SectionInner className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
        <div>
          <AnimatedContent distance={36} duration={0.7}>
            <SectionEyebrow>{whyUs.eyebrow}</SectionEyebrow>
            <div className="font-display mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">
              <TrueFocus
                sentence={whyUs.title}
                blurAmount={4}
                borderColor="#c9a86c"
                glowColor="rgba(201,168,108,0.45)"
                animationDuration={0.55}
                pauseBetweenAnimations={1.4}
              />
            </div>
            <p className="mt-4 max-w-xl text-base leading-8 text-navy-600">{whyUs.subtitle}</p>
          </AnimatedContent>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
            {whyUs.stats.map((stat, index) => (
              <AnimatedContent key={stat.id} distance={28} delay={0.05 * index} duration={0.55}>
                <div className="card-on-mist rounded-3xl p-4 sm:p-5">
                  <div className="font-display flex items-baseline gap-1 text-3xl font-extrabold text-navy-900 sm:text-4xl">
                    <CountUp
                      to={stat.value}
                      duration={1.8}
                      className="font-display"
                      separator=","
                    />
                    <span className="text-gold-600">{stat.suffix}</span>
                  </div>
                  <h3 className="mt-2 text-sm font-bold text-navy-800 sm:text-base">{stat.title}</h3>
                  <p className="mt-1 hidden text-xs leading-6 text-navy-500 sm:block">
                    {stat.description}
                  </p>
                </div>
              </AnimatedContent>
            ))}
          </div>

          <ul className="mt-8 space-y-4">
            {whyUs.points.map((point, index) => (
              <AnimatedContent key={point.id} distance={24} delay={0.04 * index} duration={0.5}>
                <li className="border-s-2 border-gold-500 ps-4">
                  <h3 className="font-display text-lg font-bold text-navy-900">{point.title}</h3>
                  <p className="mt-1 text-sm leading-7 text-navy-600">{point.description}</p>
                </li>
              </AnimatedContent>
            ))}
          </ul>
        </div>

        <AnimatedContent distance={50} duration={0.8} tilt={6} className="relative">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-navy-700/40 bg-navy-900 shadow-[0_30px_80px_-40px_rgba(11,28,44,0.7)]">
            <div className="absolute inset-0 opacity-90">
              <Cubes
                gridSize={8}
                maxAngle={48}
                radius={3.2}
                edgeStyle="solid"
                faceColor="#0f172a"
                edgeColor="#c9a86c"
                edgeWidth={1.2}
                faceOpacity={0.92}
                shading={0.35}
                autoAnimate
                className="h-full w-full"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/30" />
            <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-6 sm:gap-4 sm:p-8">
              <BrandLogo size="md" href={null} imgClassName="shadow-[0_8px_24px_-8px_rgba(0,0,0,0.55)]" />
              <div>
                <p className="font-display text-2xl font-bold text-gold-300">{site.brand.name}</p>
                <p className="mt-1 text-sm leading-7 text-white/75">{site.brand.tagline}</p>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </SectionInner>
    </Section>
  )
}
