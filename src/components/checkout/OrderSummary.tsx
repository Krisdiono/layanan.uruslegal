import type { Layanan } from "@/lib/solusi";

type Props = {
  svc: Partial<Layanan>; // cukup sebagian field (price, title, slug)
};

export default function OrderSummary({ svc }: Props) {
  const raw =
    typeof svc.price === "string" ? Number(svc.price) :
    typeof svc.price === "number" ? svc.price : 0;

  const price = Number.isFinite(raw) ? raw : 0;
  const fee   = Math.round(price * 0.03); // simulasi biaya gateway 3%
  const total = price + fee;

  return (
    <div className="border rounded-2xl p-4">
      <h3 className="font-medium mb-2">Ringkasan Order</h3>
      <div className="text-sm space-y-1">
        <div className="flex justify-between">
          <span>Harga</span>
          <span>Rp {price.toLocaleString("id-ID")}</span>
        </div>
        <div className="flex justify-between">
          <span>Biaya gateway (3%)</span>
          <span>Rp {fee.toLocaleString("id-ID")}</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>Rp {total.toLocaleString("id-ID")}</span>
        </div>
      </div>
    </div>
  );
}
