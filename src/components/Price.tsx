export default function Price({
  value,
  currency = 'IDR',
}: {
  value?: number | null;
  currency?: string;
}) {
  if (value === undefined || value === null) return null;
  const formatted = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency,
  }).format(value);
  return <span className="font-semibold text-slate-800">{formatted}</span>;
}
