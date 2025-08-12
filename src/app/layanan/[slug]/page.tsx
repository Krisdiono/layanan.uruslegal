import Link from "next/link";
import { getCatalog } from "@/lib/catalog";
import OrderSummary from "@/components/checkout/OrderSummary";
import OrderActions from "@/components/checkout/OrderActions";

export const revalidate = 300;

export default async function DetailPage({ params }: { params: { slug: string } }) {
  const svc = getCatalog(params.slug);
  if (!svc) return <div className="p-6">Layanan tidak ditemukan.</div>;

  const desc = svc.description || "Deskripsi belum tersedia.";

  return (
    <main className="max-w-6xl mx-auto p-6 grid lg:grid-cols-3 gap-6">
      <section className="lg:col-span-2 space-y-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm border rounded-xl px-3 py-2">
          ← Kembali
        </Link>
        <h1 className="text-3xl font-semibold">{svc.title}</h1>

        <div>
          <h2 className="font-semibold mb-2">Informasi Layanan</h2>
          <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: desc }} />
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

      <aside className="space-y-4">
        <div id="bayar" />
        <OrderSummary svc={svc as any} />
        <OrderActions svc={svc as any} />
      </aside>
    </main>
  );
}
