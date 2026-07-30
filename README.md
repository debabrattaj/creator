# ZohoGeeks — Marketing Website

A React + Vite + Tailwind CSS marketing site for ZohoGeeks, a Zoho implementation
and consulting studio. Mobile-first, single-page layout covering services,
process, packages, FAQ and contact.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Outputs a static site to `dist/` — upload the contents of that folder to any
static host (Netlify, Vercel, cPanel, S3, etc.). Preview the production build
locally with `npm run preview`.

## Content

Business details (phone, email, address, services, packages, FAQ copy) live in
`src/data/content.js` — edit that file to update site copy without touching
component code.

Before going live, replace the placeholder trust content in
`src/data/content.js` (`GUARANTEES`, `FOUNDER_NOTE`) with real client
testimonials once available, and confirm pricing package details with the
business owner.
