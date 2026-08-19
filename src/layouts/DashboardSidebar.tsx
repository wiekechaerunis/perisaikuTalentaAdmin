import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { Plus, Menu, CircleHelp, Headphones } from "lucide-react";
import { SidebarLogo } from "../components/shared/SidebarLogo";

export function DashboardSidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [collapsed, setCollapsed] = useState(() => localStorage.getItem("dashboard-sidebar-collapsed") === "true");

  useEffect(() => {
    localStorage.setItem("dashboard-sidebar-collapsed", String(collapsed));
  }, [collapsed]);

  const SidebarIcon = ({ d }: { d: string }) => d === "dashboard-custom" ? (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M7.5 2.5H3.33333C2.8731 2.5 2.5 2.8731 2.5 3.33333V9.16667C2.5 9.6269 2.8731 10 3.33333 10H7.5C7.96024 10 8.33333 9.6269 8.33333 9.16667V3.33333C8.33333 2.8731 7.96024 2.5 7.5 2.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16.6667 2.5H12.5C12.0398 2.5 11.6667 2.8731 11.6667 3.33333V5.83333C11.6667 6.29357 12.0398 6.66667 12.5 6.66667H16.6667C17.1269 6.66667 17.5 6.29357 17.5 5.83333V3.33333C17.5 2.8731 17.1269 2.5 16.6667 2.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16.6667 10H12.5C12.0398 10 11.6667 10.3731 11.6667 10.8333V16.6667C11.6667 17.1269 12.0398 17.5 12.5 17.5H16.6667C17.1269 17.5 17.5 17.1269 17.5 16.6667V10.8333C17.5 10.3731 17.1269 10 16.6667 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M7.5 13.3333H3.33333C2.8731 13.3333 2.5 13.7064 2.5 14.1667V16.6667C2.5 17.1269 2.8731 17.5 3.33333 17.5H7.5C7.96024 17.5 8.33333 17.1269 8.33333 16.6667V14.1667C8.33333 13.7064 7.96024 13.3333 7.5 13.3333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ) : d === "briefcase-custom" ? (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M13.3336 17.166V3.83268C13.3336 3.39065 13.158 2.96673 12.8454 2.65417C12.5328 2.34161 12.1089 2.16602 11.6668 2.16602H8.33322C7.89115 2.16602 7.4672 2.34161 7.15461 2.65417C6.84202 2.96673 6.66642 3.39065 6.66642 3.83268V17.166M3.33282 5.49935H16.6672C17.5878 5.49935 18.334 6.24554 18.334 7.16602V15.4993C18.334 16.4198 17.5878 17.166 16.6672 17.166H3.33282C2.41227 17.166 1.66602 16.4198 1.66602 15.4993V7.16602C1.66602 6.24554 2.41227 5.49935 3.33282 5.49935Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ) : (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d={d} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  const dashboardD = "dashboard-custom";
  const lowonganD  = "briefcase-custom";
  const usersD     = "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75";
  const chartD     = "M18 20V10M12 20V4M6 20v-6";

  const navBtn = (path: string, label: string, d: string, indent = false, activeTest?: (p: string) => boolean) => {
    const isActive = activeTest ? activeTest(pathname) : pathname === path;
    return (
      <button
        key={path}
        onClick={() => navigate(path)}
        title={collapsed ? label : undefined}
        aria-label={label}
        className={`flex items-center gap-3 w-full rounded-lg text-sm font-semibold transition-colors text-left ${
          isActive ? "bg-[#ebf2ff] text-[#0044d2]" : "text-text-default hover:bg-gray-50"
        } ${collapsed ? "justify-center px-3 py-3" : indent ? "pl-12 pr-4 py-2" : "px-4 py-3"}`}
        style={{ fontFamily: "var(--font-body)" }}
      >
        {!indent && (
          <span className={isActive ? "text-brand-primary" : "text-text-muted"}>
            <SidebarIcon d={d} />
          </span>
        )}
        {!collapsed && label}
      </button>
    );
  };

  return (
    <div className={`bg-white shrink-0 h-full flex flex-col gap-6 border-r border-border-lighter transition-[width,padding] duration-300 ${collapsed ? "w-[80px] p-4" : "w-[300px] p-6"}`}>
      <div className={`flex items-center ${collapsed ? "flex-col gap-3" : "justify-between gap-2"}`}>
        {collapsed ? <button type="button" onClick={() => setCollapsed(false)} aria-label="Perluas sidebar" title="Perluas sidebar" className="flex size-9 items-center justify-center rounded-lg bg-brand-primary transition-transform hover:scale-105"><svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M10 2l8 4v5c0 4-3.5 7-8 8C5.5 18 2 15 2 11V6l8-4z" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg></button> : <SidebarLogo />}
        {!collapsed && <button type="button" onClick={() => setCollapsed(true)} aria-label="Ciutkan sidebar" title="Ciutkan sidebar" className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border-lighter bg-white text-text-muted shadow-sm hover:bg-[#f3f4f6] hover:text-brand-primary"><Menu size={18} /></button>}
      </div>

      <button
        onClick={() => navigate("/post-job")}
        title={collapsed ? "Buat Lowongan Baru" : undefined}
        aria-label="Buat Lowongan Baru"
        className="flex items-center gap-2 w-full h-11 rounded-full bg-brand-primary text-white text-sm font-semibold hover:bg-brand-primary-hover transition-colors justify-center"
        style={{ fontFamily: "var(--font-body)" }}
      >
        <Plus size={16} />
        {!collapsed && "Buat Lowongan Baru"}
      </button>

      {/* Nav */}
      <div className="flex flex-col gap-2 w-full">
        {navBtn("/dashboard", "Dashboard", dashboardD)}
        {navBtn("/lowongan", "Lowongan", lowonganD)}
        {navBtn("/list-kandidat", "Cari Kandidat", usersD)}
        {navBtn("/analitik", "Analitik", chartD)}
      </div>

      <div className="mt-auto flex w-full flex-col gap-1 border-t border-border-lighter pt-4">
        <button onClick={() => navigate("/faq")} title={collapsed ? "FAQ" : undefined} aria-label="FAQ" className={`flex w-full items-center gap-3 rounded-lg py-3 text-left text-sm font-semibold transition-colors ${collapsed ? "justify-center px-3" : "px-4"} ${pathname === "/faq" ? "bg-[#ebf2ff] text-[#0044d2]" : "text-text-default hover:bg-gray-50"}`} style={{ fontFamily: "var(--font-body)" }}><CircleHelp size={20} className={pathname === "/faq" ? "text-brand-primary" : "text-text-muted"} />{!collapsed && "FAQ"}</button>
        <button onClick={() => navigate("/support")} title={collapsed ? "Hubungi Support" : undefined} aria-label="Hubungi Support" className={`flex w-full items-center gap-3 rounded-lg py-3 text-left text-sm font-semibold transition-colors ${collapsed ? "justify-center px-3" : "px-4"} ${pathname === "/support" ? "bg-[#ebf2ff] text-[#0044d2]" : "text-text-default hover:bg-gray-50"}`} style={{ fontFamily: "var(--font-body)" }}><Headphones size={20} className={pathname === "/support" ? "text-brand-primary" : "text-text-muted"} />{!collapsed && "Hubungi Support"}</button>
      </div>
    </div>
  );
}
