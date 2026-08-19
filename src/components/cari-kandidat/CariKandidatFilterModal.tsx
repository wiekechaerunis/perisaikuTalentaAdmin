import React, { useState } from "react";
import { X } from "lucide-react";
import { FilterSelectField } from "../shared/FilterSelectField";
import {
  CariKandidatFilterValues, CARI_KANDIDAT_DURASI_OPTIONS, CARI_KANDIDAT_BIDANG_OPTIONS,
  CARI_KANDIDAT_SKILLS, CARI_KANDIDAT_KOTA_OPTIONS, CARI_KANDIDAT_KABUPATEN_OPTIONS, CARI_KANDIDAT_KECAMATAN_OPTIONS,
} from "../../mocks/cari-kandidat";

export function CariKandidatFilterModal({ onClose, onSave, initial }: {
  onClose: () => void; onSave: (f: CariKandidatFilterValues) => void; initial: CariKandidatFilterValues;
}) {
  const [usiaMin, setUsiaMin] = useState(initial.usiaMin);
  const [usiaMax, setUsiaMax] = useState(initial.usiaMax);
  const [durasiPengalaman, setDurasiPengalaman] = useState<string[]>(initial.durasiPengalaman);
  const [gajiMin, setGajiMin] = useState(initial.gajiMin);
  const [gajiMax, setGajiMax] = useState(initial.gajiMax);
  const [bidangPekerjaan, setBidangPekerjaan] = useState<string[]>(initial.bidangPekerjaan);
  const [keahlian, setKeahlian] = useState<string[]>(initial.keahlian);
  const [lokasiKota, setLokasiKota] = useState<string[]>(initial.lokasiKota);
  const [lokasiKabupaten, setLokasiKabupaten] = useState<string[]>(initial.lokasiKabupaten);
  const [lokasiKecamatan, setLokasiKecamatan] = useState<string[]>(initial.lokasiKecamatan);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (key: string) => setOpenDropdown((v) => (v === key ? null : key));
  const toggleOption = (setter: React.Dispatch<React.SetStateAction<string[]>>, v: string) =>
    setter((prev) => prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]);
  const labelClass = "mb-2 block text-[12px] font-semibold text-text-default";
  const reset = () => { setUsiaMin(""); setUsiaMax(""); setDurasiPengalaman([]); setGajiMin(""); setGajiMax(""); setBidangPekerjaan([]); setKeahlian([]); setLokasiKota([]); setLokasiKabupaten([]); setLokasiKecamatan([]); setOpenDropdown(null); };

  return (
    <div className="fixed inset-0 z-[100] bg-[#0f172a]/20" onMouseDown={onClose}>
      <aside className="absolute right-4 top-4 flex max-h-[calc(100vh-32px)] w-[min(560px,calc(100vw-32px))] flex-col overflow-hidden rounded-2xl border border-border-lighter bg-white shadow-[0_16px_44px_rgba(15,23,42,0.2)]" onMouseDown={event => event.stopPropagation()} style={{ fontFamily: "var(--font-body)" }}>
        <header className="flex shrink-0 items-center justify-between border-b border-border-lighter px-6 py-5"><h2 className="text-[21px] font-bold text-text-default">Filter</h2><button onClick={onClose} className="flex size-8 items-center justify-center rounded-full bg-[#f3f4f6] text-icon-default"><X size={17} /></button></header>
        <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
          <div className="flex flex-col gap-5">
            <div>
              <span className={labelClass}>Usia Kandidat</span>
              <div className="grid grid-cols-2 gap-3">
                <input type="number" min="17" value={usiaMin} onChange={e => setUsiaMin(e.target.value)} placeholder="Usia minimal" className="h-11 rounded-xl border border-border-default px-3 text-[12px] text-text-darker outline-none focus:border-brand-primary" />
                <input type="number" min="17" value={usiaMax} onChange={e => setUsiaMax(e.target.value)} placeholder="Usia maksimal" className="h-11 rounded-xl border border-border-default px-3 text-[12px] text-text-darker outline-none focus:border-brand-primary" />
              </div>
            </div>
            <div>
              <span className={labelClass}>Durasi Pengalaman Kerja</span>
              <FilterSelectField label="" values={durasiPengalaman} options={CARI_KANDIDAT_DURASI_OPTIONS} open={openDropdown === "durasiPengalaman"} onToggle={() => toggleDropdown("durasiPengalaman")} onToggleOption={v => toggleOption(setDurasiPengalaman, v)} />
            </div>
            <div>
              <span className={labelClass}>Rentang Gaji (Kompensasi yang Diberikan)</span>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex h-11 items-center gap-2 rounded-xl border border-border-default bg-white px-3 focus-within:border-brand-primary"><span className="shrink-0 text-[12px] font-semibold text-text-darker">Rp</span><input type="number" value={gajiMin} onChange={e => setGajiMin(e.target.value)} placeholder="Ketik gaji minimal" className="min-w-0 flex-1 text-[12px] text-text-darker outline-none placeholder:text-[#9b9ca1]" /></div>
                <div className="flex h-11 items-center gap-2 rounded-xl border border-border-default bg-white px-3 focus-within:border-brand-primary"><span className="shrink-0 text-[12px] font-semibold text-text-darker">Rp</span><input type="number" value={gajiMax} onChange={e => setGajiMax(e.target.value)} placeholder="Ketik gaji maksimal" className="min-w-0 flex-1 text-[12px] text-text-darker outline-none placeholder:text-[#9b9ca1]" /></div>
              </div>
            </div>
            <div>
              <span className={labelClass}>Bidang Pekerjaan</span>
              <FilterSelectField label="" values={bidangPekerjaan} options={CARI_KANDIDAT_BIDANG_OPTIONS} open={openDropdown === "bidangPekerjaan"} onToggle={() => toggleDropdown("bidangPekerjaan")} onToggleOption={v => toggleOption(setBidangPekerjaan, v)} />
              <p className="mt-2 pl-1 text-[10px] text-text-lighter">Maksimal 7 pilihan.</p>
            </div>
            <div>
              <span className={labelClass}>Keahlian Kandidat</span>
              <FilterSelectField label="" values={keahlian} options={CARI_KANDIDAT_SKILLS} open={openDropdown === "keahlian"} onToggle={() => toggleDropdown("keahlian")} onToggleOption={v => toggleOption(setKeahlian, v)} />
              <p className="mt-2 pl-1 text-[10px] text-text-lighter">Maksimal 7 pilihan.</p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div><span className={labelClass}>Lokasi (Kota)</span><FilterSelectField label="" values={lokasiKota} options={CARI_KANDIDAT_KOTA_OPTIONS} open={openDropdown === "lokasiKota"} onToggle={() => toggleDropdown("lokasiKota")} onToggleOption={v => toggleOption(setLokasiKota, v)} /></div>
              <div><span className={labelClass}>Lokasi (Kabupaten)</span><FilterSelectField label="" values={lokasiKabupaten} options={CARI_KANDIDAT_KABUPATEN_OPTIONS} open={openDropdown === "lokasiKabupaten"} onToggle={() => toggleDropdown("lokasiKabupaten")} onToggleOption={v => toggleOption(setLokasiKabupaten, v)} /></div>
            </div>
            <div>
              <span className={labelClass}>Lokasi (Kecamatan)</span>
              <FilterSelectField label="" values={lokasiKecamatan} options={CARI_KANDIDAT_KECAMATAN_OPTIONS} open={openDropdown === "lokasiKecamatan"} onToggle={() => toggleDropdown("lokasiKecamatan")} onToggleOption={v => toggleOption(setLokasiKecamatan, v)} />
            </div>
          </div>
        </div>
        <footer className="flex shrink-0 items-center justify-between gap-3 border-t border-border-lighter bg-white px-6 py-4">
          <button onClick={reset} className="text-[13px] font-bold text-brand-primary hover:underline">Reset</button>
          <div className="flex gap-3">
            <button onClick={onClose} className="h-10 rounded-full border border-border-default px-5 text-[13px] font-bold text-text-darker hover:bg-gray-50 transition-colors">Kembali</button>
            <button
              onClick={() => { onSave({ ...initial, usiaMin, usiaMax, durasiPengalaman, gajiMin, gajiMax, bidangPekerjaan, keahlian, lokasiKota, lokasiKabupaten, lokasiKecamatan }); onClose(); }}
              className="h-10 rounded-full bg-brand-primary px-6 text-[13px] font-bold text-white hover:bg-brand-primary-hover transition-colors"
            >
              Terapkan
            </button>
          </div>
        </footer>
      </aside>
    </div>
  );
}
