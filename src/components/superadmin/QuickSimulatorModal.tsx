import { useState } from "react";
import { X } from "lucide-react";
import { TaxConfigRow } from "../../mocks/konfigurasi-pajak";

function formatRupiah(value: number): string {
  return value.toLocaleString("id-ID");
}

export function QuickSimulatorModal({ rows, onClose }: { rows: TaxConfigRow[]; onClose: () => void }) {
  const [hargaDasarInput, setHargaDasarInput] = useState("1000000");
  const hargaDasar = Number(hargaDasarInput) || 0;
  const activeRows = rows.filter(r => r.aktif);
  const computed = activeRows.map(row => ({
    row,
    amount: row.metode === "Persentase" ? Math.round((hargaDasar * row.nilai) / 100) : row.nilai,
  }));
  const total = hargaDasar + computed.reduce((sum, c) => sum + c.amount, 0);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl w-full max-w-[480px] border border-[#e5e9ed] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.12)] px-8 py-7 flex flex-col gap-5 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between w-full">
          <p className="text-[22px] font-bold text-[#212529]" style={{ fontFamily: "var(--font-heading)" }}>Preview Tagihan Employer</p>
          <button onClick={onClose} className="bg-[#f6f8fc] rounded-full size-7 flex items-center justify-center text-[#757f8d] hover:bg-gray-200 transition-colors">
            <X size={14} />
          </button>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-1">
            <label className="text-[12px] font-medium text-text-default" style={{ fontFamily: "var(--font-body)" }}>Nominal Harga Dasar</label>
            <span className="text-[#ff4d4f] text-sm font-semibold">*</span>
          </div>
          <div className="bg-white border border-border-default rounded-xl h-11 flex items-center gap-2 px-4">
            <span className="text-[14px] font-semibold text-text-darker shrink-0">Rp</span>
            <input
              type="text"
              inputMode="numeric"
              value={formatRupiah(hargaDasar)}
              onChange={(e) => setHargaDasarInput(e.target.value.replace(/\D/g, ""))}
              className="flex-1 min-w-0 text-[14px] text-text-darker outline-none bg-transparent"
              style={{ fontFamily: "var(--font-body)" }}
            />
          </div>
        </div>

        <div className="bg-[#e5e9ed] h-px w-full" />

        <div className="flex flex-col gap-0.5 w-full">
          <p className="text-[16px] font-bold text-[#212529]" style={{ fontFamily: "var(--font-body)" }}>Perisaiku Talenta</p>
          <p className="text-[11px] text-[#757f8d]" style={{ fontFamily: "var(--font-body)" }}>Simulasi, bukan invoice aktual</p>
        </div>

        <div className="flex flex-col w-full border-t border-b border-[#e5e9ed]">
          <div className="bg-surface flex items-center justify-between px-3.5 py-2.5 text-[11px] font-bold text-[#757f8d] uppercase" style={{ fontFamily: "var(--font-body)" }}>
            <span>Item</span>
            <span>Amount</span>
          </div>
          <div className="flex items-center justify-between px-3.5 py-3 border-b border-[#e5e9ed] text-[14px]">
            <span className="text-text-darker" style={{ fontFamily: "var(--font-body)" }}>Harga Dasar</span>
            <span className="font-semibold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Rp{formatRupiah(hargaDasar)}</span>
          </div>
          {computed.length === 0 ? (
            <div className="px-3.5 py-3 text-[13px] text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>Tidak ada konfigurasi aktif</div>
          ) : (
            computed.map(({ row, amount }, i) => (
              <div key={row.id} className={`flex items-center justify-between px-3.5 py-3 text-[14px] ${i < computed.length - 1 ? "border-b border-[#e5e9ed]" : ""}`}>
                <span className="text-text-darker" style={{ fontFamily: "var(--font-body)" }}>{row.nama}</span>
                <span className="flex items-center gap-1.5">
                  {row.metode === "Persentase" && (
                    <span className="text-[#777980]" style={{ fontFamily: "var(--font-body)" }}>({row.nilai}%)</span>
                  )}
                  <span className="font-semibold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Rp{formatRupiah(amount)}</span>
                </span>
              </div>
            ))
          )}
        </div>

        <div className="bg-[#f6f8fc] border border-[#e5e9ed] rounded-[10px] p-3.5 w-full">
          <div className="flex items-center justify-between text-[14px] font-semibold">
            <span className="text-text-default" style={{ fontFamily: "var(--font-body)" }}>Total tagihan employer</span>
            <span className="text-brand-primary" style={{ fontFamily: "var(--font-body)" }}>Rp{formatRupiah(total)}</span>
          </div>
        </div>

        <div className="bg-[#fff5e6] rounded-lg px-3.5 py-3 w-full">
          <p className="text-[12px] text-[#bc801a]" style={{ fontFamily: "var(--font-body)" }}>
            Nilai ini hanya simulasi dan belum memperhitungkan diskon atau kontrak khusus employer.
          </p>
        </div>
      </div>
    </div>
  );
}
