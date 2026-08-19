import { Check, X } from "lucide-react";

export function Toast({ title, subtitle, onDismiss }: { title: string; subtitle?: string; onDismiss: () => void }) {
  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-[#0f172a] text-white px-5 py-3.5 rounded-xl flex items-center gap-3 shadow-2xl">
        <div className="bg-[#22c55e] rounded-full size-7 flex items-center justify-center shrink-0">
          <Check size={15} className="text-white" strokeWidth={2.5} />
        </div>
        <div className="flex flex-col">
          <p className="text-[14px] font-semibold" style={{ fontFamily: "var(--font-body)" }}>{title}</p>
          {subtitle && <p className="text-[12px] text-text-subtle" style={{ fontFamily: "var(--font-body)" }}>{subtitle}</p>}
        </div>
        <button onClick={onDismiss} className="ml-2 text-text-muted hover:text-white transition-colors shrink-0">
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

// ── Status toast (success/error pill) ─────────────────────────────────────────

export interface StatusToastItem { id: number; variant: "success" | "error"; message: string }

export function StatusToast({ variant, message, onDismiss }: { variant: "success" | "error"; message: string; onDismiss: () => void }) {
  const isSuccess = variant === "success";
  const color = isSuccess ? "#33893c" : "#f83a1e";
  const bg = isSuccess ? "#fafffb" : "#fff5f5";
  return (
    <div
      className="flex gap-3 items-center px-4 py-3 rounded-xl border whitespace-nowrap shadow-[0px_8px_12px_rgba(0,0,0,0.08)]"
      style={{ backgroundColor: bg, borderColor: color }}
    >
      <div className="rounded-xl size-6 flex items-center justify-center shrink-0" style={{ backgroundColor: color }}>
        {isSuccess ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.6662 3.5L5.25017 9.9162L2.3338 6.99975" stroke="white" strokeLinecap="round" strokeWidth="2" /></svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="white" strokeLinecap="round" strokeWidth="2" /></svg>
        )}
      </div>
      <p className="text-[14px] font-semibold" style={{ color, fontFamily: "var(--font-body)" }}>{message}</p>
      <button onClick={onDismiss} className="bg-white rounded-xl size-6 flex items-center justify-center border shrink-0" style={{ borderColor: color }}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke={color} strokeLinecap="round" strokeWidth="2" /></svg>
      </button>
    </div>
  );
}

export function StatusToastStack({ toasts, onDismiss }: { toasts: StatusToastItem[]; onDismiss: (id: number) => void }) {
  if (toasts.length === 0) return null;
  return (
    <div className="fixed top-6 left-1/2 z-50 flex flex-col gap-2 items-center" style={{ transform: "translateX(-50%)" }}>
      {toasts.map(t => (
        <StatusToast key={t.id} variant={t.variant} message={t.message} onDismiss={() => onDismiss(t.id)} />
      ))}
    </div>
  );
}
