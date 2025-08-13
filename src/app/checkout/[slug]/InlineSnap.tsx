'use client';
import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function InlineSnap({ service, amount }: { service: { slug: string; title: string }; amount: number }) {
  const [loading, setLoading] = useState(false);
  async function pay() {
    setLoading(true);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          service: { slug: service.slug, title: service.title },
          customer: { name: 'Guest', email: 'guest@uruslegal.id' },
          metadata: { source: 'layanan.uruslegal' },
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Checkout gagal');
      const snap = (window as any).snap;
      if (data?.midtrans?.token && snap) {
        snap.pay(data.midtrans.token, {
          onSuccess: (r: any) => console.log('success', r),
          onPending: (r: any) => console.log('pending', r),
          onError: (r: any) => console.error('error', r),
          onClose: () => console.log('popup closed'),
        });
      } else if (data?.midtrans?.redirect_url) {
        window.location.href = data.midtrans.redirect_url;
      } else {
        throw new Error('Token Midtrans tidak tersedia');
      }
    } catch (e: any) {
      alert(e.message || 'Checkout gagal. Coba lagi ya.');
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => { pay(); }, []);
  return (
    <>
      <Script src="https://app.sandbox.midtrans.com/snap/snap.js"
              data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
              strategy="afterInteractive" />
      <button onClick={pay} disabled={loading}
              className="px-4 py-2 rounded-2xl bg-emerald-600 text-white shadow disabled:opacity-60">
        {loading ? 'Memproses…' : 'Bayar sekarang'}
      </button>
    </>
  );
}
