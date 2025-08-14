"use client";
import { useState } from "react";

type Service = { slug: string; title: string };
export default function InlineSnap({ service, amount }: { service: Service; amount: number }) {
  const [loading, setLoading] = useState(false);
  const disabled = !amount || amount <= 0 || loading;

  async function handlePay() {
    try {
      setLoading(true);
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service, amounts: { subtotal: amount, total: amount } }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Checkout error");

      const token = data?.midtrans?.token || data?.token;
      // @ts-ignore
      if (!token || !window?.snap) throw new Error("Snap belum siap");

      // @ts-ignore
      window.snap.pay(token, {
        onSuccess: (r: any) => {
          const oid = encodeURIComponent(data?.order_id || r?.order_id || "");
          window.location.href = ;
        },
        onPending: (r: any) => {
          const oid = encodeURIComponent(data?.order_id || r?.order_id || "");
          window.location.href = ;
        },
        onError: (r: any) => {
          console.error("Midtrans error:", r);
          alert("Pembayaran gagal. Coba lagi ya.");
        },
        onClose: () => {
          /* user closed without paying — you can toast here if needed */
        },
      });
    } catch (e: any) {
      alert(e?.message || "Gagal memulai pembayaran");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button className="btn btn-primary" onClick={handlePay} disabled={disabled}>
      {loading ? "Memproses…" : "Ajukan Proses"}
    </button>
  );
}
