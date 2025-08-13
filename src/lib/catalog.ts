import "server-only";
import { promises as fs } from "fs";
import path from "path";

export type ServiceItem = {
  title?: string; slug?: string; summary?: string; description?: string; price?: number;
  detail?: { inclusions?: string[]; process?: string[]; persyaratan?: string[]; requirements?: string[]; };
  persyaratan?: string[]; requirements?: string[]; [key: string]: any;
};

async function readJson(candidatePaths: string[]) {
  for (const p of candidatePaths) {
    try { return JSON.parse(await fs.readFile(p, "utf8")); } catch { /* next */ }
  }
  return null;
}

export async function loadCatalog(): Promise<ServiceItem[]> {
  const root = process.cwd();
  const candidates = [
    path.join(root, "data", "catalog.json"),
    path.join(root, "src", "data", "catalog.json"),
    path.join(root, "data", "services.json"),
    path.join(root, "src", "data", "services.json"),
  ];
  const j = await readJson(candidates);
  if (!j) return [];
  const arr = Array.isArray(j) ? j : (j.services ?? []);
  return Array.isArray(arr) ? arr : [];
}
