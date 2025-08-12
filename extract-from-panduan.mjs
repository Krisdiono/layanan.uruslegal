// node tools/extract-from-panduan.mjs
import fs from "fs";
import path from "path";
import vm from "vm";

const SRC = path.resolve("tools/script.js");
const OUT_DIR = path.resolve("src/data");
fs.mkdirSync(OUT_DIR, { recursive: true });

const AUTO_SUMMARY = true;

function slugify(s) {
  return String(s).toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
function firstSentence(htmlOrText) {
  const plain = String(htmlOrText || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const m = plain.match(/^(.{0,180}?[\.\!\?])\s|^.{0,180}$/);
  return (m && m[1]) ? m[1].trim() : plain.slice(0, 180);
}

/** ambil literal objek knowledgeBase = { ... } tanpa menjalankan script lain */
function extractKnowledgeBaseLiteral(code) {
  const m = code.match(/knowledgeBase\s*=\s*{/);
  if (!m) return null;
  let i = m.index + m[0].lastIndexOf("{");
  let depth = 1;
  while (i < code.length && depth > 0) {
    const ch = code[i++];
    if (ch === "{") depth++;
    else if (ch === "}") depth--;
  }
  if (depth !== 0) return null;
  const objectText = code.slice(m.index + m[0].indexOf("{"), i); // isi di antara { ... }
  // bungkus jadi ekspresi JS utuh
  return "({" + objectText.slice(1, -1) + "})";
}

const raw = fs.readFileSync(SRC, "utf8");
const literal = extractKnowledgeBaseLiteral(raw);
if (!literal) {
  console.error("❌ Tidak bisa menemukan literal 'knowledgeBase = { ... }' di tools/script.js");
  process.exit(1);
}

// evaluasi HANYA literal objeknya di VM kecil yang aman
const kb = vm.runInNewContext(literal, {}, { timeout: 1000 });
if (!kb || typeof kb !== "object") {
  console.error("❌ Gagal evaluasi literal knowledgeBase.");
  process.exit(1);
}

const catalog = [];
const prices = [];

for (const [category, catObj] of Object.entries(kb)) {
  const services = catObj?.services || {};
  for (const [title, s] of Object.entries(services)) {
    const slug = slugify(title);
    const parts = [];
    if (s.definisi) parts.push(String(s.definisi));
    if (s.pentingnya) parts.push(`<p><strong>Pentingnya:</strong> ${s.pentingnya}</p>`);
    const description = parts.join("<hr/>");

    catalog.push({
      slug,
      category,
      title,
      summary: AUTO_SUMMARY ? firstSentence(s.definisi) : "",
      description,
      detail: {
        inclusions: Array.isArray(s.yangDidapat) ? s.yangDidapat : [],
        process: Array.isArray(s.proses) ? s.proses : [],
      },
      timeline: s.timeline || ""
    });

    const base = Number(s.biayaJasa);
    if (!Number.isNaN(base) && base > 0) {
      prices.push({ slug, base_price: base, active: true });
    }
  }
}

fs.writeFileSync(path.join(OUT_DIR, "catalog.json"), JSON.stringify(catalog, null, 2));
fs.writeFileSync(path.join(OUT_DIR, "prices.json"), JSON.stringify(prices, null, 2));

console.log(`✅ Done.
- catalog.json: ${catalog.length} items
- prices.json : ${prices.length} items
→ lokasi: src/data/`);
