/* Zoho Creator form/report names and column model. Adjust link names to match your app. */
window.BC_CONFIG = {
  appLinkName: 'jewellery-retail',

  forms: {
    barcodeItem: 'Barcode_Item',
    barcodeSession: 'Barcode_Session'
  },

  reports: {
    barcodeItem: 'All_Barcode_Items',
    barcodeSession: 'All_Barcode_Sessions',
    supplier: 'All_Suppliers',
    rateMaster: 'All_Rate_Masters'
  },

  pageSize: 200,

  columns: [
    { key: 'no',           label: 'NO',           type: 'index',  width: 60,  sortable: false },
    { key: 'action',       label: 'ACTION',       type: 'action', width: 90,  sortable: false },
    { key: 'Barcode',      label: 'BARCODE',      type: 'link',   width: 140 },
    { key: 'Item_Name',    label: 'ITEM NAME',    type: 'text',   width: 200 },
    { key: 'Category',     label: 'CATEGORY',     type: 'tag',    width: 130 },
    { key: 'Purity',       label: 'PURITY',       type: 'text',   width: 100 },
    { key: 'Gross_Weight', label: 'GROSS WEIGHT', type: 'weight', width: 140 },
    { key: 'Net_Weight',   label: 'NET WEIGHT',   type: 'weight', width: 140 },
    { key: 'MRP',          label: 'MRP',          type: 'money',  width: 130, align: 'right' },
    { key: 'Making_Charge',label: 'MAKING',       type: 'money',  width: 120, align: 'right' },
    { key: 'Discount',     label: 'DISCOUNT',     type: 'money',  width: 120, align: 'right' },
    { key: 'Net_Amount',   label: 'NET AMOUNT',   type: 'money',  width: 140, align: 'right' }
  ],

  stats: [
    { key: 'count',       label: 'Total Items',   icon: 'hash',    tone: 'blue',   format: 'int' },
    { key: 'grossWeight', label: 'Gross Weight',  icon: 'scale',   tone: 'violet', format: 'weight' },
    { key: 'netWeight',   label: 'Net Weight',    icon: 'gem',     tone: 'green',  format: 'weight' },
    { key: 'totalAmount', label: 'Total Amount',  icon: 'rupee',   tone: 'amber',  format: 'money' },
    { key: 'discount',    label: 'Discount',      icon: 'tag',     tone: 'rose',   format: 'money2' },
    { key: 'netAmount',   label: 'Net Amount',    icon: 'wallet',  tone: 'indigo', format: 'money' }
  ],

  categories: ['Bangles', 'Ring', 'Necklace', 'Chain', 'Earrings', 'Bracelet', 'Pendant', 'Coin'],
  purities: ['24K', '22K', '18K', '14K', '925 Silver', 'Platinum']
};
