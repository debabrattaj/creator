# Lead notification API (CGI)

A single Python script with one job: receive contact-form submissions
from zohogeeks.in and email them to info@zohogeeks.in — sent through
that same mailbox's own SMTP, no external email service involved.
Pure standard library — no `pip install`, no virtualenv, no framework.
This is separate from the static site in `dist/`; it's a small
executable file dropped into your host's `cgi-bin` directory.

## 1. Confirm the info@zohogeeks.in mailbox and its password

In cPanel, go to **Email Accounts**. If `info@zohogeeks.in` is already
listed there, that's the mailbox this script will send through and
deliver to. You'll need its password:

- If you already know it, use that.
- If not, click **Manage** next to the account → you can set a new
  password there (this changes the mailbox's actual login password,
  same one you'd use to check webmail).

If `info@zohogeeks.in` doesn't exist yet in Email Accounts, create it
there first.

## 2. Get the exact SMTP settings for this account

Still in cPanel's **Email Accounts**, click **Connect Devices** (or
**Set Up Mail Client**, naming varies by host) next to
`info@zohogeeks.in`. It shows the *exact* outgoing mail server
settings for your specific hosting account — these do vary by
provider, so don't skip this step. You're looking for:

- **Outgoing server (SMTP) hostname** — often `mail.zohogeeks.in`,
  but some hosts show something like `server123.hostingprovider.com`
  instead. The script defaults to `mail.zohogeeks.in`; only change
  `SMTP_HOST` (step 4) if yours is different.
- **Port + encryption** — usually either:
  - Port `587` with STARTTLS (the script's default), or
  - Port `465` with SSL/TLS (needs `SMTP_USE_SSL=true`, step 4)

## 3. Upload the script

Upload `send-lead.py` to `public_html/cgi-bin/` (most cPanel accounts
already have this directory with CGI execution enabled). If yours
doesn't have one, create it, and if requests to it 403, you may need
to enable `Options +ExecCGI` for it — ask your host or check cPanel's
"Cgi/Perl/Python Scripts" setting.

**Upload as plain text / binary mode, not "auto-detect"** — some FTP
clients convert line endings on upload, which breaks the shebang line
(the very first line of the script) and it silently fails to run.

## 3b. Make it executable

Via cPanel File Manager: right-click the file → Permissions → `755`
(or check all three "Execute" boxes).

Via terminal/SSH if you have it:
```bash
chmod 755 public_html/cgi-bin/send-lead.py
```

## 4. Set environment variables

CGI scripts inherit environment variables from the web server process,
not a `.env` file. In cPanel, this usually means one of:

- **cPanel → Environment Variables** (if your host exposes this for
  CGI scripts specifically), or
- A wrapper: create `public_html/cgi-bin/send-lead.sh` that exports
  the variables and then execs the Python script, pointing your host
  at the `.sh` file instead — ask your host's support which pattern
  they support, since this varies more by provider for plain CGI than
  it does for framework-managed apps.

Set:

| Variable | Value |
|---|---|
| `SMTP_USERNAME` | `info@zohogeeks.in` |
| `SMTP_PASSWORD` | that mailbox's password, from step 1 |
| `SMTP_HOST` | only if step 2 showed something other than `mail.zohogeeks.in` |
| `SMTP_PORT` | only if step 2 showed `465` instead of `587` |
| `SMTP_USE_SSL` | set to `true` only if you're using port 465 |
| `LEAD_RECIPIENT` | `info@zohogeeks.in` (optional — already the default) |

**Never hardcode these into `send-lead.py` directly** — if your host
genuinely gives you no way to set environment variables for CGI
scripts, tell me and I'll adjust the script to read from a config file
instead (kept outside `public_html` so it isn't web-accessible), which
works everywhere but is a slightly weaker setup than real env vars.

## 5. Verify it's working

Visit `https://zohogeeks.in/cgi-bin/send-lead.py` directly in a
browser — it should return `{"ok": true, "service": "zohogeeks-lead-api"}`.
If you get a 500 error, check your host's error log (cPanel → Errors,
or `public_html/cgi-bin/error_log` if one gets created) — it'll show
the actual Python traceback, usually an SMTP authentication failure if
the username/password/host don't match what cPanel expects.

Once the health check works, submit the real contact form on the site
and check the `info@zohogeeks.in` inbox. The site already expects this
exact URL by default (`LEAD_API_ENDPOINT` in `src/data/content.js`) —
no frontend changes needed.

## Notes

- Rate-limited to 5 submissions per minute per visitor IP (tracked via
  a small file in `/tmp`, since each CGI request is a fresh process
  with no shared memory) — basic abuse protection since this endpoint
  is publicly reachable.
- Includes a honeypot field (`website`) that real visitors never fill
  in; submissions with it set are silently dropped.
- Same-origin by design (the site calls `/cgi-bin/...` on its own
  domain), so no CORS headers are needed. If this ever moves to a
  different subdomain, tell me — the site's Content-Security-Policy
  `connect-src` would need updating, or the browser will silently
  block the form submission.
- Sending and receiving both go through `info@zohogeeks.in` by
  default. If you'd rather send from a different mailbox (e.g. a
  dedicated `noreply@zohogeeks.in`) while still delivering to
  `info@zohogeeks.in`, set `SMTP_USERNAME` to that other address and
  leave `LEAD_RECIPIENT` as is.
