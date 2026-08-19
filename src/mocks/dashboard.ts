// Sample data backing the Dashboard page.

export const kpiCards = [
  { label: "Total Lowongan", value: 24, suffix: "", openLowongan: true, breakdown: [
    { label: "Aktif", value: 14, color: "#2b81f3" },
    { label: "Tidak aktif", value: 6, color: "#6f9cff" },
    { label: "Draft", value: 4, color: "#c4d6ff" },
  ] },
  { label: "Total Pelamar", value: 1482, suffix: "", breakdown: [
    { label: "Belum diproses", value: 127, color: "#2b81f3" },
    { label: "Terseleksi", value: 640, color: "#3475ff" },
    { label: "Interview", value: 280, color: "#6697ff" },
    { label: "Talent Pool", value: 96, color: "#8db2ff" },
    { label: "Diterima", value: 42, color: "#b1caff" },
    { label: "Ditolak", value: 297, color: "#d5e2ff" },
  ] },
  { label: "Kuota Monetasi", value: 127, suffix: "", breakdown: [
    { label: "Terpakai", value: 73, color: "#8db2ff" },
    { label: "Tersisa", value: 127, color: "#2b81f3" },
  ] },
  { label: "Waktu Hiring Rata-rata", value: 18, suffix: " Hari", description: "Rata-rata waktu dari posting hingga hire." },
];

export const popularJobs = [
  { rank: 1, title: "Backend Engineer", date: "12/01/2026", pct: 0.72, count: 34, closes: "5 hari lagi" },
  { rank: 2, title: "Product Designer", date: "12/01/2026", pct: 0.72, count: 27, closes: "12 hari lagi" },
  { rank: 3, title: "Sales Executive", date: "12/01/2026", pct: 0.72, count: 19, closes: "3 hari lagi" },
  { rank: 4, title: "Data Analyst", date: "12 Jan '26", pct: 0.81, count: 12, closes: "18 hari lagi" },
  { rank: 5, title: "Product Manager", date: "12/01/2026", pct: 0.54, count: 8, closes: "9 hari lagi" },
];

export const statusBadge: Record<string, { bg: string; text: string; label: string }> = {
  Penyaringan: { bg: "#dbeafe", text: "#1e40af", label: "Screening" },
  Wawancara: { bg: "#fef3c7", text: "#92400e", label: "Interview" },
  Ditawarkan: { bg: "#d1fae5", text: "#065f46", label: "Talent Pool" },
  Ditolak: { bg: "#fee2e2", text: "#991b1b", label: "Ditolak" },
};

export const recentApplicants = [
  { name: "Ananda Putri", umur: 30, role: "Manajer Produk Senior", date: "12 Okt 2023", status: "Penyaringan", jobId: "PJ-01", candidateId: "C2", lokasi: "Bandung", rating: 4.0, company: "Traveloka", gaji: "Rp 10-12 Juta / bulan", skills: ["Node.js", "TypeScript", "SQL", "REST API"] },
  { name: "Rizky Pratama", umur: 28, role: "Insinyur Backend", date: "11 Okt 2023", status: "Wawancara", jobId: "PJ-01", candidateId: "C3", lokasi: "Jakarta", rating: 4.5, company: "Tokopedia", gaji: "Rp 12-15 Juta / bulan", skills: ["Go", "Java", "Docker", "Kubernetes"] },
  { name: "Dewi Lestari", umur: 35, role: "Direktur Kreatif", date: "10 Okt 2023", status: "Ditawarkan", jobId: "PJ-01", candidateId: "C4", lokasi: "Surabaya", rating: 4.7, company: "Shopee", gaji: "Rp 18-22 Juta / bulan", skills: ["React", "Node.js", "PostgreSQL", "AWS"] },
  { name: "Bambang Wijaya", umur: 32, role: "Pengembang Full Stack", date: "09 Okt 2023", status: "Ditolak", jobId: "PJ-01", candidateId: "C5", lokasi: "Jogja", rating: 4.8, company: "Dana", gaji: "Rp 20-25 Juta / bulan", skills: ["Java", "Spring Boot", "Microservices", "Redis"] },
];

export const interviews = [
  { name: "Aditya Wirawan", role: "Desainer UI/UX", time: "10:00 AM", date: "1 Jul '26", method: "online" as const, actionLabel: "Buka meeting", actionUrl: "https://meet.google.com/abc-defg-hij" },
  { name: "Siti Aminah", role: "Insinyur DevOps", time: "02:30 PM", date: "1 Jul '26", method: "offline" as const, actionLabel: "Perisaiku Office", actionUrl: "https://maps.google.com/?q=Kemang+Raya+Jakarta+Selatan" },
  { name: "Fajar Ramadhan", role: "Pemimpin Penjualan", time: "04:00 PM", date: "1 Jul '26", method: "online" as const, actionLabel: "Buka meeting", actionUrl: "https://meet.google.com/xyz-wxyz-qrs" },
];

export const MONTH_ABBR_TO_NUM: Record<string, string> = {
  Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
  Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12",
};

export const DASHBOARD_EMPTY_STATS = [
  { label: "Total Lowongan", value: "0", tooltip: "Jumlah seluruh lowongan tanpa membedakan statusnya." },
  { label: "Total Pelamar", value: "0", tooltip: "Total seluruh pelamar yang masuk ke semua lowongan sejak awal." },
  { label: "Kuota Monetasi", value: "0", tooltip: "Sisa kuota Talent Search yang dapat digunakan bulan ini." },
  { label: "Waktu Hiring Rata-rata", value: "0 Hari", tooltip: "Rata-rata waktu dari kandidat melamar hingga resmi diterima." },
];
