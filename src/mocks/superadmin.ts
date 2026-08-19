export type EmployerVerificationStatus = "pending" | "verified" | "rejected" | "revision";

export const EMPLOYER_STATUS_STYLE: Record<EmployerVerificationStatus, { label: string; bg: string; text: string; weight: string }> = {
  pending:  { label: "Menunggu Persetujuan", bg: "bg-[#fff7cd]", text: "text-[#d19400]", weight: "font-medium" },
  verified: { label: "Terverifikasi",        bg: "bg-[#d1fae5]", text: "text-[#065f46]", weight: "font-medium" },
  rejected: { label: "Ditolak",              bg: "bg-[#fee2e2]", text: "text-[#991b1b]", weight: "font-semibold" },
  revision: { label: "Request Revisi",       bg: "bg-[#f6f4f4]", text: "text-[#4c4f59]", weight: "font-semibold" },
};

export interface EmployerVerificationRow {
  nama: string;
  industri: string;
  kota: string;
  jenisEntitas: string;
  tanggalSubmit: string;
  sla: string;
  slaColor: string;
  status: EmployerVerificationStatus;
}

export const EMPLOYER_VERIFICATION_ROWS: EmployerVerificationRow[] = [
  { nama: "PT Nusantara Logistik", industri: "Logistik",            kota: "Surabaya",   jenisEntitas: "PT", tanggalSubmit: "27 Jul 2026, 08:15", sla: "Lewat 4Jam",      slaColor: "text-[#f83a1e]", status: "pending" },
  { nama: "CV Sumber Makmur",      industri: "F&B",                 kota: "Semarang",   jenisEntitas: "CV", tanggalSubmit: "27 Jul 2026, 14:30", sla: "2Jam 15m lagi",   slaColor: "text-[#d19400]", status: "pending" },
  { nama: "PT Digital Solusi",     industri: "Teknologi Informasi",  kota: "Jakarta",    jenisEntitas: "PT", tanggalSubmit: "28 Jul 2026, 06:00", sla: "10 jam lagi",     slaColor: "text-[#3e9248]", status: "pending" },
  { nama: "PT Agro Sentosa",       industri: "Agrikultur",           kota: "Medan",      jenisEntitas: "PT", tanggalSubmit: "28 Jul 2026, 09:45", sla: "13 jam lagi",     slaColor: "text-[#3e9248]", status: "pending" },
  { nama: "PT Karya Konstruksi",   industri: "Konstruksi",           kota: "Bandung",    jenisEntitas: "PT", tanggalSubmit: "28 Jul 2026, 22:00", sla: "18 jam lagi",     slaColor: "text-[#3e9248]", status: "pending" },
  { nama: "PT Maju Bersama",       industri: "Manufaktur",           kota: "Bekasi",     jenisEntitas: "PT", tanggalSubmit: "25 Jul 2026, 10:00", sla: "-",               slaColor: "text-[#777980]", status: "verified" },
  { nama: "PT Indo Kreatif",       industri: "Media & Desain",       kota: "Yogyakarta", jenisEntitas: "PT", tanggalSubmit: "26 Jul 2026, 11:20", sla: "-",               slaColor: "text-[#777980]", status: "verified" },
  { nama: "CV Rasa Nusantara",     industri: "F&B",                  kota: "Bali",       jenisEntitas: "CV", tanggalSubmit: "26 Jul 2026, 16:45", sla: "-",               slaColor: "text-[#777980]", status: "rejected" },
  { nama: "PT Edu Prima",          industri: "Pendidikan",           kota: "Malang",     jenisEntitas: "PT", tanggalSubmit: "27 Jul 2026, 17:00", sla: "-",               slaColor: "text-[#777980]", status: "revision" },
  { nama: "PT Sehat Sejahtera",    industri: "Kesehatan",            kota: "Makassar",   jenisEntitas: "PT", tanggalSubmit: "28 Jul 2026, 11:30", sla: "-",               slaColor: "text-[#777980]", status: "verified" },
];

export const EMPLOYER_TABLE_COLUMNS = ["Nama Perusahaan", "Industri", "Kota", "Jenis Entitas", "Tanggal Submit", "SLA", "Status", "Aksi"];
export const EMPLOYER_TABLE_GRID_COLS = "grid-cols-[1.6fr_1.3fr_0.9fr_1fr_1.5fr_1fr_1.2fr_90px]";

export interface EmployerFilterValues {
  status: EmployerVerificationStatus | "";
  industri: string;
  kota: string;
}

export const EMPTY_EMPLOYER_FILTERS: EmployerFilterValues = { status: "", industri: "", kota: "" };

export const EMPLOYER_STATUS_OPTIONS: { value: EmployerVerificationStatus | ""; label: string }[] = [
  { value: "", label: "Semua status" },
  { value: "pending", label: "Menunggu Persetujuan" },
  { value: "verified", label: "Terverifikasi" },
  { value: "rejected", label: "Ditolak" },
  { value: "revision", label: "Request Revisi" },
];

export const EMPLOYER_INDUSTRI_OPTIONS = [...new Set(EMPLOYER_VERIFICATION_ROWS.map(row => row.industri))];
export const EMPLOYER_KOTA_OPTIONS = [...new Set(EMPLOYER_VERIFICATION_ROWS.map(row => row.kota))];
