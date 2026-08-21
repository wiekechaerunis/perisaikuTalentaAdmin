import { useState } from "react";
import { useLocation, useNavigate, Outlet } from "react-router";
import { ArrowLeft } from "lucide-react";
import { NotificationBell } from "../components/shared/NotificationBell";
import { TopBarUserMenu } from "../components/shared/TopBarUserMenu";
import { StatusToastStack, StatusToastItem } from "../components/shared/StatusToast";
import { PROFILE_PAGE_HEADERS, PROFILE_SUBPAGE_HEADERS, ProfileSharedState, COMPANY_ABOUT_PARAGRAPHS } from "../mocks/profile";
import { SUBSCRIPTION_TIER_ROWS, SubscriptionTierRow, CURRENT_EMPLOYER_SUBSCRIPTION } from "../mocks/subscription";
import imgAvatar from "../imports/LowonganPageJobList/c6659080845fc664635625ec6b1f2bd6fc3a8f49.png";

export function ProfileLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const subpageHeader = PROFILE_SUBPAGE_HEADERS[pathname]
    ?? (pathname.startsWith("/profile/billing/checkout/") ? { title: "Checkout", description: "Selesaikan pembayaran untuk mengaktifkan paket", back: "/profile/billing/plans" } : undefined);
  const header = PROFILE_PAGE_HEADERS[pathname] ?? PROFILE_PAGE_HEADERS["/profile"];

  const [name, setName] = useState("Budi Santoso");
  const [email, setEmail] = useState("budi.santoso@gmail.com");
  const [phone, setPhone] = useState("812 3456 7890");
  const [avatarSrc, setAvatarSrc] = useState<string | null>(imgAvatar);
  const [savedPassword, setSavedPassword] = useState("Password123");

  const [companyName, setCompanyName] = useState("PT Perisaiku Talenta");
  const [companyIndustry, setCompanyIndustry] = useState("Teknologi Informasi");
  const [companyCity, setCompanyCity] = useState("Jakarta");
  const [companySize, setCompanySize] = useState("51–200 karyawan");
  const [companyAddress, setCompanyAddress] = useState("Jl. Jendral Sudirman No. 1");
  const [companyWebsite, setCompanyWebsite] = useState("https://perisakutalenta.com");
  const [companyLogoSrc, setCompanyLogoSrc] = useState<string | null>(null);
  const [companyOfficeCity, setCompanyOfficeCity] = useState("");
  const [companyDescription, setCompanyDescription] = useState(COMPANY_ABOUT_PARAGRAPHS.join("\n\n"));
  const [companyPhotos, setCompanyPhotos] = useState<string[]>([]);
  const [activeTier, setActiveTier] = useState<SubscriptionTierRow>(
    SUBSCRIPTION_TIER_ROWS.find(t => t.id === CURRENT_EMPLOYER_SUBSCRIPTION.tierId) ?? SUBSCRIPTION_TIER_ROWS[0]
  );

  const [toasts, setToasts] = useState<StatusToastItem[]>([]);
  const pushToast = (message: string) => {
    const id = Date.now() + Math.random();
    setToasts(prev => [...prev, { id, variant: "success", message }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000);
  };
  const dismissToast = (id: number) => setToasts(prev => prev.filter(t => t.id !== id));

  const [headerActions, setHeaderActions] = useState<React.ReactNode>(null);

  const outletContext: ProfileSharedState = {
    name, setName, email, setEmail, phone, setPhone, avatarSrc, setAvatarSrc, savedPassword, setSavedPassword,
    companyName, setCompanyName, companyIndustry, setCompanyIndustry, companyCity, setCompanyCity,
    companySize, setCompanySize, companyAddress, setCompanyAddress, companyWebsite, setCompanyWebsite,
    companyLogoSrc, setCompanyLogoSrc, companyOfficeCity, setCompanyOfficeCity,
    companyDescription, setCompanyDescription, companyPhotos, setCompanyPhotos,
    activeTier, setActiveTier,
    pushToast, setHeaderActions,
  };

  return (
    <div className="flex-1 min-w-0 h-full flex flex-col overflow-hidden bg-surface">
      {/* Top bar */}
      <div className="bg-white border-b border-border-lighter px-10 py-5 flex items-center justify-end shrink-0">
        <div className="flex items-center gap-4">
          <NotificationBell />
          <TopBarUserMenu />
        </div>
      </div>

      <StatusToastStack toasts={toasts} onDismiss={dismissToast} />

      {/* Header */}
      <div className="px-10 pt-6 pb-2 shrink-0 flex items-start justify-between gap-4">
        <div className="min-w-0">
          {subpageHeader ? (
            <>
              <div className="flex items-center gap-3">
                <button onClick={() => navigate(subpageHeader.back)} className="text-text-default hover:text-brand-primary transition-colors"><ArrowLeft size={20} /></button>
                <p className="text-[24px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>{subpageHeader.title}</p>
              </div>
              {subpageHeader.description && (
                <p className="text-sm text-text-muted mt-1 pl-9" style={{ fontFamily: "var(--font-body)" }}>{subpageHeader.description}</p>
              )}
            </>
          ) : (
            <>
              <p className="text-[24px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>{header.title}</p>
              <p className="text-sm text-text-muted mt-1" style={{ fontFamily: "var(--font-body)" }}>{header.description}</p>
            </>
          )}
        </div>
        {headerActions && <div className="shrink-0">{headerActions}</div>}
      </div>

      {/* Active section content */}
      <div className="flex-1 min-h-0 overflow-y-auto px-10 pt-6 pb-10">
        <Outlet context={outletContext} />
      </div>
    </div>
  );
}
