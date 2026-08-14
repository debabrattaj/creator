window.BC_UI = (function () {
  const U = window.BC_UTILS;
  const C = window.BC_CONFIG;
  const S = window.BC_STORE;

  const $ = (sel) => document.querySelector(sel);

  const ICONS = {
    hash:  '<path d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18"/>',
    scale: '<path d="M12 3v18M7 7l-4 7h8zM17 7l-4 7h8zM5 21h14"/>',
    gem:   '<path d="M6 3h12l3 6-9 12L3 9z"/>',
    rupee: '<path d="M7 4h10M7 9h10M14 4c3 0 4 5 0 5H7l7 11"/>',
    tag:   '<path d="M3 12l9-9h8v8l-9 9zM16 8h.01"/>',
    wallet:'<path d="M3 7h18v12H3zM3 7l3-4h12l3 4M16 13h.01"/>'
  };

  /* ---------------- stat cards ---------------- */
  function renderStats() {
    const t = S.totals();
    $('#statsRow').innerHTML = C.stats.map((s) => {
      const raw = t[s.key];
      const value = U.fmt[s.format](raw);
      const prefix = s.format.startsWith('money') ? '<span class="bc-unit">₹</span>' : '';
      const suffix = s.format === 'weight' ? '<span class="bc-unit">g</span>' : '';
      return `
        <div class="bc-stat bc-tone-${s.tone}">
          <div class="bc-stat-icon"><svg viewBox="0 0 24 24">${ICONS[s.icon]}</svg></div>
          <div class="bc-stat-label">${U.esc(s.label)}</div>
          <div class="bc-stat-value">${prefix}${value}${suffix}</div>
        </div>`;
    }).join('');
  }

  /* ---------------- table ---------------- */
  function cellHTML(col, row, index) {
    switch (col.type) {
      case 'index':  return String(index + 1);
      case 'action': return `
        <button class="bc-icon-btn bc-edit" data-row-action="edit" data-id="${U.esc(row.ID)}" title="Edit">
          <svg viewBox="0 0 24 24"><path d="M4 20h4l10-10-4-4L4 16zM14 6l4 4"/></svg>
        </button>
        <button class="bc-icon-btn bc-delete" data-row-action="delete" data-id="${U.esc(row.ID)}" title="Delete">
          <svg viewBox="0 0 24 24"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6"/></svg>
        </button>`;
      case 'link':   return `<a class="bc-link" href="#" data-row-action="edit" data-id="${U.esc(row.ID)}">${U.esc(row[col.key])}</a>`;
      case 'tag':    return `<span class="bc-chip">${U.esc(row[col.key])}</span>`;
      case 'weight': return `${U.fmt.weight(row[col.key])} <span class="bc-unit">g</span>`;
      case 'money':  return `<strong>₹${U.fmt.money(row[col.key])}</strong>`;
      default:       return U.esc(row[col.key]);
    }
  }

  function renderTable() {
    const cols = S.visibleColumns();
    const rows = S.visibleItems();
    const sort = S.state.sort;

    $('#tableHead').innerHTML = '<tr>' + cols.map((c) => {
      const sortable = c.sortable !== false;
      const active = sort.key === c.key ? ` bc-sorted bc-${sort.dir}` : '';
      return `<th class="bc-al-${c.align || 'left'}${active}" style="min-width:${c.width}px"
                  ${sortable ? `data-sort-key="${c.key}"` : ''}>
        <span>${U.esc(c.label)}</span>
        ${sortable ? '<svg class="bc-caret" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>' : ''}
      </th>`;
    }).join('') + '</tr>';

    $('#tableBody').innerHTML = rows.map((row, i) =>
      `<tr data-id="${U.esc(row.ID)}">` + cols.map((c) =>
        `<td class="bc-al-${c.align || 'left'}">${cellHTML(c, row, i)}</td>`
      ).join('') + '</tr>'
    ).join('');

    $('#emptyState').hidden = rows.length > 0;
    $('.bc-table-scroll').hidden = rows.length === 0;
  }

  function renderVoucher() {
    const v = S.state.voucher;
    $('#voucherType').value = v.voucherType;
    $('#voucherDate').value = v.voucherDate;
    $('#invoiceNumber').value = v.invoiceNumber;
    $('#priceLevel').value = v.priceLevel;
    $('#sessionId').value = v.sessionId;
  }

  function renderAll() {
    renderStats();
    renderTable();
  }

  /* ---------------- modal ---------------- */
  function closeModal() {
    const root = $('#modalRoot');
    root.hidden = true;
    root.innerHTML = '';
  }

  function openModal(title, bodyHTML, footerHTML) {
    const root = $('#modalRoot');
    root.innerHTML = `
      <div class="bc-modal-backdrop" data-close="1"></div>
      <div class="bc-modal" role="dialog" aria-modal="true" aria-label="${U.esc(title)}">
        <div class="bc-modal-head">
          <h2>${U.esc(title)}</h2>
          <button class="bc-icon-btn" data-close="1" aria-label="Close">
            <svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
        </div>
        <div class="bc-modal-body">${bodyHTML}</div>
        <div class="bc-modal-foot">${footerHTML || ''}</div>
      </div>`;
    root.hidden = false;
    root.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', closeModal));
    const first = root.querySelector('input,select,textarea,button');
    if (first) first.focus();
    return root.querySelector('.bc-modal');
  }

  function itemFormHTML(row) {
    const r = row || {};
    const opts = (list, sel) => list.map((o) => `<option${o === sel ? ' selected' : ''}>${U.esc(o)}</option>`).join('');
    const f = (name, label, value, type, extra) => `
      <label class="bc-field">
        <span>${label}</span>
        <input name="${name}" type="${type || 'text'}" value="${U.esc(value == null ? '' : value)}" ${extra || ''} />
      </label>`;
    return `<form id="itemForm" class="bc-form-grid">
      ${f('Barcode', 'Barcode', r.Barcode, 'text', 'required')}
      ${f('Item_Name', 'Item Name', r.Item_Name, 'text', 'required')}
      <label class="bc-field"><span>Category</span><select name="Category">${opts(C.categories, r.Category)}</select></label>
      <label class="bc-field"><span>Purity</span><select name="Purity">${opts(C.purities, r.Purity)}</select></label>
      ${f('Gross_Weight', 'Gross Weight (g)', r.Gross_Weight, 'number', 'step="0.001" min="0"')}
      ${f('Net_Weight', 'Net Weight (g)', r.Net_Weight, 'number', 'step="0.001" min="0"')}
      ${f('MRP', 'MRP (₹)', r.MRP, 'number', 'step="0.01" min="0"')}
      ${f('Making_Charge', 'Making Charge (₹)', r.Making_Charge, 'number', 'step="0.01" min="0"')}
      ${f('Discount', 'Discount (₹)', r.Discount, 'number', 'step="0.01" min="0"')}
    </form>`;
  }

  /* ---------------- toast / loader ---------------- */
  function toast(message, tone) {
    const el = document.createElement('div');
    el.className = 'bc-toast bc-toast-' + (tone || 'info');
    el.textContent = message;
    $('#toastRoot').appendChild(el);
    setTimeout(() => el.classList.add('bc-in'), 10);
    setTimeout(() => {
      el.classList.remove('bc-in');
      setTimeout(() => el.remove(), 250);
    }, 3000);
  }

  const loading = (on) => { $('#loader').hidden = !on; };

  return { renderAll, renderStats, renderTable, renderVoucher, openModal, closeModal, itemFormHTML, toast, loading, $ };
})();
