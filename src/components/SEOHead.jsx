import { useEffect } from 'react'

const SITE_URL = 'https://zohogeeks.in'
const DEFAULT_TITLE = 'ZohoGeeks | Zoho CRM Implementation & Consulting Partner'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`

function setMeta(selectorAttr, selectorValue, content) {
  if (!content) return
  let el = document.querySelector(`meta[${selectorAttr}="${selectorValue}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(selectorAttr, selectorValue)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function SEOHead({ title, description, path = '/', image = DEFAULT_IMAGE }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ZohoGeeks` : DEFAULT_TITLE
    const url = `${SITE_URL}${path}`

    document.title = fullTitle

    setMeta('name', 'description', description)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', image)
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', image)
    setLink('canonical', url)
  }, [title, description, path, image])

  return null
}
