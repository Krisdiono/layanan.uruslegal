import { NextRequest, NextResponse } from 'next/server';

const MIDTRANS_SERVER_KEY = process.env.MIDTRANS_SERVER_KEY || '';
const MIDTRANS_SNAP_BASE = process.env.MIDTRANS_IS_PRODUCTION === 'true'
  ? 'https://app.midtrans.com'
  : 'https://app.sandbox.midtrans.com';

function auth() {
  return 'Basic ' + Buffer.from(`${MIDTRANS_SERVER_KEY}:`).toString('base64');
}
function parseAmount(raw:any):number{
  const n = parseInt(String(raw ?? '').replace(/[^\d]/g,''),10);
  return Number.isFinite(n) ? n : 0;
}
function oid(slug:string){
  const d=new Date(); const p=(n:number)=>String(n).padStart(2,'0');
  return `UL-${slug}-${d.getFullYear()}${p(d.getMonth()+1)}${p(d.getDate())}${p(d.getHours())}${p(d.getMinutes())}${p(d.getSeconds())}-${Math.random().toString(36).slice(2,6).toUpperCase()}`;
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(()=> ({}));
  const slug = body?.service?.slug || 'unknown';
  const title = body?.service?.title || slug;

  const total = parseAmount(body?.amounts?.total ?? body?.amount);
  if (!total || total <= 0) {
    return NextResponse.json({ ok:false, error:'Invalid total amount', got: body?.amounts ?? body?.amount }, { status:400 });
  }

  const payload = {
    transaction_details: { order_id: oid(slug), gross_amount: total },
    item_details: [{ id: slug, name: title, price: total, quantity: 1 }],
    credit_card: { secure: true },
    customer_details: body?.customer || undefined,
  };

  const res = await fetch(`${MIDTRANS_SNAP_BASE}/snap/v1/transactions`, {
    method: 'POST',
    headers: { 'Content-Type':'application/json', Authorization: auth() },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) return NextResponse.json({ ok:false, error: data?.status_message || 'midtrans-error', data }, { status:res.status });
  return NextResponse.json({ ok:true, ...data });
}
