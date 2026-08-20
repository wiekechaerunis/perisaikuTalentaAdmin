import { useLocation, Outlet } from "react-router";
import { SettingsSidebar } from "./SettingsSidebar";
import { DashboardSidebar } from "./DashboardSidebar";
import { FormGuardProvider } from "../lib/formGuard";

export function DashboardLayout() {
  const { pathname } = useLocation();
  const inProfileSection = pathname.startsWith("/profile");

  return (
    <FormGuardProvider>
      <div className="flex w-full h-screen overflow-hidden">
        {inProfileSection ? <SettingsSidebar /> : <DashboardSidebar />}
        <Outlet />
      </div>
    </FormGuardProvider>
  );
}
