import { useNavigate, useLocation } from "react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Lottie from "lottie-react";
import verificationSearchLottie from "../../assets/lottie/verification-search.json";
import imgVerificationRejected from "../../assets/onboarding/verification-rejected.png";
import { WaitingScreenHeader } from "../../components/shared/WaitingScreenHeader";

export function OnboardingPendingScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const status = (location.state as { status?: "pending" | "rejected"; rejectionReason?: string } | null)?.status ?? "pending";
  const rejectionReason =
    (location.state as { rejectionReason?: string } | null)?.rejectionReason ??
    "SIUP yang diunggah sudah kedaluwarsa. Harap unggah dokumen yang masih berlaku sesuai dengan data perusahaan.";

  if (status === "rejected") {
    return (
      <div className="bg-white flex flex-col items-start w-full h-screen overflow-hidden">
        <WaitingScreenHeader />
        <div className="flex-1 flex flex-col gap-12 items-center justify-center w-full px-30 pt-15 pb-20">
          <img src={imgVerificationRejected} alt="" className="h-[193px] w-[252px] object-contain" />
          <div className="flex flex-col gap-5 items-center text-center max-w-[640px]">
            <p className="text-text-darker text-[28px] font-bold leading-8" style={{ fontFamily: "var(--font-body)" }}>
              Verifikasi Perusahaan Anda Ditolak
            </p>
            <p className="text-text-lighter text-sm leading-5" style={{ fontFamily: "var(--font-body)" }}>
              Mohon maaf, pendaftaran Anda belum dapat disetujui
            </p>
            <div className="bg-white border border-border-lighter rounded-2xl flex flex-col gap-10 items-center justify-center p-5 w-[466px]">
              <div className="flex flex-col gap-2 items-center text-sm text-center">
                <p className="text-danger-strong font-semibold" style={{ fontFamily: "var(--font-body)" }}>
                  Alasan Penolakan:
                </p>
                <p className="text-text-darker" style={{ fontFamily: "var(--font-body)" }}>
                  {rejectionReason}
                </p>
              </div>
              <button
                onClick={() => navigate("/onboarding/documents")}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-brand-primary hover:bg-brand-primary-hover transition-colors text-white text-sm font-semibold"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <ArrowLeft size={16} />
                Perbaiki
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white flex flex-col items-start w-full h-screen overflow-hidden">
      <WaitingScreenHeader />
      <div className="flex-1 flex flex-col gap-12 items-center justify-center w-full px-30 pt-15 pb-20">
        <Lottie animationData={verificationSearchLottie} loop autoplay className="h-[288px] w-[282px]" aria-label="Dokumen perusahaan sedang diverifikasi" />
        <div className="flex flex-col gap-5 items-center text-center max-w-[640px]">
          <p className="text-text-darker text-[28px] font-bold leading-8" style={{ fontFamily: "var(--font-body)" }}>
            Selamat! Data perusahaan berhasil tersimpan
          </p>
          <p className="text-text-lighter text-sm leading-5" style={{ fontFamily: "var(--font-body)" }}>
            Data akan diverifikasi maksimal 1x24 jam. Kami akan menghubungi Anda via email
          </p>
          <button
            onClick={() => navigate("/empty-dashboard")}
            className="flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-brand-primary hover:bg-brand-primary-hover transition-colors text-white text-sm font-semibold"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Masuk ke Dashboard
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
