import rawCatalog from '@/data/catalog.json';
import InlineSnap from './InlineSnap';

type Svc = { slug:string; title:string; price?:number; sale_price?:number; base_price?:number; currency?:string; };
const catalog = rawCatalog as Svc[];

function findService(slug:string){ const s = catalog.find(x=>x.slug===slug); if(!s) throw new Error('Service not found'); return s; }

export default async function Page({ params }: { params:{slug:string} }) {
  const s = findService(params.slug);
  const amount = s.price ?? s.sale_price ?? s.base_price ?? 0;   // <— fallback wajib

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Checkout: {s.title}</h1>
      <InlineSnap service={{ slug: s.slug, title: s.title }} amount={amount} /> {/* <— kirim amount */}
      {/* tampilkan Harga pakai amount juga */}
      <div className="mt-6 p-4 rounded-xl border">
        <div className="flex items-center justify-between">
          <span>Harga</span>
          <span className="font-semibold">
            {amount ? new Intl.NumberFormat('id-ID',{style:'currency',currency:s.currency||'IDR'}).format(amount) : '-'}
          </span>
        </div>
      </div>
    </div>
  );
}
