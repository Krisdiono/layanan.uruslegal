"use client";
// @ts-nocheck
import { useState } from "react";

export default function FormSection() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-lg">Data Pemesan</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-700">Nama Lengkap</label>
          <input
            className="rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="Nama sesuai KTP"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            autoComplete="name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-700">Email</label>
          <input
            type="email"
            className="rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="email@contoh.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-700">Nomor WhatsApp</label>
          <input
            className="rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            placeholder="08xxxxxxxxxx"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
          />
        </div>
      </div>
      <p className="text-xs text-gray-500">
        Data ini akan digunakan untuk invoice dan komunikasi status proses.
      </p>
    </div>
  );
}
