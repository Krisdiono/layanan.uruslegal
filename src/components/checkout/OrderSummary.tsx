import { getPrice, computeFinal } from "@/lib/prices";
import type { CatalogItem } from "@/lib/catalog";

const idr = (n:number)=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR",maximumFractionDigits:0}).format(n);

export default function OrderSummary({ svc }: { svc: CatalogItem }) {
  const row = getPrice(svc.slug);
  const calc = computeFinal(row);

  if (calc.rfq) {
    return (
      <aside className="rounded-2xl border p-5 bg-white space-y-3">
        <h3 className="text-lg font-semibold">Ringkasan Pesanan</h3>
        <div className="text-sm text-slate-600">Harga: <b>Minta Penawaran</b></div>
        <a
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER}?text=${encodeURIComponent(`Halo, saya tertarik: ${svc.title}`)}`}
          className="inline-block px-4 py-2 rounded-xl bg-emerald-600 text-white"
        >
          Tanya Harga via WhatsApp
        </a>
      </aside>
    );
  }

  const feePct = Number(process.env.NEXT_PUBLIC_GATEWAY_FEE_PCT ?? 0.03);
  const fee = Math.round(calc.final * feePct);
  const total = calc.final + fee;

  return (
    <aside className="rounded-2xl border p-5 bg-white space-y-2">
      <h3 className="text-lg font-semibold mb-2">Ringkasan Pesanan</h3>
      <div className="flex justify-between text-sm">
        <span>Harga Layanan</span>
        <span>
          {calc.discount>0 ? <><b>{idr(calc.final)}</b> <i className="line-through ml-2 text-slate-500">{idr(calc.base)}</i></> : idr(calc.base)}
        </span>
      </div>
      <div className="flex justify-between text-sm">
        <span>Biaya Gateway (±{Math.round(feePct*100)}%)</span><span>{idr(fee)}</span>
      </div>
      <div className="flex justify-between text-base font-semibold border-t pt-2">
        <span>Total</span><span>{idr(total)}</span>
      </div>

      {/* tombol bayar kamu panggil seperti biasa */}
    </aside>
  );
}
