import { useState, useEffect, useRef } from "react";
import { ChevronDown, Search, Plus } from "lucide-react";

export function PostJobSelect({ value, options, placeholder, onChange, creatable = false }: {
  value: string; options: string[]; placeholder: string; onChange: (v: string) => void; creatable?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [customOptions, setCustomOptions] = useState<string[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [open]);
  const allOptions = [...options, ...customOptions];
  const filteredOptions = creatable ? allOptions.filter(option => option.toLowerCase().includes(query.trim().toLowerCase())) : allOptions;
  const trimmedQuery = query.trim();
  const canCreate = creatable && trimmedQuery.length > 0 && !allOptions.some(option => option.toLowerCase() === trimmedQuery.toLowerCase());
  const createOption = () => {
    if (!canCreate) return;
    setCustomOptions(current => [...current, trimmedQuery]);
    onChange(trimmedQuery);
    setQuery("");
    setOpen(false);
  };
  return (
    <div ref={ref} className="relative flex-1 min-w-0">
      <div onClick={() => { setOpen(v => !v); setQuery(""); }} className={`bg-white h-10 rounded-xl border flex items-center gap-2 px-3 cursor-pointer hover:border-[#9ca0a8] transition-colors ${open ? "border-brand-primary" : "border-border-default"}`}>
        <span className={`flex-1 min-w-0 text-[12px] truncate ${value ? "text-text-darker" : "text-border-default"}`} style={{ fontFamily: "var(--font-body)" }}>{value || placeholder}</span>
        <ChevronDown size={16} className={`shrink-0 transition-transform ${open ? "rotate-180 text-brand-primary" : "text-icon-default"}`} />
      </div>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl border border-border-default shadow-lg z-20 overflow-hidden max-h-[180px] overflow-y-auto">
          {creatable && (
            <div className="sticky top-0 z-10 border-b border-border-lighter bg-white p-2">
              <div className="flex h-9 items-center gap-2 rounded-lg border border-border-default px-2.5 focus-within:border-brand-primary">
                <Search size={14} className="shrink-0 text-text-lighter" />
                <input autoFocus value={query} onChange={event => setQuery(event.target.value)} onKeyDown={event => { if (event.key === "Enter") { event.preventDefault(); createOption(); } }} placeholder="Cari atau tambah kategori" className="min-w-0 flex-1 bg-transparent text-[12px] text-text-darker outline-none placeholder:text-[#9b9ca1]" style={{ fontFamily: "var(--font-body)" }} />
              </div>
            </div>
          )}
          {filteredOptions.map(opt => (
            <div key={opt} onClick={() => { onChange(opt); setOpen(false); }}
              className={`px-3 py-2.5 text-[12px] cursor-pointer hover:bg-[#f3f4f6] transition-colors ${opt === value ? "bg-[#ebf2ff] text-brand-primary font-medium" : "text-text-darker"}`}
              style={{ fontFamily: "var(--font-body)" }}>{opt}</div>
          ))}
          {canCreate && (
            <button type="button" onClick={createOption} className="flex w-full items-center gap-2 border-t border-border-lighter px-3 py-2.5 text-left text-[12px] font-semibold text-brand-primary transition-colors hover:bg-[#f3f6ff]" style={{ fontFamily: "var(--font-body)" }}>
              <Plus size={14} /> Tambah kategori “{trimmedQuery}”
            </button>
          )}
          {creatable && filteredOptions.length === 0 && !canCreate && (
            <p className="px-3 py-3 text-center text-[12px] text-[#9b9ca1]">Kategori tidak ditemukan</p>
          )}
        </div>
      )}
    </div>
  );
}
