export type Layanan = {
  slug: string;
  title: string;
  summary?: string;
  description?: string;
  detail?: {
    inclusions?: string[];
    process?: string[];
  };
  timeline?: string;
  category?: string;
  price?: number | null;
};

// alias kalau nanti kamu butuh
export type Svc = Layanan;
