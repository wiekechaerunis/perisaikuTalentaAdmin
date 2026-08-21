import { useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router";
import { ShieldCheck, LogOut } from "lucide-react";
import { NotificationBell } from "../components/shared/NotificationBell";
import { FormGuardProvider, useFormGuard } from "../lib/formGuard";
import { useSession } from "../lib/session";
import imgAvatar from "../imports/LowonganPageJobList/c6659080845fc664635625ec6b1f2bd6fc3a8f49.png";

function VerifikasiEmployerIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M3.57146 1.48187C2.41818 1.48187 1.48218 2.41787 1.48218 3.57116V7.01044C1.48203 9.54703 2.28001 12.0194 3.76307 14.0772C5.24613 16.1351 7.33908 17.6742 9.74546 18.4764C9.91062 18.5321 10.0895 18.5321 10.2546 18.4764C12.661 17.6742 14.7539 16.1351 16.237 14.0772C17.7201 12.0194 18.518 9.54703 18.5179 7.01044V3.57116C18.5179 2.41787 17.5832 1.48187 16.4286 1.48187H3.57146ZM3.08932 3.57116C3.08932 3.30502 3.30532 3.08902 3.57146 3.08902H16.4286C16.6948 3.08902 16.9108 3.30502 16.9108 3.57116V7.01044C16.9107 9.16376 16.2473 11.2648 15.0108 13.0277C13.7743 14.7906 12.0247 16.1297 10 16.8629C7.97539 16.1297 6.22578 14.7906 4.98925 13.0277C3.75272 11.2648 3.08933 9.16376 3.08932 7.01044V3.57116ZM14.5785 6.78287C14.7483 6.59158 14.8351 6.34066 14.82 6.08531C14.8048 5.82997 14.6888 5.59111 14.4975 5.4213C14.3062 5.25149 14.0552 5.16462 13.7999 5.17981C13.5446 5.195 13.3057 5.311 13.1359 5.5023L8.58318 10.6246L6.72146 9.2283C6.62016 9.15232 6.50488 9.09704 6.38221 9.06561C6.25954 9.03419 6.13188 9.02723 6.00652 9.04514C5.88116 9.06304 5.76056 9.10547 5.6516 9.16999C5.54263 9.2345 5.44744 9.31985 5.37146 9.42116C5.29548 9.52246 5.2402 9.63774 5.20878 9.76041C5.17735 9.88308 5.17039 10.0107 5.1883 10.1361C5.20621 10.2615 5.24863 10.3821 5.31315 10.491C5.37767 10.6 5.46302 10.6952 5.56432 10.7712L8.13575 12.6997C8.32924 12.8446 8.57009 12.9115 8.81059 12.8872C9.05109 12.863 9.2737 12.7492 9.43432 12.5686L14.5785 6.78287Z" fill="currentColor" />
    </svg>
  );
}

function ManajemenPenggunaIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M14 17H18C18.2652 17 18.5196 16.8946 18.7071 16.7071C18.8946 16.5196 19 16.2652 19 16V15C19 14.2044 18.6839 13.4413 18.1213 12.8787C17.5587 12.3161 16.7956 12 16 12H14M11.764 8C12.1691 8.45286 12.7021 8.77206 13.2925 8.91536C13.8829 9.05866 14.503 9.01931 15.0705 8.80252C15.6381 8.58572 16.1265 8.2017 16.471 7.70126C16.8156 7.20083 17.0001 6.60758 17.0001 6C17.0001 5.39243 16.8156 4.79917 16.471 4.29874C16.1265 3.7983 15.6381 3.41428 15.0705 3.19748C14.503 2.98069 13.8829 2.94134 13.2925 3.08464C12.7021 3.22794 12.1691 3.54714 11.764 4M1 16V15C1 14.2044 1.31607 13.4413 1.87868 12.8787C2.44129 12.3161 3.20435 12 4 12H8C8.79565 12 9.55871 12.3161 10.1213 12.8787C10.6839 13.4413 11 14.2044 11 15V16C11 16.2652 10.8946 16.5196 10.7071 16.7071C10.5196 16.8946 10.2652 17 10 17H2C1.73478 17 1.48043 16.8946 1.29289 16.7071C1.10536 16.5196 1 16.2652 1 16ZM9 6C9 6.79565 8.68393 7.55871 8.12132 8.12132C7.55871 8.68393 6.79565 9 6 9C5.20435 9 4.44129 8.68393 3.87868 8.12132C3.31607 7.55871 3 6.79565 3 6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3C6.79565 3 7.55871 3.31607 8.12132 3.87868C8.68393 4.44129 9 5.20435 9 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function AnalitikPlatformIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M2.08282 6.08252C2.08282 3.72585 2.08282 2.54669 2.81532 1.81502C3.54699 1.08252 4.72616 1.08252 7.08282 1.08252H12.9162C15.2728 1.08252 16.452 1.08252 17.1837 1.81502C17.9162 2.54669 17.9162 3.72585 17.9162 6.08252V8.58252C17.9162 10.9392 17.9162 12.1184 17.1837 12.85C16.452 13.5825 15.2728 13.5825 12.9162 13.5825H7.08282C4.72616 13.5825 3.54699 13.5825 2.81532 12.85C2.08282 12.1184 2.08282 10.9392 2.08282 8.58252V6.08252Z" stroke="currentColor" strokeWidth="2" />
      <path d="M6.66616 7.51998L7.24699 6.75748C7.97866 5.79665 9.27366 5.87248 9.92116 6.91581C10.5462 7.92415 11.7853 8.03581 12.5328 7.15165L13.3328 6.20748M5.83282 17.7491L9.99949 15.2491L14.1662 17.7491" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.99948 13.999V17.749" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function KonfigurasiPajakIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" className={className}>
      <path d="M16 0H2C0.89 0 0 0.89 0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H16C17.11 18 18 17.11 18 16V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0ZM16 16H2V2H16V16ZM14 12.22C14 13.2 13.2 14 12.22 14C11.24 14 10.45 13.2 10.45 12.22C10.45 11.24 11.24 10.45 12.22 10.45C13.2 10.45 14 11.24 14 12.22ZM5.5 14.03L4 12.53L12.53 4L14.03 5.5L5.5 14.03ZM4.05 5.83C4.05 4.84 4.84 4.05 5.83 4.05C6.81 4.05 7.6 4.84 7.6 5.83C7.6 6.81 6.81 7.6 5.83 7.6C4.84 7.6 4.05 6.81 4.05 5.83Z" fill="currentColor" />
    </svg>
  );
}

function KonfigurasiLanggananIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M2.5 5.83333C2.5 4.54467 3.54467 3.5 4.83333 3.5H15.1667C16.4553 3.5 17.5 4.54467 17.5 5.83333V14.1667C17.5 15.4553 16.4553 16.5 15.1667 16.5H4.83333C3.54467 16.5 2.5 15.4553 2.5 14.1667V5.83333Z" stroke="currentColor" strokeWidth="2" />
      <path d="M2.5 8.16667H17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M5.83334 12H8.33334" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function TransaksiIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M3.33333 5.83333C3.33333 4.54467 4.378 3.5 5.66667 3.5H14.3333C15.622 3.5 16.6667 4.54467 16.6667 5.83333V16.5L14.1667 15L11.6667 16.5L10 15L8.33333 16.5L5.83333 15L3.33333 16.5V5.83333Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M6.66667 8.16667H13.3333M6.66667 11H11.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const SUPERADMIN_NAV = [
  { path: "/superadmin/verifikasi-employer",   label: "Verifikasi Employer",   icon: VerifikasiEmployerIcon },
  { path: "/superadmin/manajemen-pengguna",    label: "Manjemen Pengguna",     icon: ManajemenPenggunaIcon },
  { path: "/superadmin/analitik-platform",     label: "Analitik Platform",     icon: AnalitikPlatformIcon },
  { path: "/superadmin/konfigurasi-pajak",     label: "Konfigurasi Pajak",     icon: KonfigurasiPajakIcon },
  { path: "/superadmin/konfigurasi-langganan", label: "Konfigurasi Langganan", icon: KonfigurasiLanggananIcon },
  { path: "/superadmin/transaksi",             label: "Transaksi",             icon: TransaksiIcon },
];

function SuperadminSidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { guardAction } = useFormGuard();

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
              onClick={() => guardAction(() => navigate(item.path))}
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
  const navigate = useNavigate();
  const { session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border-b border-border-lighter px-10 py-5 flex items-center justify-end shrink-0 relative">
      <NotificationBell />
      <div className="relative">
        <button onClick={() => setOpen(v => !v)} className="flex items-center gap-3">
          <div className="text-right whitespace-nowrap">
            <p className="text-sm font-semibold text-black" style={{ fontFamily: "var(--font-body)" }}>{session.userName}</p>
            <p className="text-[11px] text-text-muted" style={{ fontFamily: "var(--font-body)" }}>Super Admin</p>
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
                <p className="text-[10px] text-[#9b9ca1]" style={{ fontFamily: "var(--font-body)" }}>Super Admin</p>
              </div>
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
    </div>
  );
}

export function SuperadminLayout() {
  return (
    <FormGuardProvider>
      <div className="flex w-full h-screen overflow-hidden">
        <SuperadminSidebar />
        <Outlet />
      </div>
    </FormGuardProvider>
  );
}
