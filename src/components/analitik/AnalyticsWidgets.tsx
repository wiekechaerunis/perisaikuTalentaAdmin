import React, { useState, useRef, useEffect } from "react";
import { Calendar, Info, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { format, parse, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isSameDay, isWithinInterval, addMonths, subMonths, isBefore, addDays } from "date-fns";
import usersCountIcon from "../../assets/icons/users.svg";

export interface DateRange { start: Date | null; end: Date | null }

export function AnalyticsStatCard({ label, value, sublabel, muted }: { label: string; value: string; sublabel: string; muted?: boolean }) {
  return (
    <div className="bg-white flex-1 min-w-0 rounded-2xl border border-border-lighter shadow-[0px_4px_6px_rgba(0,0,0,0.02)] p-6 flex flex-col gap-3">
      <p className="text-text-lighter text-sm whitespace-nowrap" style={{ fontFamily: "var(--font-body)" }}>{label}</p>
      <p className={`text-[21px] font-bold leading-[26px] whitespace-nowrap ${muted ? "text-text-lighter" : "text-text-default"}`} style={{ fontFamily: "var(--font-body)" }}>{value}</p>
      <p className="text-text-lighter text-xs whitespace-nowrap" style={{ fontFamily: "var(--font-body)" }}>{sublabel}</p>
    </div>
  );
}

export const ANALYTICS_TREND_LABELS: Record<"mingguan" | "bulanan", string[]> = {
  mingguan: ["Minggu 1", "Minggu 2", "Minggu 3", "Minggu 4"],
  bulanan: ["Bulan 1", "Bulan 2", "Bulan 3", "Bulan 4"],
};

export function AnalyticsTrendEmptyChart({ view, onChangeRange }: { view: "mingguan" | "bulanan"; onChangeRange?: () => void }) {
  if (view === "bulanan") {
    return (
      <div className="flex min-h-[250px] w-full flex-col items-center justify-center gap-3 rounded-xl bg-[#f9fafb] px-6 text-center">
        <Calendar size={42} strokeWidth={1.5} className="text-[#9ca3af]" />
        <p className="text-[15px] font-bold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>Data belum cukup untuk tren bulanan</p>
        <p className="text-[13px] text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>Pilih rentang minimal 3 bulan untuk melihat tren bulanan</p>
        <button onClick={(event) => { event.stopPropagation(); onChangeRange?.(); }} className="mt-1 h-10 rounded-full border-[1.5px] border-brand-primary bg-white px-5 text-[13px] font-bold text-brand-primary transition-colors hover:bg-[#eef3ff]" style={{ fontFamily: "var(--font-body)" }}>
          Ubah Rentang Tanggal
        </button>
      </div>
    );
  }
  return (
    <div className="h-[220px] relative w-full">
      <div className="absolute inset-0 flex gap-5 opacity-30">
        <div className="flex flex-col justify-between h-40 w-10 text-right text-[12px] text-text-lighter shrink-0" style={{ fontFamily: "var(--font-body)" }}>
          {["200", "150", "100", "50", "0"].map(v => <span key={v}>{v}</span>)}
        </div>
        <div className="flex-1 min-w-0 flex flex-col h-full">
          <div className="h-40 w-full flex flex-col justify-between">
            {[0, 1, 2, 3, 4].map(i => <div key={i} className="h-px w-full bg-border-lighter" />)}
          </div>
          <div className="flex items-start justify-between pt-3 text-[12px] text-text-lighter w-full" style={{ fontFamily: "var(--font-body)" }}>
            {ANALYTICS_TREND_LABELS[view].map(l => <span key={l}>{l}</span>)}
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 w-[300px] text-center">
        <p className="text-[16px] font-bold text-border-default" style={{ fontFamily: "var(--font-body)" }}>Belum ada data</p>
        <p className="text-[12px] text-border-default" style={{ fontFamily: "var(--font-body)" }}>Data akan muncul setelah ada pelamar yang masuk</p>
      </div>
    </div>
  );
}

export const ANALYTICS_WEEKLY_POINTS = [58, 198, 123, 181, 91, 157, 112, 190, 146, 205, 132, 176, 104];
export const ANALYTICS_MONTHLY_POINTS = [690, 490, 760, 610, 825, 570, 710, 655, 790, 735, 840, 680];
export const ANALYTICS_MONTH_NAMES = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

export function AnalyticsTrendChart({ factor = 1, view, selectedRange, customStartDate, customEndDate }: { factor?: number; view: "mingguan" | "bulanan"; selectedRange: string; customStartDate: string; customEndDate: string }) {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const chartAreaRef = useRef<HTMLDivElement>(null);
  const [measuredWidth, setMeasuredWidth] = useState(1128);
  useEffect(() => {
    const el = chartAreaRef.current;
    if (!el) return;
    const observer = new ResizeObserver(entries => {
      const w = entries[0]?.contentRect.width;
      if (w) setMeasuredWidth(w);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const isCustomRange = !ANALYTICS_DATE_RANGE_OPTIONS.includes(selectedRange);
  const rangeDays = isCustomRange
    ? Math.max(1, Math.ceil((new Date(customEndDate).getTime() - new Date(customStartDate).getTime()) / 86400000) + 1)
    : selectedRange === "1 tahun terakhir" ? 365 : selectedRange === "6 bulan terakhir" ? 183 : selectedRange === "3 bulan terakhir" ? 92 : 30;
  const pointCount = view === "mingguan" ? Math.max(1, Math.ceil(rangeDays / 7)) : Math.max(1, Math.ceil(rangeDays / 30));
  const visiblePointLimit = 8;
  // The viewBox width must match the SVG's actual rendered pixel width exactly, or
  // preserveAspectRatio="none" stretches/squishes everything non-uniformly — turning
  // the round point markers and tooltip corners into ellipses. When the chart needs to
  // overflow (more points than fit), widen the viewBox to the same value driving that
  // wider layout below; otherwise use the real measured width so the mapping stays 1:1.
  const width = pointCount > visiblePointLimit ? pointCount * 145 : measuredWidth;
  const height = 300;
  const plotTop = 24;
  const plotBottom = 238;
  const sourcePoints = view === "mingguan" ? ANALYTICS_WEEKLY_POINTS : ANALYTICS_MONTHLY_POINTS;
  const chartValues = Array.from({ length: pointCount }, (_, index) => Math.round(sourcePoints[index % sourcePoints.length] * factor));
  const maxValue = view === "mingguan" ? Math.max(200, Math.ceil(Math.max(...chartValues) / 50) * 50) : Math.max(800, Math.ceil(Math.max(...chartValues) / 200) * 200);
  const rangeEnd = isCustomRange ? new Date(`${customEndDate}T00:00:00`) : new Date(2026, 7, 12);
  const labels = view === "mingguan"
    ? chartValues.map((_, index) => `Minggu ${index + 1}`)
    : chartValues.map((_, index) => {
        const date = new Date(rangeEnd.getFullYear(), rangeEnd.getMonth() - (pointCount - 1 - index), 1);
        return `${ANALYTICS_MONTH_NAMES[date.getMonth()]} ${date.getFullYear()}`;
      });
  const points = chartValues.map((value, index) => {
    const x = chartValues.length === 1 ? width / 2 : 28 + (index * (width - 60)) / (chartValues.length - 1);
    const y = plotBottom - (value / maxValue) * (plotBottom - plotTop);
    return { x, y, value };
  });
  const line = points.map(point => `${point.x},${point.y}`).join(" ");
  const yStep = maxValue / 4;

  return (
    <div className="h-[320px] w-full min-w-0 overflow-x-auto pb-2" style={{ scrollbarWidth: "thin", scrollbarColor: "#d7dbe2 transparent" }}>
      <div className="flex h-[300px]" style={{ width: pointCount > visiblePointLimit ? `${(pointCount / visiblePointLimit) * 100}%` : "100%", minWidth: pointCount > visiblePointLimit ? 1200 : undefined }}>
      <div className="sticky left-0 z-10 h-[300px] w-[72px] shrink-0 bg-white">
        {[maxValue, yStep * 3, yStep * 2, yStep, 0].map((value, index) => {
          const y = plotTop + (index * (plotBottom - plotTop)) / 4;
          return <span key={value} className="absolute right-3 -translate-y-1/2 text-[12px] text-text-lighter" style={{ top: y, fontFamily: "var(--font-body)" }}>{Number.isInteger(value) ? value : value.toFixed(1)}</span>;
        })}
      </div>
      <div ref={chartAreaRef} className="h-[300px] min-w-0 flex-1">
      <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none" className="block h-full w-full overflow-visible" role="img" aria-label={`Grafik tren pelamar ${view}`}>
        {[0, yStep, yStep * 2, yStep * 3, maxValue].map((value) => {
          const y = plotBottom - (value / maxValue) * (plotBottom - plotTop);
          return <line key={value} x1="0" x2={width - 32} y1={y} y2={y} stroke="#dfe3e8" strokeDasharray={value === 0 || value === maxValue ? "0" : "5 6"} />;
        })}
        <polyline points={line} fill="none" stroke="#2b81f3" strokeWidth="4" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />
        {points.map((point, index) => (
          <g key={index} onMouseEnter={() => setHoveredPoint(index)} onMouseLeave={() => setHoveredPoint(null)} className="cursor-pointer">
            <circle cx={point.x} cy={point.y} r="15" fill="transparent" />
            <circle cx={point.x} cy={point.y} r="6" fill="white" stroke="#2b81f3" strokeWidth="4" vectorEffect="non-scaling-stroke" />
          </g>
        ))}
        {labels.map((label, index) => (
          <text key={`${label}-${index}`} x={points[index].x} y="277" textAnchor={index === 0 ? "start" : index === labels.length - 1 ? "end" : "middle"} fill="#777980" fontSize="15">{view === "bulanan" ? label.split(" ")[0] : label}</text>
        ))}
        {hoveredPoint !== null && (() => {
          const point = points[hoveredPoint];
          const tooltipWidth = 118;
          const tooltipX = Math.max(8, Math.min(point.x - tooltipWidth / 2, width - tooltipWidth - 8));
          const tooltipY = Math.max(4, point.y - 82);
          return <g pointerEvents="none"><rect x={tooltipX} y={tooltipY} width={tooltipWidth} height="66" rx="9" fill="#1e293b" /><text x={tooltipX + 14} y={tooltipY + 26} fill="white" fontSize="14" fontWeight="600">{labels[hoveredPoint]}</text><text x={tooltipX + 14} y={tooltipY + 50} fill="#94a3b8" fontSize="13">{point.value} Pelamar</text></g>;
        })()}
      </svg>
      </div>
      </div>
    </div>
  );
}

export const ANALYTICS_JOB_ROWS = [
  { nama: "Backend Engineer", pelamar: 342, konversi: "32%", benchmark: "Di atas rata-rata", waktu: "12 Hari", status: "Diterbitkan" },
  { nama: "Product Designer", pelamar: 287, konversi: "24%", benchmark: "Di atas rata-rata", waktu: "15 Hari", status: "Diterbitkan" },
  { nama: "Sales Executive", pelamar: 245, konversi: "18%", benchmark: "Rata-rata", waktu: "14 Hari", status: "Diterbitkan" },
  { nama: "Data Analyst", pelamar: 198, konversi: "12%", benchmark: "Di bawah rata-rata", waktu: "18 Hari", status: "Ditutup" },
  { nama: "Product Manager", pelamar: 176, konversi: "9%", benchmark: "Di bawah rata-rata", waktu: "21 Hari", status: "Ditutup" },
];

export const ANALYTICS_DATE_RANGE_OPTIONS = ["30 hari terakhir", "3 bulan terakhir", "6 bulan terakhir", "1 tahun terakhir"];
export const ANALYTICS_SOURCE_DATA = [
  { label: "Melamar langsung", value: 748 },
  { label: "Diundang recruiter", value: 312 },
  { label: "Sumber lainnya", value: 188 },
];
export const ANALYTICS_DROPOFF_REASONS = [
  { label: "Ekspektasi gaji terlalu tinggi", value: 42, color: "#2b81f3" },
  { label: "Komunikasi kurang baik", value: 27, color: "#f97316" },
  { label: "Lainnya", value: 31, color: "#94a3b8" },
];

export const ANALYTICS_PROVINCES = [
  { label: "DKI Jakarta", value: 420 },
  { label: "Jawa Barat", value: 318 },
  { label: "Jawa Timur", value: 205 },
  { label: "Banten", value: 112 },
  { label: "Jawa Tengah", value: 86 },
  { label: "Sumatera Utara", value: 51 },
  { label: "DI Yogyakarta", value: 34 },
  { label: "Bali", value: 22 },
];
export const ANALYTICS_AGES = [{ label: "18–21", value: 164 }, { label: "22–28", value: 486 }, { label: "29–35", value: 352 }, { label: "36–45", value: 181 }, { label: "≥46", value: 65 }];
export const ANALYTICS_SALARY_RANGES = [
  { label: "3–5 juta", value: 10 },
  { label: "5–7 juta", value: 60 },
  { label: "7–10 juta", value: 20 },
  { label: "10–13 juta", value: 80 },
  { label: "13–15 juta", value: 25 },
];
export const ANALYTICS_FUNNEL = [
  { label: "Pelamar", value: 1248, color: "#2b81f3" },
  { label: "Screening", value: 640, color: "#4e86ff" },
  { label: "Interview", value: 280, color: "#85acff" },
  { label: "Talent Pool", value: 96, color: "#bbd1ff" },
  { label: "Diterima", value: 42, color: "#dbe6ff" },
  { label: "Ditolak", value: 312, color: "#ef4444" },
];
export const ANALYTICS_RECRUITERS = [
  { name: "Budi Santoso", stages: [310, 170, 82, 31, 16] },
  { name: "Sarah Wijaya", stages: [285, 156, 70, 26, 12] },
  { name: "Rina Kusuma", stages: [244, 124, 56, 21, 9] },
  { name: "Nadia Putri", stages: [205, 98, 42, 18, 5] },
];

export function AnalyticsWidget({ title, subtitle, children, className = "" }: { title: string; subtitle?: string; children: React.ReactNode; className?: string }) {
  return <section className={`rounded-2xl border border-border-lighter bg-white p-6 shadow-[0px_4px_6px_rgba(0,0,0,0.02)] ${className}`}><div><p className="text-[16px] font-bold text-text-default">{title}</p>{subtitle && <p className="mt-1 text-[12px] text-text-lighter">{subtitle}</p>}</div><div className="mt-6">{children}</div></section>;
}

export function AnalyticsHorizontalBars({ data, color = "#2b81f3", maxVisible }: { data: { label: string; value: number }[]; color?: string; suffix?: string; maxVisible?: number }) {
  const max = Math.max(...data.map(item => item.value), 1);
  return <div className={`space-y-4 ${maxVisible && data.length > maxVisible ? "analytics-subtle-scrollbar overflow-y-auto pr-2" : ""}`} style={maxVisible ? { maxHeight: `${maxVisible * 56}px` } : undefined}>{data.map(item => <div key={item.label}><div className="mb-1.5 flex justify-between text-[12px]"><span className="font-semibold text-text-darker">{item.label}</span><span className="flex items-center gap-1.5 text-text-lighter"><img src={usersCountIcon} alt="" className="size-3" />{item.value.toLocaleString("id-ID")}</span></div><div className="h-2.5 overflow-hidden rounded-full bg-[#eef2f7]"><div className="h-full rounded-full" style={{ width: `${(item.value / max) * 100}%`, backgroundColor: color }} /></div></div>)}</div>;
}

export function AnalyticsGenderDonut({ factor }: { factor: number }) {
  const values = [{ label: "Laki-laki", value: 54, color: "#2b81f3" }, { label: "Perempuan", value: 43, color: "#7ba6ff" }, { label: "Tidak disebutkan", value: 3, color: "#dbe6ff" }];
  return <div className="flex items-center justify-center gap-8"><div className="relative size-[150px] rounded-full" style={{ background: "conic-gradient(#2b81f3 0 54%, #7ba6ff 54% 97%, #dbe6ff 97% 100%)" }}><div className="absolute inset-[24px] flex flex-col items-center justify-center rounded-full bg-white"><span className="text-[23px] font-bold text-text-default">{Math.round(1248 * factor).toLocaleString("id-ID")}</span><span className="text-[10px] text-text-lighter">Pelamar</span></div></div><div className="space-y-3">{values.map(item => <div key={item.label} className="flex items-center gap-2 text-[12px]"><span className="size-2.5 rounded-full" style={{ backgroundColor: item.color }} /><span className="min-w-[112px] text-text-darker">{item.label}</span><strong className="text-text-default">{item.value}%</strong></div>)}</div></div>;
}

export function AnalyticsFunnel({ factor }: { factor: number }) {
  const max = Math.max(...ANALYTICS_FUNNEL.map(item => item.value), 1);
  return <div className="flex items-end justify-between gap-3 px-2 sm:gap-6" style={{ height: 220 }}>{ANALYTICS_FUNNEL.map(item => { const value = Math.round(item.value * factor); const heightPct = Math.max((item.value / max) * 100, 4); const textColor = item.label === "Ditolak" ? "#ef4444" : "#2b81f3"; return <div key={item.label} className="flex h-full flex-1 flex-col items-center justify-end gap-2"><span className="text-[13px] font-bold" style={{ color: textColor }}>{value.toLocaleString("id-ID")}</span><div className="w-full max-w-[56px] rounded-t-md transition-all duration-700 ease-out" style={{ height: `${heightPct}%`, backgroundColor: item.color }} /><span className="text-center text-[11px] font-medium text-text-darker">{item.label}</span></div>; })}</div>;
}

export function AnalyticsDropoffDonut() {
  let cumulative = 0;
  const segments = ANALYTICS_DROPOFF_REASONS.map(item => { const start = cumulative; cumulative += item.value; return `${item.color} ${start}% ${cumulative}%`; });
  return <div className="flex flex-col items-center gap-5">
    <div className="relative size-[130px] shrink-0 rounded-full" style={{ background: `conic-gradient(${segments.join(", ")})` }}>
      <div className="absolute inset-[22px] flex flex-col items-center justify-center rounded-full bg-white text-center">
        <span className="text-[16px] font-bold text-text-default">100%</span>
        <span className="text-[9px] leading-tight text-text-lighter">Kandidat Ditolak</span>
      </div>
    </div>
    <div className="w-full space-y-2.5">{ANALYTICS_DROPOFF_REASONS.map(item => <div key={item.label} className="flex items-center gap-2 text-[11px]"><span className="size-2.5 shrink-0 rounded-full" style={{ backgroundColor: item.color }} /><span className="min-w-0 flex-1 text-text-darker">{item.label}</span><strong className="shrink-0 text-text-default">{item.value}%</strong></div>)}</div>
  </div>;
}

export function AnalyticsRecruiterChart({ factor }: { factor: number }) {
  const colors = ["#2b81f3", "#4e86ff", "#85acff", "#bbd1ff", "#10b981"];
  const stageLabels = ["Pelamar", "Screening", "Interview", "Talent Pool", "Diterima"];
  return <div>
    <div className="mb-3 grid grid-cols-[135px_1fr_110px] items-center gap-4">
      <div className="col-start-2 flex flex-wrap gap-4">{stageLabels.map((label, index) => <span key={label} className="flex items-center gap-1.5 text-[10px] text-text-muted"><span className="size-2 rounded-full" style={{ backgroundColor: colors[index] }} />{label}</span>)}</div>
      <div className="group relative flex items-center justify-end gap-1 text-[10px] font-semibold text-text-muted">
        Conversion Rate <Info size={12} className="text-[#9b9ca1]" />
        <div role="tooltip" className="pointer-events-none absolute bottom-full right-0 z-30 mb-2 w-[245px] rounded-lg bg-[#252b3a] px-3 py-2 text-left text-[10px] font-normal leading-4 text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
          Persentase kandidat dari tahap Pelamar yang berhasil mencapai tahap Diterima.
        </div>
      </div>
    </div>
    <div className="space-y-5">{ANALYTICS_RECRUITERS.map(recruiter => { const values = recruiter.stages.map(value => Math.round(value * factor)); const total = values.reduce((sum, value) => sum + value, 0); const conversion = ((values[4] / Math.max(values[0], 1)) * 100).toFixed(1); return <div key={recruiter.name} className="grid grid-cols-[135px_1fr_110px] items-center gap-4"><span className="truncate text-[12px] font-semibold text-text-darker">{recruiter.name}</span><div className="flex h-4 overflow-hidden rounded-full bg-[#eef2f7]">{values.map((value, index) => <div key={index} title={`Tahap ${stageLabels[index]}: ${value.toLocaleString("id-ID")} kandidat · ${recruiter.name}`} aria-label={`Tahap ${stageLabels[index]}, ${value.toLocaleString("id-ID")} kandidat, PIC ${recruiter.name}`} style={{ width: `${(value / total) * 100}%`, backgroundColor: colors[index] }} />)}</div><span title={`${values[4].toLocaleString("id-ID")} diterima dari ${values[0].toLocaleString("id-ID")} kandidat melamar`} className="text-right text-[11px] font-bold text-brand-primary">{conversion}%</span></div>; })}</div>
  </div>;
}

export const INDONESIAN_MONTHS = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
export const CALENDAR_DAY_LABELS = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];
export const formatMonthYearId = (d: Date) => `${INDONESIAN_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
export const formatLongDateId = (d: Date | null) => d ? `${d.getDate()} ${INDONESIAN_MONTHS[d.getMonth()]} ${d.getFullYear()}` : "—";

export function DateRangeMonthGrid({ month, range, hovered, onHover, onSelect }: {
  month: Date; range: DateRange; hovered: Date | null; onHover: (d: Date | null) => void; onSelect: (d: Date) => void;
}) {
  const monthStart = startOfMonth(month);
  const monthEnd = endOfMonth(month);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const startOffset = (getDay(monthStart) + 6) % 7;
  const leadingDays = Array.from({ length: startOffset }, (_, i) => addDays(monthStart, i - startOffset));
  const totalCells = leadingDays.length + days.length;
  const trailingCount = (7 - (totalCells % 7)) % 7;
  const trailingDays = Array.from({ length: trailingCount }, (_, i) => addDays(monthEnd, i + 1));
  const cells = [
    ...leadingDays.map(date => ({ date, inMonth: false })),
    ...days.map(date => ({ date, inMonth: true })),
    ...trailingDays.map(date => ({ date, inMonth: false })),
  ];

  const getEffectiveEnd = () => {
    if (range.start && !range.end && hovered) return isBefore(hovered, range.start) ? range.start : hovered;
    return range.end;
  };
  const effectiveStart = range.start && !range.end && hovered && isBefore(hovered, range.start) ? hovered : range.start;
  const effectiveEnd = getEffectiveEnd();
  const isStart = (d: Date) => !!effectiveStart && isSameDay(d, effectiveStart);
  const isEnd = (d: Date) => !!effectiveEnd && isSameDay(d, effectiveEnd);
  const isInRange = (d: Date) =>
    !!effectiveStart && !!effectiveEnd &&
    isWithinInterval(d, { start: effectiveStart, end: effectiveEnd }) &&
    !isSameDay(d, effectiveStart) && !isSameDay(d, effectiveEnd);

  return (
    <div className="min-w-0 flex-1 select-none">
      <div className="grid grid-cols-7">
        {CALENDAR_DAY_LABELS.map(d => (
          <div key={d} className="flex h-5 items-center justify-center text-[11px] font-medium text-[#8c8f9a]" style={{ fontFamily: "var(--font-body)" }}>{d}</div>
        ))}
      </div>
      <div className="mt-1 flex flex-col gap-1">
        {Array.from({ length: cells.length / 7 }, (_, rowIdx) => (
          <div key={rowIdx} className="grid grid-cols-7">
            {cells.slice(rowIdx * 7, rowIdx * 7 + 7).map(({ date, inMonth }) => {
              const start = isStart(date);
              const end = isEnd(date);
              const inRange = isInRange(date);
              return (
                <div
                  key={date.toISOString()}
                  className="flex size-8 items-center justify-center"
                  onMouseEnter={() => inMonth && onHover(date)}
                  onMouseLeave={() => onHover(null)}
                  onClick={() => inMonth && onSelect(date)}
                >
                  <div
                    className={`flex size-8 items-center justify-center text-[13px] transition-colors ${!inMonth ? "text-[#c4c4c4]" : "cursor-pointer text-text-darker"} ${(start || end) ? "rounded-full bg-brand-primary font-semibold text-white" : inRange ? "rounded-[2px] bg-[#ebf2ff] font-semibold" : inMonth ? "rounded font-normal hover:bg-gray-100" : "font-normal"}`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {date.getDate()}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export function AnalyticsCustomDateModal({ startDate, endDate, onCancel, onApply }: {
  startDate: string; endDate: string; onCancel: () => void; onApply: (start: string, end: string) => void;
}) {
  const parseInputDate = (s: string) => (s ? parse(s, "yyyy-MM-dd", new Date()) : null);
  const [range, setRange] = useState<DateRange>({ start: parseInputDate(startDate), end: parseInputDate(endDate) });
  const [hovered, setHovered] = useState<Date | null>(null);
  const [baseMonth, setBaseMonth] = useState(() => range.start ?? new Date());

  const handleSelect = (d: Date) => {
    if (!range.start || (range.start && range.end)) {
      setRange({ start: d, end: null });
    } else {
      const ordered = isBefore(d, range.start) ? { start: d, end: range.start } : { start: range.start, end: d };
      setRange(ordered);
    }
  };

  const invalid = !range.start || !range.end;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f172a]/30 p-6" onMouseDown={onCancel}>
      <div className="flex w-full max-w-[640px] flex-col gap-5 rounded-2xl bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.2)]" onMouseDown={event => event.stopPropagation()}>
        <p className="text-[14px] font-bold text-text-default" style={{ fontFamily: "var(--font-heading)" }}>Pilih Rentang Tanggal</p>

        <div className="flex items-center gap-3 border-b border-dashed border-border-default pb-4">
          <div className="flex-1">
            <p className="text-[11px] font-medium text-[#8c8f9a]">Mulai</p>
            <p className="text-[13px] font-semibold text-text-default">{formatLongDateId(range.start)}</p>
          </div>
          <ArrowRight size={16} className="shrink-0 text-[#9b9ca1]" />
          <div className="flex-1">
            <p className="text-[11px] font-medium text-[#8c8f9a]">Selesai</p>
            <p className="text-[13px] font-semibold text-text-default">{formatLongDateId(range.end)}</p>
          </div>
        </div>

        <div className="flex gap-6">
          {[baseMonth, addMonths(baseMonth, 1)].map((month, i) => (
            <div key={i} className="min-w-0 flex-1">
              <div className="mb-3 flex items-center justify-between">
                <button onClick={() => setBaseMonth(subMonths(baseMonth, 1))} className="rounded p-0.5 text-text-default hover:bg-gray-100 transition-colors"><ChevronLeft size={16} /></button>
                <span className="text-[14px] font-bold text-text-default" style={{ fontFamily: "var(--font-heading)" }}>{formatMonthYearId(month)}</span>
                <button onClick={() => setBaseMonth(addMonths(baseMonth, 1))} className="rounded p-0.5 text-text-default hover:bg-gray-100 transition-colors"><ChevronRight size={16} /></button>
              </div>
              <DateRangeMonthGrid month={month} range={range} hovered={hovered} onHover={setHovered} onSelect={handleSelect} />
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-2">
          <button onClick={onCancel} className="rounded-full border border-border-lighter px-4 py-2 text-[13px] font-semibold text-text-darker hover:bg-gray-50 transition-colors">Batal</button>
          <button
            disabled={invalid}
            onClick={() => range.start && range.end && onApply(format(range.start, "yyyy-MM-dd"), format(range.end, "yyyy-MM-dd"))}
            className="rounded-full bg-brand-primary px-4 py-2 text-[13px] font-semibold text-white hover:bg-brand-primary-hover transition-colors disabled:cursor-not-allowed disabled:opacity-40"
          >
            Terapkan
          </button>
        </div>
      </div>
    </div>
  );
}

