import Link from "next/link";
import { getService, getPrice } from "@/lib/catalog";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export default async function Page({ params }: { params: { slug: string } }) {
  const svc = getService(params.slug);
  if (!svc) notFound();
  const price = getPrice(svc);
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-2">{svc.title}</h1>
      <div className="text-xl font-bold mb-6">
        {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: svc.currency || "IDR",
        }).format(price)}
      </div>
      <Link
        className="px-4 py-2 rounded-2xl bg-emerald-600 text-white"
        href={`/checkout/${svc.slug}`}
      >
        Ajukan Proses
      </Link>
    </main>
  );
}
