import { useState, useEffect, useRef } from "react";
import { X, ChevronDown, Info, Mail, Phone, Video, Download, Bookmark, Award, Calendar, Clock, MapPin, Pencil, Github, Linkedin, Link2 } from "lucide-react";
import { format } from "date-fns";
import imgCandidate from "../../imports/Frame626639/fb0866f26f42d40c2ae9ca60a1f6f85a45c71cad.png";
import imgInvitedFrame from "../../imports/InvitedBadge/avatar-framed.png";
import { StarRatingIcon, InviteCandidateIcon } from "./Icons";
import { Toast } from "./StatusToast";
import { Candidate, PipelineStage, PIPELINE_STAGES, STAGE_DISPLAY_LABEL, STAGE_DROPDOWN_CHIP_BG, ACTIVITY_LOG } from "../../mocks/pipeline";
import { SearchCandidate } from "../../mocks/cari-kandidat";

export interface CandidateProfileData {
  nama: string; role: string; ringkasan: string; rating?: number;
  email: string; phone: string;
  riwayatKerja: { posisi: string; perusahaan: string; periode: string; deskripsi: string }[];
  pendidikanList: { jenjang: string; institusi: string; periode: string }[];
  skills: string[]; sertifikasi: string[];
  tanggalLahir: string; jenisKelamin: string; domisili: string;
  lokasi: string; tipeKerja: string; gajiEkspektasi: string;
  portfolio: { platform: "github" | "linkedin"; url: string }[];
  catatan: { penulis: string; waktu: string; isi: string }[];
  rejectionReason?: string;
}

export function kecocokanLabel(rating: number): string {
  if (rating >= 4.4) return "Kecocokan Tinggi";
  if (rating >= 4.0) return "Kecocokan Sedang";
  return "Kecocokan Rendah";
}

export function kecocokanBreakdown(rating: number): { label: string; score: number }[] {
  const clamp = (v: number) => Math.max(0, Math.min(5, Math.round(v * 10) / 10));
  return [
    { label: "Skill", score: clamp(rating + 0.3) },
    { label: "Lokasi", score: clamp(rating + 0.5) },
    { label: "Tipe kerja", score: clamp(rating + 0.5) },
    { label: "Pengalaman", score: clamp(rating - 0.7) },
  ];
}

export function KecocokanInfoModal({ rating, onClose }: { rating: number; onClose: () => void }) {
  const fieldStyle = { fontFamily: "var(--font-body)" };
  const metrics = kecocokanBreakdown(rating);
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[60] p-6" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] p-8 w-full max-w-[480px] flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between w-full">
          <p className="text-[21px] font-bold text-text-default" style={fieldStyle}>Kecocokan Kandidat</p>
          <button onClick={onClose} className="bg-[#f3f4f6] rounded-full p-1 flex items-center justify-center hover:bg-gray-200 transition-colors">
            <X size={16} className="text-icon-default" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <StarRatingIcon size={26} />
            <div className="flex items-baseline gap-1">
              <span className="text-[28px] font-bold text-text-default" style={fieldStyle}>{rating}</span>
              <span className="text-[16px] text-border-default" style={fieldStyle}>/ 5</span>
            </div>
          </div>
          <span className="text-[14px] text-text-darker">|</span>
          <span className="text-[16px] font-medium text-text-lighter" style={fieldStyle}>{kecocokanLabel(rating)}</span>
        </div>

        <div className="flex flex-col gap-3.5 w-full">
          {metrics.map((m) => (
            <div key={m.label} className="flex items-center justify-between gap-3 w-full">
              <span className="text-[14px] font-semibold text-text-darker w-[110px] shrink-0" style={fieldStyle}>{m.label}</span>
              <div className="bg-[#f6f4f4] h-2 rounded flex-1 overflow-hidden">
                <div className="bg-brand-primary h-full rounded" style={{ width: `${(m.score / 5) * 100}%` }} />
              </div>
              <span className="flex items-baseline gap-0.5 w-[55px] shrink-0 justify-end">
                <span className="text-[14px] font-semibold text-text-default" style={fieldStyle}>{m.score.toFixed(1)}</span>
                <span className="text-[12px] text-border-default" style={fieldStyle}>/ 5</span>
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 w-full pt-1">
          <div className="w-full border-t border-dashed border-border-lighter" />
          <p className="text-[14px] text-text-darker text-center" style={fieldStyle}>Skor dihitung berdasarkan kecocokan kandidat dengan kebutuhan lowongan.</p>
        </div>
      </div>
    </div>
  );
}

export function candidateToProfileData(c: Candidate): CandidateProfileData {
  return {
    nama: c.name,
    role: c.role,
    ringkasan: `${c.role} dengan 8+ tahun pengalaman di backend development`,
    rating: c.rating,
    email: "budisantoso@email.com",
    phone: "+62 812 3456 7890",
    riwayatKerja: [
      { posisi: "Senior Software Engineer", perusahaan: "Gojek", periode: "Jan 2021 - Sekarang", deskripsi: "Memimpin tim backend 5 orang, mengembangkan microservices architecture untuk payment system." },
      { posisi: "Software Engineer", perusahaan: "Tokopedia", periode: "Mar 2018 - Des 2020", deskripsi: "Mengembangkan API gateway dan optimasi performa database." },
      { posisi: "Junior Developer", perusahaan: "Bukalapak", periode: "Jun 2016 - Feb 2018", deskripsi: "Membangun fitur checkout dan integrasi payment gateway." },
    ],
    pendidikanList: [
      { jenjang: "S2, Computer Science", institusi: "Universitas Indonesia", periode: "2019 - 2021" },
      { jenjang: "S1, Teknik Informatika", institusi: "Institut Teknologi Bandung", periode: "2012 - 2016" },
    ],
    skills: ["Go", "Java", "Python", "Kubernetes", "Docker", "PostgreSQL", "Redis", "gRPC", "System Design", "Microservices", "AWS", "CI/CD"],
    sertifikasi: [],
    tanggalLahir: "15-03-1992",
    jenisKelamin: "Laki-laki",
    domisili: "Jakarta Selatan",
    lokasi: c.lokasi,
    tipeKerja: "Hybrid",
    gajiEkspektasi: c.ekspektasiGaji,
    portfolio: [{ platform: "github", url: "github.com/budisantoso" }, { platform: "linkedin", url: "linkedin.com/in/budisantoso" }],
    catatan: [{ penulis: "Aditya Rahardjo", waktu: "16 Jun 2025", isi: "Kandidat sangat potensial. Pengalaman di Gojek sangat relevan dengan kebutuhan tim." }],
    rejectionReason: c.rejectionReason,
  };
}

export function searchCandidateToProfileData(c: SearchCandidate): CandidateProfileData {
  return {
    nama: c.nama, role: c.role, ringkasan: c.ringkasan, rating: c.rating,
    email: c.email, phone: c.phone,
    riwayatKerja: c.riwayatKerja, pendidikanList: c.pendidikanList,
    skills: c.skills, sertifikasi: c.sertifikasi,
    tanggalLahir: c.tanggalLahir, jenisKelamin: c.jenisKelamin, domisili: c.domisili,
    lokasi: c.lokasi, tipeKerja: c.tipeKerja, gajiEkspektasi: c.gaji,
    portfolio: c.portfolio, catatan: c.catatan,
  };
}

// ── Candidate Profile Modal ──────────────────────────────────────────────────

export function CandidateProfileModal({ context, data, onClose, pipelineCandidate, onScheduleClick, onCancelClick, onStageChangeRequest, onInvite, onBookmark, isSaved }: {
  context: "pipeline" | "talent-search";
  data: CandidateProfileData;
  onClose: () => void;
  pipelineCandidate?: Candidate;
  onScheduleClick?: (c: Candidate) => void;
  onCancelClick?: (c: Candidate) => void;
  onStageChangeRequest?: (candidate: Candidate, newStage: PipelineStage) => void;
  onInvite?: () => void;
  onBookmark?: () => void;
  isSaved?: boolean;
}) {
  const isPipeline = context === "pipeline";
  const [tab, setTab] = useState<"detail" | "activity">("detail");
  const [notes, setNotes] = useState(data.catatan.map(c => ({ author: c.penulis, time: c.waktu, text: c.isi })));
  const [noteInput, setNoteInput] = useState("");
  const [joiningMeeting, setJoiningMeeting] = useState(false);
  const [stageDropdownOpen, setStageDropdownOpen] = useState(false);
  const [scheduleMenuOpen, setScheduleMenuOpen] = useState(false);
  const [showKecocokanInfo, setShowKecocokanInfo] = useState(false);
  const scheduleMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scheduleMenuOpen) return;
    const handler = (e: MouseEvent) => {
      if (scheduleMenuRef.current && !scheduleMenuRef.current.contains(e.target as Node)) setScheduleMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [scheduleMenuOpen]);

  const handleSaveNote = () => {
    if (!noteInput.trim()) return;
    setNotes(prev => [{ author: "Budi Santoso", time: "Baru saja", text: noteInput.trim() }, ...prev]);
    setNoteInput("");
  };

  const handleJoinMeeting = () => {
    setJoiningMeeting(true);
    setTimeout(() => setJoiningMeeting(false), 4000);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-6" onClick={onClose}>
      <div className="bg-surface rounded-xl w-full max-w-[1100px] max-h-[90vh] flex flex-col overflow-hidden"
        onClick={e => e.stopPropagation()}>

        {/* Modal scroll area */}
        <div className="overflow-y-auto flex-1 px-10 py-8 flex flex-col gap-5">

          {/* Title row */}
          <div className="flex items-center justify-between shrink-0">
            <p className="text-[28px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Profile Kandidat</p>
            <button onClick={onClose} className="text-[#475569] hover:text-text-default transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Header card */}
          <div className="bg-white rounded-xl border border-[#e2e8f0] shadow-[0px_1px_1.5px_rgba(0,0,0,0.1)] p-8 flex flex-col gap-2 shrink-0">
          <div className="flex items-center gap-8">
            <div className="relative shrink-0" style={{ width: 120, height: 120 }}>
              <img src={imgCandidate} alt="" className="size-[120px] rounded-full object-cover" />
              {isPipeline && pipelineCandidate?.isInvited && (
                <img
                  src={imgInvitedFrame}
                  alt=""
                  className="absolute pointer-events-none max-w-none"
                  style={{ width: 156, height: 156, left: -18, top: -14 }}
                />
              )}
            </div>
            <div className="flex-1 min-w-0 flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-3 flex-wrap">
                  <p className="text-[28px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>{data.nama}</p>
                  {isPipeline && pipelineCandidate && onStageChangeRequest && (
                    <div className="relative">
                      <button
                        onClick={() => setStageDropdownOpen(v => !v)}
                        style={{ backgroundColor: STAGE_DROPDOWN_CHIP_BG[pipelineCandidate.stage] }}
                        className="flex items-center gap-2 px-3 py-2 border border-[#e2e8f0] rounded-lg cursor-pointer"
                      >
                        <span className="text-[13px] font-semibold text-text-default" style={{ fontFamily: "var(--font-body)" }}>{STAGE_DISPLAY_LABEL[pipelineCandidate.stage]}</span>
                        <ChevronDown size={16} className={`text-text-lighter transition-transform ${stageDropdownOpen ? "rotate-180" : ""}`} />
                      </button>
                      {stageDropdownOpen && (
                        <>
                          <div className="fixed inset-0 z-10" onClick={() => setStageDropdownOpen(false)} />
                          <div className="absolute z-20 top-[calc(100%+4px)] left-0 bg-white border border-border-default rounded-xl w-[160px] overflow-hidden shadow-lg">
                            {PIPELINE_STAGES.map((stage) => {
                              const isCurrent = stage === pipelineCandidate.stage;
                              const isPast = PIPELINE_STAGES.indexOf(stage) < PIPELINE_STAGES.indexOf(pipelineCandidate.stage);
                              const disabled = isCurrent || isPast;
                              return (
                                <button
                                  key={stage}
                                  disabled={disabled}
                                  title={isPast ? "Tidak bisa memindahkan kandidat ke tahap sebelumnya" : undefined}
                                  onClick={() => {
                                    if (disabled) return;
                                    setStageDropdownOpen(false);
                                    onStageChangeRequest(pipelineCandidate, stage);
                                  }}
                                  className={`w-full text-left px-3 h-10 flex items-center border-b border-border-lighter last:border-b-0 text-[12px] transition-colors ${isCurrent ? "bg-[#ebf2ff] text-text-darker cursor-default" : isPast ? "bg-white text-border-default cursor-not-allowed" : "bg-white text-text-darker hover:bg-gray-50 cursor-pointer"}`}
                                  style={{ fontFamily: "var(--font-body)" }}
                                >
                                  {STAGE_DISPLAY_LABEL[stage]}
                                </button>
                              );
                            })}
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
                {data.rating != null && (
                  <div className="flex items-center gap-2.5">
                    <span className="flex items-center gap-0.5 text-[14px] text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>
                      <StarRatingIcon size={18} />{data.rating}
                    </span>
                    <span className="text-[14px] text-text-darker">|</span>
                    <span className="text-[14px] text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>{kecocokanLabel(data.rating)}</span>
                    <button onClick={() => setShowKecocokanInfo(true)} className="text-text-subtle hover:text-icon-default transition-colors">
                      <Info size={18} />
                    </button>
                  </div>
                )}
                <p className="text-[16px] text-text-darker" style={{ fontFamily: "var(--font-body)" }}>{data.ringkasan}</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-text-subtle" />
                  <span className="text-[14px] text-text-darker" style={{ fontFamily: "var(--font-body)" }}>{data.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-text-subtle" />
                  <span className="text-[14px] text-text-darker" style={{ fontFamily: "var(--font-body)" }}>{data.phone}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-[220px] shrink-0">
              {isPipeline ? (
                <>
                  {pipelineCandidate?.stage === "Wawancara" && onScheduleClick && onCancelClick && (
                    !pipelineCandidate.interviewSchedule && (
                      <>
                        <button onClick={() => { onClose(); onScheduleClick(pipelineCandidate); }}
                          className="bg-brand-primary h-10 rounded-full flex items-center justify-center gap-2 text-white font-semibold text-[14px] hover:bg-brand-primary-hover transition-colors w-full" style={{ fontFamily: "var(--font-body)" }}>
                          <Video size={16} /> Set Jadwal
                        </button>
                        <div className="w-full border-t border-dashed border-border-default" />
                      </>
                    )
                  )}
                  <button className={`h-10 w-full rounded-full flex items-center justify-center gap-2 font-semibold text-[14px] transition-colors ${pipelineCandidate?.stage === "Wawancara" && !pipelineCandidate.interviewSchedule ? "border border-brand-primary bg-[#f8fafc] text-brand-primary hover:bg-[#ebf2ff]" : "bg-brand-primary text-white hover:bg-brand-primary-hover"}`} style={{ fontFamily: "var(--font-body)" }}>
                    <Download size={16} />
                    Download CV
                  </button>
                  <button className="bg-[#f8fafc] h-10 rounded-full border border-brand-primary flex items-center justify-center gap-2 text-brand-primary font-semibold text-[14px] hover:bg-[#ebf2ff] transition-colors w-full" style={{ fontFamily: "var(--font-body)" }}>
                    <Phone size={16} />
                    Hubungi Kandidat
                  </button>
                </>
              ) : (
                <>
                  <button onClick={onInvite} className="bg-brand-primary h-10 rounded-full flex items-center justify-center gap-2 text-white font-semibold text-[14px] hover:bg-brand-primary-hover transition-colors w-full" style={{ fontFamily: "var(--font-body)" }}>
                    <InviteCandidateIcon size={16} /> Undang Kandidat
                  </button>
                  <button
                    onClick={onBookmark}
                    className="bg-white h-10 rounded-full border-[1.5px] border-border-default flex items-center justify-center gap-2 text-text-darker font-semibold text-[14px] hover:bg-gray-50 transition-colors w-full"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <Bookmark size={16} fill={isSaved ? "currentColor" : "none"} /> {isSaved ? "Tersimpan" : "Simpan"}
                  </button>
                </>
              )}
            </div>
          </div>
          {isPipeline && pipelineCandidate?.stage === "Ditolak" && data.rejectionReason && (
            <div className="border-t border-dashed border-border-lighter pt-4">
              <p className="text-[14px] text-text-darker" style={{ fontFamily: "var(--font-body)" }}>
                Alasan Penolakan : {data.rejectionReason}
              </p>
            </div>
          )}
          </div>

          {/* Tab bar (pipeline only) */}
          {isPipeline && (
            <div className="flex items-end gap-8 border-b border-[#e2e8f0] shrink-0">
              <button onClick={() => setTab("detail")} className="flex flex-col items-center gap-2 pb-0">
                <span className={`text-[14px] pb-2 ${tab === "detail" ? "font-bold text-brand-primary" : "font-semibold text-text-subtle"}`} style={{ fontFamily: "var(--font-body)" }}>Detail Kandidat</span>
                {tab === "detail" && <div className="h-[3px] w-full bg-brand-primary rounded-full -mb-px" />}
              </button>
              <button onClick={() => setTab("activity")} className="flex flex-col items-center gap-2 pb-0">
                <span className={`text-[14px] pb-2 ${tab === "activity" ? "font-bold text-brand-primary" : "font-semibold text-text-subtle"}`} style={{ fontFamily: "var(--font-body)" }}>Activity Log</span>
                {tab === "activity" && <div className="h-[3px] w-full bg-brand-primary rounded-full -mb-px" />}
              </button>
            </div>
          )}

          {/* Tab content */}
          {(!isPipeline || tab === "detail") ? (
            <div className="flex gap-5 items-start">
              {/* Left column */}
              <div className="flex-1 min-w-0 flex flex-col gap-4">
                {/* Pengalaman Kerja */}
                <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 flex flex-col gap-4">
                  <p className="text-[16px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Pengalaman Kerja</p>
                  {data.riwayatKerja.map((exp, i) => (
                    <div key={i} className={i > 0 ? "pt-4 border-t border-[#e2e8f0]" : ""}>
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-[14px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>{exp.posisi}</p>
                        <p className="text-[12px] text-text-subtle shrink-0" style={{ fontFamily: "var(--font-body)" }}>{exp.periode}</p>
                      </div>
                      <p className="text-[13px] text-brand-primary font-semibold mt-0.5" style={{ fontFamily: "var(--font-body)" }}>{exp.perusahaan}</p>
                      <p className="text-[13px] text-text-darker mt-1" style={{ fontFamily: "var(--font-body)" }}>{exp.deskripsi}</p>
                    </div>
                  ))}
                </div>
                {/* Pendidikan */}
                <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 flex flex-col gap-4">
                  <p className="text-[16px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Pendidikan</p>
                  {data.pendidikanList.map((edu, i) => (
                    <div key={i} className={i > 0 ? "pt-4 border-t border-[#e2e8f0]" : ""}>
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-[14px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>{edu.jenjang}</p>
                        <p className="text-[12px] text-text-subtle shrink-0" style={{ fontFamily: "var(--font-body)" }}>{edu.periode}</p>
                      </div>
                      <p className="text-[13px] text-text-darker mt-0.5" style={{ fontFamily: "var(--font-body)" }}>{edu.institusi}</p>
                    </div>
                  ))}
                </div>
                {/* Skill & Sertifikasi */}
                <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 flex flex-col gap-3">
                  <p className="text-[16px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Skill &amp; Sertifikasi</p>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.map(s => (
                      <span key={s} className="bg-[#f1f5f9] text-[#475569] text-[12px] font-medium px-3 py-1 rounded-full" style={{ fontFamily: "var(--font-body)" }}>{s}</span>
                    ))}
                  </div>
                  {data.sertifikasi.length > 0 && (
                    <div className="flex flex-col gap-2 pt-2">
                      <p className="text-[11px] font-semibold text-text-subtle uppercase tracking-wide" style={{ fontFamily: "var(--font-body)" }}>Sertifikasi</p>
                      {data.sertifikasi.map((s, i) => (
                        <span key={i} className="flex items-center gap-2 text-[13px] text-text-default" style={{ fontFamily: "var(--font-body)" }}>
                          <Award size={16} className="text-brand-primary shrink-0" />{s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 flex flex-col gap-3">
                  <p className="text-[16px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Catatan Internal</p>
                  <div className="flex flex-col gap-3">
                    {notes.map((n, i) => <div key={i} className="bg-[#f8fafc] rounded-lg p-3 flex flex-col gap-1"><p className="text-[12px]"><span className="font-bold text-text-darker">{n.author}</span><span className="text-text-subtle"> · {n.time}</span></p><p className="text-[13px] text-text-darker">{n.text}</p></div>)}
                  </div>
                  <div className="relative">
                    <textarea value={noteInput} onChange={e => setNoteInput(e.target.value)} placeholder="Tulis catatan baru..." rows={3} className="w-full resize-none rounded-lg border border-[#e2e8f0] px-3 py-2.5 text-[13px] text-text-darker outline-none focus:border-brand-primary" />
                    {noteInput.trim() && <button onClick={handleSaveNote} className="absolute bottom-2.5 right-2.5 rounded-md bg-brand-primary px-3 py-1 text-[12px] font-semibold text-white hover:bg-brand-primary-hover">Simpan</button>}
                  </div>
                </div>
              </div>
              {/* Right sidebar */}
              <div className="w-[240px] shrink-0 flex flex-col gap-4">
                {isPipeline && pipelineCandidate?.interviewSchedule && pipelineCandidate.interviewDateTime && onScheduleClick && onCancelClick && (
                  <div className={`rounded-xl border p-5 flex flex-col gap-4 ${pipelineCandidate.interviewMethod === "offline" ? "border-[#d5ead9] bg-[#f7fcf8]" : "border-[#cfe0ff] bg-[#eef4ff]"}`}>
                    <div className="flex items-center justify-between gap-2"><p className="text-[14px] font-bold text-text-default">Jadwal Interview</p><span className={`text-[11px] font-bold capitalize ${pipelineCandidate.interviewMethod === "offline" ? "text-[#35964a]" : "text-[#0284c7]"}`}>{pipelineCandidate.interviewMethod ?? "online"}</span></div>
                    <div className="space-y-3 text-[12px] text-text-darker">
                      <p className="flex items-center gap-2"><Calendar size={16} className="text-text-muted" />{format(pipelineCandidate.interviewDateTime, "d MMMM yyyy")}</p>
                      <p className="flex items-center gap-2"><Clock size={16} className="text-text-muted" />{format(pipelineCandidate.interviewDateTime, "HH:mm")} – {format(new Date(pipelineCandidate.interviewDateTime.getTime() + (pipelineCandidate.interviewDuration ?? 30) * 60000), "HH:mm")} {pipelineCandidate.interviewTimezone}</p>
                      {pipelineCandidate.interviewMethod === "offline" ? <div className="flex items-start gap-2"><MapPin size={17} className="mt-0.5 shrink-0 text-[#35964a]" /><div className="min-w-0"><p className="font-bold text-text-default">{pipelineCandidate.interviewLocationName}</p><p className="mt-1 leading-4 text-text-muted">{pipelineCandidate.interviewAddress}</p></div></div> : <div className="flex items-start gap-2"><Link2 size={16} className="mt-0.5 shrink-0 text-text-muted" /><div className="min-w-0"><p className="font-semibold">Link Meeting</p><p className="mt-1 truncate font-semibold text-brand-primary">{pipelineCandidate.interviewMeetingLink}</p></div></div>}
                    </div>
                    <button onClick={pipelineCandidate.interviewMethod === "offline" ? () => pipelineCandidate.interviewMapsLink && window.open(pipelineCandidate.interviewMapsLink, "_blank", "noopener,noreferrer") : handleJoinMeeting} className="flex h-10 items-center justify-center gap-2 rounded-full bg-brand-primary text-[13px] font-bold text-white hover:bg-brand-primary-hover">{pipelineCandidate.interviewMethod === "offline" ? <><MapPin size={15} />Lihat Lokasi</> : <><Video size={15} />Join Meeting</>}</button>
                    <div className="grid grid-cols-2 gap-2"><button onClick={() => { onClose(); onScheduleClick(pipelineCandidate); }} className="h-9 rounded-full border border-border-default bg-white text-[12px] font-bold text-text-darker"><Pencil size={13} className="mr-1 inline" />Edit</button><button onClick={() => { onClose(); onCancelClick(pipelineCandidate); }} className="h-9 rounded-full border border-danger-strong bg-white text-[12px] font-bold text-danger-strong">Batalkan</button></div>
                  </div>
                )}
                <div className="bg-white rounded-xl border border-[#e2e8f0] p-5 flex flex-col gap-4">
                  <p className="text-[14px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Informasi Pribadi</p>
                  {[{ label: "USIA", value: (() => { const [day, month, year] = data.tanggalLahir.split("-").map(Number); const today = new Date(); let age = today.getFullYear() - year; if (today.getMonth() + 1 < month || (today.getMonth() + 1 === month && today.getDate() < day)) age -= 1; return Number.isFinite(age) ? `${age} Tahun` : data.tanggalLahir; })() }, { label: "JENIS KELAMIN", value: data.jenisKelamin }, { label: "DOMISILI", value: data.domisili }].map(item => (
                    <div key={item.label}>
                      <p className="text-[10px] font-semibold text-text-subtle tracking-wide" style={{ fontFamily: "var(--font-body)" }}>{item.label}</p>
                      <p className="text-[13px] text-text-default mt-0.5" style={{ fontFamily: "var(--font-body)" }}>{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white rounded-xl border border-[#e2e8f0] p-5 flex flex-col gap-4">
                  <p className="text-[14px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Preferensi Kerja</p>
                  {[{ label: "LOKASI", value: data.lokasi }, { label: "TIPE KERJA", value: data.tipeKerja }, { label: "GAJI EKSPEKTASI", value: data.gajiEkspektasi }].map(item => (
                    <div key={item.label}>
                      <p className="text-[10px] font-semibold text-text-subtle tracking-wide" style={{ fontFamily: "var(--font-body)" }}>{item.label}</p>
                      <p className="text-[13px] text-text-default mt-0.5" style={{ fontFamily: "var(--font-body)" }}>{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white rounded-xl border border-[#e2e8f0] p-5 flex flex-col gap-3">
                  <p className="text-[14px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Portofolio</p>
                  {data.portfolio.map((p, i) => (
                    <a key={i} href={`https://${p.url}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[13px] text-brand-primary hover:underline" style={{ fontFamily: "var(--font-body)" }}>
                      {p.platform === "github" ? <Github size={14} className="shrink-0" /> : <Linkedin size={14} className="shrink-0" />}
                      {p.url}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Activity Log tab (pipeline only) */
            <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 flex flex-col gap-4">
              <p className="text-[16px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Activity Log</p>
              <div className="flex flex-col gap-4">
                {ACTIVITY_LOG.map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="size-[10px] rounded-full shrink-0 mt-[3px]" style={{ backgroundColor: item.color }} />
                      {!item.last && <div className="w-0.5 flex-1 bg-[#e2e8f0] mt-1 min-h-[28px]" />}
                    </div>
                    <div className="flex-1 min-w-0 pb-4">
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-[14px] font-semibold text-text-default" style={{ fontFamily: "var(--font-body)" }}>{item.title}</p>
                        <p className="text-[12px] text-text-subtle shrink-0" style={{ fontFamily: "var(--font-body)" }}>{item.date}</p>
                      </div>
                      <p className="text-[13px] font-medium text-text-default mt-0.5" style={{ fontFamily: "var(--font-body)" }}>{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {isPipeline && joiningMeeting && (
        <Toast
          title="Membuka ruang tunggu interview"
          subtitle={`Menghubungkan ke sesi video dengan ${data.nama}...`}
          onDismiss={() => setJoiningMeeting(false)}
        />
      )}
      {showKecocokanInfo && data.rating != null && (
        <KecocokanInfoModal rating={data.rating} onClose={() => setShowKecocokanInfo(false)} />
      )}
    </div>
  );
}

