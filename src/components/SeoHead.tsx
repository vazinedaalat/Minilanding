import { useEffect } from 'react'
import { site } from '@/content/site'
import {
  absoluteUrl,
  buildFaqJsonLd,
  buildOrganizationJsonLd,
  buildServiceJsonLd,
  buildWebSiteJsonLd,
  clampMetaDescription,
} from '@/lib/seo'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

function upsertJsonLd(id: string, data: unknown) {
  let el = document.getElementById(id) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

/**
 * Client-side document head for SPA crawlers + social previews.
 */
export function SeoHead() {
  useEffect(() => {
    const { seo, brand } = site
    const title = seo.title
    const description = clampMetaDescription(seo.description)
    const canonical = absoluteUrl('/')
    const image = absoluteUrl(seo.ogImage)

    document.title = title
    document.documentElement.lang = 'fa'

    upsertMeta('name', 'description', description)
    upsertMeta('name', 'keywords', seo.keywords.join(', '))
    upsertMeta('name', 'author', brand.legalName)
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large')
    upsertMeta('name', 'theme-color', '#0b1c2c')

    upsertLink('canonical', canonical)

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:locale', 'fa_IR')
    upsertMeta('property', 'og:site_name', brand.name)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', canonical)
    upsertMeta('property', 'og:image', image)
    upsertMeta('property', 'og:image:alt', brand.legalName)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', image)

    upsertJsonLd('ld-organization', buildOrganizationJsonLd())
    upsertJsonLd('ld-website', buildWebSiteJsonLd())
    upsertJsonLd('ld-faq', buildFaqJsonLd())
    upsertJsonLd('ld-services', buildServiceJsonLd())
  }, [])

  return null
}
