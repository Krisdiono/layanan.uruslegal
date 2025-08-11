import type { Svc } from "@/types/service";
import OrderActions from "@/components/checkout/OrderActions";

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

      {/* ...rincian biaya seperti sebelumnya... */}

      <div className="flex justify-between items-center text-base font-semibold border-t pt-3">
        <span>Total</span>
        <span>{idr(total)}</span>
      </div>

      {/* Actions: Bayar + WhatsApp */}
      <OrderActions svc={svc} amount={total} />
    </aside>
  );
}
