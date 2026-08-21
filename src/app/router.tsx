import { createBrowserRouter, useRouteError, Navigate } from "react-router";
import { DashboardLayout } from "../layouts/DashboardLayout";
import { ProfileLayout } from "../layouts/ProfileLayout";
import { SuperadminLayout } from "../layouts/SuperadminLayout";

import { RegisterPage } from "../pages/auth/RegisterPage";
import { EmailVerificationScreen } from "../pages/auth/EmailVerificationScreen";
import { LoginPage } from "../pages/auth/LoginPage";
import { ForgotPasswordScreen } from "../pages/auth/ForgotPasswordScreen";
import { ResetLinkSentScreen } from "../pages/auth/ResetLinkSentScreen";
import { ResetPasswordScreen } from "../pages/auth/ResetPasswordScreen";

import { OnboardingCompanyScreen } from "../pages/onboarding/OnboardingCompanyScreen";
import { OnboardingDocumentsScreen } from "../pages/onboarding/OnboardingDocumentsScreen";
import { OnboardingPendingScreen } from "../pages/onboarding/OnboardingPendingScreen";

import { DashboardContent } from "../pages/dashboard/DashboardContent";
import { DashboardEmptyState } from "../pages/dashboard/DashboardEmptyState";
import { HelpContent } from "../pages/dashboard/HelpContent";

import { LowonganContent } from "../pages/lowongan/LowonganContent";
import { LowonganDetailContent } from "../pages/lowongan/LowonganDetailContent";
import { PostJobContent } from "../pages/post-job/PostJobContent";
import { PipelineDetailContent } from "../pages/pipeline/PipelineDetailContent";
import { CariKandidatContent } from "../pages/cari-kandidat/CariKandidatContent";
import { AnalyticsContent } from "../pages/analitik/AnalyticsContent";

import { ProfileUserContent } from "../pages/profile/ProfileUserContent";
import { ProfileEditContent } from "../pages/profile/ProfileEditContent";
import { ChangePasswordContent } from "../pages/profile/ChangePasswordContent";
import { ProfileNotificationsContent } from "../pages/profile/ProfileNotificationsContent";
import { ProfileCompanyContent } from "../pages/profile/ProfileCompanyContent";
import { ProfileCompanyEditContent } from "../pages/profile/ProfileCompanyEditContent";
import { ProfileTeamContent } from "../pages/profile/ProfileTeamContent";
import { ProfileBillingContent } from "../pages/profile/ProfileBillingContent";
import { BillingPlansContent } from "../pages/profile/BillingPlansContent";
import { BillingCheckoutContent } from "../pages/profile/BillingCheckoutContent";

import { VerifikasiEmployerContent } from "../pages/superadmin/VerifikasiEmployerContent";
import { EmployerDetailContent } from "../pages/superadmin/EmployerDetailContent";
import { DocumentPreview } from "../pages/superadmin/DocumentPreview";
import { ManajemenPenggunaContent } from "../pages/superadmin/ManajemenPenggunaContent";
import { UserDetailContent } from "../pages/superadmin/UserDetailContent";
import { AnalitikPlatformContent } from "../pages/superadmin/AnalitikPlatformContent";
import { KonfigurasiPajakContent } from "../pages/superadmin/KonfigurasiPajakContent";
import { TambahKonfigurasiPajakContent } from "../pages/superadmin/TambahKonfigurasiPajakContent";
import { EditKonfigurasiPajakContent } from "../pages/superadmin/EditKonfigurasiPajakContent";
import { KonfigurasiLanggananContent } from "../pages/superadmin/KonfigurasiLanggananContent";
import { TambahKonfigurasiLanggananContent } from "../pages/superadmin/TambahKonfigurasiLanggananContent";
import { EditKonfigurasiLanggananContent } from "../pages/superadmin/EditKonfigurasiLanggananContent";
import { TransaksiContent } from "../pages/superadmin/TransaksiContent";
import { TransaksiDetailContent } from "../pages/superadmin/TransaksiDetailContent";

function RouteErrorPage() {
  const error = useRouteError() as { message?: string; statusText?: string } | null;
  return (
    <div className="flex items-center justify-center h-screen bg-[#f9f9f9]">
      <div className="text-center max-w-md px-6">
        <p className="text-[20px] font-bold text-[#383b46] mb-2" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>Terjadi Kesalahan</p>
        <p className="text-[14px] text-[#777980]" style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}>{error?.message ?? error?.statusText ?? "Unknown error"}</p>
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  { path: "/",                       Component: RegisterPage,             ErrorBoundary: RouteErrorPage },
  { path: "/register/verify-email",  Component: EmailVerificationScreen,  ErrorBoundary: RouteErrorPage },
  { path: "/onboarding/company",     Component: OnboardingCompanyScreen,  ErrorBoundary: RouteErrorPage },
  { path: "/onboarding/documents",   Component: OnboardingDocumentsScreen, ErrorBoundary: RouteErrorPage },
  { path: "/onboarding/pending",     Component: OnboardingPendingScreen,  ErrorBoundary: RouteErrorPage },
  { path: "/login",   Component: LoginPage,     ErrorBoundary: RouteErrorPage },
  { path: "/forgot-password",      Component: ForgotPasswordScreen, ErrorBoundary: RouteErrorPage },
  { path: "/forgot-password/sent", Component: ResetLinkSentScreen,  ErrorBoundary: RouteErrorPage },
  { path: "/reset-password",       Component: ResetPasswordScreen,  ErrorBoundary: RouteErrorPage },
  { path: "/dokumen-preview",      Component: DocumentPreview,      ErrorBoundary: RouteErrorPage },
  {
    Component: DashboardLayout,
    ErrorBoundary: RouteErrorPage,
    children: [
      { path: "/dashboard",     Component: DashboardContent },
      { path: "/empty-dashboard", Component: DashboardEmptyState },
      { path: "/lowongan",      Component: LowonganContent },
      { path: "/pipeline/:id",  Component: PipelineDetailContent },
      { path: "/list-kandidat", Component: CariKandidatContent },
      { path: "/analitik",      Component: AnalyticsContent },
      { path: "/faq",           Component: HelpContent },
      { path: "/support",       Component: () => <HelpContent support /> },
      { path: "/post-job",       Component: PostJobContent },
      { path: "/lowongan/:id",   Component: LowonganDetailContent },
      { path: "/edit-job/:id",   Component: PostJobContent },
      { path: "/duplicate-job/:id", Component: PostJobContent },
      {
        Component: ProfileLayout,
        children: [
          { path: "/profile",              Component: ProfileUserContent },
          { path: "/profile/edit",         Component: ProfileEditContent },
          { path: "/profile/change-password", Component: ChangePasswordContent },
          { path: "/profile/notifications", Component: ProfileNotificationsContent },
          { path: "/profile/company",      Component: ProfileCompanyContent },
          { path: "/profile/company/edit", Component: ProfileCompanyEditContent },
          { path: "/profile/team",         Component: ProfileTeamContent },
          { path: "/profile/billing",      Component: ProfileBillingContent },
          { path: "/profile/billing/plans", Component: BillingPlansContent },
          { path: "/profile/billing/checkout/:tierId", Component: BillingCheckoutContent },
        ],
      },
    ],
  },
  {
    Component: SuperadminLayout,
    ErrorBoundary: RouteErrorPage,
    children: [
      { path: "/superadmin",                     Component: () => <Navigate to="/superadmin/verifikasi-employer" replace /> },
      { path: "/superadmin/verifikasi-employer",  Component: VerifikasiEmployerContent },
      { path: "/superadmin/verifikasi-employer/:id", Component: EmployerDetailContent },
      { path: "/superadmin/manajemen-pengguna",   Component: ManajemenPenggunaContent },
      { path: "/superadmin/manajemen-pengguna/:id", Component: UserDetailContent },
      { path: "/superadmin/analitik-platform",    Component: AnalitikPlatformContent },
      { path: "/superadmin/konfigurasi-pajak",    Component: KonfigurasiPajakContent },
      { path: "/superadmin/konfigurasi-pajak/tambah", Component: TambahKonfigurasiPajakContent },
      { path: "/superadmin/konfigurasi-pajak/:id/edit", Component: EditKonfigurasiPajakContent },
      { path: "/superadmin/konfigurasi-langganan", Component: KonfigurasiLanggananContent },
      { path: "/superadmin/konfigurasi-langganan/tambah", Component: TambahKonfigurasiLanggananContent },
      { path: "/superadmin/konfigurasi-langganan/:id/edit", Component: EditKonfigurasiLanggananContent },
      { path: "/superadmin/transaksi",            Component: TransaksiContent },
      { path: "/superadmin/transaksi/:id",        Component: TransaksiDetailContent },
    ],
  },
]);
