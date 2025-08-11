// lib/price.ts
export function effectivePrice(svc: { price: number; fee_discount?: number; discount_percent?: number }) {
  const base = svc.price || 0;
  // dukung dua pola: nominal atau persen
  const byNominal = Math.max(0, base - (svc.fee_discount ?? 0));
  const byPercent = typeof svc.discount_percent === "number"
    ? Math.max(0, base - Math.round(base * (svc.discount_percent / 100)))
    : byNominal;
  return { base, final: byPercent, discountAmount: base - byPercent };
}
export const idr = (n: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
