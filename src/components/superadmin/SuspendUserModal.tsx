import { useState } from "react";
import { InfoModal } from "../shared/InfoModal";

export function SuspendUserModal({ nama, onConfirm, onClose }: { nama: string; onConfirm: (reason: string) => void; onClose: () => void }) {
  const [reason, setReason] = useState("");

  return (
    <InfoModal
      title="Suspend Akun?"
      onClose={onClose}
      footer={
        <div className="flex items-center justify-end gap-3 w-full">
          <button onClick={onClose} className="px-5 py-2 rounded-full border-[1.5px] border-border-default text-text-darker font-bold text-[14px] hover:bg-gray-50 transition-colors" style={{ fontFamily: "var(--font-body)" }}>Batal</button>
          <button
            onClick={() => onConfirm(reason.trim())}
            className="bg-brand-primary h-10 px-4 rounded-full text-white font-bold text-[14px] hover:bg-brand-primary-hover transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Suspend Akun
          </button>
        </div>
      }
    >
      <div className="flex flex-col gap-4 w-full">
        <p>
          Akun <span className="font-bold text-text-darker">{nama}</span> tidak akan bisa login atau mengakses platform sampai diaktifkan kembali. Tindakan ini dapat dibatalkan kapan saja
        </p>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[12px] text-text-darker" style={{ fontFamily: "var(--font-body)" }}>Alasan</label>
          <textarea
            value={reason}
            onChange={e => setReason(e.target.value)}
            placeholder="Tulis alasan"
            rows={4}
            className="w-full rounded-xl border border-border-default p-3 text-[12px] text-text-darker placeholder-[#c5c6c9] outline-none focus:border-brand-primary resize-none"
            style={{ fontFamily: "var(--font-body)" }}
          />
        </div>
      </div>
    </InfoModal>
  );
}
