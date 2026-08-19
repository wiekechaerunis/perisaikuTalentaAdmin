import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { ArrowLeft, ChevronRight, Building2, FileText, BadgeCheck, SquarePen } from "lucide-react";
import { SuperadminTopBar } from "../../layouts/SuperadminLayout";
import { ApproveEmployerModal } from "../../components/superadmin/ApproveEmployerModal";
import { RequestRevisionModal } from "../../components/superadmin/RequestRevisionModal";
import { StatusToastStack, StatusToastItem } from "../../components/shared/StatusToast";
import { EMPLOYER_VERIFICATION_ROWS, EMPLOYER_STATUS_STYLE, EmployerVerificationRow } from "../../mocks/superadmin";

const SLA_PILL_STYLE: Record<string, { bg: string; border: string }> = {
  "text-[#3e9248]": { bg: "bg-[#eaf7ee]", border: "border-[#d1e9d8]" },
  "text-[#d19400]": { bg: "bg-[#fff7cd]", border: "border-[#f3e6a8]" },
  "text-[#f83a1e]": { bg: "bg-[#ffe4e1]", border: "border-[#f8c6c0]" },
};

function docFilename(label: string, nama: string) {
  return `${label}_${nama.replace(/\s+/g, "")}.pdf`;
}

export function EmployerDetailContent() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const initial = EMPLOYER_VERIFICATION_ROWS.find(r => r.id === id) ?? null;
  const [row, setRow] = useState<EmployerVerificationRow | null>(initial);
  const [confirmAction, setConfirmAction] = useState<"approve" | "revision" | null>(null);
  const [toasts, setToasts] = useState<StatusToastItem[]>([]);

  const pushToast = (message: string) => {
    const toastId = Date.now();
    setToasts(prev => [...prev, { id: toastId, variant: "success", message }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== toastId)), 4000);
  };

  if (!row) {
    return (
      <div className="flex-1 min-w-0 h-full overflow-y-auto bg-surface">
        <SuperadminTopBar />
        <div className="flex flex-col items-center justify-center gap-3 py-24">
          <p className="text-text-default text-base font-bold" style={{ fontFamily: "var(--font-body)" }}>Employer tidak ditemukan</p>
          <button onClick={() => navigate("/superadmin/verifikasi-employer")} className="text-sm font-semibold text-brand-primary hover:underline" style={{ fontFamily: "var(--font-body)" }}>
            Kembali ke Daftar Employer
          </button>
        </div>
      </div>
    );
  }

  const statusStyle = EMPLOYER_STATUS_STYLE[row.status];
  const slaPill = SLA_PILL_STYLE[row.slaColor];

  const handleApprove = () => {
    setRow(prev => (prev ? { ...prev, status: "verified", sla: "-", slaColor: "text-text-lighter" } : prev));
    setConfirmAction(null);
    pushToast("Employeer behasil disetujui");
  };

  const handleRequestRevision = (note: string) => {
    setRow(prev => (prev ? { ...prev, status: "revision", sla: "-", slaColor: "text-text-lighter", revisionNote: note } : prev));
    setConfirmAction(null);
    pushToast("Permintaan Revisi berhasil dikrim");
  };

  const documents = [
    { label: "NIB", filename: docFilename("NIB", row.nama) },
    { label: "SIUP", filename: docFilename("SIUP", row.nama) },
    { label: "NPWP", filename: docFilename("NPWP", row.nama) },
  ];
  const docDate = row.tanggalSubmit.split(",")[0];

  return (
    <div className="flex-1 min-w-0 h-full overflow-y-auto bg-surface pb-10">
      <SuperadminTopBar />

      <div className="flex flex-col gap-6 px-10 pt-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2.5">
              <button onClick={() => navigate(-1)} className="text-text-default hover:text-brand-primary transition-colors" aria-label="Kembali">
                <ArrowLeft size={28} />
              </button>
              <p className="text-text-default text-[28px] font-bold leading-8" style={{ fontFamily: "var(--font-body)" }}>Detail Employer</p>
            </div>
            <div className="flex items-center gap-2.5 pl-[38px]">
              <button onClick={() => navigate("/superadmin/verifikasi-employer")} className="text-[#ff6b35] text-sm font-semibold hover:underline" style={{ fontFamily: "var(--font-body)" }}>
                Daftar Employer
              </button>
              <ChevronRight size={14} className="text-text-muted" />
              <span className="text-text-muted text-sm" style={{ fontFamily: "var(--font-body)" }}>Detail Employer</span>
            </div>
          </div>

          {row.status === "pending" && (
            <div className="flex items-center gap-3">
              <button
                onClick={() => setConfirmAction("revision")}
                title="Request Revisi"
                className="size-10 rounded-lg border-[1.25px] border-border-default bg-white flex items-center justify-center text-text-darker hover:bg-gray-50 transition-colors"
              >
                <SquarePen size={16} />
              </button>
              <div className="w-px h-9 bg-border-lighter" />
              <button
                onClick={() => setConfirmAction("approve")}
                className="h-10 px-5 rounded-full bg-brand-primary text-white text-sm font-bold hover:bg-brand-primary-hover transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Setujui
              </button>
            </div>
          )}
        </div>

        {/* Hero cover */}
        <div className="bg-white rounded-[10px] p-6 flex items-center gap-8">
          <div className="bg-white border border-border-lighter shrink-0 size-[120px] rounded-[24px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.05)] flex items-center justify-center">
            <Building2 size={44} className="text-text-lighter" />
          </div>
          <div className="flex-1 min-w-0 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <p className="text-[#09090b] text-[21px] font-bold whitespace-nowrap" style={{ fontFamily: "var(--font-body)" }}>{row.nama}</p>
              {row.status === "verified" ? (
                <BadgeCheck size={20} className="text-[#22c55e] shrink-0" fill="#22c55e" strokeWidth={1.5} stroke="white" />
              ) : (
                <span className={`px-2 py-1 rounded-full text-[11px] whitespace-nowrap inline-block ${statusStyle.bg} ${statusStyle.text} ${statusStyle.weight}`} style={{ fontFamily: "var(--font-body)" }}>
                  {statusStyle.label}
                </span>
              )}
            </div>
            <div className="flex items-center gap-3 flex-wrap text-[14px] text-text-darker font-medium" style={{ fontFamily: "var(--font-heading)" }}>
              <span>{row.jenisEntitas}</span>
              <span className="size-1 rounded-full bg-text-lighter" />
              <span>{row.industri}</span>
              <span className="size-1 rounded-full bg-text-lighter" />
              <span>{row.kota}, Indonesia</span>
              <span className="size-1 rounded-full bg-text-lighter" />
              <span>{row.ukuranPerusahaan}</span>
            </div>
            <div className="flex items-center gap-3 text-[14px]" style={{ fontFamily: "var(--font-heading)" }}>
              <span className="text-[#666]">{row.alamat}</span>
              <span className="size-1 rounded-full bg-text-lighter" />
              <span className="text-[#1a66cc]">{row.website}</span>
            </div>
          </div>
          <div className="border-l border-border-lighter pl-8 flex flex-col items-end gap-2 shrink-0">
            <p className="text-[14px] whitespace-nowrap" style={{ fontFamily: "var(--font-body)" }}>
              <span className="font-semibold text-text-default">Tanggal Submit:</span> <span className="text-text-default">{row.tanggalSubmit}</span>
            </p>
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-semibold text-text-default" style={{ fontFamily: "var(--font-body)" }}>SLA:</span>
              {row.sla === "-" ? (
                <span className="text-[14px] text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>-</span>
              ) : (
                <span className={`px-2.5 py-1 rounded-full border text-[14px] font-semibold whitespace-nowrap ${slaPill?.bg ?? "bg-[#f6f4f4]"} ${slaPill?.border ?? "border-border-lighter"} ${row.slaColor}`} style={{ fontFamily: "var(--font-body)" }}>
                  {row.sla}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-[10px] p-8 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-[#09090b] text-base font-bold" style={{ fontFamily: "var(--font-body)" }}>Tentang Perusahaan</p>
            <div className="flex flex-col gap-3 text-[#71717a] text-[16px]" style={{ fontFamily: "var(--font-heading)", lineHeight: 1.8 }}>
              {row.deskripsi.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[#09090b] text-base font-bold" style={{ fontFamily: "var(--font-heading)" }}>Dokumen yang Sudah Diupload</p>
            <div className="flex flex-col">
              {documents.map((doc, i) => (
                <a
                  key={doc.label}
                  href={`/dokumen-preview?type=${encodeURIComponent(doc.label)}&nama=${encodeURIComponent(row.nama)}&tanggal=${encodeURIComponent(docDate)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 py-3 hover:bg-[#f9fafb] transition-colors -mx-2 px-2 rounded-lg ${i < documents.length - 1 ? "border-b border-[#e4e4e7]" : ""}`}
                >
                  <div className="bg-[#edf2f8] rounded-md size-7 flex items-center justify-center shrink-0">
                    <FileText size={16} className="text-text-darker" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#09090b] text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>{doc.label}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-[#71717a] text-xs" style={{ fontFamily: "var(--font-body)" }}>{doc.filename}</span>
                      <span className="size-[3px] rounded-full bg-[#71717a]" />
                      <span className="text-[#71717a] text-xs" style={{ fontFamily: "var(--font-body)" }}>{docDate}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {row.status === "revision" && row.revisionNote && (
            <div className="flex flex-col gap-2">
              <p className="text-[#09090b] text-base font-bold" style={{ fontFamily: "var(--font-body)" }}>Catatan Revisi</p>
              <p className="text-[#71717a] text-sm" style={{ fontFamily: "var(--font-body)" }}>{row.revisionNote}</p>
            </div>
          )}
        </div>
      </div>

      {confirmAction === "approve" && (
        <ApproveEmployerModal nama={row.nama} onClose={() => setConfirmAction(null)} onConfirm={handleApprove} />
      )}
      {confirmAction === "revision" && (
        <RequestRevisionModal nama={row.nama} onClose={() => setConfirmAction(null)} onConfirm={handleRequestRevision} />
      )}
      <StatusToastStack toasts={toasts} onDismiss={toastId => setToasts(prev => prev.filter(t => t.id !== toastId))} />
    </div>
  );
}
