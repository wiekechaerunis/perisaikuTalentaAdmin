import { InfoModal } from "../shared/InfoModal";

export function DeactivateConfigModal({ nama, onConfirm, onClose }: { nama: string; onConfirm: () => void; onClose: () => void }) {
  return (
    <InfoModal
      title="Nonaktifkan Konfigurasi?"
      onClose={onClose}
      footer={
        <div className="flex items-center justify-end gap-3 w-full">
          <button onClick={onClose} className="px-5 py-2 rounded-full border-[1.5px] border-border-default text-text-darker font-bold text-[14px] hover:bg-gray-50 transition-colors" style={{ fontFamily: "var(--font-body)" }}>Batal</button>
          <button onClick={onConfirm} className="bg-[#f83a1e] h-10 px-4 rounded-full text-white font-bold text-[14px] hover:bg-[#dc2c13] transition-colors" style={{ fontFamily: "var(--font-body)" }}>Nonaktifkan</button>
        </div>
      }
    >
      Konfigurasi <span className="font-bold text-text-darker">{nama}</span> akan berhenti diterapkan pada transaksi baru mulai sekarang. Transaksi yang sudah berjalan tidak akan terpengaruh
    </InfoModal>
  );
}
