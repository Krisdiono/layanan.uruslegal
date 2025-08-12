import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();
  const t = nodemailer.createTransport({
    host: "smtp.office365.com", port: 587, secure: false,
    auth: { user: "bantuan@uruslegal.id", pass: process.env.OFFICE365_PASS! }
  });
  await t.sendMail({
    from: "UrusLegal <bantuan@uruslegal.id>",
    to: "bantuan@uruslegal.id",
    subject: "[Mitra] Pendaftaran baru",
    text: JSON.stringify(body, null, 2)
  });
  return NextResponse.json({ ok: true });
}
