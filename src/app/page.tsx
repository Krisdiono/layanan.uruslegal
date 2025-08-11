// /src/app/page.tsx
import Link from "next/link";
import { safeFetchServices } from "@/lib/fetcher";

// helper harga (kalau kamu sudah punya lib/price.ts, bebas ganti import dari sana)
const idr = (n: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

function effectivePrice(svc: { price: number; fee_discount?: number; discount_percent?: number }) {
  const base = svc.price || 0;
  const byNominal = Math.max(0, base - (svc.fee_discount ?? 0));
  const byPercent =
    typeof svc.discount_percent === "number"
      ? Math.max(0, base - Math.round(base * (svc.discount_percent / 100)))
      : byNominal;
  return { base, final: byPercent, discountAmount: base - byPercent };
}

export const revalidate = 300; // ISR 5 menit

export default async function Page() {
  const services = await safeFetchServices();

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Katalog Layanan</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((svc) => {
          const { base, final, discountAmount } = effectivePrice(svc as any);

          return (
            <div key={svc.id} className="rounded-2xl border p-5 hover:shadow-md transition">
              <h2 className="font-medium mb-1">{svc.title}</h2>

              {/* harga */}
              <div className="mt-1">
                {discountAmount > 0 ? (
                  <div className="flex items-baseline gap-2">
                    <span className="text-emerald-700 font-semibold">{idr(final)}</span>
                    <span className="text-sm text-gray-500 line-through">{idr(base)}</span>
                  </div>
                ) : (
                  <span className="text-emerald-700 font-semibold">{idr(base)}</span>
                )}
              </div>

              {/* ringkas deskripsi (tanpa slug/note) */}
              {svc.summary && <p className="text-sm text-gray-600 line-clamp-3 mt-2">{svc.summary}</p>}

              {/* actions */}
              <div className="mt-4 flex gap-2">
                <Link
                  href={`/${svc.slug}`}
                  className="rounded-lg border px-3 py-1.5 text-sm hover:bg-gray-50"
                >
                  Detail
                </Link>
                <Link
                  href={`/${svc.slug}#bayar`}
                  className="rounded-lg bg-emerald-600 px-3 py-1.5 text-sm text-white hover:bg-emerald-700"
                >
                  Ajukan Proses
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
