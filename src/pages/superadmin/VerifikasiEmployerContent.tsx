import { useState } from "react";
import { Search, ListFilter, ChevronLeft, ChevronRight } from "lucide-react";
import { SuperadminTopBar } from "../../layouts/SuperadminLayout";
import { EmployerFilterPanel } from "../../components/superadmin/EmployerFilterPanel";
import { EmployerRowActions } from "../../components/superadmin/EmployerRowActions";
import {
  EmployerVerificationStatus, EmployerVerificationRow, EMPLOYER_VERIFICATION_ROWS, EMPLOYER_STATUS_STYLE,
  EmployerFilterValues, EMPTY_EMPLOYER_FILTERS, EMPLOYER_TABLE_COLUMNS, EMPLOYER_TABLE_GRID_COLS,
} from "../../mocks/superadmin";

export function VerifikasiEmployerContent() {
  const [search, setSearch] = useState("");
  const [rows, setRows] = useState<EmployerVerificationRow[]>(EMPLOYER_VERIFICATION_ROWS);
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<EmployerFilterValues>(EMPTY_EMPLOYER_FILTERS);

  const setRowStatus = (nama: string, status: EmployerVerificationStatus) =>
    setRows(prev => prev.map(row => (row.nama === nama ? { ...row, status, sla: "-", slaColor: "text-text-lighter" } : row)));

  const filtered = rows.filter(row =>
    row.nama.toLowerCase().includes(search.toLowerCase())
    && (!activeFilters.status || row.status === activeFilters.status)
    && (!activeFilters.industri || row.industri === activeFilters.industri)
    && (!activeFilters.kota || row.kota === activeFilters.kota)
  );

  return (
    <div className="flex-1 min-w-0 h-full overflow-y-auto bg-surface">
      <SuperadminTopBar />

      <div className="flex flex-col gap-8 pb-10">
        {/* Page title */}
        <div className="px-10 pt-8">
          <p className="text-text-default text-[28px] font-bold leading-8" style={{ fontFamily: "var(--font-body)" }}>Verifikasi Employer</p>
          <p className="text-text-muted text-sm mt-1" style={{ fontFamily: "var(--font-body)" }}>Tinjau dan putuskan pendaftaran perusahaan baru dalam antrian verifikasi</p>
        </div>

        {/* Table card */}
        <div className="px-10">
          <div className="bg-white rounded-xl border border-border-lighter flex flex-col gap-6 p-4">
            {/* Table toolbar */}
            <div className="flex items-center justify-between">
              <p className="text-text-default text-base font-bold" style={{ fontFamily: "var(--font-body)" }}>Daftar Employer</p>
              <div className="flex gap-5 items-center">
                <div className="bg-white h-10 rounded-xl border border-border-default flex items-center gap-2 px-3 w-[378px]">
                  <Search size={14} className="text-icon-default shrink-0" />
                  <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    placeholder="Cari nama perusahaan atau ID Employer"
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
                    <EmployerFilterPanel
                      onClose={() => setFilterOpen(false)}
                      onApply={setActiveFilters}
                      initial={activeFilters}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Inner table card */}
            <div className="border border-border-lighter rounded-xl overflow-hidden">
              {/* Header */}
              <div className={`bg-[#f4f5f7] border-b border-border-lighter grid ${EMPLOYER_TABLE_GRID_COLS} items-center gap-6 px-4 py-3`}>
                {EMPLOYER_TABLE_COLUMNS.map((col, i) => (
                  <span key={col} className={`text-text-darker text-[12px] font-bold ${i === EMPLOYER_TABLE_COLUMNS.length - 1 ? "text-center" : ""}`} style={{ fontFamily: "var(--font-body)" }}>{col}</span>
                ))}
              </div>

              {/* Rows */}
              {filtered.map((row, i) => {
                const statusStyle = EMPLOYER_STATUS_STYLE[row.status];
                return (
                  <div key={row.nama} className={`grid ${EMPLOYER_TABLE_GRID_COLS} items-center gap-6 p-4 hover:bg-[#f7faff] transition-colors ${i < filtered.length - 1 ? "border-b border-border-lighter" : ""}`}>
                    <p className="min-w-0 truncate text-text-darker text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>{row.nama}</p>
                    <p className="min-w-0 truncate text-text-darker text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>{row.industri}</p>
                    <p className="min-w-0 truncate text-text-darker text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>{row.kota}</p>
                    <p className="min-w-0 truncate text-text-darker text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>{row.jenisEntitas}</p>
                    <p className="min-w-0 truncate text-text-darker text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>{row.tanggalSubmit}</p>
                    <span className={`text-sm font-semibold whitespace-nowrap ${row.slaColor}`} style={{ fontFamily: "var(--font-body)" }}>{row.sla}</span>
                    <div className="flex justify-start">
                      <span className={`px-2 py-1 rounded-full text-[11px] whitespace-nowrap inline-block ${statusStyle.bg} ${statusStyle.text} ${statusStyle.weight}`} style={{ fontFamily: "var(--font-body)" }}>
                        {statusStyle.label}
                      </span>
                    </div>
                    <EmployerRowActions
                      status={row.status}
                      onApprove={() => setRowStatus(row.nama, "verified")}
                      onRequestRevision={() => setRowStatus(row.nama, "revision")}
                      onReject={() => setRowStatus(row.nama, "rejected")}
                    />
                  </div>
                );
              })}
              {filtered.length === 0 && (
                <div className="flex items-center justify-center py-12">
                  <p className="text-sm text-[#9b9ca1]" style={{ fontFamily: "var(--font-body)" }}>Tidak ada employer yang ditemukan.</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between p-6">
              <p className="text-text-muted text-sm" style={{ fontFamily: "var(--font-body)" }}>
                Menampilkan {filtered.length} dari {rows.length} employer
              </p>
              <div className="flex items-center gap-6">
                <button className="size-8 rounded-full border border-border-lighter flex items-center justify-center hover:bg-gray-50">
                  <ChevronLeft size={14} className="text-icon-default" />
                </button>
                <div className="flex gap-2">
                  {[1].map(n => (
                    <button
                      key={n}
                      className="size-8 rounded-md flex items-center justify-center text-sm font-semibold bg-brand-primary text-white"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {n}
                    </button>
                  ))}
                </div>
                <button className="size-8 rounded-full border border-border-lighter flex items-center justify-center hover:bg-gray-50">
                  <ChevronRight size={14} className="text-icon-default" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
