// Not currently used anywhere in the app — kept as-is during the file split (not deleted, per scope).
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isSameDay, isWithinInterval, addMonths, subMonths, isBefore } from "date-fns";

export interface DateRange { start: Date | null; end: Date | null }

export function MiniCalendar({
  range,
  hovered,
  onHover,
  onSelect,
}: {
  range: DateRange;
  hovered: Date | null;
  onHover: (d: Date | null) => void;
  onSelect: (d: Date) => void;
}) {
  const [month, setMonth] = useState(() => new Date());
  const monthStart = startOfMonth(month);
  const monthEnd = endOfMonth(month);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const startOffset = (getDay(monthStart) + 6) % 7; // Mon=0
  const DAY_LABELS = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

  const getEffectiveEnd = () => {
    if (range.start && !range.end && hovered) {
      return isBefore(hovered, range.start) ? range.start : hovered;
    }
    return range.end;
  };
  const effectiveStart = range.start && !range.end && hovered && isBefore(hovered, range.start) ? hovered : range.start;
  const effectiveEnd = getEffectiveEnd();

  const isStart = (d: Date) => !!effectiveStart && isSameDay(d, effectiveStart);
  const isEnd = (d: Date) => !!effectiveEnd && isSameDay(d, effectiveEnd);
  const isInRange = (d: Date) =>
    !!effectiveStart && !!effectiveEnd &&
    isWithinInterval(d, { start: effectiveStart, end: effectiveEnd }) &&
    !isSameDay(d, effectiveStart) && !isSameDay(d, effectiveEnd);

  return (
    <div className="w-full select-none">
      {/* Month nav */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={() => setMonth(subMonths(month, 1))}
          className="p-1 rounded hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft size={14} className="text-icon-default" />
        </button>
        <span className="text-[13px] font-semibold text-text-default" style={{ fontFamily: "var(--font-body)" }}>
          {format(month, "MMMM yyyy")}
        </span>
        <button
          onClick={() => setMonth(addMonths(month, 1))}
          className="p-1 rounded hover:bg-gray-100 transition-colors"
        >
          <ChevronRight size={14} className="text-icon-default" />
        </button>
      </div>
      {/* Day labels */}
      <div className="grid grid-cols-7 mb-1">
        {DAY_LABELS.map((d) => (
          <div key={d} className="text-center text-[10px] text-[#9ca0a8] font-semibold py-1">{d}</div>
        ))}
      </div>
      {/* Day cells */}
      <div className="grid grid-cols-7">
        {Array.from({ length: startOffset }).map((_, i) => <div key={`e${i}`} />)}
        {days.map((d) => {
          const start = isStart(d);
          const end = isEnd(d);
          const inRange = isInRange(d);
          return (
            <div
              key={d.toISOString()}
              className="flex items-center justify-center"
              style={{ height: 32 }}
              onMouseEnter={() => onHover(d)}
              onMouseLeave={() => onHover(null)}
              onClick={() => onSelect(d)}
            >
              <div
                className={`
                  w-full h-full flex items-center justify-center cursor-pointer text-[12px] transition-colors
                  ${start || end ? "bg-brand-primary text-white rounded-full" : ""}
                  ${inRange ? "bg-[#e8efff] text-brand-primary" : ""}
                  ${!start && !end && !inRange ? "hover:bg-gray-100 rounded-full text-text-default" : ""}
                `}
              >
                {format(d, "d")}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
