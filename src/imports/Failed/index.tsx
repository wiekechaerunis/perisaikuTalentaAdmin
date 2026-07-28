import svgPaths from "./svg-t7acx0xgi4";

function X() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="x">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="x">
          <path d="M24 8L8 24M8 8L24 24" id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

function Illustration() {
  return (
    <div className="bg-[rgba(239,68,68,0.06)] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[80px]" data-name="Illustration">
      <X />
    </div>
  );
}

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[20px] not-italic relative shrink-0 text-[14px] w-[353px]">
      <p className="font-['DM_Sans:SemiBold',sans-serif] relative shrink-0 text-[#f83a1e] w-full">Alasan Penolakan:</p>
      <p className="font-['DM_Sans:Regular',sans-serif] relative shrink-0 text-[#4c4f59] w-full">SIUP yang diunggah sudah kedaluwarsa. Harap unggah dokumen yang masih berlaku sesuai dengan data perusahaan.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[20px] not-italic relative shrink-0 text-[14px] w-[353px]">
      <p className="font-['DM_Sans:SemiBold',sans-serif] relative shrink-0 text-[#4c4f59] w-full">Langkah Perbaikan:</p>
      <p className="font-['DM_Sans:Regular',sans-serif] relative shrink-0 text-[#383b46] w-full">
        1. Siapkan dokumen yang masih berlaku (SIUP/NIB)
        <br aria-hidden />
        2. Unggah ulang melalui halaman dokumen
        <br aria-hidden />
        3. Tim kami akan meninjau ulang dalam 1×24 jam
      </p>
    </div>
  );
}

function InfoCard() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start p-[20px] relative rounded-[16px] shrink-0" data-name="InfoCard">
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame />
      <div className="flex h-[1.017px] items-center justify-center relative shrink-0 w-full">
        <div className="flex-none rotate-[-0.17deg] w-full">
          <div className="h-0 relative w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 353 1">
                <line id="Line 1" stroke="var(--stroke-0, #C5C6C9)" strokeDasharray="2 2" x2="353" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Frame1 />
    </div>
  );
}

function TextStack() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="TextStack">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[#4c4f59] text-[16px] text-center w-[min-content]" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
        Pendaftaran Anda Ditolak
      </p>
      <InfoCard />
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="flex-none rotate-180">
        <div className="relative size-[16px]" data-name="arrow-right">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
            <g id="arrow-right">
              <path d={svgPaths.p3bfa7a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function PrimaryButton() {
  return (
    <div className="bg-[#0052ff] content-stretch flex gap-[8px] items-center justify-center py-[16px] relative rounded-[12px] shrink-0 w-full" data-name="PrimaryButton">
      <ArrowRight />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Perbaiki</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[392px]" data-name="Actions">
      <PrimaryButton />
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full" data-name="Hero">
      <Illustration />
      <TextStack />
      <Actions />
    </div>
  );
}

export default function Failed() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Failed">
      <Hero />
    </div>
  );
}