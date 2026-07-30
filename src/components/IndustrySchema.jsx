const SITE_URL = 'https://zohogeeks.in'

export default function IndustrySchema({ data }) {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: `Zoho CRM Implementation for ${data.industry}`,
    provider: {
      '@type': 'ProfessionalService',
      name: 'ZohoGeeks',
      url: SITE_URL,
    },
    areaServed: 'IN',
    description: data.metaDescription,
    url: `${SITE_URL}/${data.slug}`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </>
  )
}
