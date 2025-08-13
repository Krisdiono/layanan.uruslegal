// src/app/checkout/[slug]/page.tsx
import { getService } from '@/lib/catalog';
import InlineSnap from './InlineSnap';

export default async function Page({ params }: { params: { slug: string } }) {
  const s = await getService(params.slug);
  const price: number = (s as any).price ?? (s as any).sale_price ?? (s as any).base_price ?? 0;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Checkout: {(s as any).title}</h1>
      <InlineSnap service={{ slug: (s as any).slug, title: (s as any).title }} amount={price} />
      <div className="mt-6 p-4 rounded-xl border">
        <div className="flex items-center justify-between">
          <span>Harga</span>
          <span className="font-semibold">
            {price
              ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price)
              : '-'}
          </span>
        </div>
      </div>
      <p className="mt-4 text-slate-500 text-sm">Jika popup tidak muncul, klik tombol di atas lagi.</p>
    </div>
  );
}
