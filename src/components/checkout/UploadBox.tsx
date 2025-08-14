"use client";
// @ts-nocheck
import { useState } from "react";

export default function UploadBox() {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className="rounded-xl border-2 border-dashed p-6 text-center">
      <input
        id="upload"
        type="file"
        multiple
        accept=".pdf,.jpg,.jpeg,.png"
        className="hidden"
        onChange={(e) => {
          const list = Array.from(e.target.files || []);
          setFiles(list);
        }}
      />
      <label
        htmlFor="upload"
        className="cursor-pointer inline-block px-4 py-2 rounded-lg border hover:bg-gray-50"
      >
        Pilih File
      </label>
      {files.length > 0 && (
        <ul className="text-sm text-left mt-4 space-y-1">
          {files.map((f, idx) => (
            <li key={idx} className="flex justify-between">
              <span className="truncate">{f.name}</span>
              <span className="text-gray-500">
                {Math.ceil(f.size / 1024)} KB
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
