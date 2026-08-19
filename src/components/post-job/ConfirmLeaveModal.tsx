import svgFilterPaths from "../../imports/Filter-1/svg-doy4j2cmxe";

export function ConfirmLeaveModal({ onLeave, onStay }: { onLeave: () => void; onStay: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-[400px] border border-border-lighter shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)]">
        <div className="flex flex-col gap-4 p-6">
          <div className="flex items-center justify-between w-full">
            <p className="text-text-darker text-[18px] font-bold" style={{ fontFamily: "var(--font-body)" }}>Apakah Anda yakin?</p>
            <button onClick={onStay} className="bg-[#f3f4f6] rounded-full p-1 hover:bg-gray-200 transition-colors">
              <svg width="16" height="16" viewBox="0 0 9.33333 9.33333" fill="none">
                <path d={svgFilterPaths.p27be5e00} fill="#606268" />
              </svg>
            </button>
          </div>
          <p className="text-text-darker text-[14px] leading-5" style={{ fontFamily: "var(--font-body)" }}>
            Semua data yang telah Anda masukkan akan hilang jika Anda meninggalkan formulir ini.
          </p>
          <div className="flex items-center justify-end gap-3 pt-2">
            <button onClick={onLeave} className="px-5 py-2 rounded-full border-[1.5px] border-border-default text-text-darker font-bold text-[14px] hover:bg-gray-50 transition-colors" style={{ fontFamily: "var(--font-body)" }}>Batal</button>
            <button onClick={onStay} className="bg-brand-primary h-10 px-4 rounded-full text-white font-bold text-[14px] hover:bg-brand-primary-hover transition-colors" style={{ fontFamily: "var(--font-body)" }}>Selesaikan Formulir</button>
          </div>
        </div>
      </div>
    </div>
  );
}
