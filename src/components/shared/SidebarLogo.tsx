export function SidebarLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-brand-primary w-8 h-8 rounded-lg flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path d="M10 2l8 4v5c0 4-3.5 7-8 8C5.5 18 2 15 2 11V6l8-4z" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <span className="whitespace-nowrap text-brand-primary text-lg font-bold" style={{ fontFamily: "var(--font-body)" }}>Perisaiku Talenta</span>
    </div>
  );
}
