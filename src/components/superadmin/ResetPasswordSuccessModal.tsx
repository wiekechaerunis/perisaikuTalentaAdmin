import Lottie from "lottie-react";
import emailInvitationSuccessLottie from "../../assets/lottie/email-invitation-success.json";

export function ResetPasswordSuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl w-full max-w-[400px] border border-border-lighter shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] p-6 flex flex-col items-center gap-6 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="size-20">
          <Lottie animationData={emailInvitationSuccessLottie} loop={false} autoplay />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p className="text-[18px] font-bold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>Email Reset Password Berhasil Dikirim</p>
          <p className="text-[14px] text-text-darker" style={{ fontFamily: "var(--font-body)" }}>
            Email telah dikirim ke alamat email yang ditentukan.<br />Link reset berlaku selama 60 menit.
          </p>
        </div>
        <button onClick={onClose} className="w-full h-10 rounded-full bg-brand-primary text-white font-bold text-[14px] hover:bg-brand-primary-hover transition-colors" style={{ fontFamily: "var(--font-body)" }}>
          Tutup
        </button>
      </div>
    </div>
  );
}
