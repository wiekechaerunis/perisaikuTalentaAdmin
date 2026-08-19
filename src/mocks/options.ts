// Shared option lists used across onboarding, profile/company, lowongan filters, and post-job.

export const industriOptions = [
  "Teknologi Informasi",
  "Keuangan & Perbankan",
  "Manufaktur",
  "Ritel & E-commerce",
  "Kesehatan",
  "Pendidikan",
  "Konstruksi & Properti",
  "Media & Hiburan",
  "Logistik & Transportasi",
  "Lainnya",
];

export const ukuranOptions = [
  "1–10 karyawan",
  "11–50 karyawan",
  "51–200 karyawan",
  "201–500 karyawan",
  "501–1000 karyawan",
  "> 1000 karyawan",
];

export const kotaOptions = [
  "Jakarta",
  "Surabaya",
  "Bandung",
  "Medan",
  "Semarang",
  "Makassar",
  "Yogyakarta",
  "Denpasar",
  "Palembang",
  "Lainnya",
];

export const jenisEntitasOptions = ["Usaha Perorangan", "CV", "PT", "Lainnya"];

export interface DocRequirement { key: string; label: string; mandatory: boolean }

export const DOCUMENT_REQUIREMENTS_BY_ENTITAS: Record<string, DocRequirement[]> = {
  PT: [
    { key: "nib",  label: "Upload NIB (Nomor Induk Berusaha)",              mandatory: true },
    { key: "siup", label: "Upload SIUP (Surat Izin Usaha Perdagangan)",     mandatory: false },
    { key: "npwp", label: "Upload NPWP Badan Usaha",                        mandatory: false },
  ],
  CV: [
    { key: "nib",  label: "Upload NIB (Nomor Induk Berusaha)",              mandatory: true },
    { key: "siup", label: "Upload SIUP (Surat Izin Usaha Perdagangan)",     mandatory: false },
    { key: "npwp", label: "Upload NPWP Badan Usaha",                        mandatory: false },
  ],
  "Usaha Perorangan": [
    { key: "ktp", label: "Upload KTP Penanggung Jawab", mandatory: true },
  ],
  Lainnya: [
    { key: "dokumen_lain", label: "Upload Dokumen Legal yang Relevan", mandatory: true },
  ],
};

export const PROVINSI_OPTIONS = ["DKI Jakarta", "Jawa Barat", "Jawa Tengah", "Jawa Timur", "Banten", "Bali", "Sumatera Utara", "Sulawesi Selatan", "Yogyakarta"];
