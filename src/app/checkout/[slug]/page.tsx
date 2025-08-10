import Link from "next/link";
import services from "@/data/services.json";
import type { PageProps } from "next";

type Params = { slug: string };
type Service = { slug: string; title: string; price?: number };

export default async function Checkout({ params }: PageProps<Params>) {
  const { slug } = await params;

  const list = services as Service[];
  const svc = list.find((x) => x.slug === slug);
  if (!svc) return <div>Checkout: layanan tidak ditemukan.</div>;

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Checkout — {svc.title}</h1>
      <p className="text-slate-700">
        Placeholder checkout. Selanjutnya kita hubungkan ke Midtrans Snap/VT-Web.
      </p>
      <div className="p-4 border rounded-2xl">
        <div className="flex items-center justify-between">
          <div>{svc.title}</div>
          {typeof svc.price === "number" ? (
            <div className="font-semibold">Rp {svc.price.toLocaleString("id-ID")}</div>
          ) : null}
        </div>
      </div>
      <div className="flex gap-3">
        <Link href={`/layanan/${svc.slug}`} className="px-4 py-2 rounded-xl border">Kembali</Link>
        <button
          className="px-4 py-2 rounded-xl bg-emerald-600 text-white"
          onClick={() => alert("Next: trigger create transaction → redirect ke Midtrans")}
        >
          Bayar Sekarang
        </button>
      </div>
    </div>
  );
}
