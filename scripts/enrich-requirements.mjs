import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import * as cheerio from "cheerio";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC = path.join(__dirname, "../data/catalog.json");
const OUT = path.join(__dirname, "../data/catalog.enriched.json");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function extractRequirementsFromHtml(html) {
  const $ = cheerio.load(html);

  // Cari heading "Persyaratan / Syarat / Dokumen yang diperlukan"
  const heading = $("h1,h2,h3,h4")
    .filter((_, el) => {
      const t = $(el).text().trim();
      return /(persyaratan|syarat|dokumen.+(dibutuhkan|diperlukan)|requirements)/i.test(t);
    })
    .first();

  let items = [];
  if (heading.length) {
    // Ambil node setelah heading sampai heading berikutnya
    let node = heading.next();
    while (node.length && !/H[1-4]/i.test(node[0].name || "")) {
      // List bullet
      node.find("li").each((_, li) => items.push($(li).text().trim()));
      // Fallback paragraf
      if (node.is("p")) {
        const txt = node.text().trim();
        if (txt) items.push(txt);
      }
      node = node.next();
    }
  }

  // Fallback lain: cari section dengan id/class terkait
  if (items.length === 0) {
    const sec = $(
      '[id*="persyaratan"], [class*="persyaratan"], [id*="syarat"], [class*="syarat"]'
    );
    sec.find("li").each((_, li) => items.push($(li).text().trim()));
  }

  // Bersihin bullet & whitespace, unikkan
  items = items
    .map((t) => t.replace(/\s+/g, " ").replace(/^[-•\u2022]\s*/, "").trim())
    .filter(Boolean);

  return [...new Set(items)];
}

async function main() {
  const raw = JSON.parse(await fs.readFile(SRC, "utf8"));
  const list = Array.isArray(raw) ? raw : raw?.services || [];
  if (!Array.isArray(list) || list.length === 0) {
    throw new Error("catalog.json kosong / format tidak sesuai.");
  }

  console.log(`Enrich ${list.length} layanan…`);
  let ok = 0,
    miss = 0,
    skip = 0;

  for (const item of list) {
    const url = item.link || item.url;
    if (!url) {
      skip++;
      continue;
    }

    try {
      const res = await fetch(url, {
        headers: { "user-agent": "UrusLegalBot/1.0 (+https://uruslegal.id)" },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const html = await res.text();

      const reqs = extractRequirementsFromHtml(html);

      // Tambahkan field meski kosong agar konsisten
      item.requirements = reqs.length ? reqs : [];

      if (reqs.length) {
        ok++;
        console.log(`✔ ${item.slug || item.title}: ${reqs.length} syarat`);
      } else {
        miss++;
        console.log(`… ${item.slug || item.title}: (tidak ditemukan, set [])`);
      }

      // Throttle biar sopan
      await sleep(300);
    } catch (e) {
      miss++;
      item.requirements = [];
      console.log(`✖ ${item.slug || item.title}: ${e.message}`);
    }
  }

  await fs.writeFile(OUT, JSON.stringify(list, null, 2));
  console.log(`\nSelesai. Found: ${ok}, Missing: ${miss}, Skip(no link): ${skip}`);
  console.log(`Output: ${OUT}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
