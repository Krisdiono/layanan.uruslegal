import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const MIDTRANS_SERVER_KEY = process.env.MIDTRANS_SERVER_KEY!;
const MIDTRANS_API_BASE = 'https://api.sandbox.midtrans.com'; // status API

function sha512(text: string) {
  return crypto.createHash('sha512').update(text).digest('hex');
}

async function verifyStatus(order_id: string) {
  const token = Buffer.from(`${MIDTRANS_SERVER_KEY}:`).toString('base64');
  const res = await fetch(`${MIDTRANS_API_BASE}/v2/${order_id}/status`, {
    headers: { authorization: `Basic ${token}` },
    cache: 'no-store',
  });
  if (!res.ok) return null;
  return res.json();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { order_id, status_code, gross_amount, signature_key } = body || {};

    // 1) Verifikasi signature
    const expected = sha512(`${order_id}${status_code}${gross_amount}${MIDTRANS_SERVER_KEY}`);
    const signOk = !!signature_key && signature_key === expected;

    // 2) (Opsional) Re-verify status via Midtrans API
    const status = await verifyStatus(order_id).catch(() => null);

    if (!signOk || !status) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    // TODO (M3): push update ke Perfex (create/update order) menggunakan endpoint private

    // Wajib balas 200 cepat agar Midtrans tidak retry terus
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
