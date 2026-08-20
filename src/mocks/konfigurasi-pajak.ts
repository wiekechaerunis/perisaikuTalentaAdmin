export type TaxConfigCategory = "Pajak" | "Biaya";
export type TaxConfigPerlakuanHarga = "Ditambahkan di luar harga" | "Sudah termasuk di dalam harga";
export type TaxConfigMetode = "Persentase" | "Nominal Tetap";

export const TAX_CONFIG_CATEGORY_OPTIONS: TaxConfigCategory[] = ["Pajak", "Biaya"];
export const TAX_CONFIG_PERLAKUAN_HARGA_OPTIONS: TaxConfigPerlakuanHarga[] = ["Ditambahkan di luar harga", "Sudah termasuk di dalam harga"];
export const TAX_CONFIG_METODE_OPTIONS: TaxConfigMetode[] = ["Persentase", "Nominal Tetap"];

export interface TaxConfigProductOption {
  id: string;
  label: string;
}

export const TAX_CONFIG_PRODUCT_OPTIONS: TaxConfigProductOption[] = [
  { id: "job-posting", label: "Job Posting" },
  { id: "job-highlight", label: "Job Highlight" },
  { id: "sponsored-job", label: "Sponsored Job" },
  { id: "recruiter-seat", label: "Recruiter Seat" },
  { id: "candidate-credit", label: "Candidate Credit" },
  { id: "add-on", label: "Add-on" },
];

export interface TaxConfigRow {
  id: string;
  nama: string;
  kategori: TaxConfigCategory;
  perlakuanHarga: TaxConfigPerlakuanHarga;
  metode: TaxConfigMetode;
  nilai: number;
  tarifDisplay: string;
  tarifNote: string;
  diterapkanPada: string[];
  mulaiBerlaku: string;
  berakhirPada?: string;
  // Raw yyyy-MM-dd values, kept alongside the display strings above so edit forms can prefill <input type="date">.
  tanggalMulaiISO: string;
  tanggalBerakhirISO?: string;
  aktif: boolean;
}

function formatRupiah(value: number): string {
  return `Rp${value.toLocaleString("id-ID")}`;
}

export function buildTarifDisplay(metode: TaxConfigMetode, nilai: number): string {
  return metode === "Persentase" ? `${nilai}%` : formatRupiah(nilai);
}

export function buildTarifNote(perlakuanHarga: TaxConfigPerlakuanHarga): string {
  return perlakuanHarga === "Ditambahkan di luar harga" ? "Diluar harga" : "Termasuk di dalam harga";
}

export function productLabelsToIds(labels: string[]): string[] {
  return labels
    .map(label => TAX_CONFIG_PRODUCT_OPTIONS.find(p => p.label === label)?.id)
    .filter((id): id is string => Boolean(id));
}

export const TAX_CONFIG_ROWS: TaxConfigRow[] = [
  {
    id: "TAX-01",
    nama: "PPN",
    kategori: "Pajak",
    perlakuanHarga: "Ditambahkan di luar harga",
    metode: "Persentase",
    nilai: 11,
    tarifDisplay: "11%",
    tarifNote: "Diluar harga",
    diterapkanPada: ["Job Posting", "Job Slot", "Kandidat Export", "Analitik Lanjutan", "Priority Support"],
    mulaiBerlaku: "1 Jul 2026",
    tanggalMulaiISO: "2026-07-01",
    aktif: true,
  },
  {
    id: "TAX-02",
    nama: "Biaya Layanan Aplikasi",
    kategori: "Biaya",
    perlakuanHarga: "Ditambahkan di luar harga",
    metode: "Nominal Tetap",
    nilai: 50000,
    tarifDisplay: "Rp50.000",
    tarifNote: "Diluar harga",
    diterapkanPada: ["Job Posting", "Job Slot", "Kandidat Export", "Analitik Lanjutan", "Priority Support"],
    mulaiBerlaku: "1 Jul 2026",
    tanggalMulaiISO: "2026-07-01",
    aktif: true,
  },
  {
    id: "TAX-03",
    nama: "Biaya Platform",
    kategori: "Biaya",
    perlakuanHarga: "Sudah termasuk di dalam harga",
    metode: "Persentase",
    nilai: 10,
    tarifDisplay: "10%",
    tarifNote: "Termasuk di dalam harga",
    diterapkanPada: ["Job Posting", "Job Slot", "Kandidat Export", "Analitik Lanjutan", "Priority Support"],
    mulaiBerlaku: "1 Jul 2026",
    tanggalMulaiISO: "2026-07-01",
    aktif: true,
  },
  {
    id: "TAX-04",
    nama: "Biaya Administrasi",
    kategori: "Biaya",
    perlakuanHarga: "Sudah termasuk di dalam harga",
    metode: "Nominal Tetap",
    nilai: 25000,
    tarifDisplay: "Rp25.000",
    tarifNote: "Termasuk di dalam harga",
    diterapkanPada: ["Job Posting", "Job Slot", "Kandidat Export", "Analitik Lanjutan", "Priority Support"],
    mulaiBerlaku: "1 Jul 2026",
    tanggalMulaiISO: "2026-07-01",
    aktif: false,
  },
];

export function addTaxConfigRow(row: Omit<TaxConfigRow, "id">): TaxConfigRow {
  const newRow: TaxConfigRow = { ...row, id: `TAX-${Date.now()}` };
  TAX_CONFIG_ROWS.unshift(newRow);
  return newRow;
}

export function updateTaxConfigRow(id: string, patch: Omit<TaxConfigRow, "id">): void {
  const index = TAX_CONFIG_ROWS.findIndex(r => r.id === id);
  if (index === -1) return;
  TAX_CONFIG_ROWS[index] = { ...patch, id };
}
