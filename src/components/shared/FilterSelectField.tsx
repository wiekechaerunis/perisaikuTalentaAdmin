import { ChevronDown, Check } from "lucide-react";

export function FilterSelectField({
  label,
  values,
  options,
  open,
  onToggle,
  onToggleOption,
}: {
  label: string;
  values: string[];
  options: string[];
  open: boolean;
  onToggle: () => void;
  onToggleOption: (v: string) => void;
}) {
  const labelClass = "text-text-default text-[12px] leading-[18px] whitespace-nowrap";
  const fieldClass = "bg-white h-11 rounded-xl border border-border-default flex items-center gap-2 px-4 w-full cursor-pointer hover:border-[#9ca0a8] transition-colors";
  const displayText = values.length === 0
    ? "Pilih..."
    : values.length === 1
    ? values[0]
    : `${values[0]} +${values.length - 1}`;
  return (
    <div className={`flex flex-col flex-1 min-w-0 relative ${label ? "gap-2" : ""}`}>
      {label && <span className={labelClass}>{label}</span>}
      <div className={`${fieldClass} ${open ? "border-brand-primary" : ""}`} onClick={onToggle}>
        <p className={`flex-1 min-w-0 text-[12px] leading-[18px] truncate ${values.length > 0 ? "text-text-default" : "text-border-default"}`}>
          {displayText}
        </p>
        <ChevronDown size={14} className={`shrink-0 transition-transform ${open ? "rotate-180 text-brand-primary" : "text-icon-default"}`} />
      </div>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-1.5 bg-white rounded-xl border border-border-lighter shadow-lg z-10 overflow-hidden max-h-[180px] overflow-y-auto">
          {options.map((opt) => {
            const checked = values.includes(opt);
            return (
              <div
                key={opt}
                onClick={(e) => { e.stopPropagation(); onToggleOption(opt); }}
                className={`flex items-center gap-2.5 px-3 py-2 text-[12px] cursor-pointer hover:bg-[#f3f4f6] transition-colors ${checked ? "text-brand-primary" : "text-text-default"}`}
              >
                <div className={`size-3.5 rounded border flex items-center justify-center shrink-0 transition-colors ${checked ? "bg-brand-primary border-brand-primary" : "border-border-default"}`}>
                  {checked && <Check size={9} className="text-white" strokeWidth={3} />}
                </div>
                {opt}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
