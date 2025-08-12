// @ts-nocheck
"use client";
import { useState } from "react";

export default function ChatDrawer(){
  const [open, setOpen] = useState(false);
  const wa = process.env.NEXT_PUBLIC_WA_NUMBER || "6281142677700";
  return (
    <>
      <button onClick={()=>setOpen(true)} className="fixed bottom-5 right-5 btn btn-primary shadow-lg">Chat</button>
      {open && (
        <div className="fixed inset-0 bg-black/30 z-40" onClick={()=>setOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white p-4 shadow-xl" onClick={e=>e.stopPropagation()}>
            <div className="flex items-center justify-between mb-3">
              <div className="text-lg font-semibold">Bantuan</div>
              <button className="btn btn-ghost" onClick={()=>setOpen(false)}>✕</button>
            </div>
            <div className="space-y-2 text-sm">
              <p>Halo! Ada yang bisa kami bantu? Anda juga bisa chat langsung via WhatsApp.</p>
              <a className="btn btn-primary w-full" target="_blank" href={`https://wa.me/${wa}`}>Chat via WhatsApp</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
