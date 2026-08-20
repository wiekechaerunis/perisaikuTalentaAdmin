import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { Search, ListFilter, ChevronLeft, ChevronRight, Eye, Pencil, Calculator } from "lucide-react";
import { SuperadminTopBar } from "../../layouts/SuperadminLayout";
import { EmptyState } from "../../components/shared/EmptyState";
import { StatusToastStack, StatusToastItem } from "../../components/shared/StatusToast";
import { DeactivateConfigModal } from "../../components/superadmin/DeactivateConfigModal";
import { ActivateConfigModal } from "../../components/superadmin/ActivateConfigModal";
import { QuickSimulatorModal } from "../../components/superadmin/QuickSimulatorModal";
import { TAX_CONFIG_ROWS, TaxConfigRow } from "../../mocks/konfigurasi-pajak";
import imgEmptyKonfigurasiPajak from "../../assets/superadmin/empty-konfigurasi-pajak.png";

const TABLE_GRID_COLS = "grid-cols-[221px_1fr_140px_199px_1fr_85px_72px]";

function AddConfigButton({ variant = "filled" }: { variant?: "filled" | "outline" }) {
  const navigate = useNavigate();
  const filled = variant === "filled";
  return (
    <button
      onClick={() => navigate("/superadmin/konfigurasi-pajak/tambah")}
      className={`h-12 px-6 rounded-full text-[16px] font-bold transition-colors ${
        filled
          ? "bg-brand-primary text-white hover:bg-brand-primary-hover"
          : "bg-white border-[1.5px] border-brand-primary text-brand-primary hover:bg-[#ebf2ff]"
      }`}
      style={{ fontFamily: "var(--font-heading)" }}
    >
      Tambah Konfigurasi
    </button>
  );
}

function QuickSimulatorFab({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className={`fixed z-40 bottom-10 right-8 bg-brand-primary text-white shadow-[0px_4px_6px_rgba(0,0,0,0.15)] rounded-[28px] flex items-center justify-center overflow-hidden transition-[width,padding,gap] duration-200 ease-out ${
        hovered ? "w-[210px] px-4 gap-3" : "w-[60px] px-0 gap-0"
      } h-[60px]`}
    >
      <Calculator size={24} className="shrink-0" />
      <span
        className={`text-[16px] font-bold whitespace-nowrap overflow-hidden transition-all duration-150 ${hovered ? "max-w-[160px] opacity-100" : "max-w-0 opacity-0"}`}
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Quick Simulator
      </span>
    </button>
  );
}

export function KonfigurasiPajakContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [rows, setRows] = useState<TaxConfigRow[]>(TAX_CONFIG_ROWS);
  const [toasts, setToasts] = useState<StatusToastItem[]>([]);
  const [confirmToggle, setConfirmToggle] = useState<TaxConfigRow | null>(null);
  const [simulatorOpen, setSimulatorOpen] = useState(false);

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

  const applyToggle = (row: TaxConfigRow) => {
    const nextActive = !row.aktif;
    setRows(prev => prev.map(r => (r.id === row.id ? { ...r, aktif: nextActive } : r)));
    pushToast(nextActive ? `Konfigurasi ${row.nama} berhasil diaktifkan kembali` : `Konfigurasi ${row.nama} berhasil dinonaktifkan`);
    setConfirmToggle(null);
  };

  return (
    <div className="flex-1 min-w-0 h-full overflow-y-auto bg-surface">
      <SuperadminTopBar />

      <div className="flex flex-col gap-8 pb-10">
        {/* Page title */}
        <div className="px-10 pt-8 flex items-start justify-between gap-6">
          <div>
            <p className="text-text-default text-[28px] font-bold leading-8" style={{ fontFamily: "var(--font-body)" }}>Konfigurasi Pajak & Biaya</p>
            <p className="text-text-muted text-sm mt-1" style={{ fontFamily: "var(--font-body)" }}>Atur tarif pajak dan biaya layanan aplikasi untuk langganan employer.</p>
          </div>
          <AddConfigButton />
        </div>

        {/* Table card */}
        <div className="px-10">
          <div className="bg-white rounded-xl border border-border-lighter flex flex-col gap-6 p-4">
            {/* Table toolbar */}
            <div className="flex items-center justify-between">
              <p className="text-text-default text-base font-bold" style={{ fontFamily: "var(--font-body)" }}>Daftar Konfigurasi Pajak</p>
              <div className="flex gap-5 items-center">
                <div className="bg-white h-10 rounded-xl border border-border-default flex items-center gap-2 px-3 w-[378px]">
                  <Search size={14} className="text-icon-default shrink-0" />
                  <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Cari nama konfigurasi"
                    className="flex-1 min-w-0 text-xs bg-transparent outline-none text-text-default placeholder-[#777980]"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>
                <button
                  className="bg-white h-10 flex items-center gap-2 px-3 rounded-full border-[1.5px] border-border-default text-text-darker text-sm font-bold transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Filter
                  <ListFilter size={14} className="text-icon-default" />
                </button>
              </div>
            </div>

            {filtered.length === 0 ? (
              <EmptyState
                image={imgEmptyKonfigurasiPajak}
                title="Belum ada konfigurasi pajak"
                description="Mulai konfigurasi pajak, PPN, biaya platform, atau administrasi dengan menekan tombol di bawah ini."
                action={<AddConfigButton variant="outline" />}
              />
            ) : (
              <div className="border border-border-lighter rounded-xl overflow-hidden">
                {/* Header */}
                <div className={`bg-[#f4f5f7] border-b border-border-lighter grid ${TABLE_GRID_COLS} items-center gap-3 px-4 py-3`}>
                  <span className="text-text-darker text-[12px] font-bold uppercase" style={{ fontFamily: "var(--font-heading)" }}>Nama Konfigurasi</span>
                  <span className="text-text-darker text-[12px] font-bold uppercase" style={{ fontFamily: "var(--font-heading)" }}>Kategori</span>
                  <span className="text-text-darker text-[12px] font-bold uppercase" style={{ fontFamily: "var(--font-heading)" }}>Tarif / Nominal</span>
                  <span className="text-text-darker text-[12px] font-bold uppercase" style={{ fontFamily: "var(--font-heading)" }}>Diterapkan pada</span>
                  <span className="text-text-darker text-[12px] font-bold uppercase" style={{ fontFamily: "var(--font-heading)" }}>Mulai Berlaku</span>
                  <span className="text-text-darker text-[12px] font-bold uppercase" style={{ fontFamily: "var(--font-heading)" }}>Status</span>
                  <span className="text-text-darker text-[12px] font-bold uppercase text-center" style={{ fontFamily: "var(--font-heading)" }}>Aksi</span>
                </div>

                {/* Rows */}
                {filtered.map((row, i) => (
                  <div
                    key={row.id}
                    className={`grid ${TABLE_GRID_COLS} items-center gap-3 p-4 hover:bg-[#f7faff] transition-colors ${i < filtered.length - 1 ? "border-b border-border-lighter" : ""}`}
                  >
                    <p className="min-w-0 truncate text-text-darker text-sm font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{row.nama}</p>
                    <p className="min-w-0 truncate text-text-darker text-sm" style={{ fontFamily: "var(--font-body)" }}>{row.kategori}</p>
                    <div className="flex flex-col gap-px">
                      <p className="text-text-darker text-sm" style={{ fontFamily: "var(--font-body)" }}>{row.tarifDisplay}</p>
                      <p className="text-[#777980] text-[10px]" style={{ fontFamily: "var(--font-heading)" }}>{row.tarifNote}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {row.diterapkanPada.slice(0, 2).map(tag => (
                        <span key={tag} className="bg-surface px-2 py-1 rounded text-[11px] font-medium text-[#64748b] whitespace-nowrap" style={{ fontFamily: "var(--font-heading)" }}>{tag}</span>
                      ))}
                      {row.diterapkanPada.length > 2 && (
                        <span className="bg-[#f3f4f6] border border-[#e5e7eb] px-2 py-1 rounded text-[11px] font-semibold text-[#64748b] whitespace-nowrap" style={{ fontFamily: "var(--font-heading)" }}>
                          +{row.diterapkanPada.length - 2}
                        </span>
                      )}
                    </div>
                    <p className="min-w-0 truncate text-[#777980] text-sm" style={{ fontFamily: "var(--font-body)" }}>{row.mulaiBerlaku}</p>
                    <button
                      onClick={() => setConfirmToggle(row)}
                      role="switch"
                      aria-checked={row.aktif}
                      className={`relative h-4 w-8 shrink-0 rounded-full transition-colors ${row.aktif ? "bg-brand-primary" : "bg-border-default"}`}
                    >
                      <span className={`absolute left-0.5 top-0.5 size-3 rounded-full bg-white shadow-sm transition-transform ${row.aktif ? "translate-x-4" : "translate-x-0"}`} />
                    </button>
                    <div className="flex items-center justify-center gap-2">
                      <button title="Lihat Detail" className="w-7 h-7 rounded-md flex items-center justify-center text-icon-default hover:bg-gray-100 transition-colors">
                        <Eye size={14} />
                      </button>
                      <button
                        title="Edit"
                        onClick={() => navigate(`/superadmin/konfigurasi-pajak/${row.id}/edit`)}
                        className="w-7 h-7 rounded-md flex items-center justify-center text-icon-default hover:bg-gray-100 transition-colors"
                      >
                        <Pencil size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="flex items-center justify-between p-6">
              <p className="text-text-muted text-sm" style={{ fontFamily: "var(--font-body)" }}>
                Menampilkan {filtered.length} dari {rows.length} konfigurasi
              </p>
              <div className="flex items-center gap-6">
                <button className="size-8 rounded-full border border-border-lighter flex items-center justify-center hover:bg-gray-50">
                  <ChevronLeft size={14} className="text-icon-default" />
                </button>
                <div className="flex gap-2">
                  <button className="size-8 rounded-md flex items-center justify-center text-sm font-semibold bg-brand-primary text-white" style={{ fontFamily: "var(--font-body)" }}>1</button>
                </div>
                <button className="size-8 rounded-full border border-border-lighter flex items-center justify-center hover:bg-gray-50">
                  <ChevronRight size={14} className="text-icon-default" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuickSimulatorFab onClick={() => setSimulatorOpen(true)} />

      {simulatorOpen && (
        <QuickSimulatorModal rows={rows} onClose={() => setSimulatorOpen(false)} />
      )}

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
