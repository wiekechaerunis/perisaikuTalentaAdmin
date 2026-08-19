import { format } from "date-fns";
import { jobRows } from "./lowongan";

export const PIPELINE_STAGES = ["Melamar", "Penyaringan", "Wawancara", "Ditawarkan", "Diterima", "Ditolak"] as const;
export type PipelineStage = typeof PIPELINE_STAGES[number];

// Display wording only — internal stage identifiers (used for logic, data, and drag/drop) stay unchanged.
export const STAGE_DISPLAY_LABEL: Record<PipelineStage, string> = {
  Melamar: "Pelamar",
  Penyaringan: "Screening",
  Wawancara: "Interview",
  Ditawarkan: "Talent Pool",
  Diterima: "Diterima",
  Ditolak: "Ditolak",
};

// Maps the export/filter panel's stage labels (used in Filter Lowongan and the pipeline filter) to internal stage identifiers.
export const EXPORT_STAGE_TO_PIPELINE_STAGE: Record<string, PipelineStage> = {
  "Belum Diproses": "Melamar", "Terseleksi": "Penyaringan", "Interview": "Wawancara",
  "Talent Pool": "Ditawarkan", "Diterima": "Diterima", "Ditolak": "Ditolak",
};

export const PIPELINE_SUMMARY_STAGES: { stage: PipelineStage; bg: string }[] = [
  { stage: "Melamar", bg: "bg-[rgba(43,129,243,0.1)]" },
  { stage: "Penyaringan", bg: "bg-[rgba(14,165,233,0.1)]" },
  { stage: "Wawancara", bg: "bg-[rgba(245,158,11,0.1)]" },
  { stage: "Ditawarkan", bg: "bg-[rgba(139,92,246,0.1)]" },
  { stage: "Diterima", bg: "bg-[rgba(16,185,129,0.1)]" },
];

export interface PipelineJob {
  id: string; nama: string; status: "Diterbitkan" | "Tutup";
  lokasi: string; tipe: string; kategori: string; createdBy?: string;
  counts: Record<PipelineStage, number>;
}

export interface Candidate {
  id: string; name: string; role: string; stage: PipelineStage; appliedDate: string;
  usia?: number;
  rating?: number; interviewSchedule?: string; createdBy?: string;
  interviewDuration?: number; interviewNote?: string; isInvited?: boolean;
  interviewDateTime?: Date; interviewTimezone?: string;
  interviewMethod?: "online" | "offline"; interviewMeetingLink?: string;
  interviewLocationName?: string; interviewAddress?: string; interviewMapsLink?: string;
  lokasi: string; pengalaman: string; ekspektasiGaji: string; company: string;
  rejectionReason?: string;
}

export function getCandidateAge(candidate: Candidate) {
  if (candidate.usia) return candidate.usia;
  const seed = candidate.id.split("").reduce((total, character) => total + character.charCodeAt(0), 0);
  return 24 + (seed % 13);
}

export const PIPELINE_JOBS: PipelineJob[] = [
  { id: "PJ-01", nama: "Backend Engineer",  status: "Diterbitkan", lokasi: "Jakarta, Indonesia", tipe: "Onsite · Full-time", kategori: "Engineering",    counts: { Melamar: 12, Penyaringan: 5, Wawancara: 3, Ditawarkan: 1, Diterima: 1, Ditolak: 8 } },
  { id: "PJ-02", nama: "Product Designer",  status: "Diterbitkan", lokasi: "Jakarta, Indonesia", tipe: "Onsite · Full-time", kategori: "Product",         counts: { Melamar: 8,  Penyaringan: 12,Wawancara: 2, Ditawarkan: 0, Diterima: 0, Ditolak: 3 } },
  { id: "PJ-03", nama: "DevOps Lead",       status: "Tutup",       lokasi: "Jakarta, Indonesia", tipe: "Onsite · Full-time", kategori: "Engineering",    counts: { Melamar: 45, Penyaringan: 20,Wawancara: 8, Ditawarkan: 3, Diterima: 0, Ditolak: 10 } },
  { id: "PJ-04", nama: "HR Generalist",     status: "Diterbitkan", lokasi: "Jakarta, Indonesia", tipe: "Onsite · Full-time", kategori: "Human Resource", counts: { Melamar: 15, Penyaringan: 4, Wawancara: 1, Ditawarkan: 0, Diterima: 0, Ditolak: 2 } },
];

export const CANDIDATES_BY_JOB: Record<string, Candidate[]> = {
  "PJ-01": [
    { id: "C1", name: "Budi Santoso",   role: "Senior Software Engineer", stage: "Melamar",     appliedDate: "12 Jun 2025", rating: 4.2, isInvited: true, lokasi: "Jakarta",    pengalaman: "5 Tahun", ekspektasiGaji: "Rp 15-20 Juta", company: "Gojek" },
    { id: "C2", name: "Ananda Putri",   role: "Backend Developer",        stage: "Melamar",     appliedDate: "13 Jun 2025", rating: 4.0, lokasi: "Bandung",    pengalaman: "3 Tahun", ekspektasiGaji: "Rp 10-12 Juta", company: "Traveloka" },
    { id: "C3", name: "Rizky Pratama",  role: "Software Engineer",        stage: "Penyaringan", appliedDate: "10 Jun 2025", rating: 4.5, lokasi: "Jakarta",    pengalaman: "4 Tahun", ekspektasiGaji: "Rp 12-15 Juta", company: "Tokopedia" },
    { id: "C4", name: "Dewi Lestari",   role: "Full Stack Developer",     stage: "Wawancara",   appliedDate: "8 Jun 2025",  rating: 4.7, interviewSchedule: "10 Jul · 14:00 WIB", interviewDateTime: new Date(Date.UTC(2025, 6, 10, 14, 0) - 7 * 3600000), interviewTimezone: "WIB", lokasi: "Surabaya", pengalaman: "6 Tahun", ekspektasiGaji: "Rp 18-22 Juta", company: "Shopee" },
    { id: "C18", name: "Fajar Nugraha", role: "Backend Engineer",        stage: "Wawancara",   appliedDate: "9 Jun 2025",  rating: 4.3, isInvited: true, lokasi: "Jakarta", pengalaman: "4 Tahun", ekspektasiGaji: "Rp 13-16 Juta", company: "Bukalapak" },
    { id: "C5", name: "Bambang Wijaya", role: "Backend Specialist",       stage: "Ditawarkan",  appliedDate: "5 Jun 2025",  rating: 4.8, lokasi: "Jogja", pengalaman: "7 Tahun", ekspektasiGaji: "Rp 20-25 Juta", company: "Dana" },
    { id: "C13", name: "Farhan Maulana", role: "Backend Engineer",       stage: "Diterima",    appliedDate: "1 Jun 2025",  rating: 4.9, isInvited: true, lokasi: "Jakarta", pengalaman: "5 Tahun", ekspektasiGaji: "Rp 16-19 Juta", company: "OVO" },
    { id: "C14", name: "Siti Nurhaliza", role: "Backend Engineer",       stage: "Ditolak",     appliedDate: "3 Jun 2025",  rating: 3.2, lokasi: "Bandung", pengalaman: "3 Tahun", ekspektasiGaji: "Rp 9-11 Juta", company: "Bibit" },
  ],
  "PJ-02": [
    { id: "C6", name: "Sari Indah",     role: "UI/UX Designer",           stage: "Melamar",     appliedDate: "14 Jun 2025", rating: 4.1, lokasi: "Jakarta", pengalaman: "2 Tahun", ekspektasiGaji: "Rp 8-10 Juta", company: "Blibli" },
    { id: "C20", name: "Rendra Wijaya", role: "UI/UX Designer",          stage: "Melamar",     appliedDate: "15 Jun 2025", rating: 3.8, lokasi: "Jakarta", pengalaman: "1 Tahun", ekspektasiGaji: "Rp 7-9 Juta", company: "Bukalapak" },
    { id: "C21", name: "Nadia Kusuma",  role: "Product Designer",        stage: "Melamar",     appliedDate: "16 Jun 2025", rating: 4.2, lokasi: "Bandung", pengalaman: "3 Tahun", ekspektasiGaji: "Rp 9-11 Juta", company: "Ruangguru" },
    { id: "C22", name: "Yoga Pratama",  role: "UI/UX Designer",          stage: "Melamar",     appliedDate: "17 Jun 2025", rating: 4.0, lokasi: "Jakarta", pengalaman: "2 Tahun", ekspektasiGaji: "Rp 8-10 Juta", company: "Grab" },
    { id: "C7", name: "Eko Prasetyo",   role: "Product Designer",         stage: "Penyaringan", appliedDate: "11 Jun 2025", rating: 4.3, isInvited: true, lokasi: "Jakarta", pengalaman: "4 Tahun", ekspektasiGaji: "Rp 12-14 Juta", company: "Tokopedia" },
    { id: "C8", name: "Fitri Wahyuni",  role: "Senior UX Researcher",     stage: "Wawancara",   appliedDate: "9 Jun 2025",  rating: 4.6, interviewSchedule: "12 Jul · 10:00 WIB", interviewDateTime: new Date(Date.UTC(2025, 6, 12, 10, 0) - 7 * 3600000), interviewTimezone: "WIB", lokasi: "Bandung", pengalaman: "5 Tahun", ekspektasiGaji: "Rp 15-18 Juta", company: "Gojek" },
    { id: "C19", name: "Putri Ayuningtyas", role: "Product Designer", stage: "Wawancara", appliedDate: "10 Jun 2025", rating: 4.2, interviewSchedule: "15 Agu · 13:30 WIB", interviewDateTime: new Date(Date.UTC(2026, 7, 15, 13, 30) - 7 * 3600000), interviewTimezone: "WIB", interviewDuration: 45, interviewMethod: "offline", interviewLocationName: "Perisaiku Office", interviewAddress: "Jl. Kemang Raya No. 10, Jakarta Selatan", interviewMapsLink: "https://maps.google.com/?q=Kemang+Raya+Jakarta+Selatan", lokasi: "Jakarta", pengalaman: "3 Tahun", ekspektasiGaji: "Rp 10-12 Juta", company: "OVO" },
    { id: "C20", name: "Raka Mahendra", role: "UI Designer", stage: "Wawancara", appliedDate: "11 Jun 2025", rating: 4.4, lokasi: "Tangerang", pengalaman: "4 Tahun", ekspektasiGaji: "Rp 12-15 Juta", company: "Traveloka" },
    { id: "C15", name: "Galih Pratomo", role: "Product Designer",        stage: "Ditolak",     appliedDate: "2 Jun 2025",  rating: 3.5, lokasi: "Semarang", pengalaman: "2 Tahun", ekspektasiGaji: "Rp 7-9 Juta", company: "Ruangguru" },
  ],
  "PJ-03": [
    { id: "C9",  name: "Hendra Kusuma",  role: "DevOps Engineer",          stage: "Melamar",     appliedDate: "15 Jun 2025", rating: 3.9, isInvited: true, lokasi: "Jakarta", pengalaman: "4 Tahun", ekspektasiGaji: "Rp 14-17 Juta", company: "Traveloka" },
    { id: "C10", name: "Maya Puspita",   role: "Infrastructure Engineer",  stage: "Penyaringan", appliedDate: "12 Jun 2025", rating: 4.1, lokasi: "Bandung", pengalaman: "3 Tahun", ekspektasiGaji: "Rp 11-13 Juta", company: "Dana" },
    { id: "C16", name: "Yusuf Ramadhan", role: "DevOps Engineer",         stage: "Ditolak",     appliedDate: "4 Jun 2025",  rating: 3.0, lokasi: "Jakarta", pengalaman: "2 Tahun", ekspektasiGaji: "Rp 9-11 Juta", company: "Bukalapak" },
  ],
  "PJ-04": [
    { id: "C11", name: "Andi Saputra",   role: "HR Specialist",            stage: "Melamar",     appliedDate: "16 Jun 2025", rating: 4.0, lokasi: "Jakarta", pengalaman: "3 Tahun", ekspektasiGaji: "Rp 8-10 Juta", company: "Shopee" },
    { id: "C12", name: "Rina Kartika",   role: "HR Generalist",            stage: "Penyaringan", appliedDate: "13 Jun 2025", rating: 4.4, isInvited: true, lokasi: "Bandung", pengalaman: "5 Tahun", ekspektasiGaji: "Rp 12-14 Juta", company: "Gojek" },
    { id: "C17", name: "Melati Sari",    role: "HR Specialist",            stage: "Ditolak",     appliedDate: "6 Jun 2025",  rating: 3.3, lokasi: "Jakarta", pengalaman: "2 Tahun", ekspektasiGaji: "Rp 7-9 Juta", company: "Blibli" },
  ],
};

// Jobs outside CANDIDATES_BY_JOB (i.e. not one of the original 4 pipeline jobs) still show real
// stage counts on the Lowongan list (job.stats), but have no seeded candidate records. Generate
// placeholder candidates matching those counts so their pipeline board isn't misleadingly empty.
export const FALLBACK_CANDIDATE_NAMES = [
  "Ananda Putri", "Rizky Pratama", "Dewi Lestari", "Bambang Wijaya", "Sari Indah",
  "Eko Prasetyo", "Fitri Wahyuni", "Hendra Kusuma", "Maya Puspita", "Andi Saputra",
  "Rina Kartika", "Yoga Pratama", "Nadia Kusuma", "Galih Pratomo", "Raka Mahendra",
  "Siti Nurhaliza", "Yusuf Ramadhan", "Melati Sari", "Putri Ayuningtyas", "Fajar Nugraha",
];
export const FALLBACK_CANDIDATE_COMPANIES = ["Gojek", "Tokopedia", "Traveloka", "Shopee", "Bukalapak", "Dana", "OVO", "Grab", "Blibli", "Ruangguru"];

export function generateFallbackCandidates(jobRow: typeof jobRows[number]): Candidate[] {
  const stageCounts: { stage: PipelineStage; count: number }[] = [
    { stage: "Melamar", count: jobRow.stats.belumDiproses ?? 0 },
    { stage: "Penyaringan", count: jobRow.stats.terseleksi ?? 0 },
    { stage: "Wawancara", count: jobRow.stats.wawancara ?? 0 },
  ];
  const candidates: Candidate[] = [];
  let seq = 0;
  for (const { stage, count } of stageCounts) {
    for (let i = 0; i < count; i++) {
      candidates.push({
        id: `${jobRow.id}-C${seq + 1}`,
        name: FALLBACK_CANDIDATE_NAMES[seq % FALLBACK_CANDIDATE_NAMES.length],
        role: jobRow.nama,
        stage,
        appliedDate: format(new Date(2026, 0, 5 + seq), "d MMM yyyy"),
        rating: Math.round((3.5 + (seq % 5) * 0.3) * 10) / 10,
        isInvited: seq % 3 === 2,
        lokasi: jobRow.lokasi,
        pengalaman: `${2 + (seq % 5)} Tahun`,
        ekspektasiGaji: "Rp 10-15 Juta",
        company: FALLBACK_CANDIDATE_COMPANIES[seq % FALLBACK_CANDIDATE_COMPANIES.length],
      });
      seq++;
    }
  }
  return candidates;
}

export const ACTIVITY_LOG = [
  { color: "#10B981", title: "Kandidat dibuat",                                            sub: "Created by Aditya Rahardjo",  date: "15 Jun 2025, 09:30", last: false },
  { color: "#2B81F3", title: "Dipindahkan ke stage Interview HR",                          sub: "Moved by Aditya Rahardjo",   date: "16 Jun 2025, 14:15", last: false },
  { color: "#F59E0B", title: `Menambahkan komentar: "Pengalaman di Gojek sangat relevan dengan stack kita."`, sub: "Comment by Aditya Rahardjo", date: "16 Jun 2025, 15:00", last: false },
  { color: "#2B81F3", title: "Dipindahkan ke stage Technical Test",                        sub: "Moved by Sarah Wijaya",      date: "18 Jun 2025, 10:00", last: false },
  { color: "#F59E0B", title: `Menambahkan komentar: "Skill system design sangat solid, bisa lanjut interview."`, sub: "Comment by Adityo", date: "20 Jun 2025, 11:30", last: false },
  { color: "#2B81F3", title: "Dipindahkan ke stage Final Interview",                       sub: "Moved by Sarah Wijaya",      date: "22 Jun 2025, 09:00", last: false },
  { color: "#2B81F3", title: "Dipindahkan ke stage Offering",                              sub: "Moved by HR Manager",        date: "25 Jun 2025, 16:45", last: true },
];

export const STAGE_BADGE: Record<PipelineStage, { bg: string; text: string }> = {
  Melamar:     { bg: "bg-[#f1f5f9]",  text: "text-[#475569]" },
  Penyaringan: { bg: "bg-[rgba(14,165,233,0.1)]", text: "text-[#383b46]" },
  Wawancara:   { bg: "bg-[#fef3c7]",  text: "text-[#92400e]" },
  Ditawarkan:  { bg: "bg-[#d1fae5]",  text: "text-[#065f46]" },
  Diterima:    { bg: "bg-[#dbeafe]",  text: "text-[#1e40af]" },
  Ditolak:     { bg: "bg-[#ffe4e6]",  text: "text-[#f83a1e]" },
};

export const STAGE_DROPDOWN_CHIP_BG: Record<PipelineStage, string> = {
  Melamar: "rgba(43,129,243,0.1)",
  Penyaringan: "rgba(14,165,233,0.1)",
  Wawancara: "rgba(245,158,11,0.1)",
  Ditawarkan: "rgba(139,92,246,0.1)",
  Diterima: "rgba(16,185,129,0.1)",
  Ditolak: "rgba(248,58,30,0.1)",
};

export const KANBAN_DRAG_TYPE = "CANDIDATE_CARD";
export const DEFAULT_CREATED_BY = "Wieke";

