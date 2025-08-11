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
        <section className="lg:col-span-2 space-y-6">
          <header>
            <h1 className="text-2xl font-semibold">{svc.title}</h1>
            {svc.summary && <p className="text-gray-600 mt-2">{svc.summary}</p>}
          </header>
          {/* TODO: Tabs Informasi/Persyaratan/Timeline/Harga Transparan */}
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
