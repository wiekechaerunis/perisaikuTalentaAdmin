import { useEffect } from "react";
import { X } from "lucide-react";
import Lottie from "lottie-react";
import quotaExhaustedLottie from "../../assets/lottie/career.json";

export function SearchQuotaExhaustedModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f172a]/45 p-6" role="dialog" aria-modal="true" aria-labelledby="quota-exhausted-title">
      <div className="relative w-full max-w-[440px] rounded-3xl bg-white px-8 pb-8 pt-6 text-center shadow-[0_24px_70px_rgba(15,23,42,0.24)]">
        <button type="button" onClick={onClose} aria-label="Tutup" className="absolute right-5 top-5 flex size-8 items-center justify-center rounded-full bg-[#f3f4f6] text-icon-default transition-colors hover:bg-border-lighter">
          <X size={16} />
        </button>
        <Lottie animationData={quotaExhaustedLottie} loop className="mx-auto h-[190px] w-[240px]" />
        <h2 id="quota-exhausted-title" className="mt-1 text-[21px] font-bold leading-[28px] text-text-default" style={{ fontFamily: "var(--font-body)" }}>Kuota pencarian Anda habis</h2>
        <p className="mx-auto mt-3 max-w-[340px] text-[14px] leading-6 text-text-muted" style={{ fontFamily: "var(--font-body)" }}>
          Hasil kandidat tetap tersedia, tetapi detailnya dikunci. Tambah kuota Talent Search untuk melanjutkan pencarian dan melihat profil kandidat.
        </p>
        <button type="button" onClick={onClose} className="mt-6 h-11 w-full rounded-full bg-brand-primary px-5 text-[14px] font-bold text-white transition-colors hover:bg-brand-primary-hover" style={{ fontFamily: "var(--font-body)" }}>Lihat Paket Berlangganan</button>
        <button type="button" onClick={onClose} className="mt-3 text-[13px] font-semibold text-text-muted hover:text-text-default">Nanti saja</button>
      </div>
    </div>
  );
}
