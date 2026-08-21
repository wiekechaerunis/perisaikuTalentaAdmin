export type PaymentMethod = "Kartu Kredit/Debit" | "Transfer Bank (VA)" | "GoPay" | "OVO" | "Dana";
export type TransactionStatus = "Pending" | "Paid" | "Failed" | "Refunded";

export const PAYMENT_METHOD_OPTIONS: PaymentMethod[] = ["Kartu Kredit/Debit", "Transfer Bank (VA)", "GoPay", "OVO", "Dana"];

export interface InvoiceData {
  namaPerusahaan: string;
  npwp?: string;
  alamat: string;
}

export interface WebhookEvent {
  event: string;
  timestamp: string;
  attempt: number;
  status: "success" | "failed";
}

export interface TransactionRow {
  id: string;
  employerName: string;
  tierId: string;
  tierNama: string;
  metodePembayaran: PaymentMethod;
  invoiceData: InvoiceData;
  amount: number;
  status: TransactionStatus;
  createdAt: string;
  paidAt?: string;
  webhookEvents: WebhookEvent[];
  reconciled: boolean;
}

export const TRANSACTION_ROWS: TransactionRow[] = [
  {
    id: "TRX-0001",
    employerName: "PT Nusantara Logistik",
    tierId: "TIER-GROWTH",
    tierNama: "Growth",
    metodePembayaran: "Transfer Bank (VA)",
    invoiceData: { namaPerusahaan: "PT Nusantara Logistik", alamat: "Jl. Rungkut Industri No. 12, Surabaya" },
    amount: 799000,
    status: "Paid",
    createdAt: "1 Jul 2026, 09:12",
    paidAt: "1 Jul 2026, 09:14",
    webhookEvents: [
      { event: "payment.pending", timestamp: "1 Jul 2026, 09:12", attempt: 1, status: "success" },
      { event: "payment.settlement", timestamp: "1 Jul 2026, 09:14", attempt: 1, status: "success" },
    ],
    reconciled: true,
  },
  {
    id: "TRX-0002",
    employerName: "PT Digital Solusi",
    tierId: "TIER-ENTERPRISE",
    tierNama: "Enterprise",
    metodePembayaran: "Kartu Kredit/Debit",
    invoiceData: { namaPerusahaan: "PT Digital Solusi", npwp: "01.234.567.8-901.000", alamat: "Jl. Jendral Sudirman No. 45, Jakarta" },
    amount: 2499000,
    status: "Paid",
    createdAt: "15 Jul 2026, 14:02",
    paidAt: "15 Jul 2026, 14:03",
    webhookEvents: [
      { event: "payment.pending", timestamp: "15 Jul 2026, 14:02", attempt: 1, status: "success" },
      { event: "payment.settlement", timestamp: "15 Jul 2026, 14:03", attempt: 1, status: "success" },
    ],
    reconciled: true,
  },
  {
    id: "TRX-0003",
    employerName: "CV Sumber Makmur",
    tierId: "TIER-GROWTH",
    tierNama: "Growth",
    metodePembayaran: "GoPay",
    invoiceData: { namaPerusahaan: "CV Sumber Makmur", alamat: "Jl. Pemuda No. 8, Semarang" },
    amount: 799000,
    status: "Pending",
    createdAt: "27 Jul 2026, 14:30",
    webhookEvents: [
      { event: "payment.pending", timestamp: "27 Jul 2026, 14:30", attempt: 1, status: "success" },
    ],
    reconciled: false,
  },
  {
    id: "TRX-0004",
    employerName: "PT Agro Sentosa",
    tierId: "TIER-GROWTH",
    tierNama: "Growth",
    metodePembayaran: "OVO",
    invoiceData: { namaPerusahaan: "PT Agro Sentosa", alamat: "Jl. Ahmad Yani No. 20, Medan" },
    amount: 799000,
    status: "Failed",
    createdAt: "20 Jul 2026, 10:05",
    webhookEvents: [
      { event: "payment.pending", timestamp: "20 Jul 2026, 10:05", attempt: 1, status: "success" },
      { event: "payment.retry", timestamp: "20 Jul 2026, 10:07", attempt: 2, status: "failed" },
      { event: "payment.retry", timestamp: "20 Jul 2026, 10:12", attempt: 3, status: "failed" },
      { event: "payment.expire", timestamp: "20 Jul 2026, 10:35", attempt: 3, status: "failed" },
    ],
    reconciled: true,
  },
  {
    id: "TRX-0005",
    employerName: "PT Karya Konstruksi",
    tierId: "TIER-ENTERPRISE",
    tierNama: "Enterprise",
    metodePembayaran: "Dana",
    invoiceData: { namaPerusahaan: "PT Karya Konstruksi", npwp: "02.345.678.9-012.000", alamat: "Jl. Diponegoro No. 15, Bandung" },
    amount: 2499000,
    status: "Refunded",
    createdAt: "5 Jun 2026, 08:40",
    paidAt: "5 Jun 2026, 08:41",
    webhookEvents: [
      { event: "payment.pending", timestamp: "5 Jun 2026, 08:40", attempt: 1, status: "success" },
      { event: "payment.settlement", timestamp: "5 Jun 2026, 08:41", attempt: 1, status: "success" },
      { event: "payment.refund", timestamp: "10 Jun 2026, 11:20", attempt: 1, status: "success" },
    ],
    reconciled: true,
  },
];

export function addTransactionRow(row: Omit<TransactionRow, "id">): TransactionRow {
  const newRow: TransactionRow = { ...row, id: `TRX-${String(TRANSACTION_ROWS.length + 1).padStart(4, "0")}` };
  TRANSACTION_ROWS.unshift(newRow);
  return newRow;
}

export function refundTransactionRow(id: string): void {
  const index = TRANSACTION_ROWS.findIndex(r => r.id === id);
  if (index === -1) return;
  TRANSACTION_ROWS[index] = { ...TRANSACTION_ROWS[index], status: "Refunded" };
}

// Mock stand-in for a real gateway call (Midtrans/Xendit) + its webhook activation.
// Mirrors simulateSendResetPasswordEmail's setTimeout-based promise pattern.
export function simulatePaymentGateway(forceFail = false): Promise<boolean> {
  return new Promise(resolve => setTimeout(() => resolve(!forceFail), 1200));
}
