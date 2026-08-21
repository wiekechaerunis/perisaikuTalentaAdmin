import { InfoModal } from "../shared/InfoModal";

export function RefundTransactionModal({ id, employerName, onConfirm, onClose }: { id: string; employerName: string; onConfirm: () => void; onClose: () => void }) {
  return (
    <InfoModal
      title="Refund Transaksi?"
      onClose={onClose}
      footer={
        <div className="flex items-center justify-end gap-3 w-full">
          <button onClick={onClose} className="px-5 py-2 rounded-full border-[1.5px] border-border-default text-text-darker font-bold text-[14px] hover:bg-gray-50 transition-colors" style={{ fontFamily: "var(--font-body)" }}>Batal</button>
          <button onClick={onConfirm} className="bg-[#f83a1e] h-10 px-4 rounded-full text-white font-bold text-[14px] hover:bg-[#dc2c13] transition-colors" style={{ fontFamily: "var(--font-body)" }}>Refund</button>
        </div>
      }
    >
      Transaksi <span className="font-bold text-text-darker">{id}</span> dari <span className="font-bold text-text-darker">{employerName}</span> akan ditandai sebagai refunded. Tindakan ini tidak dapat dibatalkan.
    </InfoModal>
  );
}
