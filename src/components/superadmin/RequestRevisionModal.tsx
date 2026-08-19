import { useState } from "react";
import { InfoModal } from "../shared/InfoModal";

export function RequestRevisionModal({ nama, onConfirm, onClose }: { nama: string; onConfirm: (note: string) => void; onClose: () => void }) {
  const [note, setNote] = useState("");

  return (
    <InfoModal
      title="Minta Revisi?"
      onClose={onClose}
      footer={
        <div className="flex items-center justify-end gap-3 w-full">
          <button onClick={onClose} className="px-5 py-2 rounded-full border-[1.5px] border-border-default text-text-darker font-bold text-[14px] hover:bg-gray-50 transition-colors" style={{ fontFamily: "var(--font-body)" }}>Batal</button>
          <button
            onClick={() => onConfirm(note.trim())}
            disabled={!note.trim()}
            className="bg-brand-primary h-10 px-4 rounded-full text-white font-bold text-[14px] hover:bg-brand-primary-hover transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Kirim Permintaan Revisi
          </button>
        </div>
      }
    >
      <div className="flex flex-col gap-4 w-full">
        <p>
          Anda akan meminta <span className="font-bold text-text-darker">{nama}</span> memperbaiki dan mengunggah ulang dokumen/data pendaftaran. Employer akan menerima catatan perbaikan.
        </p>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[12px] text-text-darker" style={{ fontFamily: "var(--font-body)" }}>Catatan perbaikan</label>
          <textarea
            value={note}
            onChange={e => setNote(e.target.value)}
            placeholder="Catatan ini akan dikirim ke employer"
            rows={4}
            className="w-full rounded-xl border border-border-default p-3 text-[12px] text-text-darker placeholder-[#c5c6c9] outline-none focus:border-brand-primary resize-none"
            style={{ fontFamily: "var(--font-body)" }}
          />
        </div>
      </div>
    </InfoModal>
  );
}
