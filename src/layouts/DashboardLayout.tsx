import { useLocation, Outlet } from "react-router";
import { SettingsSidebar } from "./SettingsSidebar";
import { DashboardSidebar } from "./DashboardSidebar";

export function DashboardLayout() {
  const { pathname } = useLocation();
  const inProfileSection = pathname.startsWith("/profile");

  return (
    <div className="flex w-full h-screen overflow-hidden">
      {inProfileSection ? <SettingsSidebar /> : <DashboardSidebar />}
      <Outlet />
    </div>
  );
}
