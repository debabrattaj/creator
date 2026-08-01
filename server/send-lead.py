#!/usr/bin/env python3
"""
CGI script: receives contact-form submissions from zohogeeks.in and
emails them to info@zohogeeks.in, sent via that same cPanel mailbox's
own SMTP -- no third-party email service involved.

Deploy as: public_html/cgi-bin/send-lead.py (must be executable, see
README.md in this folder for the full setup walkthrough).

Pure standard library -- no pip install, no virtualenv needed.
"""
import fcntl
import json
import os
import re
import smtplib
import sys
import time
from email.mime.text import MIMEText
from email.utils import formataddr

SMTP_USERNAME = os.environ.get("SMTP_USERNAME", "")  # e.g. info@zohogeeks.in
SMTP_PASSWORD = os.environ.get("SMTP_PASSWORD", "")  # that mailbox's own password
SMTP_HOST = os.environ.get("SMTP_HOST", "mail.zohogeeks.in")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "587"))
# Some cPanel mail servers require implicit SSL on port 465 instead of
# STARTTLS on 587 -- check cPanel's "Connect Devices" page for the
# account to see which your host actually wants, and set both
# SMTP_PORT=465 and SMTP_USE_SSL=true together if so.
SMTP_USE_SSL = os.environ.get("SMTP_USE_SSL", "false").lower() == "true"
LEAD_RECIPIENT = os.environ.get("LEAD_RECIPIENT", "info@zohogeeks.in")

EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")
REQUIRED_FIELDS = ["name", "email", "service"]

# Same-origin only (site fetches this from https://zohogeeks.in), so no
# CORS headers are needed -- browsers don't send preflight or require
# Access-Control-* headers for same-origin requests.

RATE_LIMIT_FILE = "/tmp/zohogeeks_lead_rate.json"
RATE_LIMIT_WINDOW_SECONDS = 60
RATE_LIMIT_MAX_PER_WINDOW = 5


def clean(value, fallback="Not provided"):
    text = str(value or "").strip()
    return text if text else fallback


def respond(status, body):
    print(f"Status: {status}")
    print("Content-Type: application/json")
    print()
    print(json.dumps(body))
    sys.exit()


def check_rate_limit(ip):
    """Basic file-based rate limit. CGI spawns a fresh process per
    request, so this can't live in memory like a normal app -- a small
    JSON file in /tmp stands in for that. A file lock avoids two
    near-simultaneous requests corrupting it."""
    now = time.time()
    try:
        fh = open(RATE_LIMIT_FILE, "a+")
    except OSError:
        return True  # if /tmp isn't writable, fail open rather than block real leads

    with fh:
        fcntl.flock(fh, fcntl.LOCK_EX)
        fh.seek(0)
        try:
            data = json.load(fh)
        except (json.JSONDecodeError, ValueError):
            data = {}

        timestamps = [t for t in data.get(ip, []) if now - t < RATE_LIMIT_WINDOW_SECONDS]
        allowed = len(timestamps) < RATE_LIMIT_MAX_PER_WINDOW
        if allowed:
            timestamps.append(now)
        data[ip] = timestamps
        # keep the file small: drop IPs with nothing recent
        data = {k: v for k, v in data.items() if v}

        fh.seek(0)
        fh.truncate()
        json.dump(data, fh)

    return allowed


def send_via_smtp(msg):
    if SMTP_USE_SSL:
        with smtplib.SMTP_SSL(SMTP_HOST, SMTP_PORT, timeout=10) as server:
            server.login(SMTP_USERNAME, SMTP_PASSWORD)
            server.send_message(msg)
    else:
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT, timeout=10) as server:
            server.starttls()
            server.login(SMTP_USERNAME, SMTP_PASSWORD)
            server.send_message(msg)


def main():
    method = os.environ.get("REQUEST_METHOD", "")

    if method == "GET":
        respond("200 OK", {"ok": True, "service": "zohogeeks-lead-api"})

    if method != "POST":
        respond("405 Method Not Allowed", {"ok": False, "error": "POST only"})

    ip = os.environ.get("REMOTE_ADDR", "unknown")
    if not check_rate_limit(ip):
        respond("429 Too Many Requests", {"ok": False, "error": "Too many requests, please try again shortly"})

    try:
        length = int(os.environ.get("CONTENT_LENGTH", 0))
    except ValueError:
        length = 0

    raw = sys.stdin.read(length) if length > 0 else ""
    try:
        data = json.loads(raw) if raw else {}
    except json.JSONDecodeError:
        respond("400 Bad Request", {"ok": False, "error": "Invalid JSON"})

    # Honeypot: a hidden field real visitors never fill in.
    if data.get("website"):
        respond("200 OK", {"ok": True})

    missing = [f for f in REQUIRED_FIELDS if not str(data.get(f, "")).strip()]
    if missing:
        respond("400 Bad Request", {"ok": False, "error": f"Missing fields: {', '.join(missing)}"})

    email = str(data["email"]).strip()
    if not EMAIL_RE.match(email):
        respond("400 Bad Request", {"ok": False, "error": "Invalid email address"})

    if not SMTP_USERNAME or not SMTP_PASSWORD:
        respond("500 Internal Server Error", {"ok": False, "error": "Server email is not configured"})

    body = (
        f"Full Name: {clean(data.get('name'))}\n"
        f"Email: {clean(data.get('email'))}\n"
        f"Phone: {clean(data.get('phone'))}\n"
        f"Company: {clean(data.get('company'))}\n"
        f"Interested In: {clean(data.get('service'))}\n\n"
        f"Message:\n{clean(data.get('message'), 'No additional details provided')}\n"
    )

    msg = MIMEText(body, "plain", "utf-8")
    msg["Subject"] = "New Lead"
    msg["From"] = formataddr(("ZohoGeeks Website", SMTP_USERNAME))
    msg["To"] = LEAD_RECIPIENT
    msg["Reply-To"] = email
    # Honored by Outlook, Apple Mail, Thunderbird -- Gmail's own web UI does
    # not render a priority flag for any sender regardless of headers,
    # that's an Outlook/Exchange-specific UI convention, and it may or may
    # not render in webmail depending on which client cPanel gives you.
    msg["X-Priority"] = "1"
    msg["X-MSMail-Priority"] = "High"
    msg["Importance"] = "High"

    try:
        send_via_smtp(msg)
    except Exception:
        respond("502 Bad Gateway", {"ok": False, "error": "Failed to send email"})

    respond("200 OK", {"ok": True})


if __name__ == "__main__":
    main()
