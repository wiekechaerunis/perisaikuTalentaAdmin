import { InfoModal } from "../shared/InfoModal";

export function ResetPasswordModal({ nama, email, onConfirm, onClose }: { nama: string; email: string; onConfirm: () => void; onClose: () => void }) {
  return (
    <InfoModal
      title="Reset Password?"
      onClose={onClose}
      footer={
        <div className="flex items-center justify-end gap-3 w-full">
          <button onClick={onClose} className="px-5 py-2 rounded-full border-[1.5px] border-border-default text-text-darker font-bold text-[14px] hover:bg-gray-50 transition-colors" style={{ fontFamily: "var(--font-body)" }}>Batal</button>
          <button onClick={onConfirm} className="bg-brand-primary h-10 px-4 rounded-full text-white font-bold text-[14px] hover:bg-brand-primary-hover transition-colors" style={{ fontFamily: "var(--font-body)" }}>Kirim Reset Password</button>
        </div>
      }
    >
      Email berisi tautan reset password akan dikirim ke <span className="font-bold text-text-darker">{email}</span> milik akun <span className="font-bold text-text-darker">{nama}</span>
    </InfoModal>
  );
}
