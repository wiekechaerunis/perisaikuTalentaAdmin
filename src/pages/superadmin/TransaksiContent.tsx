import { useState } from "react";
import { useNavigate } from "react-router";
import { Search } from "lucide-react";
import { SuperadminTopBar } from "../../layouts/SuperadminLayout";
import { PaginationFooter } from "../../components/shared/Pagination";
import { usePagination } from "../../lib/pagination";
import { TRANSACTION_ROWS, TransactionStatus } from "../../mocks/transactions";

const TABLE_GRID_COLS = "grid-cols-[110px_1.4fr_1fr_1fr_140px_120px_110px]";

const STATUS_STYLE: Record<TransactionStatus, { bg: string; text: string }> = {
  Paid: { bg: "bg-[#d1fae5]", text: "text-[#065f46]" },
  Pending: { bg: "bg-[#fffaf4]", text: "text-[#d19400]" },
  Failed: { bg: "bg-[#fee2e2]", text: "text-[#991b1b]" },
  Refunded: { bg: "bg-[#f3f4f6]", text: "text-[#64748b]" },
};

export function TransaksiContent() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filtered = TRANSACTION_ROWS.filter(row =>
    row.employerName.toLowerCase().includes(search.toLowerCase()) || row.id.toLowerCase().includes(search.toLowerCase())
  );
  const { currentPage, setCurrentPage, totalPages, pageItems } = usePagination(filtered, 10);

  return (
    <div className="flex-1 min-w-0 h-full overflow-y-auto bg-surface">
      <SuperadminTopBar />

      <div className="flex flex-col gap-8 pb-10">
        <div className="px-10 pt-8">
          <p className="text-text-default text-[28px] font-bold leading-8" style={{ fontFamily: "var(--font-body)" }}>Transaksi</p>
          <p className="text-text-muted text-sm mt-1" style={{ fontFamily: "var(--font-body)" }}>Pantau transaksi pembayaran langganan employer dan proses refund.</p>
        </div>

        <div className="px-10">
          <div className="bg-white rounded-xl border border-border-lighter flex flex-col gap-6 p-4">
            <div className="flex items-center justify-between">
              <p className="text-text-default text-base font-bold" style={{ fontFamily: "var(--font-body)" }}>Daftar Transaksi</p>
              <div className="bg-white h-10 rounded-xl border border-border-default flex items-center gap-2 px-3 w-[378px]">
                <Search size={14} className="text-icon-default shrink-0" />
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Cari ID transaksi atau nama employer"
                  className="flex-1 min-w-0 text-xs bg-transparent outline-none text-text-default placeholder-[#777980]"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="flex items-center justify-center py-16">
                <p className="text-text-muted text-sm" style={{ fontFamily: "var(--font-body)" }}>Tidak ada transaksi yang cocok dengan pencarian.</p>
              </div>
            ) : (
              <div className="border border-border-lighter rounded-xl overflow-hidden">
                <div className={`bg-[#f4f5f7] border-b border-border-lighter grid ${TABLE_GRID_COLS} items-center gap-3 px-4 py-3`}>
                  <span className="text-text-darker text-[12px] font-bold uppercase" style={{ fontFamily: "var(--font-heading)" }}>ID</span>
                  <span className="text-text-darker text-[12px] font-bold uppercase" style={{ fontFamily: "var(--font-heading)" }}>Employer</span>
                  <span className="text-text-darker text-[12px] font-bold uppercase" style={{ fontFamily: "var(--font-heading)" }}>Paket</span>
                  <span className="text-text-darker text-[12px] font-bold uppercase" style={{ fontFamily: "var(--font-heading)" }}>Metode</span>
                  <span className="text-text-darker text-[12px] font-bold uppercase" style={{ fontFamily: "var(--font-heading)" }}>Jumlah</span>
                  <span className="text-text-darker text-[12px] font-bold uppercase" style={{ fontFamily: "var(--font-heading)" }}>Status</span>
                  <span className="text-text-darker text-[12px] font-bold uppercase" style={{ fontFamily: "var(--font-heading)" }}>Rekonsiliasi</span>
                </div>

                {pageItems.map((row, i) => {
                  const statusStyle = STATUS_STYLE[row.status];
                  return (
                    <div
                      key={row.id}
                      onClick={() => navigate(`/superadmin/transaksi/${row.id}`)}
                      className={`grid ${TABLE_GRID_COLS} items-center gap-3 p-4 hover:bg-[#f7faff] transition-colors cursor-pointer ${i < pageItems.length - 1 ? "border-b border-border-lighter" : ""}`}
                    >
                      <p className="text-text-darker text-sm font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{row.id}</p>
                      <p className="min-w-0 truncate text-text-darker text-sm" style={{ fontFamily: "var(--font-body)" }}>{row.employerName}</p>
                      <p className="min-w-0 truncate text-text-darker text-sm" style={{ fontFamily: "var(--font-body)" }}>{row.tierNama}</p>
                      <p className="min-w-0 truncate text-text-darker text-sm" style={{ fontFamily: "var(--font-body)" }}>{row.metodePembayaran}</p>
                      <p className="text-text-darker text-sm" style={{ fontFamily: "var(--font-body)" }}>Rp{row.amount.toLocaleString("id-ID")}</p>
                      <span className={`inline-flex w-fit px-2 py-1 rounded-full text-[11px] font-semibold ${statusStyle.bg} ${statusStyle.text}`} style={{ fontFamily: "var(--font-heading)" }}>{row.status}</span>
                      <span className={`text-[12px] font-semibold ${row.reconciled ? "text-[#10b981]" : "text-[#d19400]"}`} style={{ fontFamily: "var(--font-body)" }}>
                        {row.reconciled ? "Cocok" : "Belum cocok"}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}

            <PaginationFooter
              currentPage={currentPage}
              totalPages={totalPages}
              pageSize={10}
              totalItems={filtered.length}
              itemLabel="transaksi"
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
