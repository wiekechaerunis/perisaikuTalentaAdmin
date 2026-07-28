import svgPaths from "./svg-doy4j2cmxe";

function HeaderContainer() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Header Container">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#4c4f59] text-[21px]">
        <p className="leading-[26px]">Filter</p>
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

function Frame2() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0 w-[6px]" />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#383b46] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Tanggal Dibuat</p>
      </div>
      <Frame2 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] h-[20px] leading-[18px] min-w-px not-italic relative text-[#c5c6c9] text-[12px]">DD/MM/YYYY - DD/MM/YYYY</p>
          <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="📍 Trailing Icon">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
              <div className="absolute inset-[13.89%_13.89%_13.62%_14.18%]" data-name="product-outline">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3867 14.4981">
                  <g id="product-outline">
                    <path d={svgPaths.p1df90380} fill="#606268" />
                    <path d={svgPaths.p24a17400} fill="#606268" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text Field">
        <Label />
        <Input />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame8 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0 w-[6px]" />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#383b46] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Tanggal Tutup</p>
      </div>
      <Frame3 />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] h-[20px] leading-[18px] min-w-px not-italic relative text-[#c5c6c9] text-[12px]">DD/MM/YYYY - DD/MM/YYYY</p>
          <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="📍 Trailing Icon">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
              <div className="absolute inset-[13.89%_13.89%_13.62%_14.18%]" data-name="product-outline">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3867 14.4981">
                  <g id="product-outline">
                    <path d={svgPaths.p1df90380} fill="#606268" />
                    <path d={svgPaths.p24a17400} fill="#606268" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text Field">
        <Label1 />
        <Input1 />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame10 />
    </div>
  );
}

function Frame4() {
  return <div className="content-stretch flex gap-[4px] items-center relative self-stretch shrink-0 w-[6px]" />;
}

function Label2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#383b46] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Kategori Pekerjaan</p>
      </div>
      <Frame4 />
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] h-[20px] leading-[18px] min-w-px not-italic relative text-[#383b46] text-[12px]">​</p>
          <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="📍 Trailing Icon">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
              <div className="absolute inset-[13.89%_13.89%_13.62%_14.18%]" data-name="product-outline">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3867 14.4981">
                  <g id="product-outline">
                    <path d={svgPaths.p1df90380} fill="#606268" />
                    <path d={svgPaths.p24a17400} fill="#606268" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame5() {
  return <div className="content-stretch flex gap-[4px] items-center relative self-stretch shrink-0 w-[6px]" />;
}

function Label3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#383b46] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Lokasi</p>
      </div>
      <Frame5 />
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] h-[20px] leading-[18px] min-w-px not-italic relative text-[#383b46] text-[12px]">​</p>
          <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="📍 Trailing Icon">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
              <div className="absolute inset-[13.89%_13.89%_13.62%_14.18%]" data-name="product-outline">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3867 14.4981">
                  <g id="product-outline">
                    <path d={svgPaths.p1df90380} fill="#606268" />
                    <path d={svgPaths.p24a17400} fill="#606268" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text Field">
        <Label2 />
        <Input2 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text Field">
        <Label3 />
        <Input3 />
      </div>
    </div>
  );
}

function Frame6() {
  return <div className="content-stretch flex gap-[4px] items-center relative self-stretch shrink-0 w-[6px]" />;
}

function Label4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#383b46] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Mode Kerja</p>
      </div>
      <Frame6 />
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] h-[20px] leading-[18px] min-w-px not-italic relative text-[#383b46] text-[12px]">​</p>
          <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="📍 Trailing Icon">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
              <div className="absolute inset-[13.89%_13.89%_13.62%_14.18%]" data-name="product-outline">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3867 14.4981">
                  <g id="product-outline">
                    <path d={svgPaths.p1df90380} fill="#606268" />
                    <path d={svgPaths.p24a17400} fill="#606268" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame7() {
  return <div className="content-stretch flex gap-[4px] items-center relative self-stretch shrink-0 w-[6px]" />;
}

function Label5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#383b46] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Dibuat Oleh</p>
      </div>
      <Frame7 />
    </div>
  );
}

function Input5() {
  return (
    <div className="bg-white h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] h-[20px] leading-[18px] min-w-px not-italic relative text-[#383b46] text-[12px]">​</p>
          <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="📍 Trailing Icon">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
              <div className="absolute inset-[13.89%_13.89%_13.62%_14.18%]" data-name="product-outline">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3867 14.4981">
                  <g id="product-outline">
                    <path d={svgPaths.p1df90380} fill="#606268" />
                    <path d={svgPaths.p24a17400} fill="#606268" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text Field">
        <Label4 />
        <Input4 />
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Text Field">
        <Label5 />
        <Input5 />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame9 />
      <Frame14 />
      <Frame12 />
      <Frame13 />
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
            <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4c4f59] text-[16px] text-center whitespace-nowrap" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
              Kembali
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#0052ff] content-stretch flex h-[40px] items-center justify-center px-[12px] py-[8px] relative rounded-[20px] shrink-0 w-[121px]" data-name="Button">
        <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[0px] text-center text-white whitespace-nowrap" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
          <p className="leading-[24px] text-[16px]" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
            Simpan
          </p>
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

export default function Filter() {
  return (
    <div className="bg-white relative rounded-[16px] size-full" data-name="Filter">
      <div className="content-stretch flex flex-col gap-[16px] items-start justify-center overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <Header />
        <Frame11 />
        <Frame />
      </div>
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)]" />
    </div>
  );
}