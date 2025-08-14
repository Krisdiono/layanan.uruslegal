// src/app/checkout/[slug]/InlineSnap.tsx
'use client';
import { useState } from 'react';

export default function InlineSnap({ service, amount }: { service: { slug: string; title: string }, amount: number }) {
  const [loading, setLoading] = useState(false);

  async function onPay() {
    if (!amount || amount <= 0) { alert('Harga belum tersedia.'); return; }
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ service, amount }), // <-- kirim number
      });
      const json = await res.json();
      if (!res.ok) { alert(json?.error || 'Gagal membuat transaksi'); return; }

      // Snap popup / redirect
      // @ts-ignore
      if (window.snap && json.token) {
        // @ts-ignore
        window.snap.pay(json.token);
      } else if (json.redirect_url) {
        window.location.href = json.redirect_url;
      } else {
        alert('Token Snap tidak tersedia.');
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={onPay}
      disabled={loading || !amount || amount <= 0}
      className="px-4 py-2 rounded-2xl bg-emerald-600 text-white disabled:opacity-50"
    >
      {loading ? 'Memproses…' : 'Bayar Sekarang'}
    </button>
  );
}
