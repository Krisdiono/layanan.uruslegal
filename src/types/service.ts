export type Detail = {
  inclusions?: string[];
  process?: string[];
};

export type Layanan = {
  slug: string;
  title: string;
  summary?: string;
  description?: string;
  detail?: Detail;          // optional
  timeline?: string;
  category?: string;
  price?: number | null;
};

// alias opsional
export type Svc = Layanan;
