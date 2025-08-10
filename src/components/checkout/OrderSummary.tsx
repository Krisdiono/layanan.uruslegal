"use client";
// @ts-nocheck

export default function OrderSummary({ svc }) {
  const price = typeof svc.price === "number" ? svc.price : 0;
  const fee = Math.round(price * 0.03); // simulasi biaya gateway 3%
  const total = price + fee;

  return (
    <div className="sticky top-20 border rounded-xl p-6 shadow-sm bg-white space-y-4">
      <div>
        <p className="text-sm text-gray-500">Layanan</p>
        <p className="font-semibold">{svc.title}</p>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Harga</span>
          <span>{price > 0 ? `Rp ${price.toLocaleString("id-ID")}` : "-"}</span>
        </div>
        <div className="flex justify-between">
          <span>Biaya Layanan</span>
          <span>{price > 0 ? `Rp ${fee.toLocaleString("id-ID")}` : "-"}</span>
        </div>
        <hr />
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>{price > 0 ? `Rp ${total.toLocaleString("id-ID")}` : "-"}</span>
        </div>
      </div>

      <button
        className="w-full px-6 py-3 rounded-lg bg-emerald-600 text-white font-medium shadow hover:bg-emerald-700 transition"
        onClick={() => {
          alert("Next: create transaction → redirect ke Midtrans Snap/VT-Web");
        }}
      >
        Bayar Sekarang
      </button>

      <p className="text-xs text-gray-500">
        Dengan melanjutkan, Anda menyetujui syarat & ketentuan yang berlaku.
      </p>
    </div>
  );
}
