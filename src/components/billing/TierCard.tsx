import { Check } from "lucide-react";
import { SubscriptionTierRow } from "../../mocks/subscription";

export function TierCard({
  tier,
  isCurrent,
  onSelect,
}: {
  tier: SubscriptionTierRow;
  isCurrent: boolean;
  onSelect: () => void;
}) {
  return (
    <div className={`bg-white rounded-2xl border p-6 flex flex-col gap-5 w-full ${isCurrent ? "border-brand-primary shadow-[0px_4px_12px_rgba(43,129,243,0.12)]" : "border-border-lighter"}`}>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <p className="text-[20px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>{tier.nama}</p>
          {isCurrent && (
            <span className="bg-[#ebf2ff] text-brand-primary text-[11px] font-bold px-2 py-1 rounded-full" style={{ fontFamily: "var(--font-heading)" }}>Paket Aktif</span>
          )}
        </div>
        <div className="flex items-baseline gap-1">
          <p className="text-[28px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>{tier.hargaDisplay}</p>
          {tier.harga > 0 && (
            <span className="text-text-lighter text-sm" style={{ fontFamily: "var(--font-body)" }}>/{tier.billingCycle === "Bulanan" ? "bulan" : "tahun"}</span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2.5 flex-1">
        <div className="flex items-center gap-2 text-sm text-text-darker" style={{ fontFamily: "var(--font-body)" }}>
          <Check size={16} className="text-brand-primary shrink-0" />
          {tier.kuotaLowongan} lowongan aktif
        </div>
        <div className="flex items-center gap-2 text-sm text-text-darker" style={{ fontFamily: "var(--font-body)" }}>
          <Check size={16} className="text-brand-primary shrink-0" />
          {tier.kuotaAdmin} admin/tim
        </div>
        {tier.aksesFitur.map(fitur => (
          <div key={fitur} className="flex items-center gap-2 text-sm text-text-darker" style={{ fontFamily: "var(--font-body)" }}>
            <Check size={16} className="text-brand-primary shrink-0" />
            {fitur}
          </div>
        ))}
      </div>

      <button
        onClick={onSelect}
        disabled={isCurrent}
        className={`h-11 w-full rounded-full text-sm font-bold transition-colors ${
          isCurrent
            ? "bg-[#f4f4f5] text-text-lighter cursor-not-allowed"
            : "bg-brand-primary text-white hover:bg-brand-primary-hover"
        }`}
        style={{ fontFamily: "var(--font-body)" }}
      >
        {isCurrent ? "Paket Anda Saat Ini" : "Pilih Paket"}
      </button>
    </div>
  );
}
