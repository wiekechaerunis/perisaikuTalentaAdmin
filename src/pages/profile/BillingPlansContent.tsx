import { useNavigate, useOutletContext } from "react-router";
import { useState } from "react";
import { ProfileSharedState } from "../../mocks/profile";
import { SUBSCRIPTION_TIER_ROWS, SubscriptionTierRow } from "../../mocks/subscription";
import { TierCard } from "../../components/billing/TierCard";
import { InfoModal } from "../../components/shared/InfoModal";

export function BillingPlansContent() {
  const navigate = useNavigate();
  const { activeTier, setActiveTier, pushToast } = useOutletContext<ProfileSharedState>();
  const [confirmDowngrade, setConfirmDowngrade] = useState<SubscriptionTierRow | null>(null);
  const tiers = SUBSCRIPTION_TIER_ROWS.filter(t => t.aktif);

  const handleSelect = (tier: SubscriptionTierRow) => {
    if (tier.id === activeTier.id) return;
    if (tier.harga > activeTier.harga) {
      navigate(`/profile/billing/checkout/${tier.id}`);
    } else {
      setConfirmDowngrade(tier);
    }
  };

  const confirmDowngradeAction = () => {
    if (!confirmDowngrade) return;
    setActiveTier(confirmDowngrade);
    pushToast(`Paket berhasil diubah ke ${confirmDowngrade.nama}`);
    setConfirmDowngrade(null);
    navigate("/profile/billing");
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-[#f0f9ff] border border-border-lighter rounded-xl px-5 py-4">
        <p className="text-text-default text-[13px]" style={{ fontFamily: "var(--font-body)" }}>
          Upgrade paket dihitung prorata sesuai sisa masa langganan. Downgrade berlaku dengan masa tenggang 7 hari sebelum kuota baru diterapkan.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {tiers.map(tier => (
          <TierCard key={tier.id} tier={tier} isCurrent={tier.id === activeTier.id} onSelect={() => handleSelect(tier)} />
        ))}
      </div>

      {confirmDowngrade && (
        <InfoModal
          title={confirmDowngrade.harga === 0 ? "Turunkan ke paket gratis?" : `Turunkan ke paket ${confirmDowngrade.nama}?`}
          onClose={() => setConfirmDowngrade(null)}
          footer={
            <div className="flex items-center justify-end gap-3 w-full">
              <button onClick={() => setConfirmDowngrade(null)} className="px-5 py-2 rounded-full border-[1.5px] border-border-default text-text-darker font-bold text-[14px] hover:bg-gray-50 transition-colors" style={{ fontFamily: "var(--font-body)" }}>Batal</button>
              <button onClick={confirmDowngradeAction} className="bg-brand-primary h-10 px-4 rounded-full text-white font-bold text-[14px] hover:bg-brand-primary-hover transition-colors" style={{ fontFamily: "var(--font-body)" }}>Konfirmasi</button>
            </div>
          }
        >
          Paket <span className="font-bold text-text-darker">{activeTier.nama}</span> Anda saat ini akan tetap aktif selama masa tenggang 7 hari, setelah itu kuota paket <span className="font-bold text-text-darker">{confirmDowngrade.nama}</span> akan berlaku.
        </InfoModal>
      )}
    </div>
  );
}
