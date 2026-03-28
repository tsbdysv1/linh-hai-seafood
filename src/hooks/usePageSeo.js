import { useEffect } from 'react'
import { siteConfig } from '../data/site'

function ensureMetaTag(name) {
  let tag = document.querySelector(`meta[name="${name}"]`)

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
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

export function usePageSeo({ title, description, jsonLd }) {
  useEffect(() => {
    document.title = title || siteConfig.seo.title

    const descriptionTag = ensureMetaTag('description')
    descriptionTag.setAttribute('content', description || siteConfig.seo.description)

    const jsonLdTag = ensureJsonLdTag()
    jsonLdTag.textContent = JSON.stringify(jsonLd || siteConfig.defaultJsonLd)

    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [description, jsonLd, title])
}
