import os
import re
import smtplib
from email.mime.text import MIMEText
from email.utils import formataddr

from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

app = Flask(__name__)

# Only the live site (and its www variant) may call this endpoint.
ALLOWED_ORIGINS = [
    "https://zohogeeks.in",
    "https://www.zohogeeks.in",
]
CORS(app, origins=ALLOWED_ORIGINS)

limiter = Limiter(get_remote_address, app=app, default_limits=[])

GMAIL_ADDRESS = os.environ.get("GMAIL_ADDRESS")
GMAIL_APP_PASSWORD = os.environ.get("GMAIL_APP_PASSWORD")
LEAD_RECIPIENT = os.environ.get("LEAD_RECIPIENT", "debabrattaj@gmail.com")

EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")
REQUIRED_FIELDS = ["name", "email", "service"]


def clean(value, fallback="Not provided"):
    text = str(value or "").strip()
    return text if text else fallback


@app.post("/send-lead")
@limiter.limit("5 per minute")
def send_lead():
    data = request.get_json(silent=True) or {}

    # Honeypot: a hidden field real visitors never fill in. If it has a
    # value, this was almost certainly a bot — pretend success and drop it.
    if data.get("website"):
        return jsonify({"ok": True}), 200

    missing = [f for f in REQUIRED_FIELDS if not str(data.get(f, "")).strip()]
    if missing:
        return jsonify({"ok": False, "error": f"Missing fields: {', '.join(missing)}"}), 400

    email = str(data["email"]).strip()
    if not EMAIL_RE.match(email):
        return jsonify({"ok": False, "error": "Invalid email address"}), 400

    if not GMAIL_ADDRESS or not GMAIL_APP_PASSWORD:
        app.logger.error("GMAIL_ADDRESS / GMAIL_APP_PASSWORD env vars are not set")
        return jsonify({"ok": False, "error": "Server email is not configured"}), 500

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
    msg["From"] = formataddr(("ZohoGeeks Website", GMAIL_ADDRESS))
    msg["To"] = LEAD_RECIPIENT
    msg["Reply-To"] = email
    # High-importance headers: honored by Outlook, Apple Mail, Thunderbird.
    # Gmail's own web UI does not render a priority flag for any sender,
    # regardless of these headers -- that's an Outlook/Exchange-specific
    # UI convention, not something the sending side can force.
    msg["X-Priority"] = "1"
    msg["X-MSMail-Priority"] = "High"
    msg["Importance"] = "High"

    try:
        with smtplib.SMTP("smtp.gmail.com", 587, timeout=10) as server:
            server.starttls()
            server.login(GMAIL_ADDRESS, GMAIL_APP_PASSWORD)
            server.send_message(msg)
    except Exception as exc:
        app.logger.error("Failed to send lead email: %s", exc)
        return jsonify({"ok": False, "error": "Failed to send email"}), 502

    return jsonify({"ok": True}), 200


@app.get("/health")
def health():
    return jsonify({"ok": True})


if __name__ == "__main__":
    app.run(debug=True)
