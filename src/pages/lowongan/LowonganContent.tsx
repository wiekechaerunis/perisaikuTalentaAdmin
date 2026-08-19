import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { Search, ListFilter, Download, X, MapPin, Building2, Calendar, Megaphone } from "lucide-react";
import { format } from "date-fns";
import svgLowonganPaths from "../../imports/LowonganPageJobList/svg-we7j378d6k";
import { NotificationBell } from "../../components/shared/NotificationBell";
import { TopBarUserMenu } from "../../components/shared/TopBarUserMenu";
import { ExportApplicantsPanel, ExportApplicantFilters } from "../../components/lowongan/ExportApplicantsPanel";
import { FilterValues, EMPTY_FILTERS } from "../../components/lowongan/FilterModal";
import { LowonganActionIcons } from "../../components/lowongan/LowonganActionIcons";
import { DeleteConfirmModal, RepostConfirmModal } from "../../components/lowongan/ConfirmModals";
import { jobRows, jobStatusStyle, getJobAging } from "../../mocks/lowongan";
import { PIPELINE_JOBS, CANDIDATES_BY_JOB, PipelineStage, STAGE_DISPLAY_LABEL } from "../../mocks/pipeline";

function AgingDateIcon({ color }: { color: string }) {
  return <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M.834 3.75c0-.786 0-1.178.244-1.423.244-.244.637-.244 1.423-.244h5c.785 0 1.178 0 1.422.244.244.245.244.637.244 1.423 0 .196 0 .295-.061.356-.061.06-.16.06-.355.06h-7.5c-.197 0-.295 0-.356-.06C.834 4.045.834 3.946.834 3.75Zm0 3.75c0 .786 0 1.178.244 1.422.244.245.637.245 1.423.245h5c.785 0 1.178 0 1.422-.245.244-.244.244-.636.244-1.422V5.417c0-.197 0-.295-.061-.356C9.045 5 8.946 5 8.751 5h-7.5c-.197 0-.295 0-.356.061-.061.061-.061.16-.061.356V7.5Z" fill={color}/><path d="M2.918 1.25V2.5m4.167-1.25V2.5" stroke={color} strokeLinecap="round"/></svg>;
}

export function LowonganContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [rows, setRows] = useState(jobRows);
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [exportFilters, setExportFilters] = useState<ExportApplicantFilters>({ jobScope: "semua", selectedJob: "", period: "30 hari terakhir" });
  const [activeFilters, setActiveFilters] = useState<FilterValues>(() => {
    const incomingStatus = (location.state as { statusFilter?: string } | null)?.statusFilter;
    return incomingStatus ? { ...EMPTY_FILTERS, status: [incomingStatus] } : EMPTY_FILTERS;
  });
  const filterRef = useRef<HTMLDivElement>(null);

  const downloadFilteredApplicants = () => {
    const stageMap: Record<string, string> = { "Belum Diproses": "Melamar", "Terseleksi": "Penyaringan", "Interview": "Wawancara", "Talent Pool": "Ditawarkan", "Diterima": "Diterima", "Ditolak": "Ditolak" };
    const selectedJobNames = new Set((exportFilters.selectedJobs || exportFilters.selectedJob || "").split("||").filter(Boolean));
    const selectedPipelineJobs = PIPELINE_JOBS.filter(job => selectedJobNames.has(job.nama));
    const jobEntries = exportFilters.jobScope === "tertentu"
      ? selectedPipelineJobs.map(job => [job.id, CANDIDATES_BY_JOB[job.id] ?? []] as const)
      : Object.entries(CANDIDATES_BY_JOB);
    const applicants = jobEntries.flatMap(([jobId, candidates]) => candidates.map(candidate => ({ ...candidate, jobId }))).filter(candidate => {
      if (exportFilters.stage && candidate.stage !== stageMap[exportFilters.stage]) return false;
      if (exportFilters.city && candidate.lokasi !== exportFilters.city) return false;
      if (exportFilters.minScore && (candidate.rating ?? 0) < Number(exportFilters.minScore)) return false;
      if (exportFilters.maxScore && (candidate.rating ?? 0) > Number(exportFilters.maxScore)) return false;
      if (exportFilters.source === "Diundang recruiter" && !candidate.isInvited) return false;
      if (exportFilters.source === "Melamar langsung" && candidate.isInvited) return false;
      return true;
    });
    const headers = ["NIK KTP", "Nama", "Gender", "Usia", "Tgl Melamar", "Nomor WhatsApp", "Email", "Provinsi Domisili", "Kota", "Kabupaten Domisili", "Kecamatan Domisili", "Pendidikan Terakhir", "Jurusan", "Institusi Pendidikan", "Total Pengalaman Kerja", "Posisi Terakhir", "Perusahaan Terakhir", "Keahlian Utama", "Link Profil Kandidat"];
    const escapeCsv = (value: unknown) => `"${String(value ?? "").replace(/"/g, '""')}"`;
    const rows = applicants.map(candidate => ["", candidate.name, "", "", candidate.appliedDate, "", "", exportFilters.province, candidate.lokasi, "", exportFilters.district, exportFilters.education, "", "", candidate.pengalaman, candidate.role, candidate.company, "", `${window.location.origin}/pipeline/${candidate.jobId}`]);
    const csv = `\uFEFF${[headers, ...rows].map(row => row.map(escapeCsv).join(",")).join("\r\n")}`;
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" }); const url = URL.createObjectURL(blob); const link = document.createElement("a"); link.href = url; link.download = `pelamar-${exportFilters.jobScope === "semua" ? "semua-lowongan" : selectedJobNames.size === 1 ? Array.from(selectedJobNames)[0] : `${selectedJobNames.size}-lowongan`}-${format(new Date(), "dd-MM-yyyy")}.csv`; link.click(); URL.revokeObjectURL(url);
  };
  const [pendingRepostJobId, setPendingRepostJobId] = useState<string | null>(null);
  const [pendingCloseJobId, setPendingCloseJobId] = useState<string | null>(null);

  // Toast from navigation state
  const toastType = (location.state as { toast?: string } | null)?.toast ?? null;
  const [toast, setToast] = useState<string | null>(toastType);
  useEffect(() => {
    if (!toastType) return;
    setToast(toastType);
    // Clear navigation state so refresh doesn't re-show
    window.history.replaceState({}, "");
    const t = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(t);
  }, [toastType]);

  useEffect(() => {
    if (!filterOpen) return;
    const handler = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) setFilterOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [filterOpen]);

  // One chip per selected value, not per field
  const activeChips: { fieldKey: keyof FilterValues; label: string; value: string }[] = [
    ...activeFilters.status.map((v) => ({ fieldKey: "status" as const, label: "Status", value: v })),
    ...activeFilters.kategori.map((v) => ({ fieldKey: "kategori" as const, label: "Kategori Pekerjaan", value: v })),
    ...activeFilters.lokasi.map((v) => ({ fieldKey: "lokasi" as const, label: "Lokasi", value: v })),
    ...activeFilters.modeKerja.map((v) => ({ fieldKey: "modeKerja" as const, label: "Mode Kerja", value: v })),
    ...activeFilters.dibuatOleh.map((v) => ({ fieldKey: "dibuatOleh" as const, label: "Dibuat Oleh", value: v })),
  ];

  const removeChipValue = (fieldKey: keyof FilterValues, value: string) =>
    setActiveFilters((prev) => ({
      ...prev,
      [fieldKey]: (prev[fieldKey] as string[]).filter((v) => v !== value),
    }));

  const hasFilters = activeChips.length > 0;

  const handlePromote = (jobId: string) => {
    setRows((prev) => prev.map((j) => (j.id === jobId ? { ...j, promosi: "dipromosikan" as const } : j)));
  };

  const handleCloseJob = (jobId: string) => {
    setRows((prev) => prev.map((j) => (j.id === jobId ? { ...j, status: "Tutup" as const, promosi: "nonaktif" as const } : j)));
  };

  const handleRepostJob = (jobId: string) => {
    setRows((prev) => prev.map((j) => (j.id === jobId ? { ...j, status: "Diterbitkan" as const, promosi: "aktif" as const } : j)));
    setToast("reposted");
    setTimeout(() => setToast(null), 4000);
  };

  const goToStage = (job: { id: string; nama: string }, stage: PipelineStage) => {
    const pipelineJob = PIPELINE_JOBS.find((pj) => pj.nama === job.nama);
    navigate(`/pipeline/${pipelineJob ? pipelineJob.id : job.id}`, { state: { highlightStage: stage } });
  };

  const filtered = rows.filter((j) => {
    const matchSearch = j.nama.toLowerCase().includes(search.toLowerCase()) || j.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = activeFilters.status.length === 0 || activeFilters.status.includes(j.status);
    const matchKategori = activeFilters.kategori.length === 0 || activeFilters.kategori.includes(j.kategori);
    const matchLokasi = activeFilters.lokasi.length === 0 || activeFilters.lokasi.includes(j.lokasi);
    const matchMode = activeFilters.modeKerja.length === 0 || activeFilters.modeKerja.includes(j.setting);
    return matchSearch && matchStatus && matchKategori && matchLokasi && matchMode;
  });

  return (
    <div className="flex-1 min-w-0 h-full overflow-y-auto bg-surface">
      {/* Header */}
      <div className="bg-white border-b border-border-lighter px-10 py-5 flex items-center justify-end shrink-0 relative">
        {/* Toast */}
        {toast && (
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-40">
            <div className="bg-[#fafffb] drop-shadow-[0px_8px_12px_rgba(0,0,0,0.08)] flex gap-3 items-center px-4 py-3 rounded-xl border border-success whitespace-nowrap">
              <div className="bg-[#33893c] rounded-xl size-6 flex items-center justify-center shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.6662 3.5L5.25017 9.9162L2.3338 6.99975" stroke="white" strokeLinecap="round" strokeWidth="2" /></svg>
              </div>
              <p className="text-success text-[14px] font-semibold" style={{ fontFamily: "var(--font-body)" }}>
                {toast === "published" ? "Lowongan berhasil dibuat" : toast === "reposted" ? "Lowongan berhasil diposting ulang" : "Lowongan berhasil disimpan sebagai draft"}
              </p>
              <button onClick={() => setToast(null)} className="bg-white rounded-xl size-6 flex items-center justify-center border border-[#33893c] shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="#33893C" strokeLinecap="round" strokeWidth="2" /></svg>
              </button>
            </div>
          </div>
        )}
        <div className="flex items-center gap-4">
          <NotificationBell />
          <TopBarUserMenu />
        </div>
      </div>

      <div className="flex flex-col gap-8 pb-10">
        {/* Page title */}
        <div className="flex items-center justify-between px-10 pt-8">
          <div>
            <p className="text-text-default text-[28px] font-bold leading-8" style={{ fontFamily: "var(--font-body)" }}>Lowongan</p>
            <p className="text-text-muted text-sm mt-1" style={{ fontFamily: "var(--font-body)" }}>Kelola semua lowongan pekerjaan Anda di sini</p>
          </div>
          <button onClick={() => navigate("/post-job")} className="bg-brand-primary h-12 px-6 rounded-full text-white font-bold text-base hover:bg-brand-primary-hover transition-colors" style={{ fontFamily: "var(--font-body)" }}>
            Buat Lowongan Baru
          </button>
        </div>

        {/* Table card */}
        <div className="px-10">
          <div className="bg-white rounded-xl border border-border-lighter flex flex-col gap-6 p-4">
            {/* Table toolbar */}
            <div className="flex items-center justify-between">
              <p className="text-text-default text-base font-bold" style={{ fontFamily: "var(--font-body)" }}>Daftar Lowongan</p>
              <div className="flex gap-5 items-center">
                {/* Search */}
                <div className="bg-white h-10 rounded-xl border border-border-default flex items-center gap-2 px-3 w-[378px]">
                  <Search size={14} className="text-icon-default shrink-0" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Cari Nama Posisi"
                    className="flex-1 min-w-0 text-xs bg-transparent outline-none text-text-default placeholder-[#777980]"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>
                {/* Filter button */}
                <div ref={filterRef} className="relative">
                  <button
                    onClick={() => setFilterOpen((v) => !v)}
                    className={`bg-white h-10 flex items-center gap-2 px-3 rounded-full border-[1.5px] text-text-darker text-sm font-bold transition-colors ${filterOpen ? "border-brand-primary text-brand-primary" : "border-border-default"}`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Filter
                    <ListFilter size={14} className={filterOpen ? "text-brand-primary" : "text-icon-default"} />
                  </button>
                  {filterOpen && (
                    <ExportApplicantsPanel
                      onClose={() => setFilterOpen(false)}
                      onApply={setExportFilters}
                      initial={exportFilters}
                    />
                  )}
                </div>
                <div className="group relative">
                  <button
                    type="button"
                    aria-label="Export CSV"
                    onClick={downloadFilteredApplicants}
                    className="flex size-10 items-center justify-center rounded-full border-[1.5px] border-brand-primary bg-white text-brand-primary transition-colors hover:bg-[#eef3ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b81f3]/30"
                  >
                    <Download size={16} strokeWidth={2} />
                  </button>
                  <span role="tooltip" className="pointer-events-none absolute right-0 top-full z-30 mt-2 whitespace-nowrap rounded-lg bg-[#252b3a] px-3 py-2 text-[11px] font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
                    Export CSV
                  </span>
                </div>
              </div>
            </div>


            {/* Filter aktif bar */}
            {hasFilters && (
              <div className="flex items-center gap-2 flex-wrap -mt-3">
                <span className="text-[12px] text-text-darker font-medium shrink-0" style={{ fontFamily: "var(--font-body)" }}>
                  Filter Aktif :
                </span>
                {activeChips.map((chip) => (
                  <div
                    key={`${chip.fieldKey}-${chip.value}`}
                    className="bg-white h-6 flex items-center gap-2 pl-3 pr-1 rounded-full border border-border-default"
                  >
                    <span className="text-[10px] text-[#333] leading-4" style={{ fontFamily: "var(--font-body)" }}>
                      {chip.label}: {chip.value}
                    </span>
                    <button
                      onClick={() => removeChipValue(chip.fieldKey, chip.value)}
                      className="size-[14px] flex items-center justify-center rounded-full hover:bg-gray-100 shrink-0"
                    >
                      <X size={9} className="text-icon-default" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => setActiveFilters(EMPTY_FILTERS)}
                  className="text-[10px] font-bold text-[#c93f2a] hover:text-[#a83222] transition-colors shrink-0"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Hapus Semua
                </button>
              </div>
            )}

            {/* Inner table card */}
            <div className="border border-border-lighter rounded-xl overflow-x-auto">
              {/* Header */}
              <div className="bg-[#f4f5f7] border-b border-border-lighter grid grid-cols-[minmax(280px,2fr)_minmax(300px,1.6fr)_170px_180px_110px_60px] items-center gap-6 px-4 py-3 min-w-[1200px]">
                <div>
                  <span className="text-text-darker text-[12px] font-bold" style={{ fontFamily: "var(--font-body)" }}>LOWONGAN INFO</span>
                </div>
                <div className="text-center">
                  <span className="text-text-darker text-[12px] font-bold" style={{ fontFamily: "var(--font-body)" }}>JUMLAH PELAMAR PER STATUS</span>
                </div>
                <div className="text-center">
                  <p className="text-text-darker text-[12px] font-bold whitespace-nowrap" style={{ fontFamily: "var(--font-body)" }}>PROMOSI LOWONGAN</p>
                  <p className="text-text-darker text-[12px] font-bold" style={{ fontFamily: "var(--font-body)" }}>10/10</p>
                </div>
                <div className="text-left">
                  <span className="text-text-darker text-[12px] font-bold" style={{ fontFamily: "var(--font-body)" }}>DIBUAT OLEH</span>
                </div>
                <div className="text-center">
                  <span className="text-text-darker text-[12px] font-bold" style={{ fontFamily: "var(--font-body)" }}>STATUS</span>
                </div>
                <div className="text-center">
                  <span className="text-text-darker text-[12px] font-bold" style={{ fontFamily: "var(--font-body)" }}>AKSI</span>
                </div>
              </div>

              {/* Rows */}
              {filtered.map((job) => {
                const badge = jobStatusStyle[job.status];
                const aging = job.status === "Diterbitkan" ? getJobAging(job.dibuat) : null;
                const statPills: { value: number | null; label: string; bg: string; stage: PipelineStage }[] = [
                  { value: job.stats.belumDiproses, label: STAGE_DISPLAY_LABEL.Melamar, bg: "rgba(43,129,243,0.1)", stage: "Melamar" },
                  { value: job.stats.terseleksi, label: STAGE_DISPLAY_LABEL.Penyaringan, bg: "rgba(14,165,233,0.1)", stage: "Penyaringan" },
                  { value: job.stats.wawancara, label: STAGE_DISPLAY_LABEL.Wawancara, bg: "rgba(245,158,11,0.1)", stage: "Wawancara" },
                ];
                const openPrimaryAction = () => navigate(job.status === "Draf" ? `/edit-job/${job.id}` : `/lowongan/${job.id}`);
                return (
                  <div
                    key={job.id}
                    role="link"
                    tabIndex={0}
                    aria-label={job.status === "Draf" ? `Edit draf ${job.nama}` : `Lihat detail ${job.nama}`}
                    title={job.status === "Draf" ? "Klik untuk melanjutkan edit" : "Klik untuk melihat detail"}
                    onClick={(event) => {
                      if ((event.target as HTMLElement).closest("button, a, input, select, textarea")) return;
                      openPrimaryAction();
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openPrimaryAction();
                      }
                    }}
                    className="border-b border-border-lighter grid grid-cols-[minmax(280px,2fr)_minmax(300px,1.6fr)_170px_180px_110px_60px] items-center gap-6 p-4 min-w-[1200px] cursor-pointer hover:bg-[#f7faff] focus-visible:bg-[#f7faff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#2b81f3] transition-colors"
                  >
                    {/* Lowongan info */}
                    <div className="min-w-0 flex flex-col gap-1.5">
                      <p className="text-text-darker text-sm font-semibold" style={{ fontFamily: "var(--font-body)" }}>{job.nama}</p>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 text-text-lighter text-[12px]" style={{ fontFamily: "var(--font-body)" }}>
                          <MapPin size={10} />{job.lokasi}
                        </span>
                        <span className="flex items-center gap-1 text-text-lighter text-[12px]" style={{ fontFamily: "var(--font-body)" }}>
                          <Building2 size={10} />{job.setting}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[12px] text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>
                        {job.status === "Diterbitkan" ? (
                          <>
                            <span className="group/aging relative flex size-3 items-center justify-center">
                              <AgingDateIcon color={aging!.color} />
                              <span role="tooltip" className="pointer-events-none absolute bottom-full left-0 z-40 mb-2 w-max max-w-[220px] rounded-lg bg-[#252b3a] px-3 py-2 text-[11px] font-medium leading-4 text-white opacity-0 shadow-lg transition-opacity group-hover/aging:opacity-100">Aging lowongan: {aging!.days} hari ({aging!.label})</span>
                            </span>
                            <span>Dibuat {job.dibuat}</span>
                            <span className="size-[3px] rounded-full bg-text-lighter" />
                            <span>Berakhir {job.tutup}</span>
                          </>
                        ) : job.status === "Tutup" ? (
                          <span className="flex items-center gap-1"><Calendar size={10} />Ditutup pada {job.tutup}</span>
                        ) : (
                          <span className="flex items-center gap-1"><Calendar size={10} />Belum Dibuat</span>
                        )}
                      </div>
                    </div>

                    {/* Jumlah pelamar per status */}
                    <div className="min-w-0 flex items-center justify-center gap-4">
                      {statPills.map((s, i) => (
                        <React.Fragment key={s.label}>
                          {i > 0 && <span className="text-[#647396] text-[12px]">|</span>}
                          <button
                            type="button"
                            onClick={(event) => { event.stopPropagation(); goToStage(job, s.stage); }}
                            title={`Lihat kandidat tahap ${s.label}`}
                            className="group -m-2 flex flex-col items-center gap-1 rounded-lg p-2 cursor-pointer transition-colors hover:bg-[#eef3ff]"
                          >
                            <span
                              className="px-1.5 py-0.5 rounded text-[#374151] text-[12px] font-bold"
                              style={{ backgroundColor: s.bg, fontFamily: "var(--font-heading)" }}
                            >
                              {s.value ?? "-"}
                            </span>
                            <span className="text-[#475569] group-hover:text-brand-primary text-[12px] font-medium whitespace-nowrap transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                              {s.label}
                            </span>
                          </button>
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Promosi lowongan */}
                    <div className="flex items-center justify-center">
                      {job.promosi === "dipromosikan" ? (
                        <span className="flex items-center gap-1 text-[#0284c7] text-sm font-medium whitespace-nowrap" style={{ fontFamily: "var(--font-body)" }}>
                          <Megaphone size={14} /> Dipromosikan
                        </span>
                      ) : job.promosi === "aktif" ? (
                        <button
                          onClick={() => handlePromote(job.id)}
                          className="h-[33px] w-[130px] rounded-[20px] border-[1.5px] border-brand-primary text-brand-primary text-[12px] font-bold hover:bg-[#ebf2ff] transition-colors"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          Promosikan
                        </button>
                      ) : (
                        <button
                          disabled
                          className="h-[33px] w-[130px] rounded-[20px] border-[1.5px] border-border-lighter bg-[#f6f4f4] text-[#a0a3ab] text-[12px] font-bold cursor-not-allowed"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          Promosikan
                        </button>
                      )}
                    </div>

                    {/* Dibuat oleh */}
                    <p className="min-w-0 truncate text-left text-text-darker text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
                      {job.dibuatOleh}
                    </p>

                    {/* Status */}
                    <div className="flex justify-center">
                      <span
                        className="px-2 py-1 rounded-full text-[11px] font-semibold inline-block"
                        style={{ backgroundColor: badge.bg, color: badge.text, minWidth: badge.w, textAlign: "center", fontFamily: "var(--font-body)" }}
                      >
                        {job.status}
                      </span>
                    </div>

                    {/* Aksi */}
                    <div className="flex justify-center relative">
                      <LowonganActionIcons status={job.status} jobId={job.id} jobNama={job.nama} onCloseJob={setPendingCloseJobId} onRepostJob={setPendingRepostJobId} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between p-6">
              <p className="text-text-muted text-sm" style={{ fontFamily: "var(--font-body)" }}>
                Menampilkan {filtered.length} dari {rows.length} lowongan
              </p>
              <div className="flex items-center gap-6">
                {/* Prev chevrons */}
                <div className="flex gap-2">
                  {[svgLowonganPaths.p17a2ab00, svgLowonganPaths.p1a9b5e00].map((_, i) => (
                    <button key={i} className="size-8 rounded-full border border-border-lighter flex items-center justify-center hover:bg-gray-50">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path clipRule="evenodd" d={svgLowonganPaths.p17a2ab00} fill="#606268" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgLowonganPaths.p1a9b5e00} fill="#606268" fillRule="evenodd" />
                      </svg>
                    </button>
                  ))}
                </div>
                {/* Page numbers */}
                <div className="flex gap-2">
                  {[1, 2, 3].map((n) => (
                    <button
                      key={n}
                      className={`size-8 rounded-md flex items-center justify-center text-sm font-semibold transition-colors ${n === 1 ? "bg-brand-primary text-white" : "border border-border-lighter text-text-default hover:bg-gray-50"}`}
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {n}
                    </button>
                  ))}
                </div>
                {/* Next chevrons */}
                <div className="flex gap-2">
                  {[0, 1].map((i) => (
                    <button key={i} className="size-8 rounded-full border border-border-lighter flex items-center justify-center hover:bg-gray-50">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="rotate-180">
                        <path clipRule="evenodd" d={svgLowonganPaths.p17a2ab00} fill="#606268" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgLowonganPaths.p1a9b5e00} fill="#606268" fillRule="evenodd" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {pendingRepostJobId && (
        <RepostConfirmModal
          onClose={() => setPendingRepostJobId(null)}
          onConfirm={() => { handleRepostJob(pendingRepostJobId); setPendingRepostJobId(null); }}
        />
      )}
      {pendingCloseJobId && (
        <DeleteConfirmModal
          onClose={() => setPendingCloseJobId(null)}
          onConfirm={() => { handleCloseJob(pendingCloseJobId); setPendingCloseJobId(null); }}
        />
      )}
    </div>
  );
}
