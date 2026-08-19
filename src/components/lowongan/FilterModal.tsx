import { useState } from "react";
import svgFilterPaths from "../../imports/Filter-1/svg-doy4j2cmxe";
import { FilterSelectField } from "../shared/FilterSelectField";

export interface FilterValues {
  status: string[];
  kategori: string[];
  lokasi: string[];
  modeKerja: string[];
  dibuatOleh: string[];
}

export const EMPTY_FILTERS: FilterValues = {
  status: [], kategori: [], lokasi: [], modeKerja: [], dibuatOleh: [],
};

export function FilterModal({ onClose, onSave, initial }: { onClose: () => void; onSave: (f: FilterValues) => void; initial: FilterValues }) {
  const [status, setStatus] = useState<string[]>(initial.status);
  const [kategori, setKategori] = useState<string[]>(initial.kategori);
  const [lokasi, setLokasi] = useState<string[]>(initial.lokasi);
  const [modeKerja, setModeKerja] = useState<string[]>(initial.modeKerja);
  const [dibuatOleh, setDibuatOleh] = useState<string[]>(initial.dibuatOleh);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (key: string) => setOpenDropdown((v) => (v === key ? null : key));
  const toggleOption = (setter: React.Dispatch<React.SetStateAction<string[]>>, v: string) =>
    setter((prev) => prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]);

  return (
    <div
      className="absolute right-0 top-full mt-2 z-50 bg-white rounded-2xl border border-border-lighter shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] w-[420px]"
      style={{ fontFamily: "var(--font-body)" }}
    >
      <div className="flex flex-col gap-4 p-6">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <p className="text-text-darker text-[21px] font-bold leading-[26px]" style={{ fontFamily: "var(--font-body)" }}>Filter</p>
          <button
            onClick={onClose}
            className="bg-[#f3f4f6] rounded-full p-1 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 9.33333 9.33333" fill="none">
              <path d={svgFilterPaths.p27be5e00} fill="#606268" />
            </svg>
          </button>
        </div>

        {/* Status */}
        <div className="flex gap-4 w-full">
          <FilterSelectField
            label="Status"
            values={status}
            options={["Diterbitkan", "Tutup", "Draf"]}
            open={openDropdown === "status"}
            onToggle={() => toggleDropdown("status")}
            onToggleOption={(v) => toggleOption(setStatus, v)}
          />
        </div>

        {/* Kategori + Lokasi */}
        <div className="flex gap-4 w-full">
          <FilterSelectField
            label="Kategori Pekerjaan"
            values={kategori}
            options={["Designer", "Software Engineer", "Analyst", "IT Support", "Marketing", "Writer", "Engineer", "Sales", "HR"]}
            open={openDropdown === "kategori"}
            onToggle={() => toggleDropdown("kategori")}
            onToggleOption={(v) => toggleOption(setKategori, v)}
          />
          <FilterSelectField
            label="Lokasi"
            values={lokasi}
            options={["Jakarta", "Surabaya", "Bandung", "Medan", "Bali", "Yogyakarta", "Semarang", "Tangerang", "Remote"]}
            open={openDropdown === "lokasi"}
            onToggle={() => toggleDropdown("lokasi")}
            onToggleOption={(v) => toggleOption(setLokasi, v)}
          />
        </div>

        {/* Mode Kerja + Dibuat Oleh */}
        <div className="flex gap-4 w-full">
          <FilterSelectField
            label="Mode Kerja"
            values={modeKerja}
            options={["On-site", "Remote", "Hybrid"]}
            open={openDropdown === "modeKerja"}
            onToggle={() => toggleDropdown("modeKerja")}
            onToggleOption={(v) => toggleOption(setModeKerja, v)}
          />
          <FilterSelectField
            label="Dibuat Oleh"
            values={dibuatOleh}
            options={["Budi Santoso", "Siti Rahayu", "Ahmad Fauzi", "Dewi Kusuma", "Riko Pratama"]}
            open={openDropdown === "dibuatOleh"}
            onToggle={() => toggleDropdown("dibuatOleh")}
            onToggleOption={(v) => toggleOption(setDibuatOleh, v)}
          />
        </div>

        {/* Footer buttons */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <button onClick={() => { setStatus([]); setKategori([]); setLokasi([]); setModeKerja([]); setDibuatOleh([]); setOpenDropdown(null); }} className="px-3 py-2 text-[13px] font-bold text-brand-primary hover:underline">Reset</button>
          <div className="flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full border-[1.5px] border-border-default text-text-darker font-bold text-base hover:bg-gray-50 transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Kembali
          </button>
          <button
            onClick={() => { onSave({ status, kategori, lokasi, modeKerja, dibuatOleh }); onClose(); }}
            className="bg-brand-primary h-10 px-5 rounded-full text-white font-bold text-base w-[121px] hover:bg-brand-primary-hover transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Simpan
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
