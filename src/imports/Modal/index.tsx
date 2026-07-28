import svgPaths from "./svg-17i06zldn1";

function HeaderContainer() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Header Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Bold',sans-serif] h-[20px] justify-center leading-[0] min-w-px not-italic relative text-[#4c4f59] text-[18px]">
        <p className="leading-[16px]">Apakah Anda yakin?</p>
      </div>
      <div className="bg-[#f3f4f6] content-stretch flex items-center justify-center p-[4px] relative rounded-[384px] shrink-0" data-name="Icon Button">
        <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[384px]" />
        <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="left-icon">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Solid=false">
            <div className="absolute inset-[20.83%]" data-name="Icon">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
                <path d={svgPaths.p27be5e00} fill="var(--fill-0, #606268)" id="Icon" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Header">
      <HeaderContainer />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Frame">
      <div className="relative rounded-[20px] self-stretch shrink-0" data-name="Button">
        <div aria-hidden className="absolute border-[#c5c6c9] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[20px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] text-center whitespace-nowrap">Batal</p>
          </div>
        </div>
      </div>
      <div className="bg-[#0052ff] content-stretch flex h-[40px] items-center justify-center px-[12px] py-[8px] relative rounded-[20px] shrink-0" data-name="Button">
        <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-center text-white whitespace-nowrap">
          <p className="leading-[20px] text-[14px]">Selesaikan Formulir</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start justify-end pt-[16px] relative shrink-0 w-full" data-name="Frame">
      <Frame1 />
    </div>
  );
}

export default function Modal() {
  return (
    <div className="bg-white relative rounded-[16px] size-full" data-name="Modal">
      <div className="content-stretch flex flex-col gap-[16px] items-start justify-center overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <Header />
        <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[min-content]">
          <p className="leading-[20px]">Semua data yang telah Anda masukkan akan hilang jika Anda meninggalkan formulir ini.</p>
        </div>
        <Frame />
      </div>
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)]" />
    </div>
  );
}