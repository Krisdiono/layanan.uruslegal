import "server-only";
import { getLayananBySlug } from "@/lib/solusi";
import CheckoutClient from "@/components/checkout/CheckoutClient";

export default async function Page({ params }: { params: { slug: string } }) {
  const svc = await getLayananBySlug(params.slug);
  if (!svc) return <div className="container p-6">Layanan tidak ditemukan</div>;

  return (
    <div className="container p-6 space-y-4">
      <h1 className="text-2xl font-semibold">{svc.title}</h1>
      {/* Komponen client akan load snap.js & panggil /api/orders/create */}
      <CheckoutClient svc={svc} />
    </div>
  );
}
