import { listServices } from '@/lib/catalog';

export const dynamic = 'force-static';

export default async function Page() {
  const services = await listServices(); // aman walau listServices sync
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Katalog Layanan</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const price = (s as any).price ?? (s as any).sale_price ?? (s as any).base_price ?? 0;
          return (
            <a
              key={(s as any).slug}
              href={`/layanan/${(s as any).slug}`}
              className="block rounded-2xl border p-4 hover:shadow transition"
            >
              <div className="text-lg font-semibold mb-1">{(s as any).title}</div>
              {(s as any).summary && (
                <p className="text-sm text-slate-600 mb-3">{(s as any).summary}</p>
              )}
              <div className="text-emerald-700 font-bold">
                {price
                  ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price)
                  : 'Hubungi kami'}
              </div>
              <div className="mt-3 inline-flex items-center gap-2 text-emerald-700">
                <span className="font-medium">Detail</span>
                <span aria-hidden>→</span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
