export type CakupanBisnis = "" | "Employer" | "Job Seeker";

export const CAKUPAN_BISNIS_OPTIONS: CakupanBisnis[] = ["Employer", "Job Seeker"];

export const SEGMEN_OPTIONS_BY_CAKUPAN: Record<"Employer" | "Job Seeker", string[]> = {
  Employer: ["Starter", "Growth", "Enterprise"],
  "Job Seeker": ["Free", "Premium", "Active Subscriber"],
};

export interface PlatformStat {
  label: string;
  value: string;
  trend: string;
  trendUp: boolean;
}

export const PLATFORM_STATS: PlatformStat[] = [
  { label: "Employer Aktif", value: "1.284", trend: "12,4%", trendUp: true },
  { label: "Employer Berbayar", value: "486", trend: "8,7%", trendUp: true },
  { label: "Successful Hires", value: "892", trend: "15,2%", trendUp: true },
  { label: "Revenue", value: "Rp1,84 M", trend: "18,6%", trendUp: true },
  { label: "MRR", value: "Rp612 Jt", trend: "9,3%", trendUp: true },
  { label: "Free-to-Paid", value: "18,5%", trend: "2,1%", trendUp: true },
  { label: "Renewal Rate", value: "82,4%", trend: "3,4%", trendUp: true },
  { label: "Churn Rate", value: "4,8%", trend: "1,2%", trendUp: false },
];

export function getRingkasanStats(cakupan: CakupanBisnis): PlatformStat[] {
  if (cakupan === "Employer") {
    return [
      { label: "Employer Aktif", value: "1.284", trend: "12,4%", trendUp: true },
      { label: "Employer Berbayar", value: "486", trend: "8,7%", trendUp: true },
      { label: "Successful Hires", value: "892", trend: "15,2%", trendUp: true },
      { label: "Revenue", value: "Rp1,52 M", trend: "24,8%", trendUp: true },
      { label: "MRR", value: "Rp505 Jt", trend: "14,6%", trendUp: true },
      { label: "Free-to-Paid", value: "18,5%", trend: "5,4%", trendUp: true },
      { label: "Renewal Rate", value: "82,4%", trend: "2,9%", trendUp: true },
      { label: "Churn Rate", value: "4,8%", trend: "4,1%", trendUp: true },
    ];
  }
  if (cakupan === "Job Seeker") {
    return [
      { label: "Employer Aktif", value: "0", trend: "0%", trendUp: true },
      { label: "Employer Berbayar", value: "0", trend: "0%", trendUp: true },
      { label: "Successful Hires", value: "892", trend: "15,2%", trendUp: true },
      { label: "Revenue", value: "Rp320 Jt", trend: "24,8%", trendUp: true },
      { label: "MRR", value: "Rp108 Jt", trend: "14,6%", trendUp: true },
      { label: "Free-to-Paid", value: "3,8%", trend: "0,7%", trendUp: true },
      { label: "Renewal Rate", value: "74,8%", trend: "4,1%", trendUp: true },
      { label: "Churn Rate", value: "6,2%", trend: "1,4%", trendUp: false },
    ];
  }
  return PLATFORM_STATS;
}

export interface TrendPoint {
  label: string;
  value: number;
}

export const APPLICANT_TREND: TrendPoint[] = [
  { label: "Jan", value: 100 },
  { label: "Feb", value: 190 },
  { label: "Mar", value: 140 },
  { label: "Apr", value: 165 },
  { label: "Mei", value: 130 },
  { label: "Jun", value: 175 },
  { label: "Jul", value: 145 },
  { label: "Agu", value: 190 },
];

export const APPLICANT_TREND_GROWTH = "+18,6%";

// Trend data keyed by the "Periode Analisis" selection, so the line chart
// actually reshapes when the user changes the date range.
export const TREND_30_HARI: TrendPoint[] = [
  { label: "Minggu 1", value: 120 },
  { label: "Minggu 2", value: 148 },
  { label: "Minggu 3", value: 132 },
  { label: "Minggu 4", value: 168 },
];

export const TREND_3_BULAN: TrendPoint[] = [
  { label: "Jun", value: 130 },
  { label: "Jul", value: 158 },
  { label: "Agu", value: 190 },
];

export const TREND_6_BULAN: TrendPoint[] = [
  { label: "Mar", value: 140 },
  { label: "Apr", value: 165 },
  { label: "Mei", value: 130 },
  { label: "Jun", value: 175 },
  { label: "Jul", value: 145 },
  { label: "Agu", value: 190 },
];

export const TREND_1_TAHUN: TrendPoint[] = [
  { label: "Sep", value: 95 },
  { label: "Okt", value: 110 },
  { label: "Nov", value: 105 },
  { label: "Des", value: 130 },
  { label: "Jan", value: 100 },
  { label: "Feb", value: 190 },
  { label: "Mar", value: 140 },
  { label: "Apr", value: 165 },
  { label: "Mei", value: 130 },
  { label: "Jun", value: 175 },
  { label: "Jul", value: 145 },
  { label: "Agu", value: 190 },
];

export const TREND_DATA_BY_RANGE: Record<string, TrendPoint[]> = {
  "30 hari terakhir": TREND_30_HARI,
  "3 bulan terakhir": TREND_3_BULAN,
  "6 bulan terakhir": TREND_6_BULAN,
  "1 tahun terakhir": TREND_1_TAHUN,
};

export function getTrendData(range: string): TrendPoint[] {
  return TREND_DATA_BY_RANGE[range] ?? TREND_6_BULAN;
}

export function getTrendGrowth(data: TrendPoint[]): string {
  if (data.length < 2 || data[0].value === 0) return "+0%";
  const pct = ((data[data.length - 1].value - data[0].value) / data[0].value) * 100;
  const sign = pct >= 0 ? "+" : "";
  return `${sign}${pct.toFixed(1).replace(".", ",")}%`;
}

export interface RevenueBySide {
  label: string;
  value: string;
  amount: number;
  color: string;
}

export const REVENUE_BY_SIDE: RevenueBySide[] = [
  { label: "Employeer", value: "1,52 M", amount: 1520, color: "#2b81f3" },
  { label: "Job Seeker", value: "320 Jt", amount: 320, color: "#ff6b35" },
];

export const REVENUE_TOTAL = "Rp1,84 M";

export function getRevenueBySideData(cakupan: CakupanBisnis): { rows: RevenueBySide[]; total: string } {
  if (cakupan === "Employer") {
    return {
      rows: [
        { label: "Employeer", value: "1,52 M", amount: 1520, color: "#2b81f3" },
        { label: "Job Seeker", value: "Rp0", amount: 0, color: "#ff6b35" },
      ],
      total: "Rp1,52 M",
    };
  }
  if (cakupan === "Job Seeker") {
    return {
      rows: [
        { label: "Employeer", value: "Rp0", amount: 0, color: "#2b81f3" },
        { label: "Job Seeker", value: "320 Jt", amount: 320, color: "#ff6b35" },
      ],
      total: "Rp320 Jt",
    };
  }
  return { rows: REVENUE_BY_SIDE, total: REVENUE_TOTAL };
}

export type HealthStatus = "Sehat" | "Perlu Diperhatikan" | "Buruk";

export interface BusinessPerformanceRow {
  segmen: string;
  employerAktif: number;
  konversiPembayaran: string;
  konversiTrend: string;
  mrr: string;
  successfulHires: number;
  retention30d: string;
  health: HealthStatus;
}

export const BUSINESS_PERFORMANCE_ROWS: BusinessPerformanceRow[] = [
  { segmen: "Enterprise", employerAktif: 184, konversiPembayaran: "72,8%", konversiTrend: "4,2%", mrr: "Rp328,4 Jt", successfulHires: 326, retention30d: "88,2%", health: "Sehat" },
  { segmen: "Growth", employerAktif: 426, konversiPembayaran: "31,4%", konversiTrend: "4,2%", mrr: "Rp198,7 Jt", successfulHires: 388, retention30d: "88,2%", health: "Buruk" },
  { segmen: "Starter", employerAktif: 674, konversiPembayaran: "12,6%", konversiTrend: "4,2%", mrr: "Rp84,9 Jt", successfulHires: 178, retention30d: "88,2%", health: "Perlu Diperhatikan" },
];

export function filterBusinessPerformanceRows(selectedSegmen: string[]): BusinessPerformanceRow[] {
  if (selectedSegmen.length === 0) return BUSINESS_PERFORMANCE_ROWS;
  return BUSINESS_PERFORMANCE_ROWS.filter(row => selectedSegmen.includes(row.segmen));
}

export const HEALTH_PILL_STYLE: Record<HealthStatus, { bg: string; text: string }> = {
  Sehat: { bg: "bg-[#d1fae5]", text: "text-[#065f46]" },
  "Perlu Diperhatikan": { bg: "bg-[#fffaf4]", text: "text-[#d19400]" },
  Buruk: { bg: "bg-[#fee2e2]", text: "text-[#991b1b]" },
};

// Employer & Recruitment tab filters
export const SEGMEN_EMPLOYER_OPTIONS = ["Starter", "Growth", "Enterprise"];
export const INDUSTRI_OPTIONS = ["Teknologi", "Retail", "Manufaktur", "Keuangan"];
export const PAKET_OPTIONS = ["Free", "Starter", "Growth", "Enterprise"];

export const EMPLOYER_RECRUITMENT_STATS: PlatformStat[] = [
  { label: "Employer Aktif", value: "1.284", trend: "12,4%", trendUp: true },
  { label: "Activation Rate", value: "68,4%", trend: "4,2%", trendUp: true },
  { label: "Lowongan Aktif", value: "3.240", trend: "14,8%", trendUp: true },
  { label: "Total Pelamar", value: "12.480", trend: "13,2%", trendUp: true },
  { label: "Qualified Rate", value: "31,8%", trend: "3,7%", trendUp: true },
  { label: "Successful Hires", value: "892", trend: "15,2%", trendUp: true },
  { label: "Apply-to-Hire", value: "7,1%", trend: "0,2%", trendUp: true },
  { label: "Median Time to Hire", value: "14 Hari", trend: "6,7%", trendUp: false },
];

export type ChurnRiskLevel = "Tinggi" | "Sedang" | "Rendah";

export interface ChurnRiskEmployer {
  nama: string;
  meta: string;
  risk: ChurnRiskLevel;
}

export const CHURN_RISK_EMPLOYERS: ChurnRiskEmployer[] = [
  { nama: "PT Nusantara Digital", meta: "Enterprise · 12 hari tanpa aktivitas", risk: "Tinggi" },
  { nama: "Mitra Karya Indonesia", meta: "Growth · 9 hari tanpa aktivitas", risk: "Tinggi" },
  { nama: "Sinar Retail Group", meta: "Starter · 6 hari tanpa aktivitas", risk: "Rendah" },
  { nama: "Karya Bangsa Teknologi", meta: "Growth · 8 hari tanpa aktivitas", risk: "Sedang" },
];

export function filterChurnRiskBySegmen(selected: string[]): ChurnRiskEmployer[] {
  if (selected.length === 0) return CHURN_RISK_EMPLOYERS;
  return CHURN_RISK_EMPLOYERS.filter(e => selected.some(seg => e.meta.includes(seg)));
}

export const CHURN_RISK_PILL_STYLE: Record<ChurnRiskLevel, { bg: string; text: string }> = {
  Tinggi: { bg: "bg-[#fee2e2]", text: "text-[#991b1b]" },
  Sedang: { bg: "bg-[#fffaf4]", text: "text-[#d19400]" },
  Rendah: { bg: "bg-[#d1fae5]", text: "text-[#065f46]" },
};

// Revenue tab
export type SumberRevenue = "Semua" | "Employer" | "Job Seeker";
export const SUMBER_REVENUE_OPTIONS: SumberRevenue[] = ["Semua", "Employer", "Job Seeker"];

export const REVENUE_STATS_SEMUA: PlatformStat[] = [
  { label: "Total Revenue", value: "Rp1,84 M", trend: "18,6%", trendUp: true },
  { label: "Total MRR", value: "Rp720 Jt", trend: "10,1%", trendUp: true },
  { label: "Paying Customers", value: "8.906", trend: "17,6%", trendUp: true },
  { label: "Payment Success", value: "96,8%", trend: "1,2%", trendUp: true },
  { label: "Employer Contribution", value: "82,6%", trend: "1,4%", trendUp: true },
  { label: "Jobseeker Contribution", value: "17,4%", trend: "2,8%", trendUp: true },
  { label: "Blended Renewal", value: "81,1%", trend: "3,5%", trendUp: true },
  { label: "Blended Churn", value: "5,1%", trend: "1,2%", trendUp: false },
];

export const REVENUE_STATS_EMPLOYER: PlatformStat[] = [
  { label: "Employer Revenue", value: "Rp320 Jt", trend: "24,8%", trendUp: true },
  { label: "Employer MRR", value: "Rp108 Jt", trend: "14,6%", trendUp: true },
  { label: "ARPA", value: "Rp1,3 Jt", trend: "18,2%", trendUp: true },
  { label: "Paying Employer", value: "486", trend: "0,7%", trendUp: true },
  { label: "Free-to-Paid", value: "18,5%", trend: "5,4%", trendUp: true },
  { label: "Renewal Rate", value: "82,4%", trend: "2,9%", trendUp: true },
  { label: "Churn Rate", value: "4,8%", trend: "4,1%", trendUp: true },
  { label: "Payment Success", value: "96,2%", trend: "1,4%", trendUp: false },
];

export const REVENUE_STATS_JOBSEEKER: PlatformStat[] = [
  { label: "Jobseeker Revenue", value: "Rp320 Jt", trend: "24,8%", trendUp: true },
  { label: "Jobseeker MRR", value: "Rp108 Jt", trend: "14,6%", trendUp: true },
  { label: "Premium Subscribers", value: "8.420", trend: "18,2%", trendUp: true },
  { label: "Free-to-Paid", value: "3,8%", trend: "0,7%", trendUp: true },
  { label: "ARPPU", value: "Rp38.000", trend: "5,4%", trendUp: true },
  { label: "Trial-to-Paid", value: "21,6%", trend: "2,9%", trendUp: true },
  { label: "Renewal Rate", value: "74,8%", trend: "4,1%", trendUp: true },
  { label: "Churn Rate", value: "6,2%", trend: "1,4%", trendUp: false },
];

export interface RevenueMixRow {
  label: string;
  value: string;
  amount: number;
}

export interface RevenueMixConfig {
  title: string;
  subtitle: string;
  rows: RevenueMixRow[];
  produkTitle: string;
  produkGrid: { label: string; value: string }[];
}

export const REVENUE_MIX_EMPLOYER: RevenueMixConfig = {
  title: "Employer revenue mix",
  subtitle: "Kontribusi berdasarkan produk",
  rows: [
    { label: "Subscription", value: "48%", amount: 48 },
    { label: "Sponsored Job", value: "24%", amount: 24 },
    { label: "Candidate Credit", value: "17%", amount: 17 },
    { label: "Add-on", value: "11%", amount: 11 },
  ],
  produkTitle: "Revenue per produk",
  produkGrid: [
    { label: "Subscription", value: "48%" },
    { label: "Sponsored Job", value: "24%" },
    { label: "Candidate Credit", value: "17%" },
    { label: "Add-on", value: "11%" },
  ],
};

export const REVENUE_MIX_JOBSEEKER: RevenueMixConfig = {
  title: "Jobseeker revenue mix",
  subtitle: "Kontribusi berdasarkan produk",
  rows: [
    { label: "Jobseeker Aktif", value: "48K", amount: 48 },
    { label: "Melihat Premium", value: "24K", amount: 24 },
    { label: "Memulai Trial", value: "17K", amount: 17 },
    { label: "Membeli", value: "11K", amount: 11 },
    { label: "Renewal", value: "11K", amount: 11 },
  ],
  produkTitle: "Revenue per produk",
  produkGrid: [
    { label: "Premium CV & Profile", value: "48%" },
    { label: "Skill Assessment", value: "24%" },
    { label: "Career Tools", value: "17%" },
    { label: "Coaching", value: "11%" },
  ],
};

export const REVENUE_CHART_TITLE: Record<SumberRevenue, string> = {
  Semua: "Revenue Seluruh Sumber",
  Employer: "Employer revenue by product",
  "Job Seeker": "Jobseeker revenue by product",
};
