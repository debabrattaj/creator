import { CONTACT, FAQS } from '../data/content'

const SITE_URL = 'https://zohogeeks.in/'

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'ZohoGeeks',
  description:
    'Zoho implementation and consulting studio helping businesses set up, customize and automate Zoho CRM, Books, People and the full Zoho One suite.',
  url: SITE_URL,
  telephone: CONTACT.phoneIntl,
  email: CONTACT.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Flat-1, Somu Avenue, Bishwanath Nagar, Gothapatna',
    addressLocality: 'Bhubaneswar',
    addressRegion: 'Odisha',
    addressCountry: 'IN',
  },
  areaServed: 'IN',
  sameAs: [],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
}

export default function SEOSchema() {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </>
  )
}
