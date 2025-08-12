import React from "react";

const E_STAMP_PRICE = 10000;
const E_SIGN_PRICE  = 5000;

export function idr(n: number) {
  return "Rp" + (n || 0).toLocaleString("id-ID");
}

export default function OrderSummary({
  price = 0,
  eStampQty = 0,
  eSignQty = 0,
}: {
  price?: number;
  eStampQty?: number;
  eSignQty?: number;
}) {
  const subtotal = price ?? 0;
  const extras   = eStampQty * E_STAMP_PRICE + eSignQty * E_SIGN_PRICE;
  const total    = subtotal + extras;

  return (
    <div className="rounded-xl border p-4 h-fit">
      <div className="font-medium mb-3">Ringkasan</div>

      <div className="flex justify-between text-sm">
        <span>Harga</span><span>{idr(subtotal)}</span>
      </div>

      <div className="flex justify-between text-slate-700">
        <span>Extras (e-Materai & e-Sign)</span><span>{idr(extras)}</span>
      </div>

      <div className="flex justify-between text-slate-500">
        <span>Biaya Pemerintah</span><span>Belum termasuk</span>
      </div>

      <hr className="my-2" />
      <div className="flex justify-between font-semibold text-lg">
        <span>Total</span><span>{idr(total)}</span>
      </div>
    </div>
  );
}
