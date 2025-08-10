// @ts-nocheck
import { NextResponse } from "next/server";

const BASE = process.env.SOLUSI_API_BASE || "";

export async function GET(req: Request, { params }: { params: { path: string[] } }) {
  if (!BASE) return NextResponse.json({ error: "SOLUSI_API_BASE not set" }, { status: 500 });

  const url = new URL(req.url);
  const q = url.search ? url.search : "";
  const upstream = `${BASE}/${(params.path || []).join("/")}${q}`;

  const headers: Record<string, string> = { Accept: "application/json" };
  if (process.env.SOLUSI_API_KEY) {
    headers["Authorization"] = `Bearer ${process.env.SOLUSI_API_KEY}`;
  }

  const res = await fetch(upstream, { headers, cache: "no-store" });
  const ct = res.headers.get("content-type") || "";
  const body = ct.includes("application/json") ? await res.json() : await res.text();

  return new NextResponse(
    ct.includes("application/json") ? JSON.stringify(body) : body,
    { status: res.status, headers: { "content-type": ct } }
  );
}
