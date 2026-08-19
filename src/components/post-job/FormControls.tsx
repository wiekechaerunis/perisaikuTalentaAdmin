import { Check } from "lucide-react";

export function RadioOption({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="flex items-center gap-2">
      <div className="relative size-5 shrink-0">
        <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 20 20">
          {selected
            ? <circle cx="10" cy="10" fill="white" r="7" stroke="#FF6B35" strokeWidth="6" />
            : <circle cx="10" cy="10" fill="white" r="9" stroke="#E6E6E7" strokeWidth="2" />}
        </svg>
      </div>
      <span className="text-[14px] text-text-darker" style={{ fontFamily: "var(--font-body)" }}>{label}</span>
    </button>
  );
}

export function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`relative w-8 h-4 rounded-full shrink-0 transition-colors ${checked ? "bg-[#ff6b35]" : "bg-border-default"}`}
    >
      <span className={`absolute top-0.5 size-3 rounded-full bg-white shadow transition-all ${checked ? "left-[18px]" : "left-0.5"}`} />
    </button>
  );
}

export function Checkbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      onClick={(e) => { e.stopPropagation(); onChange(); }}
      className={`flex items-center justify-center w-4 h-4 rounded border shrink-0 transition-colors ${checked ? "bg-brand-primary border-brand-primary" : "bg-white border-border-default"}`}
    >
      {checked && <Check size={10} className="text-white" strokeWidth={3} />}
    </button>
  );
}
