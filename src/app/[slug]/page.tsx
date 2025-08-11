// /src/app/[slug]/page.tsx
import { notFound } from "next/navigation";
import { fetchServiceBySlug } from "@/lib/fetcher";
import OrderSummary from "@/components/checkout/OrderSummary";

export const revalidate = 300;

type Props = { params: { slug: string } };

export default async function ServiceDetail({ params }: Props) {
  try {
    const svc = await fetchServiceBySlug(params.slug);
    return (
      <main className="max-w-6xl mx-auto p-6 grid lg:grid-cols-3 gap-6">
<section className="space-y-6">
  {svc.detail?.description && (
    <div>
      <h2 className="font-semibold mb-2">Informasi Layanan</h2>
      <div className="prose max-w-none text-gray-700">{svc.detail.description}</div>
    </div>
  )}

  {!!svc.detail?.inclusions?.length && (
    <div>
      <h3 className="font-semibold mb-2">Yang Anda Dapatkan</h3>
      <ul className="list-disc ml-5 space-y-1">
        {svc.detail.inclusions.map((it, i) => <li key={i}>{it}</li>)}
      </ul>
    </div>
  )}

  {!!svc.detail?.process?.length && (
    <div>
      <h3 className="font-semibold mb-2">Proses Pengajuan</h3>
      <ol className="list-decimal ml-5 space-y-1">
        {svc.detail.process.map((it, i) => <li key={i}>{it}</li>)}
      </ol>
    </div>
  )}
</section>
        <div>
          <OrderSummary svc={svc} />
        </div>
      </main>
    );
  } catch (e) {
    return notFound();
  }
}
