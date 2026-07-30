# Lead notification API

A small Flask app with one job: receive contact-form submissions from
zohogeeks.in and email them to debabrattaj@gmail.com. This is separate
from the static site in `dist/` — it needs its own deployment via
cPanel's Python App feature.

## 1. Get a Gmail App Password

Gmail no longer allows plain account passwords for SMTP. You need an
App Password instead:

1. Turn on 2-Step Verification on the Gmail account you want to send
   *from* (this can be a different address than debabrattaj@gmail.com —
   e.g. a dedicated address like `noreply.zohogeeks@gmail.com` if you'd
   rather not use a personal account for this)
2. Go to https://myaccount.google.com/apppasswords
3. Create an app password (name it something like "ZohoGeeks Website")
4. Copy the 16-character password — you'll paste it into cPanel below,
   not into any code file

## 2. Set up the Python app in cPanel

1. In cPanel, open **Setup Python App**
2. Click **Create Application**
3. Python version: 3.9 or newer
4. Application root: something like `zohogeeks-api` (a folder outside
   `public_html`, cPanel creates it for you)
5. Application URL: pick a path under your domain, e.g.
   `zohogeeks.in/api` — this determines the final endpoint URL
6. Click Create

## 3. Upload the app files

Upload `app.py`, `passenger_wsgi.py`, and `requirements.txt` from this
folder into the **Application root** directory cPanel just created
(via File Manager or FTP).

## 4. Install dependencies

Back in **Setup Python App**, find your app and copy the "Enter to the
virtual environment" command it gives you — run it via cPanel's
Terminal, then:

```bash
pip install -r requirements.txt
```

## 5. Set environment variables

Still in **Setup Python App**, find the **Environment variables**
section for your app and add:

| Variable | Value |
|---|---|
| `GMAIL_ADDRESS` | the Gmail address you created the app password for |
| `GMAIL_APP_PASSWORD` | the 16-character app password from step 1 |
| `LEAD_RECIPIENT` | `debabrattaj@gmail.com` (optional — this is already the default) |

Click **Restart** on the app after saving these.

## 6. Get the final URL and update the site

Your endpoint will be something like:

```
https://zohogeeks.in/api/send-lead
```

(exact URL depends on the "Application URL" you set in step 2, with
`/send-lead` appended — the route defined in `app.py`)

Send me that URL and I'll set it as `LEAD_API_ENDPOINT` in
`src/data/content.js` and rebuild the site.

## 7. Verify it's working

Visit `https://zohogeeks.in/api/health` directly in a browser — it
should return `{"ok": true}`. If it doesn't load at all, the Python
app isn't running yet (check cPanel's app status/logs). Once that
works, submit the actual contact form on the site and check the inbox.

## Notes

- This app only accepts requests from `zohogeeks.in` and
  `www.zohogeeks.in` (CORS-restricted) and rate-limits to 5 submissions
  per minute per visitor, as basic abuse protection.
- Never commit real credentials into `app.py` or any file in this
  repo — they belong in cPanel's environment variables only.
- If `/api` is set up as a path under the same domain (recommended,
  and what the site currently expects), cPanel automatically creates
  its own `.htaccess` inside that subdirectory when you set up the
  Python App, which routes requests to Passenger before the static
  site's own `.htaccess` rules ever see them — so no changes are
  needed there. If you instead point `/api` at a separate subdomain
  (e.g. `api.zohogeeks.in`), tell me so I can add it to the site's
  Content-Security-Policy `connect-src`, or the browser will silently
  block the form submission.
