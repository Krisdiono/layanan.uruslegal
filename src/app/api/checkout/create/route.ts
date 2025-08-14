// src/app/api/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server';

const MIDTRANS_SERVER_KEY = process.env.MIDTRANS_SERVER_KEY!;
const MIDTRANS_IS_PRODUCTION = String(process.env.MIDTRANS_IS_PRODUCTION) === 'true';
const MIDTRANS_SNAP_BASE = MIDTRANS_IS_PRODUCTION
  ? 'https://app.midtrans.com'
  : 'https://app.sandbox.midtrans.com';

function basicAuthHeader() {
  const token = Buffer.from(`${MIDTRANS_SERVER_KEY}:`).toString('base64');
  return `Basic ${token}`;
}

function generateOrderId() {
  const dt = new Date();
  const pad = (n: number) => n.toString().padStart(2, '0');
  const stamp = `${dt.getFullYear()}${pad(dt.getMonth() + 1)}${pad(dt.getDate())}${pad(dt.getHours())}${pad(dt.getMinutes())}${pad(dt.getSeconds())}`;
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `UL-${stamp}-${rand}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const service = body?.service ?? {};
    const rawAmount = body?.amount;

    const amount = Number(rawAmount);
    if (!Number.isFinite(amount) || amount <= 0) {
      return NextResponse.json({ error: 'Invalid total amount', got: rawAmount }, { status: 400 });
    }

    const payload = {
      transaction_details: {
        order_id: generateOrderId(),
        gross_amount: Math.round(amount),
      },
      item_details: [{
        id: service.slug || 'ul-service',
        name: service.title || 'UrusLegal Service',
        price: Math.round(amount),
        quantity: 1,
      }],
      credit_card: { secure: true },
      callbacks: {
        finish: `${process.env.APP_URL || 'http://localhost:3000'}/payment/success`,
      },
      metadata: { service },
    };

    const res = await fetch(`${MIDTRANS_SNAP_BASE}/snap/v1/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': basicAuthHeader(),
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
    });

    if (!res.ok) {
      const t = await res.text();
      return NextResponse.json({ error: 'midtrans_error', status: res.status, body: t }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json({ ok: true, token: data.token, redirect_url: data.redirect_url });
  } catch (e: any) {
    return NextResponse.json({ error: 'server_error', message: e?.message }, { status: 500 });
  }
}
