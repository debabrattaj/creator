window.BC_STORE = (function () {
  const U = window.BC_UTILS;
  const C = window.BC_CONFIG;

  const state = {
    voucher: {
      voucherType: 'Purchase',
      voucherDate: U.todayISO(),
      supplier: '',
      invoiceNumber: '',
      rateMaster: 'Standard Rate',
      priceLevel: 'Retail',
      sessionId: ''
    },
    items: [],
    search: '',
    sort: { key: null, dir: 'asc' },
    filters: {},
    hiddenColumns: new Set(),
    listeners: []
  };

  const subscribe = (fn) => { state.listeners.push(fn); };
  const emit = () => state.listeners.forEach((fn) => fn(state));

  function setItems(items) { state.items = items || []; emit(); }
  function setVoucher(patch) { Object.assign(state.voucher, patch); emit(); }
  function setSearch(q) { state.search = q; emit(); }

  function toggleSort(key) {
    if (state.sort.key === key) state.sort.dir = state.sort.dir === 'asc' ? 'desc' : 'asc';
    else state.sort = { key, dir: 'asc' };
    emit();
  }

  function setFilter(key, value) {
    if (value) state.filters[key] = value;
    else delete state.filters[key];
    emit();
  }

  function toggleColumn(key) {
    if (state.hiddenColumns.has(key)) state.hiddenColumns.delete(key);
    else state.hiddenColumns.add(key);
    emit();
  }

  function reset() {
    state.search = '';
    state.sort = { key: null, dir: 'asc' };
    state.filters = {};
    state.hiddenColumns = new Set();
    emit();
  }

  function visibleColumns() {
    return C.columns.filter((c) => !state.hiddenColumns.has(c.key));
  }

  function visibleItems() {
    let rows = state.items.slice();

    const q = state.search.trim().toLowerCase();
    if (q) {
      rows = rows.filter((r) =>
        C.columns.some((c) => String(r[c.key] == null ? '' : r[c.key]).toLowerCase().includes(q))
      );
    }

    Object.keys(state.filters).forEach((key) => {
      const val = String(state.filters[key]).toLowerCase();
      rows = rows.filter((r) => String(r[key] == null ? '' : r[key]).toLowerCase() === val);
    });

    if (state.sort.key) {
      const col = C.columns.find((c) => c.key === state.sort.key);
      const numeric = col && ['weight', 'money'].includes(col.type);
      const dir = state.sort.dir === 'asc' ? 1 : -1;
      rows.sort((a, b) => {
        const x = a[state.sort.key], y = b[state.sort.key];
        if (numeric) return (U.num(x) - U.num(y)) * dir;
        return String(x == null ? '' : x).localeCompare(String(y == null ? '' : y)) * dir;
      });
    }

    return rows;
  }

  function totals() {
    const rows = visibleItems();
    const sum = (key) => rows.reduce((acc, r) => acc + U.num(r[key]), 0);
    const totalAmount = sum('MRP') + sum('Making_Charge');
    const discount = sum('Discount');
    return {
      count: rows.length,
      grossWeight: sum('Gross_Weight'),
      netWeight: sum('Net_Weight'),
      totalAmount: totalAmount,
      discount: discount,
      netAmount: totalAmount - discount
    };
  }

  return {
    state, subscribe, setItems, setVoucher, setSearch, toggleSort,
    setFilter, toggleColumn, reset, visibleItems, visibleColumns, totals
  };
})();
