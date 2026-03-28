import { useEffect } from 'react'
import { siteConfig } from '../data/site'

function ensureNamedMetaTag(attr, value) {
  let tag = document.querySelector(`meta[${attr}="${value}"]`)

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, value)
    document.head.appendChild(tag)
  }

  return tag
}

function ensureLinkTag(rel) {
  let tag = document.querySelector(`link[rel="${rel}"]`)

  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    document.head.appendChild(tag)
  }

  return tag
}

function ensureJsonLdTag() {
  let tag = document.querySelector('script[data-seo="json-ld"]')

  if (!tag) {
    tag = document.createElement('script')
    tag.type = 'application/ld+json'
    tag.setAttribute('data-seo', 'json-ld')
    document.head.appendChild(tag)
  }

  return tag
}

function buildCanonicalUrl(pathname = '/') {
  const normalizedPathname = pathname === '/' ? '' : pathname
  return `${siteConfig.siteUrl}${normalizedPathname}`
}

export function usePageSeo({ title, description, jsonLd, pathname = '/', image = siteConfig.seo.defaultImage }) {
  useEffect(() => {
    const resolvedTitle = title || siteConfig.seo.title
    const resolvedDescription = description || siteConfig.seo.description
    const canonicalUrl = buildCanonicalUrl(pathname)

    document.title = resolvedTitle

    const descriptionTag = ensureNamedMetaTag('name', 'description')
    descriptionTag.setAttribute('content', resolvedDescription)

    const ogTitleTag = ensureNamedMetaTag('property', 'og:title')
    ogTitleTag.setAttribute('content', resolvedTitle)

    const ogDescriptionTag = ensureNamedMetaTag('property', 'og:description')
    ogDescriptionTag.setAttribute('content', resolvedDescription)

    const ogTypeTag = ensureNamedMetaTag('property', 'og:type')
    ogTypeTag.setAttribute('content', pathname === '/' ? 'website' : 'product')

    const ogUrlTag = ensureNamedMetaTag('property', 'og:url')
    ogUrlTag.setAttribute('content', canonicalUrl)

    const ogImageTag = ensureNamedMetaTag('property', 'og:image')
    ogImageTag.setAttribute('content', image)

    const twitterCardTag = ensureNamedMetaTag('name', 'twitter:card')
    twitterCardTag.setAttribute('content', 'summary_large_image')

    const twitterTitleTag = ensureNamedMetaTag('name', 'twitter:title')
    twitterTitleTag.setAttribute('content', resolvedTitle)

    const twitterDescriptionTag = ensureNamedMetaTag('name', 'twitter:description')
    twitterDescriptionTag.setAttribute('content', resolvedDescription)

    const twitterImageTag = ensureNamedMetaTag('name', 'twitter:image')
    twitterImageTag.setAttribute('content', image)

    const canonicalTag = ensureLinkTag('canonical')
    canonicalTag.setAttribute('href', canonicalUrl)

    const jsonLdTag = ensureJsonLdTag()
    jsonLdTag.textContent = JSON.stringify(jsonLd || siteConfig.defaultJsonLd)

    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [description, image, jsonLd, pathname, title])
}
