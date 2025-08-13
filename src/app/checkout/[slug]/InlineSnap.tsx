// src/app/checkout/[slug]/InlineSnap.tsx
'use client';
import { useState } from 'react';

function normalizeAmount(a: unknown): number {
  const n = parseInt(String(a ?? '').replace(/[^\d]/g, ''), 10);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

const total = normalizeAmount(amount);
if (!total) { alert('Invalid total amount'); return; }

await fetch('/api/checkout', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    service: { slug: service.slug, title: service.title },
    amounts: { subtotal: total, total }, // TANPA fee
  }),
});

export default function InlineSnap({
  service,
  amount,
}: {
  service: { slug: string; title: string };
  amount: number | string;
}) {
  const [loading, setLoading] = useState(false);

  async function handlePay() {
    try {
      setLoading(true);
      const total = normalizeAmount(amount); // <— DI SINI
      if (!total) {
        alert('Invalid total amount');
        return;
      }

      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service: { slug: service.slug, title: service.title },
          amounts: { subtotal: total, total }, // TANPA fee
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'checkout-failed');

      // Snap (redirect atau popup)
      if (data?.redirect_url) {
        window.location.href = data.redirect_url;
      } else if (window.snap && data?.token) {
        window.snap.pay(data.token);
      } else {
        alert('Checkout berhasil dibuat, tapi token/redirect tidak ditemukan.');
      }
    } catch (e: any) {
      alert(e?.message || 'Gagal membuat transaksi');
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handlePay}
      disabled={loading}
      className="px-4 py-2 rounded-2xl bg-emerald-600 text-white"
    >
      {loading ? 'Memproses…' : 'Bayar Sekarang'}
    </button>
  );
}
