import type { MetadataRoute } from 'next';
import { listServices } from '@/lib/perfex';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://layanan.uruslegal.id';
  const items: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: 'daily', priority: 1 },
  ];

  try {
    const services = await listServices();
    for (const s of services) {
      items.push({
        url: `${base}/layanan/${s.slug}`,
        changeFrequency: 'weekly',
        priority: 0.8,
        lastModified: new Date(),
      });
    }
  } catch {
    // silent fallback: tetap return homepage saja
  }

  return items;
}
