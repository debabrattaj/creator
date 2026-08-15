(function () {
  const U = window.BC_UTILS;
  const C = window.BC_CONFIG;
  const S = window.BC_STORE;
  const UI = window.BC_UI;
  const API = window.BC_API;
  const $ = UI.$;

  /* ---------------- data ---------------- */

  function loadItems() {
    UI.loading(true);
    return API.getItems(S.state.voucher.sessionId)
      .then((rows) => S.setItems(rows))
      .catch((err) => UI.toast('Could not load items: ' + (err.message || err), 'error'))
      .then(() => UI.loading(false));
  }

  function loadVendors() {
    return API.getLookup(C.reports.vendor, 'Vendor_Name').then((list) => {
      const sel = $('#vendor');
      list.forEach((s) => {
        const o = document.createElement('option');
        o.value = s.ID;
        o.textContent = s.label;
        sel.appendChild(o);
      });
    });
  }

  function readForm(form) {
    const data = {};
    new FormData(form).forEach((v, k) => { data[k] = v; });
    ['Gross_Weight', 'Net_Weight', 'MRP', 'Making_Charge', 'Discount'].forEach((k) => {
      data[k] = U.num(data[k]);
    });
    data.Net_Amount = data.MRP + data.Making_Charge - data.Discount;
    if (S.state.voucher.sessionId) data.Session_ID = S.state.voucher.sessionId;
    return data;
  }

  /* ---------------- actions ---------------- */

  function openItemModal(row) {
    const editing = !!row;
    UI.openModal(
      editing ? 'Edit Barcode Item' : 'Add Barcode Item',
      UI.itemFormHTML(row),
      `<button class="bc-btn" data-close="1">Cancel</button>
       <button class="bc-btn bc-btn-primary" id="saveItem">${editing ? 'Save Changes' : 'Add Item'}</button>`
    );

    if (!editing) {
      API.nextBarcode().then((code) => {
        const input = document.querySelector('#itemForm [name="Barcode"]');
        if (input && !input.value) input.value = code;
      });
    }

    $('#saveItem').addEventListener('click', () => {
      const form = $('#itemForm');
      if (!form.reportValidity()) return;
      const data = readForm(form);
      UI.loading(true);
      const req = editing ? API.updateItem(row.ID, data) : API.addItem(data);
      req.then(() => {
        UI.closeModal();
        UI.toast(editing ? 'Item updated' : 'Item added', 'success');
        return loadItems();
      }).catch((err) => {
        UI.toast('Save failed: ' + (err.message || err), 'error');
      }).then(() => UI.loading(false));
    });
  }

  function confirmDelete(row) {
    UI.openModal(
      'Delete Item',
      `<p class="bc-confirm">Delete <strong>${U.esc(row.Barcode)}</strong> — ${U.esc(row.Item_Name)}? This cannot be undone.</p>`,
      `<button class="bc-btn" data-close="1">Cancel</button>
       <button class="bc-btn bc-btn-danger" id="confirmDelete">Delete</button>`
    );
    $('#confirmDelete').addEventListener('click', () => {
      UI.loading(true);
      API.deleteItem(row.ID).then(() => {
        UI.closeModal();
        UI.toast('Item deleted', 'success');
        return loadItems();
      }).catch((err) => UI.toast('Delete failed: ' + (err.message || err), 'error'))
        .then(() => UI.loading(false));
    });
  }

  function openFilterModal() {
    const f = S.state.filters;
    const opts = (list, sel) =>
      ['<option value="">All</option>'].concat(
        list.map((o) => `<option${o === sel ? ' selected' : ''}>${U.esc(o)}</option>`)
      ).join('');
    UI.openModal('Filter Items',
      `<form id="filterForm" class="bc-form-grid">
        <label class="bc-field"><span>Category</span><select name="Category">${opts(C.categories, f.Category)}</select></label>
        <label class="bc-field"><span>Purity</span><select name="Purity">${opts(C.purities, f.Purity)}</select></label>
      </form>`,
      `<button class="bc-btn" id="clearFilters">Clear</button>
       <button class="bc-btn bc-btn-primary" id="applyFilters">Apply</button>`
    );
    $('#applyFilters').addEventListener('click', () => {
      new FormData($('#filterForm')).forEach((v, k) => S.setFilter(k, v));
      UI.closeModal();
    });
    $('#clearFilters').addEventListener('click', () => {
      Object.keys(S.state.filters).forEach((k) => S.setFilter(k, ''));
      UI.closeModal();
    });
  }

  function openSortModal() {
    const sortable = C.columns.filter((c) => c.sortable !== false);
    UI.openModal('Sort Items',
      `<form id="sortForm" class="bc-form-grid">
        <label class="bc-field"><span>Sort by</span>
          <select name="key">${sortable.map((c) =>
            `<option value="${c.key}"${S.state.sort.key === c.key ? ' selected' : ''}>${U.esc(c.label)}</option>`
          ).join('')}</select></label>
        <label class="bc-field"><span>Direction</span>
          <select name="dir">
            <option value="asc"${S.state.sort.dir === 'asc' ? ' selected' : ''}>Ascending</option>
            <option value="desc"${S.state.sort.dir === 'desc' ? ' selected' : ''}>Descending</option>
          </select></label>
      </form>`,
      `<button class="bc-btn" data-close="1">Cancel</button>
       <button class="bc-btn bc-btn-primary" id="applySort">Apply</button>`
    );
    $('#applySort').addEventListener('click', () => {
      const fd = new FormData($('#sortForm'));
      S.state.sort = { key: fd.get('key'), dir: fd.get('dir') };
      UI.closeModal();
      UI.renderAll();
    });
  }

  function openColumnsModal() {
    UI.openModal('Toggle Columns',
      `<div class="bc-checklist">${C.columns.map((c) => `
        <label class="bc-check">
          <input type="checkbox" value="${c.key}" ${S.state.hiddenColumns.has(c.key) ? '' : 'checked'} />
          <span>${U.esc(c.label)}</span>
        </label>`).join('')}</div>`,
      `<button class="bc-btn bc-btn-primary" data-close="1">Done</button>`
    );
    document.querySelectorAll('.bc-checklist input').forEach((cb) => {
      cb.addEventListener('change', () => S.toggleColumn(cb.value));
    });
  }

  function exportCSV() {
    const cols = S.visibleColumns().filter((c) => c.type !== 'action');
    const csv = U.toCSV(S.visibleItems(), cols);
    U.download(`barcodes-${S.state.voucher.sessionId || 'session'}.csv`, csv, 'text/csv;charset=utf-8');
    UI.toast('Exported ' + S.visibleItems().length + ' items', 'success');
  }

  function importCSV() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.csv,text/csv';
    input.addEventListener('change', () => {
      const file = input.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const rows = U.parseCSV(String(reader.result));
        if (rows.length < 2) return UI.toast('CSV has no data rows', 'error');
        const header = rows[0].map((h) => h.trim());
        const colByLabel = {};
        C.columns.forEach((c) => { colByLabel[c.label.toUpperCase()] = c.key; });

        const records = rows.slice(1).map((r) => {
          const rec = {};
          header.forEach((h, i) => {
            const key = colByLabel[h.toUpperCase()] || h;
            rec[key] = r[i];
          });
          ['Gross_Weight', 'Net_Weight', 'MRP', 'Making_Charge', 'Discount'].forEach((k) => {
            rec[k] = U.num(rec[k]);
          });
          rec.Net_Amount = rec.MRP + rec.Making_Charge - rec.Discount;
          if (S.state.voucher.sessionId) rec.Session_ID = S.state.voucher.sessionId;
          delete rec.no;
          delete rec.action;
          return rec;
        });

        UI.loading(true);
        records.reduce((chain, rec) => chain.then(() => API.addItem(rec)), Promise.resolve())
          .then(() => {
            UI.toast('Imported ' + records.length + ' items', 'success');
            return loadItems();
          })
          .catch((err) => UI.toast('Import failed: ' + (err.message || err), 'error'))
          .then(() => UI.loading(false));
      };
      reader.readAsText(file);
    });
    input.click();
  }

  function printLabels() {
    const rows = S.visibleItems();
    if (!rows.length) return UI.toast('Nothing to print', 'error');
    const labels = rows.map((r) => `
      <div class="label">
        <div class="code">${U.esc(r.Barcode)}</div>
        <div class="bars">${barsSVG(r.Barcode)}</div>
        <div class="name">${U.esc(r.Item_Name)}</div>
        <div class="meta">${U.esc(r.Purity)} &middot; ${U.fmt.weight(r.Net_Weight)}g</div>
        <div class="price">&#8377;${U.fmt.money(r.MRP)}</div>
      </div>`).join('');

    const win = window.open('', '_blank');
    if (!win) return UI.toast('Popup blocked — allow popups to print', 'error');
    win.document.write(`<!DOCTYPE html><html><head><title>Barcode Labels</title><style>
      body{font-family:system-ui,sans-serif;margin:12px;display:flex;flex-wrap:wrap;gap:8px}
      .label{width:180px;border:1px solid #d5d9e0;border-radius:6px;padding:8px;text-align:center;page-break-inside:avoid}
      .code{font:600 11px/1.2 monospace;letter-spacing:.5px}
      .bars{margin:4px 0}
      .name{font-size:11px;font-weight:600;margin-top:2px}
      .meta{font-size:10px;color:#6b7280}
      .price{font-size:12px;font-weight:700;margin-top:2px}
      @media print{body{margin:0}}
    </style></head><body>${labels}</body></html>`);
    win.document.close();
    win.focus();
    setTimeout(() => win.print(), 300);
  }

  /* Code-39 style visual bars derived from the barcode string. */
  function barsSVG(code) {
    const text = String(code || '');
    let x = 0;
    let bars = '';
    for (let i = 0; i < text.length; i++) {
      const c = text.charCodeAt(i);
      for (let b = 0; b < 4; b++) {
        const w = ((c >> b) & 1) ? 2 : 1;
        if (b % 2 === 0) bars += `<rect x="${x}" y="0" width="${w}" height="40" fill="#111"/>`;
        x += w + 1;
      }
    }
    return `<svg width="100%" height="40" viewBox="0 0 ${Math.max(x, 1)} 40" preserveAspectRatio="none">${bars}</svg>`;
  }

  /* ---------------- events ---------------- */

  function bind() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action]');
      if (btn) {
        const action = btn.dataset.action;
        if (action === 'add') openItemModal(null);
        else if (action === 'refresh') loadItems();
        else if (action === 'reset') { S.reset(); $('#searchInput').value = ''; }
        else if (action === 'export') exportCSV();
        else if (action === 'import') importCSV();
        else if (action === 'print') printLabels();
        else if (action === 'filter') openFilterModal();
        else if (action === 'sort') openSortModal();
        else if (action === 'columns') openColumnsModal();
        return;
      }

      const rowBtn = e.target.closest('[data-row-action]');
      if (rowBtn) {
        e.preventDefault();
        const row = S.state.items.find((r) => String(r.ID) === rowBtn.dataset.id);
        if (!row) return;
        if (rowBtn.dataset.rowAction === 'edit') openItemModal(row);
        else confirmDelete(row);
        return;
      }

      const th = e.target.closest('th[data-sort-key]');
      if (th) S.toggleSort(th.dataset.sortKey);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') UI.closeModal();
    });

    $('#searchInput').addEventListener('input', U.debounce((e) => S.setSearch(e.target.value), 200));

    ['vendor', 'invoiceNumber', 'rateMaster'].forEach((id) => {
      $('#' + id).addEventListener('change', (e) => S.setVoucher({ [id]: e.target.value }));
    });
  }

  /* ---------------- init ---------------- */

  API.init().then((ctx) => {
    const params = (ctx && ctx.params) || {};
    if (params.sessionId) S.setVoucher({ sessionId: params.sessionId });
    if (API.isOffline()) UI.toast('Preview mode — showing sample data', 'info');

    S.subscribe(UI.renderAll);
    bind();
    UI.renderVoucher();
    UI.renderAll();
    loadVendors();
    loadItems();
  });
})();
