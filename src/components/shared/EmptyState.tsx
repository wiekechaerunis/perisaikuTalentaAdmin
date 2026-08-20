import { ReactNode } from "react";

export function EmptyState({ image, title, description, action }: { image: string; title: string; description: string; action?: ReactNode }) {
  return (
    <div className="bg-white border border-border-lighter rounded-xl flex flex-col items-center justify-center gap-6 px-10 py-20">
      <img src={image} alt="" className="w-[332px] max-w-full h-auto object-contain" />
      <div className="flex flex-col items-center gap-2 text-center max-w-[400px]">
        <p className="text-[21px] font-bold text-text-default whitespace-nowrap" style={{ fontFamily: "var(--font-body)" }}>{title}</p>
        <p className="text-[14px] text-[#64748b]" style={{ fontFamily: "var(--font-body)" }}>{description}</p>
      </div>
      {action}
    </div>
  );
}
