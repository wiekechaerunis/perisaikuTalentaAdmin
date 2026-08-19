import React from "react";
import { ChevronDown } from "lucide-react";

export function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <div className="flex items-center gap-0.5">
      <span
        className="text-text-darker text-xs"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {children}
      </span>
      {required && (
        <span className="text-danger text-[10px] font-semibold" style={{ fontFamily: "var(--font-body)" }}>
          *
        </span>
      )}
    </div>
  );
}

export function TextInput({
  placeholder,
  value,
  onChange,
  type = "text",
  prefix,
  suffix,
  error,
}: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  error?: boolean;
}) {
  return (
    <div className={`relative bg-white border rounded-xl h-10 w-full transition-colors focus-within:border-brand-primary ${error ? "border-danger" : "border-border-default"}`}>
      <div className="flex items-center h-full px-3 gap-2">
        {prefix && <span className="text-text-darker text-xs font-medium shrink-0" style={{ fontFamily: "var(--font-body)" }}>{prefix}</span>}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-xs text-text-darker placeholder-[#c5c6c9] min-w-0"
          style={{ fontFamily: "var(--font-body)" }}
        />
        {suffix}
      </div>
    </div>
  );
}

export function SelectInput({
  placeholder,
  value,
  onChange,
  options,
  error,
}: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  error?: boolean;
}) {
  return (
    <div className={`relative bg-white border rounded-xl h-10 w-full transition-colors focus-within:border-brand-primary ${error ? "border-danger" : "border-border-default"}`}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none w-full h-full px-3 bg-transparent outline-none text-xs min-w-0 cursor-pointer"
        style={{
          fontFamily: "var(--font-body)",
          color: value ? "#4c4f59" : "#c5c6c9",
        }}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} style={{ color: "#4c4f59" }}>
            {o}
          </option>
        ))}
      </select>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <ChevronDown size={14} className="text-icon-default" />
      </div>
    </div>
  );
}

export function TextareaInput({
  placeholder,
  value,
  onChange,
  rows = 4,
}: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  return (
    <div className="relative bg-white border border-border-default rounded-xl w-full focus-within:border-brand-primary transition-colors">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full bg-transparent outline-none text-xs text-text-darker placeholder-[#c5c6c9] p-3 resize-none"
        style={{ fontFamily: "var(--font-body)" }}
      />
    </div>
  );
}

// ─── Step Progress Bar ────────────────────────────────────────────────────────

export function StepProgress({ step, total }: { step: number; total: number }) {
  const pct = (step / total) * 100;
  return (
    <div className="flex flex-col gap-2 w-full">
      <div
        className="bg-[#ebf2ff] flex items-center justify-center px-2.5 py-1 rounded-full self-start"
      >
        <p
          className="text-brand-primary text-xs font-medium"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Langkah {step} dari {total}
        </p>
      </div>
      <div className="bg-[#f6f4f4] h-1 rounded-full w-full">
        <div
          className="bg-[#ff6b35] h-full rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

// ─── Password Strength ────────────────────────────────────────────────────────

function checkPasswordStrength(pw: string): number {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score;
}

const STRENGTH_CONFIG: Record<number, { bars: string[]; label: string; labelColor: string }> = {
  0: { bars: ["#f6f4f4", "#f6f4f4", "#f6f4f4", "#f6f4f4"], label: "", labelColor: "#777980" },
  1: { bars: ["#f83a1e", "#f6f4f4", "#f6f4f4", "#f6f4f4"], label: "Lemah", labelColor: "#777980" },
  2: { bars: ["#ffb40f", "#ffb40f", "#f6f4f4", "#f6f4f4"], label: "Cukup", labelColor: "#9b9ca1" },
  3: { bars: ["#6acd75", "#6acd75", "#6acd75", "#f6f4f4"], label: "Kuat", labelColor: "#9b9ca1" },
  4: { bars: ["#6acd75", "#6acd75", "#6acd75", "#6acd75"], label: "Sangat Kuat", labelColor: "#9b9ca1" },
};

export function PasswordStrength({ password }: { password: string }) {
  if (!password) return (
    <div className="flex gap-2.5 w-full">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="h-1 flex-1 rounded-full bg-[#f6f4f4]" />
      ))}
    </div>
  );

  const score = checkPasswordStrength(password);
  const { bars, label, labelColor } = STRENGTH_CONFIG[score];

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex gap-2.5 w-full">
        {bars.map((color, i) => (
          <div
            key={i}
            className="h-1 flex-1 rounded-full transition-colors duration-300"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      {label && (
        <p
          className="text-xs leading-[18px]"
          style={{ fontFamily: "var(--font-body)", color: labelColor }}
        >
          {label}
        </p>
      )}
    </div>
  );
}

// ─── Error message component ──────────────────────────────────────────────────

export function FieldError({ msg }: { msg: string | undefined }) {
  if (!msg) return null;
  return (
    <p className="text-danger text-[11px] leading-4" style={{ fontFamily: "var(--font-body)" }}>
      {msg}
    </p>
  );
}
