'use client';

import Script from 'next/script';
import { useState } from 'react';

export default function CheckoutButton({ service, amount }: { service: { slug: string; title: string }; amount: number }) {
  const [loading, setLoading] = useState(false);

  async function pay() {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          service: { slug: service.slug, title: service.title },
          amounts: { subtotal: amount, total: amount },
          customer: { name: 'Guest', email: 'guest@uruslegal.id' },
          metadata: { source: 'layanan.uruslegal' },
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Checkout gagal');

      // Snap modal jika tersedia
      const snap = (window as any).snap;
      if (data?.midtrans?.token && snap) {
        snap.pay(data.midtrans.token, {
          onSuccess: (result: any) => console.log('success', result),
          onPending: (result: any) => console.log('pending', result),
          onError: (result: any) => console.error('error', result),
          onClose: () => console.log('popup closed'),
        });
      } else if (data?.midtrans?.redirect_url) {
        // Fallback VT-Web redirect
        window.location.href = data.midtrans.redirect_url;
      }
    } catch (e) {
      console.error(e);
      alert('Checkout gagal. Coba lagi sebentar ya.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Script
        src="https://app.sandbox.midtrans.com/snap/snap.js"
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
        strategy="afterInteractive"
      />
      <button
        onClick={pay}
        disabled={loading}
        className="px-4 py-2 rounded-2xl bg-emerald-600 text-white shadow disabled:opacity-60"
      >
        {loading ? 'Memproses…' : 'Ajukan Proses'}
      </button>
    </>
  );
}
