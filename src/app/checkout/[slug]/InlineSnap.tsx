"use client";
import { useState } from "react";

export default function InlineSnap({
  service,
  amount,
}: {
  service: { slug: string; title: string };
  amount: number;
}) {
  const [loading, setLoading] = useState(false);
  async function pay() {
    if (!amount || Number.isNaN(amount)) return alert("Nominal tidak valid");
    setLoading(true);
    try {
      const r = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service,
          amounts: { subtotal: amount, total: amount },
        }),
      });
      const j = await r.json();
      if (!r.ok)
        return alert(j?.detail || j?.error || "Gagal membuat transaksi");
      const token = j?.midtrans?.token;
      const redirect = j?.midtrans?.redirect_url;
      // @ts-ignore
      if (window.snap?.pay && token) window.snap.pay(token);
      else if (redirect) window.open(redirect, "_blank", "noopener,noreferrer");
      else alert("Token tidak tersedia");
    } catch (e: any) {
      alert(e?.message || "Kesalahan jaringan");
    } finally {
      setLoading(false);
    }
  }
  return (
    <button
      onClick={pay}
      disabled={loading}
      className="px-4 py-2 rounded-2xl bg-emerald-600 text-white disabled:opacity-50"
    >
      {loading ? "Memproses..." : "Ajukan Proses"}
    </button>
  );
}
