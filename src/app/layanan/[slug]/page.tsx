// @ts-nocheck
import Link from "next/link";
import { getLayananBySlug } from "@/lib/solusi";

export const revalidate = 300;

export default async function LayananDetail({ params }: { params: { slug: string } }) {
  const svc = await getLayananBySlug(params.slug);
  if (!svc) {
    return (
      <div className="container mx-auto px-4 py-10">
        <Link href="/" className="btn btn-ghost">← Kembali</Link>
        <h1 className="text-2xl font-semibold mt-6">Layanan tidak ditemukan</h1>
      </div>
    );
  }

  const wa = process.env.NEXT_PUBLIC_WA_NUMBER || "6281142677700";
  const waText = encodeURIComponent(`Halo UrusLegal, saya ingin konsultasi: ${svc.title} (${svc.slug})`);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="btn btn-ghost">← Kembali</Link>
      <h1 className="text-3xl font-semibold mt-4">{svc.title}</h1>

      <div className="grid lg:grid-cols-3 gap-6 mt-6">
        {/* Konten utama */}
        <div className="lg:col-span-2 card p-5 space-y-6">
          {/* Informasi */}
          {(svc.description || svc.summary) && (
            <section>
              <h2 className="text-lg font-semibold mb-2">Informasi</h2>
              <p className="text-slate-700 leading-relaxed">
                {svc.description || svc.summary}
              </p>
            </section>
          )}

          {/* Yang Anda Dapatkan / Inclusions */}
          {svc.detail?.inclusions?.length ? (
            <section>
              <h2 className="text-lg font-semibold mb-2">Yang Anda Dapatkan</h2>
              <ul className="list-disc pl-6 space-y-1">
                {svc.detail.inclusions.map((x: string, i: number) => <li key={i}>{x}</li>)}
              </ul>
            </section>
          ) : null}

          {/* Proses Pengajuan */}
          {svc.detail?.process?.length ? (
            <section>
              <h2 className="text-lg font-semibold mb-2">Proses Pengajuan</h2>
              <ol className="list-decimal pl-6 space-y-1">
                {svc.detail.process.map((x: string, i: number) => <li key={i}>{x}</li>)}
              </ol>
            </section>
          ) : null}
        </div>

        {/* Sidebar Ringkasan */}
        <aside className="card p-5 h-fit space-y-4">
          <div className="text-sm text-slate-500">Ringkasan</div>
          <div className="text-2xl font-bold">
            {typeof svc.price === "number" ? `Rp${svc.price.toLocaleString("id-ID")}` : "Minta Penawaran"}
          </div>

          <div className="flex flex-col gap-2">
            {typeof svc.price === "number" && (
              <Link href={`/checkout/${svc.slug}`} className="btn btn-primary w-full">
                Ajukan Proses
              </Link>
            )}
            <a
              href={`https://wa.me/${wa}?text=${waText}`}
              target="_blank"
              className="btn w-full"
            >
              Tanya via WhatsApp
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
