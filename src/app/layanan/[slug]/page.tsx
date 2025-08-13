import type { Metadata } from 'next';
import { getService } from '@/lib/perfex';

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const s = await getService(params.slug);
  const title = `${s.title} — UrusLegal`;
  const desc = s.summary || 'Layanan UrusLegal';
  const url = `https://layanan.uruslegal.id/layanan/${s.slug}`;

  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: desc,
      url,
      type: 'article',
      images: s.image_url ? [{ url: s.image_url }] : undefined,
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const s = await getService(params.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.title,
    description: s.summary,
    category: s.category,
    offers: s.price ? {
      '@type': 'Offer',
      price: s.price,
      priceCurrency: s.currency || 'IDR',
      url: `https://layanan.uruslegal.id/layanan/${s.slug}`,
      availability: 'https://schema.org/InStock',
    } : undefined,
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-2">{s.title}</h1>
      {s.image_url && (
        <img
          src={s.image_url}
          alt={s.title}
          className="rounded-2xl shadow mb-4"
          loading="lazy"
        />
      )}
      {s.summary && <p className="text-slate-700 mb-4">{s.summary}</p>}

      {typeof s.price === 'number' && (
        <div className="text-xl font-bold mb-6">
          {new Intl.NumberFormat('id-ID', { style: 'currency', currency: s.currency || 'IDR' }).format(s.price)}
        </div>
      )}

      <div className="flex gap-3 mb-10">
        <a
          href={`https://wa.me/6281142677700?text=${encodeURIComponent(
            `Halo UrusLegal, saya ingin ajukan proses untuk ${s.title}`
          )}`}
          className="px-4 py-2 rounded-2xl bg-emerald-600 text-white shadow"
        >
          Ajukan Proses
        </a>
        <a
          href={`https://wa.me/6281142677700?text=${encodeURIComponent(
            `Halo UrusLegal, saya ingin tanya tentang ${s.title}`
          )}`}
          className="px-4 py-2 rounded-2xl border border-emerald-500 text-emerald-600"
        >
          Tanya via WhatsApp
        </a>
      </div>

      {/* Placeholder untuk tab Informasi / Persyaratan / Timeline */}
      {s.description && (
        <article
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: s.description }}
        />
      )}

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
