import { useDrag } from "react-dnd";
import { Check, MapPin, Briefcase, Wallet, Pencil, Video } from "lucide-react";
import imgCandidate from "../../imports/Frame626639/fb0866f26f42d40c2ae9ca60a1f6f85a45c71cad.png";
import imgInvitedFrame from "../../imports/InvitedBadge/avatar-framed.png";
import imgInvitationStamp from "../../assets/invitation-stamp.png";
import { StarRatingIcon } from "../shared/Icons";
import { Candidate, PipelineStage, getCandidateAge, KANBAN_DRAG_TYPE } from "../../mocks/pipeline";

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#25D366" className="shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
    </svg>
  );
}

export function KanbanCard({ candidate, stage, onOpen, onScheduleClick, onJoinMeeting, selected, isActive, selectionMode, onToggleSelect, selectedCount, isUnopened }: {
  candidate: Candidate; stage: PipelineStage; onOpen: (c: Candidate) => void; onScheduleClick: (c: Candidate) => void; onJoinMeeting: (c: Candidate) => void;
  selected: boolean; isActive: boolean; selectionMode: boolean; onToggleSelect: () => void; selectedCount: number; isUnopened?: boolean;
}) {
  const isRejected = stage === "Ditolak";
  const highlighted = selected || isActive;
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: KANBAN_DRAG_TYPE,
    item: { id: candidate.id, fromStage: stage },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  }), [candidate.id, stage]);

  return (
    <div
      ref={dragRef}
      onClick={() => onOpen(candidate)}
      className={`group relative w-full text-left rounded-[10px] border p-4 flex flex-col gap-3 transition-all shrink-0 shadow-[0px_4px_6px_rgba(0,0,0,0.04)] hover:shadow-[0px_8px_10px_rgba(0,0,0,0.1)] cursor-grab active:cursor-grabbing ${highlighted ? "bg-[#ebf2ff] border-brand-primary" : isRejected ? "bg-[#f6f4f4] border-[#e2e8f0]" : "bg-white border-[#e2e8f0]"} ${isDragging ? "opacity-40" : "opacity-100"}`}
    >
      {isUnopened && (
        <div title="Belum dibuka" className="absolute top-2 left-2 z-10 size-2 rounded-full bg-[#ff6b35]" />
      )}
      {isDragging && selected && selectedCount >= 2 && (
        <div className="absolute -top-2 -right-2 z-20 bg-brand-primary text-white rounded-full size-[22px] flex items-center justify-center shadow-md">
          <span className="text-[11px] font-bold" style={{ fontFamily: "var(--font-body)" }}>{selectedCount}</span>
        </div>
      )}
      {candidate.isInvited && (
        <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden rounded-[10px]">
          <img
            src={imgInvitationStamp}
            alt="Via Undangan"
            className="absolute left-1/2 top-[15px] w-[150px] -translate-x-1/2 -rotate-[7deg] opacity-100"
          />
        </div>
      )}
      <button
        onClick={(e) => { e.stopPropagation(); onToggleSelect(); }}
        className={`absolute top-2.5 right-2.5 z-10 size-4 rounded border-[1.5px] flex items-center justify-center transition-opacity shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)] ${selected ? "bg-brand-primary border-brand-primary opacity-100" : "bg-white border-[#c7c7c7] opacity-0 group-hover:opacity-100"} ${selectionMode ? "opacity-100" : ""}`}
      >
        {selected && <Check size={11} className="text-white" strokeWidth={3} />}
      </button>
      <div className={`flex flex-col gap-[5px] w-full ${stage === "Wawancara" ? "border-b border-border-lighter pb-2" : ""}`}>
        <div className="flex items-start justify-between w-full gap-2 pr-[22px]">
          <div className="flex flex-1 min-w-0 items-center gap-2.5">
            <div className="relative shrink-0" style={{ width: 26, height: 26 }}>
              <img src={imgCandidate} alt="" className="size-[26px] rounded-full object-cover" />
              {candidate.isInvited && (
                <img
                  src={imgInvitedFrame}
                  alt=""
                  className="absolute pointer-events-none max-w-none"
                  style={{ width: 34, height: 34, left: -4, top: -3 }}
                />
              )}
            </div>
            <div className="flex flex-col min-w-0 gap-px justify-center">
              <p className={`flex min-w-0 items-baseline gap-1 text-[14px] font-semibold leading-[20px] ${isRejected ? "text-text-lighter" : "text-[#0f172a]"}`} style={{ fontFamily: "var(--font-body)" }}>
                <span className="truncate">{candidate.name}</span>
                <span className="shrink-0 text-[12px] font-normal text-text-lighter">({getCandidateAge(candidate)} th)</span>
              </p>
              <p className="text-[10px] text-text-lighter truncate" style={{ fontFamily: "var(--font-body)" }}>{candidate.company}</p>
            </div>
          </div>
          <WhatsAppIcon />
        </div>
        <div className={`flex items-center flex-wrap gap-x-3 gap-y-1 ${stage !== "Wawancara" ? "border-b-[0.5px] border-dashed border-border-lighter pb-1.5" : ""}`}>
          <span className="flex items-center gap-1.5 text-[10px] text-text-lighter whitespace-nowrap" style={{ fontFamily: "var(--font-body)" }}>
            <MapPin size={10} />{candidate.lokasi}
          </span>
          <span className="flex items-center gap-1.5 text-[10px] text-text-lighter whitespace-nowrap" style={{ fontFamily: "var(--font-body)" }}>
            <Briefcase size={10} />{candidate.pengalaman}
          </span>
          <span className="flex items-center gap-1.5 text-[10px] text-text-lighter whitespace-nowrap" style={{ fontFamily: "var(--font-body)" }}>
            <Wallet size={10} />{candidate.ekspektasiGaji}
          </span>
        </div>
        <div className="flex items-center justify-between w-full">
          {candidate.rating != null && (
            <span className="flex items-center gap-1 text-[10px] text-text-default" style={{ fontFamily: "var(--font-body)" }}>
              <StarRatingIcon size={14} />
              {candidate.rating}
            </span>
          )}
          <span className="text-[10px] text-text-subtle" style={{ fontFamily: "var(--font-body)" }}>{candidate.appliedDate}</span>
        </div>
      </div>
      {stage === "Wawancara" && (
        candidate.interviewSchedule ? (
          candidate.interviewMethod === "offline" ? (
            <div className="flex items-center gap-2 rounded-lg bg-[#f4fbf6] px-2.5 py-2 w-full">
              <button
                onClick={(e) => { e.stopPropagation(); if (candidate.interviewMapsLink) window.open(candidate.interviewMapsLink, "_blank", "noopener,noreferrer"); }}
                title="Buka lokasi di Google Maps"
                className="flex min-w-0 flex-1 items-center gap-2 text-left hover:opacity-75"
              >
                <MapPin size={20} className="shrink-0 text-[#35964a]" />
                <span className="min-w-0">
                  <span className="block truncate text-[11px] font-bold text-[#35964a]">{candidate.interviewLocationName}</span>
                  <span className="block truncate text-[10px] text-text-lighter">{candidate.interviewAddress}</span>
                </span>
              </button>
              <button onClick={(e) => { e.stopPropagation(); onScheduleClick(candidate); }} title="Ubah jadwal" className="shrink-0 rounded p-1 hover:bg-[#dbeefe]"><Pencil size={11} className="text-[#0284c7]" /></button>
            </div>
          ) : (
          <div className="flex items-center gap-1 bg-[#f0f9ff] rounded-[4px] pl-2 pr-1 py-1 w-full">
            <button
              onClick={(e) => { e.stopPropagation(); onJoinMeeting(candidate); }}
              title="Buka Google Meet"
              className="flex items-center gap-1.5 flex-1 min-w-0 text-left hover:opacity-75 transition-opacity"
            >
              <Video size={16} className="text-[#0284c7] shrink-0" />
              <span className="text-[11px] font-semibold text-[#0284c7] truncate" style={{ fontFamily: "var(--font-body)" }}>{candidate.interviewSchedule}</span>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); onScheduleClick(candidate); }}
              title="Ubah jadwal"
              className="shrink-0 p-1 rounded hover:bg-[#dbeefe] transition-colors"
            >
              <Pencil size={11} className="text-[#0284c7]" />
            </button>
          </div>
          )
        ) : (
          <button
            onClick={(e) => { e.stopPropagation(); onScheduleClick(candidate); }}
            className="flex items-center justify-center gap-1.5 border border-brand-primary rounded-[11px] px-2 py-1 w-full hover:bg-[#ebf2ff] transition-colors"
          >
            <Video size={16} className="text-brand-primary shrink-0" />
            <span className="text-[11px] font-semibold text-brand-primary" style={{ fontFamily: "var(--font-body)" }}>Set Jadwal</span>
          </button>
        )
      )}
    </div>
  );
}
