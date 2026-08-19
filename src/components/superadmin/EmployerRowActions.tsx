import { useState, useEffect, useRef } from "react";
import { Eye, MoreVertical, CircleCheck, SquarePen, Ban } from "lucide-react";
import { EmployerVerificationStatus } from "../../mocks/superadmin";

export function EmployerRowActions({ status, onApprove, onRequestRevision, onReject }: { status: EmployerVerificationStatus; onApprove: () => void; onRequestRevision: () => void; onReject: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div className="flex items-center justify-center gap-2">
      <button title="Lihat Detail" className="w-7 h-7 rounded-md flex items-center justify-center text-icon-default hover:bg-gray-100 transition-colors" aria-label="Lihat detail">
        <Eye size={14} />
      </button>
      {status === "pending" && (
        <div ref={ref} className="relative">
          <button
            title="More"
            onClick={() => setOpen(v => !v)}
            className="w-7 h-7 rounded-md flex items-center justify-center text-icon-default hover:bg-gray-100 transition-colors"
            aria-label="Aksi lainnya"
          >
            <MoreVertical size={14} />
          </button>
          {open && (
            <div
              className="absolute right-0 top-full mt-1 z-50 bg-white rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] py-1.5 w-[184px] text-left"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <button
                onClick={() => { setOpen(false); onApprove(); }}
                className="flex items-center gap-2.5 w-full px-2 py-1.5 text-[12px] text-text-darker hover:bg-gray-50 rounded-md transition-colors leading-[18px]"
              >
                <CircleCheck size={14} className="text-icon-default" />
                Setujui
              </button>
              <button
                onClick={() => { setOpen(false); onRequestRevision(); }}
                className="flex items-center gap-2.5 w-full px-2 py-1.5 text-[12px] text-text-darker hover:bg-gray-50 rounded-md transition-colors leading-[18px]"
              >
                <SquarePen size={14} className="text-icon-default" />
                Request Revisi
              </button>
              <div className="bg-border-lighter h-px my-1 mx-2" />
              <button
                onClick={() => { setOpen(false); onReject(); }}
                className="flex items-center gap-2.5 w-full px-2 py-1.5 text-[12px] text-[#c93f2a] hover:bg-red-50 rounded-md transition-colors leading-[18px]"
              >
                <Ban size={14} className="text-[#c93f2a]" />
                Tolak
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
