import { useNavigate, useLocation, Outlet } from "react-router";
import { ShieldCheck, Users, BarChart3, Percent } from "lucide-react";
import { NotificationBell } from "../components/shared/NotificationBell";
import imgAvatar from "../imports/LowonganPageJobList/c6659080845fc664635625ec6b1f2bd6fc3a8f49.png";

const SUPERADMIN_NAV = [
  { path: "/superadmin/verifikasi-employer", label: "Verifikasi Employer", icon: ShieldCheck },
  { path: "/superadmin/manajemen-pengguna",  label: "Manjemen Pengguna",   icon: Users },
  { path: "/superadmin/analitik-platform",   label: "Analitik Platform",   icon: BarChart3 },
  { path: "/superadmin/konfigurasi-pajak",   label: "Konfigurasi Pajak",   icon: Percent },
];

function SuperadminSidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="bg-white w-[260px] shrink-0 h-full flex flex-col gap-8 p-6 border-r border-border-lighter overflow-y-auto">
      <div className="flex items-center gap-3">
        <div className="bg-brand-primary w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
          <ShieldCheck size={20} className="text-white" />
        </div>
        <span className="whitespace-nowrap text-brand-primary text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>Perisaiku Talenta</span>
      </div>

      <div className="flex flex-col gap-2 w-full">
        {SUPERADMIN_NAV.map(item => {
          const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`);
          const Icon = item.icon;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-semibold transition-colors text-left ${isActive ? "bg-[#ebf2ff] text-brand-primary" : "text-text-default hover:bg-gray-50"}`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              <Icon size={20} className={isActive ? "text-brand-primary" : "text-text-muted"} />
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function SuperadminTopBar() {
  return (
    <div className="bg-white border-b border-border-lighter px-10 py-5 flex items-center justify-end shrink-0 relative">
      <NotificationBell />
      <div className="flex items-center gap-3">
        <div className="text-right whitespace-nowrap">
          <p className="text-sm font-semibold text-black" style={{ fontFamily: "var(--font-body)" }}>Budi Santoso</p>
          <p className="text-[11px] text-text-muted" style={{ fontFamily: "var(--font-body)" }}>Super Admin</p>
        </div>
        <div className="relative rounded-full shrink-0 size-10 overflow-hidden">
          <img alt="avatar" className="absolute inset-0 size-full object-cover" src={imgAvatar} />
        </div>
      </div>
    </div>
  );
}

export function SuperadminLayout() {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <SuperadminSidebar />
      <Outlet />
    </div>
  );
}
