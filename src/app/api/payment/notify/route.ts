import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  console.log('[MIDTRANS][POST]', body);
  return NextResponse.json({ ok: true });
}

export async function GET() {
  console.log('[MIDTRANS][GET] ping');
  return NextResponse.json({ ok: true });
}
