import Catalog from '@/lib/catalog';
import CheckoutButton from './CheckoutButton';

export default async function Page({ params }: { params: { slug: string } }) {
  const s = await Catalog.getService(params.slug);
  const price: number = (s as any).price ?? (s as any).sale_price ?? (s as any).base_price ?? 0;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: (s as any).title,
    description: (s as any).summary,
    category: (s as any).category,
    offers: price
      ? {
          '@type': 'Offer',
          price,
          priceCurrency: (s as any).currency || 'IDR',
          url: `https://layanan.uruslegal.id/layanan/${(s as any).slug}`,
          availability: 'https://schema.org/InStock',
        }
      : undefined,
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-2">{(s as any).title}</h1>

      {(s as any).image_url && (
        <img src={(s as any).image_url} alt={(s as any).title} className="rounded-2xl shadow mb-4" loading="lazy" />
      )}

      {(s as any).summary && <p className="text-slate-700 mb-4">{(s as any).summary}</p>}

      {!!price && (
        <div className="text-xl font-bold mb-6">
          {new Intl.NumberFormat('id-ID', { style: 'currency', currency: (s as any).currency || 'IDR' }).format(price)}
        </div>
      )}

      <div className="flex gap-3 mb-10">
        <CheckoutButton service={{ slug: (s as any).slug, title: (s as any).title }} amount={price} />
        <a
          href={`https://wa.me/6281142677700?text=${encodeURIComponent(`Halo UrusLegal, saya ingin tanya tentang ${(s as any).title}`)}`}
          className="px-4 py-2 rounded-2xl border border-emerald-500 text-emerald-600"
        >
          Tanya via WhatsApp
        </a>
      </div>

      {(s as any).description && (
        <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: (s as any).description }} />
      )}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
