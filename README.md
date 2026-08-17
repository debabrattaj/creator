# Barcode — Zoho Creator Widget

Barcode session management widget for jewellery retail, built on the
[Zoho Creator JS API](https://www.zoho.com/creator/help/widgets/) (SDK v2.0).

Voucher header (vendor, invoice number, rate master, session), live totals, and
a barcode item grid with add/edit/delete, search, sort, filter, column toggles,
CSV import/export, and label printing.

## Layout

```
plugin-manifest.json   widget registration for Creator
widget.html            markup + SDK script tag
css/styles.css         all styling
js/config.js           form/report link names, column + stat model
js/utils.js            formatting, CSV, date helpers
js/api.js              ZOHO.CREATOR.API wrapper (+ offline sample data)
js/store.js            state, derived rows, totals
js/ui.js               rendering
js/itemform.js         Add New Barcode dialog + balance panel
js/app.js              init and event wiring
build.py               regenerates the standalone index.html
```

## Balance Information

The Add New Barcode dialog shows four figures, sourced two different ways:

| Card | Source |
|---|---|
| Total Weight | `Total_Net_Weight` summed across `Purchase_Entry_Report` + `Material_Receive_Report` |
| Total Nos | `Total_Qty` summed across the same two reports |
| Weight Balance | Total Weight − net weight already barcoded in the session |
| Nos Balance | Total Nos − quantity already barcoded in the session |

Report and field names live in `reports` and `sourceFields` in `js/config.js`.
Both balances also net off the row being edited, so they preview the effect of
the current entry before it is saved. When a session ID is set, the two reports
are filtered by `Session_ID`.

## Setup

1. Edit `js/config.js` so `forms` and `reports` match your app's link names.
   The item form is expected to have these fields:

   | Field | Type |
   |---|---|
   | `Barcode` | Single Line |
   | `Item_Name` | Single Line |
   | `Category` | Dropdown |
   | `Purity` | Dropdown |
   | `Gross_Weight`, `Net_Weight` | Decimal |
   | `MRP`, `Making_Charge`, `Discount`, `Net_Amount` | Currency/Decimal |
   | `Session_ID` | Single Line |

2. Zip the repository contents (manifest at the zip root) and upload it in
   Creator under **Settings → Widgets → Create New → Upload**.

3. Drop the widget onto a page. Pass `sessionId` as a widget parameter to scope
   the grid to one session; without it, all item records load.

## Local preview

The SDK is unreachable outside Creator, so `js/api.js` falls back to in-memory
sample data and the UI shows a "Preview mode" toast. Every action works against
that sample set.

```
python3 -m http.server 8000
# open http://localhost:8000/widget.html
```

## Notes

- Records are paged through `getAllRecords` at `pageSize` (default 200) until a
  short page comes back, so sessions larger than one page load fully.
- The vendor dropdown is populated from `reports.vendor` using the `Vendor_Name`
  field; change that field name in `js/app.js` if yours differs.
- Label printing renders in a popup window — the browser must allow popups.
