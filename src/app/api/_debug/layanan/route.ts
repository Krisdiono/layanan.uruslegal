import { NextResponse } from "next/server";
import { listLayanan } from "@/lib/solusi";
export async function GET() { return NextResponse.json(await listLayanan()); }

import { NextRequest, NextResponse } from 'next/server';
import { PERFEX_BASE } from '@/lib/perfex';

export async function GET(
  _req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const url = `${PERFEX_BASE}/layanan/${encodeURIComponent(params.slug)}`;
  const res = await fetch(url, { cache: 'no-store' });
  const text = await res.text();
  return NextResponse.json({ url, status: res.status, body: text });
}

