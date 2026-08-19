import { useState, useEffect, useRef } from "react";
import { X, ChevronDown } from "lucide-react";
import {
  EmployerVerificationStatus, EmployerFilterValues, EMPLOYER_STATUS_OPTIONS,
  EMPLOYER_INDUSTRI_OPTIONS, EMPLOYER_KOTA_OPTIONS,
} from "../../mocks/superadmin";

export function EmployerFilterPanel({ onClose, onApply, initial }: { onClose: () => void; onApply: (filters: EmployerFilterValues) => void; initial: EmployerFilterValues }) {
  const [status, setStatus] = useState(initial.status);
  const [industri, setIndustri] = useState(initial.industri);
  const [kota, setKota] = useState(initial.kota);
  const selectFieldClass = "h-10 w-full appearance-none rounded-[4px] border border-border-default bg-white px-3 pr-9 text-[12px] text-text-default outline-none focus:border-brand-primary";
  const labelClass = "mb-2 block text-[12px] font-medium text-text-default";

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);

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
          <span className={labelClass}>Status</span>
          <div className="relative">
            <select value={status} onChange={e => setStatus(e.target.value as EmployerVerificationStatus | "")} className={selectFieldClass}>
              {EMPLOYER_STATUS_OPTIONS.map(opt => <option key={opt.label} value={opt.value}>{opt.label}</option>)}
            </select>
            <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-icon-default" />
          </div>
        </label>
        <div className="flex gap-4">
          <label className="flex-1 min-w-0">
            <span className={labelClass}>Industri</span>
            <div className="relative">
              <select value={industri} onChange={e => setIndustri(e.target.value)} className={selectFieldClass}>
                <option value="">Semua industri</option>
                {EMPLOYER_INDUSTRI_OPTIONS.map(opt => <option key={opt}>{opt}</option>)}
              </select>
              <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-icon-default" />
            </div>
          </label>
          <label className="flex-1 min-w-0">
            <span className={labelClass}>Kota</span>
            <div className="relative">
              <select value={kota} onChange={e => setKota(e.target.value)} className={selectFieldClass}>
                <option value="">Semua kota</option>
                {EMPLOYER_KOTA_OPTIONS.map(opt => <option key={opt}>{opt}</option>)}
              </select>
              <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-icon-default" />
            </div>
          </label>
        </div>
      </div>
      <footer className="flex shrink-0 items-center justify-end gap-3 border-t border-border-lighter px-6 py-4">
        <button onClick={onClose} className="h-10 rounded-full border-[1.5px] border-border-default px-5 text-[14px] font-bold text-text-darker hover:bg-gray-50 transition-colors">Kembali</button>
        <button onClick={() => { onApply({ status, industri, kota }); onClose(); }} className="h-10 rounded-full bg-brand-primary px-6 text-[14px] font-bold text-white hover:bg-brand-primary-hover transition-colors">Simpan</button>
      </footer>
    </div>
  );
}
