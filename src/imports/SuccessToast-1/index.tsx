import svgPaths from "./svg-i0p9ouwj5v";

function Check() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="check">
          <path d={svgPaths.p27200700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#33893c] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#33893c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Check />
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="x">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="x">
          <path d={svgPaths.p26740b90} id="Vector" stroke="var(--stroke-0, #33893C)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Close() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Close">
      <div aria-hidden className="absolute border border-[#33893c] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <X />
    </div>
  );
}

export default function SuccessToast() {
  return (
    <div className="bg-[#fafffb] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.08)] flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[12px] size-full" data-name="Success Toast">
      <div aria-hidden className="absolute border border-[#6acd75] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#6acd75] text-[14px] whitespace-nowrap">Lowongan berhasil dibuat</p>
      <Close />
    </div>
  );
}