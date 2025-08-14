import { notFound } from 'next/navigation';
import { getService } from '@/lib/catalog';

function getPrice(s: any): number {
  return s.price ?? s.sale_price ?? s.base_price ?? 0;
}

export const dynamic = 'force-static';

export default async function Page({ params }: { params: { slug: string } }) {
  const s = await getService(params.slug).catch(() => null as any);
  if (!s) notFound();

  const price = getPrice(s);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-2">{(s as any).title}</h1>
      {(s as any).summary && (
        <p className="text-slate-700 mb-6">{(s as any).summary}</p>
      )}

      {!!price && (
        <div className="text-xl font-bold mb-4">
          {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price)}
        </div>
      )}

      <div className="flex gap-3 mb-8">
        <a
          href={`/checkout/${(s as any).slug}`}
          className="px-4 py-2 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700"
        >
          Ajukan Proses
        </a>
        <a
          href={`https://wa.me/6281142677700?text=${encodeURIComponent(
            `Halo UrusLegal, saya ingin tanya tentang ${(s as any).title}`
          )}`}
          className="px-4 py-2 rounded-2xl border border-emerald-500 text-emerald-600 hover:bg-emerald-50"
        >
          Tanya via WhatsApp
        </a>
      </div>

      {(s as any).description && (
        <article
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: (s as any).description }}
        />
      )}
    </div>
  );
}
