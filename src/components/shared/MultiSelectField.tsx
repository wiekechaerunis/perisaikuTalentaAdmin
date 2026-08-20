import { useState, useEffect, useRef } from "react";
import { ChevronDown, Check } from "lucide-react";

export function MultiSelectField({
  placeholder,
  options,
  selected,
  onChange,
  disabled,
}: {
  placeholder: string;
  options: string[];
  selected: string[];
  onChange: (v: string[]) => void;
  disabled?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const allSelected = selected.length === 0;

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const toggleOption = (opt: string) => {
    onChange(selected.includes(opt) ? selected.filter(o => o !== opt) : [...selected, opt]);
  };

  const displayText = allSelected ? placeholder : selected.length === 1 ? selected[0] : `${selected.length} dipilih`;

  return (
    <div ref={ref} className={`relative w-full ${disabled ? "opacity-50" : ""}`}>
      <button
        onClick={() => !disabled && setOpen(v => !v)}
        disabled={disabled}
        className="bg-white border border-border-default rounded-xl h-10 w-full px-3 flex items-center justify-between gap-2 hover:border-brand-primary transition-colors disabled:cursor-not-allowed disabled:hover:border-border-default"
      >
        <span className="text-xs text-text-darker truncate" style={{ fontFamily: "var(--font-body)" }}>{displayText}</span>
        <ChevronDown size={14} className="text-icon-default shrink-0" />
      </button>
      {open && !disabled && (
        <div className="absolute z-20 top-[calc(100%+4px)] left-0 bg-white border border-[#e2e8f0] rounded-xl shadow-lg w-full min-w-[200px] p-1.5 flex flex-col gap-0.5 max-h-64 overflow-y-auto">
          <button
            onClick={() => onChange([])}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 text-left text-[13px] transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <span className={`size-4 rounded border flex items-center justify-center shrink-0 ${allSelected ? "bg-brand-primary border-brand-primary" : "border-border-default"}`}>
              {allSelected && <Check size={11} className="text-white" strokeWidth={3} />}
            </span>
            {placeholder}
          </button>
          <div className="my-1 h-px bg-border-lighter" />
          {options.map(opt => {
            const checked = selected.includes(opt);
            return (
              <button
                key={opt}
                onClick={() => toggleOption(opt)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 text-left text-[13px] transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span className={`size-4 rounded border flex items-center justify-center shrink-0 ${checked ? "bg-brand-primary border-brand-primary" : "border-border-default"}`}>
                  {checked && <Check size={11} className="text-white" strokeWidth={3} />}
                </span>
                {opt}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
