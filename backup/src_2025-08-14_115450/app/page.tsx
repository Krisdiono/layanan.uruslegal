// /src/app/page.tsx
import Link from "next/link";
import { listLayanan } from "@/lib/solusi";
import { toIDR } from "@/lib/format";

export const revalidate = 300;

export default async function Home() {
  const items = await listLayanan();

  return (
    <main className="max-w-6xl mx-auto p-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Katalog Layanan</h1>
        <nav className="text-sm">
          <Link href="https://wa.me/6281142677700" className="hover:underline">Tanya</Link>
        </nav>
      </header>

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => {
          const harga = toIDR(s.price ?? null);
          return (
            <article key={s.slug} className="card">
              <h2 className="font-medium text-lg">{s.title}</h2>
              <div className="mt-1 text-emerald-700 font-semibold">
                {harga ? <>Rp {harga}</> : <span className="text-slate-500">Minta Penawaran</span>}
              </div>
              <p className="text-sm text-slate-600 mt-2 line-clamp-3">{s.summary}</p>

              <div className="flex gap-2 mt-4">
                <Link href={`/layanan/${s.slug}`} className="px-3 py-2 rounded-xl border text-sm">
                  Detail
                </Link>
                <Link
                  href={`/layanan/${s.slug}#ajukan`}
                  className="btn-brand text-sm"
                >
                  Ajukan Proses
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
