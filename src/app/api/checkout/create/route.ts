import { NextRequest, NextResponse } from 'next/server';

const MIDTRANS_SERVER_KEY = process.env.MIDTRANS_SERVER_KEY!;
const MIDTRANS_SNAP_BASE = 'https://app.sandbox.midtrans.com'; // ganti ke prod saat live

function basicAuthHeader(): string {
  const token = Buffer.from(`${MIDTRANS_SERVER_KEY}:`).toString('base64');
  return `Basic ${token}`;
}

function generateOrderId(): string {
  const dt = new Date();
  const pad = (n: number) => n.toString().padStart(2, '0');
  const stamp = `${dt.getFullYear()}${pad(dt.getMonth() + 1)}${pad(dt.getDate())}-${pad(dt.getHours())}${pad(dt.getMinutes())}${pad(dt.getSeconds())}`;
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `UL-${stamp}-${rand}`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const service = body?.service || {};
    const amounts = body?.amounts || {};
    const customer = body?.customer || {};

    const total = Math.round(Number(amounts?.total || 0));
    if (!total || total <= 0) {
      return NextResponse.json({ error: 'Invalid total amount' }, { status: 400 });
    }

    const order_id = generateOrderId();

    const payload = {
      transaction_details: {
        order_id,
        gross_amount: total,
      },
      item_details: [
        {
          id: service?.slug || 'service',
          price: total,
          quantity: 1,
          name: service?.title || 'UrusLegal Service',
        },
      ],
      customer_details: {
        first_name: customer?.name || 'Guest',
        email: customer?.email || 'guest@uruslegal.id',
        phone: customer?.phone || undefined,
      },
      credit_card: { secure: true },
      callbacks: {
        finish: `https://layanan.uruslegal.id/thanks?order_id=${order_id}`,
      },
    };

    const res = await fetch(`${MIDTRANS_SNAP_BASE}/snap/v1/transactions`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: basicAuthHeader(),
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text();
      return NextResponse.json({ error: 'Midtrans error', detail: text }, { status: 502 });
    }

    const data = await res.json(); // { token, redirect_url }
    return NextResponse.json({ order_id, midtrans: data }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Bad Request' }, { status: 400 });
  }
}
