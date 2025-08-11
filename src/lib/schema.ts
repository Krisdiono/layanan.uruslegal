import { z } from "zod";

// Rincian biaya (optional untuk harga transparan)
export const priceBreakdownSchema = z.object({
  label: z.string(),
  amount: z.number(),
});

// Skema 1 layanan
export const svcSchema = z.object({
  // ...
  description: z.string().optional(),     // fallback dari root
  detail: z.object({
    description: z.string().optional(),
    inclusions: z.array(z.string()).optional(),
    process: z.array(z.string()).optional(),
  }).optional(),
});

// Skema list layanan
export const svcListSchema = z.array(svcSchema);

// Type untuk digunakan di komponen
export type SvcParsed = z.infer<typeof svcSchema>;



