export type PlatformUserStatus = "aktif" | "suspend" | "ban";
export type PlatformUserTipe = "Super Admin" | "Multi-Admin";

export const USER_STATUS_STYLE: Record<PlatformUserStatus, { label: string; text: string }> = {
  aktif:   { label: "Aktif",   text: "text-[#21b873]" },
  suspend: { label: "Suspend", text: "text-[#f29e0a]" },
  ban:     { label: "Ban",     text: "text-[#e83838]" },
};

export const USER_TIPE_STYLE: Record<PlatformUserTipe, { bg: string; text: string }> = {
  "Super Admin": { bg: "bg-[#fff0eb]", text: "text-[#ff6b35]" },
  "Multi-Admin": { bg: "bg-[#e6edff]", text: "text-[#0052ff]" },
};

export type ActivityLogColor = "red" | "green" | "yellow" | "blue" | "purple";

export const ACTIVITY_LOG_DOT_COLOR: Record<ActivityLogColor, string> = {
  red: "bg-[#e83838]",
  green: "bg-[#21b873]",
  yellow: "bg-[#f29e0a]",
  blue: "bg-[#2b81f3]",
  purple: "bg-[#8b5cf6]",
};

export interface ActivityLogEntry {
  action: string;
  color: ActivityLogColor;
  actor: string;
  reason?: string;
  date: string;
}

export interface PlatformUserRow {
  id: string;
  nama: string;
  email: string;
  tipe: PlatformUserTipe;
  tanggalDaftar: string;
  status: PlatformUserStatus;
  perusahaan: string;
  telepon: string;
  role: string;
  activityLog: ActivityLogEntry[];
}

// Seed history is generated from each user's current status so every row has a plausible
// timeline, including a "Suspend Akun" (yellow) entry — the one action missing from the
// Figma reference, per the user's note.
function buildActivityLog(status: PlatformUserStatus, tanggalDaftar: string): ActivityLogEntry[] {
  const base: ActivityLogEntry[] = [
    { action: "Akun Dibuat", color: "green", actor: "Sistem", date: tanggalDaftar },
  ];
  if (status === "suspend") {
    base.unshift({ action: "Suspend Akun", color: "yellow", actor: "Budi Santoso", reason: "Aktivitas mencurigakan terdeteksi pada akun", date: "22 Jul 2026, 13:30" });
  }
  if (status === "ban") {
    base.unshift({ action: "Ban Akun", color: "red", actor: "Budi Santoso", reason: "Pelanggaran ketentuan layanan berulang", date: "22 Jul 2026, 13:30" });
  }
  return base;
}

export const PLATFORM_USER_ROWS: PlatformUserRow[] = [
  { id: "USR-01", nama: "Dewi Kartika",     email: "dewi@majubersama.com",    tipe: "Super Admin", tanggalDaftar: "27 Jul 2026, 08:15", status: "aktif",   perusahaan: "PT Maju Bersama",  telepon: "+62 812 3456 7891", role: "Employeer" },
  { id: "USR-02", nama: "Andi Prasetyo",    email: "andi@majubersama.com",    tipe: "Multi-Admin", tanggalDaftar: "27 Jul 2026, 08:15", status: "aktif",   perusahaan: "PT Maju Bersama",  telepon: "+62 812 3456 7892", role: "Employeer" },
  { id: "USR-03", nama: "Siti Rahmawati",   email: "siti@majubersama.com",    tipe: "Multi-Admin", tanggalDaftar: "27 Jul 2026, 08:15", status: "suspend", perusahaan: "PT Maju Bersama",  telepon: "+62 812 3456 7893", role: "Employeer" },
  { id: "USR-04", nama: "Budi Santoso",     email: "budi@karyamandiri.com",   tipe: "Super Admin", tanggalDaftar: "27 Jul 2026, 08:15", status: "aktif",   perusahaan: "PT Karya Mandiri", telepon: "+62 812 3456 7890", role: "Employeer" },
  { id: "USR-05", nama: "Rina Marlina",     email: "rina@karyamandiri.com",   tipe: "Multi-Admin", tanggalDaftar: "27 Jul 2026, 08:15", status: "ban",     perusahaan: "PT Karya Mandiri", telepon: "+62 812 3456 7894", role: "Employeer" },
  { id: "USR-06", nama: "Fajar Hidayat",    email: "fajar@karyamandiri.com",  tipe: "Multi-Admin", tanggalDaftar: "27 Jul 2026, 08:15", status: "aktif",   perusahaan: "PT Karya Mandiri", telepon: "+62 812 3456 7895", role: "Employeer" },
  { id: "USR-07", nama: "Mega Putri",       email: "mega@karyamandiri.com",   tipe: "Multi-Admin", tanggalDaftar: "27 Jul 2026, 08:15", status: "suspend", perusahaan: "PT Karya Mandiri", telepon: "+62 812 3456 7896", role: "Employeer" },
  { id: "USR-08", nama: "Rizky Firmansyah", email: "rizky@bintangtimur.com",  tipe: "Super Admin", tanggalDaftar: "27 Jul 2026, 08:15", status: "aktif",   perusahaan: "PT Bintang Timur", telepon: "+62 812 3456 7897", role: "Employeer" },
  { id: "USR-09", nama: "Wulan Sari",       email: "wulan@bintangtimur.com",  tipe: "Multi-Admin", tanggalDaftar: "27 Jul 2026, 08:15", status: "ban",     perusahaan: "PT Bintang Timur", telepon: "+62 812 3456 7898", role: "Employeer" },
  { id: "USR-10", nama: "Hendra Wijaya",    email: "hendra@bintangtimur.com", tipe: "Multi-Admin", tanggalDaftar: "27 Jul 2026, 08:15", status: "aktif",   perusahaan: "PT Bintang Timur", telepon: "+62 812 3456 7899", role: "Employeer" },
].map(row => ({ ...row, activityLog: buildActivityLog(row.status, row.tanggalDaftar) }));

// Manajemen Pengguna list and detail pages each keep their own local React state seeded from
// this array. Mutating the shared row in place (instead of only updating local state) keeps
// status/activity changes visible when navigating between the two pages.
export function applyUserStatusChange(id: string, status: PlatformUserStatus, logEntry?: Omit<ActivityLogEntry, "date"> & { date?: string }) {
  const row = PLATFORM_USER_ROWS.find(r => r.id === id);
  if (!row) return;
  row.status = status;
  if (logEntry) row.activityLog = [{ date: "Baru saja", ...logEntry }, ...row.activityLog];
}

export function appendUserActivityLog(id: string, entry: Omit<ActivityLogEntry, "date"> & { date?: string }) {
  const row = PLATFORM_USER_ROWS.find(r => r.id === id);
  if (!row) return;
  row.activityLog = [{ date: "Baru saja", ...entry }, ...row.activityLog];
}

// Prototype-only stand-in for a real reset-password email call. Always succeeds by default
// per product ask; the forceFail param exists so the failure modal/logic stays exercisable.
export function simulateSendResetPasswordEmail(forceFail = false): Promise<boolean> {
  return new Promise(resolve => setTimeout(() => resolve(!forceFail), 600));
}

export interface UserFilterValues {
  status: PlatformUserStatus | "";
  tipe: PlatformUserTipe | "";
  perusahaan: string;
  startDate: string;
  endDate: string;
}

export const EMPTY_USER_FILTERS: UserFilterValues = { status: "", tipe: "", perusahaan: "", startDate: "", endDate: "" };

export const USER_STATUS_OPTIONS: { value: PlatformUserStatus | ""; label: string }[] = [
  { value: "", label: "Semua status" },
  { value: "aktif", label: "Aktif" },
  { value: "suspend", label: "Suspend" },
  { value: "ban", label: "Ban" },
];

export const USER_TIPE_OPTIONS: { value: PlatformUserTipe | ""; label: string }[] = [
  { value: "", label: "Semua tipe" },
  { value: "Super Admin", label: "Super Admin" },
  { value: "Multi-Admin", label: "Multi-Admin" },
];

export const USER_PERUSAHAAN_OPTIONS = [...new Set(PLATFORM_USER_ROWS.map(row => row.perusahaan))];
