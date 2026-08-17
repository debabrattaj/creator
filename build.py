#!/usr/bin/env python3
"""Inline css/ and js/ into a standalone index.html."""
import re
NAMES = ['config', 'utils', 'api', 'store', 'ui', 'itemform', 'app']
html = open('widget.html').read()
html = html.replace('<link rel="stylesheet" href="css/styles.css" />',
                    '<style>\n%s\n  </style>' % open('css/styles.css').read())
html = re.sub(r'\n *<script src="js/\w+\.js"></script>', '', html)
scripts = '<script>\n%s\n</script>' % '\n'.join(
    '/* ---------- js/%s.js ---------- */\n%s' % (n, open('js/%s.js' % n).read()) for n in NAMES)
html = html.replace('</body>', '  %s\n</body>' % scripts)
open('index.html', 'w').write(html)
print('index.html', len(html), 'bytes')
