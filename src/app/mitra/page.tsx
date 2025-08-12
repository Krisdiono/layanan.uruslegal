// @ts-nocheck
"use client";
import { useState } from "react";

export default function MitraPage(){
  const [form, setForm] = useState({ name:"", email:"", phone:"", company:"", message:"" });
  const [ok, setOk] = useState(false);
  const onChange = (k,v)=>setForm(s=>({ ...s, [k]:v }));
  const onSubmit = async (e)=> {
    e.preventDefault();
    const r = await fetch("/api/partners/create", { method:"POST", headers:{ "content-type":"application/json" }, body: JSON.stringify(form) });
    setOk(r.ok);
  };
  return (
    <div className="container mx-auto px-4 py-10 max-w-2xl">
      <h1 className="text-2xl font-semibold mb-4">Daftar Mitra UrusLegal</h1>
      {ok ? (
        <div className="card p-4">Terima kasih, data Anda sudah kami terima. Tim kami akan menghubungi Anda.</div>
      ) : (
      <form className="space-y-3" onSubmit={onSubmit}>
        <input className="input w-full" placeholder="Nama" value={form.name} onChange={e=>onChange("name", e.target.value)} required/>
        <div className="grid md:grid-cols-2 gap-3">
          <input className="input w-full" placeholder="Email" value={form.email} onChange={e=>onChange("email", e.target.value)} required/>
          <input className="input w-full" placeholder="Telepon" value={form.phone} onChange={e=>onChange("phone", e.target.value)} />
        </div>
        <input className="input w-full" placeholder="Perusahaan (opsional)" value={form.company} onChange={e=>onChange("company", e.target.value)} />
        <textarea className="textarea w-full" rows={5} placeholder="Catatan / Rencana Kerja" value={form.message} onChange={e=>onChange("message", e.target.value)} />
        <button className="btn btn-primary">Kirim</button>
      </form>
      )}
    </div>
  );
}
