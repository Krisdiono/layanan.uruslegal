import Link from 'next/link';
import Price from '@/components/Price';

export type ServiceItem = {
  slug: string;
  title: string;
  summary?: string;
  price?: number;
  currency?: string;
  category?: string;
  image_url?: string;
  order_index?: number;
};

export default function ServiceCard({ s }: { s: ServiceItem }) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm overflow-hidden flex flex-col">
      {s.image_url && (
        <img
          src={s.image_url}
          alt={s.title}
          className="h-40 w-full object-cover"
          loading="lazy"
        />
      )}

      <div className="p-4 flex-1 flex flex-col">
        {s.category && (
          <span className="inline-block text-xs px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 mb-2">
            {s.category}
          </span>
        )}

        <h3 className="text-lg font-semibold mb-1 line-clamp-2">{s.title}</h3>
        {s.summary && (
          <p className="text-sm text-slate-600 line-clamp-3 mb-3">{s.summary}</p>
        )}

        <div className="mt-auto flex items-center justify-between">
          <Price value={s.price ?? (s as any).sale_price ?? (s as any).base_price} currency={s.currency || 'IDR'} />
          <div className="flex gap-2">
            <Link
              href={`/layanan/${s.slug}`}
              className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-sm"
            >
              Detail
            </Link>
            <a
              href={`https://wa.me/6281142677700?text=${encodeURIComponent(
                'Halo UrusLegal, saya ingin tanya tentang ' + s.title
              )}`}
              className="px-3 py-1.5 rounded-xl border text-sm text-emerald-700 border-emerald-600"
            >
              Tanya
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
