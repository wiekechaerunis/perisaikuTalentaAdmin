import React from "react";
import { X } from "lucide-react";

export function InfoModal({ title, onClose, children, footer }: {
  title: string; onClose: () => void; children: React.ReactNode; footer?: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl w-full max-w-[440px] border border-border-lighter shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] p-6 flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3 w-full">
          <p className="flex-1 text-[18px] font-bold text-text-darker leading-7" style={{ fontFamily: "var(--font-body)" }}>{title}</p>
          <button onClick={onClose} className="bg-[#f3f4f6] rounded-full p-1 hover:bg-gray-200 transition-colors shrink-0">
            <X size={16} className="text-icon-default" />
          </button>
        </div>
        <div className="text-[12px] text-text-darker leading-[18px]" style={{ fontFamily: "var(--font-body)" }}>
          {children}
        </div>
        {footer}
      </div>
    </div>
  );
}
