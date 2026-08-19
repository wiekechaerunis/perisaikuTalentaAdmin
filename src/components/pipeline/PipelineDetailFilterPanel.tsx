import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { EXPORT_EDUCATION_OPTIONS, EXPORT_STAGE_OPTIONS } from "../lowongan/ExportApplicantsPanel";
import { PROVINSI_OPTIONS } from "../../mocks/options";

export interface PipelineDetailFilterValues {
  period: string; customStart: string; customEnd: string;
  stage: string; province: string; education: string; experience: string;
  source: string; recruiter: string;
}
export const EMPTY_DETAIL_FILTERS: PipelineDetailFilterValues = {
  period: "", customStart: "", customEnd: "",
  stage: "", province: "", education: "", experience: "", source: "", recruiter: "",
};

export function PipelineDetailFilterPanel({ onClose, onSave, initial }: {
  onClose: () => void; onSave: (f: PipelineDetailFilterValues) => void; initial: PipelineDetailFilterValues;
}) {
  const [period, setPeriod] = useState(initial.period);
  const [customStart, setCustomStart] = useState(initial.customStart);
  const [customEnd, setCustomEnd] = useState(initial.customEnd);
  const [stage, setStage] = useState(initial.stage);
  const [province, setProvince] = useState(initial.province);
  const [education, setEducation] = useState(initial.education);
  const [experience, setExperience] = useState(initial.experience);
  const [source, setSource] = useState(initial.source);
  const [recruiter, setRecruiter] = useState(initial.recruiter);

  const fieldClass = "h-11 w-full rounded-xl border border-border-default bg-white px-3 text-[12px] text-text-darker outline-none focus:border-brand-primary";
  const selectFieldClass = "h-11 w-full appearance-none rounded-xl border border-border-default bg-white px-3 pr-9 text-[12px] text-text-darker outline-none focus:border-brand-primary";
  const labelClass = "mb-2 block text-[12px] font-semibold text-text-default";
  const reset = () => { setPeriod(""); setCustomStart(""); setCustomEnd(""); setStage(""); setProvince(""); setEducation(""); setExperience(""); setSource(""); setRecruiter(""); };

  return (
    <div className="fixed inset-0 z-[100] bg-[#0f172a]/20" onMouseDown={onClose}>
      <aside className="absolute right-4 top-4 flex max-h-[calc(100vh-32px)] w-[min(560px,calc(100vw-32px))] flex-col overflow-hidden rounded-2xl border border-border-lighter bg-white shadow-[0_16px_44px_rgba(15,23,42,0.2)]" onMouseDown={event => event.stopPropagation()} style={{ fontFamily: "var(--font-body)" }}>
        <header className="flex shrink-0 items-center justify-between border-b border-border-lighter px-6 py-5"><h2 className="text-[21px] font-bold text-text-default">Filter</h2><button onClick={onClose} className="flex size-8 items-center justify-center rounded-full bg-[#f3f4f6] text-icon-default"><X size={17} /></button></header>
        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label><span className={labelClass}>Periode Melamar</span><div className="relative"><select value={period} onChange={e => setPeriod(e.target.value)} className={selectFieldClass}><option value="">Semua periode</option>{["Hari ini", "7 hari terakhir", "30 hari terakhir", "Rentang tanggal khusus"].map(option => <option key={option}>{option}</option>)}</select><ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-icon-default" /></div></label>
            <label><span className={labelClass}>Tahap Rekrutmen</span><div className="relative"><select value={stage} onChange={e => setStage(e.target.value)} className={selectFieldClass}><option value="">Semua tahap</option>{EXPORT_STAGE_OPTIONS.map(option => <option key={option}>{option}</option>)}</select><ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-icon-default" /></div></label>
            {period === "Rentang tanggal khusus" && <><label><span className={labelClass}>Tanggal Mulai</span><input type="date" value={customStart} onChange={e => setCustomStart(e.target.value)} className={fieldClass} /></label><label><span className={labelClass}>Tanggal Akhir</span><input type="date" value={customEnd} onChange={e => setCustomEnd(e.target.value)} className={fieldClass} /></label></>}
            <label><span className={labelClass}>Provinsi Domisili</span><div className="relative"><select value={province} onChange={e => setProvince(e.target.value)} className={selectFieldClass}><option value="">Semua provinsi</option>{PROVINSI_OPTIONS.map(option => <option key={option}>{option}</option>)}</select><ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-icon-default" /></div></label>
            <label><span className={labelClass}>Pendidikan Terakhir</span><div className="relative"><select value={education} onChange={e => setEducation(e.target.value)} className={selectFieldClass}><option value="">Semua pendidikan</option>{EXPORT_EDUCATION_OPTIONS.map(option => <option key={option}>{option}</option>)}</select><ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-icon-default" /></div></label>
            <label><span className={labelClass}>Pengalaman Kerja</span><div className="relative"><select value={experience} onChange={e => setExperience(e.target.value)} className={selectFieldClass}><option value="">Semua pengalaman</option>{["Fresh graduate", "Kurang dari 1 tahun", "1 sampai 3 tahun", "3 sampai 5 tahun", "Lebih dari 5 tahun"].map(option => <option key={option}>{option}</option>)}</select><ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-icon-default" /></div></label>
            <label><span className={labelClass}>Sumber Kandidat</span><div className="relative"><select value={source} onChange={e => setSource(e.target.value)} className={selectFieldClass}><option value="">Semua sumber</option><option>Melamar langsung</option><option>Diundang recruiter</option><option>Sumber lainnya</option></select><ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-icon-default" /></div></label>
            <label><span className={labelClass}>PIC/Recruiter</span><div className="relative"><select value={recruiter} onChange={e => setRecruiter(e.target.value)} className={selectFieldClass}><option value="">Semua recruiter</option>{["Budi Santoso", "Siti Rahayu", "Ahmad Fauzi", "Dewi Kusuma", "Riko Pratama"].map(option => <option key={option}>{option}</option>)}</select><ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-icon-default" /></div></label>
          </div>
        </div>
        <footer className="flex shrink-0 items-center justify-between gap-3 border-t border-border-lighter bg-white px-6 py-4">
          <button onClick={reset} className="text-[13px] font-bold text-brand-primary hover:underline">Reset</button>
          <div className="flex gap-3">
            <button onClick={onClose} className="h-10 rounded-full border border-border-default px-5 text-[13px] font-bold text-text-darker">Batal</button>
            <button onClick={() => { onSave({ period, customStart, customEnd, stage, province, education, experience, source, recruiter }); onClose(); }} className="h-10 rounded-full bg-brand-primary px-6 text-[13px] font-bold text-white hover:bg-brand-primary-hover transition-colors">Terapkan</button>
          </div>
        </footer>
      </aside>
    </div>
  );
}
