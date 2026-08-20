import { InfoModal } from "../shared/InfoModal";

export function ActivateUserModal({ nama, onConfirm, onClose }: { nama: string; onConfirm: () => void; onClose: () => void }) {
  return (
    <InfoModal
      title="Aktifkan Kembali Akun?"
      onClose={onClose}
      footer={
        <div className="flex items-center justify-end gap-3 w-full">
          <button onClick={onClose} className="px-5 py-2 rounded-full border-[1.5px] border-border-default text-text-darker font-bold text-[14px] hover:bg-gray-50 transition-colors" style={{ fontFamily: "var(--font-body)" }}>Batal</button>
          <button onClick={onConfirm} className="bg-brand-primary h-10 px-4 rounded-full text-white font-bold text-[14px] hover:bg-brand-primary-hover transition-colors" style={{ fontFamily: "var(--font-body)" }}>Aktifkan Kembali</button>
        </div>
      }
    >
      Akun <span className="font-bold text-text-darker">{nama}</span> akan bisa mengakses platform seperti biasa.
    </InfoModal>
  );
}
