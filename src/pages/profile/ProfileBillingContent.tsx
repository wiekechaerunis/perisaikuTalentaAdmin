import { useNavigate, useOutletContext } from "react-router";
import { FileText } from "lucide-react";
import { ProfileSharedState } from "../../mocks/profile";
import { TRANSACTION_ROWS } from "../../mocks/transactions";

export function ProfileBillingContent() {
  const navigate = useNavigate();
  const { activeTier, companyName } = useOutletContext<ProfileSharedState>();
  const invoices = TRANSACTION_ROWS.filter(t => t.employerName === companyName && t.status === "Paid");

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white rounded-2xl border border-border-lighter p-6 flex items-center justify-between gap-6 flex-wrap">
        <div>
          <p className="text-text-lighter text-sm" style={{ fontFamily: "var(--font-body)" }}>Paket Anda saat ini</p>
          <p className="text-text-default text-[24px] font-bold" style={{ fontFamily: "var(--font-body)" }}>{activeTier.nama}</p>
          <p className="text-text-lighter text-sm mt-1" style={{ fontFamily: "var(--font-body)" }}>
            {activeTier.hargaDisplay}{activeTier.harga > 0 && `/${activeTier.billingCycle === "Bulanan" ? "bulan" : "tahun"}`}
          </p>
        </div>
        <button
          onClick={() => navigate("/profile/billing/plans")}
          className="h-11 px-6 rounded-full border-[1.5px] border-brand-primary text-brand-primary font-bold text-sm hover:bg-[#ebf2ff] transition-colors"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Ubah Paket
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-border-lighter p-6 grid grid-cols-2 gap-6">
        <div>
          <p className="text-text-lighter text-sm" style={{ fontFamily: "var(--font-body)" }}>Kuota Lowongan</p>
          <p className="text-text-default text-[18px] font-bold" style={{ fontFamily: "var(--font-body)" }}>{activeTier.kuotaLowongan} lowongan aktif</p>
        </div>
        <div>
          <p className="text-text-lighter text-sm" style={{ fontFamily: "var(--font-body)" }}>Kuota Admin</p>
          <p className="text-text-default text-[18px] font-bold" style={{ fontFamily: "var(--font-body)" }}>{activeTier.kuotaAdmin} admin/tim</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-border-lighter p-6 flex flex-col gap-4">
        <p className="text-text-default text-[16px] font-bold" style={{ fontFamily: "var(--font-body)" }}>Riwayat Invoice</p>
        {invoices.length === 0 ? (
          <p className="text-text-muted text-sm" style={{ fontFamily: "var(--font-body)" }}>Belum ada invoice.</p>
        ) : (
          <div className="flex flex-col">
            {invoices.map((invoice, i) => (
              <div key={invoice.id} className={`flex items-center gap-3 py-3 ${i < invoices.length - 1 ? "border-b border-[#e4e4e7]" : ""}`}>
                <div className="bg-[#edf2f8] rounded-md shrink-0 size-7 flex items-center justify-center">
                  <FileText size={16} className="text-text-darker" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[14px] font-medium text-text-default" style={{ fontFamily: "var(--font-body)" }}>{invoice.tierNama}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>{invoice.id}</span>
                    <span className="size-[3px] rounded-full bg-text-lighter shrink-0" />
                    <span className="text-[12px] text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>{invoice.paidAt}</span>
                  </div>
                </div>
                <p className="text-[14px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Rp{invoice.amount.toLocaleString("id-ID")}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
