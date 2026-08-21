import { useState, useEffect } from "react";
import { useNavigate, useParams, useOutletContext } from "react-router";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { ProfileSharedState } from "../../mocks/profile";
import { SUBSCRIPTION_TIER_ROWS } from "../../mocks/subscription";
import { PaymentMethod, addTransactionRow, simulatePaymentGateway } from "../../mocks/transactions";
import { PaymentMethodSelector } from "../../components/billing/PaymentMethodSelector";
import { FieldLabel, TextInput } from "../../components/shared/FormFields";
import { useFormGuard } from "../../lib/formGuard";

type CheckoutStep = "form" | "processing" | "success" | "failed";

export function BillingCheckoutContent() {
  const navigate = useNavigate();
  const { tierId } = useParams<{ tierId: string }>();
  const { companyName, companyAddress, setActiveTier, pushToast } = useOutletContext<ProfileSharedState>();
  const { setDirty } = useFormGuard();
  const tier = SUBSCRIPTION_TIER_ROWS.find(t => t.id === tierId);

  const [metode, setMetode] = useState<PaymentMethod | "">("");
  const [namaPerusahaan, setNamaPerusahaan] = useState(companyName);
  const [npwp, setNpwp] = useState("");
  const [alamat, setAlamat] = useState(companyAddress);
  const [step, setStep] = useState<CheckoutStep>("form");

  const isValid = Boolean(metode && namaPerusahaan.trim() && alamat.trim());

  useEffect(() => {
    setDirty(step === "form" && Boolean(metode || npwp));
    return () => setDirty(false);
  }, [step, metode, npwp, setDirty]);

  if (!tier) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-24">
        <p className="text-text-default text-base font-bold" style={{ fontFamily: "var(--font-body)" }}>Paket tidak ditemukan</p>
        <button onClick={() => navigate("/profile/billing/plans")} className="text-sm font-semibold text-brand-primary hover:underline" style={{ fontFamily: "var(--font-body)" }}>
          Kembali ke Pilih Paket
        </button>
      </div>
    );
  }

  const handlePay = async () => {
    if (!isValid || !metode) return;
    setStep("processing");
    const success = await simulatePaymentGateway();
    if (success) {
      const now = new Date().toLocaleString("id-ID", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
      addTransactionRow({
        employerName: namaPerusahaan.trim(),
        tierId: tier.id,
        tierNama: tier.nama,
        metodePembayaran: metode,
        invoiceData: { namaPerusahaan: namaPerusahaan.trim(), npwp: npwp.trim() || undefined, alamat: alamat.trim() },
        amount: tier.harga,
        status: "Paid",
        createdAt: now,
        paidAt: now,
        webhookEvents: [
          { event: "payment.pending", timestamp: now, attempt: 1, status: "success" },
          { event: "payment.settlement", timestamp: now, attempt: 1, status: "success" },
        ],
        reconciled: false,
      });
      setActiveTier(tier);
      setDirty(false);
      setStep("success");
    } else {
      setStep("failed");
    }
  };

  if (step === "processing" || step === "success" || step === "failed") {
    return (
      <div className="flex flex-col items-center justify-center gap-5 py-24 text-center">
        {step === "processing" && (
          <>
            <Loader2 size={48} className="text-brand-primary animate-spin" />
            <p className="text-text-default text-[18px] font-bold" style={{ fontFamily: "var(--font-body)" }}>Memproses pembayaran...</p>
            <p className="text-text-muted text-sm" style={{ fontFamily: "var(--font-body)" }}>Mohon tunggu, jangan tutup halaman ini.</p>
          </>
        )}
        {step === "success" && (
          <>
            <CheckCircle2 size={48} className="text-[#22c55e]" />
            <p className="text-text-default text-[18px] font-bold" style={{ fontFamily: "var(--font-body)" }}>Pembayaran berhasil</p>
            <p className="text-text-muted text-sm max-w-[360px]" style={{ fontFamily: "var(--font-body)" }}>
              Paket {tier.nama} sudah aktif. Invoice dan receipt telah dikirim ke email Anda.
            </p>
            <button
              onClick={() => { pushToast(`Paket ${tier.nama} berhasil diaktifkan`); navigate("/profile/billing"); }}
              className="h-11 px-6 rounded-full bg-brand-primary text-white font-bold text-sm hover:bg-brand-primary-hover transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Lihat Billing
            </button>
          </>
        )}
        {step === "failed" && (
          <>
            <XCircle size={48} className="text-danger-strong" />
            <p className="text-text-default text-[18px] font-bold" style={{ fontFamily: "var(--font-body)" }}>Pembayaran gagal</p>
            <p className="text-text-muted text-sm max-w-[360px]" style={{ fontFamily: "var(--font-body)" }}>
              Terjadi kendala saat memproses pembayaran Anda. Silakan coba lagi.
            </p>
            <button
              onClick={() => setStep("form")}
              className="h-11 px-6 rounded-full bg-brand-primary text-white font-bold text-sm hover:bg-brand-primary-hover transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Coba Lagi
            </button>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 max-w-[560px]">
      <div className="bg-white rounded-2xl border border-border-lighter p-6 flex items-center justify-between">
        <div>
          <p className="text-text-lighter text-sm" style={{ fontFamily: "var(--font-body)" }}>Paket yang dipilih</p>
          <p className="text-text-default text-[18px] font-bold" style={{ fontFamily: "var(--font-body)" }}>{tier.nama}</p>
        </div>
        <p className="text-text-default text-[20px] font-bold" style={{ fontFamily: "var(--font-body)" }}>{tier.hargaDisplay}{tier.harga > 0 && <span className="text-sm text-text-lighter font-normal">/{tier.billingCycle === "Bulanan" ? "bulan" : "tahun"}</span>}</p>
      </div>

      <div className="bg-white rounded-2xl border border-border-lighter p-6 flex flex-col gap-5">
        <p className="text-text-default text-[16px] font-bold" style={{ fontFamily: "var(--font-body)" }}>Metode Pembayaran</p>
        <PaymentMethodSelector value={metode} onChange={setMetode} />
      </div>

      <div className="bg-white rounded-2xl border border-border-lighter p-6 flex flex-col gap-5">
        <p className="text-text-default text-[16px] font-bold" style={{ fontFamily: "var(--font-body)" }}>Data Invoice</p>
        <div className="flex flex-col gap-2">
          <FieldLabel required>Nama Perusahaan</FieldLabel>
          <TextInput placeholder="Nama perusahaan" value={namaPerusahaan} onChange={setNamaPerusahaan} />
        </div>
        <div className="flex flex-col gap-2">
          <FieldLabel>NPWP (opsional)</FieldLabel>
          <TextInput placeholder="Untuk faktur pajak" value={npwp} onChange={setNpwp} />
        </div>
        <div className="flex flex-col gap-2">
          <FieldLabel required>Alamat</FieldLabel>
          <TextInput placeholder="Alamat perusahaan" value={alamat} onChange={setAlamat} />
        </div>
      </div>

      <button
        onClick={handlePay}
        disabled={!isValid}
        className="h-12 w-full rounded-full bg-brand-primary text-white font-bold text-[16px] hover:bg-brand-primary-hover disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        style={{ fontFamily: "var(--font-body)" }}
      >
        Bayar {tier.hargaDisplay}
      </button>
    </div>
  );
}
