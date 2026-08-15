window.BC_UTILS = (function () {
  const num = (v) => {
    const n = parseFloat(String(v == null ? '' : v).replace(/[^0-9.\-]/g, ''));
    return isNaN(n) ? 0 : n;
  };

  const fmt = {
    int: (v) => String(Math.round(num(v))),
    weight: (v) => num(v).toFixed(3),
    money: (v) => num(v).toLocaleString('en-US', { maximumFractionDigits: 0 }),
    money2: (v) => num(v).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  };

  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));

  const download = (filename, content, mime) => {
    const blob = new Blob([content], { type: mime || 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const toCSV = (rows, columns) => {
    const cell = (v) => `"${String(v == null ? '' : v).replace(/"/g, '""')}"`;
    const head = columns.map((c) => cell(c.label)).join(',');
    const body = rows.map((r, i) =>
      columns.map((c) => cell(c.key === 'no' ? i + 1 : r[c.key])).join(',')
    );
    return [head].concat(body).join('\n');
  };

  const parseCSV = (text) => {
    const rows = [];
    let row = [], field = '', quoted = false;
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (quoted) {
        if (ch === '"' && text[i + 1] === '"') { field += '"'; i++; }
        else if (ch === '"') quoted = false;
        else field += ch;
      } else if (ch === '"') quoted = true;
      else if (ch === ',') { row.push(field); field = ''; }
      else if (ch === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
      else if (ch !== '\r') field += ch;
    }
    if (field || row.length) { row.push(field); rows.push(row); }
    return rows.filter((r) => r.some((c) => c.trim() !== ''));
  };

  const debounce = (fn, ms) => {
    let t;
    return function () {
      clearTimeout(t);
      const args = arguments;
      t = setTimeout(() => fn.apply(this, args), ms);
    };
  };

  return { num, fmt, esc, download, toCSV, parseCSV, debounce };
})();
