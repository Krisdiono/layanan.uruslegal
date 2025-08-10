// @ts-nocheck
import Link from "next/link";
import services from "@/data/services.json";

export default async function Checkout(props: any) {
  // dukung 2 bentuk: params sync atau Promise
  const got = props?.params?.slug ? props.params : await props.params;
  const slug = got.slug as string;

  const svc = (services as any[]).find((x) => x.slug === slug);
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
