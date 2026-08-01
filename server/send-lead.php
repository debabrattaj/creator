<?php
declare(strict_types=1);

/**
 * Receives contact-form submissions from zohogeeks.in and emails them
 * to info@zohogeeks.in, using PHP's built-in mail() -- the server's
 * already-configured local mail transport, so no SMTP host, port or
 * credentials are needed at all.
 *
 * Deploy as: public_html/api/send-lead.php (just upload it -- no
 * chmod, no shebang, no cgi-bin. PHP files run automatically under
 * Apache's PHP handler).
 */

$leadRecipient = getenv('LEAD_RECIPIENT') ?: 'info@zohogeeks.in';
$ccRecipient = getenv('CC_RECIPIENT') ?: 'debabrattaj@gmail.com'; // set CC_RECIPIENT to override, or leave empty string to disable
$fromAddress = getenv('FROM_ADDRESS') ?: 'info@zohogeeks.in';
$fromName = 'ZohoGeeks Website';

$rateLimitFile = sys_get_temp_dir() . '/zohogeeks_lead_rate.json';
$rateLimitWindowSeconds = 60;
$rateLimitMaxPerWindow = 5;

function respond(int $status, array $body): void
{
    http_response_code($status);
    header('Content-Type: application/json');
    echo json_encode($body);
    exit;
}

function clean($value, string $fallback = 'Not provided'): string
{
    $text = trim((string) ($value ?? ''));
    return $text !== '' ? $text : $fallback;
}

/**
 * Basic file-based rate limit, since PHP's mail() has no built-in
 * throttling and this endpoint is publicly reachable. A file lock
 * avoids two near-simultaneous requests corrupting the counter file.
 */
function checkRateLimit(string $ip, string $file, int $window, int $max): bool
{
    $fh = @fopen($file, 'c+');
    if ($fh === false) {
        return true; // fail open if the temp dir isn't writable
    }

    flock($fh, LOCK_EX);
    $contents = stream_get_contents($fh);
    $data = json_decode($contents ?: '{}', true);
    if (!is_array($data)) {
        $data = [];
    }

    $now = time();
    $timestamps = array_values(array_filter($data[$ip] ?? [], fn ($t) => $now - $t < $window));
    $allowed = count($timestamps) < $max;
    if ($allowed) {
        $timestamps[] = $now;
    }
    $data[$ip] = $timestamps;
    $data = array_filter($data, fn ($v) => count($v) > 0); // keep the file small

    ftruncate($fh, 0);
    rewind($fh);
    fwrite($fh, json_encode($data));
    flock($fh, LOCK_UN);
    fclose($fh);

    return $allowed;
}

// Same-origin only (site fetches this from https://zohogeeks.in), so no
// CORS headers are needed -- browsers don't send preflight or require
// Access-Control-* headers for same-origin requests.

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    respond(200, ['ok' => true, 'service' => 'zohogeeks-lead-api']);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['ok' => false, 'error' => 'POST only']);
}

$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
if (!checkRateLimit($ip, $rateLimitFile, $rateLimitWindowSeconds, $rateLimitMaxPerWindow)) {
    respond(429, ['ok' => false, 'error' => 'Too many requests, please try again shortly']);
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '{}', true);
if (!is_array($data)) {
    $data = [];
}

// Honeypot: a hidden field real visitors never fill in.
if (!empty($data['website'])) {
    respond(200, ['ok' => true]);
}

$missing = [];
foreach (['name', 'email', 'service'] as $field) {
    if (trim((string) ($data[$field] ?? '')) === '') {
        $missing[] = $field;
    }
}
if ($missing) {
    respond(400, ['ok' => false, 'error' => 'Missing fields: ' . implode(', ', $missing)]);
}

$email = trim((string) $data['email']);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(400, ['ok' => false, 'error' => 'Invalid email address']);
}

$body = 'Full Name: ' . clean($data['name'] ?? null) . "\n"
    . 'Email: ' . clean($data['email'] ?? null) . "\n"
    . 'Phone: ' . clean($data['phone'] ?? null) . "\n"
    . 'Company: ' . clean($data['company'] ?? null) . "\n"
    . 'Interested In: ' . clean($data['service'] ?? null) . "\n\n"
    . "Message:\n" . clean($data['message'] ?? null, 'No additional details provided') . "\n";

// Honored by Outlook, Apple Mail, Thunderbird -- Gmail's own web UI does
// not render a priority flag for any sender regardless of headers,
// that's an Outlook/Exchange-specific UI convention.
$headers = [
    'From: ' . $fromName . ' <' . $fromAddress . '>',
    'Reply-To: ' . $email,
    'X-Priority: 1',
    'X-MSMail-Priority: High',
    'Importance: High',
    'Content-Type: text/plain; charset=UTF-8',
];
if ($ccRecipient !== '') {
    $headers[] = 'Cc: ' . $ccRecipient;
}

$sent = @mail($leadRecipient, 'New Lead', $body, implode("\r\n", $headers));

if (!$sent) {
    respond(502, ['ok' => false, 'error' => 'Failed to send email']);
}

respond(200, ['ok' => true]);
