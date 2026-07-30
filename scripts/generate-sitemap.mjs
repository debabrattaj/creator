import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { POSTS } from '../src/data/posts.js'
import { INDUSTRY_LIST } from '../src/data/industries.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SITE_URL = 'https://zohogeeks.in'

const staticUrls = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/blog', changefreq: 'weekly', priority: '0.8' },
]

const postUrls = POSTS.map((post) => ({
  loc: `/blog/${post.slug}`,
  changefreq: 'monthly',
  priority: '0.6',
  lastmod: post.date,
}))

const industryUrls = INDUSTRY_LIST.map((ind) => ({
  loc: `/${ind.slug}`,
  changefreq: 'monthly',
  priority: '0.8',
}))

const urls = [...staticUrls, ...industryUrls, ...postUrls]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u.loc}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

const outPath = resolve(__dirname, '../public/sitemap.xml')
writeFileSync(outPath, xml)
console.log(`sitemap.xml written with ${urls.length} URLs -> ${outPath}`)
