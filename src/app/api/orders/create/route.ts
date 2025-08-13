import { NextResponse } from "next/server";
import { upsertOrder, type Order } from "@/lib/orders";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<Order>;
    if (!body?.id) return NextResponse.json({ ok:false, error:"missing id" }, { status:400 });

    const order: Order = {
      id: String(body.id),
      status: (body.status as any) ?? "pending",
      service: body.service as any,
      amounts: body.amounts as any,
      customer: body.customer as any,
      uploadId: body.uploadId,
      files: body.files ?? [],
      midtrans: body.midtrans,
      createdAt: body.createdAt,
      updatedAt: body.updatedAt,
      paidAt: (body as any).paidAt ?? null,
    };
    upsertOrder(order);
    return NextResponse.json({ ok:true, id: order.id });
  } catch (e:any) {
    return NextResponse.json({ ok:false, error: e?.message || "bad_request" }, { status:400 });
  }
}
