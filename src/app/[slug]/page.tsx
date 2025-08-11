// /src/app/layanan/[slug]/page.tsx
import Link from "next/link";
import { getLayanan } from "@/lib/solusi";
import OrderSummary from "@/components/checkout/OrderSummary";
import OrderActions from "@/components/checkout/OrderActions";

type Props = { params: { slug: string } }; // ✅ tidak perlu Promise

export default async function DetailPage({ params }: Props) {
  const { slug } = params;
  const svc = await getLayanan(slug);

  if (!svc) {
    return <div className="p-6">Layanan tidak ditemukan.</div>;
  }

  const wa = `https://wa.me/6281142677700?text=${encodeURIComponent(
    `Halo UrusLegal, saya ingin tanya tentang: ${svc.title}`
  )}`;

  return (
    <main className="max-w-5xl mx-auto p-6 grid lg:grid-cols-3 gap-6">
      <section className="lg:col-span-2 space-y-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm border rounded-xl px-3 py-2">
          ← Kembali
        </Link>
        <h1 className="text-3xl font-semibold">{svc.title}</h1>
        {svc.price ? (
          <div className="text-emerald-700 font-semibold">
            Mulai Rp {Number(svc.price).toLocaleString("id-ID")}
          </div>
        ) : null}

        <p className="text-slate-700">{svc.description ?? "Deskripsi belum tersedia."}</p>

        {/* Info lanjutan dari Perfex bisa ditambah di sini: inclusions/process */}
      </section>

      <aside className="space-y-4">
        <div id="bayar" />
        <OrderSummary svc={svc} />
        <OrderActions svc={svc} />  {/* ⬅️ tombol bayar (Snap) + WA */}
        <Link href={wa} className="px-4 py-2 rounded-xl border block text-center">
          Tanya via WhatsApp
        </Link>
      </aside>
    </main>
  );
}
