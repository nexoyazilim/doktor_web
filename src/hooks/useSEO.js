// Basit ve React 19 uyumlu SEO kancası: title, description, canonical ve sosyal etiketlerini yönetir
import { useEffect } from 'react'

function upsertMeta(nameOrProperty, content, isProperty = false) {
  if (!content) return
  const selector = isProperty ? `meta[property="${nameOrProperty}"]` : `meta[name="${nameOrProperty}"]`
  let tag = document.head.querySelector(selector)
  if (!tag) {
    tag = document.createElement('meta')
    if (isProperty) {
      tag.setAttribute('property', nameOrProperty)
    } else {
      tag.setAttribute('name', nameOrProperty)
    }
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function upsertLink(rel, href) {
  if (!href) return
  let link = document.head.querySelector(`link[rel="${rel}"]`)
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', rel)
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
}

export function useSEO({
  title,
  description,
  canonical,
  og = {},
  twitter = {},
  robots,
} = {}) {
  useEffect(() => {
    if (title) {
      document.title = title
      upsertMeta('og:title', title, true)
      upsertMeta('twitter:title', title)
    }

    if (description) {
      upsertMeta('description', description)
      upsertMeta('og:description', description, true)
      upsertMeta('twitter:description', description)
    }

    // Canonical
    const url = canonical || (typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}` : undefined)
    if (url) {
      upsertLink('canonical', url)
      upsertMeta('og:url', url, true)
    }

    // Open Graph
    if (og.type) upsertMeta('og:type', og.type, true)
    if (og.image) upsertMeta('og:image', og.image, true)
    if (og.siteName) upsertMeta('og:site_name', og.siteName, true)
    if (og.locale) upsertMeta('og:locale', og.locale, true)

    // Twitter
    if (twitter.card) upsertMeta('twitter:card', twitter.card)
    if (twitter.image) upsertMeta('twitter:image', twitter.image)
    if (twitter.site) upsertMeta('twitter:site', twitter.site)

    // Robots
    if (robots) upsertMeta('robots', robots)

    // HTML lang güvenceye al
    try {
      if (!document.documentElement.getAttribute('lang')) {
        document.documentElement.setAttribute('lang', 'tr')
      }
    } catch (_) {}
  }, [title, description, canonical, og.type, og.image, og.siteName, og.locale, twitter.card, twitter.image, twitter.site, robots])
}

export default useSEO



