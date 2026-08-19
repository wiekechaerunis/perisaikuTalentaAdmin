import { useNavigate } from "react-router";
import { Clock, Info, Plus, ExternalLink, Calendar, Inbox } from "lucide-react";
import { useSession } from "../../lib/session";
import { NotificationBell } from "../../components/shared/NotificationBell";
import { TopBarUserMenu } from "../../components/shared/TopBarUserMenu";
import imgDashboardBanner from "../../assets/register/dashboard-banner.png";

export const DASHBOARD_EMPTY_STATS = [
  { label: "Total Lowongan", value: "0", tooltip: "Jumlah seluruh lowongan tanpa membedakan statusnya." },
  { label: "Total Pelamar", value: "0", tooltip: "Total seluruh pelamar yang masuk ke semua lowongan sejak awal." },
  { label: "Kuota Monetasi", value: "0", tooltip: "Sisa kuota Talent Search yang dapat digunakan bulan ini." },
  { label: "Waktu Hiring Rata-rata", value: "0 Hari", tooltip: "Rata-rata waktu dari kandidat melamar hingga resmi diterima." },
];

export function DashboardEmptyState() {
  const navigate = useNavigate();
  const { session } = useSession();

  return (
    <div className="flex-1 min-w-0 h-full overflow-y-auto bg-surface">
      {/* Top bar */}
      <div className="bg-white border-b border-border-lighter px-10 py-5 flex items-center justify-end">
        <div className="flex items-center gap-4">
          <NotificationBell />
          <TopBarUserMenu />
        </div>
      </div>

      <div className="flex flex-col gap-6 px-10 pt-8 pb-10">
        {/* Greeting */}
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <p className="text-text-default text-[28px] font-bold leading-8" style={{ fontFamily: "var(--font-body)" }}>Halo, {session.companyName}! 👋</p>
            <span className="flex items-center gap-1.5 bg-[#fef3c7] text-[#92400e] text-xs font-medium px-3 py-1.5 rounded-full" style={{ fontFamily: "var(--font-body)" }}>
              <Clock size={14} />
              Menunggu Verifikasi
            </span>
          </div>
          <p className="text-text-muted text-sm mt-1" style={{ fontFamily: "var(--font-body)" }}>Selamat datang di Perisaiku Talenta, kelola rekrutmen perusahaan Anda dengan lebih mudah.</p>
        </div>

        {/* Recommendation banner */}
        <div className="relative overflow-hidden rounded-2xl border border-[rgba(43,129,243,0.1)] p-5 flex flex-col gap-4 justify-center min-h-[206px]" style={{ background: "linear-gradient(to right, #edf2ff, #d1e0ff)" }}>
          <div className="flex flex-col gap-1 max-w-[420px] relative z-10">
            <p className="text-text-default text-[21px] font-bold leading-[26px]" style={{ fontFamily: "var(--font-body)" }}>Mulai rekrut talenta terbaik</p>
            <p className="text-text-muted text-sm" style={{ fontFamily: "var(--font-body)" }}>Buat lowongan pertama Anda dan temukan kandidat terbaik untuk perusahaan.</p>
          </div>
          <button onClick={() => navigate("/post-job")} className="flex items-center gap-2 h-11 px-4 rounded-full bg-brand-primary text-white text-sm font-semibold hover:bg-brand-primary-hover transition-colors w-fit relative z-10" style={{ fontFamily: "var(--font-body)" }}>
            <Plus size={16} />
            Buat Lowongan Pertama Anda
          </button>
          <img src={imgDashboardBanner} alt="" className="hidden md:block absolute right-0 top-0 h-full object-contain pointer-events-none opacity-90" />
        </div>

        {/* Stat cards */}
        <div className="flex gap-6 flex-wrap">
          {DASHBOARD_EMPTY_STATS.map(c => (
            <div key={c.label} className="bg-white flex-1 min-w-[200px] rounded-2xl border border-border-lighter shadow-[0px_4px_6px_rgba(0,0,0,0.02)] p-6 flex flex-col gap-3">
              <div className="flex items-center gap-1.5">
                <p className="text-text-lighter text-sm" style={{ fontFamily: "var(--font-body)" }}>{c.label}</p>
                <div className="group relative flex items-center">
                  <Info size={14} className="text-[#9b9ca1]" />
                  <div role="tooltip" className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 w-[240px] -translate-x-1/2 rounded-lg bg-[#252b3a] px-3 py-2 text-[11px] leading-5 text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                    {c.tooltip}
                  </div>
                </div>
              </div>
              <p className="text-text-lighter text-[21px] font-bold leading-[26px]" style={{ fontFamily: "var(--font-body)" }}>{c.value}</p>
            </div>
          ))}
        </div>

        {/* Charts row */}
        <div className="flex gap-6 flex-wrap items-stretch" style={{ minHeight: 300 }}>
          {/* Upcoming interviews */}
          <div className="bg-white flex-1 min-w-[320px] rounded-2xl border border-border-lighter shadow-[0px_4px_6px_rgba(0,0,0,0.02)] p-6 flex flex-col gap-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-text-darker text-base font-bold" style={{ fontFamily: "var(--font-body)" }}>Wawancara Mendatang</p>
                <p className="text-text-lighter text-sm" style={{ fontFamily: "var(--font-body)" }}>Jadwal wawancara hari ini</p>
              </div>
              <a
                href="https://calendar.google.com/calendar/r"
                target="_blank"
                rel="noopener noreferrer"
                title="Buka Google Calendar"
                aria-label="Buka Google Calendar"
                className="shrink-0 flex items-center justify-center size-8 rounded-full border border-border-lighter text-icon-default hover:text-brand-primary hover:border-brand-primary transition-colors"
              >
                <ExternalLink size={15} />
              </a>
            </div>
            <div className="w-full h-px bg-[#e5e7eb]" />
            <div className="flex-1 flex flex-col gap-2 items-center justify-center py-6">
              <Calendar size={32} className="text-border-default" />
              <p className="text-text-lighter text-sm" style={{ fontFamily: "var(--font-body)" }}>Tidak ada wawancara hari ini</p>
            </div>
          </div>

          {/* Popular jobs card */}
          <div className="bg-white flex-1 min-w-[320px] rounded-2xl border border-border-lighter shadow-[0px_4px_6px_rgba(0,0,0,0.02)] p-6 flex flex-col gap-5">
            <div>
              <p className="text-text-darker text-base font-bold" style={{ fontFamily: "var(--font-body)" }}>Lowongan Terbanyak Dikunjungi</p>
              <p className="text-text-lighter text-sm" style={{ fontFamily: "var(--font-body)" }}>Sejak lowongan dibuka</p>
            </div>
            <div className="w-full h-px bg-[#e5e7eb]" />
            <div className="flex-1 flex flex-col gap-2 items-center justify-center py-6">
              <Inbox size={32} className="text-border-default" />
              <p className="text-text-lighter text-sm" style={{ fontFamily: "var(--font-body)" }}>Belum ada lowongan</p>
            </div>
          </div>
        </div>

        {/* Recent applicants table */}
        <div className="bg-white rounded-2xl border border-border-lighter shadow-[0px_4px_6px_rgba(0,0,0,0.02)] p-6 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <p className="text-text-default text-base font-bold" style={{ fontFamily: "var(--font-body)" }}>Pelamar Terbaru</p>
          </div>
          <div className="flex items-center py-3 border-b border-border-lighter">
            <p className="text-text-darker text-xs font-bold w-[263px]" style={{ fontFamily: "var(--font-body)" }}>KANDIDAT INFO</p>
            <p className="text-text-darker text-xs font-bold flex-1" style={{ fontFamily: "var(--font-body)" }}>PERAN YANG DILAMAR &amp; SKILL</p>
            <p className="text-text-darker text-xs font-bold w-[150px]" style={{ fontFamily: "var(--font-body)" }}>TANGGAL MELAMAR</p>
            <p className="text-text-darker text-xs font-bold w-[150px]" style={{ fontFamily: "var(--font-body)" }}>STATUS</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center py-6">
            <Inbox size={32} className="text-border-default" />
            <p className="text-text-lighter text-sm" style={{ fontFamily: "var(--font-body)" }}>Belum ada pelamar</p>
          </div>
        </div>
      </div>
    </div>
  );
}
