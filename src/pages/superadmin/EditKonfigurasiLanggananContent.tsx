import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { ArrowLeft, ChevronRight, Info } from "lucide-react";
import { SuperadminTopBar } from "../../layouts/SuperadminLayout";
import { useFormGuard } from "../../lib/formGuard";
import { FieldLabel, TextInput, SelectInput } from "../../components/shared/FormFields";
import { MultiSelectField } from "../../components/shared/MultiSelectField";
import {
  BillingCycle, SUBSCRIPTION_BILLING_CYCLE_OPTIONS, SUBSCRIPTION_FEATURE_OPTIONS,
  SUBSCRIPTION_TIER_ROWS, updateSubscriptionTierRow, formatTierHarga,
} from "../../mocks/subscription";

function SectionTitle({ children }: { children: string }) {
  return <p className="text-text-default text-[16px] font-bold" style={{ fontFamily: "var(--font-body)" }}>{children}</p>;
}

export function EditKonfigurasiLanggananContent() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { setDirty, guardAction } = useFormGuard();
  const row = SUBSCRIPTION_TIER_ROWS.find(r => r.id === id) ?? null;

  const [nama, setNama] = useState(row?.nama ?? "");
  const [hargaInput, setHargaInput] = useState(row ? String(row.harga) : "");
  const [kuotaLowonganInput, setKuotaLowonganInput] = useState(row ? String(row.kuotaLowongan) : "");
  const [kuotaAdminInput, setKuotaAdminInput] = useState(row ? String(row.kuotaAdmin) : "");
  const [aksesFitur, setAksesFitur] = useState<string[]>(row?.aksesFitur ?? []);
  const [billingCycle, setBillingCycle] = useState<BillingCycle | "">(row?.billingCycle ?? "");

  const harga = Number(hargaInput) || 0;
  const kuotaLowongan = Number(kuotaLowonganInput) || 0;
  const kuotaAdmin = Number(kuotaAdminInput) || 0;

  const isValid = Boolean(nama.trim() && nama.length <= 50 && hargaInput && kuotaLowonganInput && kuotaAdminInput && kuotaAdmin >= 1 && billingCycle);
  const hasUnsavedChanges = Boolean(row) && (
    nama !== row!.nama ||
    harga !== row!.harga ||
    kuotaLowongan !== row!.kuotaLowongan ||
    kuotaAdmin !== row!.kuotaAdmin ||
    billingCycle !== row!.billingCycle ||
    aksesFitur.length !== row!.aksesFitur.length ||
    aksesFitur.some(f => !row!.aksesFitur.includes(f))
  );

  useEffect(() => {
    setDirty(hasUnsavedChanges);
    return () => setDirty(false);
  }, [hasUnsavedChanges, setDirty]);

  const handleBack = () => guardAction(() => navigate(-1));
  const handleGoToList = () => guardAction(() => navigate("/superadmin/konfigurasi-langganan"));

  const handleSubmit = () => {
    if (!isValid || !billingCycle || !row) return;
    updateSubscriptionTierRow(row.id, {
      nama: nama.trim(),
      harga,
      hargaDisplay: formatTierHarga(harga),
      kuotaLowongan,
      kuotaAdmin,
      aksesFitur,
      billingCycle,
      aktif: row.aktif,
      isStarter: row.isStarter,
    });
    setDirty(false);
    navigate("/superadmin/konfigurasi-langganan", { state: { toast: "Paket langganan berhasil diperbarui" } });
  };

  if (!row) {
    return (
      <div className="flex-1 min-w-0 h-full overflow-y-auto bg-surface">
        <SuperadminTopBar />
        <div className="flex flex-col items-center justify-center gap-3 py-24">
          <p className="text-text-default text-base font-bold" style={{ fontFamily: "var(--font-body)" }}>Paket tidak ditemukan</p>
          <button onClick={() => navigate("/superadmin/konfigurasi-langganan")} className="text-sm font-semibold text-brand-primary hover:underline" style={{ fontFamily: "var(--font-body)" }}>
            Kembali ke Konfigurasi Langganan
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 min-w-0 h-full overflow-y-auto bg-surface pb-10">
      <SuperadminTopBar />

      <div className="flex flex-col gap-6 px-10 pt-8">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2.5">
            <button onClick={handleBack} className="text-text-default hover:text-brand-primary transition-colors" aria-label="Kembali">
              <ArrowLeft size={28} />
            </button>
            <p className="text-text-default text-[28px] font-bold leading-8" style={{ fontFamily: "var(--font-body)" }}>Edit Paket</p>
          </div>
          <div className="flex items-center gap-2.5 pl-[38px]">
            <button onClick={handleGoToList} className="text-[#ff6b35] text-sm font-semibold hover:underline" style={{ fontFamily: "var(--font-body)" }}>
              Konfigurasi Langganan
            </button>
            <ChevronRight size={14} className="text-text-muted" />
            <span className="text-text-muted text-sm" style={{ fontFamily: "var(--font-body)" }}>Edit Paket</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-border-lighter p-8 flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-4 w-full">
            <SectionTitle>Informasi Dasar</SectionTitle>
            <div className="flex flex-col gap-5 w-full">
              <div className="flex flex-col gap-2 w-full">
                <FieldLabel required>Nama Paket</FieldLabel>
                <TextInput placeholder="Contoh: Growth, Enterprise" value={nama} onChange={v => setNama(v.slice(0, 50))} />
                <p className="text-[10px] text-text-lighter text-right w-full" style={{ fontFamily: "var(--font-body)" }}>{nama.length} / 50</p>
              </div>
              <div className="flex gap-5 w-full">
                <div className="flex-1 min-w-0 flex flex-col gap-2">
                  <FieldLabel required>Harga (IDR)</FieldLabel>
                  <TextInput placeholder="0" value={hargaInput} onChange={v => setHargaInput(v.replace(/\D/g, ""))} prefix="Rp" />
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-2">
                  <FieldLabel required>Billing Cycle</FieldLabel>
                  <SelectInput placeholder="Pilih billing cycle" value={billingCycle} onChange={v => setBillingCycle(v as BillingCycle)} options={SUBSCRIPTION_BILLING_CYCLE_OPTIONS} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <SectionTitle>Kuota</SectionTitle>
            <div className="flex gap-4 w-full">
              <div className="flex-1 min-w-0 flex flex-col gap-2">
                <FieldLabel required>Kuota Lowongan</FieldLabel>
                <TextInput placeholder="0" value={kuotaLowonganInput} onChange={v => setKuotaLowonganInput(v.replace(/\D/g, ""))} />
              </div>
              <div className="flex-1 min-w-0 flex flex-col gap-2">
                <FieldLabel required>Kuota Admin</FieldLabel>
                <TextInput placeholder="Minimal 1" value={kuotaAdminInput} onChange={v => setKuotaAdminInput(v.replace(/\D/g, ""))} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <SectionTitle>Akses Fitur</SectionTitle>
            <div className="max-w-[380px]">
              <MultiSelectField placeholder="Semua Fitur" options={SUBSCRIPTION_FEATURE_OPTIONS} selected={aksesFitur} onChange={setAksesFitur} />
            </div>
          </div>

          <div className="bg-[#f0f9ff] border border-border-lighter rounded-xl p-6 flex gap-3 items-start w-full">
            <Info size={20} className="text-brand-primary shrink-0" />
            <p className="flex-1 min-w-0 text-text-default text-[14px]" style={{ fontFamily: "var(--font-body)" }}>
              Employer yang sudah berlangganan tetap menggunakan kuota dan harga paket saat mereka berlangganan sampai mereka upgrade atau downgrade.
            </p>
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 bg-white border-t border-[#e2e8f0] flex items-center justify-end gap-4 px-10 py-6 mt-8">
        <button onClick={handleBack} className="h-12 px-5 rounded-full border-[1.5px] border-border-default text-text-darker font-bold text-[16px] hover:bg-gray-50 transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
          Kembali
        </button>
        <button
          onClick={handleSubmit}
          disabled={!isValid}
          className="h-12 px-6 rounded-full bg-brand-primary text-white font-bold text-[16px] hover:bg-brand-primary-hover disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Simpan Perubahan
        </button>
      </div>
    </div>
  );
}
