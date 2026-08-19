import { useSearchParams } from "react-router";
import { ShieldCheck, QrCode } from "lucide-react";

const DOC_TITLES: Record<string, string> = {
  NIB: "Nomor Induk Berusaha (NIB)",
  SIUP: "Surat Izin Usaha Perdagangan (SIUP)",
  NPWP: "Nomor Pokok Wajib Pajak (NPWP)",
};

function pseudoNumber(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  return String(hash).padStart(13, "0").slice(0, 13);
}

export function DocumentPreview() {
  const [params] = useSearchParams();
  const type = params.get("type") ?? "NIB";
  const nama = params.get("nama") ?? "-";
  const tanggal = params.get("tanggal") ?? "-";
  const nomor = pseudoNumber(`${type}-${nama}`);

  return (
    <div className="min-h-screen bg-[#e9ebee] flex items-center justify-center p-8">
      <div className="relative bg-white w-full max-w-[560px] rounded-sm shadow-[0_4px_24px_rgba(0,0,0,0.12)] p-10 flex flex-col gap-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="text-[64px] font-black text-[#000000] opacity-[0.04] -rotate-[30deg] whitespace-nowrap" style={{ fontFamily: "var(--font-body)" }}>
            DOKUMEN CONTOH
          </span>
        </div>

        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="bg-brand-primary rounded-md size-9 flex items-center justify-center shrink-0">
              <ShieldCheck size={18} className="text-white" />
            </div>
            <div>
              <p className="text-[12px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Perisaiku Talenta</p>
              <p className="text-[10px] text-text-muted" style={{ fontFamily: "var(--font-body)" }}>Dokumen Spesimen / Dummy</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 shrink-0">
            <div className="size-[52px] rounded border border-border-lighter flex items-center justify-center">
              <QrCode size={34} className="text-text-lighter" />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-1 border-t border-b border-dashed border-border-lighter py-5 text-center">
          <p className="text-[11px] font-semibold tracking-wide text-text-muted uppercase" style={{ fontFamily: "var(--font-body)" }}>{DOC_TITLES[type] ?? type}</p>
          <p className="text-[22px] font-bold text-text-default tracking-wider" style={{ fontFamily: "var(--font-heading)" }}>{nomor}</p>
        </div>

        <div className="relative flex flex-col gap-3">
          {[
            { label: "Nama Perusahaan", value: nama },
            { label: "Jenis Dokumen", value: DOC_TITLES[type] ?? type },
            { label: "Tanggal Terbit", value: tanggal },
            { label: "Status", value: "Berlaku" },
          ].map(row => (
            <div key={row.label} className="flex items-center justify-between gap-4 text-[13px]" style={{ fontFamily: "var(--font-body)" }}>
              <span className="text-text-muted">{row.label}</span>
              <span className="font-semibold text-text-default text-right">{row.value}</span>
            </div>
          ))}
        </div>

        <p className="relative text-[11px] leading-5 text-text-lighter text-center pt-2" style={{ fontFamily: "var(--font-body)" }}>
          Dokumen ini adalah data contoh (dummy) yang dibuat untuk keperluan demo aplikasi Perisaiku Talenta dan bukan dokumen resmi yang diterbitkan oleh instansi pemerintah mana pun.
        </p>
      </div>
    </div>
  );
}
