import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, useParams } from "react-router";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { format } from "date-fns";
import { ArrowLeft, ChevronRight, MapPin, Briefcase, Users, Search, ListFilter } from "lucide-react";
import { NotificationBell } from "../../components/shared/NotificationBell";
import { TopBarUserMenu } from "../../components/shared/TopBarUserMenu";
import { StatusToastStack, StatusToastItem, Toast } from "../../components/shared/StatusToast";
import { CandidateProfileModal, candidateToProfileData } from "../../components/shared/CandidateProfileModal";
import { KanbanColumn } from "../../components/pipeline/KanbanColumn";
import { BulkActionBar, BulkMoveModal, BulkRejectModal } from "../../components/pipeline/BulkActions";
import { ConfirmMoveModal } from "../../components/pipeline/ConfirmMoveModal";
import { ScheduleInterviewModal, INTERVIEW_DEFAULT_DURATION_MIN } from "../../components/pipeline/ScheduleInterviewModal";
import { PipelineDetailFilterPanel, PipelineDetailFilterValues, EMPTY_DETAIL_FILTERS } from "../../components/pipeline/PipelineDetailFilterPanel";
import { jobRows } from "../../mocks/lowongan";
import {
  PIPELINE_JOBS, CANDIDATES_BY_JOB, PIPELINE_STAGES, PipelineStage, Candidate,
  EXPORT_STAGE_TO_PIPELINE_STAGE, DEFAULT_CREATED_BY, generateFallbackCandidates,
} from "../../mocks/pipeline";

export function PipelineDetailContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const pipelineJob = PIPELINE_JOBS.find(j => j.id === id);
  const fallbackJobRow = !pipelineJob ? jobRows.find(j => j.id === id) : undefined;
  const job = pipelineJob ?? (fallbackJobRow && {
    id: fallbackJobRow.id, nama: fallbackJobRow.nama,
    status: fallbackJobRow.status === "Diterbitkan" ? "Diterbitkan" as const : "Tutup" as const,
    lokasi: fallbackJobRow.lokasi, tipe: fallbackJobRow.setting, kategori: fallbackJobRow.kategori,
    createdBy: fallbackJobRow.dibuatOleh,
    counts: { Melamar: fallbackJobRow.stats.belumDiproses ?? 0, Penyaringan: fallbackJobRow.stats.terseleksi ?? 0, Wawancara: fallbackJobRow.stats.wawancara ?? 0, Ditawarkan: 0, Diterima: 0, Ditolak: 0 },
  });
  const [candidates, setCandidates] = useState<Candidate[]>(() => {
    if (id && CANDIDATES_BY_JOB[id]) return CANDIDATES_BY_JOB[id];
    return fallbackJobRow ? generateFallbackCandidates(fallbackJobRow) : [];
  });
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(() => {
    const openId = (location.state as { openCandidateId?: string } | null)?.openCandidateId;
    if (!openId || !id) return null;
    return (CANDIDATES_BY_JOB[id] ?? []).find(c => c.id === openId) ?? null;
  });
  const [viewedCandidateIds, setViewedCandidateIds] = useState<Set<string>>(() => {
    const openId = (location.state as { openCandidateId?: string } | null)?.openCandidateId;
    if (openId) return new Set([openId]);
    // Dummy read/unread seed: every card starts read except in "Melamar" (the first stage),
    // where only organic applicants show the unread indicator — invited candidates were
    // already reached out to by a recruiter, so they never need the "new" dot — and even
    // among those, only the first one starts read so the rest demonstrate the indicator.
    const jobCandidates = (id && CANDIDATES_BY_JOB[id]) ?? (fallbackJobRow ? generateFallbackCandidates(fallbackJobRow) : []);
    const seeded = new Set<string>();
    let melamarOrganicSeen = 0;
    for (const c of jobCandidates) {
      if (c.stage === "Melamar" && !c.isInvited) {
        if (melamarOrganicSeen === 0) seeded.add(c.id);
        melamarOrganicSeen++;
      } else {
        seeded.add(c.id);
      }
    }
    return seeded;
  });
  const handleOpenCandidate = (c: Candidate) => {
    setSelectedCandidate(c);
    setViewedCandidateIds(prev => (prev.has(c.id) ? prev : new Set(prev).add(c.id)));
  };
  const [highlightStage, setHighlightStage] = useState<PipelineStage | null>(() => {
    return (location.state as { highlightStage?: PipelineStage } | null)?.highlightStage ?? null;
  });
  useEffect(() => {
    if (!highlightStage) return;
    const t = setTimeout(() => setHighlightStage(null), 1200);
    return () => clearTimeout(t);
  }, [highlightStage]);

  const [search, setSearch] = useState("");
  const [pendingMove, setPendingMove] = useState<{ candidateId: string; from: PipelineStage; to: PipelineStage } | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<PipelineDetailFilterValues>(EMPTY_DETAIL_FILTERS);

  // Auto-scroll the kanban board horizontally while dragging a card near its edges,
  // so cards can be dropped on columns (e.g. earlier stages) currently scrolled out of view.
  const kanbanScrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = kanbanScrollRef.current;
    if (!el) return;
    const edgeSize = 100;
    let scrollSpeed = 0;
    // requestAnimationFrame is suppressed by browsers during an active native HTML5
    // drag, so a setInterval loop is used instead to keep auto-scroll running.
    const intervalId = window.setInterval(() => {
      if (scrollSpeed !== 0) el.scrollLeft += scrollSpeed;
    }, 16);

    const handleDragOver = (e: DragEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX;
      if (x < rect.left + edgeSize) {
        scrollSpeed = -Math.max(3, (edgeSize - (x - rect.left)) / 3);
      } else if (x > rect.right - edgeSize) {
        scrollSpeed = Math.max(3, (edgeSize - (rect.right - x)) / 3);
      } else {
        scrollSpeed = 0;
      }
    };
    const handleDragEnd = () => { scrollSpeed = 0; };

    el.addEventListener("dragover", handleDragOver);
    el.addEventListener("drop", handleDragEnd);
    el.addEventListener("dragleave", handleDragEnd);
    return () => {
      window.clearInterval(intervalId);
      el.removeEventListener("dragover", handleDragOver);
      el.removeEventListener("drop", handleDragEnd);
      el.removeEventListener("dragleave", handleDragEnd);
    };
  }, []);

  // Multi-select + bulk actions
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [bulkModal, setBulkModal] = useState<"move" | "reject" | null>(null);
  const [pendingBulkDragMove, setPendingBulkDragMove] = useState<PipelineStage | null>(null);
  const [downloadCount, setDownloadCount] = useState<number | null>(null);

  // Schedule interview (EMP-07)
  const [schedulingCandidate, setSchedulingCandidate] = useState<Candidate | null>(null);
  const [scheduleModalMode, setScheduleModalMode] = useState<"edit" | "confirmCancel">("edit");
  const [actionToasts, setActionToasts] = useState<StatusToastItem[]>([]);
  const [joiningCandidateName, setJoiningCandidateName] = useState<string | null>(null);

  const pushActionToast = (variant: "success" | "error", message: string) => {
    const id = Date.now() + Math.random();
    setActionToasts(prev => [...prev, { id, variant, message }]);
    setTimeout(() => setActionToasts(prev => prev.filter(t => t.id !== id)), 4000);
  };
  const dismissActionToast = (id: number) => setActionToasts(prev => prev.filter(t => t.id !== id));

  const openScheduleModal = (c: Candidate) => { setSchedulingCandidate(c); setScheduleModalMode("edit"); };
  const openCancelModal = (c: Candidate) => { setSchedulingCandidate(c); setScheduleModalMode("confirmCancel"); };

  const handleJoinMeetingFromCard = (c: Candidate) => {
    setJoiningCandidateName(c.name);
    setTimeout(() => setJoiningCandidateName(null), 4000);
  };

  if (!job) return (
    <div className="flex-1 flex items-center justify-center bg-surface">
      <button onClick={() => navigate("/lowongan")} className="text-brand-primary hover:underline text-[14px]">← Kembali ke Daftar Lowongan</button>
    </div>
  );

  const filteredCandidates = candidates.filter(c => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    const matchStage = !activeFilters.stage || c.stage === EXPORT_STAGE_TO_PIPELINE_STAGE[activeFilters.stage];
    const matchSource = !activeFilters.source
      || (activeFilters.source === "Diundang recruiter" ? !!c.isInvited : activeFilters.source === "Melamar langsung" ? !c.isInvited : true);
    return matchSearch && matchStage && matchSource;
  });
  const pendingCandidate = pendingMove ? candidates.find(c => c.id === pendingMove.candidateId) : null;

  const toggleSelect = (candidateId: string) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      next.has(candidateId) ? next.delete(candidateId) : next.add(candidateId);
      return next;
    });
  };
  const clearSelection = () => setSelectedIds(new Set());

  const handleDropRequest = (candidateId: string, from: PipelineStage, to: PipelineStage) => {
    // Dragging a card that's part of a multi-selection moves the whole selection
    if (selectedIds.has(candidateId) && selectedIds.size >= 2) {
      setPendingBulkDragMove(to);
    } else {
      setPendingMove({ candidateId, from, to });
    }
  };

  const confirmMove = (rejectionReason?: string) => {
    if (!pendingMove) return;
    setCandidates(prev => prev.map(c => c.id === pendingMove.candidateId ? { ...c, stage: pendingMove.to, rejectionReason: pendingMove.to === "Ditolak" ? rejectionReason : c.rejectionReason } : c));
    setPendingMove(null);
  };

  const confirmBulkDragMove = () => {
    if (!pendingBulkDragMove) return;
    const target = pendingBulkDragMove;
    setCandidates(prev => prev.map(c => selectedIds.has(c.id) ? { ...c, stage: target } : c));
    setPendingBulkDragMove(null);
    clearSelection();
  };

  const handleBulkMove = (targetStage: PipelineStage) => {
    setCandidates(prev => prev.map(c => selectedIds.has(c.id) ? { ...c, stage: targetStage } : c));
    setBulkModal(null);
    clearSelection();
  };

  const handleBulkReject = () => {
    setCandidates(prev => prev.map(c => selectedIds.has(c.id) ? { ...c, stage: "Ditolak" } : c));
    setBulkModal(null);
    clearSelection();
  };

  const handleDownload = () => {
    setDownloadCount(selectedIds.size);
    clearSelection();
    setTimeout(() => setDownloadCount(null), 4000);
  };

  const handleScheduleConfirm = ({ dateTime, displayDate, durationMinutes, note, timezone, method, meetingLink, locationName, address, mapsLink }: { dateTime: Date; displayDate: Date; durationMinutes: number; note: string; timezone: string; method: "online" | "offline"; meetingLink?: string; locationName?: string; address?: string; mapsLink?: string }) => {
    if (!schedulingCandidate) return;
    const label = `${format(displayDate, "d MMM · HH:mm")} ${timezone}`;
    const wasScheduled = !!schedulingCandidate.interviewSchedule;
    setCandidates(prev => prev.map(c => c.id === schedulingCandidate.id
      ? { ...c, interviewSchedule: label, interviewDuration: durationMinutes, interviewNote: note, interviewDateTime: dateTime, interviewTimezone: timezone, interviewMethod: method, interviewMeetingLink: meetingLink, interviewLocationName: locationName, interviewAddress: address, interviewMapsLink: mapsLink }
      : c));
    pushActionToast("success", wasScheduled ? "Jadwal interview berhasil diperbarui" : "Interview berhasil dijadwalkan");
    setSchedulingCandidate(null);
  };

  const handleCancelSchedule = (cancelNote: string) => {
    if (!schedulingCandidate) return;
    setCandidates(prev => prev.map(c => c.id === schedulingCandidate.id
      ? { ...c, interviewSchedule: undefined, interviewDuration: undefined, interviewNote: cancelNote || undefined, interviewDateTime: undefined, interviewTimezone: undefined, interviewMethod: undefined, interviewMeetingLink: undefined, interviewLocationName: undefined, interviewAddress: undefined, interviewMapsLink: undefined }
      : c));
    pushActionToast("success", "Jadwal interview berhasil dihapus");
    setSchedulingCandidate(null);
  };

  return (
    <div className="flex-1 min-w-0 h-full flex flex-col overflow-hidden bg-surface">
      {/* Top bar */}
      <div className="bg-white border-b border-border-lighter px-10 py-5 flex items-center justify-end shrink-0">
        <div className="flex items-center gap-4">
          <NotificationBell />
          <TopBarUserMenu />
        </div>
      </div>

      {/* Title */}
      <div className="px-10 pt-6 pb-4 shrink-0 flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/lowongan")} className="text-text-default hover:text-brand-primary transition-colors"><ArrowLeft size={20} /></button>
          <p className="text-[24px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Tahapan Rekrutmen Detail</p>
        </div>
        <div className="flex items-center gap-2 pl-9" style={{ fontFamily: "var(--font-body)" }}>
          <button onClick={() => navigate("/lowongan")} className="text-[14px] font-semibold text-[#ff6b35] hover:underline">Daftar Lowongan</button>
          <ChevronRight size={14} className="text-icon-default" />
          <span className="text-[14px] text-text-muted">Tahapan Rekrutmen Detail</span>
        </div>
      </div>

      {/* Kanban board card */}
      <div className="flex-1 min-h-0 px-10 pb-8 overflow-hidden">
        <div className="bg-white rounded-xl border border-border-lighter h-full flex flex-col overflow-hidden">
          {/* Header row inside card */}
          <div className="border-b border-[#e2e8f0] p-6 flex items-center justify-between gap-4 shrink-0 flex-wrap">
            <div className="flex flex-col gap-1">
              <p className="text-[21px] font-bold text-[#0f172a]" style={{ fontFamily: "var(--font-body)" }}>{job.nama}</p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <MapPin size={14} className="text-[#475569]" />
                  <span className="text-[12px] text-[#475569]" style={{ fontFamily: "var(--font-body)" }}>{job.lokasi}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase size={14} className="text-[#475569]" />
                  <span className="text-[12px] text-[#475569]" style={{ fontFamily: "var(--font-body)" }}>{job.tipe}</span>
                </div>
                <span className="text-[#e2e8f0]">|</span>
                <span className="text-[12px] text-[#475569]" style={{ fontFamily: "var(--font-body)" }}>Created by: {job.createdBy ?? DEFAULT_CREATED_BY}</span>
                <span className="text-[#e2e8f0]">|</span>
                <div className="flex items-center gap-1.5 rounded-full bg-[#eef3ff] px-2.5 py-0.5">
                  <Users size={12} className="text-brand-primary" />
                  <span className="text-[12px] font-semibold text-brand-primary" style={{ fontFamily: "var(--font-body)" }}>Total Pelamar: {candidates.length}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 shrink-0">
              <div className="bg-white border border-border-default rounded-xl h-10 flex items-center gap-2 px-3 w-[266px]">
                <Search size={14} className="text-icon-default shrink-0" />
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Cari Kandidat . . ."
                  className="flex-1 min-w-0 text-[13px] text-text-darker placeholder-[#c5c6c9] outline-none bg-transparent"
                  style={{ fontFamily: "var(--font-body)" }} />
              </div>
              <div className="relative shrink-0">
                <button
                  onClick={() => setFilterOpen(v => !v)}
                  className={`h-10 px-4 rounded-full border-[1.5px] bg-white flex items-center gap-2 hover:bg-gray-50 transition-colors ${filterOpen ? "border-brand-primary text-brand-primary" : "border-border-default text-text-darker"}`}
                >
                  <span className="text-[13px] font-bold" style={{ fontFamily: "var(--font-body)" }}>Filter</span>
                  <ListFilter size={14} className={filterOpen ? "text-brand-primary" : "text-icon-default"} />
                </button>
                {filterOpen && (
                  <PipelineDetailFilterPanel
                    onClose={() => setFilterOpen(false)}
                    onSave={setActiveFilters}
                    initial={activeFilters}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Kanban scroll area */}
          <div ref={kanbanScrollRef} className="hover-scrollbar flex-1 min-h-0 overflow-auto bg-surface p-8">
            <DndProvider backend={HTML5Backend}>
              <div className="flex gap-4 h-full" style={{ minWidth: `${PIPELINE_STAGES.length * 280}px` }}>
                {PIPELINE_STAGES.map(stage => (
                  <KanbanColumn
                    key={stage}
                    stage={stage}
                    candidates={filteredCandidates.filter(c => c.stage === stage)}
                    onDropRequest={handleDropRequest}
                    onOpenCandidate={handleOpenCandidate}
                    onScheduleClick={openScheduleModal}
                    onJoinMeeting={handleJoinMeetingFromCard}
                    selectedIds={selectedIds}
                    selectionMode={selectedIds.size > 0}
                    onToggleSelect={toggleSelect}
                    activeCandidateId={selectedCandidate?.id ?? null}
                    highlighted={highlightStage === stage}
                    viewedCandidateIds={viewedCandidateIds}
                  />
                ))}
              </div>
            </DndProvider>
          </div>
        </div>
      </div>

      <BulkActionBar
        selectedIds={selectedIds}
        candidates={candidates}
        onMoveStage={() => setBulkModal("move")}
        onReject={() => setBulkModal("reject")}
        onDownload={handleDownload}
        onClear={clearSelection}
      />

      {selectedCandidate && (
        <CandidateProfileModal
          context="pipeline"
          data={candidateToProfileData(selectedCandidate)}
          pipelineCandidate={selectedCandidate}
          onClose={() => setSelectedCandidate(null)}
          onScheduleClick={openScheduleModal}
          onCancelClick={openCancelModal}
          onStageChangeRequest={(c, newStage) => {
            setSelectedCandidate(null);
            setPendingMove({ candidateId: c.id, from: c.stage, to: newStage });
          }}
        />
      )}
      {pendingMove && pendingCandidate && (
        <ConfirmMoveModal
          candidateName={pendingCandidate.name}
          toStage={pendingMove.to}
          onCancel={() => setPendingMove(null)}
          onConfirm={confirmMove}
        />
      )}
      {pendingBulkDragMove && (
        <ConfirmMoveModal
          candidateName={`${selectedIds.size} kandidat`}
          toStage={pendingBulkDragMove}
          onCancel={() => setPendingBulkDragMove(null)}
          onConfirm={confirmBulkDragMove}
        />
      )}
      {bulkModal === "move" && (
        <BulkMoveModal
          count={selectedIds.size}
          onConfirm={handleBulkMove}
          onCancel={() => setBulkModal(null)}
        />
      )}
      {bulkModal === "reject" && (
        <BulkRejectModal
          names={candidates.filter(c => selectedIds.has(c.id)).map(c => c.name)}
          onConfirm={handleBulkReject}
          onCancel={() => setBulkModal(null)}
        />
      )}
      {downloadCount != null && (
        <Toast
          title={`Mengunduh ${downloadCount} CV sebagai ZIP...`}
          subtitle={`cv_kandidat_${downloadCount}x.zip`}
          onDismiss={() => setDownloadCount(null)}
        />
      )}
      {schedulingCandidate && (
        <ScheduleInterviewModal
          candidateName={schedulingCandidate.name}
          initial={schedulingCandidate.interviewDateTime && schedulingCandidate.interviewTimezone ? {
            dateTime: schedulingCandidate.interviewDateTime,
            timezone: schedulingCandidate.interviewTimezone,
            durationMinutes: schedulingCandidate.interviewDuration ?? INTERVIEW_DEFAULT_DURATION_MIN,
            note: schedulingCandidate.interviewNote ?? "",
            method: schedulingCandidate.interviewMethod,
            meetingLink: schedulingCandidate.interviewMeetingLink,
            locationName: schedulingCandidate.interviewLocationName,
            address: schedulingCandidate.interviewAddress,
            mapsLink: schedulingCandidate.interviewMapsLink,
          } : null}
          initialMode={scheduleModalMode}
          onCancel={() => setSchedulingCandidate(null)}
          onConfirm={handleScheduleConfirm}
          onCancelSchedule={handleCancelSchedule}
        />
      )}
      {joiningCandidateName && (
        <Toast
          title="Membuka ruang tunggu interview"
          subtitle={`Menghubungkan ke sesi video dengan ${joiningCandidateName}...`}
          onDismiss={() => setJoiningCandidateName(null)}
        />
      )}
      <StatusToastStack toasts={actionToasts} onDismiss={dismissActionToast} />
    </div>
  );
}
