import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { Eye, MoreVertical } from "lucide-react";
import { PlatformUserStatus } from "../../mocks/manajemen-pengguna";

export function UserRowActions({ id, status, onSuspend, onActivate, onBan, onUnban, onResetPassword }: {
  id: string;
  status: PlatformUserStatus;
  onSuspend: () => void;
  onActivate: () => void;
  onBan: () => void;
  onUnban: () => void;
  onResetPassword: () => void;
}) {
  const navigate = useNavigate();
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

  const itemClass = "flex items-center w-full px-2 py-1.5 text-[12px] text-text-darker hover:bg-gray-50 rounded-md transition-colors leading-[18px]";

  return (
    <div className="flex items-center justify-center gap-2" onClick={(e) => e.stopPropagation()}>
      <button
        title="Lihat Detail"
        onClick={() => navigate(`/superadmin/manajemen-pengguna/${id}`)}
        className="w-7 h-7 rounded-md flex items-center justify-center text-icon-default hover:bg-gray-100 transition-colors"
        aria-label="Lihat detail"
      >
        <Eye size={14} />
      </button>
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
            {status === "aktif" && (
              <button onClick={() => { setOpen(false); onSuspend(); }} className={itemClass}>
                Suspend Akun
              </button>
            )}
            {status === "suspend" && (
              <button onClick={() => { setOpen(false); onActivate(); }} className={itemClass}>
                Aktifkan Akun
              </button>
            )}
            <button onClick={() => { setOpen(false); onResetPassword(); }} className={itemClass}>
              Reset Password
            </button>
            {status === "ban" ? (
              <button onClick={() => { setOpen(false); onUnban(); }} className={itemClass}>
                Cabut Ban
              </button>
            ) : (
              <>
                <div className="bg-border-lighter h-px my-1 mx-2" />
                <button
                  onClick={() => { setOpen(false); onBan(); }}
                  className="flex items-center w-full px-2 py-1.5 text-[12px] text-[#c93f2a] hover:bg-red-50 rounded-md transition-colors leading-[18px]"
                >
                  Ban
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
