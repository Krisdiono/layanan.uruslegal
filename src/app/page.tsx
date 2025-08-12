import Link from "next/link";
import { listCatalog } from "@/lib/catalog";
import { getPrice, computeFinal } from "@/lib/prices";

const idr = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

export const revalidate = 300;

export default async function Page() {
  const items = listCatalog();

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Katalog Layanan</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((s) => {
          const row = getPrice(s.slug);
          const calc = computeFinal(row);
          return (
            <article key={s.slug} className="rounded-2xl border p-5 hover:shadow-md transition">
              <h2 className="font-medium">{s.title}</h2>

              {/* Harga */}
              <div className="mt-1 min-h-[24px]">
                {calc.rfq ? (
                  <span className="text-slate-600 text-sm">Minta Penawaran</span>
                ) : calc.discount > 0 ? (
                  <div className="flex items-baseline gap-2">
                    <span className="text-emerald-700 font-semibold">{idr(calc.final)}</span>
                    <span className="text-sm text-gray-500 line-through">{idr(calc.base)}</span>
                  </div>
                ) : (
                  <span className="text-emerald-700 font-semibold">{idr(calc.base)}</span>
                )}
              </div>

              {s.summary && <p className="text-sm text-gray-600 line-clamp-3 mt-2">{s.summary}</p>}

              <div className="mt-4 flex gap-2">
                <Link href={`/layanan/${s.slug}`} className="rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-50">
                  Detail
                </Link>
                <Link
                  href={`/layanan/${s.slug}#bayar`}
                  className="rounded-lg bg-emerald-600 px-3 py-1.5 text-sm text-white hover:bg-emerald-700"
                >
                  Ajukan Proses
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}
