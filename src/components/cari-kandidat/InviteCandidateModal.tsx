import { useState } from "react";
import { Info } from "lucide-react";
import { InfoModal } from "../shared/InfoModal";
import { PIPELINE_JOBS } from "../../mocks/pipeline";

export function InviteCandidateModal({ candidateName, onClose, onConfirm }: { candidateName: string; onClose: () => void; onConfirm: (jobId: string) => void }) {
  const fieldStyle = { fontFamily: "var(--font-body)" };
  const openJobs = PIPELINE_JOBS.filter((j) => j.status === "Diterbitkan");
  const [jobId, setJobId] = useState(openJobs[0]?.id ?? "");

  return (
    <InfoModal
      title="Undang Kandidat"
      onClose={onClose}
      footer={
        <div className="flex items-center justify-end gap-3 w-full">
          <button onClick={onClose} className="px-5 py-2 rounded-full border-[1.5px] border-border-default text-text-darker font-bold text-[14px] hover:bg-gray-50 transition-colors" style={fieldStyle}>
            Batal
          </button>
          <button
            onClick={() => jobId && onConfirm(jobId)}
            disabled={!jobId}
            className="bg-brand-primary h-10 px-5 rounded-full text-white font-bold text-[14px] hover:bg-brand-primary-hover disabled:bg-border-default disabled:cursor-not-allowed transition-colors"
            style={fieldStyle}
          >
            Undang Kandidat
          </button>
        </div>
      }
    >
      <div className="flex flex-col gap-4">
        <p className="text-[14px] text-text-darker leading-6" style={fieldStyle}>
          Anda akan mengundang <span className="font-bold text-text-default">{candidateName}</span> untuk melamar pada lowongan yang Anda pilih di bawah ini.
        </p>
        <div className="flex flex-col gap-2">
          <span className="text-[12px] font-semibold text-text-darker" style={fieldStyle}>Pilih Lowongan</span>
          <select
            value={jobId}
            onChange={(e) => setJobId(e.target.value)}
            className="h-11 rounded-xl border border-border-default px-4 text-[14px] text-text-default bg-white outline-none focus:border-brand-primary transition-colors"
            style={fieldStyle}
          >
            {openJobs.length === 0 && <option value="">Tidak ada lowongan aktif</option>}
            {openJobs.map((j) => (
              <option key={j.id} value={j.id}>{j.nama} · {j.lokasi}</option>
            ))}
          </select>
        </div>
        <div className="bg-[#f8fafc] border border-border-lighter rounded-xl p-3 flex gap-2.5">
          <Info size={16} className="text-brand-primary shrink-0 mt-0.5" />
          <p className="text-[12px] text-text-muted leading-5" style={fieldStyle}>
            Setelah diundang, kandidat akan menerima notifikasi undangan melalui platform pencari kerja dan dapat memilih untuk melamar posisi ini.
          </p>
        </div>
      </div>
    </InfoModal>
  );
}
