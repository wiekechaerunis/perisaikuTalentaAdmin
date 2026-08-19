import { parse } from "date-fns";

export type JobStatus = "Diterbitkan" | "Tutup" | "Draf";

export const jobStatusStyle: Record<JobStatus, { bg: string; text: string; w?: string }> = {
  Diterbitkan: { bg: "#d1fae5", text: "#065f46" },
  Tutup:       { bg: "#fee2e2", text: "#991b1b", w: "79px" },
  Draf:        { bg: "#f6f4f4", text: "#4c4f59", w: "79px" },
};

export type PromosiState = "aktif" | "nonaktif" | "dipromosikan";

export interface JobPelamarStats { belumDiproses: number | null; terseleksi: number | null; wawancara: number | null }

export const jobRows: {
  id: string; nama: string; kategori: string; lokasi: string; setting: string;
  pelamar: number; kuota: string; tutup: string; status: JobStatus;
  dibuat: string; stats: JobPelamarStats; dibuatOleh: string; promosi: PromosiState;
}[] = [
  { id: "JOB-22", nama: "Product Manager",      kategori: "Product",           lokasi: "Jakarta",    setting: "Hybrid",  pelamar: 34, kuota: "2/10",  dibuat: "5 Jan '26",  tutup: "9 Jan '26",  status: "Diterbitkan", stats: { belumDiproses: 5,  terseleksi: 2, wawancara: 1 }, dibuatOleh: "Wieke Chaerunis", promosi: "aktif" },
  { id: "JOB-21", nama: "Backend Engineer",     kategori: "Software Engineer", lokasi: "Jakarta",    setting: "Remote",  pelamar: 34, kuota: "5/10",  dibuat: "1 Jan '26",  tutup: "6 Jan '26",  status: "Diterbitkan", stats: { belumDiproses: 14, terseleksi: 6, wawancara: 3 }, dibuatOleh: "Wieke Chaerunis", promosi: "aktif" },
  { id: "JOB-20", nama: "Product Designer",     kategori: "Designer",          lokasi: "Jakarta",    setting: "On-site", pelamar: 34, kuota: "3/10",  dibuat: "10 Aug '26", tutup: "10 Sep '26", status: "Diterbitkan", stats: { belumDiproses: 12, terseleksi: 5, wawancara: 3 }, dibuatOleh: "Wieke Chaerunis", promosi: "aktif" },
  { id: "JOB-19", nama: "BE Engineer",           kategori: "Software Engineer", lokasi: "Medan",      setting: "Remote",  pelamar: 34, kuota: "0/10",  dibuat: "1 Aug '26", tutup: "1 Sep '26", status: "Diterbitkan", stats: { belumDiproses: 8,  terseleksi: 2, wawancara: 1 }, dibuatOleh: "Wieke Chaerunis", promosi: "aktif" },
  { id: "JOB-18", nama: "FE Engineer",           kategori: "Software Engineer", lokasi: "Jakarta",    setting: "Hybrid",  pelamar: 34, kuota: "9/10",  dibuat: "1 Jan '26", tutup: "2 Jan '26", status: "Tutup",       stats: { belumDiproses: 0,  terseleksi: 6, wawancara: 4 }, dibuatOleh: "Wieke Chaerunis", promosi: "nonaktif" },
  { id: "JOB-17", nama: "QA Engineer",           kategori: "Software Engineer", lokasi: "Jakarta",    setting: "Hybrid",  pelamar: 34, kuota: "10/10", dibuat: "1 Jan '26", tutup: "2 Jan '26", status: "Draf",        stats: { belumDiproses: null, terseleksi: null, wawancara: null }, dibuatOleh: "Wieke Chaerunis", promosi: "nonaktif" },
  { id: "JOB-16", nama: "Data Analyst",          kategori: "Analyst",           lokasi: "Bandung",    setting: "On-site", pelamar: 34, kuota: "4/10",  dibuat: "20 Jul '26", tutup: "20 Aug '26", status: "Diterbitkan", stats: { belumDiproses: 15, terseleksi: 7, wawancara: 2 }, dibuatOleh: "Wieke Chaerunis", promosi: "aktif" },
  { id: "JOB-15", nama: "UI/UX Designer",        kategori: "Designer",          lokasi: "Yogyakarta", setting: "Remote",  pelamar: 34, kuota: "2/10",  dibuat: "2 Jan '26", tutup: "3 Jan '26", status: "Tutup",       stats: { belumDiproses: 0,  terseleksi: 2, wawancara: 0 }, dibuatOleh: "Wieke Chaerunis", promosi: "nonaktif" },
  { id: "JOB-14", nama: "System Administrator",  kategori: "IT Support",        lokasi: "Surabaya",   setting: "Hybrid",  pelamar: 34, kuota: "1/10",  dibuat: "2 Jan '26", tutup: "3 Jan '26", status: "Draf",        stats: { belumDiproses: null, terseleksi: null, wawancara: null }, dibuatOleh: "Wieke Chaerunis", promosi: "nonaktif" },
  { id: "JOB-13", nama: "Marketing Specialist",  kategori: "Marketing",         lokasi: "Bali",       setting: "On-site", pelamar: 34, kuota: "5/10",  dibuat: "2 Jan '26", tutup: "3 Jan '26", status: "Draf",        stats: { belumDiproses: null, terseleksi: null, wawancara: null }, dibuatOleh: "Wieke Chaerunis", promosi: "nonaktif" },
  { id: "JOB-12", nama: "Content Writer",        kategori: "Writer",            lokasi: "Jakarta",    setting: "Remote",  pelamar: 34, kuota: "7/10",  dibuat: "1 Jul '26", tutup: "1 Aug '26", status: "Diterbitkan", stats: { belumDiproses: 20, terseleksi: 9, wawancara: 4 }, dibuatOleh: "Wieke Chaerunis", promosi: "aktif" },
  { id: "JOB-11", nama: "DevOps Engineer",       kategori: "Engineer",          lokasi: "Jakarta",    setting: "Hybrid",  pelamar: 34, kuota: "3/10",  dibuat: "2 Jan '26", tutup: "3 Jan '26", status: "Tutup",       stats: { belumDiproses: 0,  terseleksi: 3, wawancara: 1 }, dibuatOleh: "Wieke Chaerunis", promosi: "nonaktif" },
  { id: "JOB-10", nama: "Sales Executive",       kategori: "Sales",             lokasi: "Tangerang",  setting: "On-site", pelamar: 34, kuota: "6/10",  dibuat: "7 Aug '26", tutup: "7 Sep '26", status: "Diterbitkan", stats: { belumDiproses: 18, terseleksi: 6, wawancara: 5 }, dibuatOleh: "Wieke Chaerunis", promosi: "aktif" },
  { id: "JOB-09", nama: "Graphic Designer",      kategori: "Designer",          lokasi: "Semarang",   setting: "Remote",  pelamar: 34, kuota: "8/10",  dibuat: "29 Jul '26", tutup: "29 Aug '26", status: "Diterbitkan", stats: { belumDiproses: 10, terseleksi: 4, wawancara: 2 }, dibuatOleh: "Wieke Chaerunis", promosi: "dipromosikan" },
  { id: "JOB-08", nama: "Network Engineer",      kategori: "IT Support",        lokasi: "Surabaya",   setting: "Hybrid",  pelamar: 34, kuota: "3/10",  dibuat: "3 Jan '26", tutup: "4 Jan '26", status: "Tutup",       stats: { belumDiproses: 0,  terseleksi: 1, wawancara: 0 }, dibuatOleh: "Wieke Chaerunis", promosi: "nonaktif" },
  { id: "JOB-07", nama: "HR Manager",            kategori: "HR",                lokasi: "Jakarta",    setting: "Remote",  pelamar: 34, kuota: "4/10",  dibuat: "3 Jan '26", tutup: "4 Jan '26", status: "Draf",        stats: { belumDiproses: null, terseleksi: null, wawancara: null }, dibuatOleh: "Wieke Chaerunis", promosi: "nonaktif" },
];

export function getJobAging(createdAt: string) {
  const created = parse(createdAt.replace("'", ""), "d MMM yy", new Date());
  const days = Math.max(0, Math.floor((Date.now() - created.getTime()) / 86400000));
  if (days <= 7) return { days, label: "0–7 hari", color: "#22c55e" };
  if (days <= 14) return { days, label: "8–14 hari", color: "#facc15" };
  if (days <= 30) return { days, label: "15–30 hari", color: "#f59e0b" };
  return { days, label: ">30 hari", color: "#dc2626" };
}

