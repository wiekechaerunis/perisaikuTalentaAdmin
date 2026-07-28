import svgPaths from "./svg-ck85b5ll3e";

function Frame() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0">
        <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] h-full leading-[14px] not-italic relative shrink-0 text-[#cc0e0e] text-[10px] w-[6px]">*</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Password</p>
      </div>
      <Frame />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] h-[20px] justify-center leading-[0] min-w-px not-italic relative text-[#c5c6c9] text-[12px]">
            <p className="leading-[16px]">Min. 8 Karakter</p>
          </div>
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
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <div className="bg-[#f6f4f4] flex-[1_0_0] h-[4px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
      <div className="bg-[#f6f4f4] flex-[1_0_0] h-[4px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
      <div className="bg-[#f6f4f4] flex-[1_0_0] h-[4px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
      <div className="bg-[#f6f4f4] flex-[1_0_0] h-[4px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[48px] top-[71px] w-[520px]">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text Field">
        <Label />
        <Input />
      </div>
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative self-stretch shrink-0">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] h-full leading-[14px] not-italic relative shrink-0 text-[#cc0e0e] text-[10px] w-[6px]">*</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Password</p>
      </div>
      <Frame1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <Frame6 />
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
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function TextField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text Field">
      <Label1 />
      <Input1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <div className="bg-[#f83a1e] flex-[1_0_0] h-[4px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
      <div className="bg-[#f6f4f4] flex-[1_0_0] h-[4px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
      <div className="bg-[#f6f4f4] flex-[1_0_0] h-[4px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
      <div className="bg-[#f6f4f4] flex-[1_0_0] h-[4px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame4 />
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#777980] text-[12px] w-full">
        <p className="leading-[18px]">Lemah</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[48px] top-[182px] w-[520px]">
      <TextField />
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative self-stretch shrink-0">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] h-full leading-[14px] not-italic relative shrink-0 text-[#cc0e0e] text-[10px] w-[6px]">*</p>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Password</p>
      </div>
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <Frame10 />
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
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function TextField1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text Field">
      <Label2 />
      <Input2 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <div className="bg-[#ffb40f] flex-[1_0_0] h-[4px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
      <div className="bg-[#ffb40f] flex-[1_0_0] h-[4px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
      <div className="bg-[#f6f4f4] flex-[1_0_0] h-[4px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
      <div className="bg-[#f6f4f4] flex-[1_0_0] h-[4px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame12 />
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9b9ca1] text-[12px] w-full">
        <p className="leading-[18px]">Cukup</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[46px] top-[339px] w-[520px]">
      <TextField1 />
      <Frame11 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative self-stretch shrink-0">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] h-full leading-[14px] not-italic relative shrink-0 text-[#cc0e0e] text-[10px] w-[6px]">*</p>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Password</p>
      </div>
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <Frame15 />
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
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function TextField2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text Field">
      <Label3 />
      <Input3 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <div className="bg-[#6acd75] flex-[1_0_0] h-[4px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
      <div className="bg-[#6acd75] flex-[1_0_0] h-[4px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
      <div className="bg-[#6acd75] flex-[1_0_0] h-[4px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
      <div className="bg-[#f6f4f4] flex-[1_0_0] h-[4px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame17 />
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9b9ca1] text-[12px] w-full">
        <p className="leading-[18px]">Kuat</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[48px] top-[480px] w-[520px]">
      <TextField2 />
      <Frame16 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative self-stretch shrink-0">
      <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] h-full leading-[14px] not-italic relative shrink-0 text-[#cc0e0e] text-[10px] w-[6px]">*</p>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Password</p>
      </div>
      <Frame19 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px relative">
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[6px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <circle cx="3" cy="3" fill="var(--fill-0, #606268)" id="Ellipse 3" r="3" />
        </svg>
      </div>
    </div>
  );
}

function Input4() {
  return (
    <div className="bg-white h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <Frame20 />
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
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function TextField3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text Field">
      <Label4 />
      <Input4 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <div className="bg-[#6acd75] flex-[1_0_0] h-[4px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
      <div className="bg-[#6acd75] flex-[1_0_0] h-[4px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
      <div className="bg-[#6acd75] flex-[1_0_0] h-[4px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
      <div className="bg-[#6acd75] flex-[1_0_0] h-[4px] min-w-px relative rounded-[2px]" data-name="Rectangle" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame22 />
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9b9ca1] text-[12px] w-full">
        <p className="leading-[18px]">Sangat Kuat</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[50px] top-[624px] w-[520px]">
      <TextField3 />
      <Frame21 />
    </div>
  );
}

export default function PaswordIndicator() {
  return (
    <div className="bg-white border border-[rgba(0,0,0,0.1)] border-solid overflow-clip relative rounded-[2px] size-full" data-name="Pasword indicator">
      <Frame2 />
      <Frame5 />
      <Frame7 />
      <Frame13 />
      <Frame18 />
    </div>
  );
}