import { NextResponse } from "next/server";
import Catalog from "@/lib/catalog";

export async function GET() {
  const items = (Catalog.listServices() as any[]).map((s) => {
    const price = s?.price ?? s?.sale_price ?? s?.base_price ?? 0;
    return { slug: s.slug, title: s.title, price };
  });
  return NextResponse.json({ count: items.length, items });
}
