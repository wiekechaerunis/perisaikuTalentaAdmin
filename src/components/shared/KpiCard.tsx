import { useState, useEffect } from "react";
import { Info, ChevronDown } from "lucide-react";

function useCountUp(target: number, duration = 1400) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTs: number | null = null;
    const tick = (ts: number) => {
      if (!startTs) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration]);
  return count;
}

export function KpiCard({ label, value, suffix, onClick, breakdown, description }: { label: string; value: number; suffix: string; onClick?: () => void; breakdown?: { label: string; value: number; displayValue?: string; color: string }[]; description?: string }) {
  const count = useCountUp(value);
  const [breakdownOpen, setBreakdownOpen] = useState(false);
  const tooltip = label === "Total Lowongan"
    ? <>Jumlah seluruh lowongan tanpa membedakan statusnya.</>
    : label === "Total Pelamar"
      ? <>Total seluruh pelamar yang masuk ke semua lowongan sejak awal.</>
      : label === "Kuota Monetasi"
        ? <>Sisa kuota Talent Search yang dapat digunakan bulan ini.</>
        : label === "Waktu Hiring Rata-rata"
          ? <>Rata-rata waktu dari kandidat melamar hingga resmi diterima.</>
          : null;
  return (
    <div
      onClick={onClick}
      className={`relative bg-white flex-1 min-w-0 rounded-2xl border border-border-lighter shadow-[0px_4px_6px_rgba(0,0,0,0.02)] p-6 flex flex-col gap-3 transition-colors ${onClick ? "cursor-pointer hover:border-brand-primary" : ""}`}
    >
      <div className="flex items-center gap-1.5">
        <p className="text-text-lighter text-sm" style={{ fontFamily: "var(--font-body)" }}>{label}</p>
        {tooltip && <div className="group relative flex items-center">
          <button type="button" aria-label={`Informasi ${label}`} onClick={event => event.stopPropagation()} className="text-[#9b9ca1] hover:text-brand-primary"><Info size={14} /></button>
          <div role="tooltip" className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 w-[240px] -translate-x-1/2 rounded-lg bg-[#252b3a] px-3 py-2 text-[11px] leading-5 text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
            {tooltip}
          </div>
        </div>}
      </div>
      <p className="flex items-center gap-2 text-brand-primary text-[21px] font-bold leading-[26px]" style={{ fontFamily: "var(--font-body)" }}>
        <span>{count.toLocaleString("id-ID")}{suffix}</span>
      </p>
      {description && <p className="mt-2 max-w-[190px] text-[11px] leading-[18px] text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>{description}</p>}
      {breakdown && (
        <div className="mt-2">
          <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-[#eef0f3]">
            {breakdown.map(item => (
              <span key={item.label} className="h-full" title={`${item.label}: ${item.displayValue ?? item.value.toLocaleString("id-ID")}`} style={{ width: `${(item.value / breakdown.reduce((total, current) => total + current.value, 0)) * 100}%`, backgroundColor: item.color }} />
            ))}
          </div>
          <div className="mt-4 flex items-center gap-x-3 gap-y-2 text-[10px]" style={{ fontFamily: "var(--font-body)" }}>
            {breakdown.slice(0, breakdown.length > 3 ? 2 : breakdown.length).map(item => (
              <span key={item.label} className="flex min-w-0 items-center gap-1.5 text-text-darker">
                <span className="size-2 shrink-0 rounded-full" style={{ backgroundColor: item.color }} />
                <strong>{item.displayValue ?? item.value.toLocaleString("id-ID")}</strong>
                <span className="truncate">{item.label}</span>
              </span>
            ))}
            {breakdown.length > 3 && (
              <button type="button" onClick={event => { event.stopPropagation(); setBreakdownOpen(open => !open); }} className="ml-auto flex shrink-0 items-center gap-0.5 rounded-full border border-[#cbd8f5] px-2 py-0.5 text-[9px] font-semibold text-[#3d4a68] hover:bg-[#f4f7ff]">
                +{breakdown.length - 2} status <ChevronDown size={10} className={`transition-transform ${breakdownOpen ? "rotate-180" : ""}`} />
              </button>
            )}
          </div>
          {breakdown.length > 3 && breakdownOpen && (
            <div onClick={event => event.stopPropagation()} className="absolute right-4 top-[calc(100%-18px)] z-40 w-[220px] rounded-xl border border-[#e2e8f0] bg-white p-3 shadow-[0_12px_30px_rgba(15,23,42,0.14)]" style={{ fontFamily: "var(--font-body)" }}>
              <p className="mb-2 text-[11px] font-bold text-text-default">Semua status pelamar</p>
              <div className="space-y-2.5">
                {breakdown.map(item => (
                  <div key={item.label} className="flex items-center justify-between gap-3 text-[11px]">
                    <span className="flex items-center gap-2 text-text-muted"><span className="size-2 rounded-full" style={{ backgroundColor: item.color }} />{item.label}</span>
                    <strong className="text-text-default">{item.displayValue ?? item.value.toLocaleString("id-ID")}</strong>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
