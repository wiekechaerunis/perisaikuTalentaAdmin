import { InfoModal } from "./InfoModal";

export function UnsavedChangesModal({ onStay, onLeave }: { onStay: () => void; onLeave: () => void }) {
  return (
    <InfoModal
      title="Apakah Anda yakin?"
      onClose={onStay}
      footer={
        <div className="flex items-center justify-end gap-3 w-full">
          <button onClick={onLeave} className="px-5 py-2 rounded-full border-[1.5px] border-border-default text-text-darker font-bold text-[14px] hover:bg-gray-50 transition-colors" style={{ fontFamily: "var(--font-body)" }}>Batal</button>
          <button onClick={onStay} className="bg-brand-primary h-10 px-4 rounded-full text-white font-bold text-[14px] hover:bg-brand-primary-hover transition-colors" style={{ fontFamily: "var(--font-body)" }}>Selesaikan Formulir</button>
        </div>
      }
    >
      Semua data yang telah Anda masukkan akan hilang jika Anda meninggalkan formulir ini.
    </InfoModal>
  );
}
