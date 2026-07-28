import svgPaths from "./svg-ibqivlsqf6";

function X() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="x">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="x">
          <path d={svgPaths.p26740b90} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#ef4444] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Icon">
      <div aria-hidden className="absolute border border-[#ef4444] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <X />
    </div>
  );
}

function X1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="x">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="x">
          <path d={svgPaths.p26740b90} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Close() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[24px]" data-name="Close">
      <div aria-hidden className="absolute border border-[#ef4444] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <X1 />
    </div>
  );
}

export default function ErrorToast() {
  return (
    <div className="bg-[#fef2f2] content-stretch drop-shadow-[0px_8px_12px_rgba(0,0,0,0.08)] flex gap-[12px] items-center px-[16px] py-[12px] relative rounded-[12px] size-full" data-name="Error Toast">
      <div aria-hidden className="absolute border border-[#fca5a5] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Icon />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#ef4444] text-[14px] whitespace-nowrap">Lowongan gagal disimpan sebagai draft</p>
      <Close />
    </div>
  );
}