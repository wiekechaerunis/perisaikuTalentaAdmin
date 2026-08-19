import React, { useState, useEffect, useRef } from "react";
import { X, Search, Check, Plus } from "lucide-react";

export function TagPicker({ label, required, tags, setTags, suggestions, placeholder = "Cari dan tambahkan..." }: {
  label: string; required?: boolean; tags: string[]; setTags: (t: string[]) => void; suggestions: string[]; placeholder?: string;
}) {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const filtered = suggestions.filter(s => s.toLowerCase().includes(input.toLowerCase()) && !tags.includes(s));
  const trimmedInput = input.trim();
  const canCreateNew = trimmedInput.length > 0 && !tags.some(t => t.toLowerCase() === trimmedInput.toLowerCase()) && !suggestions.some(s => s.toLowerCase() === trimmedInput.toLowerCase());
  const totalOptions = filtered.length + (canCreateNew ? 1 : 0);
  useEffect(() => { setActiveIndex(0); }, [input, open]);
  const add = (s: string) => {
    const val = s.trim();
    if (!val || tags.some(t => t.toLowerCase() === val.toLowerCase())) { setInput(""); setOpen(false); return; }
    setTags([...tags, val]);
    setInput("");
    setOpen(false);
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open || totalOptions === 0) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setActiveIndex(i => (i + 1) % totalOptions); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActiveIndex(i => (i - 1 + totalOptions) % totalOptions); }
    else if (e.key === "Enter") { e.preventDefault(); add(activeIndex < filtered.length ? filtered[activeIndex] : trimmedInput); }
    else if (e.key === "Escape") { setOpen(false); }
  };
  return (
    <div ref={ref} className="flex flex-col gap-2 relative">
      <div className="flex items-center gap-1">
        <span className="text-[12px] text-text-darker" style={{ fontFamily: "var(--font-body)" }}>{label}</span>
        {required && <span className="text-danger text-[10px] font-semibold">*</span>}
      </div>
      <div onClick={() => setOpen(true)} className={`bg-white min-h-10 rounded-xl border px-3 py-1.5 flex flex-col gap-1.5 cursor-text transition-colors ${open ? "border-brand-primary" : "border-border-default"}`}>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 items-center">
            {tags.map(tag => (
              <div key={tag} className="bg-[#f6f4f4] border border-border-lighter rounded-full flex items-center gap-1.5 px-2.5 py-1 shrink-0">
                <span className="text-[12px] text-text-default" style={{ fontFamily: "var(--font-body)" }}>{tag}</span>
                <button onClick={e => { e.stopPropagation(); setTags(tags.filter(s => s !== tag)); }}><X size={9} className="text-icon-default" /></button>
              </div>
            ))}
          </div>
        )}
        <div className="flex items-center gap-1.5 min-w-[80px]">
          <Search size={14} className="text-text-lighter shrink-0" />
          <input
            value={input}
            onChange={e => { setInput(e.target.value); setOpen(true); }}
            onFocus={() => setOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder={tags.length === 0 ? placeholder : ""}
            className="flex-1 min-w-0 text-[12px] text-text-darker placeholder-[#777980] outline-none bg-transparent"
            style={{ fontFamily: "var(--font-body)" }}
          />
        </div>
      </div>
      {open && totalOptions > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl border border-border-default shadow-lg z-20 overflow-hidden max-h-[180px] overflow-y-auto">
          {filtered.map((s, i) => (
            <div
              key={s}
              onClick={() => add(s)}
              onMouseEnter={() => setActiveIndex(i)}
              className={`px-3 py-2.5 text-[12px] cursor-pointer transition-colors flex items-center justify-between gap-2 ${i === activeIndex ? "bg-[#ebf2ff]" : "text-text-darker"}`}
              style={{ fontFamily: "var(--font-body)", color: i === activeIndex ? "#383b46" : undefined }}
            >
              <span>{s}</span>
              {i === activeIndex && <Check size={14} className="text-brand-primary shrink-0" strokeWidth={3} />}
            </div>
          ))}
          {canCreateNew && (
            <div
              onClick={() => add(trimmedInput)}
              onMouseEnter={() => setActiveIndex(filtered.length)}
              className={`flex items-center gap-2 px-3 py-2.5 text-[12px] font-medium cursor-pointer transition-colors border-t border-border-lighter ${activeIndex === filtered.length ? "bg-[#ebf2ff]" : ""} text-brand-primary`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Plus size={13} className="shrink-0" />
              Tambah skill baru: &quot;{trimmedInput}&quot;
            </div>
          )}
        </div>
      )}
    </div>
  );
}
