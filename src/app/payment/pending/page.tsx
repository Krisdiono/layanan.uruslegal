"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

export const dynamic = "force-dynamic"; // hindari prerender error

function PendingInner() {
  const params = useSearchParams();
  const orderId =
    params.get("order_id") ||
    params.get("orderId") ||
    params.get("id") ||
    "";

  return (
    <div className="container p-6 space-y-3">
      <h1 className="text-2xl font-semibold">Pembayaran Menunggu</h1>
      <p className="text-slate-600">
        {orderId ? `Order ID: ${orderId}` : "Transaksi kamu sedang diproses."}
      </p>
      <p className="text-slate-500 text-sm">
        Jika kamu sudah menyelesaikan pembayaran, halaman ini akan diperbarui otomatis setelah kami menerima notifikasi.
      </p>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="container p-6">Memuat status…</div>}>
      <PendingInner />
    </Suspense>
  );
}
