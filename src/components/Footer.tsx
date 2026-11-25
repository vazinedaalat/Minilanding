import { site } from '@/content/site'

export function Footer() {
  return (
    <footer className="border-t border-navy-800 bg-navy-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8 lg:py-14">
        <div>
          <p className="font-display text-2xl font-bold">
            <span className="text-gold-400">{site.brand.nameLead}</span> {site.brand.nameTrail}
          </p>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/65">{site.brand.slogan}</p>
          <ul className="mt-5 flex flex-col gap-2 text-sm text-gold-300/90">
            {site.footer.highlights.map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
        </div>

        <div className="text-sm text-white/55 lg:text-end">
          <p>{site.footer.copyright}</p>
          <p className="mt-2" dir="ltr">
            {site.contact.email}
          </p>
        </div>
      </div>
    </footer>
  )
}
