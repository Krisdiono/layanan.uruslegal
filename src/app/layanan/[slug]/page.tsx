import Link from "next/link";
import { getLayanan } from "@/lib/solusi";
import { toIDR } from "@/lib/format";

type Props = { params: { slug: string } };

export const revalidate = 300;

export default async function DetailPage({ params }: Props) {
  const svc = await getLayanan(params.slug);
  if (!svc) {
    return (
      <main className="max-w-3xl mx-auto p-6">
        <p>Layanan tidak ditemukan.</p>
      </main>
    );
  }

  const harga = toIDR(svc.price ?? null);
  const wa = `https://wa.me/6281142677700?text=${encodeURIComponent(
    `Halo UrusLegal, saya ingin tanya tentang: ${svc.title}`
  )}`;

  const desc =
    svc.description || svc.summary || "Deskripsi belum tersedia.";

  return (
    <main className="max-w-6xl mx-auto p-6 grid lg:grid-cols-3 gap-6">
      {/* Konten kiri */}
      <section className="lg:col-span-2 space-y-6">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-sm border rounded-xl px-3 py-2">
            ← Kembali
          </Link>
        </div>

        <h1 className="text-3xl font-semibold">{svc.title}</h1>
        <div className="text-emerald-700 font-semibold">
          {harga ? <>Mulai Rp {harga}</> : <span className="text-slate-500">Minta Penawaran</span>}
        </div>

        <div>
          <h2 className="font-semibold mb-2">Informasi Layanan</h2>
          <p className="text-slate-700">{desc}</p>
        </div>

        {!!svc.detail?.inclusions?.length && (
          <div>
            <h3 className="font-semibold mb-2">Yang Anda Dapatkan</h3>
            <ul className="list-disc ml-5 space-y-1">
              {svc.detail!.inclusions!.map((it, i) => <li key={i}>{it}</li>)}
            </ul>
          </div>
        )}

        {!!svc.detail?.process?.length && (
          <div>
            <h3 className="font-semibold mb-2">Proses Pengajuan</h3>
            <ol className="list-decimal ml-5 space-y-1">
              {svc.detail!.process!.map((it, i) => <li key={i}>{it}</li>)}
            </ol>
          </div>
        )}
      </section>

      {/* Sidebar kanan */}
      <aside className="space-y-4" id="ajukan">
        <div className="border rounded-2xl p-4 bg-white">
          <div className="text-lg font-medium mb-2">Ajukan Proses</div>
          <p className="text-sm text-slate-600 mb-3">
            Isi data singkat, kami hubungi ≤ 1×24 jam.
          </p>
          {/* sementara tombol WA dulu; form bisa nyusul */}
          <a href={wa} className="btn-brand block text-center">Tanya via WhatsApp</a>
        </div>
      </aside>
    </main>
  );
}
