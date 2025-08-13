// src/app/api/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server';

const MIDTRANS_SERVER_KEY = process.env.MIDTRANS_SERVER_KEY || '';
const MIDTRANS_SNAP_BASE =
  process.env.MIDTRANS_IS_PRODUCTION === 'true'
    ? 'https://app.midtrans.com'
    : 'https://app.sandbox.midtrans.com';

function basicAuth(): string {
  return 'Basic ' + Buffer.from(`${MIDTRANS_SERVER_KEY}:`).toString('base64');
}

function parseAmount(raw: any): number {
  const n = parseInt(String(raw ?? '').replace(/[^\d]/g, ''), 10);
  return Number.isFinite(n) ? n : 0;
}

function generateOrderId(slug: string) {
  const t = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');
  const stamp = `${t.getFullYear()}${pad(t.getMonth() + 1)}${pad(t.getDate())}${pad(
    t.getHours()
  )}${pad(t.getMinutes())}${pad(t.getSeconds())}`;
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `UL-${slug}-${stamp}-${rand}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const slug = body?.service?.slug || 'unknown';
    const title = body?.service?.title || slug;
    const total =
  parseInt(String(body?.amounts?.total ?? body?.amount).replace(/[^\d]/g,''),10) || 0;

if (!total || total <= 0) {
  return NextResponse.json({ ok:false, error:'Invalid total amount' }, { status:400 });
}
    }

    const payload = {
      transaction_details: {
        order_id: generateOrderId(slug),
        gross_amount: total,
      },
      item_details: [
        { id: slug, name: title, price: total, quantity: 1 },
      ],
      credit_card: { secure: true },
      customer_details: body?.customer || undefined,
    };

    const res = await fetch(`${MIDTRANS_SNAP_BASE}/snap/v1/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: basicAuth(),
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: data?.status_message || 'midtrans-error', data },
        { status: res.status }
      );
    }
    return NextResponse.json({ ok: true, ...data });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || 'server-error' },
      { status: 500 }
    );
  }
}
