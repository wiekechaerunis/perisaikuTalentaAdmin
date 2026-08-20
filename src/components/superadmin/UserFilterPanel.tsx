import { useState, useEffect, useRef } from "react";
import { X, ChevronDown, Calendar } from "lucide-react";
import { AnalyticsCustomDateModal } from "../analitik/AnalyticsWidgets";
import {
  PlatformUserStatus, PlatformUserTipe, UserFilterValues, USER_STATUS_OPTIONS,
  USER_TIPE_OPTIONS, USER_PERUSAHAAN_OPTIONS,
} from "../../mocks/manajemen-pengguna";

function formatDisplayDate(value: string) {
  if (!value) return "";
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}

export function UserFilterPanel({ onClose, onApply, initial }: { onClose: () => void; onApply: (filters: UserFilterValues) => void; initial: UserFilterValues }) {
  const [status, setStatus] = useState(initial.status);
  const [tipe, setTipe] = useState(initial.tipe);
  const [perusahaan, setPerusahaan] = useState(initial.perusahaan);
  const [startDate, setStartDate] = useState(initial.startDate);
  const [endDate, setEndDate] = useState(initial.endDate);
  const [dateModalOpen, setDateModalOpen] = useState(false);
  const selectFieldClass = "h-10 w-full appearance-none rounded-xl border border-border-default bg-white px-3 pr-9 text-[12px] text-text-default outline-none focus:border-brand-primary";
  const labelClass = "mb-2 block text-[12px] font-medium text-text-default";

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (dateModalOpen) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose, dateModalOpen]);

  const dateDisplay = startDate && endDate ? `${formatDisplayDate(startDate)} - ${formatDisplayDate(endDate)}` : "";

  return (
    <div
      ref={ref}
      className="absolute right-0 top-[calc(100%+8px)] z-50 flex w-[min(420px,calc(100vw-32px))] flex-col overflow-hidden rounded-2xl border border-border-lighter bg-white shadow-[0_16px_44px_rgba(15,23,42,0.15)]"
      style={{ fontFamily: "var(--font-body)" }}
    >
      <header className="flex shrink-0 items-center justify-between border-b border-border-lighter px-6 py-5">
        <h2 className="text-[21px] font-bold text-text-darker">Filter</h2>
        <button onClick={onClose} className="flex size-8 items-center justify-center rounded-full bg-[#f3f4f6] text-icon-default"><X size={17} /></button>
      </header>
      <div className="px-6 py-5 flex flex-col gap-4">
        <label>
          <span className={labelClass}>Tanggal Daftar</span>
          <button
            type="button"
            onClick={() => setDateModalOpen(true)}
            className="flex h-10 w-full items-center justify-between rounded-xl border border-border-default bg-white px-3 text-left text-[12px] text-text-default"
          >
            <span className={dateDisplay ? "text-text-default" : "text-[#c5c6c9]"}>{dateDisplay || "DD/MM/YYYY - DD/MM/YYYY"}</span>
            <Calendar size={14} className="text-icon-default shrink-0" />
          </button>
        </label>
        <div className="flex gap-4">
          <label className="flex-1 min-w-0">
            <span className={labelClass}>Status</span>
            <div className="relative">
              <select value={status} onChange={e => setStatus(e.target.value as PlatformUserStatus | "")} className={selectFieldClass}>
                {USER_STATUS_OPTIONS.map(opt => <option key={opt.label} value={opt.value}>{opt.label}</option>)}
              </select>
              <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-icon-default" />
            </div>
          </label>
          <label className="flex-1 min-w-0">
            <span className={labelClass}>Tipe User</span>
            <div className="relative">
              <select value={tipe} onChange={e => setTipe(e.target.value as PlatformUserTipe | "")} className={selectFieldClass}>
                {USER_TIPE_OPTIONS.map(opt => <option key={opt.label} value={opt.value}>{opt.label}</option>)}
              </select>
              <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-icon-default" />
            </div>
          </label>
        </div>
        <label>
          <span className={labelClass}>Perusahaan</span>
          <div className="relative">
            <select value={perusahaan} onChange={e => setPerusahaan(e.target.value)} className={selectFieldClass}>
              <option value="">Semua perusahaan</option>
              {USER_PERUSAHAAN_OPTIONS.map(opt => <option key={opt}>{opt}</option>)}
            </select>
            <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-icon-default" />
          </div>
        </label>
      </div>
      <footer className="flex shrink-0 items-center justify-end gap-3 border-t border-border-lighter px-6 py-4">
        <button onClick={onClose} className="h-10 rounded-full border-[1.5px] border-border-default px-5 text-[14px] font-bold text-text-darker hover:bg-gray-50 transition-colors">Kembali</button>
        <button
          onClick={() => { onApply({ status, tipe, perusahaan, startDate, endDate }); onClose(); }}
          className="h-10 rounded-full bg-brand-primary px-6 text-[14px] font-bold text-white hover:bg-brand-primary-hover transition-colors"
        >
          Simpan
        </button>
      </footer>

      {dateModalOpen && (
        <AnalyticsCustomDateModal
          startDate={startDate}
          endDate={endDate}
          onCancel={() => setDateModalOpen(false)}
          onApply={(start, end) => { setStartDate(start); setEndDate(end); setDateModalOpen(false); }}
        />
      )}
    </div>
  );
}
