import { z } from "zod";

// Rincian biaya (optional untuk harga transparan)
export const priceBreakdownSchema = z.object({
  label: z.string(),
  amount: z.number(),
});

// Skema 1 layanan
export const svcSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  summary: z.string().optional(),

  // Harga real dari solusi.uruslegal
  price: z.number(),

  // Diskon / potongan harga jika ada
  fee_discount: z.number().optional(),

  // Rincian harga (untuk tab Harga Transparan)
  breakdown: z.array(priceBreakdownSchema).optional(),
});

// Skema list layanan
export const svcListSchema = z.array(svcSchema);

// Type untuk digunakan di komponen
export type SvcParsed = z.infer<typeof svcSchema>;
