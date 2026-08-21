import { CreditCard, Landmark, Wallet } from "lucide-react";
import { PAYMENT_METHOD_OPTIONS, PaymentMethod } from "../../mocks/transactions";

const METHOD_ICON: Record<PaymentMethod, typeof CreditCard> = {
  "Kartu Kredit/Debit": CreditCard,
  "Transfer Bank (VA)": Landmark,
  GoPay: Wallet,
  OVO: Wallet,
  Dana: Wallet,
};

export function PaymentMethodSelector({ value, onChange }: { value: PaymentMethod | ""; onChange: (v: PaymentMethod) => void }) {
  return (
    <div className="grid grid-cols-2 gap-3 w-full">
      {PAYMENT_METHOD_OPTIONS.map(method => {
        const Icon = METHOD_ICON[method];
        const selected = value === method;
        return (
          <button
            key={method}
            onClick={() => onChange(method)}
            className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-colors text-left ${selected ? "bg-[#ebf2ff] border-brand-primary" : "bg-white border-[#d9d9de] hover:bg-gray-50"}`}
          >
            <div className={`size-9 rounded-full flex items-center justify-center shrink-0 ${selected ? "bg-white" : "bg-[#ededf7]"}`}>
              <Icon size={18} className="text-brand-primary" />
            </div>
            <p className="flex-1 min-w-0 text-text-darker text-[14px] font-semibold" style={{ fontFamily: "var(--font-body)" }}>{method}</p>
          </button>
        );
      })}
    </div>
  );
}
