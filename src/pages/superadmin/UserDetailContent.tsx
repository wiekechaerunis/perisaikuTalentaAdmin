import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { ArrowLeft, ChevronRight, Ban } from "lucide-react";
import { SuperadminTopBar } from "../../layouts/SuperadminLayout";
import { ResetPasswordIcon } from "../../components/superadmin/UserActionIcons";
import { SuspendUserModal } from "../../components/superadmin/SuspendUserModal";
import { ActivateUserModal } from "../../components/superadmin/ActivateUserModal";
import { BanUserModal } from "../../components/superadmin/BanUserModal";
import { CabutBanModal } from "../../components/superadmin/CabutBanModal";
import { ResetPasswordModal } from "../../components/superadmin/ResetPasswordModal";
import { ResetPasswordSuccessModal } from "../../components/superadmin/ResetPasswordSuccessModal";
import { ResetPasswordFailedModal } from "../../components/superadmin/ResetPasswordFailedModal";
import { StatusToastStack, StatusToastItem } from "../../components/shared/StatusToast";
import {
  PLATFORM_USER_ROWS, PlatformUserRow, PlatformUserStatus, ActivityLogEntry, ACTIVITY_LOG_DOT_COLOR,
  applyUserStatusChange, appendUserActivityLog, simulateSendResetPasswordEmail,
} from "../../mocks/manajemen-pengguna";
import imgAvatar from "../../imports/LowonganPageJobList/c6659080845fc664635625ec6b1f2bd6fc3a8f49.png";

const STATUS_PILL_STYLE: Record<PlatformUserStatus, { label: string; bg: string; border: string; text: string }> = {
  aktif:   { label: "AKTIF",   bg: "bg-[#eaf7ee]", border: "border-[#d1e9d8]", text: "text-[#3e9248]" },
  suspend: { label: "SUSPEND", bg: "bg-[#fff7cd]", border: "border-[#f3e6a8]", text: "text-[#d19400]" },
  ban:     { label: "BAN",     bg: "bg-white",     border: "border-[#f83a1e]", text: "text-[#f83a1e]" },
};

export function UserDetailContent() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const initial = PLATFORM_USER_ROWS.find(r => r.id === id) ?? null;
  const [user, setUser] = useState<PlatformUserRow | null>(initial);
  const [tab, setTab] = useState<"detail" | "activity">("detail");
  const [toasts, setToasts] = useState<StatusToastItem[]>([]);
  const [confirmAction, setConfirmAction] = useState<"suspend" | "activate" | "ban" | "cabutban" | null>(null);
  const [resetPasswordStep, setResetPasswordStep] = useState<"confirm" | "success" | "failed" | null>(null);

  const pushToast = (message: string) => {
    const toastId = Date.now();
    setToasts(prev => [...prev, { id: toastId, variant: "success", message }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== toastId)), 4000);
  };

  if (!user) {
    return (
      <div className="flex-1 min-w-0 h-full overflow-y-auto bg-surface">
        <SuperadminTopBar />
        <div className="flex flex-col items-center justify-center gap-3 py-24">
          <p className="text-text-default text-base font-bold" style={{ fontFamily: "var(--font-body)" }}>Pengguna tidak ditemukan</p>
          <button onClick={() => navigate("/superadmin/manajemen-pengguna")} className="text-sm font-semibold text-brand-primary hover:underline" style={{ fontFamily: "var(--font-body)" }}>
            Kembali ke Daftar Pengguna
          </button>
        </div>
      </div>
    );
  }

  const pillStyle = STATUS_PILL_STYLE[user.status];
  const changeStatus = (status: PlatformUserStatus, logEntry?: Omit<ActivityLogEntry, "date">) => {
    applyUserStatusChange(user.id, status, logEntry);
    setUser(PLATFORM_USER_ROWS.find(r => r.id === user.id) ?? null);
  };
  const sendResetPassword = async () => {
    const success = await simulateSendResetPasswordEmail();
    if (success) {
      appendUserActivityLog(user.id, { action: "Reset Password", color: "blue", actor: "Budi Santoso" });
      setUser(PLATFORM_USER_ROWS.find(r => r.id === user.id) ?? null);
      setResetPasswordStep("success");
    } else {
      setResetPasswordStep("failed");
    }
  };

  return (
    <div className="flex-1 min-w-0 h-full overflow-y-auto bg-surface pb-10">
      <SuperadminTopBar />

      <div className="flex flex-col gap-6 px-10 pt-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2.5">
              <button onClick={() => navigate(-1)} className="text-text-default hover:text-brand-primary transition-colors" aria-label="Kembali">
                <ArrowLeft size={28} />
              </button>
              <p className="text-text-default text-[28px] font-bold leading-8" style={{ fontFamily: "var(--font-body)" }}>Detail Pengguna</p>
            </div>
            <div className="flex items-center gap-2.5 pl-[38px]">
              <button onClick={() => navigate("/superadmin/manajemen-pengguna")} className="text-[#ff6b35] text-sm font-semibold hover:underline" style={{ fontFamily: "var(--font-body)" }}>
                Daftar Pengguna
              </button>
              <ChevronRight size={14} className="text-text-muted" />
              <span className="text-text-muted text-sm" style={{ fontFamily: "var(--font-body)" }}>Detail Pengguna</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {user.status !== "ban" && (
              <button
                onClick={() => setConfirmAction("ban")}
                title="Ban"
                className="size-10 rounded-lg border-[1.25px] border-[#f83a1e] bg-white flex items-center justify-center text-[#f83a1e] hover:bg-red-50 transition-colors"
              >
                <Ban size={16} />
              </button>
            )}
            <button
              onClick={() => setResetPasswordStep("confirm")}
              title="Reset Password"
              className="size-10 rounded-lg border-[1.25px] border-border-default bg-white flex items-center justify-center text-text-darker hover:bg-gray-50 transition-colors"
            >
              <ResetPasswordIcon size={16} />
            </button>
            <div className="w-px h-9 bg-border-lighter" />
            {user.status === "aktif" && (
              <button
                onClick={() => setConfirmAction("suspend")}
                className="h-10 px-5 rounded-full border-[1.5px] border-brand-primary text-brand-primary text-sm font-bold hover:bg-[#ebf2ff] transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Suspend Akun
              </button>
            )}
            {user.status === "suspend" && (
              <button
                onClick={() => setConfirmAction("activate")}
                className="h-10 px-5 rounded-full border-[1.5px] border-brand-primary text-brand-primary text-sm font-bold hover:bg-[#ebf2ff] transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Aktifkan Akun
              </button>
            )}
            {user.status === "ban" && (
              <button
                onClick={() => setConfirmAction("cabutban")}
                className="h-10 px-5 rounded-full border-[1.5px] border-brand-primary text-brand-primary text-sm font-bold hover:bg-[#ebf2ff] transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Cabut Ban
              </button>
            )}
          </div>
        </div>

        {/* Profile header card */}
        <div className="bg-white rounded-2xl border border-border-lighter shadow-[0px_1px_1.5px_rgba(0,0,0,0.04)] p-6 flex items-center gap-6">
          <img src={imgAvatar} alt="" className="size-20 rounded-full object-cover shrink-0" />
          <div className="flex-1 min-w-0 flex flex-col gap-1.5">
            <div className="flex items-center gap-2.5">
              <p className="text-text-darker text-[21px] font-bold whitespace-nowrap" style={{ fontFamily: "var(--font-body)" }}>{user.nama}</p>
              <span className={`px-2.5 py-1 rounded-full border text-[14px] font-semibold whitespace-nowrap ${pillStyle.bg} ${pillStyle.border} ${pillStyle.text}`} style={{ fontFamily: "var(--font-body)" }}>
                {pillStyle.label}
              </span>
            </div>
            <p className="text-[#606268] text-sm" style={{ fontFamily: "var(--font-heading)" }}>{user.perusahaan}</p>
          </div>
        </div>

        {/* Account information card */}
        <div className="bg-white rounded-[20px] border border-border-lighter shadow-[0px_2px_2px_rgba(0,0,0,0.06)] p-10 flex flex-col gap-7">
          <div className="flex gap-8 items-end w-full">
            <button onClick={() => setTab("detail")} className="flex flex-col gap-2 items-center">
              <span className={`text-[14px] whitespace-nowrap ${tab === "detail" ? "font-bold text-[#0052ff]" : "font-semibold text-[#94a3b8]"}`} style={{ fontFamily: "var(--font-heading)" }}>Detail Pengguna</span>
              <span className={`h-[3px] rounded-full w-[120px] ${tab === "detail" ? "bg-[#0052ff]" : "bg-[#e2e8f0]"}`} />
            </button>
            <button onClick={() => setTab("activity")} className="flex flex-col gap-2 items-center">
              <span className={`text-[14px] whitespace-nowrap ${tab === "activity" ? "font-bold text-[#0052ff]" : "font-semibold text-[#94a3b8]"}`} style={{ fontFamily: "var(--font-heading)" }}>Activity Log</span>
              <span className={`h-[3px] rounded-full w-24 ${tab === "activity" ? "bg-[#0052ff]" : "bg-[#e2e8f0]"}`} />
            </button>
          </div>

          {tab === "detail" ? (
            <div className="flex flex-col gap-7 w-full">
              <p className="text-text-darker text-[21px] font-bold" style={{ fontFamily: "var(--font-body)" }}>Informasi Akun</p>
              {[
                { label: "Nama Lengkap", value: user.nama },
                { label: "Tanggal Daftar", value: user.tanggalDaftar },
                { label: "Email", value: user.email },
                { label: "Nomor Telepon", value: user.telepon },
                { label: "Role", value: user.role },
              ].map(field => (
                <div key={field.label} className="flex flex-col gap-1 w-full">
                  <p className="text-[#6b7280] text-[12px] font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{field.label}</p>
                  <p className="text-text-darker text-sm py-1" style={{ fontFamily: "var(--font-heading)" }}>{field.value}</p>
                </div>
              ))}
              {user.status === "suspend" && (
                <div className="flex flex-col gap-1 w-full border-t border-border-default pt-6">
                  <p className="text-[#6b7280] text-[12px] font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Alasan Suspend</p>
                  <p className="text-text-darker text-sm py-1" style={{ fontFamily: "var(--font-heading)" }}>
                    {user.activityLog.find(e => e.action === "Suspend Akun")?.reason || "-"}
                  </p>
                </div>
              )}
              {user.status === "ban" && (
                <div className="flex flex-col gap-1 w-full border-t border-border-default pt-6">
                  <p className="text-[#6b7280] text-[12px] font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Alasan Banned</p>
                  <p className="text-text-darker text-sm py-1" style={{ fontFamily: "var(--font-heading)" }}>
                    {user.activityLog.find(e => e.action === "Ban Akun")?.reason || "-"}
                  </p>
                </div>
              )}
            </div>
          ) : user.activityLog.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-2 py-16">
              <p className="text-sm text-[#9b9ca1]" style={{ fontFamily: "var(--font-body)" }}>Belum ada aktivitas untuk pengguna ini.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-7 w-full">
              <p className="text-text-darker text-[21px] font-bold" style={{ fontFamily: "var(--font-body)" }}>Riwayat Aktivitas</p>
              <div className="flex flex-col">
                {user.activityLog.map((entry, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className={`size-2.5 rounded-full mt-1.5 shrink-0 ${ACTIVITY_LOG_DOT_COLOR[entry.color]}`} />
                      {i < user.activityLog.length - 1 && <span className="w-0.5 flex-1 bg-[#e6e6e7] my-1" />}
                    </div>
                    <div className={`flex-1 min-w-0 flex items-start justify-between gap-4 ${i < user.activityLog.length - 1 ? "pb-6" : ""}`}>
                      <div className="flex flex-col gap-1 min-w-0">
                        <p className="text-text-darker text-[13px] font-bold" style={{ fontFamily: "var(--font-body)" }}>{entry.action}</p>
                        <p className="text-[#777980] text-[12px]" style={{ fontFamily: "var(--font-body)" }}>Dilakukan oleh {entry.actor}</p>
                        {entry.reason && (
                          <p className="text-[#777980] text-[12px]" style={{ fontFamily: "var(--font-body)" }}>Alasan: {entry.reason}</p>
                        )}
                      </div>
                      <p className="text-[#9b9ca1] text-[12px] whitespace-nowrap shrink-0" style={{ fontFamily: "var(--font-body)" }}>{entry.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {confirmAction === "suspend" && (
        <SuspendUserModal
          nama={user.nama}
          onClose={() => setConfirmAction(null)}
          onConfirm={(reason) => {
            changeStatus("suspend", { action: "Suspend Akun", color: "yellow", actor: "Budi Santoso", reason: reason || undefined });
            pushToast("Akun berhasil disuspend");
            setConfirmAction(null);
          }}
        />
      )}
      {confirmAction === "activate" && (
        <ActivateUserModal
          nama={user.nama}
          onClose={() => setConfirmAction(null)}
          onConfirm={() => {
            changeStatus("aktif", { action: "Aktifkan Akun", color: "green", actor: "Budi Santoso" });
            pushToast("Akun berhasil diaktifkan kembali");
            setConfirmAction(null);
          }}
        />
      )}
      {confirmAction === "ban" && (
        <BanUserModal
          nama={user.nama}
          onClose={() => setConfirmAction(null)}
          onConfirm={(reason) => {
            changeStatus("ban", { action: "Ban Akun", color: "red", actor: "Budi Santoso", reason: reason || undefined });
            pushToast("Akun berhasil diban");
            setConfirmAction(null);
          }}
        />
      )}
      {confirmAction === "cabutban" && (
        <CabutBanModal
          nama={user.nama}
          onClose={() => setConfirmAction(null)}
          onConfirm={(reason) => {
            changeStatus("aktif", { action: "Cabut Ban", color: "green", actor: "Budi Santoso", reason: reason || undefined });
            pushToast("Akun berhasil diaktifkan kembali");
            setConfirmAction(null);
          }}
        />
      )}

      {resetPasswordStep === "confirm" && (
        <ResetPasswordModal
          nama={user.nama}
          email={user.email}
          onClose={() => setResetPasswordStep(null)}
          onConfirm={sendResetPassword}
        />
      )}
      {resetPasswordStep === "success" && (
        <ResetPasswordSuccessModal onClose={() => setResetPasswordStep(null)} />
      )}
      {resetPasswordStep === "failed" && (
        <ResetPasswordFailedModal onClose={() => setResetPasswordStep(null)} onRetry={sendResetPassword} />
      )}

      <StatusToastStack toasts={toasts} onDismiss={toastId => setToasts(prev => prev.filter(t => t.id !== toastId))} />
    </div>
  );
}
