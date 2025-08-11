// /src/app/page.tsx
import Link from "next/link";
import { listLayanan } from "@/lib/solusi";

export default async function Home() {
  const items = await listLayanan();

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Katalog Layanan</h1>
        <nav className="text-sm">
          <Link href="/tanya" className="hover:underline">Tanya</Link>
        </nav>
      </header>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((s) => (
          <article key={s.slug} className="border rounded-2xl p-4 hover:shadow-sm">
            <h2 className="font-medium">{s.title}</h2>
            {s.price ? (
              <div className="text-emerald-700 font-semibold mt-1">
                Rp {Number(s.price).toLocaleString("id-ID")}
              </div>
            ) : null}
            <p className="text-sm text-slate-600 mt-2 line-clamp-2">{s.summary}</p>

            <div className="flex gap-2 mt-4">
              <Link href={`/layanan/${s.slug}`} className="px-3 py-2 rounded-xl border text-sm">
                Detail
              </Link>
              <Link
                href={`/layanan/${s.slug}#bayar`}  // ⬅️ internal anchor, bukan solusi
                className="px-3 py-2 rounded-xl bg-emerald-600 text-white text-sm"
              >
                Ajukan Proses
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
