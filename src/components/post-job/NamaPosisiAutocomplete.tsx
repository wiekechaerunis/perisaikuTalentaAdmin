import { useState, useEffect, useRef } from "react";
import { Search, Plus } from "lucide-react";
import { jobRows } from "../../mocks/lowongan";

export function NamaPosisiAutocomplete({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const options = [...new Set(jobRows.map(j => j.nama))];
  const query = value.trim().toLowerCase();
  const matches = query ? options.filter(o => o.toLowerCase().includes(query)) : options;
  const exactMatch = options.some(o => o.toLowerCase() === query);

  useEffect(() => {
    if (!open) return;
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <div className="bg-white h-10 rounded-xl border border-border-default px-3 flex items-center gap-1.5 focus-within:border-brand-primary transition-colors w-full">
        <Search size={16} className="text-text-lighter shrink-0" />
        <input
          type="text"
          maxLength={100}
          value={value}
          onChange={e => { onChange(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          placeholder="Pilih posisi yang ingin di post"
          className="flex-1 min-w-0 text-[12px] text-text-darker placeholder-[#c5c6c9] outline-none bg-transparent"
          style={{ fontFamily: "var(--font-body)" }}
        />
      </div>
      {open && (matches.length > 0 || (query && !exactMatch)) && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl border border-border-default shadow-lg z-20 overflow-hidden max-h-[200px] overflow-y-auto">
          {matches.map(opt => (
            <div
              key={opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`px-3 py-2.5 text-[12px] cursor-pointer hover:bg-[#f3f4f6] transition-colors ${opt === value ? "bg-[#ebf2ff] text-brand-primary font-medium" : "text-text-darker"}`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              {opt}
            </div>
          ))}
          {query && !exactMatch && (
            <div
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-3 py-2.5 text-[12px] text-brand-primary font-medium cursor-pointer hover:bg-[#f3f4f6] transition-colors border-t border-border-lighter"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Plus size={13} className="shrink-0" />
              Buat lowongan baru: &quot;{value.trim()}&quot;
            </div>
          )}
        </div>
      )}
    </div>
  );
}
