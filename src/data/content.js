export const CONTACT = {
  phoneDisplay: '+91 81164 46262',
  phoneRaw: '8116446262',
  phoneIntl: '+918116446262',
  whatsappLink: 'https://wa.me/918116446262',
  email: 'info@zohogeeks.in',
  addressLines: [
    'Flat-1, Somu Avenue, Bishwanath Nagar,',
    'Gothapatna, Bhubaneswar, Odisha',
  ],
  mapQuery: 'Somu Avenue Bishwanath Nagar Gothapatna Bhubaneswar',
}

// Contact form -> email delivery, via Formspree (https://formspree.io).
// The site is static with no backend, so a third-party form endpoint is
// what actually delivers submissions to an inbox.
//
// One-time setup (~2 minutes):
//   1. Go to https://formspree.io and sign up free with debabrattaj@gmail.com
//   2. Create a new form, verify it via the confirmation email
//   3. Copy the endpoint it gives you (looks like https://formspree.io/f/xxxxxxxx)
//   4. Paste it below, replacing the placeholder
//   5. Rebuild and redeploy
// Until this is set to a real endpoint, the contact form will show an error
// on submit instead of silently failing.
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export const NAV_LINKS = [
  { label: 'Services', href: '/#services' },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'Process', href: '/#process' },
  { label: 'Packages', href: '/#packages' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
]

export const ZOHO_APPS = [
  'Zoho CRM',
  'Zoho Books',
  'Zoho People',
  'Zoho One',
  'Zoho Desk',
  'Zoho Creator',
  'Zoho Analytics',
  'Zoho Campaigns',
  'Zoho Projects',
  'Zoho Inventory',
  'Zoho Flow',
  'Zoho Bigin',
]

export const SERVICES = [
  {
    title: 'Zoho CRM Implementation',
    desc: 'End-to-end CRM setup — pipelines, lead scoring, automation and dashboards tuned to how your sales team actually sells.',
    icon: 'crm',
  },
  {
    title: 'Zoho Books & Finance',
    desc: 'GST-ready invoicing, expense tracking and financial reporting configured for Indian statutory compliance.',
    icon: 'books',
  },
  {
    title: 'Zoho People (HRMS)',
    desc: 'Onboarding, attendance, leave and payroll workflows automated so HR spends less time on spreadsheets.',
    icon: 'people',
  },
  {
    title: 'Zoho One Deployment',
    desc: 'Roll out the full 45+ app suite across departments with a unified data model and single sign-on.',
    icon: 'one',
  },
  {
    title: 'Custom Development',
    desc: 'Deluge scripting, custom functions, widgets and Zoho Creator apps for workflows the standard suite can\'t cover.',
    icon: 'code',
  },
  {
    title: 'Data Migration',
    desc: 'Clean, de-duplicated migration from Excel, legacy CRMs or other platforms with zero data loss.',
    icon: 'migrate',
  },
  {
    title: 'Third-Party Integrations',
    desc: 'Connect Zoho with WhatsApp, Tally, payment gateways, telephony and your website via APIs and Zoho Flow.',
    icon: 'integrate',
  },
  {
    title: 'Training & AMC Support',
    desc: 'Team training plus ongoing annual maintenance so your Zoho stack keeps running smoothly after go-live.',
    icon: 'support',
  },
]

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover & Consult',
    desc: 'We audit your current workflow and map out exactly where Zoho can save you time and money — free of cost.',
  },
  {
    step: '02',
    title: 'Plan & Design',
    desc: 'A clear implementation blueprint: modules, automations, integrations and a realistic timeline.',
  },
  {
    step: '03',
    title: 'Implement & Customize',
    desc: 'Our certified consultants configure, customize and test every workflow against your real business cases.',
  },
  {
    step: '04',
    title: 'Train & Launch',
    desc: 'Hands-on training for your team so adoption is smooth from day one, not just a login and hope.',
  },
  {
    step: '05',
    title: 'Support & Optimize',
    desc: 'Post-launch monitoring, AMC support and continuous optimization as your business grows.',
  },
]

export const WHY_US = [
  {
    title: 'Certified Zoho Consultants',
    desc: 'Hands-on expertise across the Zoho suite, not just CRM basics.',
    icon: 'badge',
  },
  {
    title: 'Faster Go-Live',
    desc: 'Structured delivery sprints get you live in weeks, not months.',
    icon: 'bolt',
  },
  {
    title: 'India-Ready Compliance',
    desc: 'GST, e-invoicing and statutory workflows configured correctly from day one.',
    icon: 'shield',
  },
  {
    title: 'Transparent Engagement',
    desc: 'Clear scope, clear timelines and no hidden surprises in your quote.',
    icon: 'eye',
  },
  {
    title: 'Dedicated Support',
    desc: 'A named consultant who knows your setup — not a rotating ticket queue.',
    icon: 'headset',
  },
  {
    title: 'Built to Scale',
    desc: 'Architecture designed so it keeps working as your team and data grow.',
    icon: 'scale',
  },
]

export const PACKAGES = [
  {
    name: 'Starter',
    tagline: 'For small teams getting off spreadsheets',
    features: [
      'Single Zoho app setup (CRM, Books or People)',
      'Standard workflow & pipeline configuration',
      'Data import from Excel/CSV',
      'Team onboarding session',
      'Email support (30 days)',
    ],
    highlight: false,
  },
  {
    name: 'Growth',
    tagline: 'For businesses connecting multiple departments',
    features: [
      'Multi-app setup (CRM + Books + People, etc.)',
      'Custom automation & approval workflows',
      'Third-party integrations (WhatsApp, payments, telephony)',
      'Legacy CRM/system data migration',
      'Priority support (90 days) + training',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    tagline: 'For full Zoho One rollouts across the company',
    features: [
      'Full Zoho One suite deployment',
      'Custom Deluge scripts & Zoho Creator apps',
      'Cross-department automation & analytics',
      'Dedicated onboarding & change management',
      'Annual Maintenance Contract (AMC)',
    ],
    highlight: false,
  },
]

export const GUARANTEES = [
  {
    icon: 'eye',
    title: 'Transparent, Itemized Quotes',
    desc: 'You see exactly what you\'re paying for — every module, every customization, every hour. No vague retainers.',
  },
  {
    icon: 'badge',
    title: 'Certified Consultants Only',
    desc: 'Every implementation is led by a consultant trained across Zoho CRM, Books, People and the wider suite.',
  },
  {
    icon: 'clock',
    title: '24-48hr Response SLA',
    desc: 'A real person replies within two business days on every support ticket, guaranteed — not lost in a queue.',
  },
  {
    icon: 'headset',
    title: 'Direct Access to Your Consultant',
    desc: 'You work with the same person from discovery to go-live, not a rotating cast of account managers.',
  },
  {
    icon: 'check',
    title: 'Revisions Before Go-Live',
    desc: 'We test workflows against your real use cases and refine them with you before anything goes live.',
  },
  {
    icon: 'shield',
    title: 'No Lock-In Pressure',
    desc: 'Clear scope documents and honest recommendations — we tell you what you need, not what sells the biggest package.',
  },
]

export const FOUNDER_NOTE = {
  quote:
    "We started ZohoGeeks because most Zoho rollouts we saw were half-configured and abandoned after go-live. As a new studio, we'd rather earn trust with a genuinely free discovery call and a transparent quote than with recycled testimonials. Talk to us and judge the fit yourself.",
  name: 'The ZohoGeeks Team',
}

export const FAQS = [
  {
    q: 'What is Zoho and why do I need a consultant?',
    a: 'Zoho is a suite of 45+ cloud business apps (CRM, Books, People, Desk and more). While Zoho is powerful out of the box, most businesses need a consultant to configure it around their actual processes, migrate existing data safely, and train the team — that\'s what we do.',
  },
  {
    q: 'How long does a typical Zoho CRM implementation take?',
    a: 'A single-app implementation like Zoho CRM usually takes 2-4 weeks depending on complexity. Multi-app or full Zoho One rollouts can take 6-10 weeks. We give you a firm timeline after the free discovery call.',
  },
  {
    q: 'Can you migrate our data from Excel or another CRM?',
    a: 'Yes. We handle migration from Excel, Google Sheets, Tally, and other CRM platforms — including cleaning and de-duplicating records before they land in Zoho.',
  },
  {
    q: 'Do you provide support after the project goes live?',
    a: 'Yes, every package includes a support window, and we offer Annual Maintenance Contracts (AMC) for ongoing updates, troubleshooting and new automation requests.',
  },
  {
    q: 'Is Zoho suitable for small businesses, or only large enterprises?',
    a: 'Both. Zoho scales from single-user startups to large multi-department enterprises. We right-size the implementation — and the license plan — to your team size and budget.',
  },
  {
    q: 'How much does a Zoho implementation cost?',
    a: 'It depends on the apps, customization and integrations involved. Share your requirements on a free consultation call and we\'ll send a transparent, itemized quote — no hidden costs.',
  },
]
