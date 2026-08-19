// Not currently used anywhere in the app — kept as-is during the file split (not deleted, per scope).

export function PlaceholderPage({ label }: { label: string }) {
  return (
    <div className="flex-1 min-w-0 h-full bg-surface flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#ebf2ff] flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="4" y="4" width="20" height="20" rx="4" stroke="#2b81f3" strokeWidth="2" />
            <path d="M9 14h10M9 10h6M9 18h8" stroke="#2b81f3" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <p className="text-text-darker text-xl font-bold" style={{ fontFamily: "var(--font-body)" }}>{label}</p>
        <p className="text-[#9b9ca1] text-sm" style={{ fontFamily: "var(--font-body)" }}>Halaman ini sedang dalam pengembangan.</p>
      </div>
    </div>
  );
}
