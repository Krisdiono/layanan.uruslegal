import { getService, getPrice } from "@/lib/catalog";
import { notFound } from "next/navigation";
import InlineSnap from "./InlineSnap";

export const dynamic = "force-static";

export default async function Page({ params }: { params: { slug: string } }) {
  const svc = getService(params.slug);
  if (!svc) notFound();
  const price = getPrice(svc);
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Checkout: {svc.title}</h1>
      <InlineSnap
        service={{ slug: svc.slug, title: svc.title }}
        amount={price}
      />
      <div className="mt-6 p-4 rounded-xl border">
        <div className="flex justify-between">
          <span>Harga</span>
          <span className="font-semibold">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: svc.currency || "IDR",
            }).format(price)}
          </span>
        </div>
      </div>
    </main>
  );
}
