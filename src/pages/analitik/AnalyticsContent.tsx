import { useState } from "react";
import { Calendar, ChevronDown, ChevronRight, Search, Check } from "lucide-react";
import { NotificationBell } from "../../components/shared/NotificationBell";
import { TopBarUserMenu } from "../../components/shared/TopBarUserMenu";
import {
  AnalyticsStatCard, AnalyticsTrendEmptyChart, AnalyticsTrendChart, AnalyticsWidget,
  AnalyticsHorizontalBars, AnalyticsGenderDonut, AnalyticsFunnel, AnalyticsDropoffDonut,
  AnalyticsRecruiterChart, AnalyticsCustomDateModal,
  ANALYTICS_JOB_ROWS, ANALYTICS_DATE_RANGE_OPTIONS, ANALYTICS_SOURCE_DATA,
  ANALYTICS_PROVINCES, ANALYTICS_AGES, ANALYTICS_SALARY_RANGES,
} from "../../components/analitik/AnalyticsWidgets";

export function AnalyticsContent() {
  const [dateRangeOpen, setDateRangeOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState("30 hari terakhir");
  const [customDateOpen, setCustomDateOpen] = useState(false);
  const [customStartDate, setCustomStartDate] = useState("2026-06-15");
  const [customEndDate, setCustomEndDate] = useState("2026-07-10");
  const [jobDropdownOpen, setJobDropdownOpen] = useState(false);
  const [selectedJobs, setSelectedJobs] = useState<Set<string>>(new Set());
  const [jobFilterSearch, setJobFilterSearch] = useState("");
  const [trendView, setTrendView] = useState<"mingguan" | "bulanan">("mingguan");
  const [search, setSearch] = useState("");

  const jobOptions = ANALYTICS_JOB_ROWS.map(row => row.nama);
  const selectedJobLabel = selectedJobs.size === 0 ? "Semua Lowongan" : selectedJobs.size === 1 ? Array.from(selectedJobs)[0] : `${selectedJobs.size} Lowongan Dipilih`;
  const filteredJobOptions = jobOptions.filter(name => name.toLowerCase().includes(jobFilterSearch.trim().toLowerCase()));
  const customRangeDays = Math.ceil((new Date(customEndDate).getTime() - new Date(customStartDate).getTime()) / 86400000);
  const monthlyEmpty = trendView === "bulanan" && (selectedRange === "30 hari terakhir" || (selectedRange.includes("–") && customRangeDays < 90));
  const visibleAnalyticsJobs = ANALYTICS_JOB_ROWS.filter(row => {
    if (selectedJobs.size > 0 && !selectedJobs.has(row.nama)) return false;
    return row.nama.toLowerCase().includes(search.trim().toLowerCase());
  });
  const analyticsFactor = selectedJobs.size === 0 ? 1 : selectedJobs.size / ANALYTICS_JOB_ROWS.length;
  const totalApplicants = Math.round(1248 * analyticsFactor);
  const acceptedApplicants = Math.round(42 * analyticsFactor);
  const onboardingCandidates = Math.round(31 * analyticsFactor);
  const hiringConversion = ((acceptedApplicants / Math.max(totalApplicants, 1)) * 100).toFixed(1).replace(".", ",");
  const scaledProvinces = ANALYTICS_PROVINCES.map(item => ({ ...item, value: Math.round(item.value * analyticsFactor) }));
  const scaledAges = ANALYTICS_AGES.map(item => ({ ...item, value: Math.round(item.value * analyticsFactor) }));
  const scaledSalaryRanges = ANALYTICS_SALARY_RANGES.map(item => ({ ...item, value: Math.round(item.value * analyticsFactor) }));
  const scaledSources = ANALYTICS_SOURCE_DATA.map(item => ({ ...item, value: Math.round(item.value * analyticsFactor) }));

  return (
    <div className="flex-1 min-w-0 h-full overflow-y-auto bg-surface" onClick={() => { setDateRangeOpen(false); setJobDropdownOpen(false); }}>
      {/* Top bar */}
      <div className="bg-white border-b border-border-lighter px-10 py-5 flex items-center justify-end shrink-0">
        <div className="flex items-center gap-4">
          <NotificationBell />
          <TopBarUserMenu />
        </div>
      </div>

      <div className="flex flex-col gap-6 px-10 pt-8 pb-12">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-[28px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Analitik</p>
            <p className="text-sm text-text-muted mt-1" style={{ fontFamily: "var(--font-body)" }}>Evaluasi performa rekrutmen dari waktu ke waktu.</p>
          </div>

          <div className="flex items-center gap-3" onClick={e => e.stopPropagation()}>
            <div className="relative">
              <button
                onClick={() => setDateRangeOpen(v => !v)}
                className="h-10 px-4 rounded-full border border-border-lighter bg-white flex items-center gap-2 hover:bg-gray-50 transition-colors"
              >
                <Calendar size={16} className="text-text-darker" />
                <span className="text-[14px] font-semibold text-text-darker whitespace-nowrap" style={{ fontFamily: "var(--font-body)" }}>{selectedRange}</span>
                <ChevronDown size={16} className="text-icon-default" />
              </button>
              {dateRangeOpen && (
                <div className="absolute z-20 top-[calc(100%+4px)] right-0 bg-white border border-[#e2e8f0] rounded-xl shadow-lg w-[180px] p-1.5 flex flex-col gap-0.5">
                  {ANALYTICS_DATE_RANGE_OPTIONS.map(opt => (
                    <button key={opt} onClick={() => { setSelectedRange(opt); setDateRangeOpen(false); }}
                      className={`text-left px-3 py-2 rounded-lg text-[13px] hover:bg-gray-50 transition-colors ${selectedRange === opt ? "text-brand-primary font-semibold" : "text-text-darker"}`}
                      style={{ fontFamily: "var(--font-body)" }}>
                      {opt}
                    </button>
                  ))}
                  <div className="my-1 h-px bg-border-lighter" />
                  <button onClick={() => { setDateRangeOpen(false); setCustomDateOpen(true); }} className="flex items-center justify-between rounded-lg px-3 py-2 text-left text-[13px] text-text-darker transition-colors hover:bg-gray-50" style={{ fontFamily: "var(--font-body)" }}>
                    Rentang custom <ChevronRight size={15} />
                  </button>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => setJobDropdownOpen(v => !v)}
                className="h-10 px-4 rounded-full border border-border-lighter bg-white flex items-center gap-2 hover:bg-gray-50 transition-colors"
              >
                <span className="text-[14px] font-semibold text-text-darker whitespace-nowrap" style={{ fontFamily: "var(--font-body)" }}>{selectedJobLabel}</span>
                <ChevronDown size={16} className="text-icon-default" />
              </button>
              {jobDropdownOpen && (
                <div className="absolute z-20 top-[calc(100%+8px)] right-0 w-[320px] rounded-2xl border border-[#e2e8f0] bg-white p-3 shadow-xl">
                  <div className="flex h-10 items-center gap-2 border-b border-border-lighter px-2"><Search size={16} className="text-text-lighter" /><input value={jobFilterSearch} onChange={e => setJobFilterSearch(e.target.value)} placeholder="Cari Nama Pekerjaan" className="min-w-0 flex-1 text-[13px] outline-none placeholder:text-[#9b9ca1]" /></div>
                  <div className="mt-2 flex max-h-[260px] flex-col gap-1 overflow-y-auto">
                    {filteredJobOptions.map(opt => {
                      const checked = selectedJobs.has(opt);
                      return <button key={opt} onClick={() => setSelectedJobs(prev => { const next = new Set(prev); checked ? next.delete(opt) : next.add(opt); return next; })} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13px] font-semibold ${checked ? "bg-[#eaf1ff] text-brand-primary" : "text-text-default hover:bg-[#f9fafb]"}`}>
                        <span className={`flex size-5 shrink-0 items-center justify-center rounded border ${checked ? "border-brand-primary bg-brand-primary text-white" : "border-border-default bg-white"}`}>{checked && <Check size={13} strokeWidth={3} />}</span>{opt}
                      </button>;
                    })}
                  </div>
                  <div className="mt-2 flex items-center justify-between border-t border-border-lighter px-2 pt-3"><span className="text-[12px] text-text-lighter">{selectedJobs.size} terpilih</span><button onClick={() => setSelectedJobs(new Set())} className="text-[12px] font-bold text-[#ef3123] hover:underline">Hapus Semua</button></div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Stat cards */}
        <div className="flex gap-6 flex-wrap">
          <AnalyticsStatCard label="Total Pelamar" value={totalApplicants.toLocaleString("id-ID")} sublabel="dalam periode ini" />
          <AnalyticsStatCard label="Conversion Rate Hiring" value={`${hiringConversion}%`} sublabel="Pelamar sampai Diterima" />
          <AnalyticsStatCard label="Rata-rata Waktu Hiring" value={`${Math.round(14 + (1 - analyticsFactor) * 2)} Hari`} sublabel="Dari kandidat yang diterima" />
          <AnalyticsStatCard label="Total Kandidat Onboarding" value={onboardingCandidates.toLocaleString("id-ID")} sublabel="Kandidat mulai bergabung" />
        </div>

        {/* Trend chart + source of hire */}
        <div className="grid grid-cols-1 items-stretch gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
          <div className="bg-white rounded-2xl border border-border-lighter shadow-[0px_4px_6px_rgba(0,0,0,0.02)] p-6 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-darker text-base font-bold" style={{ fontFamily: "var(--font-body)" }}>Tren Pelamar</p>
                <p className="text-text-lighter text-sm" style={{ fontFamily: "var(--font-body)" }}>Jumlah pelamar dari waktu ke waktu</p>
              </div>
              <div className="flex items-center gap-1 bg-[#f3f4f6] rounded-lg p-[3px]">
                {(["mingguan", "bulanan"] as const).map(v => (
                  <button key={v} onClick={() => setTrendView(v)}
                    className={`px-3 py-1.5 rounded-md text-[14px] font-semibold capitalize transition-colors ${trendView === v ? "bg-white text-brand-primary" : "text-text-lighter"}`}
                    style={{ fontFamily: "var(--font-body)" }}>
                    {v}
                  </button>
                ))}
              </div>
            </div>
            {monthlyEmpty ? <AnalyticsTrendEmptyChart view={trendView} onChangeRange={() => setDateRangeOpen(true)} /> : <AnalyticsTrendChart factor={analyticsFactor} view={trendView} selectedRange={selectedRange} customStartDate={customStartDate} customEndDate={customEndDate} />}
          </div>
          <AnalyticsWidget title="Source of Hire" subtitle="Jumlah kandidat berdasarkan sumber lamaran" className="h-full">
            <AnalyticsHorizontalBars data={scaledSources} suffix=" kandidat" />
          </AnalyticsWidget>
        </div>

        {/* Recruitment funnel + candidate drop-off */}
        <div className="grid grid-cols-1 items-stretch gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
          <div className="bg-white rounded-2xl border border-border-lighter shadow-[0px_4px_6px_rgba(0,0,0,0.02)] p-6 flex flex-col gap-6">
            <div>
              <p className="text-text-darker text-base font-bold" style={{ fontFamily: "var(--font-body)" }}>Rekrutmen Funnel</p>
              <p className="text-text-lighter text-sm" style={{ fontFamily: "var(--font-body)" }}>Jumlah kandidat di setiap tahap rekrutmen</p>
            </div>
            <AnalyticsFunnel factor={analyticsFactor} />
          </div>
          <AnalyticsWidget title="Candidate Drop-off" subtitle="Ringkasan alasan penolakan kandidat" className="h-full">
            <AnalyticsDropoffDonut />
          </AnalyticsWidget>
        </div>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <AnalyticsWidget title="Pelamar Berdasarkan Provinsi" subtitle="Distribusi jumlah pelamar pada setiap provinsi">
            <AnalyticsHorizontalBars data={scaledProvinces} maxVisible={5} />
          </AnalyticsWidget>
          <AnalyticsWidget title="Gender Pelamar" subtitle="Komposisi gender pelamar">
            <AnalyticsGenderDonut factor={analyticsFactor} />
          </AnalyticsWidget>
          <AnalyticsWidget title="Kelompok Usia" subtitle="Distribusi usia pelamar (tahun)">
            <AnalyticsHorizontalBars data={scaledAges} color="#4e86ff" suffix=" pelamar" />
          </AnalyticsWidget>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(320px,1fr)]">
          <AnalyticsWidget title="Performa Rekrutmen per PIC" subtitle="Distribusi kandidat per tahap dan conversion rate akhir" className="h-full">
            <AnalyticsRecruiterChart factor={analyticsFactor} />
          </AnalyticsWidget>
          <AnalyticsWidget title="Distribusi Gaji Kandidat" subtitle="Distribusi kandidat berdasarkan range gaji" className="h-full">
            <AnalyticsHorizontalBars data={scaledSalaryRanges} suffix=" kandidat" />
          </AnalyticsWidget>
        </div>

        {/* Performa per Lowongan */}
        <div className="bg-white rounded-2xl border border-border-lighter shadow-[0px_4px_6px_rgba(0,0,0,0.02)] flex flex-col">
          <div className="p-6 pb-4 flex items-center justify-between gap-4 flex-wrap">
            <p className="text-text-default text-base font-bold" style={{ fontFamily: "var(--font-body)" }}>Performa per Lowongan</p>
            <div className="bg-white border border-border-default rounded-xl h-10 flex items-center gap-2 px-3 w-full max-w-[378px]">
              <Search size={14} className="text-text-lighter shrink-0" />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Cari Nama Posisi"
                className="flex-1 min-w-0 text-[12px] text-text-darker placeholder-[#777980] outline-none bg-transparent"
                style={{ fontFamily: "var(--font-body)" }} />
            </div>
          </div>

          <div className="grid grid-cols-[minmax(200px,1fr)_160px_150px_190px_150px] gap-4 px-6 py-3 border-y border-border-lighter bg-surface">
            {["NAMA POSISI", "JUMLAH PELAMAR", "TINGKAT KONVERSI", "RATA-RATA WAKTU HIRING", "STATUS LOWONGAN"].map(h => (
              <span key={h} className="text-[12px] font-medium text-text-darker" style={{ fontFamily: "var(--font-body)" }}>{h}</span>
            ))}
          </div>

          {visibleAnalyticsJobs.length === 0 ? (
            <div className="py-12 text-center text-[13px] text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>Tidak ada lowongan yang cocok dengan pencarian.</div>
          ) : visibleAnalyticsJobs.map((row) => (
            <div key={row.nama} className="grid grid-cols-[minmax(200px,1fr)_160px_150px_190px_150px] gap-4 items-center px-6 py-4 border-b border-border-lighter last:border-b-0 hover:bg-[#f9fafb]">
              <span className="text-[13px] font-semibold text-text-default" style={{ fontFamily: "var(--font-body)" }}>{row.nama}</span>
              <span className="text-[13px] text-text-darker" style={{ fontFamily: "var(--font-body)" }}>{row.pelamar}</span>
              <span className="flex items-center gap-2 text-[13px] text-text-darker" style={{ fontFamily: "var(--font-body)" }}>
                {row.konversi}
                <span className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${row.benchmark === "Di atas rata-rata" ? "bg-[#d1fae5] text-[#047857]" : "bg-[#f3f4f6] text-text-lighter"}`}>{row.benchmark}</span>
              </span>
              <span className="text-[13px] text-text-darker" style={{ fontFamily: "var(--font-body)" }}>{row.waktu}</span>
              <span className={`w-fit rounded-full px-2.5 py-1 text-[11px] font-semibold ${row.status === "Diterbitkan" ? "bg-[#d1fae5] text-[#047857]" : "bg-[#fee2e2] text-[#dc2626]"}`} style={{ fontFamily: "var(--font-body)" }}>{row.status}</span>
            </div>
          ))}
        </div>
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
