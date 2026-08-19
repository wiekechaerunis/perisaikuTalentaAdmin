import { useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";
import Lottie from "lottie-react";
import verificationSearchLottie from "../../assets/lottie/verification-search.json";
import { WaitingScreenHeader } from "../../components/shared/WaitingScreenHeader";

export function OnboardingPendingScreen() {
  const navigate = useNavigate();
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
