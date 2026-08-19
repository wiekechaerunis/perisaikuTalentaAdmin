import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ExternalLink, Video, ArrowRight, MapPin, Building2, Wallet } from "lucide-react";
import { useSession } from "../../lib/session";
import { NotificationBell } from "../../components/shared/NotificationBell";
import { TopBarUserMenu } from "../../components/shared/TopBarUserMenu";
import { KpiCard } from "../../components/shared/KpiCard";
import { StarRatingIcon } from "../../components/shared/Icons";
import { kpiCards, popularJobs, statusBadge, recentApplicants, interviews, MONTH_ABBR_TO_NUM } from "../../mocks/dashboard";
import { jobRows } from "../../mocks/lowongan";
import imgCandidate from "../../imports/Frame626639/fb0866f26f42d40c2ae9ca60a1f6f85a45c71cad.png";
import usersCountIcon from "../../assets/icons/users.svg";

function googleCalendarMonthUrl(dateStr: string): string {
  const match = dateStr.match(/(\d{1,2})\s+([A-Za-z]{3})\s*'?(\d{2,4})/);
  if (!match) return "https://calendar.google.com/calendar/r";
  const [, day, monAbbr, yearRaw] = match;
  const year = yearRaw.length === 2 ? `20${yearRaw}` : yearRaw;
  const month = MONTH_ABBR_TO_NUM[monAbbr] ?? "01";
  return `https://calendar.google.com/calendar/u/0/r/month/${year}/${month}/${day.padStart(2, "0")}`;
}

function InterviewLocationIcon({ size = 17, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 17 17" fill="none" className={className} aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M13.0687 14.9266H10.0672L10.1344 14.8668C10.5877 14.4611 11.1929 13.8748 11.7999 13.1515C12.9943 11.7284 14.2882 9.66532 14.2882 7.34303C14.2882 4.25399 12.0171 2 8.9224 2C5.82774 2 3.55664 4.25399 3.55664 7.34303C3.55664 9.66532 4.85054 11.7284 6.04489 13.1515C6.6519 13.8748 7.2571 14.4611 7.71037 14.8668L7.77759 14.9266H4.77613C4.37203 14.9266 4.04444 15.2542 4.04444 15.6583C4.04444 16.0624 4.37203 16.39 4.77613 16.39H13.0687C13.4728 16.39 13.8004 16.0624 13.8004 15.6583C13.8004 15.2542 13.4728 14.9266 13.0687 14.9266ZM8.9224 9.56085C10 9.56085 10.8736 8.68727 10.8736 7.60966C10.8736 6.53205 10 5.65847 8.9224 5.65847C7.84479 5.65847 6.97122 6.53205 6.97122 7.60966C6.97122 8.68727 7.84479 9.56085 8.9224 9.56085Z" fill="currentColor" />
    </svg>
  );
}

function PopularJobRow({ job, mounted, onClick }: { job: typeof popularJobs[0]; mounted: boolean; onClick?: () => void }) {
  return (
    <div onClick={onClick} className={`flex gap-3 items-center py-1.5 w-full rounded-lg transition-colors ${onClick ? "cursor-pointer hover:bg-surface" : ""}`}>
      <span className="text-[#6b7280] text-[13px] w-6 shrink-0" style={{ fontFamily: "var(--font-body)" }}>{job.rank}</span>
      <div className="flex flex-col gap-1 shrink-0 w-[130px]">
        <p className="text-sm font-medium text-black" style={{ fontFamily: "var(--font-body)" }}>{job.title}</p>
        <p className="text-[#6b7280] text-xs" style={{ fontFamily: "var(--font-body)" }}>Dibuat pada {job.date}</p>
      </div>
      <div className="flex-1 min-w-0 bg-[rgba(43,129,243,0.1)] h-2 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#ff6b35] rounded-full transition-all duration-700 ease-out"
          style={{ width: mounted ? `${job.pct * 100}%` : "0%" }}
        />
      </div>
      <div className="flex flex-col gap-0.5 items-end shrink-0 w-24">
        <div className="flex items-center gap-1.5">
          <img src={usersCountIcon} alt="" className="size-[10px]" />
          <span className="text-text-default text-sm font-bold" style={{ fontFamily: "var(--font-body)" }}>{job.count}</span>
        </div>
        <p className="text-[#6b7280] text-xs" style={{ fontFamily: "var(--font-body)" }}>Tutup {job.closes}</p>
      </div>
    </div>
  );
}

export function DashboardContent() {
  const navigate = useNavigate();
  const { session } = useSession();
  const [barMounted, setBarMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setBarMounted(true), 100); return () => clearTimeout(t); }, []);

  return (
    <div className="flex-1 min-w-0 h-full overflow-y-auto bg-surface">
      {/* Top bar */}
      <div className="bg-white border-b border-border-lighter px-10 py-5 flex items-center justify-end">
        <div className="flex items-center gap-4">
          <NotificationBell />
          <TopBarUserMenu />
        </div>
      </div>

      <div className="flex flex-col gap-8 pb-10">
        {/* Page title row */}
        <div className="flex items-center justify-between px-10 pt-8">
          <div>
            <p className="text-text-default text-[28px] font-bold leading-8" style={{ fontFamily: "var(--font-body)" }}>Halo, {session.companyName}! 👋</p>
            <p className="text-text-muted text-sm mt-1" style={{ fontFamily: "var(--font-body)" }}>Selamat datang di Perisaiku Talenta, kelola rekrutmen perusahaan Anda dengan lebih mudah.</p>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="flex gap-6 px-10">
          {kpiCards.map((c) => (
            <KpiCard
              key={c.label}
              {...c}
              onClick={c.openLowongan ? () => navigate("/lowongan", { replace: false }) : undefined}
            />
          ))}
        </div>

        {/* Charts row */}
        <div className="flex gap-6 px-10" style={{ height: 360 }}>
          {/* Upcoming interviews */}
          <div className="bg-white flex-1 min-w-0 rounded-2xl border border-border-lighter shadow-[0px_4px_6px_rgba(0,0,0,0.02)] p-6 flex flex-col gap-5 overflow-hidden">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-text-darker text-base font-bold" style={{ fontFamily: "var(--font-body)" }}>Wawancara Mendatang</p>
                <p className="text-text-lighter text-sm" style={{ fontFamily: "var(--font-body)" }}>Jadwal wawancara hari ini</p>
              </div>
              <a
                href={googleCalendarMonthUrl(interviews[0]?.date ?? "")}
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
            <div className="flex flex-col gap-5 overflow-y-auto">
              {interviews.map((iv) => (
                <button
                  type="button"
                  key={iv.name}
                  onClick={() => window.open(iv.actionUrl, "_blank", "noopener,noreferrer")}
                  className="group flex w-full items-center gap-3 rounded-xl p-1.5 text-left transition-colors hover:bg-[#f8fafc]"
                  aria-label={`${iv.method === "online" ? "Buka meeting" : "Buka lokasi"} ${iv.name}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#f3f4f6] flex items-center justify-center text-text-default font-bold text-sm shrink-0">
                    {iv.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-black" style={{ fontFamily: "var(--font-body)" }}>{iv.name}</p>
                    <p className="text-text-muted text-xs" style={{ fontFamily: "var(--font-body)" }}>{iv.role}</p>
                    <div className={`mt-1 flex items-center gap-1.5 text-xs font-semibold ${iv.method === "online" ? "text-brand-primary" : "text-[#35964a]"}`} style={{ fontFamily: "var(--font-body)" }}>
                      {iv.method === "online" ? <Video size={14} fill="currentColor" /> : <InterviewLocationIcon size={15} className="shrink-0" />}
                      <span className="capitalize">{iv.method}</span>
                      <span className="text-text-subtle">•</span>
                      <span className="truncate">{iv.actionLabel}</span>
                      <ArrowRight size={14} className="shrink-0 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-brand-primary text-xs font-bold" style={{ fontFamily: "var(--font-body)" }}>{iv.time}</p>
                    <p className="text-text-lighter text-[9px]" style={{ fontFamily: "var(--font-body)" }}>{iv.date}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Popular jobs card */}
          <div className="bg-white flex-1 min-w-0 rounded-2xl border border-border-lighter shadow-[0px_4px_6px_rgba(0,0,0,0.02)] p-6 flex flex-col gap-5 overflow-hidden">
            <div>
              <p className="text-text-darker text-base font-bold" style={{ fontFamily: "var(--font-body)" }}>Lowongan Terbanyak Dikunjungi</p>
              <p className="text-text-lighter text-sm" style={{ fontFamily: "var(--font-body)" }}>Sejak lowongan dibuka</p>
            </div>
            <div className="w-full h-px bg-[#e5e7eb]" />
            <div className="flex flex-col gap-1 flex-1 overflow-hidden">
              {popularJobs.map((job, i) => {
                const jobRow = jobRows.find(jr => jr.nama === job.title);
                return (
                  <div key={job.rank}>
                    <PopularJobRow
                      job={job}
                      mounted={barMounted}
                      onClick={() => navigate(jobRow ? `/lowongan/${jobRow.id}` : "/lowongan")}
                    />
                    {i < popularJobs.length - 1 && <div className="w-full h-px bg-[#e5e7eb]" />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Recent applicants table */}
        <div className="px-10">
          <div className="bg-white rounded-2xl border border-border-lighter shadow-[0px_4px_6px_rgba(0,0,0,0.02)] p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-text-default text-base font-bold" style={{ fontFamily: "var(--font-body)" }}>Pelamar Terbaru</p>
            </div>
            {/* Table header */}
            <div className="flex items-start py-2 border-b border-border-lighter">
              <p className="text-text-darker text-xs font-bold w-[300px] shrink-0" style={{ fontFamily: "var(--font-body)" }}>KANDIDAT INFO</p>
              <p className="text-text-darker text-xs font-bold flex-1 min-w-0" style={{ fontFamily: "var(--font-body)" }}>PERAN YANG DILAMAR &amp; SKILL</p>
              <p className="text-text-darker text-xs font-bold w-[150px] shrink-0" style={{ fontFamily: "var(--font-body)" }}>TANGGAL MELAMAR</p>
              <p className="text-text-darker text-xs font-bold w-[150px] shrink-0" style={{ fontFamily: "var(--font-body)" }}>STATUS</p>
            </div>
            {recentApplicants.map((a) => {
              const badge = statusBadge[a.status];
              const visibleSkills = a.skills.slice(0, 3);
              const extraCount = a.skills.length - visibleSkills.length;
              return (
                <div
                  key={a.name}
                  onClick={() => navigate(`/pipeline/${a.jobId}`, { state: { openCandidateId: a.candidateId } })}
                  className="flex items-center py-2.5 border-b border-border-lighter cursor-pointer hover:bg-surface transition-colors rounded-lg"
                >
                  <div className="flex items-center gap-3 w-[300px] shrink-0 pr-3">
                    <img src={imgCandidate} alt="" className="size-10 rounded-full object-cover shrink-0" />
                    <div className="flex min-w-0 flex-col gap-0.5">
                      <p className="flex items-baseline gap-1 min-w-0 text-text-default text-sm font-semibold" style={{ fontFamily: "var(--font-body)" }}>
                        <span className="min-w-0 truncate">{a.name}</span>
                        <span className="shrink-0 text-text-subtle font-normal">({a.umur}th)</span>
                      </p>
                      <span className="flex items-center gap-1 text-[12px] text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>
                        <MapPin size={12} />{a.lokasi}
                      </span>
                      <span className="flex items-center gap-1 text-[12px] text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>
                        <StarRatingIcon size={13} />{a.rating}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col gap-1.5 pr-3">
                    <p className="text-text-default text-sm font-semibold" style={{ fontFamily: "var(--font-body)" }}>{a.role}</p>
                    <span className="flex items-center gap-1.5 text-[12px] text-text-muted" style={{ fontFamily: "var(--font-body)" }}>
                      <span className="flex items-center gap-1"><Building2 size={13} />{a.company}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1"><Wallet size={13} />{a.gaji}</span>
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {visibleSkills.map((s, i) => (
                        <span key={i} className="bg-surface text-text-muted text-[11px] font-medium px-2 py-0.5 rounded" style={{ fontFamily: "var(--font-heading)" }}>{s}</span>
                      ))}
                      {extraCount > 0 && (
                        <span className="bg-[#f3f4f6] border border-[#e5e7eb] text-text-muted text-[11px] font-semibold px-2 py-0.5 rounded" style={{ fontFamily: "var(--font-heading)" }}>+{extraCount}</span>
                      )}
                    </div>
                  </div>
                  <p className="text-text-darker text-sm w-[150px] shrink-0" style={{ fontFamily: "var(--font-body)" }}>{a.date}</p>
                  <div className="w-[150px] shrink-0">
                    <span className="px-2 py-1 rounded-full text-[11px] font-semibold" style={{ backgroundColor: badge.bg, color: badge.text, fontFamily: "var(--font-body)" }}>
                      {badge.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
