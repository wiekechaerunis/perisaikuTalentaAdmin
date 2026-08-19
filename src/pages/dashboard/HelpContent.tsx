export function HelpContent({ support = false }: { support?: boolean }) {
  return <div className="flex-1 overflow-y-auto bg-surface p-10"><h1 className="text-[28px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>{support ? "Hubungi Support" : "FAQ"}</h1><p className="mt-2 text-[14px] text-text-muted">{support ? "Hubungi tim support Perisaiku Talenta untuk mendapatkan bantuan." : "Temukan jawaban untuk pertanyaan yang sering diajukan."}</p></div>;
}
