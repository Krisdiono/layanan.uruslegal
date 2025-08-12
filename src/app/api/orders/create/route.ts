// /src/app/api/orders/create/route.ts
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const ROOT = process.cwd();
const UPLOAD_DIR = path.join(ROOT, ".uploads");
const ORDERS_FILE = path.join(UPLOAD_DIR, "orders.json");

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await fs.mkdir(UPLOAD_DIR, { recursive: true }).catch(() => {});

    let rows: any[] = [];
    try {
      const raw = await fs.readFile(ORDERS_FILE, "utf-8");
      rows = JSON.parse(raw || "[]");
      if (!Array.isArray(rows)) rows = [];
    } catch {
      rows = [];
    }

    rows.push({
      ...body,
      createdAt: new Date().toISOString(),
    });

    await fs.writeFile(ORDERS_FILE, JSON.stringify(rows, null, 2), "utf-8");

    return NextResponse.json({ ok: true, path: ORDERS_FILE, count: rows.length });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || "unknown" }, { status: 500 });
  }
}
