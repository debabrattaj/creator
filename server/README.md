# Lead notification API (CGI)

A single Python script with one job: receive contact-form submissions
from zohogeeks.in and email them to debabrattaj@gmail.com. Pure
standard library — no `pip install`, no virtualenv, no framework.
This is separate from the static site in `dist/`; it's a small
executable file dropped into your host's `cgi-bin` directory.

## 1. Get a Gmail App Password

Gmail no longer allows plain account passwords for SMTP. You need an
App Password instead:

1. Turn on 2-Step Verification on the Gmail account you want to send
   *from* (can be a different address than debabrattaj@gmail.com —
   e.g. a dedicated `noreply.zohogeeks@gmail.com` if you'd rather not
   use a personal account for this)
2. Go to https://myaccount.google.com/apppasswords
3. Create an app password (name it something like "ZohoGeeks Website")
4. Copy the 16-character password — you'll set it as an environment
   variable in step 4 below, not paste it into any code file

## 2. Upload the script

Upload `send-lead.py` to `public_html/cgi-bin/` (most cPanel accounts
already have this directory with CGI execution enabled by default).
If yours doesn't have a `cgi-bin` folder, create one, and if requests
to it 403, you may need to enable `Options +ExecCGI` for it — ask your
host or check cPanel's "Cgi/Perl/Python Scripts" or similar setting.

**Upload as plain text / binary mode, not "auto-detect"** — some FTP
clients convert line endings on upload, which breaks the shebang line
(the very first line of the script) and the script silently fails to
run.

## 3. Make it executable

Via cPanel File Manager: right-click the file → Permissions → set to
`755` (or check all three "Execute" boxes).

Via terminal/SSH if you have it:
```bash
chmod 755 public_html/cgi-bin/send-lead.py
```

## 4. Point the shebang at your host's Python

The first line of the script is `#!/usr/bin/env python3`, which works
on most hosts. If the script 500s with no useful error, SSH in (or use
cPanel's Terminal) and run:

```bash
which python3
```

and if it prints something other than resolving cleanly through `env`
(rare, but happens on some restricted CGI setups), replace the first
line of `send-lead.py` with that exact path, e.g. `#!/usr/bin/python3`.

## 5. Set environment variables

CGI scripts inherit environment variables from the web server process,
not a `.env` file. In cPanel, this usually means one of:

- **cPanel → Environment Variables** (if your host exposes this for
  CGI, not just for "Setup Python App"), or
- A wrapper: create `public_html/cgi-bin/send-lead.sh` that exports
  the variables and then execs the Python script, and point your host
  at the `.sh` file instead — ask your host's support which pattern
  they support, since cPanel CGI environment variable handling varies
  by provider.

Either way, set:

| Variable | Value |
|---|---|
| `GMAIL_ADDRESS` | the Gmail address you created the app password for |
| `GMAIL_APP_PASSWORD` | the 16-character app password from step 1 |
| `LEAD_RECIPIENT` | `debabrattaj@gmail.com` (optional — already the default) |

**Never hardcode these into `send-lead.py` directly** — if your host
genuinely gives you no way to set environment variables for CGI
scripts, tell me and I'll adjust the script to read from a config file
instead (kept outside `public_html` so it isn't web-accessible), which
works everywhere but is a slightly weaker setup than real env vars.

## 6. Verify it's working

Visit `https://zohogeeks.in/cgi-bin/send-lead.py` directly in a
browser — it should return `{"ok": true, "service": "zohogeeks-lead-api"}`.
If you get a 500 error, check your host's error log (cPanel → Errors,
or `public_html/cgi-bin/error_log` if one gets created) — it'll show
the actual Python traceback.

Once the health check works, submit the real contact form on the site
and check the inbox. The site already expects this exact URL by
default (`LEAD_API_ENDPOINT` in `src/data/content.js`) — no further
changes needed on the frontend side unless you deploy it somewhere
else.

## Notes

- Rate-limited to 5 submissions per minute per visitor IP (tracked via
  a small file in `/tmp`, since each CGI request is a fresh process
  with no shared memory) — basic abuse protection since this endpoint
  is publicly reachable.
- Includes a honeypot field (`website`) that real visitors never fill
  in; submissions with it set are silently dropped.
- Same-origin by design (the site calls `/cgi-bin/...` on its own
  domain), so no CORS headers are needed. If you ever move this to a
  different subdomain, tell me — the site's Content-Security-Policy
  `connect-src` would need updating, or the browser will silently
  block the form submission.
- If outbound port 587 is blocked by your host (uncommon, but some
  hosts restrict it), the script also reads `SMTP_HOST` / `SMTP_PORT`
  environment variables if you need to point it at a different relay.
