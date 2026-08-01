# Lead notification API (PHP)

A single PHP script with one job: receive contact-form submissions
from zohogeeks.in and email them to info@zohogeeks.in. Uses PHP's
built-in `mail()`, which hands off to your host's already-configured
mail transport — no SMTP host, port, or credentials needed at all.
This is separate from the static site in `dist/`, but it's simple
enough to sit right alongside it.

## Deploy it

1. Upload `send-lead.php` to `public_html/api/send-lead.php` (create
   the `api` folder if it doesn't exist)
2. That's it — no `chmod +x`, no shebang line, no environment
   variables required. PHP files just run automatically under
   Apache's PHP handler on virtually every shared/cPanel host.

## Verify it's working

Visit `https://zohogeeks.in/api/send-lead.php` directly in a browser
— it should return `{"ok":true,"service":"zohogeeks-lead-api"}`. If
you get a 404, the file isn't where the site expects it (check the
path above). If you get a 500 or blank page, check cPanel's error log
for the actual PHP error.

Once the health check works, submit the real contact form on the site
and check the `info@zohogeeks.in` inbox. The site already expects
this exact URL by default (`LEAD_API_ENDPOINT` in
`src/data/content.js`) — no frontend changes needed.

## If mail() doesn't actually deliver

`mail()` almost always works out of the box on shared cPanel hosting,
but if messages aren't arriving (check spam too), the usual fix is
one of:

- Your host may want the **From** address to exactly match a real
  mailbox on your domain — it already defaults to
  `info@zohogeeks.in`, which should satisfy this on most hosts.
- Some hosts want an explicit envelope sender via `mail()`'s 5th
  parameter (`-f info@zohogeeks.in`) — if messages are silently not
  arriving, tell me and I'll add that.
- A few hosts disable `mail()` entirely and expect real SMTP
  instead — if so, tell me which mailbox/credentials to use and I'll
  swap this back to an SMTP-based version (we already built and
  tested one, so it's a quick change).

## Notes

- Rate-limited to 5 submissions per minute per visitor IP (tracked via
  a small file in the system temp directory) — basic abuse protection
  since this endpoint is publicly reachable.
- Includes a honeypot field (`website`) that real visitors never fill
  in; submissions with it set are silently dropped.
- Same-origin by design (the site calls `/api/...` on its own
  domain), so no CORS headers are needed. If this ever moves to a
  different subdomain, tell me — the site's Content-Security-Policy
  `connect-src` would need updating, or the browser will silently
  block the form submission.
- To send from a different address than `info@zohogeeks.in` while
  still delivering there, set the `FROM_ADDRESS` environment variable
  if your host supports setting env vars for PHP (cPanel → MultiPHP
  INI Editor, or a `.user.ini` file) — otherwise just edit the
  `$fromAddress` default directly in the script.
