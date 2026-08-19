// Not currently used anywhere in the app — kept as-is during the file split (not deleted, per scope).

export function SettingsSaveButton({ onClick, saved, label = "Simpan Perubahan" }: { onClick: () => void; saved: boolean; label?: string }) {
  return (
    <div className="flex items-center gap-3 pt-1">
      <button onClick={onClick}
        className="h-10 px-5 rounded-full bg-brand-primary text-white font-bold text-[13px] hover:bg-brand-primary-hover transition-colors"
        style={{ fontFamily: "var(--font-body)" }}>
        {label}
      </button>
      {saved && (
        <span className="text-[13px] text-[#10b981] font-semibold" style={{ fontFamily: "var(--font-body)" }}>Tersimpan</span>
      )}
    </div>
  );
}

export function SettingsToggleRow({ label, description, checked, onChange }: {
  label: string; description: string; checked: boolean; onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-[13px] font-semibold text-text-default" style={{ fontFamily: "var(--font-body)" }}>{label}</p>
        <p className="text-[12px] text-text-subtle" style={{ fontFamily: "var(--font-body)" }}>{description}</p>
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`relative w-11 h-6 rounded-full shrink-0 transition-colors ${checked ? "bg-brand-primary" : "bg-border-default"}`}
      >
        <span className={`absolute left-0.5 top-0.5 size-5 rounded-full bg-white shadow transition-transform ${checked ? "translate-x-5" : "translate-x-0"}`} />
      </button>
    </div>
  );
}
