import { useState } from "react";
import { Search, ListFilter, X } from "lucide-react";
import { SuperadminTopBar } from "../../layouts/SuperadminLayout";
import { PaginationFooter } from "../../components/shared/Pagination";
import { usePagination } from "../../lib/pagination";
import { UserFilterPanel } from "../../components/superadmin/UserFilterPanel";
import { UserRowActions } from "../../components/superadmin/UserRowActions";
import { SuspendUserModal } from "../../components/superadmin/SuspendUserModal";
import { ActivateUserModal } from "../../components/superadmin/ActivateUserModal";
import { BanUserModal } from "../../components/superadmin/BanUserModal";
import { CabutBanModal } from "../../components/superadmin/CabutBanModal";
import { ResetPasswordModal } from "../../components/superadmin/ResetPasswordModal";
import { ResetPasswordSuccessModal } from "../../components/superadmin/ResetPasswordSuccessModal";
import { ResetPasswordFailedModal } from "../../components/superadmin/ResetPasswordFailedModal";
import { StatusToastStack, StatusToastItem } from "../../components/shared/StatusToast";
import { EmptyState } from "../../components/shared/EmptyState";
import {
  PlatformUserRow, PLATFORM_USER_ROWS, USER_STATUS_STYLE, USER_TIPE_STYLE,
  UserFilterValues, EMPTY_USER_FILTERS, ActivityLogEntry, applyUserStatusChange,
  appendUserActivityLog, simulateSendResetPasswordEmail,
} from "../../mocks/manajemen-pengguna";
import imgAvatar from "../../imports/LowonganPageJobList/c6659080845fc664635625ec6b1f2bd6fc3a8f49.png";
import imgEmptyManajemenPengguna from "../../assets/superadmin/empty-manajemen-pengguna.png";

const USER_TABLE_COLUMNS = ["Info User", "Email", "Tipe User", "Tanggal Daftar", "Status", "Aksi"];
const USER_TABLE_GRID_COLS = "grid-cols-[2.2fr_2.5fr_1.4fr_2fr_0.85fr_90px]";

export function ManajemenPenggunaContent() {
  const [search, setSearch] = useState("");
  const [rows, setRows] = useState<PlatformUserRow[]>(PLATFORM_USER_ROWS);
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<UserFilterValues>(EMPTY_USER_FILTERS);
  const [toasts, setToasts] = useState<StatusToastItem[]>([]);
  const [confirmAction, setConfirmAction] = useState<{ type: "suspend" | "activate" | "ban" | "cabutban"; row: PlatformUserRow } | null>(null);
  const [resetPasswordFlow, setResetPasswordFlow] = useState<{ step: "confirm" | "success" | "failed"; row: PlatformUserRow } | null>(null);

  const sendResetPassword = async (row: PlatformUserRow) => {
    const success = await simulateSendResetPasswordEmail();
    if (success) {
      appendUserActivityLog(row.id, { action: "Reset Password", color: "blue", actor: "Budi Santoso" });
      setResetPasswordFlow({ step: "success", row });
    } else {
      setResetPasswordFlow({ step: "failed", row });
    }
  };

  const pushToast = (message: string) => {
    const toastId = Date.now();
    setToasts(prev => [...prev, { id: toastId, variant: "success", message }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== toastId)), 4000);
  };

  const setRowStatus = (id: string, status: PlatformUserRow["status"], logEntry?: Omit<ActivityLogEntry, "date">) => {
    applyUserStatusChange(id, status, logEntry);
    setRows(prev => prev.map(r => (r.id === id ? { ...r, status } : r)));
  };

  const filtered = rows.filter(row =>
    row.nama.toLowerCase().includes(search.toLowerCase())
    && (!activeFilters.status || row.status === activeFilters.status)
    && (!activeFilters.tipe || row.tipe === activeFilters.tipe)
    && (!activeFilters.perusahaan || row.perusahaan === activeFilters.perusahaan)
  );

  const activeChips: { fieldKey: keyof UserFilterValues; label: string; value: string }[] = [
    ...(activeFilters.status ? [{ fieldKey: "status" as const, label: "Status", value: USER_STATUS_STYLE[activeFilters.status].label }] : []),
    ...(activeFilters.tipe ? [{ fieldKey: "tipe" as const, label: "Tipe User", value: activeFilters.tipe }] : []),
    ...(activeFilters.perusahaan ? [{ fieldKey: "perusahaan" as const, label: "Perusahaan", value: activeFilters.perusahaan }] : []),
    ...(activeFilters.startDate && activeFilters.endDate ? [{ fieldKey: "startDate" as const, label: "Tanggal Daftar", value: `${activeFilters.startDate} - ${activeFilters.endDate}` }] : []),
  ];
  const removeChip = (fieldKey: keyof UserFilterValues) =>
    setActiveFilters(prev => (fieldKey === "startDate" ? { ...prev, startDate: "", endDate: "" } : { ...prev, [fieldKey]: "" }));
  const hasFilters = activeChips.length > 0;

  const { currentPage, setCurrentPage, totalPages, pageItems } = usePagination(filtered, 10);

  const groups = pageItems.reduce<{ perusahaan: string; rows: PlatformUserRow[] }[]>((acc, row) => {
    const group = acc.find(g => g.perusahaan === row.perusahaan);
    if (group) group.rows.push(row);
    else acc.push({ perusahaan: row.perusahaan, rows: [row] });
    return acc;
  }, []);

  return (
    <div className="flex-1 min-w-0 h-full overflow-y-auto bg-surface">
      <SuperadminTopBar />

      <div className="flex flex-col gap-8 pb-10">
        {/* Page title */}
        <div className="px-10 pt-8">
          <p className="text-text-default text-[28px] font-bold leading-8" style={{ fontFamily: "var(--font-body)" }}>Manajemen Pengguna</p>
          <p className="text-text-muted text-sm mt-1" style={{ fontFamily: "var(--font-body)" }}>Kelola seluruh akun platform employer, pencari kerja, dan admin internal</p>
        </div>

        {/* Table card */}
        <div className="px-10">
          <div className="bg-white rounded-xl border border-border-lighter flex flex-col gap-6 p-4">
            {/* Table toolbar */}
            <div className="flex items-center justify-between">
              <p className="text-text-default text-base font-bold" style={{ fontFamily: "var(--font-body)" }}>Daftar Pengguna</p>
              <div className="flex gap-5 items-center">
                <div className="bg-white h-10 rounded-xl border border-border-default flex items-center gap-2 px-3 w-[378px]">
                  <Search size={14} className="text-icon-default shrink-0" />
                  <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Cari nama pengguna"
                    className="flex-1 min-w-0 text-xs bg-transparent outline-none text-text-default placeholder-[#777980]"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>
                <div className="relative">
                  <button
                    onClick={() => setFilterOpen(v => !v)}
                    className={`bg-white h-10 flex items-center gap-2 px-3 rounded-full border-[1.5px] text-sm font-bold transition-colors ${filterOpen ? "border-brand-primary text-brand-primary" : "border-border-default text-text-darker"}`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Filter
                    <ListFilter size={14} className={filterOpen ? "text-brand-primary" : "text-icon-default"} />
                  </button>
                  {filterOpen && (
                    <UserFilterPanel
                      onClose={() => setFilterOpen(false)}
                      onApply={setActiveFilters}
                      initial={activeFilters}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Filter aktif bar */}
            {hasFilters && (
              <div className="flex items-center gap-2 flex-wrap -mt-3">
                <span className="text-[12px] text-text-darker font-medium shrink-0" style={{ fontFamily: "var(--font-body)" }}>
                  Filter Aktif :
                </span>
                {activeChips.map((chip) => (
                  <div key={chip.fieldKey} className="bg-white h-6 flex items-center gap-2 pl-3 pr-1 rounded-full border border-border-default">
                    <span className="text-[10px] text-[#333] leading-4" style={{ fontFamily: "var(--font-body)" }}>
                      {chip.label}: {chip.value}
                    </span>
                    <button onClick={() => removeChip(chip.fieldKey)} className="size-[14px] flex items-center justify-center rounded-full hover:bg-gray-100 shrink-0">
                      <X size={9} className="text-icon-default" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => setActiveFilters(EMPTY_USER_FILTERS)}
                  className="text-[10px] font-bold text-[#c93f2a] hover:text-[#a83222] transition-colors shrink-0"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Hapus Semua
                </button>
              </div>
            )}

            {/* Inner table card */}
            {filtered.length === 0 ? (
              <EmptyState
                image={imgEmptyManajemenPengguna}
                title="Belum Ada Pengguna"
                description="Pengguna dari perusahaan yang telah terverifikasi akan muncul dan dapat dikelola di sini."
              />
            ) : (
              <div className="border border-border-lighter rounded-xl overflow-hidden">
                {/* Header */}
                <div className={`bg-surface border-b border-border-lighter grid ${USER_TABLE_GRID_COLS} items-center gap-3 px-4 py-3`}>
                  {USER_TABLE_COLUMNS.map((col, i) => (
                    <span key={col} className={`text-text-darker text-[12px] font-bold uppercase ${i === USER_TABLE_COLUMNS.length - 1 ? "text-center" : ""}`} style={{ fontFamily: "var(--font-heading)" }}>{col}</span>
                  ))}
                </div>

                {groups.map((group, gi) => (
                  <div key={group.perusahaan} className={gi < groups.length - 1 ? "border-b border-border-lighter" : ""}>
                    <div className="bg-[#eef1f5] border-b border-border-lighter px-4 py-2">
                      <p className="text-text-darker text-[12px] font-bold uppercase" style={{ fontFamily: "var(--font-heading)" }}>{group.perusahaan}</p>
                    </div>
                    {group.rows.map((row, ri) => {
                      const statusStyle = USER_STATUS_STYLE[row.status];
                      const tipeStyle = USER_TIPE_STYLE[row.tipe];
                      return (
                        <div key={row.id} className={`grid ${USER_TABLE_GRID_COLS} items-center gap-3 p-4 hover:bg-[#f7faff] transition-colors ${ri < group.rows.length - 1 ? "border-b border-border-lighter" : ""}`}>
                          <div className="flex items-center gap-3 min-w-0">
                            <img src={imgAvatar} alt="" className="size-8 rounded-full object-cover shrink-0" />
                            <p className="min-w-0 truncate text-text-darker text-sm font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{row.nama}</p>
                          </div>
                          <p className="min-w-0 truncate text-text-darker text-sm" style={{ fontFamily: "var(--font-body)" }}>{row.email}</p>
                          <div>
                            <span className={`inline-flex px-2 py-1 rounded-md text-[11px] font-semibold uppercase whitespace-nowrap ${tipeStyle.bg} ${tipeStyle.text}`} style={{ fontFamily: "var(--font-heading)" }}>
                              {row.tipe}
                            </span>
                          </div>
                          <p className="min-w-0 truncate text-text-darker text-sm" style={{ fontFamily: "var(--font-body)" }}>{row.tanggalDaftar}</p>
                          <span className={`text-[11px] font-semibold uppercase whitespace-nowrap ${statusStyle.text}`} style={{ fontFamily: "var(--font-heading)" }}>
                            {statusStyle.label}
                          </span>
                          <UserRowActions
                            id={row.id}
                            status={row.status}
                            onSuspend={() => setConfirmAction({ type: "suspend", row })}
                            onActivate={() => setConfirmAction({ type: "activate", row })}
                            onBan={() => setConfirmAction({ type: "ban", row })}
                            onUnban={() => setConfirmAction({ type: "cabutban", row })}
                            onResetPassword={() => setResetPasswordFlow({ step: "confirm", row })}
                          />
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            <PaginationFooter
              currentPage={currentPage}
              totalPages={totalPages}
              pageSize={10}
              totalItems={filtered.length}
              itemLabel="pengguna"
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>

      {confirmAction?.type === "suspend" && (
        <SuspendUserModal
          nama={confirmAction.row.nama}
          onClose={() => setConfirmAction(null)}
          onConfirm={(reason) => {
            setRowStatus(confirmAction.row.id, "suspend", { action: "Suspend Akun", color: "yellow", actor: "Budi Santoso", reason: reason || undefined });
            pushToast("Akun berhasil disuspend");
            setConfirmAction(null);
          }}
        />
      )}
      {confirmAction?.type === "activate" && (
        <ActivateUserModal
          nama={confirmAction.row.nama}
          onClose={() => setConfirmAction(null)}
          onConfirm={() => {
            setRowStatus(confirmAction.row.id, "aktif", { action: "Aktifkan Akun", color: "green", actor: "Budi Santoso" });
            pushToast("Akun berhasil diaktifkan kembali");
            setConfirmAction(null);
          }}
        />
      )}
      {confirmAction?.type === "ban" && (
        <BanUserModal
          nama={confirmAction.row.nama}
          onClose={() => setConfirmAction(null)}
          onConfirm={(reason) => {
            setRowStatus(confirmAction.row.id, "ban", { action: "Ban Akun", color: "red", actor: "Budi Santoso", reason: reason || undefined });
            pushToast("Akun berhasil diban");
            setConfirmAction(null);
          }}
        />
      )}
      {confirmAction?.type === "cabutban" && (
        <CabutBanModal
          nama={confirmAction.row.nama}
          onClose={() => setConfirmAction(null)}
          onConfirm={(reason) => {
            setRowStatus(confirmAction.row.id, "aktif", { action: "Cabut Ban", color: "green", actor: "Budi Santoso", reason: reason || undefined });
            pushToast("Akun berhasil diaktifkan kembali");
            setConfirmAction(null);
          }}
        />
      )}

      {resetPasswordFlow?.step === "confirm" && (
        <ResetPasswordModal
          nama={resetPasswordFlow.row.nama}
          email={resetPasswordFlow.row.email}
          onClose={() => setResetPasswordFlow(null)}
          onConfirm={() => sendResetPassword(resetPasswordFlow.row)}
        />
      )}
      {resetPasswordFlow?.step === "success" && (
        <ResetPasswordSuccessModal onClose={() => setResetPasswordFlow(null)} />
      )}
      {resetPasswordFlow?.step === "failed" && (
        <ResetPasswordFailedModal
          onClose={() => setResetPasswordFlow(null)}
          onRetry={() => sendResetPassword(resetPasswordFlow.row)}
        />
      )}

      <StatusToastStack toasts={toasts} onDismiss={id => setToasts(prev => prev.filter(t => t.id !== id))} />
    </div>
  );
}
