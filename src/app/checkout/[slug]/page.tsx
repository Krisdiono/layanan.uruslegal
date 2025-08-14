import rawCatalog from '@/data/catalog.json';
import InlineSnap from './InlineSnap';

type Svc = { slug:string; title:string; price?:number; sale_price?:number; base_price?:number; currency?:string };

const catalog = rawCatalog as Svc[];

const price: number =
  (s as any).price ?? (s as any).sale_price ?? (s as any).base_price ?? 0;

function findService(slug:string){
  const s = catalog.find(x => x.slug === slug);
  if (!s) throw new Error(`Service not found: ${slug}`);
  return s;
}

export default async function Page({ params }: { params: { slug: string } }) {
  const s = findService(params.slug);
  const amount = s.price ?? s.sale_price ?? s.base_price ?? 0;

  const disabled = !amount || amount <= 0;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Checkout: {s.title}</h1>

      {/* Guard: kalau amount 0, jangan paksa Snap */}
      {disabled ? (
        <div className="rounded-xl border p-4 bg-amber-50 text-amber-800 mb-4">
          Harga layanan belum di-set. Silakan hubungi kami via WhatsApp.
        </div>
      ) : (
        <InlineSnap service={{ slug: s.slug, title: s.title }} amount={amount} />
      )}

      <div className="mt-6 p-4 rounded-xl border">
        <div className="flex items-center justify-between">
          <span>Harga</span>
          <span className="font-semibold">
            {amount
              ? new Intl.NumberFormat('id-ID', { style: 'currency', currency: s.currency || 'IDR' }).format(amount)
              : '-'}
          </span>
        </div>
      </div>

      <p className="mt-4 text-slate-500 text-sm">
        Jika popup tidak muncul, klik tombol di atas lagi atau matikan popup blocker.
      </p>

      <div className="mt-4">
        <a
          href={`https://wa.me/6281142677700?text=${encodeURIComponent(`Halo UrusLegal, saya ingin tanya tentang ${s.title}`)}`}
          className="inline-block px-4 py-2 rounded-2xl border border-emerald-500 text-emerald-600"
        >
          Tanya via WhatsApp
        </a>
      </div>
    </div>
  );
}
