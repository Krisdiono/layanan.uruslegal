import { NextRequest, NextResponse } from "next/server";
import { mkdir, writeFile } from "fs/promises";
import path from "path";

function sanitize(name: string) {
  return String(name || "file").replace(/[^a-zA-Z0-9._-]/g, "_");
}

export async function POST(req: NextRequest) {
  try {
    const { serviceSlug, customer, files } = await req.json();
    const id = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
    const root = process.env.UPLOAD_DIR || ".uploads";
    const dir = path.join(process.cwd(), root, `${serviceSlug}-${id}`);
    await mkdir(dir, { recursive: true });

    const MAX_FILES = 8;
    const MAX_SIZE = 10 * 1024 * 1024; // 10MB
    const uploaded: string[] = [];

    if (Array.isArray(files)) {
      for (const f of files.slice(0, MAX_FILES)) {
        const size = Number(f?.size) || 0;
        if (!f?.data || size > MAX_SIZE) continue;
        const name = sanitize(f?.name);
        const buf = Buffer.from(String(f.data), "base64");
        await writeFile(path.join(dir, name), buf);
        uploaded.push(name);
      }
    }

    const meta = {
      serviceSlug,
      customer,
      uploaded,
      createdAt: new Date().toISOString(),
    };
    await writeFile(
      path.join(dir, "meta.json"),
      Buffer.from(JSON.stringify(meta, null, 2)),
    );

    return NextResponse.json({ ok: true, id, files: uploaded });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message || "upload-failed" },
      { status: 400 },
    );
  }
}
