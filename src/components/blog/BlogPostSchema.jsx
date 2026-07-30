const SITE_URL = 'https://zohogeeks.in'

export default function BlogPostSchema({ post }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'ZohoGeeks',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ZohoGeeks',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
  }

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>
}
