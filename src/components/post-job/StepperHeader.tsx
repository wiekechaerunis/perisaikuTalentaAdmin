import { Check } from "lucide-react";

export const WIZARD_STEPS = [
  { label: "Informasi Pekerjaan" },
  { label: "Syarat Pelamar" },
  { label: "Kompensasi & Komunikasi" },
  { label: "Konfirmasi" },
];

export function StepperHeader({ currentStep }: { currentStep: number }) {
  return (
    <div className="bg-white border border-border-lighter rounded-[19px] px-8 py-6 flex flex-col w-full shrink-0">
      <div className="flex items-center justify-between w-full flex-wrap gap-y-3">
        {WIZARD_STEPS.map((s, i) => {
          const stepNum = i + 1;
          const completed = stepNum < currentStep;
          const active = stepNum === currentStep;
          return (
            <div key={s.label} className="flex items-center gap-3 shrink-0">
              <div className={`flex items-center justify-center rounded-full w-8 h-8 shrink-0 ${completed || active ? "bg-brand-primary" : "bg-[#f1f3f5]"}`}>
                {completed ? (
                  <Check size={14} className="text-white" strokeWidth={3} />
                ) : (
                  <span className="text-[14px] font-bold" style={{ fontFamily: "var(--font-body)", color: active ? "white" : "#777980" }}>{stepNum}</span>
                )}
              </div>
              <span
                className="text-[14px] whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: active ? 700 : 500,
                  color: active || completed ? "#2b81f3" : "#777980",
                }}
              >
                {s.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
