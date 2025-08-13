import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import FallbackBanner from '@/components/FallbackBanner';
import { listServices } from '@/lib/perfex';

export const revalidate = 900; // ISR 15 menit

type Search = { [key: string]: string | string[] | undefined };

export default async function Page({ searchParams }: { searchParams?: Search }) {
  let services: any[] = [];
  let error = false;

  try {
    services = await listServices();
  } catch {
    error = true;
    // optional: load cache lokal kalau kamu keep data/_fallback/*
    services = [];
  }

  const cat = (searchParams?.cat as string) || '';
  const categories = Array.from(
    new Set(services.map((s) => s.category).filter(Boolean))
  );
  const filtered = services
    .filter((s) => (cat ? s.category === cat : true))
    .sort((a, b) => (a.order_index || 0) - (b.order_index || 0));

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">Layanan UrusLegal</h1>
      {error && <FallbackBanner />}

      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-5">
        <Link
          href="/"
          className={`px-3 py-1.5 rounded-full border ${
            !cat
              ? 'bg-emerald-600 text-white border-emerald-600'
              : 'border-slate-300'
          }`}
        >
          Semua
        </Link>
        {categories.map((c: string) => (
          <Link
            key={c}
            href={`/?cat=${encodeURIComponent(c)}`}
            className={`px-3 py-1.5 rounded-full border ${
              cat === c
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'border-slate-300'
            }`}
          >
            {c}
          </Link>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((s: any) => (
          <ServiceCard key={s.slug} s={s} />
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-slate-500 mt-10">Belum ada layanan untuk kategori ini.</div>
      )}
    </main>
  );
}
