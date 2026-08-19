import { useNavigate, useLocation } from "react-router";
import { User, Bell, Building2, Users, CreditCard, ArrowLeft } from "lucide-react";
import { SidebarLogo } from "../components/shared/SidebarLogo";

const SETTINGS_NAV_GROUPS = [
  {
    title: "USER",
    items: [
      { path: "/profile",              label: "Profil Saya",           icon: User },
      { path: "/profile/notifications", label: "Preferensi Notifikasi", icon: Bell },
    ],
  },
  {
    title: "COMPANY",
    items: [
      { path: "/profile/company", label: "Profil Perusahaan",  icon: Building2 },
      { path: "/profile/team",    label: "Team & Hak Akses",   icon: Users },
      { path: "/profile/billing", label: "Billing & Langganan", icon: CreditCard },
    ],
  },
] as const;

export function SettingsSidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="bg-white w-[260px] shrink-0 h-full flex flex-col gap-6 p-6 border-r border-border-lighter overflow-y-auto">
      <SidebarLogo />

      <button
        onClick={() => navigate("/dashboard")}
        className="flex items-center gap-2 w-full px-4 py-2.5 rounded-lg border border-border-lighter text-sm font-semibold text-text-default hover:bg-gray-50 transition-colors text-left"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <ArrowLeft size={16} />
        Kembali ke Dashboard
      </button>

      <div className="flex flex-col gap-6 w-full">
        {SETTINGS_NAV_GROUPS.map(group => (
          <div key={group.title} className="flex flex-col gap-1 w-full">
            <p className="px-4 text-[11px] font-bold text-[#9b9ca1] tracking-wide" style={{ fontFamily: "var(--font-body)" }}>{group.title}</p>
            {group.items.map(item => {
              const isActive = pathname === item.path
                || (item.path === "/profile" && (pathname === "/profile/edit" || pathname === "/profile/change-password"))
                || (item.path === "/profile/company" && pathname === "/profile/company/edit");
              const Icon = item.icon;
              return (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-semibold transition-colors text-left ${isActive ? "bg-[#ebf2ff] text-[#0044d2]" : "text-text-default hover:bg-gray-50"}`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <Icon size={20} className={isActive ? "text-brand-primary" : "text-text-muted"} />
                  {item.label}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
