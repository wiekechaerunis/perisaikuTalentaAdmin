import { InfoModal } from "../shared/InfoModal";

export function DeleteConfirmModal({ onConfirm, onClose }: { onConfirm: () => void; onClose: () => void }) {
  return (
    <InfoModal
      title="Tutup Lowongan"
      onClose={onClose}
      footer={
        <div className="flex items-center justify-end gap-3 w-full">
          <button onClick={onClose} className="px-5 py-2 rounded-full border-[1.5px] border-border-default text-text-darker font-bold text-[14px] hover:bg-gray-50 transition-colors" style={{ fontFamily: "var(--font-body)" }}>Batal</button>
          <button onClick={onConfirm} className="bg-danger-strong h-10 px-4 rounded-full text-white font-bold text-[14px] hover:bg-[#d92e14] transition-colors" style={{ fontFamily: "var(--font-body)" }}>Tutup Lowongan</button>
        </div>
      }
    >
      Apakah anda yakin ingin menutup lowongan ini?
    </InfoModal>
  );
}

export function RepostConfirmModal({ onConfirm, onClose }: { onConfirm: () => void; onClose: () => void }) {
  return (
    <InfoModal
      title="Posting Ulang Lowongan Ini"
      onClose={onClose}
      footer={
        <div className="flex items-center justify-end gap-3 w-full">
          <button onClick={onClose} className="px-5 py-2 rounded-full border-[1.5px] border-border-default text-text-darker font-bold text-[14px] hover:bg-gray-50 transition-colors" style={{ fontFamily: "var(--font-body)" }}>Batal</button>
          <button onClick={onConfirm} className="bg-brand-primary h-10 px-4 rounded-full text-white font-bold text-[14px] hover:bg-brand-primary-hover transition-colors" style={{ fontFamily: "var(--font-body)" }}>Posting Ulang</button>
        </div>
      }
    >
      Posting ulang akan membuka lowongan ini kembali, lowongan akan berstatus <span className="font-bold text-text-darker">&quot;Diterbitkan&quot;</span> kembali, tanpa harus membuat lowongan baru. Jumlah pelamar tetap dilanjutkan, tidak mengulang dari 0.
    </InfoModal>
  );
}
