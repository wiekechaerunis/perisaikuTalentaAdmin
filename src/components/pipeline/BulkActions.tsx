import { useState } from "react";
import { ArrowRightLeft, X, Download } from "lucide-react";
import imgCandidate from "../../imports/Frame626639/fb0866f26f42d40c2ae9ca60a1f6f85a45c71cad.png";
import { Candidate, PipelineStage, PIPELINE_STAGES, STAGE_DISPLAY_LABEL } from "../../mocks/pipeline";

export function BulkActionBar({ selectedIds, candidates, onMoveStage, onReject, onDownload, onClear }: {
  selectedIds: Set<string>; candidates: Candidate[];
  onMoveStage: () => void; onReject: () => void; onDownload: () => void; onClear: () => void;
}) {
  const count = selectedIds.size;
  if (count === 0) return null;
  const selected = candidates.filter(c => selectedIds.has(c.id));
  const avatars = selected.slice(0, 3);

  return (
    <div className="fixed bottom-7 left-1/2 -translate-x-1/2 z-40">
      <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.18)] border border-[#e2e8f0] flex items-center gap-4 px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center">
            {avatars.map((c, i) => (
              <div key={c.id} className="relative size-7 rounded-full border-2 border-white overflow-hidden" style={{ marginLeft: i === 0 ? 0 : -8, zIndex: avatars.length - i }}>
                <img src={imgCandidate} alt="" className="size-full object-cover" />
              </div>
            ))}
            {count > 3 && (
              <div className="relative size-7 rounded-full border-2 border-white bg-[#f1f5f9] flex items-center justify-center" style={{ marginLeft: -8 }}>
                <span className="text-[10px] font-bold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>+{count - 3}</span>
              </div>
            )}
          </div>
          <div>
            <p className="text-[14px] font-bold text-[#0f172a] leading-[18px]" style={{ fontFamily: "var(--font-body)" }}>{count} Kandidat</p>
            <p className="text-[11px] text-text-subtle" style={{ fontFamily: "var(--font-body)" }}>dipilih</p>
          </div>
        </div>
        <div className="w-px h-9 bg-[#e2e8f0]" />
        <div className="flex items-center gap-2">
          <button onClick={onMoveStage} className="flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-hover text-white px-4 h-[38px] rounded-[10px] transition-colors text-[13px] font-semibold whitespace-nowrap" style={{ fontFamily: "var(--font-body)" }}>
            <ArrowRightLeft size={15} /> Pindah Tahap
          </button>
          <button onClick={onReject} className="flex items-center gap-2 bg-[#ffe4e6] hover:bg-[#fecdd3] text-danger-strong px-4 h-[38px] rounded-[10px] transition-colors text-[13px] font-semibold whitespace-nowrap" style={{ fontFamily: "var(--font-body)" }}>
            <X size={15} /> Tolak
          </button>
          <button onClick={onDownload} className="flex items-center gap-2 bg-[#f1f5f9] hover:bg-[#e2e8f0] text-text-darker px-4 h-[38px] rounded-[10px] transition-colors text-[13px] font-semibold whitespace-nowrap" style={{ fontFamily: "var(--font-body)" }}>
            <Download size={15} /> Download CV
          </button>
        </div>
        <div className="w-px h-9 bg-[#e2e8f0]" />
        <button onClick={onClear} title="Batal pilih" className="flex items-center justify-center size-[34px] rounded-lg hover:bg-[#f1f5f9] text-text-subtle hover:text-text-darker transition-colors shrink-0">
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

// ── Bulk move modal (pick a target stage for all selected candidates) ────────

export function BulkMoveModal({ count, onConfirm, onCancel }: { count: number; onConfirm: (stage: PipelineStage) => void; onCancel: () => void }) {
  const [chosen, setChosen] = useState<PipelineStage | null>(null);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-6" onClick={onCancel}>
      <div className="bg-white rounded-2xl border border-border-lighter shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] p-6 flex flex-col gap-5 w-full max-w-[420px]"
        onClick={e => e.stopPropagation()}>
        <div className="flex flex-col gap-1">
          <p className="text-[18px] font-bold text-[#0f172a]" style={{ fontFamily: "var(--font-body)" }}>Pindah Tahap</p>
          <p className="text-[14px] text-[#475569]" style={{ fontFamily: "var(--font-body)" }}>
            Pilih tahap tujuan untuk{" "}
            <span className="font-semibold text-[#0f172a]" style={{ fontFamily: "var(--font-body)" }}>{count} kandidat</span> terpilih.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {PIPELINE_STAGES.map(stage => (
            <button key={stage} onClick={() => setChosen(stage)}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-[10px] border text-left transition-colors ${chosen === stage ? "border-brand-primary bg-[#ebf2ff]" : "border-[#e2e8f0] bg-white hover:bg-gray-50"}`}>
              <div className={`size-[18px] rounded-full border-2 flex items-center justify-center shrink-0 ${chosen === stage ? "border-brand-primary" : "border-border-default"}`}>
                {chosen === stage && <div className="size-2 rounded-full bg-brand-primary" />}
              </div>
              <span className={`text-[14px] font-semibold ${chosen === stage ? "text-brand-primary" : "text-text-darker"}`} style={{ fontFamily: "var(--font-body)" }}>{STAGE_DISPLAY_LABEL[stage]}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center justify-end gap-3">
          <button onClick={onCancel}
            className="border-[1.5px] border-border-default rounded-full px-5 py-2 text-[14px] font-bold text-text-darker hover:bg-gray-50 transition-colors"
            style={{ fontFamily: "var(--font-body)" }}>Batal</button>
          <button onClick={() => chosen && onConfirm(chosen)} disabled={!chosen}
            className={`rounded-full px-4 py-2 text-[14px] font-bold transition-colors ${chosen ? "bg-brand-primary text-white hover:bg-brand-primary-hover" : "bg-border-default text-white cursor-not-allowed"}`}
            style={{ fontFamily: "var(--font-body)" }}>Pindahkan</button>
        </div>
      </div>
    </div>
  );
}

// ── Bulk reject modal ─────────────────────────────────────────────────────────

export function BulkRejectModal({ names, onConfirm, onCancel }: { names: string[]; onConfirm: () => void; onCancel: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-6" onClick={onCancel}>
      <div className="bg-white rounded-2xl border border-border-lighter shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] p-6 flex flex-col gap-4 w-full max-w-[420px] items-center text-center"
        onClick={e => e.stopPropagation()}>
        <div className="bg-[#ffe4e6] rounded-full size-14 flex items-center justify-center">
          <X size={28} className="text-danger-strong" strokeWidth={2.5} />
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-[18px] font-bold text-[#0f172a]" style={{ fontFamily: "var(--font-body)" }}>Tolak {names.length} Kandidat?</p>
          <p className="text-[14px] leading-[20px] text-[#475569]" style={{ fontFamily: "var(--font-body)" }}>
            Tindakan ini akan memindahkan kandidat berikut ke tahap{" "}
            <span className="font-semibold text-danger-strong" style={{ fontFamily: "var(--font-body)" }}>Ditolak</span>:
          </p>
          <div className="flex flex-wrap gap-1.5 justify-center mt-1">
            {names.map((n, i) => (
              <span key={i} className="bg-[#f1f5f9] px-2.5 py-1 rounded-full text-[12px] font-semibold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>{n}</span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 w-full pt-1">
          <button onClick={onCancel}
            className="flex-1 border-[1.5px] border-border-default rounded-full px-5 py-2 text-[14px] font-bold text-text-darker hover:bg-gray-50 transition-colors"
            style={{ fontFamily: "var(--font-body)" }}>Batal</button>
          <button onClick={onConfirm}
            className="flex-1 bg-danger-strong rounded-full px-4 py-2 text-[14px] font-bold text-white hover:bg-[#d62e14] transition-colors"
            style={{ fontFamily: "var(--font-body)" }}>Ya, Tolak</button>
        </div>
      </div>
    </div>
  );
}
