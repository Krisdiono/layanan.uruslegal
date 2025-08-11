// /src/lib/schema.ts
import { z } from "zod";

export const priceBreakdownSchema = z.object({
  label: z.string(),
  amount: z.number(),
});

export const svcSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.string(),
  summary: z.string().optional(),
  price: z.number().optional(),
  breakdown: z.array(priceBreakdownSchema).optional(),
});

export const svcListSchema = z.array(svcSchema);

export type SvcParsed = z.infer<typeof svcSchema>;
