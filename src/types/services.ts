// /src/types/service.ts
export type PriceBreakdown = { label: string; amount: number };

export type Svc = {
  id: string;
  slug: string;
  title: string;
  summary?: string;
  price?: number;
  breakdown?: PriceBreakdown[];
  // allow other fields from API without breaking typing
  [k: string]: any;
};
