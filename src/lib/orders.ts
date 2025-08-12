export type OrderPayload = {
  id: string;
  status: "success" | "pending" | "error";
  service: { slug: string; title: string; price: number | null };
  amounts: { subtotal: number | null; total: number | null; extras?: number; gatewayFee?: number };
  customer: { name: string; email: string; phone?: string };
  uploadId?: string;
  files?: string[];
  midtrans?: unknown;
};
