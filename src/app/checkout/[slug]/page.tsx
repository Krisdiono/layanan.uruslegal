import { getService } from '@/lib/perfex';
import InlineSnap from './InlineSnap';

export default async function Page({ params }: { params: { slug: string } }) {
  const s = await getService(params.slug); // ambil harga & title dari Perfex
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">{s.title}</h1>
      <InlineSnap service={{ slug: s.slug, title: s.title }} amount={s.price || 0} />
      <p className="mt-4 text-slate-500 text-sm">Jika popup tidak muncul, klik tombol di atas lagi atau cek popup blocker.</p>
    </div>
  );
}
