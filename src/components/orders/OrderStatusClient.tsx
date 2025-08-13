"use client";
import { useEffect, useState } from "react";

export default function OrderStatusClient({ id }: { id: string }) {
  const [data, setData] = useState<any>(null);

  async function refresh() {
    try {
      const r = await fetch(`/api/orders/${id}?refresh=true`, { cache: "no-store" });
      if (r.ok) setData(await r.json());
    } catch {}
  }

  useEffect(() => {
    refresh();
    const t = setInterval(refresh, 5000);
    return () => clearInterval(t);
  }, [id]);

  const status = data?.status || "pending";
  return (
    <div className="space-y-2">
      <div>Status: <b className="uppercase">{status}</b></div>
      <pre className="bg-slate-50 p-3 rounded text-xs overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
