export type EmployerVerificationStatus = "pending" | "verified" | "revision";

export const EMPLOYER_STATUS_STYLE: Record<EmployerVerificationStatus, { label: string; bg: string; text: string; weight: string }> = {
  pending:  { label: "Menunggu Persetujuan", bg: "bg-[#fff7cd]", text: "text-[#d19400]", weight: "font-medium" },
  verified: { label: "Terverifikasi",        bg: "bg-[#d1fae5]", text: "text-[#065f46]", weight: "font-medium" },
  revision: { label: "Request Revisi",       bg: "bg-[#f6f4f4]", text: "text-[#4c4f59]", weight: "font-semibold" },
};

export interface EmployerVerificationRow {
  id: string;
  nama: string;
  industri: string;
  kota: string;
  jenisEntitas: string;
  tanggalSubmit: string;
  sla: string;
  slaColor: string;
  status: EmployerVerificationStatus;
  alamat: string;
  website: string;
  ukuranPerusahaan: string;
  deskripsi: string[];
  revisionNote?: string;
}

const DEFAULT_COMPANY_DESKRIPSI = [
  "Perusahaan ini bergerak di bidang usahanya dengan komitmen membangun solusi digital masa depan. Kami percaya bahwa kekuatan talenta terbaik adalah kunci utama dalam menghadirkan platform kelas dunia yang bermakna bagi jutaan pengguna di Indonesia.",
  "Fokus kami saat ini meliputi pengembangan operasional berskala besar, integrasi teknologi terbaru, serta peningkatan efisiensi untuk para mitra kami.",
];

export const EMPLOYER_VERIFICATION_ROWS: EmployerVerificationRow[] = [
  { id: "EMP-01", nama: "PT Nusantara Logistik", industri: "Logistik",            kota: "Surabaya",   jenisEntitas: "PT", tanggalSubmit: "27 Jul 2026, 08:15", sla: "Lewat 4Jam",      slaColor: "text-[#f83a1e]", status: "pending",  alamat: "Jl. Rungkut Industri No. 12, Surabaya", website: "www.nusantaralogistik.co.id", ukuranPerusahaan: "100 - 500 karyawan", deskripsi: DEFAULT_COMPANY_DESKRIPSI },
  { id: "EMP-02", nama: "CV Sumber Makmur",      industri: "F&B",                 kota: "Semarang",   jenisEntitas: "CV", tanggalSubmit: "27 Jul 2026, 14:30", sla: "2Jam 15m lagi",   slaColor: "text-[#d19400]", status: "pending",  alamat: "Jl. Pandanaran No. 45, Semarang", website: "www.sumbermakmur.co.id", ukuranPerusahaan: "10 - 50 karyawan", deskripsi: DEFAULT_COMPANY_DESKRIPSI },
  { id: "EMP-03", nama: "PT Digital Solusi",     industri: "Teknologi Informasi",  kota: "Jakarta",    jenisEntitas: "PT", tanggalSubmit: "28 Jul 2026, 06:00", sla: "10 jam lagi",     slaColor: "text-[#3e9248]", status: "pending",  alamat: "Jl. Sudirman No. 123, Jakarta", website: "www.digitalsolusi.co.id", ukuranPerusahaan: "100 - 500 karyawan", deskripsi: DEFAULT_COMPANY_DESKRIPSI },
  { id: "EMP-04", nama: "PT Agro Sentosa",       industri: "Agrikultur",           kota: "Medan",      jenisEntitas: "PT", tanggalSubmit: "28 Jul 2026, 09:45", sla: "13 jam lagi",     slaColor: "text-[#3e9248]", status: "pending",  alamat: "Jl. Gatot Subroto No. 88, Medan", website: "www.agrosentosa.co.id", ukuranPerusahaan: "50 - 100 karyawan", deskripsi: DEFAULT_COMPANY_DESKRIPSI },
  { id: "EMP-05", nama: "PT Karya Konstruksi",   industri: "Konstruksi",           kota: "Bandung",    jenisEntitas: "PT", tanggalSubmit: "28 Jul 2026, 22:00", sla: "18 jam lagi",     slaColor: "text-[#3e9248]", status: "pending",  alamat: "Jl. Asia Afrika No. 66, Bandung", website: "www.karyakonstruksi.co.id", ukuranPerusahaan: "100 - 500 karyawan", deskripsi: DEFAULT_COMPANY_DESKRIPSI },
  { id: "EMP-06", nama: "PT Maju Bersama",       industri: "Manufaktur",           kota: "Bekasi",     jenisEntitas: "PT", tanggalSubmit: "25 Jul 2026, 10:00", sla: "-",               slaColor: "text-[#777980]", status: "verified", alamat: "Jl. Ahmad Yani No. 21, Bekasi", website: "www.majubersama.co.id", ukuranPerusahaan: "500 - 1000 karyawan", deskripsi: DEFAULT_COMPANY_DESKRIPSI },
  { id: "EMP-07", nama: "PT Indo Kreatif",       industri: "Media & Desain",       kota: "Yogyakarta", jenisEntitas: "PT", tanggalSubmit: "26 Jul 2026, 11:20", sla: "-",               slaColor: "text-[#777980]", status: "verified", alamat: "Jl. Malioboro No. 9, Yogyakarta", website: "www.indokreatif.co.id", ukuranPerusahaan: "10 - 50 karyawan", deskripsi: DEFAULT_COMPANY_DESKRIPSI },
  { id: "EMP-08", nama: "CV Rasa Nusantara",     industri: "F&B",                  kota: "Bali",       jenisEntitas: "CV", tanggalSubmit: "26 Jul 2026, 16:45", sla: "-",               slaColor: "text-[#777980]", status: "verified", alamat: "Jl. Sunset Road No. 33, Bali", website: "www.rasanusantara.co.id", ukuranPerusahaan: "10 - 50 karyawan", deskripsi: DEFAULT_COMPANY_DESKRIPSI },
  { id: "EMP-09", nama: "PT Edu Prima",          industri: "Pendidikan",           kota: "Malang",     jenisEntitas: "PT", tanggalSubmit: "27 Jul 2026, 17:00", sla: "-",               slaColor: "text-[#777980]", status: "revision", alamat: "Jl. Ijen No. 15, Malang", website: "www.eduprima.co.id", ukuranPerusahaan: "50 - 100 karyawan", deskripsi: DEFAULT_COMPANY_DESKRIPSI, revisionNote: "Dokumen NIB tidak sesuai dengan data perusahaan yang terdaftar. Mohon upload ulang dokumen yang valid." },
  { id: "EMP-10", nama: "PT Sehat Sejahtera",    industri: "Kesehatan",            kota: "Makassar",   jenisEntitas: "PT", tanggalSubmit: "28 Jul 2026, 11:30", sla: "-",               slaColor: "text-[#777980]", status: "verified", alamat: "Jl. Pettarani No. 5, Makassar", website: "www.sehatsejahtera.co.id", ukuranPerusahaan: "100 - 500 karyawan", deskripsi: DEFAULT_COMPANY_DESKRIPSI },
];

export const EMPLOYER_TABLE_COLUMNS = ["Nama Perusahaan", "Industri", "Kota", "Jenis Entitas", "Tanggal Submit", "SLA", "Status", "Aksi"];
export const EMPLOYER_TABLE_GRID_COLS = "grid-cols-[1.6fr_1.3fr_0.9fr_1fr_1.5fr_1fr_1.2fr_90px]";

export interface EmployerFilterValues {
  status: EmployerVerificationStatus | "";
  industri: string;
  kota: string;
}

export const EMPTY_EMPLOYER_FILTERS: EmployerFilterValues = { status: "", industri: "", kota: "" };
export const DEFAULT_EMPLOYER_FILTERS: EmployerFilterValues = { status: "pending", industri: "", kota: "" };

export const EMPLOYER_STATUS_OPTIONS: { value: EmployerVerificationStatus | ""; label: string }[] = [
  { value: "", label: "Semua status" },
  { value: "pending", label: "Menunggu Persetujuan" },
  { value: "verified", label: "Terverifikasi" },
  { value: "revision", label: "Request Revisi" },
];

export const EMPLOYER_INDUSTRI_OPTIONS = [...new Set(EMPLOYER_VERIFICATION_ROWS.map(row => row.industri))];
export const EMPLOYER_KOTA_OPTIONS = [...new Set(EMPLOYER_VERIFICATION_ROWS.map(row => row.kota))];
