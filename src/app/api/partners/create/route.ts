import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const dir = path.join(process.cwd(), ".uploads");
    const file = path.join(dir, "partners.json");
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const current = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")||"{}") : { partners: [] };
    if (!Array.isArray(current.partners)) current.partners = [];
    current.partners.push({ ...body, createdAt: new Date().toISOString() });
    fs.writeFileSync(file, JSON.stringify(current, null, 2));
    return NextResponse.json({ ok:true });
  } catch (e:any) {
    return NextResponse.json({ ok:false, error: e?.message||"bad_request" }, { status:400 });
  }
}
