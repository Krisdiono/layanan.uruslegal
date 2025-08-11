
// /src/app/[slug]/page.tsx
import { notFound } from "next/navigation";
import { fetchServiceBySlug } from "@/lib/fetcher";
import OrderSummary from "@/components/checkout/OrderSummary";
import OrderActions from "@/components/checkout/OrderActions";

export const revalidate = 300;

type Props = { params: { slug: string } };

export default async function ServiceDetail({ params }: Props) {
  try {
    const svc = await fetchServiceBySlug(params.slug);

    // hitung deskripsi fallback dengan aman (di luar JSX)
    const desc =
      svc.detail?.description ?? svc.description ?? svc.summary ?? "Deskripsi belum tersedia.";

    return (
      <main className="max-w-6xl mx-auto p-6 grid lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 space-y-6">
          <div>
            <h1 className="text-2xl font-semibold">{svc.title}</h1>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Informasi Layanan</h2>
            <div className="prose max-w-none text-gray-700">{desc}</div>
          </div>

          {!!svc.detail?.inclusions?.length && (
            <div>
              <h3 className="font-semibold mb-2">Yang Anda Dapatkan</h3>
              <ul className="list-disc ml-5 space-y-1">
                {svc.detail.inclusions.map((it: string, i: number) => <li key={i}>{it}</li>)}
              </ul>
            </div>
          )}

          {!!svc.detail?.process?.length && (
            <div>
              <h3 className="font-semibold mb-2">Proses Pengajuan</h3>
              <ol className="list-decimal ml-5 space-y-1">
                {svc.detail.process.map((it: string, i: number) => <li key={i}>{it}</li>)}
              </ol>
            </div>
          )}
        </section>

        <aside className="space-y-4">
          <div id="bayar" />
          <OrderSummary svc={svc} />
          <OrderActions svc={svc} />
        </aside>
      </main>
    );
  } catch {
    return notFound();
  }
}
