import svgPaths from "./svg-7zccrrmevh";
import imgAvatar from "./fb0866f26f42d40c2ae9ca60a1f6f85a45c71cad.png";

function X() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="x">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="x">
          <path d="M18 6L6 18M6 6L18 18" id="Vector" stroke="var(--stroke-0, #475569)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#383b46] text-[28px] whitespace-nowrap">Profile Kandidat</p>
      <X />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron-down">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #777980)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function StageDropdown() {
  return (
    <div className="bg-[rgba(14,165,233,0.1)] content-stretch flex gap-[8px] items-center px-[12px] py-[10px] relative rounded-[8px] shrink-0" data-name="stage-dropdown">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#383b46] text-[13px] whitespace-nowrap">Penyaringan</p>
      <ChevronDown />
    </div>
  );
}

function NameRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="name-row">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#383b46] text-[28px] whitespace-nowrap">Budi Santoso</p>
      <StageDropdown />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full" data-name="Frame">
      <NameRow />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[16px] w-full">Senior Software Engineer dengan 8+ tahun pengalaman di backend development</p>
    </div>
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="mail">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="mail">
          <path d={svgPaths.p10d0c00} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <Mail />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[14px] whitespace-nowrap">budisantoso@email.com</p>
    </div>
  );
}

function Phone() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="phone">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14_3577)" id="phone">
          <path d={svgPaths.p29098400} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_14_3577">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <Phone />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[14px] whitespace-nowrap">+62 812 3456 7890</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Frame">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function InfoContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px relative" data-name="Info-Content">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function DownloadCvBtn() {
  return (
    <div className="bg-[#0052ff] relative rounded-[999px] shrink-0 w-full" data-name="download-cv-btn">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-start justify-center px-[16px] py-[12px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.p37225cc0} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="2" />
            </svg>
          </div>
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Download CV</p>
        </div>
      </div>
    </div>
  );
}

function WhatsappBtn() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[999px] shrink-0 w-full" data-name="whatsapp-btn">
      <div aria-hidden className="absolute border border-[#0052ff] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-start justify-center px-[16px] py-[12px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.p2cd64800} fill="var(--fill-0, #0052FF)" id="Vector" />
            </svg>
          </div>
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#0052ff] text-[14px] whitespace-nowrap">Hubungi Kandidat</p>
        </div>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[220px]" data-name="Actions">
      <DownloadCvBtn />
      <WhatsappBtn />
    </div>
  );
}

function HeaderCard() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.06)] relative rounded-[12px] shrink-0 w-full" data-name="Header-Card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center p-[32px] relative size-full">
          <div className="relative shrink-0 size-[120px]" data-name="avatar">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="120" src={imgAvatar} width="120" />
          </div>
          <InfoContent />
          <Actions />
        </div>
      </div>
    </div>
  );
}

function Indicator() {
  return <div className="bg-[#0052ff] h-[3px] relative rounded-[2px] shrink-0 w-[120px]" data-name="indicator" />;
}

function TabDetailKandidat() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="tab-detail-kandidat">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0052ff] text-[14px] whitespace-nowrap">Detail Kandidat</p>
      <Indicator />
    </div>
  );
}

function Indicator1() {
  return <div className="bg-[#e2e8f0] h-[3px] relative rounded-[2px] shrink-0 w-[96px]" data-name="indicator" />;
}

function TabActivityLog() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="tab-activity-log">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">Activity Log</p>
      <Indicator1 />
    </div>
  );
}

function TabBar() {
  return (
    <div className="content-stretch flex gap-[32px] items-end relative shrink-0 w-full" data-name="Tab-Bar">
      <TabDetailKandidat />
      <TabActivityLog />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#383b46] text-[15px]">Senior Software Engineer</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[13px]">Jan 2021 - Sekarang</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <Frame7 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#0052ff] text-[14px] whitespace-nowrap">Gojek</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#4c4f59] text-[14px] w-[min-content]">Memimpin tim backend 5 orang, mengembangkan microservices architecture untuk payment system.</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#383b46] text-[15px]">Software Engineer</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[13px]">Mar 2018 - Des 2020</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <Frame9 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#0052ff] text-[14px] whitespace-nowrap">Tokopedia</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#4c4f59] text-[14px] w-[min-content]">Mengembangkan API gateway dan optimasi performa database.</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-between leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#383b46] text-[15px]">Junior Developer</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[13px]">Jun 2016 - Feb 2018</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <Frame11 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#0052ff] text-[14px] whitespace-nowrap">Bukalapak</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#4c4f59] text-[14px] w-[min-content]">Membangun fitur checkout dan integrasi payment gateway.</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame6 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 668 1">
            <line id="Line" stroke="var(--stroke-0, #E2E8F0)" x2="668" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame8 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 668 1">
            <line id="Line" stroke="var(--stroke-0, #E2E8F0)" x2="668" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame10 />
    </div>
  );
}

function SectionPengalamanKerja() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.06)] relative rounded-[12px] shrink-0 w-full" data-name="Section-Pengalaman Kerja">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#383b46] text-[16px] w-full">Pengalaman Kerja</p>
        <Frame5 />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#383b46] text-[15px]">S2, Computer Science</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[13px]">2019 - 2021</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <Frame14 />
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#4c4f59] text-[14px]">Universitas Indonesia</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#383b46] text-[15px]">S1, Teknik Informatika</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[13px]">2012 - 2016</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <Frame16 />
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#4c4f59] text-[14px]">Institut Teknologi Bandung</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame13 />
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 668 1">
            <line id="Line" stroke="var(--stroke-0, #E2E8F0)" x2="668" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame15 />
    </div>
  );
}

function SectionPendidikan() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.06)] relative rounded-[12px] shrink-0 w-full" data-name="Section-Pendidikan">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#383b46] text-[16px] w-full">Pendidikan</p>
        <Frame12 />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[13px] whitespace-nowrap">Go</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[13px] whitespace-nowrap">Java</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[13px] whitespace-nowrap">Python</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[13px] whitespace-nowrap">Kubernetes</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[13px] whitespace-nowrap">Docker</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[13px] whitespace-nowrap">PostgreSQL</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[13px] whitespace-nowrap">Redis</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[13px] whitespace-nowrap">gRPC</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[13px] whitespace-nowrap">System Design</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[13px] whitespace-nowrap">Microservices</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[13px] whitespace-nowrap">AWS</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-start px-[12px] py-[6px] relative rounded-[8px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[13px] whitespace-nowrap">CI/CD</p>
    </div>
  );
}

function SkillsWrap() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Skills-Wrap">
      <Frame18 />
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
      <Frame25 />
      <Frame26 />
      <Frame27 />
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Award() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="award">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="award">
          <path d={svgPaths.p34beed00} id="Vector" stroke="var(--stroke-0, #0052FF)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Award />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#383b46] text-[14px] whitespace-nowrap">AWS Solutions Architect</p>
    </div>
  );
}

function Award1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="award">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="award">
          <path d={svgPaths.p34beed00} id="Vector" stroke="var(--stroke-0, #0052FF)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Award1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#383b46] text-[14px] whitespace-nowrap">Google Cloud Professional</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start pt-[8px] relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[13px] uppercase whitespace-nowrap">Sertifikasi</p>
      <Frame31 />
      <Frame32 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <SkillsWrap />
      <Frame30 />
    </div>
  );
}

function SectionSkillSertifikasi() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.06)] relative rounded-[12px] shrink-0 w-full" data-name="Section-Skill & Sertifikasi">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#383b46] text-[16px] w-full">{`Skill & Sertifikasi`}</p>
        <Frame17 />
      </div>
    </div>
  );
}

function MainCol() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Main-Col">
      <SectionPengalamanKerja />
      <SectionPendidikan />
      <SectionSkillSertifikasi />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#94a3b8] text-[12px] uppercase">Tanggal Lahir</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#383b46] text-[14px]">15-03-1992</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#94a3b8] text-[12px] uppercase">Jenis Kelamin</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#383b46] text-[14px]">Laki-laki</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#94a3b8] text-[12px] uppercase">Domisili</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#383b46] text-[14px]">Jakarta Selatan</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <Frame34 />
      <Frame35 />
      <Frame36 />
    </div>
  );
}

function SectionInformasiPribadi() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.06)] relative rounded-[12px] shrink-0 w-full" data-name="Section-Informasi Pribadi">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start leading-[normal] not-italic p-[20px] relative size-full">
        <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#383b46] text-[16px] w-full">Informasi Pribadi</p>
        <Frame33 />
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#94a3b8] text-[12px] uppercase">Lokasi</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#383b46] text-[14px]">Jakarta</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#94a3b8] text-[12px] uppercase">Tipe Kerja</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#383b46] text-[14px]">Hybrid</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#94a3b8] text-[12px] uppercase whitespace-nowrap">Gaji Ekspektasi</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[#383b46] text-[14px] w-[min-content]">Rp 35.000.000 - Rp 45.000.000 / bln</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[21px] items-start leading-[normal] not-italic relative shrink-0 w-full" data-name="Frame">
      <Frame39 />
      <Frame40 />
      <Frame41 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame38 />
    </div>
  );
}

function SectionPreferensiKerja() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.06)] relative rounded-[12px] shrink-0 w-full" data-name="Section-Preferensi Kerja">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#383b46] text-[16px] w-full">Preferensi Kerja</p>
        <Frame37 />
      </div>
    </div>
  );
}

function Github() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="github">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="github">
          <path d={svgPaths.p32832dc0} id="Vector" stroke="var(--stroke-0, #383B46)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <Github />
      <a className="[word-break:break-word] block font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#0052ff] text-[14px] whitespace-nowrap" href="https://github.com/budisantoso" target="_blank">
        <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] underline">github.com/budisantoso</p>
      </a>
    </div>
  );
}

function Linkedin() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="linkedin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="linkedin">
          <g id="Vector">
            <path d={svgPaths.p19a5ee80} stroke="var(--stroke-0, #383B46)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p104b6a40} stroke="var(--stroke-0, #383B46)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p376a7880} stroke="var(--stroke-0, #383B46)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <Linkedin />
      <a className="[word-break:break-word] block font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#0052ff] text-[14px] whitespace-nowrap" href="https://linkedin.com/in/budisantoso" target="_blank">
        <p className="[text-underline-position:from-font] cursor-pointer decoration-from-font decoration-solid leading-[normal] underline">linkedin.com/in/budisantoso</p>
      </a>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame43 />
      <Frame44 />
    </div>
  );
}

function SectionPortofolio() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.06)] relative rounded-[12px] shrink-0 w-full" data-name="Section-Portofolio">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#383b46] text-[16px] w-full">Portofolio</p>
        <Frame42 />
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start not-italic p-[12px] relative size-full text-[13px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-black whitespace-nowrap">
          <span className="leading-[normal] text-[#4c4f59]">{`Aditya Rahardjo · `}</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-[#94a3b8]">2j lalu</span>
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#4c4f59] w-[min-content]">Pengalaman di Gojek sangat relevan dengan stack kita.</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-[#f8fafc] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start not-italic p-[12px] relative size-full text-[13px]">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-black whitespace-nowrap">
          <span className="leading-[normal] text-[#4c4f59]">{`Adityo · `}</span>
          <span className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-[#94a3b8]">Kemarin</span>
        </p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#4c4f59] w-[min-content]">Skill system design sangat solid, bisa lanjut interview.</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-[#f9f9f9] relative rounded-[8px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex items-start p-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[13px] whitespace-nowrap">Tulis catatan baru...</p>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame46 />
      <Frame47 />
      <Frame48 />
    </div>
  );
}

function SectionCatatanInternal() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.06)] relative rounded-[12px] shrink-0 w-full" data-name="Section-Catatan Internal">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#383b46] text-[16px] w-full">Catatan Internal</p>
        <Frame45 />
      </div>
    </div>
  );
}

function SidebarCol() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[300px]" data-name="Sidebar-Col">
      <SectionInformasiPribadi />
      <SectionPreferensiKerja />
      <SectionPortofolio />
      <SectionCatatanInternal />
    </div>
  );
}

function Columns() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[32px] items-start min-h-px overflow-clip relative w-full" data-name="Columns">
      <MainCol />
      <SidebarCol />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px relative w-full">
      <HeaderCard />
      <TabBar />
      <Columns />
    </div>
  );
}

function ProfilePage() {
  return (
    <div className="absolute bg-[#f9f9f9] content-stretch flex flex-col gap-[32px] h-[1081px] items-start left-[184px] overflow-clip px-[40px] py-[48px] rounded-[6px] top-[44px] w-[1128px]" data-name="profile-page">
      <Frame />
      <Frame50 />
    </div>
  );
}

export default function Frame49() {
  return (
    <div className="bg-[rgba(0,0,0,0.3)] relative size-full">
      <ProfilePage />
    </div>
  );
}