/*
 * Zoho Creator JS API wrapper.
 * Falls back to in-memory sample data when the widget is opened outside Creator,
 * so the UI can be developed and previewed locally.
 */
window.BC_API = (function () {
  const C = window.BC_CONFIG;
  const U = window.BC_UTILS;

  const hasSDK = () => typeof ZOHO !== 'undefined' && ZOHO.CREATOR && ZOHO.CREATOR.API;

  let ready = null;
  let offline = false;

  function init() {
    if (ready) return ready;
    ready = new Promise((resolve) => {
      if (!hasSDK()) { offline = true; return resolve({ offline: true }); }
      ZOHO.CREATOR.init()
        .then((params) => resolve({ offline: false, params: params || {} }))
        .catch(() => { offline = true; resolve({ offline: true }); });
    });
    return ready;
  }

  const isOffline = () => offline;

  /* ---------------- sample data (offline preview only) ---------------- */
  let mock = [
    { ID: '1', Barcode: 'BC-100452', Item_Name: 'Gold Bangles 22K', Category: 'Bangles',  Purity: '22K', Gross_Weight: 45.3, Net_Weight: 45.3, MRP: 350000, Making_Charge: 0, Discount: 0, Net_Amount: 350000 },
    { ID: '2', Barcode: 'BC-100453', Item_Name: 'Diamond Ring 18K', Category: 'Ring',     Purity: '18K', Gross_Weight: 5.2,  Net_Weight: 4.8,  MRP: 85000,  Making_Charge: 0, Discount: 0, Net_Amount: 85000 },
    { ID: '3', Barcode: 'BC-100454', Item_Name: 'Gold Necklace 22K', Category: 'Necklace', Purity: '22K', Gross_Weight: 68.5, Net_Weight: 66.2, MRP: 520000, Making_Charge: 0, Discount: 0, Net_Amount: 520000 },
    { ID: '4', Barcode: 'BC-100455', Item_Name: 'Silver Chain',     Category: 'Chain',    Purity: '925 Silver', Gross_Weight: 32.1, Net_Weight: 32.1, MRP: 15500, Making_Charge: 0, Discount: 0, Net_Amount: 15500 },
    { ID: '5', Barcode: 'BC-100456', Item_Name: 'Gold Earrings 22K', Category: 'Earrings', Purity: '22K', Gross_Weight: 22.3, Net_Weight: 19.3, MRP: 110000, Making_Charge: 0, Discount: 0, Net_Amount: 110000 }
  ];

  const clone = (o) => JSON.parse(JSON.stringify(o));
  const delay = (v) => new Promise((r) => setTimeout(() => r(v), 120));

  /* ---------------- records ---------------- */

  function getItems(sessionId) {
    if (offline) return delay(clone(mock));
    const criteria = sessionId ? `Session_ID == "${sessionId}"` : null;
    return fetchAll(C.reports.barcodeItem, criteria);
  }

  function fetchAll(reportName, criteria) {
    const out = [];
    const page = (n) => {
      const cfg = { reportName, page: n, pageSize: C.pageSize };
      if (criteria) cfg.criteria = criteria;
      return ZOHO.CREATOR.API.getAllRecords(cfg).then((res) => {
        const data = (res && res.data) || [];
        out.push.apply(out, data);
        return data.length === C.pageSize ? page(n + 1) : out;
      });
    };
    return page(1).catch((err) => {
      /* Creator returns code 3100 / empty result when no rows match */
      if (err && (err.code === 3100 || err.code === 9280)) return [];
      throw err;
    });
  }

  function addItem(data) {
    if (offline) {
      const rec = Object.assign({ ID: String(Date.now()) }, data);
      mock.push(rec);
      return delay(rec);
    }
    return ZOHO.CREATOR.API.addRecord({
      formName: C.forms.barcodeItem,
      data: { data: data }
    }).then((res) => Object.assign({ ID: res && res.data && res.data.ID }, data));
  }

  function updateItem(id, data) {
    if (offline) {
      const rec = mock.find((r) => r.ID === id);
      if (rec) Object.assign(rec, data);
      return delay(rec);
    }
    return ZOHO.CREATOR.API.updateRecord({
      reportName: C.reports.barcodeItem,
      id: id,
      data: { data: data }
    }).then(() => Object.assign({ ID: id }, data));
  }

  function deleteItem(id) {
    if (offline) {
      mock = mock.filter((r) => r.ID !== id);
      return delay(true);
    }
    return ZOHO.CREATOR.API.deleteRecord({
      reportName: C.reports.barcodeItem,
      criteria: `ID == ${id}`
    }).then(() => true);
  }

  function getLookup(reportName, labelField) {
    if (offline) {
      return delay([
        { ID: 'v1', label: 'Shree Gold Traders' },
        { ID: 'v2', label: 'Kalyan Bullion' },
        { ID: 'v3', label: 'Rajesh Jewels Pvt Ltd' }
      ]);
    }
    return fetchAll(reportName, null)
      .then((rows) => rows.map((r) => ({ ID: r.ID, label: r[labelField] || r.Name || r.ID })))
      .catch(() => []);
  }

  /* ---------------- source totals ----------------
   * Total Nos  = sum of Total_Qty        across Purchase Entry + Material Receive
   * Total Weight = sum of Total_Net_Weight across the same two reports
   */
  function getSourceTotals(sessionId) {
    if (offline) return delay({ totalNos: 12, totalWeight: 486.25 });

    const criteria = sessionId ? `Session_ID == "${sessionId}"` : null;
    const f = C.sourceFields;

    return Promise.all([
      fetchAll(C.reports.purchaseEntry, criteria).catch(() => []),
      fetchAll(C.reports.materialReceive, criteria).catch(() => [])
    ]).then((sets) => {
      const rows = sets[0].concat(sets[1]);
      return {
        totalNos: rows.reduce((s, r) => s + U.num(r[f.qty]), 0),
        totalWeight: rows.reduce((s, r) => s + U.num(r[f.netWeight]), 0)
      };
    });
  }

  function nextBarcode() {
    if (offline) {
      const max = mock.reduce((m, r) => Math.max(m, U.num(String(r.Barcode).replace(/\D/g, ''))), 100000);
      return delay('BC-' + (max + 1));
    }
    return ZOHO.CREATOR.API.getAllRecords({
      reportName: C.reports.barcodeItem,
      pageSize: 1,
      page: 1
    }).then((res) => {
      const rows = (res && res.data) || [];
      const last = rows.length ? U.num(String(rows[0].Barcode).replace(/\D/g, '')) : 100000;
      return 'BC-' + (last + 1);
    }).catch(() => 'BC-' + Date.now().toString().slice(-6));
  }

  return { init, isOffline, getItems, addItem, updateItem, deleteItem, getLookup, getSourceTotals, nextBarcode };
})();
