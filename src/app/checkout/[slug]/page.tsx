import { getService } from '@/lib/perfex';
import InlineSnap from './InlineSnap';

export default async function Page({ params }: { params: { slug: string } }) {
  const s = await getService(params.slug);
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Checkout: {s.title}</h1>
      <InlineSnap service={{ slug: s.slug, title: s.title }} amount={s.price || 0} />
      <div className="mt-6 p-4 rounded-xl border">
        <div className="flex items-center justify-between">
          <span>Harga</span>
          <span className="font-semibold">
            {typeof s.price === 'number'
              ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: s.currency || 'IDR' }).format(s.price)
              : '-'}
          </span>
        </div>
      </div>
      <p className="mt-4 text-slate-500 text-sm">Jika popup tidak muncul, klik tombol di atas lagi atau matikan popup blocker.</p>
    </div>
  );
}
