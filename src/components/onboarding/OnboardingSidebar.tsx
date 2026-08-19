import { Briefcase } from "lucide-react";
import { useSession } from "../../lib/session";
import { BrandBlurCircles } from "../shared/BrandBlurCircles";

export const ONBOARDING_STEPS = [
  { label: "Data Perusahaan", desc: "Informasi profil perusahaan" },
  { label: "Dokumen Legal", desc: "Verifikasi legalitas usaha" },
];

export function OnboardingSidebar({ currentStep }: { currentStep: 1 | 2 }) {
  const { session } = useSession();
  return (
    <div
      className="relative self-stretch shrink-0 w-[320px] overflow-hidden"
      style={{ background: "linear-gradient(155.5deg, #2267C2 0%, #2B81F3 39.01%, #0EA5E9 78.021%)" }}
    >
      <BrandBlurCircles />
      <div className="relative z-10 flex flex-col items-start justify-between p-10 size-full">
        <div className="flex flex-col gap-10 items-start w-full">
          <div className="flex gap-3 items-center">
            <div className="bg-[#4361ee] flex items-center justify-center rounded-lg size-8 shrink-0">
              <Briefcase size={16} className="text-white" />
            </div>
            <p className="text-white text-xl font-bold" style={{ fontFamily: "var(--font-body)" }}>Perisaiku Talenta</p>
          </div>

          <div className="flex flex-col gap-2 items-start w-full">
            <p className="text-white text-2xl font-bold" style={{ fontFamily: "var(--font-body)" }}>Halo,<br />{session.companyName} 👋</p>
            <p className="text-white/80 text-sm leading-5" style={{ fontFamily: "var(--font-body)" }}>
              Lengkapi informasi perusahaan Anda untuk verifikasi perusahaan Anda
            </p>
          </div>

          <div className="flex flex-col gap-6 w-full">
            <p className="text-white text-[11px] font-bold uppercase tracking-wider" style={{ fontFamily: "var(--font-body)" }}>
              Progress Onboarding
            </p>
            <div className="flex flex-col gap-6 w-full">
              {ONBOARDING_STEPS.map((s, i) => {
                const num = i + 1;
                const active = currentStep === num;
                const completed = currentStep > num;
                const isHighlighted = active || completed;
                return (
                  <div key={s.label} className="flex gap-4 items-start w-full">
                    <div className={`flex items-center justify-center rounded-full size-8 shrink-0 font-bold text-sm transition-all duration-300 ${isHighlighted ? "bg-white text-brand-primary" : "border border-white/25 text-white/50"}`}>
                      {completed && !active ? (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7L5.5 10.5L12 4" stroke="#2b81f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : num}
                    </div>
                    <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                      <p className={`text-sm font-semibold ${isHighlighted ? "text-white" : "text-white/50"}`} style={{ fontFamily: "var(--font-body)" }}>{s.label}</p>
                      <p className={`text-xs ${isHighlighted ? "text-white/80" : "text-white/25"}`} style={{ fontFamily: "var(--font-body)" }}>{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative rounded-xl w-full bg-white/10 border border-white/20">
          <div className="flex flex-col gap-3 items-start p-4">
            <p className="text-white text-sm font-semibold" style={{ fontFamily: "var(--font-body)" }}>Butuh Bantuan?</p>
            <p className="text-white/80 text-xs leading-4" style={{ fontFamily: "var(--font-body)" }}>
              Hubungi tim support kami jika mengalami kendala saat melengkapi data
            </p>
            <button className="flex items-center justify-center gap-2 w-full h-9 rounded-full bg-white/10 border border-white/30 text-white text-xs font-semibold hover:bg-white/20 transition-colors" style={{ fontFamily: "var(--font-body)" }}>
              Hubungi Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
