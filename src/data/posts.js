export function formatDate(dateStr) {
  const date = new Date(`${dateStr}T00:00:00`)
  return date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
}

export const POSTS = [
  {
    slug: 'zoho-crm-implementation-checklist',
    title: 'Zoho CRM Implementation Checklist: 10 Steps Before You Go Live',
    excerpt:
      'Most Zoho CRM rollouts fail from a missing plan, not a missing feature. Here is the checklist we run through on every implementation before flipping the switch.',
    category: 'Implementation',
    date: '2026-07-08',
    readTime: '7 min read',
    content: [
      {
        type: 'p',
        text: "Zoho CRM is powerful enough to run an entire sales operation, which is exactly why so many implementations go sideways — teams enable every module on day one, migrate messy data as-is, and skip training. The result is a CRM nobody trusts, so everyone quietly goes back to spreadsheets. Here is the checklist we work through on every implementation, in order.",
      },
      { type: 'h2', text: '1. Map your actual sales process first' },
      {
        type: 'p',
        text: "Before opening Zoho, write down your real pipeline stages — not the textbook version. What actually happens between 'lead comes in' and 'deal closed' at your company? Include the messy parts: the stage where deals sit for weeks, the approval nobody remembers to log. Your CRM pipeline should mirror this, not a generic template.",
      },
      { type: 'h2', text: '2. Decide what counts as a lead vs. a contact' },
      {
        type: 'p',
        text: 'Zoho CRM separates Leads, Contacts, Accounts and Deals by default. Teams that skip this decision end up with duplicate records everywhere within a month. Define the rule once — for example, "a Lead becomes a Contact only after the first qualifying call" — and build your automation around it.',
      },
      { type: 'h2', text: '3. Audit your data before migration, not after' },
      {
        type: 'ul',
        items: [
          'Remove duplicate rows in your source spreadsheet or old CRM export',
          'Standardize phone number and date formats',
          'Decide what happens to contacts with no email or phone number',
          'Tag or segment old data so you can filter it out of active reports later',
        ],
      },
      {
        type: 'note',
        label: 'Why this matters',
        text: "Cleaning data after migration means cleaning it inside a live system your team is already using — every fix risks breaking a workflow that depends on that field. It is always faster to clean the spreadsheet first.",
      },
      { type: 'h2', text: '4. Build automation around your bottlenecks, not everywhere' },
      {
        type: 'p',
        text: 'It is tempting to automate every possible step. Resist it. Start with the two or three points where deals actually get stuck — usually follow-up reminders, lead assignment, or approval routing — and automate those well. You can always add more workflows once the team trusts the basics.',
      },
      { type: 'h2', text: '5. Set field-level permissions before, not after, launch' },
      {
        type: 'p',
        text: 'Decide early who can see deal values, who can edit closed-won records, and whether junior reps should see the full pipeline or only their own deals. Retrofitting permissions after go-live is disruptive and usually surfaces as a support ticket titled "why can\'t I see my own leads."',
      },
      { type: 'h2', text: '6. Connect the tools your team already lives in' },
      {
        type: 'p',
        text: "If your team follows up over WhatsApp or calls, an activity log that lives only inside Zoho will get ignored. Integrate telephony and WhatsApp Business before launch wherever possible, so activity gets captured automatically instead of relying on manual logging.",
      },
      { type: 'h2', text: '7. Build 3-5 dashboards, not 30' },
      {
        type: 'p',
        text: 'A pipeline-by-stage view, a rep leaderboard, and a source-of-lead report cover most sales teams on day one. Add more once people are actually opening the dashboards you already built.',
      },
      { type: 'h2', text: '8. Run a pilot with a small group first' },
      {
        type: 'p',
        text: "Roll out to two or three reps for a week before the whole team. They will find the workflow gaps, confusing field labels, and missing automations faster than any amount of internal testing — and it's much easier to fix issues before 20 people depend on the system.",
      },
      { type: 'h2', text: '9. Train on scenarios, not features' },
      {
        type: 'p',
        text: '"Here\'s the Deals module" is a forgettable training session. "Here\'s exactly what you do when a lead comes in from the website" is not. Train your team on their five most common daily actions inside Zoho, in the order they\'ll actually perform them.',
      },
      { type: 'h2', text: '10. Set a 30-day review date before you launch' },
      {
        type: 'p',
        text: "Put a calendar reminder for 30 days post-launch to review what's actually being used, what's being ignored, and what workarounds people have invented. Every implementation needs a first round of adjustments — plan for it instead of being surprised by it.",
      },
      {
        type: 'quote',
        text: "A CRM that goes live in three weeks and gets adopted beats one that takes three months chasing every possible feature.",
      },
    ],
  },
  {
    slug: 'zoho-books-gst-setup-guide',
    title: 'Zoho Books GST Setup: A Practical Guide for Indian Businesses',
    excerpt:
      'GST compliance in Zoho Books is straightforward once configured correctly — the trouble is almost always in the setup, not the software. Here is what to get right from day one.',
    category: 'Finance',
    date: '2026-06-22',
    readTime: '6 min read',
    content: [
      {
        type: 'p',
        text: "Zoho Books handles GST-compliant invoicing, e-invoicing, and return-ready reports out of the box. Most of the problems businesses run into aren't with the software — they're with organization settings that were left at defaults during setup. Here's what to check.",
      },
      { type: 'h2', text: 'Get your organization profile right first' },
      {
        type: 'ul',
        items: [
          'GSTIN entered exactly as issued, including state code prefix',
          'Correct place of supply set as your primary business location',
          'Fiscal year start month matching your actual accounting calendar (usually April in India)',
          'Multiple GSTINs configured as separate branches if you operate in more than one state',
        ],
      },
      { type: 'h2', text: 'Set up your tax rates before you create a single invoice' },
      {
        type: 'p',
        text: "Zoho Books ships with standard GST rates (5%, 12%, 18%, 28%) pre-loaded, but your item-level tax mapping needs to be deliberate. Map each product or service category to the correct HSN/SAC code and tax rate once, in your item list — not invoice by invoice. Getting this wrong at the item level means every invoice using that item inherits the mistake.",
      },
      { type: 'h2', text: 'Turn on e-invoicing early if you cross the threshold' },
      {
        type: 'p',
        text: "If your turnover requires e-invoicing under the current GST rules, enable it in Zoho Books before your first invoice run, not after a customer rejects an invoice for missing an IRN. Zoho Books integrates with the government's Invoice Registration Portal (IRP) directly, but the connection needs to be authorized and tested with a sample invoice first.",
      },
      { type: 'h2', text: 'Reconcile GSTR-2A/2B inside Zoho Books, not in Excel' },
      {
        type: 'p',
        text: "Zoho Books can pull your GSTR-2A/2B data and match it against your purchase records automatically, flagging mismatches for input tax credit. Businesses that skip this and reconcile manually in spreadsheets tend to miss eligible credit simply because the matching is tedious to do by hand every month.",
      },
      { type: 'h2', text: 'Automate recurring GST-compliant invoices carefully' },
      {
        type: 'p',
        text: 'Recurring invoice profiles are useful for retainer clients or subscriptions, but double-check the tax rate on the template whenever GST rates change for your category. An automated recurring invoice will keep applying the old rate until someone updates the template.',
      },
      {
        type: 'note',
        label: 'Common mistake',
        text: "Businesses that migrate from Tally or Excel often bring over old tax codes as custom fields instead of mapping them to Zoho's native tax rates. This breaks GSTR report generation later. Map to native rates during migration, not after.",
      },
      { type: 'h2', text: 'Set approval workflows for credit notes and write-offs' },
      {
        type: 'p',
        text: 'GST credit notes need to reference the original invoice correctly to stay compliant. Set an approval step for anyone issuing a credit note so a second person reviews the GST treatment before it goes out — this catches most reporting errors before they hit your returns.',
      },
      { type: 'h2', text: 'Review your GSTR-1 and GSTR-3B summary inside Zoho Books monthly' },
      {
        type: 'p',
        text: "Don't wait until filing week to look at your GST reports. Zoho Books generates return-ready GSTR-1 and GSTR-3B summaries continuously — reviewing them monthly catches invoice errors while they're still easy to correct, instead of during a filing deadline.",
      },
    ],
  },
  {
    slug: 'zoho-one-vs-individual-apps',
    title: 'Zoho One vs. Buying Individual Apps: Which Should You Choose?',
    excerpt:
      "Zoho One bundles 45+ apps for one price per employee. That's a great deal for some businesses and a waste of budget for others — here's how to tell which one you are.",
    category: 'Strategy',
    date: '2026-06-05',
    readTime: '5 min read',
    content: [
      {
        type: 'p',
        text: "This is the question we get asked in almost every first consultation call: should you buy Zoho One, or license individual apps like Zoho CRM and Zoho Books separately? The honest answer is that it depends entirely on how many departments will actually touch Zoho.",
      },
      { type: 'h2', text: 'When individual apps make more sense' },
      {
        type: 'ul',
        items: [
          "You need one thing to work really well — usually CRM — and other departments aren't ready to move onto Zoho yet",
          'Your team is small (under 10-15 people) and one or two apps cover the whole business',
          "You want to pilot Zoho in one department before committing company-wide",
          'Budget needs to scale exactly with usage, app by app',
        ],
      },
      { type: 'h2', text: 'When Zoho One pays for itself' },
      {
        type: 'ul',
        items: [
          'You already use, or plan to use, three or more Zoho apps (CRM + Books + People is a common combination)',
          'Different departments need different apps — sales on CRM, HR on People, finance on Books, support on Desk',
          'You want single sign-on and a unified employee directory across every app',
          'You expect to add more Zoho apps as you grow, and want predictable per-employee pricing instead of re-negotiating each time',
        ],
      },
      { type: 'h2', text: 'The math that actually matters' },
      {
        type: 'p',
        text: "Zoho One is priced per employee, and it applies to your entire workforce, not just the people actively using Zoho apps — that's the detail that catches people off guard. If you have 40 employees but only 12 will ever log into Zoho, per-app licensing for those 12 people is very likely cheaper than Zoho One for all 40. Do this calculation before deciding, not after signing up.",
      },
      { type: 'h2', text: 'A middle path: start with apps, migrate to Zoho One later' },
      {
        type: 'p',
        text: "You don't have to decide once and live with it forever. A common path we recommend: implement Zoho CRM well first, prove it out with the sales team, then expand into Zoho Books and Zoho People once the CRM is genuinely being used. Move to Zoho One once you're using three or more apps company-wide — Zoho's licensing lets you make that switch without losing your existing configuration.",
      },
      {
        type: 'quote',
        text: "Buy the suite because multiple departments need it — not because it looks like more value on the pricing page.",
      },
    ],
  },
  {
    slug: 'signs-you-need-a-crm',
    title: '5 Signs Your Business Has Outgrown Spreadsheets',
    excerpt:
      "Spreadsheets are a perfectly good CRM until they aren't. Here are the signals that tell you it's time to move to a proper system before you lose a deal to a lost row.",
    category: 'CRM',
    date: '2026-05-20',
    readTime: '4 min read',
    content: [
      {
        type: 'p',
        text: "Every business starts somewhere, and for a lot of small teams that somewhere is a shared spreadsheet. It works fine — right up until it doesn't. Here are the five signs we hear most often from businesses right before they call us.",
      },
      { type: 'h2', text: "1. Nobody agrees on which spreadsheet is the real one" },
      {
        type: 'p',
        text: 'If there are multiple versions of the "master" lead sheet floating around on different laptops and WhatsApp shares, you already have a data integrity problem — you just haven\'t felt the cost of it yet.',
      },
      { type: 'h2', text: '2. Follow-ups depend on someone remembering' },
      {
        type: 'p',
        text: "A spreadsheet doesn't remind anyone to call a lead back in three days. If your team is relying on memory or a personal to-do list to follow up on deals, leads are quietly falling through — you just don't see the ones that got missed.",
      },
      { type: 'h2', text: '3. You cannot answer "how are we doing this month" without manual work' },
      {
        type: 'p',
        text: 'If getting a pipeline summary means someone spending an afternoon filtering and counting rows, you\'re spending real labor cost on reporting that a CRM dashboard gives you instantly.',
      },
      { type: 'h2', text: '4. New hires take weeks to understand "how we track leads"' },
      {
        type: 'p',
        text: "Tribal knowledge about which column means what, or which tab is current, doesn't scale. A structured CRM with defined fields and stages onboards new team members in a day instead of a month.",
      },
      { type: 'h2', text: '5. You have had a deal fall through because of a spreadsheet mistake' },
      {
        type: 'p',
        text: "A wrong copy-paste, an overwritten formula, a row deleted by accident — if this has already cost you a real deal or a real customer, that single incident usually costs more than a year of CRM licensing.",
      },
      {
        type: 'note',
        label: 'How to know you are ready',
        text: "If two or more of these sound familiar, it's usually cheaper to move to a proper CRM now than to keep absorbing the hidden cost of the ones you're missing.",
      },
    ],
  },
  {
    slug: 'migrate-excel-to-zoho-crm',
    title: 'How to Migrate from Excel to Zoho CRM Without Losing Data',
    excerpt:
      'Data migration is where most self-service Zoho setups go wrong. Here is the process we follow to move Excel data into Zoho CRM cleanly, the first time.',
    category: 'Migration',
    date: '2026-05-02',
    readTime: '6 min read',
    content: [
      {
        type: 'p',
        text: "Moving from Excel to Zoho CRM sounds like a simple import job — pick a file, map some columns, done. In practice, most of the risk isn't in the import tool, it's in the state of the spreadsheet before you even open Zoho. Here's the process that keeps migrations clean.",
      },
      { type: 'h2', text: 'Step 1: Consolidate before you clean' },
      {
        type: 'p',
        text: "If leads live across multiple spreadsheets or tabs — one per rep, one per region — merge them into a single sheet first. You cannot properly de-duplicate or standardize data that is scattered across files.",
      },
      { type: 'h2', text: 'Step 2: De-duplicate on more than just email' },
      {
        type: 'p',
        text: 'Matching only on email address misses duplicates entered with typos, or contacts who used a work and personal email at different times. Check for duplicates on name + phone number combinations too, and decide a rule for which record wins when you find one.',
      },
      { type: 'h2', text: 'Step 3: Standardize formats column by column' },
      {
        type: 'ul',
        items: [
          'Phone numbers: consistent country code format across every row',
          'Dates: one format throughout — Zoho CRM will misread ambiguous formats like 03/04/25',
          'Free-text status columns: map every variant ("won", "Won", "closed-won", "CLOSED WON") to one standard value before import',
          'Currency fields: strip symbols and commas so they import as numbers, not text',
        ],
      },
      { type: 'h2', text: 'Step 4: Decide your module mapping before importing' },
      {
        type: 'p',
        text: "Decide upfront which spreadsheet rows become Leads versus Contacts versus Deals in Zoho CRM. Importing everything as Leads and sorting it out afterward inside a live CRM is significantly more work than deciding the mapping on the spreadsheet first.",
      },
      { type: 'h2', text: 'Step 5: Do a small test import first' },
      {
        type: 'p',
        text: 'Import 20-30 rows first and check every field lands where you expect. It is much easier to fix a mapping mistake on 30 records than to discover it after importing 3,000 and needing to undo the whole batch.',
      },
      { type: 'h2', text: 'Step 6: Preserve historical notes and activity where it matters' },
      {
        type: 'p',
        text: "Excel comments, call logs kept in a notes column, or last-contacted dates carry real context. Map these into Zoho CRM's Notes or custom fields rather than discarding them — that history is often what a rep needs to pick up a stalled conversation intelligently.",
      },
      { type: 'h2', text: 'Step 7: Run the full import, then reconcile counts' },
      {
        type: 'p',
        text: 'After the full import, compare row counts and spot-check a random sample against the source spreadsheet. Confirm nothing silently failed — large imports sometimes skip rows with malformed data without an obvious error.',
      },
      {
        type: 'quote',
        text: 'The migration itself takes an afternoon. Getting the spreadsheet ready for it is the part worth doing properly.',
      },
    ],
  },
  {
    slug: 'zoho-deluge-beginners-guide',
    title: 'Zoho Deluge for Beginners: Automating Your First Workflow',
    excerpt:
      'Deluge is Zoho\'s built-in scripting language, and you do not need to be a developer to use it for real automation. Here is a beginner-friendly starting point.',
    category: 'Automation',
    date: '2026-04-18',
    readTime: '5 min read',
    content: [
      {
        type: 'p',
        text: "Deluge (Data Enriched Language for the Universal Grammar Environment) is Zoho's own scripting language, built into every app in the suite. It looks intimidating the first time you open the editor, but the syntax is deliberately close to plain English — and most businesses only ever need a handful of patterns to automate real work.",
      },
      { type: 'h2', text: 'Start with Workflow Rules, not custom functions' },
      {
        type: 'p',
        text: "Before writing any Deluge code, check whether Zoho's built-in Workflow Rules can do the job — field updates, email alerts, and task creation on a trigger often need zero scripting at all. Reach for Deluge only when the logic is too specific for the point-and-click workflow builder.",
      },
      { type: 'h2', text: 'A simple first script: auto-assign leads by region' },
      {
        type: 'p',
        text: 'A common first automation is assigning new leads to the right salesperson based on their state or city. In plain terms, the logic reads: "when a lead is created, check its state field, and set the owner based on which region that state belongs to."',
      },
      {
        type: 'note',
        label: 'What this looks like conceptually',
        text: 'if(leadState == "Odisha" || leadState == "West Bengal") { assign to Eastern Region rep } else if(leadState == "Maharashtra" || leadState == "Gujarat") { assign to Western Region rep }',
      },
      {
        type: 'p',
        text: "That's the entire pattern behind most lead-routing automations — a series of conditions checked in order, with an action at the end of each branch.",
      },
      { type: 'h2', text: 'Common beginner use cases worth learning on' },
      {
        type: 'ul',
        items: [
          'Send an internal Slack or email alert when a deal crosses a certain value',
          'Auto-populate a field based on another field (e.g. set "Priority" based on deal amount)',
          'Prevent a record from being saved unless a required field is filled in',
          'Send a WhatsApp or SMS notification via API when a deal moves to a specific stage',
        ],
      },
      { type: 'h2', text: 'Test in the sandbox before deploying live' },
      {
        type: 'p',
        text: "Every custom function should be tested against a handful of real-looking records before it runs on live data — Zoho's script editor includes a test panel for exactly this. A script with an unhandled edge case can silently fail on records it wasn't tested against.",
      },
      { type: 'h2', text: 'Know when to bring in a developer' },
      {
        type: 'p',
        text: "Simple field logic and conditional assignment are learnable in an afternoon. Multi-step approval chains, external API integrations, or anything touching financial data is worth having a Zoho developer review — a small mistake in a live automation can silently mis-file records for weeks before anyone notices.",
      },
    ],
  },
]
