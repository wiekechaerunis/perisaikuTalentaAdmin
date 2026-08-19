import { useState } from "react";
import { X } from "lucide-react";
import { PipelineStage, STAGE_DISPLAY_LABEL } from "../../mocks/pipeline";

export function ConfirmMoveModal({ candidateName, toStage, onCancel, onConfirm }: {
  candidateName: string; toStage: PipelineStage; onCancel: () => void; onConfirm: (rejectionReason?: string) => void;
}) {
  const isRejecting = toStage === "Ditolak";
  const [reasonOption, setReasonOption] = useState("");
  const [otherReason, setOtherReason] = useState("");
  const resolvedReason = reasonOption === "Lainnya" ? otherReason.trim() : reasonOption;
  const canConfirm = !isRejecting || resolvedReason.length > 0;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-6" onClick={onCancel}>
      <div className="bg-white rounded-2xl border border-border-lighter shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] p-6 flex flex-col gap-4 w-full max-w-[400px]"
        onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between w-full gap-2">
          <p className="text-[18px] font-bold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>Pindahkan Kandidat?</p>
          <button onClick={onCancel} className="bg-[#f3f4f6] rounded-full p-1 flex items-center justify-center text-icon-default hover:text-text-default transition-colors shrink-0">
            <X size={16} />
          </button>
        </div>
        <p className="text-[14px] leading-[20px] text-[#475569]" style={{ fontFamily: "var(--font-body)" }}>
          Apakah Anda yakin ingin memindahkan{" "}
          <span className="font-semibold text-[#0f172a]" style={{ fontFamily: "var(--font-body)" }}>{candidateName}</span>
          {" "}ke tahap{" "}
          <span className="font-semibold text-brand-primary" style={{ fontFamily: "var(--font-body)" }}>{STAGE_DISPLAY_LABEL[toStage]}</span>?
        </p>
        {isRejecting && (
          <div className="flex flex-col gap-2.5">
            <span className="text-[12px] font-semibold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>Alasan Penolakan</span>
            <div className="flex flex-col gap-2 py-1">
              {["Kandidat kurang sesuai", "Gaji kemahalan", "Lainnya"].map(option => (
                <label key={option} className="flex cursor-pointer items-center gap-2.5 text-[13px] text-text-darker">
                  <input type="radio" name="rejection-reason" value={option} checked={reasonOption === option} onChange={() => setReasonOption(option)} className="size-4 accent-[#2b81f3]" />
                  {option}
                </label>
              ))}
            </div>
            {reasonOption === "Lainnya" && <textarea value={otherReason} onChange={e => setOtherReason(e.target.value)} placeholder="Jelaskan alasan lainnya..." rows={3} autoFocus className="w-full resize-none rounded-xl border border-border-default px-3 py-2.5 text-[13px] text-text-default outline-none focus:border-brand-primary" />}
          </div>
        )}
        <div className="flex items-center justify-end gap-3 pt-1">
          <button onClick={onCancel}
            className="border-[1.5px] border-border-default rounded-full px-5 py-2 text-[14px] font-bold text-text-darker hover:bg-gray-50 transition-colors"
            style={{ fontFamily: "var(--font-body)" }}>Batal</button>
          <button
            onClick={() => onConfirm(isRejecting ? resolvedReason : undefined)}
            disabled={!canConfirm}
            className="bg-brand-primary rounded-full px-4 py-2 text-[14px] font-bold text-white hover:bg-brand-primary-hover disabled:bg-border-default disabled:cursor-not-allowed transition-colors"
            style={{ fontFamily: "var(--font-body)" }}>Ya, Pindahkan</button>
        </div>
      </div>
    </div>
  );
}
