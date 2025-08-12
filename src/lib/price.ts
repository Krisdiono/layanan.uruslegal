import rows from "@/data/prices.json";

export type PriceRow = {
  slug: string;
  base_price?: number;
  discount_amount?: number;
  discount_percent?: number;
  rfq?: boolean;
  active?: boolean;
};

export function getPrice(slug: string): PriceRow | undefined {
  return (rows as PriceRow[]).find((x) => x.slug === slug && x.active !== false);
}

export function computeFinal(row?: PriceRow) {
  if (!row || row.rfq) return { base: 0, final: 0, discount: 0, rfq: true as const };
  const base = row.base_price || 0;
  const byNom = Math.max(0, base - (row.discount_amount || 0));
  const byPct =
    typeof row.discount_percent === "number"
      ? Math.max(0, base - Math.round(base * (row.discount_percent / 100)))
      : byNom;
  return { base, final: byPct, discount: base - byPct, rfq: false as const };
}
