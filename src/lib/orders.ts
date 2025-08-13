// src/lib/orders.ts
import fs from "fs";
import path from "path";

export type Amounts = { subtotal: number|null; total: number|null; extras?: number|null };
export type Service = { slug: string; title: string; price?: number|null };
export type Customer = { name: string; email: string; phone?: string };
export type OrderStatus = "pending" | "success" | "error" | "settlement" | "expire" | "cancel" | "deny";

export type Order = {
  id: string;
  status: OrderStatus;
  service: Service;
  amounts: Amounts;
  customer: Customer;
  uploadId?: string;
  files?: string[];
  midtrans?: any;
  createdAt?: string;
  updatedAt?: string;
  paidAt?: string|null;
};

const DIR  = path.join(process.cwd(), ".uploads");
const FILE = path.join(DIR, "orders.json");

function ensureFile() {
  if (!fs.existsSync(DIR)) fs.mkdirSync(DIR, { recursive: true });
  if (!fs.existsSync(FILE)) fs.writeFileSync(FILE, JSON.stringify({ orders: [] }, null, 2));
}

export function readAll(): { orders: Order[] } {
  ensureFile();
  try {
    const text = fs.readFileSync(FILE, "utf8");
    const data = JSON.parse(text);
    if (!data || !Array.isArray(data.orders)) return { orders: [] };
    return data;
  } catch {
    return { orders: [] };
  }
}

export function writeAll(orders: Order[]) {
  ensureFile();
  fs.writeFileSync(FILE, JSON.stringify({ orders }, null, 2));
}

export function getOrder(id: string): Order | null {
  const { orders } = readAll();
  return orders.find(o => String(o.id) === String(id)) ?? null;
}

export function upsertOrder(o: Order) {
  const data = readAll();
  const i = data.orders.findIndex(x => String(x.id) === String(o.id));
  const now = new Date().toISOString();
  if (i >= 0) {
    data.orders[i] = { ...data.orders[i], ...o, updatedAt: now };
  } else {
    data.orders.push({ ...o, createdAt: now, updatedAt: now });
  }
  writeAll(data.orders);
}

export function updateStatus(id: string, status: OrderStatus, midtrans?: any) {
  const data = readAll();
  const i = data.orders.findIndex(x => String(x.id) === String(id));
  if (i < 0) return false;
  const now = new Date().toISOString();
  data.orders[i] = {
    ...data.orders[i],
    status,
    midtrans: midtrans ?? data.orders[i].midtrans,
    updatedAt: now,
    paidAt: status === "success" ? (data.orders[i].paidAt ?? now) : data.orders[i].paidAt ?? null,
  };
  writeAll(data.orders);
  return true;
}

// Ensure ESM module shape
export {};
