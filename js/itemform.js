/* "Add New Barcode" form — two-column dialog with a live Balance Information panel. */
window.BC_ITEMFORM = (function () {
  const U = window.BC_UTILS;
  const C = window.BC_CONFIG;
  const S = window.BC_STORE;

  const opts = (list, sel) => list.map((o) =>
    `<option${String(o) === String(sel) ? ' selected' : ''}>${U.esc(o)}</option>`).join('');

  const field = (name, label, value, attrs) => `
    <label class="bc-field">
      <span>${label}</span>
      <input name="${name}" value="${U.esc(value == null ? '' : value)}" ${attrs || ''} />
    </label>`;

  const select = (name, label, list, value, extra) => `
    <label class="bc-field">
      <span>${label}</span>
      <select name="${name}" ${extra || ''}>${opts(list, value)}</select>
    </label>`;

  const section = (title, bodyHTML, extraClass) => `
    <section class="bc-panel ${extraClass || ''}">
      <div class="bc-panel-title"><span class="bc-accent"></span>${title}</div>
      <div class="bc-panel-body">${bodyHTML}</div>
    </section>`;

  /* ---------- balance panel ---------- */

  const BAL_ICON = '<path d="M12 3v18M7 7l-4 7h8zM17 7l-4 7h8zM5 21h14"/>';

  function balanceCardsHTML() {
    const b = S.balances();
    const card = (label, value, unit) => `
      <div class="bc-mini">
        <div class="bc-mini-icon"><svg viewBox="0 0 24 24">${BAL_ICON}</svg></div>
        <div class="bc-mini-label">${label}</div>
        <div class="bc-mini-value">${value}${unit ? `<span class="bc-unit">${unit}</span>` : ''}</div>
      </div>`;
    return card('Total Weight', U.fmt.weight(b.totalWeight), 'gm') +
           card('Total Nos', U.fmt.int(b.totalNos), '') +
           card('Weight Balance', U.fmt.weight(b.weightBalance), 'gm') +
           card('Nos Balance', U.fmt.int(b.nosBalance), '');
  }

  /* ---------- body ---------- */

  function bodyHTML(row) {
    const r = row || {};
    const basic = `
      ${field('Date', 'Date', r.Date || new Date().toISOString().slice(0, 10), 'type="date"')}
      ${select('Supplier', 'Supplier', ['Select Supplier'].concat(C.suppliersLoaded || []), r.Supplier)}
      ${select('SM', 'SM', C.salesmen, r.SM)}
      ${field('Barcode', 'Barcode', r.Barcode, 'required')}
      ${field('Item_Name', 'Item Name', r.Item_Name, 'placeholder="Enter item name" required')}
      ${field('Vendor_Item_Code', 'Vendor Item Code', r.Vendor_Item_Code)}
      <label class="bc-field bc-field-inline">
        <span>Sub Group</span>
        <div class="bc-inline-row">
          <select name="Sub_Group">${opts(['Select Sub Group'].concat(C.subGroups), r.Sub_Group)}</select>
          <button type="button" class="bc-btn bc-btn-primary bc-btn-sm" data-form-action="new-subgroup">New</button>
        </div>
      </label>`;

    const product = `
      ${select('Purity', 'Purity', C.purities, r.Purity)}
      ${select('Purity_Unit', 'Purity Unit', C.purityUnits, r.Purity_Unit)}
      ${field('Qty', 'Qty', r.Qty == null ? 1 : r.Qty, 'type="number" min="0" step="1"')}
      ${field('Rate_gm', 'Rate / gm', r.Rate_gm, 'type="number" min="0" step="0.01"')}`;

    const weight = `
      ${field('Gross_Weight', 'Gross Weight', r.Gross_Weight, 'type="number" min="0" step="0.001"')}
      ${field('Stone_Weight', 'Stone Weight', r.Stone_Weight, 'type="number" min="0" step="0.001"')}
      ${field('Net_Weight', 'Net Weight', U.fmt.weight(r.Net_Weight), 'type="text" readonly')}
      <label class="bc-field bc-field-inline">
        <span>Size / Model</span>
        <div class="bc-inline-row">
          <input name="Size_Model" value="${U.esc(r.Size_Model || '')}" placeholder="e.g. 17" />
          <select name="Size_Unit" class="bc-unit-select">${opts(C.sizeUnits, r.Size_Unit)}</select>
        </div>
      </label>`;

    const stone = `
      ${field('Stone_Type', 'Stone Type', r.Stone_Type)}
      ${field('Stone_Pieces', 'Pieces', r.Stone_Pieces, 'type="number" min="0" step="1"')}
      ${field('Stone_Rate', 'Rate', r.Stone_Rate, 'type="number" min="0" step="0.01"')}
      ${field('Stone_Amount', 'Amount', r.Stone_Amount, 'type="number" min="0" step="0.01"')}`;

    const dmd = `
      ${field('DMD_Shape', 'Shape', r.DMD_Shape)}
      ${field('DMD_Carat', 'Carat', r.DMD_Carat, 'type="number" min="0" step="0.001"')}
      ${field('DMD_Clarity', 'Clarity', r.DMD_Clarity)}
      ${field('DMD_Rate', 'Rate / ct', r.DMD_Rate, 'type="number" min="0" step="0.01"')}`;

    const pricing = `
      ${field('MRP', 'MRP', r.MRP, 'type="number" min="0" step="0.01"')}
      ${field('Making_Charge', 'Making Charge', r.Making_Charge, 'type="number" min="0" step="0.01"')}
      ${field('Discount', 'Discount', r.Discount, 'type="number" min="0" step="0.01"')}
      ${select('Category', 'Category', C.categories, r.Category)}`;

    const upload = `
      <div class="bc-upload" id="bcUpload">
        <svg viewBox="0 0 24 24"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>
        <strong>Upload Image</strong>
        <p>Click, Drag &amp; Drop or Paste (Ctrl + V)</p>
        <span class="bc-hint">Supported: JPG &bull; PNG &bull; WEBP</span>
        <input type="file" id="bcImageInput" accept="image/jpeg,image/png,image/webp" hidden />
      </div>
      <div class="bc-upload-preview" id="bcUploadPreview" hidden>
        <img alt="Item preview" id="bcPreviewImg" />
        <button type="button" class="bc-btn bc-btn-sm" data-form-action="clear-image">Remove</button>
      </div>`;

    return `
      <div class="bc-form-layout">
        <form id="itemForm" class="bc-form-main">
          ${section('Basic Information', `<div class="bc-grid-4">${basic}</div>`)}
          ${section('Product Information', `<div class="bc-grid-4">${product}</div>`)}
          ${section('Weight Information', `<div class="bc-grid-4">${weight}</div>`)}
          ${section('Stone Details', `<div class="bc-grid-4">${stone}</div>`, 'bc-optional')}
          ${section('DMD Details', `<div class="bc-grid-4">${dmd}</div>`, 'bc-optional')}
          ${section('Pricing', `<div class="bc-grid-4">${pricing}</div>`)}
        </form>
        <aside class="bc-form-side">
          ${section('Balance Information', `<div class="bc-mini-grid" id="balanceCards">${balanceCardsHTML()}</div>`)}
          ${section('Image Upload', upload)}
        </aside>
      </div>`;
  }

  const headerHTML = (editing) => `
    <button class="bc-btn" data-form-action="barcode-list">
      <svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>Barcode List
    </button>
    <label class="bc-check"><input type="checkbox" id="toggleDMD" /><span>DMD Details</span></label>
    <label class="bc-check"><input type="checkbox" id="toggleStone" /><span>Stone Details</span></label>
    <button class="bc-btn bc-btn-primary" id="saveItem">${editing ? 'Update' : 'Save'}</button>
    <button class="bc-btn" data-form-action="reset-form">Reset</button>`;

  return { bodyHTML, headerHTML, balanceCardsHTML };
})();
