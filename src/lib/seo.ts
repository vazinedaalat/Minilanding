import { site } from '@/content/site'

export function getSiteOrigin(): string {
  const configured = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '')
  if (configured) return configured
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin
  }
  return 'https://vazinedalat.ir'
}

export function absoluteUrl(pathname = '/'): string {
  const origin = getSiteOrigin()
  let path = pathname.startsWith('/') ? pathname : `/${pathname}`
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1)
  return path === '/' ? `${origin}/` : `${origin}${path}`
}

export function clampMetaDescription(text: string, max = 160): string {
  const normalized = text.replace(/\s+/g, ' ').trim()
  if (normalized.length <= max) return normalized
  const slice = normalized.slice(0, max - 1)
  const lastSpace = slice.lastIndexOf(' ')
  return `${(lastSpace > 80 ? slice.slice(0, lastSpace) : slice).trim()}…`
}

export function buildOrganizationJsonLd() {
  const { brand, social, contact, seo } = site
  return {
    '@context': 'https://schema.org',
    '@type': ['LegalService', 'Organization'],
    name: brand.legalName,
    alternateName: [brand.name, brand.fullName],
    url: absoluteUrl('/'),
    logo: absoluteUrl(brand.logo),
    image: absoluteUrl(seo.ogImage),
    description: seo.description,
    telephone: contact.phoneHref.replace('tel:', ''),
    areaServed: {
      '@type': 'Country',
      name: 'Iran',
    },
    availableLanguage: ['fa', 'Persian'],
    sameAs: [social.bale.href, social.instagram.href],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '09:00',
      closes: '21:00',
    },
    knowsAbout: [...seo.keywords],
  }
}

export function buildWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.brand.name,
    url: absoluteUrl('/'),
    inLanguage: 'fa-IR',
    description: site.seo.description,
    publisher: {
      '@type': 'Organization',
      name: site.brand.legalName,
      logo: absoluteUrl(site.brand.logo),
    },
  }
}

export function buildFaqJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: site.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function buildServiceJsonLd() {
  return site.services.items.map((item) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: item.title,
    description: item.description,
    provider: {
      '@type': 'LegalService',
      name: site.brand.legalName,
      url: absoluteUrl('/'),
    },
    areaServed: 'IR',
    serviceType: item.title,
  }))
}
