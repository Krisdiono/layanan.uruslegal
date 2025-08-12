import { promises as fs } from "fs";
import path from "path";

export type OrderStatus = "initiated" | "success" | "pending" | "error";

export interface OrderRecord {
  id: string;                         // midtrans order_id
  status: OrderStatus;                // success / pending / error / initiated
  createdAt: string;                  // ISO date
  service: { slug: string; title: string; price: number | null };
  amounts: { subtotal: number | null; gatewayFee: number; total: number | null };
  customer: { name: string; email: string; phone?: string };
  uploadId?: string;
  files?: string[];
  midtrans?: any;                     // simpan payload result snap seadanya
}

function uploadDir() {
  const dir = process.env.UPLOAD_DIR || ".uploads";
  return path.resolve(process.cwd(), dir);
}

async function ensureDir(p: string) {
  try { await fs.mkdir(p, { recursive: true }); } catch {}
}

export async function saveOrder(o: OrderRecord) {
  const dir = uploadDir();
  await ensureDir(dir);
  const f = path.join(dir, "orders.json");
  let rows: OrderRecord[] = [];
  try {
    rows = JSON.parse(await fs.readFile(f, "utf8"));
    if (!Array.isArray(rows)) rows = [];
  } catch {}
  rows.push(o);
  await fs.writeFile(f, JSON.stringify(rows, null, 2), "utf8");
  return o;
}
