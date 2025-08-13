import fs from "fs/promises";
import path from "path";

export type ServiceDetails = {
  inclusions?: string[];
  process?: string[];
  requirements?: string[];
};

export async function loadCatalog() {
  const root = process.cwd();
  const enriched = path.join(root, "data/catalog.enriched.json");
  const base = path.join(root, "data/catalog.json");

  try {
    const buf = await fs.readFile(enriched, "utf8");
    return JSON.parse(buf);
  } catch {
    const buf = await fs.readFile(base, "utf8");
    return JSON.parse(buf);
  }
}
