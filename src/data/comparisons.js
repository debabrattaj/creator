export const COMPARISONS = {
  salesforce: {
    slug: 'zoho-vs-salesforce',
    competitor: 'Salesforce',
    metaTitle: 'Zoho CRM vs Salesforce',
    metaDescription:
      'An honest comparison of Zoho CRM and Salesforce — pricing positioning, customization depth, ease of setup and which is the better fit for your business.',
    eyebrow: 'Zoho CRM vs Salesforce',
    heroHeadline: 'Zoho CRM vs Salesforce: which one actually fits your team?',
    heroSubheadline:
      "Salesforce is the industry benchmark for enterprise customization. Zoho CRM is built for businesses that want to move fast without an army of certified admins. Here's an honest breakdown, not a sales pitch.",
    quickVerdict: {
      zohoTitle: 'Zoho CRM is the better fit if…',
      zohoPoints: [
        "You're an SMB or mid-market business, not a large multi-region enterprise",
        'You want to be live in weeks, not months',
        'You want CRM connected to finance, HR and support out of the box (Zoho One)',
        'Budget predictability matters more than maximum configurability',
      ],
      competitorTitle: 'Salesforce is the better fit if…',
      competitorPoints: [
        'You run a large, complex, multi-department sales organization',
        'You need the deepest possible customization and the AppExchange marketplace',
        'You have (or plan to hire) dedicated certified Salesforce admins',
        'Budget is less of a constraint than raw configurability',
      ],
    },
    comparisonRows: [
      { aspect: 'Best for', zoho: 'SMB to mid-market businesses', competitor: 'Large enterprises, complex sales orgs' },
      { aspect: 'Pricing positioning', zoho: 'Lower cost per user, predictable', competitor: 'Premium/enterprise pricing, add-ons scale cost fast' },
      { aspect: 'Setup & learning curve', zoho: 'Fast to configure, admin-friendly', competitor: 'Powerful but usually needs certified admins/consultants' },
      { aspect: 'Customization depth', zoho: 'Strong (Deluge scripting, Zoho Creator)', competitor: 'Deepest in the market (Apex code, AppExchange)' },
      { aspect: 'Native app ecosystem', zoho: 'Zoho One bundles 45+ apps under one login', competitor: 'Relies more on separately-priced AppExchange add-ons' },
      { aspect: 'India GST/compliance', zoho: 'Native via Zoho Books integration', competitor: 'Needs third-party AppExchange add-ons' },
      { aspect: 'Support ecosystem', zoho: 'Growing partner network, SMB-accessible', competitor: 'Large global partner network, enterprise support tiers' },
    ],
    migrationNote: {
      title: 'Already on Salesforce and considering a switch?',
      desc: "We handle migrations from Salesforce to Zoho CRM — cleaning and mapping your data, rebuilding your automations, and making sure nothing gets lost in the move.",
    },
    faqs: [
      {
        q: 'Is Zoho CRM as powerful as Salesforce?',
        a: "For most SMB and mid-market use cases, yes — Zoho CRM covers pipeline management, automation, and reporting comprehensively. Salesforce pulls ahead for very large, highly complex enterprise deployments that need its deeper customization and AppExchange ecosystem.",
      },
      {
        q: 'Can I migrate from Salesforce to Zoho CRM without losing data?',
        a: 'Yes. A careful migration maps your Salesforce objects, fields and history into Zoho CRM equivalents, with a test import first to verify nothing is lost before the full migration runs.',
      },
      {
        q: 'Which is cheaper, Zoho or Salesforce?',
        a: 'Zoho CRM is generally significantly less expensive per user, and Zoho One bundles many additional business apps at no extra cost. Salesforce pricing tends to climb quickly once you add AppExchange apps and premium support tiers — check both vendors\' current pricing pages for exact numbers, as they change.',
      },
      {
        q: 'Does Zoho CRM support the same level of customization as Salesforce?',
        a: "Zoho CRM is highly customizable via Deluge scripting and Zoho Creator for custom apps, but Salesforce's Apex code and AppExchange marketplace still offer the deepest customization ceiling in the market — relevant mainly for large, complex enterprise requirements.",
      },
      {
        q: 'Is Salesforce overkill for a small business?',
        a: "Often, yes. Salesforce's strengths — deep customization, a massive admin/consultant ecosystem — matter most at enterprise scale. Most small businesses get there faster and cheaper with Zoho CRM.",
      },
    ],
  },

  'microsoft-dynamics-365': {
    slug: 'zoho-vs-microsoft-dynamics-365',
    competitor: 'Microsoft Dynamics 365',
    metaTitle: 'Zoho CRM vs Microsoft Dynamics 365',
    metaDescription:
      'Zoho CRM vs Microsoft Dynamics 365 compared — pricing, setup complexity, ecosystem fit and which is the better fit depending on whether your business already runs on Microsoft.',
    eyebrow: 'Zoho CRM vs Microsoft Dynamics 365',
    heroHeadline: 'Zoho CRM vs Microsoft Dynamics 365: does your stack decide it for you?',
    heroSubheadline:
      "Dynamics 365 shines when your business already runs on Microsoft 365, Teams and Azure. Zoho CRM shines as a faster, self-contained alternative. Here's how they actually compare.",
    quickVerdict: {
      zohoTitle: 'Zoho CRM is the better fit if…',
      zohoPoints: [
        "You're not deeply invested in the Microsoft ecosystem",
        'You want simpler, more predictable licensing',
        'You want a fast, low-overhead implementation',
        'You want CRM bundled with finance, HR and support apps (Zoho One)',
      ],
      competitorTitle: 'Dynamics 365 is the better fit if…',
      competitorPoints: [
        'Your business already runs on Microsoft 365, Teams and Azure',
        'You rely heavily on Outlook, SharePoint and Power BI for daily work',
        'You want deep Power Platform / Power Automate integration',
        'You have (or plan to engage) Microsoft-certified implementation partners',
      ],
    },
    comparisonRows: [
      { aspect: 'Best for', zoho: 'Standalone SMB/mid-market CRM', competitor: 'Enterprises already on the Microsoft stack' },
      { aspect: 'Pricing positioning', zoho: 'Lower cost, simpler licensing', competitor: 'Modular licensing, cost adds up per module' },
      { aspect: 'Setup & deployment', zoho: 'Fast out-of-box setup', competitor: 'Often needs certified Microsoft implementation partners' },
      { aspect: 'Customization depth', zoho: 'Strong via Deluge / Zoho Creator', competitor: 'Strong via Power Platform / Power Automate' },
      { aspect: 'Ecosystem integration', zoho: 'Seamless with Zoho One\'s 45+ apps', competitor: 'Seamless with Teams, Outlook, SharePoint, Power BI' },
      { aspect: 'India GST/compliance', zoho: 'Native via Zoho Books', competitor: 'Available, often via localization partners' },
      { aspect: 'Deciding factor', zoho: 'Best if you want a self-contained suite', competitor: 'Best if Microsoft is already your core stack' },
    ],
    migrationNote: {
      title: 'Evaluating a move away from Dynamics 365?',
      desc: 'We help businesses migrate off Dynamics 365 into Zoho CRM when the Microsoft ecosystem lock-in stops making sense for their size or budget — data mapping, automation rebuild, and team training included.',
    },
    faqs: [
      {
        q: 'Should I choose Zoho CRM or Dynamics 365 if I already use Microsoft 365?',
        a: "If your team lives in Outlook, Teams and SharePoint daily, Dynamics 365's native integration with that stack is a real advantage. If you're not deeply tied to Microsoft, Zoho CRM is usually faster to deploy and simpler to license.",
      },
      {
        q: 'Is Dynamics 365 more expensive than Zoho CRM?',
        a: "Generally yes — Dynamics 365's modular licensing (Sales, Customer Service, Field Service sold separately) tends to add up faster than Zoho's more predictable per-user pricing, though exact costs depend on which modules you need. Check current pricing on both vendors' sites.",
      },
      {
        q: 'Can Zoho CRM integrate with Microsoft Outlook and Teams?',
        a: 'Yes, Zoho CRM has integrations for Outlook and Microsoft 365, though the integration is naturally less native than a Microsoft-built product like Dynamics 365.',
      },
      {
        q: 'Which is easier to implement, Zoho CRM or Dynamics 365?',
        a: 'Zoho CRM is generally faster and simpler to get running for SMB use cases. Dynamics 365 implementations, especially with Power Platform customization, typically involve more setup time and often a certified partner.',
      },
      {
        q: 'Does Zoho CRM support GST-compliant billing like Dynamics 365 does for India?',
        a: 'Yes, Zoho CRM connects natively to Zoho Books for GST-compliant invoicing. Dynamics 365 supports Indian GST too, typically through localization add-ons or partner configuration.',
      },
    ],
  },

  hubspot: {
    slug: 'zoho-vs-hubspot',
    competitor: 'HubSpot',
    metaTitle: 'Zoho CRM vs HubSpot',
    metaDescription:
      'Zoho CRM vs HubSpot compared — free tier limits, marketing automation depth, pricing as you scale, and which is the better fit for sales-led vs marketing-led businesses.',
    eyebrow: 'Zoho CRM vs HubSpot',
    heroHeadline: 'Zoho CRM vs HubSpot: sales-led operations vs inbound marketing',
    heroSubheadline:
      "HubSpot built its name on inbound marketing. Zoho CRM built its name on breadth — sales, finance, HR and support in one connected suite. Here's how they actually compare for a growing business.",
    quickVerdict: {
      zohoTitle: 'Zoho CRM is the better fit if…',
      zohoPoints: [
        'You want predictable pricing regardless of contact list size',
        'You need CRM connected to finance, HR and support, not just marketing',
        "You're a sales-led or operations-led business, not primarily inbound marketing",
        'You need native GST-compliant invoicing for India',
      ],
      competitorTitle: 'HubSpot is the better fit if…',
      competitorPoints: [
        'Inbound marketing — content, SEO, landing pages — is central to your growth strategy',
        'You want the most polished marketing automation and CMS tools in one platform',
        "You're starting very small and want a genuinely useful free CRM tier",
        'Your team is marketing-led rather than sales-operations-led',
      ],
    },
    comparisonRows: [
      { aspect: 'Best for', zoho: 'Sales + operations across departments', competitor: 'Marketing-led growth companies' },
      { aspect: 'Pricing positioning', zoho: 'Predictable per-user pricing', competitor: 'Free CRM tier, but Hubs scale steeply with contact volume' },
      { aspect: 'Marketing automation', zoho: 'Solid via Zoho Marketing Automation/Campaigns', competitor: 'Best-in-class — built-in blogging, SEO, landing pages' },
      { aspect: 'Ease of use', zoho: 'Approachable, strong for ops/finance/HR breadth', competitor: 'Very polished UI, slight edge for marketing workflows' },
      { aspect: 'Native app ecosystem', zoho: 'Zoho One bundles CRM + Books + People + Desk', competitor: 'Separate "Hubs" for Marketing/Sales/Service/Ops, priced separately' },
      { aspect: 'India GST/compliance', zoho: 'Native via Zoho Books', competitor: 'No native Indian invoicing — needs third-party integration' },
    ],
    migrationNote: {
      title: "Outgrowing HubSpot's contact-based pricing?",
      desc: "As your contact list grows, HubSpot's Marketing Hub pricing can climb fast. If you're evaluating a move to Zoho's flat per-user pricing, we handle the migration and rebuild your automations in Zoho.",
    },
    faqs: [
      {
        q: 'Is HubSpot really free?',
        a: "HubSpot's core CRM has a genuinely useful free tier. However, the Marketing Hub, Sales Hub and other add-ons that most growing businesses eventually need are priced separately and scale with your contact list and feature needs.",
      },
      {
        q: 'Is Zoho CRM good for marketing automation like HubSpot?',
        a: "Zoho's marketing automation (via Zoho Marketing Automation and Zoho Campaigns) covers email sequences, lead scoring and basic automation well, but HubSpot's inbound marketing tools — blogging, SEO recommendations, landing page builder — are more polished and purpose-built for content-led growth.",
      },
      {
        q: 'Which is cheaper as my business grows, Zoho CRM or HubSpot?',
        a: "Zoho CRM's pricing is generally more predictable since it's priced per user, not per contact. HubSpot's Marketing Hub pricing is tied to your contact list size, which can increase costs significantly as your database grows — worth modeling out before committing.",
      },
      {
        q: 'Can Zoho CRM handle GST-compliant invoicing like an Indian business needs?',
        a: "Yes, natively through Zoho Books integration. HubSpot doesn't have native Indian GST invoicing, so businesses usually connect a separate billing tool.",
      },
      {
        q: 'Should a sales-focused business choose Zoho or HubSpot?',
        a: "If your growth engine is inbound content and marketing, HubSpot's strengths matter more. If your business runs on structured sales processes connected to finance and operations, Zoho CRM's broader suite is usually the better fit.",
      },
    ],
  },

  pipedrive: {
    slug: 'zoho-vs-pipedrive',
    competitor: 'Pipedrive',
    metaTitle: 'Zoho CRM vs Pipedrive',
    metaDescription:
      'Zoho CRM vs Pipedrive compared — simplicity vs breadth, pricing, and whether a focused sales pipeline tool or a full connected business suite fits your business better.',
    eyebrow: 'Zoho CRM vs Pipedrive',
    heroHeadline: 'Zoho CRM vs Pipedrive: simple pipeline tool or connected business suite?',
    heroSubheadline:
      "Pipedrive is deliberately minimal — a clean visual sales pipeline and little else. Zoho CRM trades some of that simplicity for breadth. Here's how to decide which trade-off is right for you.",
    quickVerdict: {
      zohoTitle: 'Zoho CRM is the better fit if…',
      zohoPoints: [
        'You want CRM connected to finance, HR, support and inventory, not just a pipeline',
        'You expect to need deeper automation or custom workflows as you grow',
        'You want one system instead of stitching together several point tools',
        'Long-term scalability matters more than immediate minimalism',
      ],
      competitorTitle: 'Pipedrive is the better fit if…',
      competitorPoints: [
        'You want the simplest possible visual sales pipeline, nothing more',
        "You're a small sales team that doesn't need marketing, finance or support tools",
        'Minimal setup time and a near-zero learning curve are the priority',
        "You're confident you won't need to consolidate other business tools later",
      ],
    },
    comparisonRows: [
      { aspect: 'Best for', zoho: 'Businesses wanting CRM + connected operations', competitor: 'Small sales-only teams wanting simplicity' },
      { aspect: 'Pricing positioning', zoho: 'Competitive, and includes broader Zoho One apps', competitor: 'Competitively priced for pure sales use' },
      { aspect: 'Feature depth', zoho: 'Broad — marketing, inventory, HR, helpdesk, custom apps', competitor: 'Intentionally minimal, by design' },
      { aspect: 'Ease of use', zoho: 'Some setup involved, scales further', competitor: 'Famously simple, minimal learning curve' },
      { aspect: 'Customization', zoho: 'Deep, via Deluge scripting and Zoho Creator', competitor: 'Lighter customization, by design' },
      { aspect: 'India GST/compliance', zoho: 'Native via Zoho Books', competitor: 'No native GST invoicing' },
    ],
    migrationNote: {
      title: 'Outgrown Pipedrive\'s simplicity?',
      desc: "When a sales-only pipeline tool stops being enough — you need finance, support or HR connected too — we migrate your Pipedrive data into Zoho CRM and configure the additional modules you actually need.",
    },
    faqs: [
      {
        q: 'Is Pipedrive simpler to use than Zoho CRM?',
        a: "For pure sales pipeline management, yes — that simplicity is Pipedrive's core selling point. Zoho CRM involves a bit more initial setup but covers far more ground once you need it.",
      },
      {
        q: 'Can Zoho CRM do everything Pipedrive does?',
        a: "Yes, Zoho CRM's pipeline management covers everything Pipedrive offers and more, including deeper automation, custom fields, and integration with finance and support tools.",
      },
      {
        q: "Why would a business choose Zoho CRM over Pipedrive's simplicity?",
        a: 'Mainly for growth headroom — a business that expects to eventually need marketing automation, GST-compliant billing, HR tools or a helpdesk gets all of that natively in Zoho, rather than needing to migrate to a new system later.',
      },
      {
        q: 'Is Zoho CRM more expensive than Pipedrive?',
        a: "Pricing is broadly comparable at the entry level for pure CRM use. Zoho tends to offer more value once you factor in the wider Zoho One suite of connected apps included at higher tiers — compare current plans on both vendors' sites for your specific needs.",
      },
      {
        q: 'Can I migrate from Pipedrive to Zoho CRM easily?',
        a: 'Yes. We handle exporting your Pipedrive deals, contacts and pipeline stages, cleaning the data, and mapping it into Zoho CRM with equivalent (and typically more advanced) automation.',
      },
    ],
  },

  odoo: {
    slug: 'zoho-vs-odoo',
    competitor: 'Odoo',
    metaTitle: 'Zoho CRM vs Odoo',
    metaDescription:
      'Zoho CRM vs Odoo compared — open-source flexibility vs managed SaaS simplicity, hosting and maintenance trade-offs, and which fits your technical resources.',
    eyebrow: 'Zoho CRM vs Odoo',
    heroHeadline: 'Zoho CRM vs Odoo: managed SaaS or self-hosted open source?',
    heroSubheadline:
      "Odoo gives you full code-level control if you're willing to own the hosting and maintenance. Zoho CRM gives you a fully managed suite with zero infrastructure to look after. Here's the real trade-off.",
    quickVerdict: {
      zohoTitle: 'Zoho CRM is the better fit if…',
      zohoPoints: [
        "You don't have in-house technical resources to host and maintain a system",
        'You want a fully managed SaaS product with zero infrastructure overhead',
        'You want native GST-compliant invoicing out of the box',
        'You value uniform design/UX across all connected apps',
      ],
      competitorTitle: 'Odoo is the better fit if…',
      competitorPoints: [
        'You have in-house developers and want full code-level customization',
        'You want to self-host and avoid long-term subscription costs',
        "You're comfortable managing hosting, updates and module conflicts yourself",
        'You need highly specific, code-level custom logic beyond low-code tools',
      ],
    },
    comparisonRows: [
      { aspect: 'Best for', zoho: 'Businesses wanting a managed, ready-to-use suite', competitor: 'Businesses with in-house technical resources' },
      { aspect: 'Pricing model', zoho: 'SaaS subscription, no hosting cost', competitor: 'Free (Community, self-hosted) or paid per-app (Enterprise)' },
      { aspect: 'Setup & maintenance', zoho: 'Fully managed, zero infrastructure', competitor: 'Requires hosting, updates, and technical upkeep (Community edition)' },
      { aspect: 'Customization depth', zoho: 'Deluge scripting / low-code Zoho Creator', competitor: 'Full Python code-level access, maximum flexibility' },
      { aspect: 'App ecosystem polish', zoho: 'Uniform design across Zoho One\'s 45+ apps', competitor: 'Broad module range, polish varies since many are community-built' },
      { aspect: 'India GST/compliance', zoho: 'Native via Zoho Books', competitor: 'Available, often needs specific localization configuration' },
    ],
    migrationNote: {
      title: 'Weighing Odoo\'s maintenance overhead against a managed system?',
      desc: "If self-hosting Odoo has become more overhead than it's worth, we migrate your data into Zoho CRM and configure the modules you actually rely on — no servers to manage afterward.",
    },
    faqs: [
      {
        q: 'Is Odoo really free?',
        a: 'The Community edition is free and open-source, but you bear the cost of hosting, server maintenance, updates and any development work. The Enterprise edition is paid per app and includes official support.',
      },
      {
        q: 'Is Zoho CRM as customizable as Odoo?',
        a: "Zoho CRM is highly customizable through Deluge scripting and Zoho Creator, but Odoo's open Python codebase offers a higher ceiling for businesses with in-house developers who want full code-level control.",
      },
      {
        q: 'Which requires less technical maintenance, Zoho or Odoo?',
        a: 'Zoho CRM, by a wide margin — it\'s fully managed SaaS with no servers to maintain. Odoo\'s Community edition requires you to host, update and troubleshoot the system yourself, or pay for Enterprise/hosted plans.',
      },
      {
        q: 'Can Zoho CRM replace Odoo\'s broader ERP modules?',
        a: 'Zoho covers CRM, finance (Books), HR (People), support (Desk), inventory and more through Zoho One — a comparable breadth to Odoo\'s modules, delivered as a managed suite rather than a self-hosted one.',
      },
      {
        q: 'Is Odoo or Zoho better for GST compliance in India?',
        a: "Zoho Books provides native GST-ready invoicing out of the box. Odoo supports Indian GST too, but typically needs specific localization modules configured correctly, often with a local implementation partner.",
      },
    ],
  },

  bitrix24: {
    slug: 'zoho-vs-bitrix24',
    competitor: 'Bitrix24',
    metaTitle: 'Zoho CRM vs Bitrix24',
    metaDescription:
      'Zoho CRM vs Bitrix24 compared — free tier generosity vs CRM depth, and whether an all-in-one bundled tool or a purpose-built CRM suite fits your business better.',
    eyebrow: 'Zoho CRM vs Bitrix24',
    heroHeadline: 'Zoho CRM vs Bitrix24: purpose-built CRM or all-in-one bundle?',
    heroSubheadline:
      "Bitrix24 bundles a CRM with a social intranet, website builder and more under a very generous free tier. Zoho CRM trades that breadth for a deeper, more purpose-built CRM. Here's how they compare.",
    quickVerdict: {
      zohoTitle: 'Zoho CRM is the better fit if…',
      zohoPoints: [
        'You want a purpose-built, deeply-featured CRM rather than a bundle',
        'You need advanced automation, territory management or AI-assisted insights',
        'You want native GST-compliant billing for India',
        "You're growing past the very early, budget-zero startup stage",
      ],
      competitorTitle: 'Bitrix24 is the better fit if…',
      competitorPoints: [
        "You're a very early-stage business and want a genuinely free, unlimited-user tool",
        'You want CRM bundled with an intranet, website builder and task management',
        "You're testing the CRM waters before committing budget",
        "CRM depth matters less than having many tools in one free bundle",
      ],
    },
    comparisonRows: [
      { aspect: 'Best for', zoho: 'Growing businesses wanting a deep, focused CRM', competitor: 'Very early-stage businesses wanting an all-in-one free tool' },
      { aspect: 'Pricing positioning', zoho: 'Limited free tier, richer paid tiers', competitor: 'Very generous free tier, unlimited users' },
      { aspect: 'CRM depth', zoho: 'Deep — advanced automation, Zia AI insights, territory management', competitor: 'Solid basics, shallower since CRM is one of many bundled tools' },
      { aspect: 'Focus & polish', zoho: 'Purpose-built CRM UX', competitor: 'All-in-one — CRM + intranet + website builder + tasks' },
      { aspect: 'Native app ecosystem', zoho: 'Zoho One\'s 45+ deeply integrated apps', competitor: 'Bundled tools, less specialized than dedicated products' },
      { aspect: 'India GST/compliance', zoho: 'Native via Zoho Books', competitor: 'No native GST invoicing' },
    ],
    migrationNote: {
      title: 'Outgrowing Bitrix24\'s CRM depth?',
      desc: "When Bitrix24's bundled CRM stops being enough for serious sales operations, we migrate your data into Zoho CRM and set up the deeper automation and GST-compliant billing your business needs.",
    },
    faqs: [
      {
        q: 'Is Bitrix24 really free with unlimited users?',
        a: "Bitrix24's free plan does support an unusually high number of users, which makes it appealing for very early-stage teams. The trade-off is that the free tier has feature and storage limits, and the CRM itself is less deep than a purpose-built product.",
      },
      {
        q: 'Is Zoho CRM better than Bitrix24 for serious sales teams?',
        a: 'For teams that need advanced pipeline automation, AI-assisted lead scoring, territory management or deep customization, yes — Zoho CRM is purpose-built for CRM depth, while Bitrix24 spreads its focus across many bundled tools.',
      },
      {
        q: 'Does Bitrix24 support GST-compliant invoicing for India?',
        a: "Not natively. Zoho CRM connects directly to Zoho Books for GST-ready invoicing, which Bitrix24 doesn't offer out of the box.",
      },
      {
        q: 'Should a startup start with Bitrix24 and move to Zoho later?',
        a: "That's a reasonable path for a zero-budget, very early-stage team. Once you need deeper CRM automation, GST-compliant billing or a more polished sales process, migrating to Zoho CRM is straightforward.",
      },
      {
        q: 'What does Bitrix24 include that Zoho CRM does not?',
        a: "Bitrix24 bundles a social intranet and website builder alongside its CRM, which Zoho doesn't replicate directly (though Zoho One includes its own broader suite of 45+ specialized business apps instead of an intranet/website builder combo).",
      },
    ],
  },
}

export const COMPARISON_LIST = Object.values(COMPARISONS)
