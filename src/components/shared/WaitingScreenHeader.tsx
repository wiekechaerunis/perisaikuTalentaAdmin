import { Briefcase } from "lucide-react";

export function WaitingScreenHeader() {
  return (
    <div className="border-b border-border-lighter h-20 flex items-center justify-between px-20 w-full shrink-0">
      <div className="flex gap-3 items-center">
        <div className="bg-brand-primary flex items-center justify-center rounded-lg size-8 shrink-0">
          <Briefcase size={16} className="text-white" />
        </div>
        <p className="text-text-darker text-lg font-bold" style={{ fontFamily: "var(--font-body)" }}>Perisaiku Talenta</p>
      </div>
      <div className="flex gap-6 items-center text-sm">
        <span className="text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>Butuh Bantuan?</span>
        <span className="text-brand-primary font-semibold cursor-pointer" style={{ fontFamily: "var(--font-body)" }}>Hubungi Support</span>
      </div>
    </div>
  );
}
