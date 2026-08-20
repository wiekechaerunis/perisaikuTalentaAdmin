import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Calendar, ChevronDown, ChevronRight, Download, Info, ListFilter } from "lucide-react";
import { SuperadminTopBar } from "../../layouts/SuperadminLayout";
import { FieldLabel, SelectInput } from "../../components/shared/FormFields";
import { MultiSelectField } from "../../components/shared/MultiSelectField";
import { AnalyticsCustomDateModal, ANALYTICS_DATE_RANGE_OPTIONS } from "../../components/analitik/AnalyticsWidgets";
import {
  CakupanBisnis, CAKUPAN_BISNIS_OPTIONS, SEGMEN_OPTIONS_BY_CAKUPAN,
  getRingkasanStats, HEALTH_PILL_STYLE,
  TrendPoint, getTrendData, getTrendGrowth,
  RevenueBySide, REVENUE_BY_SIDE, REVENUE_TOTAL, getRevenueBySideData,
  BusinessPerformanceRow, BUSINESS_PERFORMANCE_ROWS, filterBusinessPerformanceRows,
  SEGMEN_EMPLOYER_OPTIONS, INDUSTRI_OPTIONS, PAKET_OPTIONS, EMPLOYER_RECRUITMENT_STATS,
  ChurnRiskEmployer, CHURN_RISK_PILL_STYLE, filterChurnRiskBySegmen,
  SumberRevenue, SUMBER_REVENUE_OPTIONS, REVENUE_STATS_SEMUA, REVENUE_STATS_EMPLOYER, REVENUE_STATS_JOBSEEKER,
  REVENUE_MIX_EMPLOYER, REVENUE_MIX_JOBSEEKER, REVENUE_CHART_TITLE, RevenueMixConfig,
} from "../../mocks/analitik-platform";

const TABS = ["Ringkasan", "Employer & Recruitment", "Revenue"];

// Short explanations for stat-card labels that aren't self-evident (acronyms, blended
// metrics). Cards whose label has no entry here render without the info icon.
const STAT_TOOLTIPS: Record<string, string> = {
  "Employer Aktif": "Jumlah akun employer yang aktif menggunakan platform dalam periode ini.",
  "Employer Berbayar": "Jumlah employer dengan langganan berbayar aktif.",
  "Successful Hires": "Jumlah proses rekrutmen yang berhasil sampai kandidat diterima kerja.",
  "Revenue": "Total pendapatan platform dari seluruh sumber dalam periode ini.",
  "MRR": "Monthly Recurring Revenue — pendapatan berlangganan bulanan yang berulang.",
  "Free-to-Paid": "Persentase pengguna free trial yang berkonversi menjadi pelanggan berbayar.",
  "Renewal Rate": "Persentase pelanggan yang memperpanjang langganan saat masa berlaku habis.",
  "Churn Rate": "Persentase pelanggan yang berhenti berlangganan dalam periode ini.",
  "Activation Rate": "Persentase employer baru yang menyelesaikan aktivasi akun (memposting lowongan pertama).",
  "Lowongan Aktif": "Jumlah lowongan pekerjaan yang sedang tayang di platform.",
  "Total Pelamar": "Jumlah total pelamar pada seluruh lowongan dalam periode ini.",
  "Qualified Rate": "Persentase pelamar yang lolos tahap kualifikasi awal.",
  "Apply-to-Hire": "Persentase pelamar yang akhirnya diterima kerja dari total yang melamar.",
  "Median Time to Hire": "Median waktu yang dibutuhkan dari lowongan dibuka hingga kandidat diterima.",
  "Total Revenue": "Total pendapatan platform dari employer dan job seeker.",
  "Total MRR": "Total pendapatan berlangganan bulanan dari seluruh sumber.",
  "Paying Customers": "Jumlah pelanggan berbayar aktif, employer dan job seeker.",
  "Payment Success": "Persentase transaksi pembayaran yang berhasil diproses.",
  "Employer Contribution": "Kontribusi employer terhadap total revenue platform.",
  "Jobseeker Contribution": "Kontribusi job seeker terhadap total revenue platform.",
  "Blended Renewal": "Rata-rata renewal rate gabungan employer dan job seeker.",
  "Blended Churn": "Rata-rata churn rate gabungan employer dan job seeker.",
  "Employer Revenue": "Total pendapatan dari sisi employer dalam periode ini.",
  "Employer MRR": "Pendapatan berlangganan bulanan berulang dari employer.",
  "ARPA": "Average Revenue Per Account — rata-rata pendapatan per employer berbayar.",
  "Paying Employer": "Jumlah employer dengan langganan berbayar aktif.",
  "Jobseeker Revenue": "Total pendapatan dari sisi job seeker dalam periode ini.",
  "Jobseeker MRR": "Pendapatan berlangganan bulanan berulang dari job seeker.",
  "Premium Subscribers": "Jumlah job seeker dengan langganan premium aktif.",
  "ARPPU": "Average Revenue Per Paying User — rata-rata pendapatan per job seeker berbayar.",
  "Trial-to-Paid": "Persentase job seeker trial yang berkonversi menjadi pelanggan berbayar.",
};

function StatCard({ label, value, trend, trendUp }: { label: string; value: string; trend: string; trendUp: boolean }) {
  const tooltip = STAT_TOOLTIPS[label];
  return (
    <div className="bg-white flex-1 min-w-0 rounded-2xl border border-border-lighter shadow-[0px_4px_6px_rgba(0,0,0,0.02)] p-5 flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1">
          <p className="text-text-lighter text-sm" style={{ fontFamily: "var(--font-body)" }}>{label}</p>
          {tooltip && (
            <div className="group relative flex items-center">
              <Info size={12} className="text-[#9b9ca1] cursor-help" />
              <div role="tooltip" className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 w-[220px] -translate-x-1/2 rounded-lg bg-[#252b3a] px-3 py-2 text-left text-[10px] font-normal leading-4 text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                {tooltip}
              </div>
            </div>
          )}
        </div>
        <p className="text-[21px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>{value}</p>
      </div>
      <div className="flex items-center gap-1 text-xs">
        <span className={`font-bold ${trendUp ? "text-[#10b981]" : "text-[#ef4444]"}`}>{trendUp ? "↑" : "↓"} {trend}</span>
        <span className="text-text-lighter">vs periode lalu</span>
      </div>
    </div>
  );
}

function ApplicantTrendChart({ data, unit = "Poin" }: { data: TrendPoint[]; unit?: string }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const chartAreaRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(600);
  useLayoutEffect(() => {
    const el = chartAreaRef.current;
    if (el) setWidth(el.getBoundingClientRect().width);
  }, []);
  useEffect(() => {
    const el = chartAreaRef.current;
    if (!el) return;
    const observer = new ResizeObserver(entries => {
      const w = entries[0]?.contentRect.width;
      if (w) setWidth(w);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const height = 160;
  const maxValue = 200;
  const step = maxValue / 4;
  const points = data.map((d, i) => ({
    x: (i / Math.max(data.length - 1, 1)) * width,
    y: height - (d.value / maxValue) * height,
    value: d.value,
    label: d.label,
  }));
  const polylinePoints = points.map(p => `${p.x},${p.y}`).join(" ");

  return (
    <div className="flex gap-5 w-full">
      <div className="flex flex-col justify-between h-40 text-xs text-text-lighter shrink-0 w-10 text-right" style={{ fontFamily: "var(--font-body)" }}>
        {[4, 3, 2, 1, 0].map(i => <span key={i}>{i * step}</span>)}
      </div>
      <div ref={chartAreaRef} className="flex-1 min-w-0 flex flex-col gap-3">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-40 overflow-visible" preserveAspectRatio="none">
          {[0, 1, 2, 3, 4].map(i => (
            <line key={i} x1="0" y1={(i / 4) * height} x2={width} y2={(i / 4) * height} stroke="#e6e6e7" strokeWidth="1" />
          ))}
          <polyline points={polylinePoints} fill="none" stroke="#2b81f3" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          {points.map((p, i) => (
            <g key={i} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} className="cursor-pointer">
              <circle cx={p.x} cy={p.y} r="12" fill="transparent" />
              <circle cx={p.x} cy={p.y} r="5" fill="white" stroke="#2b81f3" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            </g>
          ))}
          {hovered !== null && (() => {
            const point = points[hovered];
            const tooltipWidth = 108;
            const tooltipX = Math.max(4, Math.min(point.x - tooltipWidth / 2, width - tooltipWidth - 4));
            const tooltipY = Math.max(4, point.y - 58);
            return (
              <g pointerEvents="none">
                <rect x={tooltipX} y={tooltipY} width={tooltipWidth} height="46" rx="8" fill="#1e293b" />
                <text x={tooltipX + 12} y={tooltipY + 18} fill="white" fontSize="12" fontWeight="600">{point.label}</text>
                <text x={tooltipX + 12} y={tooltipY + 35} fill="#94a3b8" fontSize="11">{point.value} {unit}</text>
              </g>
            );
          })()}
        </svg>
        <div className="flex items-center justify-between text-xs text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>
          {data.map(d => <span key={d.label}>{d.label}</span>)}
        </div>
      </div>
    </div>
  );
}

function ChurnRiskCard({ employers }: { employers: ChurnRiskEmployer[] }) {
  return (
    <div className="bg-white w-[347px] shrink-0 border border-border-lighter rounded-2xl shadow-[0px_4px_6px_rgba(0,0,0,0.02)] p-6 flex flex-col gap-5">
      <div>
        <p className="text-[16px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Employer berisiko churn</p>
        <p className="text-[14px] text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>Employer dengan aktivitas menurun</p>
      </div>
      {employers.length === 0 ? (
        <p className="text-text-muted text-xs py-4 text-center" style={{ fontFamily: "var(--font-body)" }}>Tidak ada employer yang cocok dengan filter ini.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {employers.map((employer, i) => {
            const riskStyle = CHURN_RISK_PILL_STYLE[employer.risk];
            return (
              <div key={i} className="flex items-center gap-3">
                <div className="size-9 rounded-full bg-[#ebf2ff] flex items-center justify-center shrink-0">
                  <span className="text-brand-primary text-xs font-bold" style={{ fontFamily: "var(--font-body)" }}>
                    {employer.nama.charAt(0)}
                  </span>
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                  <p className="text-text-default text-sm font-semibold truncate" style={{ fontFamily: "var(--font-body)" }}>{employer.nama}</p>
                  <p className="text-text-lighter text-xs truncate" style={{ fontFamily: "var(--font-body)" }}>{employer.meta}</p>
                </div>
                <span className={`inline-flex px-2 py-1 rounded-full text-[11px] font-semibold shrink-0 ${riskStyle.bg} ${riskStyle.text}`} style={{ fontFamily: "var(--font-heading)" }}>{employer.risk}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function RevenueBySideCard({ rows, total }: { rows: RevenueBySide[]; total: string }) {
  const max = Math.max(...rows.map(r => r.amount), 1);
  return (
    <div className="bg-white w-[347px] shrink-0 border border-border-lighter rounded-2xl shadow-[0px_4px_6px_rgba(0,0,0,0.02)] p-6 flex flex-col gap-5">
      <div>
        <p className="text-[16px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Revenue by customer side</p>
        <p className="text-[14px] text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>Kontribusi employer dan jobseeker</p>
      </div>
      <div className="flex flex-col gap-9">
        <div className="flex flex-col gap-1.5">
          <p className="text-[14px] text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>Total Revenue</p>
          <p className="text-[21px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>{total}</p>
        </div>
        <div className="flex flex-col gap-4">
          {rows.map(item => (
            <div key={item.label} className="flex flex-col gap-1.5 w-full">
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-semibold text-text-default" style={{ fontFamily: "var(--font-body)" }}>{item.label}</span>
                <span className="text-[14px] font-semibold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>{item.value}</span>
              </div>
              <div className="bg-[#f6f4f4] rounded h-2 w-full overflow-hidden">
                <div className="h-full rounded transition-all duration-300" style={{ width: `${(item.amount / max) * 100}%`, backgroundColor: item.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RevenueMixCard({ config }: { config: RevenueMixConfig }) {
  const max = Math.max(...config.rows.map(r => r.amount));
  return (
    <div className="bg-white w-[347px] shrink-0 border border-border-lighter rounded-2xl shadow-[0px_4px_6px_rgba(0,0,0,0.02)] p-6 flex flex-col gap-5">
      <div>
        <p className="text-[16px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>{config.title}</p>
        <p className="text-[14px] text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>{config.subtitle}</p>
      </div>
      <div className="flex flex-col gap-4">
        {config.rows.map(row => (
          <div key={row.label} className="flex flex-col gap-1.5 w-full">
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-semibold text-text-default" style={{ fontFamily: "var(--font-body)" }}>{row.label}</span>
              <span className="text-[14px] font-semibold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>{row.value}</span>
            </div>
            <div className="bg-[#f6f4f4] rounded h-2 w-full overflow-hidden">
              <div className="h-full rounded bg-brand-primary" style={{ width: `${(row.amount / max) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-border-lighter pt-4 flex flex-col gap-3">
        <p className="text-[14px] font-semibold text-text-default" style={{ fontFamily: "var(--font-body)" }}>{config.produkTitle}</p>
        <div className="grid grid-cols-2 gap-x-8 gap-y-3">
          {config.produkGrid.map(item => (
            <div key={item.label} className="flex items-center justify-between gap-2 text-[10px]" style={{ fontFamily: "var(--font-body)" }}>
              <span className="text-text-darker">{item.label}</span>
              <span className="font-bold text-text-darker">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PerformaBisnisTable({ rows }: { rows: BusinessPerformanceRow[] }) {
  return (
    <div className="bg-white border border-border-lighter rounded-2xl shadow-[0px_4px_6px_rgba(0,0,0,0.02)] p-6 flex flex-col gap-6 w-full">
      <p className="text-[16px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Performa Bisnis</p>
      {rows.length === 0 ? (
        <div className="border border-dashed border-border-lighter rounded-xl flex items-center justify-center py-12">
          <p className="text-text-muted text-sm text-center px-6" style={{ fontFamily: "var(--font-body)" }}>Tidak ada data segmen employer untuk kombinasi filter ini.</p>
        </div>
      ) : (
        <div className="border border-border-lighter rounded-xl overflow-hidden w-full">
          <div className="bg-surface border-b border-border-lighter grid grid-cols-7 gap-3 px-4 py-3">
            {["SEGMEN", "EMPLOYER AKTIF", "KONVERSI PEMBAYARAN", "MRR", "SUCCESSFUL HIRES", "RETENTION 30D", "HEALTH"].map(col => (
              <span key={col} className="text-text-darker text-[12px] font-bold uppercase" style={{ fontFamily: "var(--font-heading)" }}>{col}</span>
            ))}
          </div>
          {rows.map((row, i) => {
            const healthStyle = HEALTH_PILL_STYLE[row.health];
            return (
              <div key={row.segmen} className={`grid grid-cols-7 gap-3 items-center px-4 py-4 ${i < rows.length - 1 ? "border-b border-border-lighter" : ""}`}>
                <span className="text-text-darker text-sm font-bold" style={{ fontFamily: "var(--font-body)" }}>{row.segmen}</span>
                <span className="text-text-darker text-sm" style={{ fontFamily: "var(--font-body)" }}>{row.employerAktif}</span>
                <span className="flex items-center gap-2 text-sm">
                  <span className="text-text-darker" style={{ fontFamily: "var(--font-body)" }}>{row.konversiPembayaran}</span>
                  <span className="text-[#10b981] font-bold text-xs">↑ {row.konversiTrend}</span>
                </span>
                <span className="text-text-darker text-sm" style={{ fontFamily: "var(--font-body)" }}>{row.mrr}</span>
                <span className="text-text-darker text-sm" style={{ fontFamily: "var(--font-body)" }}>{row.successfulHires}</span>
                <span className="text-text-darker text-sm" style={{ fontFamily: "var(--font-body)" }}>{row.retention30d}</span>
                <span>
                  <span className={`inline-flex px-2 py-1 rounded-full text-[11px] font-semibold ${healthStyle.bg} ${healthStyle.text}`} style={{ fontFamily: "var(--font-heading)" }}>{row.health}</span>
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function AnalitikPlatformContent() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [filterOpen, setFilterOpen] = useState(true);

  const [periodOpen, setPeriodOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState("30 hari terakhir");
  const [customDateOpen, setCustomDateOpen] = useState(false);
  const [customStartDate, setCustomStartDate] = useState("2026-06-15");
  const [customEndDate, setCustomEndDate] = useState("2026-07-10");

  const [cakupanBisnis, setCakupanBisnis] = useState<CakupanBisnis>("");
  const [segmen, setSegmen] = useState<string[]>([]);
  const [paket, setPaket] = useState<string[]>([]);

  const [segmenEmployer, setSegmenEmployer] = useState<string[]>([]);
  const [industri, setIndustri] = useState<string[]>([]);
  const [paketMulti, setPaketMulti] = useState<string[]>([]);

  const [sumberRevenue, setSumberRevenue] = useState<SumberRevenue>("Semua");

  const segmenOptions = cakupanBisnis ? SEGMEN_OPTIONS_BY_CAKUPAN[cakupanBisnis] : [];

  const handleCakupanChange = (value: string) => {
    setCakupanBisnis(value as CakupanBisnis);
    setSegmen([]);
  };

  const revenueStats = sumberRevenue === "Employer" ? REVENUE_STATS_EMPLOYER : sumberRevenue === "Job Seeker" ? REVENUE_STATS_JOBSEEKER : REVENUE_STATS_SEMUA;
  const revenueMix = sumberRevenue === "Employer" ? REVENUE_MIX_EMPLOYER : sumberRevenue === "Job Seeker" ? REVENUE_MIX_JOBSEEKER : null;

  // The line chart reshapes to match the selected Periode Analisis — shared across all 3 tabs.
  const trendData = getTrendData(selectedRange);
  const trendGrowth = getTrendGrowth(trendData);

  const ringkasanStats = getRingkasanStats(cakupanBisnis);
  const ringkasanRevenueBySide = getRevenueBySideData(cakupanBisnis);
  // Performa Bisnis only tracks employer pricing tiers, so it's irrelevant once the view is narrowed to Job Seeker.
  const ringkasanTableRows = cakupanBisnis === "Job Seeker" ? [] : filterBusinessPerformanceRows(segmen);

  const employerRecruitmentTableRows = filterBusinessPerformanceRows(segmenEmployer);
  const employerRecruitmentChurnList = filterChurnRiskBySegmen(segmenEmployer);

  const revenueTableRows = sumberRevenue === "Job Seeker" ? [] : BUSINESS_PERFORMANCE_ROWS;

  return (
    <div className="flex-1 min-w-0 h-full overflow-y-auto bg-surface" onClick={() => setPeriodOpen(false)}>
      <SuperadminTopBar />

      <div className="flex flex-col gap-6 px-10 pt-8 pb-12">
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-text-default text-[28px] font-bold leading-8" style={{ fontFamily: "var(--font-body)" }}>Analitik</p>
            <p className="text-text-muted text-sm mt-1" style={{ fontFamily: "var(--font-body)" }}>Evaluasi performa rekrutmen dari waktu ke waktu.</p>
          </div>
          <button
            className="h-10 px-4 rounded-full border-[1.5px] border-brand-primary bg-white flex items-center gap-2 hover:bg-[#ebf2ff] transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <Download size={16} className="text-brand-primary" />
            <span className="text-[14px] font-semibold text-brand-primary whitespace-nowrap">Export CSV</span>
          </button>
        </div>

        {/* Tabs + Filter toggle */}
        <div className="flex items-end justify-between w-full">
          <div className="flex items-center gap-8">
            {TABS.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className="flex flex-col gap-2 items-center">
                <span className={`text-[14px] whitespace-nowrap ${activeTab === tab ? "font-semibold text-brand-primary" : "text-[#94a3b8]"}`} style={{ fontFamily: "var(--font-heading)" }}>{tab}</span>
                <span className={`h-[3px] rounded-full w-full ${activeTab === tab ? "bg-brand-primary" : "bg-[#e2e8f0]"}`} />
              </button>
            ))}
          </div>
          <button
            onClick={() => setFilterOpen(v => !v)}
            className={`h-10 px-4 rounded-full border-[1.5px] flex items-center gap-2 transition-colors ${filterOpen ? "border-brand-primary text-brand-primary" : "border-border-default text-text-darker"}`}
            style={{ fontFamily: "var(--font-body)" }}
          >
            <span className="text-[14px] font-bold">Filter</span>
            <ListFilter size={14} className={filterOpen ? "text-brand-primary" : "text-icon-default"} />
          </button>
        </div>

        {activeTab === "Ringkasan" && (
          <>
            {/* Filter section */}
            {filterOpen && (
              <div className="bg-white border border-border-lighter rounded-xl px-5 py-3.5 flex items-end gap-2 w-full" onClick={e => e.stopPropagation()}>
                <div className="flex-1 min-w-0 flex flex-col gap-2">
                  <FieldLabel>Periode Analisis</FieldLabel>
                  <div className="relative">
                    <button
                      onClick={() => setPeriodOpen(v => !v)}
                      className="bg-white border border-border-default rounded-xl h-10 w-full px-3 flex items-center justify-between gap-2 hover:border-brand-primary transition-colors"
                    >
                      <span className="text-xs text-text-darker truncate" style={{ fontFamily: "var(--font-body)" }}>{selectedRange}</span>
                      <ChevronDown size={14} className="text-icon-default shrink-0" />
                    </button>
                    {periodOpen && (
                      <div className="absolute z-20 top-[calc(100%+4px)] left-0 bg-white border border-[#e2e8f0] rounded-xl shadow-lg w-full min-w-[200px] p-1.5 flex flex-col gap-0.5">
                        {ANALYTICS_DATE_RANGE_OPTIONS.map(opt => (
                          <button
                            key={opt}
                            onClick={() => { setSelectedRange(opt); setPeriodOpen(false); }}
                            className={`text-left px-3 py-2 rounded-lg text-[13px] hover:bg-gray-50 transition-colors ${selectedRange === opt ? "text-brand-primary font-semibold" : "text-text-darker"}`}
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {opt}
                          </button>
                        ))}
                        <div className="my-1 h-px bg-border-lighter" />
                        <button
                          onClick={() => { setPeriodOpen(false); setCustomDateOpen(true); }}
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-left text-[13px] text-text-darker transition-colors hover:bg-gray-50"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          Rentang custom <ChevronRight size={15} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-2">
                  <FieldLabel>Cakupan Bisnis</FieldLabel>
                  <SelectInput placeholder="Semua Bisnis" value={cakupanBisnis} onChange={handleCakupanChange} options={CAKUPAN_BISNIS_OPTIONS} />
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-2">
                  <FieldLabel>Segmen</FieldLabel>
                  <MultiSelectField placeholder="Semua Segmen" options={segmenOptions} selected={segmen} onChange={setSegmen} disabled={!cakupanBisnis} />
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-2">
                  <FieldLabel>Paket</FieldLabel>
                  <MultiSelectField placeholder="Semua Paket" options={[]} selected={paket} onChange={setPaket} />
                </div>
              </div>
            )}

            {/* Stat cards */}
            <div className="grid grid-cols-4 gap-4 w-full">
              {ringkasanStats.map(stat => <StatCard key={stat.label} {...stat} />)}
            </div>

            {/* Trend chart + revenue by side */}
            <div className="flex gap-4 w-full items-stretch">
              <div className="bg-white flex-1 min-w-0 border border-border-lighter rounded-2xl shadow-[0px_4px_6px_rgba(0,0,0,0.02)] p-6 flex flex-col gap-6">
                <div>
                  <p className="text-[16px] font-bold text-[#4c4f59]" style={{ fontFamily: "var(--font-body)" }}>Tren Pelamar</p>
                  <p className="text-[14px] text-[#777980]" style={{ fontFamily: "var(--font-body)" }}>Jumlah pelamar dari waktu ke waktu</p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-[21px] font-bold text-[#3e9248]" style={{ fontFamily: "var(--font-body)" }}>{trendGrowth}</p>
                  <p className="text-[14px] text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>pertumbuhan periode ini</p>
                </div>
                <ApplicantTrendChart data={trendData} unit="Pelamar" />
              </div>

              <RevenueBySideCard rows={ringkasanRevenueBySide.rows} total={ringkasanRevenueBySide.total} />
            </div>

            {/* Performa Bisnis table */}
            <PerformaBisnisTable rows={ringkasanTableRows} />
          </>
        )}

        {activeTab === "Employer & Recruitment" && (
          <>
            {/* Filter section */}
            {filterOpen && (
              <div className="bg-white border border-border-lighter rounded-xl px-5 py-3.5 flex items-end gap-2 w-full" onClick={e => e.stopPropagation()}>
                <div className="flex-1 min-w-0 flex flex-col gap-2">
                  <FieldLabel>Periode Analisis</FieldLabel>
                  <div className="relative">
                    <button
                      onClick={() => setPeriodOpen(v => !v)}
                      className="bg-white border border-border-default rounded-xl h-10 w-full px-3 flex items-center justify-between gap-2 hover:border-brand-primary transition-colors"
                    >
                      <span className="text-xs text-text-darker truncate" style={{ fontFamily: "var(--font-body)" }}>{selectedRange}</span>
                      <ChevronDown size={14} className="text-icon-default shrink-0" />
                    </button>
                    {periodOpen && (
                      <div className="absolute z-20 top-[calc(100%+4px)] left-0 bg-white border border-[#e2e8f0] rounded-xl shadow-lg w-full min-w-[200px] p-1.5 flex flex-col gap-0.5">
                        {ANALYTICS_DATE_RANGE_OPTIONS.map(opt => (
                          <button
                            key={opt}
                            onClick={() => { setSelectedRange(opt); setPeriodOpen(false); }}
                            className={`text-left px-3 py-2 rounded-lg text-[13px] hover:bg-gray-50 transition-colors ${selectedRange === opt ? "text-brand-primary font-semibold" : "text-text-darker"}`}
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {opt}
                          </button>
                        ))}
                        <div className="my-1 h-px bg-border-lighter" />
                        <button
                          onClick={() => { setPeriodOpen(false); setCustomDateOpen(true); }}
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-left text-[13px] text-text-darker transition-colors hover:bg-gray-50"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          Rentang custom <ChevronRight size={15} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-2">
                  <FieldLabel>Segmen Employer</FieldLabel>
                  <MultiSelectField placeholder="Semua Segmen" options={SEGMEN_EMPLOYER_OPTIONS} selected={segmenEmployer} onChange={setSegmenEmployer} />
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-2">
                  <FieldLabel>Industri</FieldLabel>
                  <MultiSelectField placeholder="Semua Industri" options={INDUSTRI_OPTIONS} selected={industri} onChange={setIndustri} />
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-2">
                  <FieldLabel>Paket</FieldLabel>
                  <MultiSelectField placeholder="Semua Paket" options={PAKET_OPTIONS} selected={paketMulti} onChange={setPaketMulti} />
                </div>
              </div>
            )}

            {/* Stat cards */}
            <div className="grid grid-cols-4 gap-4 w-full">
              {EMPLOYER_RECRUITMENT_STATS.map(stat => <StatCard key={stat.label} {...stat} />)}
            </div>

            {/* Trend chart + churn risk */}
            <div className="flex gap-4 w-full items-stretch">
              <div className="bg-white flex-1 min-w-0 border border-border-lighter rounded-2xl shadow-[0px_4px_6px_rgba(0,0,0,0.02)] p-6 flex flex-col gap-6">
                <div>
                  <p className="text-[16px] font-bold text-[#4c4f59]" style={{ fontFamily: "var(--font-body)" }}>Employer activation & recruitment outcome</p>
                  <p className="text-[14px] text-[#777980]" style={{ fontFamily: "var(--font-body)" }}>Tren dibandingkan periode sebelumnya</p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-[21px] font-bold text-[#3e9248]" style={{ fontFamily: "var(--font-body)" }}>{trendGrowth}</p>
                  <p className="text-[14px] text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>pertumbuhan periode ini</p>
                </div>
                <ApplicantTrendChart data={trendData} unit="Skor Aktivitas" />
              </div>

              <ChurnRiskCard employers={employerRecruitmentChurnList} />
            </div>

            {/* Performa Bisnis table */}
            <PerformaBisnisTable rows={employerRecruitmentTableRows} />
          </>
        )}

        {activeTab === "Revenue" && (
          <>
            {/* Filter section */}
            {filterOpen && (
              <div className="bg-white border border-border-lighter rounded-xl px-5 py-3.5 flex items-end gap-2 w-full" onClick={e => e.stopPropagation()}>
                <div className="flex-1 min-w-0 flex flex-col gap-2">
                  <FieldLabel>Periode Analisis</FieldLabel>
                  <div className="relative">
                    <button
                      onClick={() => setPeriodOpen(v => !v)}
                      className="bg-white border border-border-default rounded-xl h-10 w-full px-3 flex items-center justify-between gap-2 hover:border-brand-primary transition-colors"
                    >
                      <span className="text-xs text-text-darker truncate" style={{ fontFamily: "var(--font-body)" }}>{selectedRange}</span>
                      <ChevronDown size={14} className="text-icon-default shrink-0" />
                    </button>
                    {periodOpen && (
                      <div className="absolute z-20 top-[calc(100%+4px)] left-0 bg-white border border-[#e2e8f0] rounded-xl shadow-lg w-full min-w-[200px] p-1.5 flex flex-col gap-0.5">
                        {ANALYTICS_DATE_RANGE_OPTIONS.map(opt => (
                          <button
                            key={opt}
                            onClick={() => { setSelectedRange(opt); setPeriodOpen(false); }}
                            className={`text-left px-3 py-2 rounded-lg text-[13px] hover:bg-gray-50 transition-colors ${selectedRange === opt ? "text-brand-primary font-semibold" : "text-text-darker"}`}
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {opt}
                          </button>
                        ))}
                        <div className="my-1 h-px bg-border-lighter" />
                        <button
                          onClick={() => { setPeriodOpen(false); setCustomDateOpen(true); }}
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-left text-[13px] text-text-darker transition-colors hover:bg-gray-50"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          Rentang custom <ChevronRight size={15} />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-2">
                  <FieldLabel>Sumber Revenue</FieldLabel>
                  <SelectInput placeholder="Semua" value={sumberRevenue} onChange={v => setSumberRevenue(v as SumberRevenue)} options={SUMBER_REVENUE_OPTIONS} />
                </div>
              </div>
            )}

            {/* Stat cards */}
            <div className="grid grid-cols-4 gap-4 w-full">
              {revenueStats.map(stat => <StatCard key={stat.label} {...stat} />)}
            </div>

            {/* Trend chart + revenue mix */}
            <div className="flex gap-4 w-full items-stretch">
              <div className="bg-white flex-1 min-w-0 border border-border-lighter rounded-2xl shadow-[0px_4px_6px_rgba(0,0,0,0.02)] p-6 flex flex-col gap-6">
                <div>
                  <p className="text-[16px] font-bold text-[#4c4f59]" style={{ fontFamily: "var(--font-body)" }}>{REVENUE_CHART_TITLE[sumberRevenue]}</p>
                  <p className="text-[14px] text-[#777980]" style={{ fontFamily: "var(--font-body)" }}>Tren dibandingkan periode sebelumnya</p>
                </div>
                <div className="flex flex-col gap-1.5">
                  <p className="text-[21px] font-bold text-[#3e9248]" style={{ fontFamily: "var(--font-body)" }}>{trendGrowth}</p>
                  <p className="text-[14px] text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>pertumbuhan periode ini</p>
                </div>
                <ApplicantTrendChart data={trendData} unit="Poin Revenue" />
              </div>

              {revenueMix ? <RevenueMixCard config={revenueMix} /> : <RevenueBySideCard rows={REVENUE_BY_SIDE} total={REVENUE_TOTAL} />}
            </div>

            {/* Performa Bisnis table */}
            <PerformaBisnisTable rows={revenueTableRows} />
          </>
        )}
      </div>

      {customDateOpen && (
        <AnalyticsCustomDateModal
          startDate={customStartDate}
          endDate={customEndDate}
          onCancel={() => setCustomDateOpen(false)}
          onApply={(start, end) => {
            setCustomStartDate(start);
            setCustomEndDate(end);
            const displayDate = (value: string) => {
              const [year, month, day] = value.split("-");
              const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
              return `${Number(day)} ${months[Number(month) - 1]} ${year}`;
            };
            setSelectedRange(`${displayDate(start)} – ${displayDate(end)}`);
            setCustomDateOpen(false);
          }}
        />
      )}
    </div>
  );
}
