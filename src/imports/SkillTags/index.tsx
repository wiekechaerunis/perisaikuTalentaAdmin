import svgPaths from "./svg-qbj1wi0q4o";

function Search1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="search">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="search">
          <path d={svgPaths.p3f6e0f00} id="Vector" stroke="var(--stroke-0, #777980)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="search">
      <Search1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#777980] text-[12px] whitespace-nowrap">Cari dan tambahkan skill...</p>
    </div>
  );
}

function InputTags() {
  return (
    <div className="bg-white h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="input-tags">
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] relative size-full">
          <Search />
        </div>
      </div>
    </div>
  );
}

function FieldSkillTags() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[36px] top-[66px] w-[508px]" data-name="field-skill-tags">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">Skill Tags</p>
      <InputTags />
    </div>
  );
}

function Search3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="search">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="search">
          <path d={svgPaths.p3f6e0f00} id="Vector" stroke="var(--stroke-0, #777980)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#f6f4f4] content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#383b46] text-[12px] whitespace-nowrap">UI Design</p>
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x">
        <div className="absolute inset-[20.83%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d={svgPaths.p1662bd80} fill="var(--fill-0, #606268)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[3px] items-center leading-[normal] not-italic relative shrink-0 whitespace-nowrap">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#4c4f59] text-[12px]">Figma</p>
      <p className="font-['DM_Sans:Regular',sans-serif] relative shrink-0 text-[#0052ff] text-[16px]">|</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Tag />
      <Frame1 />
    </div>
  );
}

function Search2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="search">
      <Search3 />
      <Frame />
    </div>
  );
}

function InputTags1() {
  return (
    <div className="bg-white h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="input-tags">
      <div aria-hidden className="absolute border border-[#0052ff] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] relative size-full">
          <Search2 />
        </div>
      </div>
    </div>
  );
}

function FieldSkillTags1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[36px] top-[153px] w-[508px]" data-name="field-skill-tags">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">Skill Tags</p>
      <InputTags1 />
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#f6f4f4] content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#383b46] text-[12px] whitespace-nowrap">Figma</p>
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x">
        <div className="absolute inset-[20.83%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d={svgPaths.p1662bd80} fill="var(--fill-0, #606268)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#f6f4f4] content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#383b46] text-[12px] whitespace-nowrap">UI Design</p>
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x">
        <div className="absolute inset-[20.83%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d={svgPaths.p1662bd80} fill="var(--fill-0, #606268)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[#f6f4f4] content-stretch flex gap-[6px] items-center px-[10px] py-[4px] relative rounded-[999px] shrink-0" data-name="tag">
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#383b46] text-[12px] whitespace-nowrap">Prototyping</p>
      <div className="overflow-clip relative shrink-0 size-[12px]" data-name="x">
        <div className="absolute inset-[20.83%]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
            <path d={svgPaths.p1662bd80} fill="var(--fill-0, #606268)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Tags() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] h-full items-center min-w-px relative" data-name="tags">
      <Tag1 />
      <Tag2 />
      <Tag3 />
    </div>
  );
}

function InputTags2() {
  return (
    <div className="bg-white h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="input-tags">
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] relative size-full">
          <Tags />
        </div>
      </div>
    </div>
  );
}

function FieldSkillTags2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[36px] top-[375px] w-[508px]" data-name="field-skill-tags">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">Skill Tags</p>
      <InputTags2 />
    </div>
  );
}

function OptionInApp() {
  return (
    <div className="bg-[#ebf2ff] h-[40px] relative shrink-0" data-name="option-in-app">
      <div className="content-stretch flex items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[12px] w-[470px]">Figma</p>
        <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="icon-chevron">
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
      <div aria-hidden className="absolute border-[#c5c6c9] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function OptionWalkIn() {
  return (
    <div className="bg-white h-[40px] relative shrink-0 w-[510px]" data-name="option-walk-in">
      <div className="content-stretch flex items-center overflow-clip px-[12px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[12px] w-[486px]">Figma Make AI</p>
      </div>
      <div aria-hidden className="absolute border-[#c5c6c9] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function OptionWalkIn1() {
  return (
    <div className="bg-white content-stretch flex h-[40px] items-center overflow-clip px-[12px] relative shrink-0 w-[510px]" data-name="option-walk-in">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[12px] w-[486px]">{`Figma Motion `}</p>
    </div>
  );
}

function DropdownList() {
  return (
    <div className="absolute bg-white left-[35px] rounded-[12px] top-[225px]" data-name="dropdown-list">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <OptionInApp />
        <OptionWalkIn />
        <OptionWalkIn1 />
      </div>
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-[-1px] pointer-events-none rounded-[13px]" />
    </div>
  );
}

export default function SkillTags() {
  return (
    <div className="bg-white border border-[rgba(0,0,0,0.1)] border-solid overflow-clip relative rounded-[2px] size-full" data-name="Skill Tags">
      <FieldSkillTags />
      <FieldSkillTags1 />
      <FieldSkillTags2 />
      <DropdownList />
    </div>
  );
}