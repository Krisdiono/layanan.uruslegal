// /src/components/checkout/OrderSummary.tsx
import type { Svc } from "@/types/service";

function idr(n: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
}

export default function OrderSummary({ svc }: { svc: Svc }) {
  const price = typeof svc?.price === "number" ? svc.price : 0;
  const gatewayFee = Math.round(price * 0.03);
  const subtotal = price;
  const total = subtotal + gatewayFee;

  return (
    <aside className="w-full rounded-2xl border p-5 shadow-sm bg-white">
      <h3 className="text-lg font-semibold mb-4">Ringkasan Pesanan</h3>
      <div className="space-y-2">
        <div className="flex items-start justify-between">
          <span className="text-sm text-gray-600">Layanan</span>
          <span className="text-sm font-medium text-right max-w-[60%]">{svc.title}</span>
        </div>

        {Array.isArray(svc.breakdown) && svc.breakdown.length > 0 && (
          <div className="border-t pt-3 mt-2">
            <p className="text-sm font-medium mb-2">Rincian Biaya</p>
            <ul className="space-y-1">
              {svc.breakdown.map((b, i) => (
                <li key={i} className="flex justify-between text-sm">
                  <span className="text-gray-600">{b.label}</span>
                  <span>{idr(b.amount)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex justify-between text-sm border-t pt-3 mt-2">
          <span className="text-gray-600">Subtotal</span>
          <span>{idr(subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Biaya Gateway (±3%)</span>
          <span>{idr(gatewayFee)}</span>
        </div>
        <div className="flex justify-between items-center text-base font-semibold border-t pt-3">
          <span>Total</span>
          <span>{idr(total)}</span>
        </div>
      </div>
    </aside>
  );
}
