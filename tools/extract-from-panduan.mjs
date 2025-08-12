// node tools/extract-from-panduan.mjs
import fs from "fs";
import path from "path";
import vm from "vm";

const SRC = path.resolve("tools/script.js");     // <-- file panduan kamu
const OUT_DIR = path.resolve("src/data");
fs.mkdirSync(OUT_DIR, { recursive: true });

const AUTO_SUMMARY = true; // true = ambil kalimat pertama dari definisi

function slugify(s) {
  return String(s)
    .toLowerCase()
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
  const m = plain.match(/^(.{0,180}?[\.\!\?])\s|^.{0,180}$/); // max ~180 chars
  return (m && m[1]) ? m[1].trim() : plain.slice(0, 180);
}

// Load tools/script.js yang mendefinisikan global `knowledgeBase`
const code = fs.readFileSync(SRC, "utf8");
const sandbox = { knowledgeBase: undefined, console };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

if (!sandbox.knowledgeBase) {
  console.error("❌ Gagal membaca knowledgeBase dari tools/script.js");
  process.exit(1);
}

const catalog = [];
const prices = [];

for (const [category, catObj] of Object.entries(sandbox.knowledgeBase)) {
  const services = catObj?.services || {};
  for (const [title, s] of Object.entries(services)) {
    const slug = slugify(title);
    const descParts = [];
    if (s.definisi) descParts.push(String(s.definisi));
    if (s.pentingnya) descParts.push(`<p><strong>Pentingnya:</strong> ${s.pentingnya}</p>`);
    const description = descParts.join("<hr/>");

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
