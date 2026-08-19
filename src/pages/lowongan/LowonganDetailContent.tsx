import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, ChevronRight, Eye, Link2, Copy, RotateCw } from "lucide-react";
import svgDetailPaths from "../../imports/LowonganDetail/svg-25afbh8kme";
import { NotificationBell } from "../../components/shared/NotificationBell";
import { TopBarUserMenu } from "../../components/shared/TopBarUserMenu";
import { DeleteConfirmModal, RepostConfirmModal } from "../../components/lowongan/ConfirmModals";
import { jobRows, JobStatus } from "../../mocks/lowongan";
import { PIPELINE_JOBS } from "../../mocks/pipeline";

export const DUMMY_APPLICANTS = [
  { name: "Ananda Putri",   date: "12 Okt 2023", status: "Screening",   color: "bg-[#dbeafe] text-[#1e40af]" },
  { name: "Rizky Pratama",  date: "11 Okt 2023", status: "Interview",   color: "bg-[#fef3c7] text-[#92400e]" },
  { name: "Dewi Lestari",   date: "10 Okt 2023", status: "Talent Pool", color: "bg-[#d1fae5] text-[#065f46]" },
  { name: "Bambang Wijaya", date: "09 Okt 2023", status: "Ditolak",     color: "bg-[#fee2e2] text-[#991b1b]" },
];

export function IconActionButton({ label, className, onClick, children }: {
  label: string; className: string; onClick?: () => void; children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <button onClick={onClick} className={className}>{children}</button>
      {hovered && (
        <div
          role="tooltip"
          className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-text-default text-white text-[11px] font-medium px-2 py-1 rounded-md z-20"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {label}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#383b46]" />
        </div>
      )}
    </div>
  );
}

export function DetailField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex-1 min-w-0 flex flex-col gap-1">
      <p className="text-[12px] font-medium text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>{label}</p>
      <p className="text-[14px] text-text-default" style={{ fontFamily: "var(--font-body)" }}>{value}</p>
    </div>
  );
}

export function LowonganDetailContent() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const job = jobRows.find(j => j.id === id);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showRepostConfirm, setShowRepostConfirm] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(`${window.location.origin}/lowongan/${id}`);
    setToastMessage("Link lowongan berhasil disalin!");
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleRepost = () => {
    setShowRepostConfirm(false);
    setToastMessage("Lowongan berhasil diposting ulang");
    setTimeout(() => setToastMessage(null), 3000);
  };

  if (!job) {
    return (
      <div className="flex-1 flex items-center justify-center bg-surface">
        <div className="text-center">
          <p className="text-[20px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Lowongan tidak ditemukan</p>
          <button onClick={() => navigate("/lowongan")} className="mt-4 text-brand-primary text-sm font-semibold hover:underline">Kembali ke Daftar Lowongan</button>
        </div>
      </div>
    );
  }

  const isDiterbitkan = job.status === "Diterbitkan";

  // Status badge styles
  const statusBadge: Record<JobStatus, { bg: string; text: string; label: string }> = {
    Diterbitkan: { bg: "bg-[#d1fae5]", text: "text-[#065f46]", label: "Diterbitkan" },
    Tutup:       { bg: "bg-[#fee2e2]", text: "text-[#991b1b]", label: "Tutup" },
    Draf:        { bg: "bg-[#f3f4f6]", text: "text-text-darker", label: "Draf" },
  };
  const badge = statusBadge[job.status];

  return (
    <div className="flex-1 min-w-0 h-full flex flex-col overflow-hidden bg-surface">
      {/* Top bar */}
      <div className="bg-white border-b border-border-lighter px-10 py-5 flex items-center justify-end shrink-0 relative">
        {toastMessage && (
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-40">
            <div className="bg-[#fafffb] drop-shadow-[0px_8px_12px_rgba(0,0,0,0.08)] flex gap-3 items-center px-4 py-3 rounded-xl border border-success whitespace-nowrap">
              <div className="bg-[#33893c] rounded-xl size-6 flex items-center justify-center shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.6662 3.5L5.25017 9.9162L2.3338 6.99975" stroke="white" strokeLinecap="round" strokeWidth="2" /></svg>
              </div>
              <p className="text-success text-[14px] font-semibold" style={{ fontFamily: "var(--font-body)" }}>{toastMessage}</p>
              <button onClick={() => setToastMessage(null)} className="bg-white rounded-xl size-6 flex items-center justify-center border border-[#33893c] shrink-0">
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

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-6 px-10 py-8 pb-12">

          {/* Title bar */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <button onClick={() => navigate("/lowongan")} className="text-text-default hover:text-brand-primary transition-colors"><ArrowLeft size={20} /></button>
                <p className="text-[28px] font-bold text-text-default leading-8" style={{ fontFamily: "var(--font-body)" }}>Detail Lowongan</p>
              </div>
              <div className="flex items-center gap-2 pl-9" style={{ fontFamily: "var(--font-body)" }}>
                <button onClick={() => navigate("/lowongan")} className="text-[14px] font-semibold text-[#ff6b35] hover:underline">Daftar Lowongan</button>
                <ChevronRight size={14} className="text-icon-default" />
                <span className="text-[14px] text-text-muted">Detail Lowongan</span>
              </div>
            </div>

            {/* Action buttons — differ by status */}
            <div className="flex items-center gap-3">
              {/* Delete — always shown */}
              <IconActionButton label="Tutup" onClick={() => setShowDeleteModal(true)} className="bg-white size-10 rounded-lg border-[1.25px] border-danger-strong flex items-center justify-center hover:bg-red-50 transition-colors">
                <svg width="10" height="10" viewBox="0 0 9.33333 9.33333" fill="none">
                  <path d={svgDetailPaths.p27be5e00} fill="#C93F2A" />
                </svg>
              </IconActionButton>

              {/* Preview, Copy Link, Duplicate — only for Diterbitkan */}
              {isDiterbitkan && (
                <>
                  <IconActionButton label="Preview" className="bg-white size-10 rounded-lg border-[1.25px] border-border-default flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <Eye size={16} className="text-icon-default" />
                  </IconActionButton>
                  <IconActionButton label="Salin Link" onClick={handleCopyLink} className="bg-white size-10 rounded-lg border-[1.25px] border-border-default flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <Link2 size={16} className="text-icon-default" />
                  </IconActionButton>
                  <IconActionButton label="Duplikat" onClick={() => navigate(`/duplicate-job/${job.id}`)} className="bg-white size-10 rounded-lg border-[1.25px] border-border-default flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <Copy size={16} className="text-icon-default" />
                  </IconActionButton>
                </>
              )}

              {/* Posting Ulang — only for Tutup */}
              {job.status === "Tutup" && (
                <IconActionButton label="Posting Ulang" onClick={() => setShowRepostConfirm(true)} className="bg-white size-10 rounded-lg border-[1.25px] border-border-default flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <RotateCw size={16} className="text-icon-default" />
                </IconActionButton>
              )}

              <div className="h-9 w-px bg-border-lighter" />

              {/* Primary CTA */}
              {isDiterbitkan ? (
                <button onClick={() => navigate(`/edit-job/${job?.id}`)} className="bg-brand-primary h-10 px-5 rounded-full text-white font-bold text-[14px] hover:bg-brand-primary-hover transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                  Edit Lowongan
                </button>
              ) : (
                <button onClick={() => navigate(`/duplicate-job/${job.id}`)} className="bg-brand-primary h-10 px-5 rounded-full text-white font-bold text-[14px] hover:bg-brand-primary-hover transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                  Duplicate Lowongan
                </button>
              )}
            </div>
          </div>

          {/* Content grid */}
          <div className="flex gap-5 items-start">
            {/* Left: job card */}
            <div className="flex-1 min-w-0 bg-white rounded-2xl border border-border-lighter p-6 flex flex-col gap-8">
              {/* Header */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <p className="text-[28px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>{job.nama}</p>
                  <span className={`${badge.bg} ${badge.text} text-[11px] font-semibold px-2 py-1 rounded-full`} style={{ fontFamily: "var(--font-body)" }}>{badge.label}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d={svgDetailPaths.p1b8a0e00} stroke="#777980" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                    <span className="text-[12px] text-[#475569]" style={{ fontFamily: "var(--font-body)" }}>{job.lokasi}, Indonesia</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d={svgDetailPaths.p2e445000} stroke="#777980" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.73" />
                    </svg>
                    <span className="text-[12px] text-[#475569]" style={{ fontFamily: "var(--font-body)" }}>{job.setting} · Full-time</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d={svgDetailPaths.p33811580} stroke="#777980" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                    <span className="text-[12px] text-[#475569]" style={{ fontFamily: "var(--font-body)" }}>{job.kategori}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[12px] text-[#475569]" style={{ fontFamily: "var(--font-body)" }}>Dibuat: 12 Okt 2023</span>
                  <span className="text-[12px] text-[#475569]" style={{ fontFamily: "var(--font-body)" }}>Batas Lamaran: {job.tutup}</span>
                </div>
              </div>

              {/* Tentang Peran */}
              <div className="flex flex-col gap-3">
                <p className="text-[14px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Tentang Peran Ini</p>
                <p className="text-[14px] text-text-default leading-5" style={{ fontFamily: "var(--font-body)" }}>
                  Kami sedang mencari {job.nama} yang berbakat untuk bergabung dengan tim kami. Anda akan bertanggung jawab untuk membangun dan memelihara infrastruktur aplikasi kami, memastikan performa tinggi dan responsivitas yang baik.
                </p>
              </div>

              {/* Skill tags */}
              <div className="flex flex-col gap-3">
                <p className="text-[14px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Skill Tags</p>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "TypeScript", "PostgreSQL", "Redis", "Microservices"].map(tag => (
                    <span key={tag} className="bg-[#e6f4ff] border border-[#bfe7ff] text-[#1e3a8a] text-[12px] font-bold px-3 py-1.5 rounded-full" style={{ fontFamily: "var(--font-body)" }}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Lokasi & Kebijakan Kerja */}
              <div className="flex flex-col gap-3">
                <p className="text-[14px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Lokasi &amp; Kebijakan Kerja</p>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-10">
                    <DetailField label="Lokasi Bekerja" value={`${job.lokasi}, Indonesia`} />
                    <DetailField label="Kebijakan Bekerja" value="Kerja Dari Kantor (WFO)" />
                  </div>
                  <div className="flex gap-10">
                    <DetailField label="Hari Kerja" value="Senin - Jumat" />
                    <DetailField label="Jam Kerja" value="09:00 - 18:00" />
                  </div>
                  <div className="flex gap-10">
                    <DetailField label="Jumlah Kuota" value={`${job.kuota} pelamar`} />
                  </div>
                </div>
              </div>

              {/* Syarat Pelamar */}
              <div className="flex flex-col gap-3">
                <p className="text-[14px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Syarat Pelamar</p>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-10">
                    <DetailField label="Pendidikan Terakhir" value="S1 (Sarjana)" />
                    <DetailField label="Preferensi Jurusan" value="Teknik Informatika, Sistem Informasi" />
                  </div>
                  <div className="flex gap-10">
                    <DetailField label="Fresh Graduate" value="Tidak" />
                    <DetailField label="Tingkat Pengalaman" value="Minimal 3 tahun" />
                  </div>
                  <div className="flex gap-10">
                    <DetailField label="Persyaratan Usia" value="Tanpa persyaratan usia" />
                    <DetailField label="Jenis Kelamin" value="Semua" />
                  </div>
                </div>
              </div>

              {/* Kompensasi & Komunikasi */}
              <div className="flex flex-col gap-3">
                <p className="text-[14px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Kompensasi &amp; Komunikasi</p>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-10">
                    <DetailField label="Rentang Gaji" value="Rp 8.000.000 - Rp 15.000.000 / bulan" />
                    <div className="flex-1 min-w-0 flex flex-col gap-1">
                      <p className="text-[12px] font-medium text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>Benefit &amp; Tunjangan</p>
                      <div className="text-[14px] text-text-default leading-5" style={{ fontFamily: "var(--font-body)" }}>
                        <p className="mb-0">• BPJS Kesehatan</p>
                        <p className="mb-0">• BPJS Ketenagakerjaan</p>
                        <p>• Tunjangan Makan</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-10">
                    <DetailField label="Kontak" value="WhatsApp:  +62 812 3456 7890" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="w-[420px] shrink-0 flex flex-col gap-4">
              {/* Quick stats */}
              <div className="bg-[#f6f4f4] rounded-xl p-5 flex flex-col gap-4">
                <p className="text-[14px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Statistik Cepat</p>
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="text-[12px] text-text-darker" style={{ fontFamily: "var(--font-body)" }}>Total Pelamar</p>
                    <p className="text-[24px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>{job.pelamar}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[12px] text-text-darker" style={{ fontFamily: "var(--font-body)" }}>Lulus Seleksi</p>
                    <p className="text-[24px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>12</p>
                  </div>
                </div>
              </div>

              {/* Recent applicants */}
              <div className="bg-white rounded-xl border border-border-lighter p-5 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <p className="text-[16px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Pelamar Terbaru</p>
                  <button
                    onClick={() => {
                      const pipelineJob = PIPELINE_JOBS.find(pj => pj.nama === job.nama);
                      navigate(`/pipeline/${pipelineJob ? pipelineJob.id : job.id}`);
                    }}
                    className="text-[14px] font-semibold text-brand-primary hover:underline"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Lihat Semua Pelamar
                  </button>
                </div>
                {/* Table header */}
                <div className="flex items-start border-b border-border-lighter pb-3">
                  <p className="w-[140px] shrink-0 text-[12px] font-bold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>NAMA KANDIDAT</p>
                  <p className="w-[140px] shrink-0 text-[12px] font-bold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>TGL MELAMAR</p>
                  <p className="text-[12px] font-bold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>STATUS</p>
                </div>
                {DUMMY_APPLICANTS.map(a => (
                  <div key={a.name} className="flex items-center border-b border-border-lighter pb-4 last:border-b-0 last:pb-0">
                    <p className="w-[140px] shrink-0 text-[14px] text-text-darker font-medium" style={{ fontFamily: "var(--font-body)" }}>{a.name}</p>
                    <p className="w-[140px] shrink-0 text-[14px] text-text-darker" style={{ fontFamily: "var(--font-body)" }}>{a.date}</p>
                    <span className={`${a.color} text-[11px] font-semibold px-2 py-1 rounded-full`} style={{ fontFamily: "var(--font-body)" }}>{a.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {showDeleteModal && (
        <DeleteConfirmModal
          onClose={() => setShowDeleteModal(false)}
          onConfirm={() => { setShowDeleteModal(false); navigate("/lowongan"); }}
        />
      )}

      {showRepostConfirm && (
        <RepostConfirmModal
          onClose={() => setShowRepostConfirm(false)}
          onConfirm={handleRepost}
        />
      )}
    </div>
  );
}
