// src/lib/costs.ts

// e-Materai & e-Sign prices (IDR)
export const E_STAMP_PRICE = 10_000; // Rp10.000 / lembar
export const E_SIGN_PRICE  = 5_000;  // Rp5.000 / tanda tangan

// Optional helper to compute extras total
export function calcExtras(eStampQty = 0, eSignQty = 0) {
  return (eStampQty * E_STAMP_PRICE) + (eSignQty * E_SIGN_PRICE);
}

// Label used in UI for government fees
export const GOV_FEE_NOTE = "Sesuai kebutuhan & regulasi";
