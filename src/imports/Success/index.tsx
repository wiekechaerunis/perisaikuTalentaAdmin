import svgPaths from "./svg-9ncb9nk2ew";

function Check() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="check">
          <path d={svgPaths.p24ddc900} id="Vector" stroke="var(--stroke-0, #10B981)" strokeLinecap="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Illustration() {
  return (
    <div className="bg-[rgba(16,185,129,0.06)] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[80px]" data-name="Illustration">
      <Check />
    </div>
  );
}

function TextStack() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center not-italic relative shrink-0 text-center w-full" data-name="TextStack">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[24px] relative shrink-0 text-[#4c4f59] text-[16px] w-full" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
        Akun Anda Telah Terverifikasi!
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#383b46] text-[14px] w-full">Dokumen legal Anda telah disetujui. Selamat datang di Perisaku!</p>
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Hero">
      <Illustration />
      <TextStack />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="arrow-right">
          <path d={svgPaths.p3bfa7a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="bg-[#0052ff] content-stretch flex gap-[8px] items-center justify-center py-[16px] relative rounded-[12px] shrink-0 w-full" data-name="PrimaryButton">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Masuk ke Dashboard</p>
      <ArrowRight />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Actions">
      <PrimaryButton />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Hero />
      <Actions />
    </div>
  );
}

export default function Success() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-center p-[40px] relative size-full" data-name="Success">
      <Frame />
    </div>
  );
}