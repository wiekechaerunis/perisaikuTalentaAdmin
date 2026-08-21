export type BillingCycle = "Bulanan" | "Tahunan";

export const SUBSCRIPTION_BILLING_CYCLE_OPTIONS: BillingCycle[] = ["Bulanan", "Tahunan"];

export const SUBSCRIPTION_FEATURE_OPTIONS: string[] = [
  "Analitik Lanjutan",
  "Priority Support",
  "Export Kandidat",
  "Talent Search Unlimited",
  "Custom Branding",
  "Dedicated Account Manager",
];

export interface SubscriptionTierRow {
  id: string;
  nama: string;
  harga: number;
  hargaDisplay: string;
  kuotaLowongan: number;
  kuotaAdmin: number;
  aksesFitur: string[];
  billingCycle: BillingCycle;
  aktif: boolean;
  isStarter?: boolean;
}

export function formatTierHarga(value: number): string {
  return value === 0 ? "Gratis" : `Rp${value.toLocaleString("id-ID")}`;
}

export const SUBSCRIPTION_TIER_ROWS: SubscriptionTierRow[] = [
  {
    id: "TIER-STARTER",
    nama: "Starter",
    harga: 0,
    hargaDisplay: "Gratis",
    kuotaLowongan: 1,
    kuotaAdmin: 1,
    aksesFitur: [],
    billingCycle: "Bulanan",
    aktif: true,
    isStarter: true,
  },
  {
    id: "TIER-GROWTH",
    nama: "Growth",
    harga: 799000,
    hargaDisplay: "Rp799.000",
    kuotaLowongan: 10,
    kuotaAdmin: 5,
    aksesFitur: ["Analitik Lanjutan", "Export Kandidat"],
    billingCycle: "Bulanan",
    aktif: true,
  },
  {
    id: "TIER-ENTERPRISE",
    nama: "Enterprise",
    harga: 2499000,
    hargaDisplay: "Rp2.499.000",
    kuotaLowongan: 50,
    kuotaAdmin: 20,
    aksesFitur: ["Analitik Lanjutan", "Priority Support", "Export Kandidat", "Talent Search Unlimited", "Custom Branding", "Dedicated Account Manager"],
    billingCycle: "Bulanan",
    aktif: true,
  },
];

export function addSubscriptionTierRow(row: Omit<SubscriptionTierRow, "id">): SubscriptionTierRow {
  const newRow: SubscriptionTierRow = { ...row, id: `TIER-${Date.now()}` };
  SUBSCRIPTION_TIER_ROWS.push(newRow);
  return newRow;
}

export function updateSubscriptionTierRow(id: string, patch: Omit<SubscriptionTierRow, "id">): void {
  const index = SUBSCRIPTION_TIER_ROWS.findIndex(r => r.id === id);
  if (index === -1) return;
  SUBSCRIPTION_TIER_ROWS[index] = { ...patch, id };
}

export function getTierById(id: string): SubscriptionTierRow | undefined {
  return SUBSCRIPTION_TIER_ROWS.find(t => t.id === id);
}

export type EmployerSubscriptionStatus = "active" | "grace-period" | "expired";

export interface EmployerSubscription {
  tierId: string;
  status: EmployerSubscriptionStatus;
  startedOn: string;
  renewsOn: string;
}

// Every new employer is auto-assigned the free Starter tier on approval; upgrading
// happens later from the Billing page, not during onboarding.
export const CURRENT_EMPLOYER_SUBSCRIPTION: EmployerSubscription = {
  tierId: "TIER-STARTER",
  status: "active",
  startedOn: "1 Jan 2026",
  renewsOn: "-",
};
