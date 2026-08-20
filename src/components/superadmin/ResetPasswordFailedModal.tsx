import Lottie from "lottie-react";
import resetPasswordFailedLottie from "../../assets/lottie/reset-password-failed.json";

export function ResetPasswordFailedModal({ onClose, onRetry }: { onClose: () => void; onRetry: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl w-full max-w-[400px] border border-border-lighter shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] p-6 flex flex-col items-center gap-6 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="size-24">
          <Lottie animationData={resetPasswordFailedLottie} loop={false} autoplay />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p className="text-[18px] font-bold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>Email Reset Password Gagal Dikirim</p>
          <p className="text-[14px] text-text-darker" style={{ fontFamily: "var(--font-body)" }}>
            Terjadi kesalahan saat mengirim email.<br />Silakan periksa alamat email dan coba lagi.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full">
          <button onClick={onClose} className="flex-1 h-10 rounded-full border-[1.5px] border-border-default text-text-darker font-bold text-[14px] hover:bg-gray-50 transition-colors" style={{ fontFamily: "var(--font-body)" }}>
            Tutup
          </button>
          <button onClick={onRetry} className="flex-1 h-10 rounded-full bg-brand-primary text-white font-bold text-[14px] hover:bg-brand-primary-hover transition-colors" style={{ fontFamily: "var(--font-body)" }}>
            Coba Lagi
          </button>
        </div>
      </div>
    </div>
  );
}
