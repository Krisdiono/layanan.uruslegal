export default function Price({ value, currency = 'IDR' }: { value?: number;
 currency?: string }) {
 if (!value) return null;
 17
const formatted = new Intl.NumberFormat('id-ID', { style: 'currency',
 currency }).format(value);
 return <span className="font-semibold text-slate-800">{formatted}</span>;
 }
