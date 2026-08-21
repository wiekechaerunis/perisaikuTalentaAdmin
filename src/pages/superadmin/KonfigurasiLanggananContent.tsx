import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { Search, Pencil } from "lucide-react";
import { SuperadminTopBar } from "../../layouts/SuperadminLayout";
import { PaginationFooter } from "../../components/shared/Pagination";
import { usePagination } from "../../lib/pagination";
import { StatusToastStack, StatusToastItem } from "../../components/shared/StatusToast";
import { DeactivateConfigModal } from "../../components/superadmin/DeactivateConfigModal";
import { ActivateConfigModal } from "../../components/superadmin/ActivateConfigModal";
import { SUBSCRIPTION_TIER_ROWS, SubscriptionTierRow, formatTierHarga } from "../../mocks/subscription";

const TABLE_GRID_COLS = "grid-cols-[180px_140px_1fr_140px_140px_120px_72px]";

function AddTierButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/superadmin/konfigurasi-langganan/tambah")}
      className="h-12 px-6 rounded-full bg-brand-primary text-white text-[16px] font-bold hover:bg-brand-primary-hover transition-colors"
      style={{ fontFamily: "var(--font-heading)" }}
    >
      Tambah Paket
    </button>
  );
}

export function KonfigurasiLanggananContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [rows, setRows] = useState<SubscriptionTierRow[]>(SUBSCRIPTION_TIER_ROWS);
  const [toasts, setToasts] = useState<StatusToastItem[]>([]);
  const [confirmToggle, setConfirmToggle] = useState<SubscriptionTierRow | null>(null);

  const pushToast = (message: string) => {
    const toastId = Date.now();
    setToasts(prev => [...prev, { id: toastId, variant: "success", message }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== toastId)), 4000);
  };

  const toastFromNav = (location.state as { toast?: string } | null)?.toast ?? null;
  useEffect(() => {
    if (!toastFromNav) return;
    const toastId = Date.now();
    setToasts(prev => [...prev, { id: toastId, variant: "success", message: toastFromNav }]);
    window.history.replaceState({}, "");
    const t = setTimeout(() => setToasts(prev => prev.filter(x => x.id !== toastId)), 4000);
    return () => clearTimeout(t);
  }, [toastFromNav]);

  const filtered = rows.filter(row => row.nama.toLowerCase().includes(search.toLowerCase()));
  const { currentPage, setCurrentPage, totalPages, pageItems } = usePagination(filtered, 10);

  const applyToggle = (row: SubscriptionTierRow) => {
    const nextActive = !row.aktif;
    setRows(prev => prev.map(r => (r.id === row.id ? { ...r, aktif: nextActive } : r)));
    pushToast(nextActive ? `Paket ${row.nama} berhasil diaktifkan kembali` : `Paket ${row.nama} berhasil dinonaktifkan`);
    setConfirmToggle(null);
  };

  return (
    <div className="flex-1 min-w-0 h-full overflow-y-auto bg-surface">
      <SuperadminTopBar />

      <div className="flex flex-col gap-8 pb-10">
        <div className="px-10 pt-8 flex items-start justify-between gap-6">
          <div>
            <p className="text-text-default text-[28px] font-bold leading-8" style={{ fontFamily: "var(--font-body)" }}>Konfigurasi Langganan</p>
            <p className="text-text-muted text-sm mt-1" style={{ fontFamily: "var(--font-body)" }}>Atur paket langganan, kuota, dan harga untuk employer.</p>
          </div>
          <AddTierButton />
        </div>

        <div className="px-10">
          <div className="bg-white rounded-xl border border-border-lighter flex flex-col gap-6 p-4">
            <div className="flex items-center justify-between">
              <p className="text-text-default text-base font-bold" style={{ fontFamily: "var(--font-body)" }}>Daftar Paket Langganan</p>
              <div className="bg-white h-10 rounded-xl border border-border-default flex items-center gap-2 px-3 w-[378px]">
                <Search size={14} className="text-icon-default shrink-0" />
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Cari nama paket"
                  className="flex-1 min-w-0 text-xs bg-transparent outline-none text-text-default placeholder-[#777980]"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="flex items-center justify-center py-16">
                <p className="text-text-muted text-sm" style={{ fontFamily: "var(--font-body)" }}>Tidak ada paket yang cocok dengan pencarian.</p>
              </div>
            ) : (
              <div className="border border-border-lighter rounded-xl overflow-hidden">
                <div className={`bg-[#f4f5f7] border-b border-border-lighter grid ${TABLE_GRID_COLS} items-center gap-3 px-4 py-3`}>
                  <span className="text-text-darker text-[12px] font-bold uppercase" style={{ fontFamily: "var(--font-heading)" }}>Nama Paket</span>
                  <span className="text-text-darker text-[12px] font-bold uppercase" style={{ fontFamily: "var(--font-heading)" }}>Harga</span>
                  <span className="text-text-darker text-[12px] font-bold uppercase" style={{ fontFamily: "var(--font-heading)" }}>Akses Fitur</span>
                  <span className="text-text-darker text-[12px] font-bold uppercase" style={{ fontFamily: "var(--font-heading)" }}>Kuota Lowongan</span>
                  <span className="text-text-darker text-[12px] font-bold uppercase" style={{ fontFamily: "var(--font-heading)" }}>Kuota Admin</span>
                  <span className="text-text-darker text-[12px] font-bold uppercase" style={{ fontFamily: "var(--font-heading)" }}>Status</span>
                  <span className="text-text-darker text-[12px] font-bold uppercase text-center" style={{ fontFamily: "var(--font-heading)" }}>Aksi</span>
                </div>

                {pageItems.map((row, i) => (
                  <div
                    key={row.id}
                    className={`grid ${TABLE_GRID_COLS} items-center gap-3 p-4 hover:bg-[#f7faff] transition-colors ${i < pageItems.length - 1 ? "border-b border-border-lighter" : ""}`}
                  >
                    <p className="min-w-0 truncate text-text-darker text-sm font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{row.nama}</p>
                    <div className="flex flex-col gap-px">
                      <p className="text-text-darker text-sm" style={{ fontFamily: "var(--font-body)" }}>{formatTierHarga(row.harga)}</p>
                      {row.harga > 0 && <p className="text-[#777980] text-[10px]" style={{ fontFamily: "var(--font-heading)" }}>/{row.billingCycle === "Bulanan" ? "bulan" : "tahun"}</p>}
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {row.aksesFitur.length === 0 ? (
                        <span className="text-[#777980] text-[12px]" style={{ fontFamily: "var(--font-body)" }}>-</span>
                      ) : (
                        <>
                          {row.aksesFitur.slice(0, 2).map(tag => (
                            <span key={tag} className="bg-surface px-2 py-1 rounded text-[11px] font-medium text-[#64748b] whitespace-nowrap" style={{ fontFamily: "var(--font-heading)" }}>{tag}</span>
                          ))}
                          {row.aksesFitur.length > 2 && (
                            <span className="bg-[#f3f4f6] border border-[#e5e7eb] px-2 py-1 rounded text-[11px] font-semibold text-[#64748b] whitespace-nowrap" style={{ fontFamily: "var(--font-heading)" }}>
                              +{row.aksesFitur.length - 2}
                            </span>
                          )}
                        </>
                      )}
                    </div>
                    <p className="text-text-darker text-sm" style={{ fontFamily: "var(--font-body)" }}>{row.kuotaLowongan}</p>
                    <p className="text-text-darker text-sm" style={{ fontFamily: "var(--font-body)" }}>{row.kuotaAdmin}</p>
                    <button
                      onClick={() => setConfirmToggle(row)}
                      role="switch"
                      aria-checked={row.aktif}
                      className={`relative h-4 w-8 shrink-0 rounded-full transition-colors ${row.aktif ? "bg-brand-primary" : "bg-border-default"}`}
                    >
                      <span className={`absolute left-0.5 top-0.5 size-3 rounded-full bg-white shadow-sm transition-transform ${row.aktif ? "translate-x-4" : "translate-x-0"}`} />
                    </button>
                    <div className="flex items-center justify-center gap-2">
                      <button
                        title="Edit"
                        onClick={() => navigate(`/superadmin/konfigurasi-langganan/${row.id}/edit`)}
                        className="w-7 h-7 rounded-md flex items-center justify-center text-icon-default hover:bg-gray-100 transition-colors"
                      >
                        <Pencil size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <PaginationFooter
              currentPage={currentPage}
              totalPages={totalPages}
              pageSize={10}
              totalItems={filtered.length}
              itemLabel="paket"
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>

      {confirmToggle?.aktif && (
        <DeactivateConfigModal
          nama={confirmToggle.nama}
          onClose={() => setConfirmToggle(null)}
          onConfirm={() => applyToggle(confirmToggle)}
        />
      )}
      {confirmToggle && !confirmToggle.aktif && (
        <ActivateConfigModal
          nama={confirmToggle.nama}
          onClose={() => setConfirmToggle(null)}
          onConfirm={() => applyToggle(confirmToggle)}
        />
      )}

      <StatusToastStack toasts={toasts} onDismiss={id => setToasts(prev => prev.filter(t => t.id !== id))} />
    </div>
  );
}
