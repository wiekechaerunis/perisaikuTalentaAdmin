import { useState, useEffect, useRef } from "react";
import { format, isBefore } from "date-fns";
import { X, Video, Calendar, ChevronDown } from "lucide-react";

export const INTERVIEW_MAX_DURATION_MIN = 90;
export const INTERVIEW_DEFAULT_DURATION_MIN = 30;
export const INTERVIEW_NOTE_MAX_LEN = 500;

export const TIMEZONE_OPTIONS = [
  { value: "WIB", label: "WIB (GMT+7)", offset: 7 },
  { value: "WITA", label: "WITA (GMT+8)", offset: 8 },
  { value: "WIT", label: "WIT (GMT+9)", offset: 9 },
  { value: "SGT", label: "Singapore (GMT+8)", offset: 8 },
  { value: "LONDON", label: "London (GMT+0)", offset: 0 },
  { value: "NY", label: "New York (GMT-4)", offset: -4 },
];
export const DEFAULT_TIMEZONE = "WIB";

// Converts a stored absolute instant back into the "yyyy-MM-ddTHH:mm" wall-clock string it was originally entered as, for a given zone.
export function toWallClockString(date: Date, tzValue: string): string {
  const tz = TIMEZONE_OPTIONS.find(t => t.value === tzValue) ?? TIMEZONE_OPTIONS[0];
  const shifted = new Date(date.getTime() + tz.offset * 60 * 60 * 1000);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${shifted.getUTCFullYear()}-${pad(shifted.getUTCMonth() + 1)}-${pad(shifted.getUTCDate())}T${pad(shifted.getUTCHours())}:${pad(shifted.getUTCMinutes())}`;
}

export function ScheduleInterviewModal({ candidateName, initial, initialMode = "edit", onCancel, onConfirm, onCancelSchedule }: {
  candidateName: string;
  initial?: { dateTime: Date; timezone: string; durationMinutes: number; note: string; method?: "online" | "offline"; meetingLink?: string; locationName?: string; address?: string; mapsLink?: string } | null;
  initialMode?: "edit" | "confirmCancel";
  onCancel: () => void;
  onConfirm: (data: { dateTime: Date; displayDate: Date; durationMinutes: number; note: string; timezone: string; method: "online" | "offline"; meetingLink?: string; locationName?: string; address?: string; mapsLink?: string }) => void;
  onCancelSchedule?: (note: string) => void;
}) {
  const isReschedule = !!initial;
  const [mode, setMode] = useState<"edit" | "confirmCancel">(initialMode);
  const nowLocal = format(new Date(), "yyyy-MM-dd'T'HH:mm");
  const [dateTime, setDateTime] = useState(() => initial ? toWallClockString(initial.dateTime, initial.timezone) : "");
  const [duration, setDuration] = useState(initial?.durationMinutes ?? INTERVIEW_DEFAULT_DURATION_MIN);
  const [note, setNote] = useState(initial?.note ?? "");
  const [cancelNote, setCancelNote] = useState("");
  const [error, setError] = useState("");
  const [timezone, setTimezone] = useState(initial?.timezone ?? DEFAULT_TIMEZONE);
  const [interviewMethod, setInterviewMethod] = useState<"online" | "offline">(initial?.method ?? "online");
  const [locationName, setLocationName] = useState(initial?.locationName ?? "");
  const [address, setAddress] = useState(initial?.address ?? "");
  const [mapsLink, setMapsLink] = useState(initial?.mapsLink ?? "");
  const meetingLink = initial?.meetingLink ?? "https://meet.google.com/per-isa-iku";
  const [tzOpen, setTzOpen] = useState(false);
  const tzRef = useRef<HTMLDivElement>(null);
  const selectedTz = TIMEZONE_OPTIONS.find(t => t.value === timezone)!;

  useEffect(() => {
    if (!tzOpen) return;
    const handler = (e: MouseEvent) => {
      if (tzRef.current && !tzRef.current.contains(e.target as Node)) setTzOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [tzOpen]);

  const handleSubmit = () => {
    if (interviewMethod === "offline" && (!locationName.trim() || !address.trim() || !mapsLink.trim())) { setError("Nama lokasi, alamat, dan link Google Maps wajib diisi untuk interview offline."); return; }
    if (interviewMethod === "offline" && !/^https?:\/\//i.test(mapsLink.trim())) { setError("Link Google Maps harus berupa URL yang valid."); return; }
    if (!dateTime) { setError("Tanggal & waktu wajib diisi."); return; }
    // Interpret the entered wall-clock time in the selected timezone's offset, not the browser's local zone.
    const [datePart, timePart] = dateTime.split("T");
    const [y, m, d] = datePart.split("-").map(Number);
    const [hh, mm] = timePart.split(":").map(Number);
    const utcMillis = Date.UTC(y, m - 1, d, hh, mm) - selectedTz.offset * 60 * 60 * 1000;
    const parsed = new Date(utcMillis);
    if (isBefore(parsed, new Date())) { setError("Waktu interview harus sekarang atau setelahnya."); return; }
    // displayDate preserves the exact wall-clock digits the user typed (for labels), independent of the viewer's own local timezone.
    const displayDate = new Date(y, m - 1, d, hh, mm);
    onConfirm({ dateTime: parsed, displayDate, durationMinutes: duration, note: note.trim(), timezone: selectedTz.value, method: interviewMethod, meetingLink: interviewMethod === "online" ? meetingLink : undefined, locationName: interviewMethod === "offline" ? locationName.trim() : undefined, address: interviewMethod === "offline" ? address.trim() : undefined, mapsLink: interviewMethod === "offline" ? mapsLink.trim() : undefined });
  };

  if (mode === "confirmCancel") {
    return (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-6" onClick={onCancel}>
        <div className="bg-white rounded-2xl border border-border-lighter shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] p-6 flex flex-col gap-5 w-full max-w-[440px]"
          onClick={e => e.stopPropagation()}>
          <div className="flex items-center justify-between w-full gap-2">
            <div>
              <p className="text-[18px] font-bold text-[#0f172a]" style={{ fontFamily: "var(--font-body)" }}>Batalkan Jadwal Interview</p>
              <p className="text-[13px] text-text-muted" style={{ fontFamily: "var(--font-body)" }}>
                Kandidat: <span className="font-semibold text-[#0f172a]" style={{ fontFamily: "var(--font-body)" }}>{candidateName}</span>
              </p>
            </div>
            <button onClick={onCancel} className="bg-[#f3f4f6] rounded-full p-1 flex items-center justify-center text-icon-default hover:text-text-default transition-colors shrink-0">
              <X size={16} />
            </button>
          </div>

          <p className="text-[13px] text-text-darker" style={{ fontFamily: "var(--font-body)" }}>
            Jadwal interview yang sudah ditetapkan akan dibatalkan dan kandidat akan diberi tahu.
          </p>

          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-semibold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>Pesan pembatalan (opsional)</label>
            <textarea
              value={cancelNote}
              maxLength={INTERVIEW_NOTE_MAX_LEN}
              onChange={e => setCancelNote(e.target.value)}
              placeholder="Contoh: Mohon maaf, posisi ini untuk sementara ditunda..."
              rows={3}
              className="border border-border-default rounded-xl px-3 py-2 text-[13px] text-text-darker placeholder-[#c5c6c9] outline-none resize-none"
              style={{ fontFamily: "var(--font-body)" }}
            />
            <p className="text-[11px] text-text-subtle text-right" style={{ fontFamily: "var(--font-body)" }}>{cancelNote.length}/{INTERVIEW_NOTE_MAX_LEN}</p>
          </div>

          <div className="flex items-center justify-end gap-3">
            <button onClick={() => setMode("edit")}
              className="border-[1.5px] border-border-default rounded-full px-5 py-2 text-[14px] font-bold text-text-darker hover:bg-gray-50 transition-colors"
              style={{ fontFamily: "var(--font-body)" }}>Kembali</button>
            <button onClick={() => onCancelSchedule?.(cancelNote.trim())}
              className="bg-danger-strong rounded-full px-4 py-2 text-[14px] font-bold text-white hover:bg-[#d92e15] transition-colors"
              style={{ fontFamily: "var(--font-body)" }}>Ya, Batalkan Jadwal</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-6" onClick={onCancel}>
      <div className="analytics-subtle-scrollbar max-h-[calc(100vh-48px)] overflow-y-auto bg-white rounded-2xl border border-border-lighter shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] p-6 flex flex-col gap-5 w-full max-w-[520px]"
        onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between w-full gap-2">
          <div>
            <p className="text-[18px] font-bold text-[#0f172a]" style={{ fontFamily: "var(--font-body)" }}>{isReschedule ? "Ubah Jadwal Interview" : "Jadwalkan Interview"}</p>
            <p className="text-[13px] text-text-muted" style={{ fontFamily: "var(--font-body)" }}>
              Kandidat: <span className="font-semibold text-[#0f172a]" style={{ fontFamily: "var(--font-body)" }}>{candidateName}</span>
            </p>
          </div>
          <button onClick={onCancel} className="bg-[#f3f4f6] rounded-full p-1 flex items-center justify-center text-icon-default hover:text-text-default transition-colors shrink-0">
            <X size={16} />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-semibold text-text-darker flex items-center gap-1" style={{ fontFamily: "var(--font-body)" }}>Metode interview <span className="text-danger-strong">*</span></label>
            <div className="flex items-center gap-7">
              {(["online", "offline"] as const).map(method => <label key={method} className="flex cursor-pointer items-center gap-2 text-[14px] text-text-darker"><input type="radio" name="interview-method" checked={interviewMethod === method} onChange={() => { setInterviewMethod(method); setError(""); }} className="size-4 accent-[#2b81f3]" /><span className="capitalize">{method}</span></label>)}
            </div>
          </div>

          {interviewMethod === "online" ? (
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-text-darker">Link online meeting</label>
              <div className="flex h-10 items-center gap-2 rounded-xl border border-[#dbe4f3] bg-[#f8faff] px-3 text-[12px] text-text-muted"><Video size={14} className="text-brand-primary" /><span className="truncate">{meetingLink}</span></div>
              <p className="text-[11px] leading-4 text-text-subtle">Link meeting dibuat otomatis dan akan muncul pada detail kandidat setelah interview dijadwalkan.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <label className="flex flex-col gap-1.5 text-[12px] font-semibold text-text-darker"><span>Nama lokasi <span className="text-danger-strong">*</span></span><input value={locationName} onChange={e => { setLocationName(e.target.value); setError(""); }} placeholder="Contoh: Kantor Perisaiku" className="h-10 rounded-xl border border-border-default px-3 text-[13px] font-normal outline-none focus:border-brand-primary" /></label>
              <label className="flex flex-col gap-1.5 text-[12px] font-semibold text-text-darker"><span>Alamat lengkap <span className="text-danger-strong">*</span></span><textarea value={address} onChange={e => { setAddress(e.target.value); setError(""); }} placeholder="Masukkan alamat lengkap lokasi interview" rows={2} className="resize-none rounded-xl border border-border-default px-3 py-2 text-[13px] font-normal outline-none focus:border-brand-primary" /></label>
              <label className="flex flex-col gap-1.5 text-[12px] font-semibold text-text-darker"><span>Link Google Maps <span className="text-danger-strong">*</span></span><input type="url" value={mapsLink} onChange={e => { setMapsLink(e.target.value); setError(""); }} placeholder="https://maps.google.com/..." className="h-10 rounded-xl border border-border-default px-3 text-[13px] font-normal outline-none focus:border-brand-primary" /></label>
            </div>
          )}

          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-semibold text-text-darker flex items-center gap-1" style={{ fontFamily: "var(--font-body)" }}>
              Tanggal &amp; waktu <span className="text-danger-strong">*</span>
            </label>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 border border-border-default rounded-xl h-10 px-3 flex-1 min-w-0">
                <Calendar size={14} className="text-icon-default shrink-0" />
                <input
                  type="datetime-local"
                  value={dateTime}
                  min={nowLocal}
                  onChange={e => { setDateTime(e.target.value); setError(""); }}
                  className="flex-1 min-w-0 text-[13px] text-text-darker outline-none bg-transparent"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
              <div ref={tzRef} className="relative shrink-0">
                <button
                  type="button"
                  onClick={() => setTzOpen(v => !v)}
                  className={`flex items-center gap-1.5 border rounded-xl h-10 px-3 text-[13px] font-semibold transition-colors ${tzOpen ? "border-brand-primary text-brand-primary" : "border-border-default text-text-darker"}`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {selectedTz.value}
                  <ChevronDown size={12} className={`transition-transform ${tzOpen ? "rotate-180 text-brand-primary" : "text-icon-default"}`} />
                </button>
                {tzOpen && (
                  <div className="absolute top-[calc(100%+4px)] right-0 bg-white border border-border-lighter rounded-xl shadow-lg z-10 overflow-hidden w-[180px]">
                    {TIMEZONE_OPTIONS.map(tz => (
                      <div
                        key={tz.value}
                        onClick={() => { setTimezone(tz.value); setTzOpen(false); }}
                        className={`px-3 py-2 text-[12px] cursor-pointer hover:bg-[#f3f4f6] transition-colors ${tz.value === timezone ? "text-brand-primary font-semibold bg-[#ebf2ff]" : "text-text-default"}`}
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {tz.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <p className="text-[11px] text-text-subtle" style={{ fontFamily: "var(--font-body)" }}>Waktu interview harus sekarang atau setelahnya ({selectedTz.label}). Akan tersinkron ke Google Calendar.</p>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-semibold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>Durasi (menit)</label>
            <input
              type="number"
              min={1}
              max={INTERVIEW_MAX_DURATION_MIN}
              value={duration}
              onChange={e => setDuration(Math.min(INTERVIEW_MAX_DURATION_MIN, Math.max(1, Number(e.target.value) || 1)))}
              className="border border-border-default rounded-xl h-10 px-3 text-[13px] text-text-darker outline-none w-[120px]"
              style={{ fontFamily: "var(--font-body)" }}
            />
            <p className="text-[11px] text-text-subtle" style={{ fontFamily: "var(--font-body)" }}>Maks {INTERVIEW_MAX_DURATION_MIN} menit, default {INTERVIEW_DEFAULT_DURATION_MIN} menit.</p>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-semibold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>{isReschedule ? "Pesan untuk kandidat (opsional)" : "Catatan undangan"}</label>
            <textarea
              value={note}
              maxLength={INTERVIEW_NOTE_MAX_LEN}
              onChange={e => setNote(e.target.value)}
              placeholder={isReschedule ? "Contoh: Mohon maaf, jadwal kami ubah karena..." : "Contoh: siapkan portofolio terbaru..."}
              rows={3}
              className="border border-border-default rounded-xl px-3 py-2 text-[13px] text-text-darker placeholder-[#c5c6c9] outline-none resize-none"
              style={{ fontFamily: "var(--font-body)" }}
            />
            <p className="text-[11px] text-text-subtle text-right" style={{ fontFamily: "var(--font-body)" }}>{note.length}/{INTERVIEW_NOTE_MAX_LEN}</p>
          </div>

          {error && <p className="text-[12px] text-danger-strong" style={{ fontFamily: "var(--font-body)" }}>{error}</p>}
        </div>

        <div className={`flex items-center gap-3 ${isReschedule ? "justify-between" : "justify-end"}`}>
          {isReschedule && (
            <button onClick={() => setMode("confirmCancel")}
              className="text-[13px] font-bold text-danger-strong hover:underline"
              style={{ fontFamily: "var(--font-body)" }}>Batalkan Jadwal</button>
          )}
          <div className="flex items-center gap-3">
            <button onClick={onCancel}
              className="border-[1.5px] border-border-default rounded-full px-5 py-2 text-[14px] font-bold text-text-darker hover:bg-gray-50 transition-colors"
              style={{ fontFamily: "var(--font-body)" }}>Batal</button>
            <button onClick={handleSubmit}
              className="bg-brand-primary rounded-full px-4 py-2 text-[14px] font-bold text-white hover:bg-brand-primary-hover transition-colors"
              style={{ fontFamily: "var(--font-body)" }}>{isReschedule ? "Update Jadwal" : "Jadwalkan Interview"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
