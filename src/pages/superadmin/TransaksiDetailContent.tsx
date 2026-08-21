import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { ArrowLeft, ChevronRight, CheckCircle2, XCircle, Clock } from "lucide-react";
import { SuperadminTopBar } from "../../layouts/SuperadminLayout";
import { StatusToastStack, StatusToastItem } from "../../components/shared/StatusToast";
import { RefundTransactionModal } from "../../components/superadmin/RefundTransactionModal";
import { TRANSACTION_ROWS, TransactionStatus, refundTransactionRow } from "../../mocks/transactions";

const STATUS_STYLE: Record<TransactionStatus, { bg: string; text: string }> = {
  Paid: { bg: "bg-[#d1fae5]", text: "text-[#065f46]" },
  Pending: { bg: "bg-[#fffaf4]", text: "text-[#d19400]" },
  Failed: { bg: "bg-[#fee2e2]", text: "text-[#991b1b]" },
  Refunded: { bg: "bg-[#f3f4f6]", text: "text-[#64748b]" },
};

export function TransaksiDetailContent() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const initial = TRANSACTION_ROWS.find(r => r.id === id) ?? null;
  const [row, setRow] = useState(initial);
  const [confirmRefund, setConfirmRefund] = useState(false);
  const [toasts, setToasts] = useState<StatusToastItem[]>([]);

  const pushToast = (message: string) => {
    const toastId = Date.now();
    setToasts(prev => [...prev, { id: toastId, variant: "success", message }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== toastId)), 4000);
  };

  if (!row) {
    return (
      <div className="flex-1 min-w-0 h-full overflow-y-auto bg-surface">
        <SuperadminTopBar />
        <div className="flex flex-col items-center justify-center gap-3 py-24">
          <p className="text-text-default text-base font-bold" style={{ fontFamily: "var(--font-body)" }}>Transaksi tidak ditemukan</p>
          <button onClick={() => navigate("/superadmin/transaksi")} className="text-sm font-semibold text-brand-primary hover:underline" style={{ fontFamily: "var(--font-body)" }}>
            Kembali ke Daftar Transaksi
          </button>
        </div>
      </div>
    );
  }

  const statusStyle = STATUS_STYLE[row.status];

  const handleRefund = () => {
    refundTransactionRow(row.id);
    setRow(prev => (prev ? { ...prev, status: "Refunded" } : prev));
    setConfirmRefund(false);
    pushToast(`Transaksi ${row.id} berhasil di-refund`);
  };

  return (
    <div className="flex-1 min-w-0 h-full overflow-y-auto bg-surface pb-10">
      <SuperadminTopBar />

      <div className="flex flex-col gap-6 px-10 pt-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2.5">
              <button onClick={() => navigate(-1)} className="text-text-default hover:text-brand-primary transition-colors" aria-label="Kembali">
                <ArrowLeft size={28} />
              </button>
              <p className="text-text-default text-[28px] font-bold leading-8" style={{ fontFamily: "var(--font-body)" }}>Detail Transaksi</p>
            </div>
            <div className="flex items-center gap-2.5 pl-[38px]">
              <button onClick={() => navigate("/superadmin/transaksi")} className="text-[#ff6b35] text-sm font-semibold hover:underline" style={{ fontFamily: "var(--font-body)" }}>
                Daftar Transaksi
              </button>
              <ChevronRight size={14} className="text-text-muted" />
              <span className="text-text-muted text-sm" style={{ fontFamily: "var(--font-body)" }}>Detail Transaksi</span>
            </div>
          </div>

          {row.status === "Paid" && (
            <button
              onClick={() => setConfirmRefund(true)}
              className="h-10 px-5 rounded-full border-[1.5px] border-[#f83a1e] text-[#f83a1e] text-sm font-bold hover:bg-[#fee2e2] transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Refund
            </button>
          )}
        </div>

        <div className="bg-white rounded-[10px] p-6 flex items-center justify-between gap-6">
          <div>
            <p className="text-[#09090b] text-[21px] font-bold" style={{ fontFamily: "var(--font-body)" }}>{row.employerName}</p>
            <p className="text-text-muted text-sm mt-1" style={{ fontFamily: "var(--font-body)" }}>{row.id} · Paket {row.tierNama} · {row.metodePembayaran}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <p className="text-text-default text-[24px] font-bold" style={{ fontFamily: "var(--font-body)" }}>Rp{row.amount.toLocaleString("id-ID")}</p>
            <span className={`inline-flex px-2.5 py-1 rounded-full text-[12px] font-semibold ${statusStyle.bg} ${statusStyle.text}`} style={{ fontFamily: "var(--font-heading)" }}>{row.status}</span>
          </div>
        </div>

        <div className="bg-white rounded-[10px] p-8 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-[#09090b] text-base font-bold" style={{ fontFamily: "var(--font-body)" }}>Data Invoice</p>
            <div className="grid grid-cols-2 gap-4 text-sm" style={{ fontFamily: "var(--font-body)" }}>
              <div>
                <p className="text-text-lighter text-xs">Nama Perusahaan</p>
                <p className="text-text-darker font-medium">{row.invoiceData.namaPerusahaan}</p>
              </div>
              <div>
                <p className="text-text-lighter text-xs">NPWP</p>
                <p className="text-text-darker font-medium">{row.invoiceData.npwp ?? "-"}</p>
              </div>
              <div className="col-span-2">
                <p className="text-text-lighter text-xs">Alamat</p>
                <p className="text-text-darker font-medium">{row.invoiceData.alamat}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[#09090b] text-base font-bold" style={{ fontFamily: "var(--font-body)" }}>Riwayat Webhook</p>
            <div className="flex flex-col">
              {row.webhookEvents.map((event, i) => (
                <div key={i} className={`flex items-center gap-3 py-3 ${i < row.webhookEvents.length - 1 ? "border-b border-[#e4e4e7]" : ""}`}>
                  {event.status === "success" ? (
                    <CheckCircle2 size={16} className="text-[#10b981] shrink-0" />
                  ) : (
                    <XCircle size={16} className="text-[#f83a1e] shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-text-darker text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>{event.event}</p>
                    <div className="flex items-center gap-2 text-text-lighter text-xs" style={{ fontFamily: "var(--font-body)" }}>
                      <Clock size={11} />
                      {event.timestamp}
                      <span className="size-[3px] rounded-full bg-text-lighter" />
                      Percobaan ke-{event.attempt}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {confirmRefund && (
        <RefundTransactionModal id={row.id} employerName={row.employerName} onClose={() => setConfirmRefund(false)} onConfirm={handleRefund} />
      )}

      <StatusToastStack toasts={toasts} onDismiss={toastId => setToasts(prev => prev.filter(t => t.id !== toastId))} />
    </div>
  );
}
