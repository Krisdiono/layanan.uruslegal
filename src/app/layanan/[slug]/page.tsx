import Link from "next/link";
import { getLayanan } from "@/lib/solusi";
import { notFound } from "next/navigation";

type Params = { params: { slug: string } };

export default async function DetailPage({ params }: Params) {
  const svc = await getLayanan(params.slug);
  if (!svc) return notFound();

  const wa = `https://wa.me/6281142677700?text=${encodeURIComponent(
    `Halo UrusLegal, saya ingin tanya tentang: ${svc.title}`
  )}`;

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <Link href="/" className="inline-flex items-center gap-2 text-sm border rounded-xl px-3 py-2">
        ← Kembali
      </Link>

      <header>
        <h1 className="text-3xl font-semibold">{svc.title}</h1>
        {svc.price ? (
          <div className="text-emerald-700 font-semibold mt-2">
            Mulai Rp {Number(svc.price).toLocaleString("id-ID")}
          </div>
        ) : null}
      </header>

      <article className="prose prose-slate max-w-none">
        {svc.description ? (
          // description dari API saat ini string JSON; render simpel dulu
          <p className="text-slate-700">Deskripsi belum tersedia.</p>
        ) : (
          <p className="text-slate-700">Deskripsi belum tersedia.</p>
        )}
      </article>

      <div className="flex gap-3">
        <Link
          href={`https://solusi.uruslegal.id/checkout?service=${encodeURIComponent(svc.slug)}`}
          className="px-4 py-2 rounded-xl bg-emerald-600 text-white"
        >
          Ajukan Proses
        </Link>
        <Link href={wa} className="px-4 py-2 rounded-xl border">
          Tanya via WhatsApp
        </Link>
      </div>
    </main>
  );
}
