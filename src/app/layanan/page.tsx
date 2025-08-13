import * as Catalog from '@/lib/catalog';
import ServiceCard from '@/components/ServiceCard';
import FallbackBanner from '@/components/FallbackBanner';

export const dynamic = 'force-static';

export default async function Page() {
  const services = await Catalog.listServices();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Layanan</h1>
      <FallbackBanner />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.slug} service={s as any} />
        ))}
      </div>
    </div>
  );
}
