import { useState } from "react";
import { useNavigate } from "react-router";
import { Settings, LogOut } from "lucide-react";
import { useSession } from "../../lib/session";
import imgAvatar from "../../imports/LowonganPageJobList/c6659080845fc664635625ec6b1f2bd6fc3a8f49.png";

export function TopBarUserMenu() {
  const navigate = useNavigate();
  const { session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(v => !v)} className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-semibold text-black" style={{ fontFamily: "var(--font-body)" }}>{session.userName}</p>
          <p className="text-[11px] text-text-muted" style={{ fontFamily: "var(--font-body)" }}>{session.userRole}</p>
        </div>
        <div className="relative rounded-full shrink-0 size-10 overflow-hidden">
          <img alt="avatar" className="absolute inset-0 size-full object-cover" src={imgAvatar} />
        </div>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute z-50 top-[calc(100%+8px)] right-0 bg-white border border-border-lighter rounded-2xl shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] w-[240px] overflow-hidden">
            <div className="flex flex-col px-4 pt-4 pb-3">
              <p className="text-[14px] font-semibold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>{session.userName}</p>
              <p className="text-[12px] text-text-darker" style={{ fontFamily: "var(--font-body)" }}>{session.email}</p>
              <p className="text-[10px] text-[#9b9ca1]" style={{ fontFamily: "var(--font-body)" }}>{session.userRole}</p>
            </div>
            <div className="h-px bg-border-lighter w-full" />
            <button
              onClick={() => { setOpen(false); navigate("/profile"); }}
              className="flex items-center gap-3 px-4 py-2.5 w-full hover:bg-gray-50 transition-colors text-left"
            >
              <Settings size={20} className="text-text-default" />
              <span className="flex-1 text-[16px] text-text-default" style={{ fontFamily: "var(--font-body)" }}>Pengaturan</span>
            </button>
            <div className="h-px bg-border-lighter w-full" />
            <button
              onClick={() => { setOpen(false); navigate("/login"); }}
              className="flex items-center gap-3 px-4 py-3.5 w-full hover:bg-gray-50 transition-colors text-left"
            >
              <LogOut size={20} className="text-[#c55d53]" />
              <span className="flex-1 text-[16px] text-[#c55d53]" style={{ fontFamily: "var(--font-body)" }}>Keluar</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
