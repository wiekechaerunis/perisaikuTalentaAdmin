import { useDrop } from "react-dnd";
import { KanbanCard } from "./KanbanCard";
import { Candidate, PipelineStage, STAGE_DISPLAY_LABEL, STAGE_BADGE, KANBAN_DRAG_TYPE } from "../../mocks/pipeline";

export function KanbanColumn({ stage, candidates, onDropRequest, onOpenCandidate, onScheduleClick, onJoinMeeting, selectedIds, selectionMode, onToggleSelect, activeCandidateId, highlighted, viewedCandidateIds }: {
  stage: PipelineStage;
  candidates: Candidate[];
  onDropRequest: (candidateId: string, from: PipelineStage, to: PipelineStage) => void;
  onOpenCandidate: (c: Candidate) => void;
  onScheduleClick: (c: Candidate) => void;
  onJoinMeeting: (c: Candidate) => void;
  selectedIds: Set<string>;
  selectionMode: boolean;
  onToggleSelect: (id: string) => void;
  activeCandidateId: string | null;
  highlighted?: boolean;
  viewedCandidateIds: Set<string>;
}) {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: KANBAN_DRAG_TYPE,
    drop: (item: { id: string; fromStage: PipelineStage }) => {
      if (item.fromStage !== stage) onDropRequest(item.id, item.fromStage, stage);
    },
    collect: (monitor) => ({ isOver: monitor.isOver() }),
  }), [stage, onDropRequest]);

  return (
    <div className="flex flex-col gap-4 flex-1 min-w-[280px]">
      <div className="flex items-center justify-between pb-2 border-b-[0.5px] border-border-default">
        <div className="flex items-center gap-2">
          <span className="text-[14px] font-bold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>{STAGE_DISPLAY_LABEL[stage]}</span>
          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${STAGE_BADGE[stage].bg} ${STAGE_BADGE[stage].text}`} style={{ fontFamily: "var(--font-body)" }}>{candidates.length}</span>
        </div>
      </div>
      <div
        ref={dropRef}
        className={`hover-scrollbar rounded-xl p-3 flex flex-col gap-3 min-h-[600px] flex-1 overflow-y-auto transition-all duration-700 ${isOver ? "border bg-[#f1f5f9] border-dashed border-brand-primary" : highlighted ? "border-2 bg-[#f0f6ff] border-[#bcd2ff]" : "border bg-[#f1f5f9] border-transparent"}`}
      >
        {candidates.length === 0 ? (
          <div className="bg-white rounded-lg border border-dashed border-border-default flex items-center justify-center h-20 w-full">
            <span className="text-[12px] text-border-default" style={{ fontFamily: "var(--font-body)" }}>Tidak ada kandidat</span>
          </div>
        ) : candidates.map(c => (
          <KanbanCard
            key={c.id}
            candidate={c}
            stage={stage}
            onOpen={onOpenCandidate}
            onScheduleClick={onScheduleClick}
            onJoinMeeting={onJoinMeeting}
            selected={selectedIds.has(c.id)}
            isActive={activeCandidateId === c.id}
            selectionMode={selectionMode}
            onToggleSelect={() => onToggleSelect(c.id)}
            selectedCount={selectedIds.size}
            isUnopened={!viewedCandidateIds.has(c.id)}
          />
        ))}
      </div>
    </div>
  );
}
