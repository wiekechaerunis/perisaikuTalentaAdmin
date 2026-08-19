import { SuperadminTopBar } from "../../layouts/SuperadminLayout";

export function SuperadminPlaceholderPage({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex-1 min-w-0 h-full overflow-y-auto bg-surface">
      <SuperadminTopBar />
      <div className="flex flex-col gap-8 pb-10">
        <div className="px-10 pt-8">
          <p className="text-text-default text-[28px] font-bold leading-8" style={{ fontFamily: "var(--font-body)" }}>{title}</p>
          <p className="text-text-muted text-sm mt-1" style={{ fontFamily: "var(--font-body)" }}>{description}</p>
        </div>
        <div className="px-10">
          <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border-lighter py-24">
            <p className="text-[#9b9ca1] text-sm" style={{ fontFamily: "var(--font-body)" }}>Halaman ini akan segera hadir.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
