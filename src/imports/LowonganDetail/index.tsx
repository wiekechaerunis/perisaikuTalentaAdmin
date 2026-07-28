import svgPaths from "./svg-25afbh8kme";
import imgRectangle from "./c6659080845fc664635625ec6b1f2bd6fc3a8f49.png";

function ShieldCheck() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="shield-check">
          <path d={svgPaths.p95db000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#0052ff] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Frame">
      <ShieldCheck />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Logo">
      <Frame />
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0052ff] text-[18px] whitespace-nowrap">Perisaiku Talenta</p>
    </div>
  );
}

function LayoutDashboard() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="layout-dashboard">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="layout-dashboard">
          <g id="Vector">
            <path d={svgPaths.p1fc96a00} stroke="var(--stroke-0, #777980)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p33089d00} stroke="var(--stroke-0, #777980)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p49cfa80} stroke="var(--stroke-0, #777980)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p1cfbf300} stroke="var(--stroke-0, #777980)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NavDashboard() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Nav-Dashboard">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <LayoutDashboard />
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] whitespace-nowrap">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function Briefcase() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="briefcase">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="briefcase">
          <path d={svgPaths.p1023670} id="Vector" stroke="var(--stroke-0, #0052FF)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavRecruitment() {
  return (
    <div className="bg-[#ebf2ff] relative rounded-[8px] shrink-0 w-full" data-name="Nav-Recruitment">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Briefcase />
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0052ff] text-[14px] whitespace-nowrap">Lowongan</p>
        </div>
      </div>
    </div>
  );
}

function Users() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="users">
          <path d={svgPaths.p1165c980} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavTalentPool() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Nav-Talent Pool">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Users />
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#383b46] text-[14px] whitespace-nowrap">Manajemen Kandidat</p>
          <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron down">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
              <div className="absolute inset-[-28.57%_-14.29%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5.5">
                  <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #606268)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Users1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="users" opacity="0">
          <path d={svgPaths.p1165c980} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavTalentPool1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Nav-Talent Pool">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative size-full">
          <Users1 />
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#383b46] text-[14px] whitespace-nowrap">Pipeline</p>
        </div>
      </div>
    </div>
  );
}

function Users2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="users" opacity="0">
          <path d={svgPaths.p1165c980} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavTalentPool2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Nav-Talent Pool">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative size-full">
          <Users2 />
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#383b46] text-[14px] whitespace-nowrap">List Kandidat</p>
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <NavTalentPool />
      <NavTalentPool1 />
      <NavTalentPool2 />
    </div>
  );
}

function BarChart() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="bar-chart">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="bar-chart">
          <path d={svgPaths.p25c3a1c0} id="Vector" stroke="var(--stroke-0, #64748B)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavRecruitment1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Nav-Recruitment">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <BarChart />
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#383b46] text-[14px] whitespace-nowrap">Analitik</p>
        </div>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Menu">
      <NavDashboard />
      <NavRecruitment />
      <Frame60 />
      <NavRecruitment1 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[260px]" data-name="Sidebar">
      <div aria-hidden className="absolute border-[#e6e6e7] border-r border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[24px] relative size-full">
        <Logo />
        <Menu />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_14_2334)" id="Frame">
          <path d={svgPaths.p38bd2300} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_14_2334">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[10px] relative rounded-[99px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <Frame4 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-end not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-black">Budi Santoso</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#64748b] text-[11px]">Manajer HR</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame6 />
      <div className="relative rounded-[20px] shrink-0 size-[40px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle} />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center justify-end min-w-px relative" data-name="Frame">
      <Frame3 />
      <Frame5 />
    </div>
  );
}

function TopHeader() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="TopHeader">
      <div aria-hidden className="absolute border-[#e6e6e7] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[40px] py-[20px] relative size-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <div className="content-stretch flex items-start relative shrink-0 size-[32px]" data-name="📍 Leading Icon">
        <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Icon">
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
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#383b46] text-[28px] whitespace-nowrap">Detail Lowongan</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#ff6b35] text-[14px] whitespace-nowrap">Daftar Lowongan</p>
      <div className="content-stretch flex items-start relative shrink-0 size-[14px]" data-name="📍 Leading Icon">
        <div className="overflow-clip relative shrink-0 size-[14px]" data-name="Icon">
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
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Detail Lowongan</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[384px]" data-name="Frame">
      <Frame62 />
      <Frame61 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-white content-stretch flex gap-[6px] items-center justify-center px-[10px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Button">
        <div aria-hidden className="absolute border-[#f83a1e] border-[1.25px] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="📍 Leading Icon">
          <div className="absolute inset-[20.83%]" data-name="Icon">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.33333 9.33333">
              <path d={svgPaths.p27be5e00} fill="var(--fill-0, #C93F2A)" id="Icon" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white content-stretch flex gap-[6px] items-center justify-center px-[10px] relative rounded-[8px] shrink-0 size-[40px]" data-name="Button">
        <div aria-hidden className="absolute border-[#c5c6c9] border-[1.25px] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="relative shrink-0 size-[16px]" data-name="📍 Leading Icon">
          <div className="absolute inset-[8.75%]" data-name="Union">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2 13.2">
              <path clipRule="evenodd" d={svgPaths.p1a3a4800} fill="var(--fill-0, #606268)" fillRule="evenodd" id="Union" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Frame">
      <Frame64 />
      <div className="flex h-[37.014px] items-center justify-center relative shrink-0 w-0">
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[37.014px]">
            <div className="absolute inset-[-0.5px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.0135 0.5">
                <line id="Line 51" stroke="var(--stroke-0, #E6E6E7)" strokeWidth="0.5" x2="37.0135" y1="0.25" y2="0.25" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0052ff] content-stretch flex h-[40px] items-center justify-center px-[12px] py-[8px] relative rounded-[20px] shrink-0 w-[144px]" data-name="Button">
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['DM_Sans:Bold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[0px] text-center text-white">
          <p className="leading-[20px] text-[14px]">Edit Lowongan</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[40px] relative size-full">
          <Frame9 />
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[99px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#065f46] text-[11px] whitespace-nowrap">Diterbitkan</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#383b46] text-[28px] whitespace-nowrap">Backend Engineer</p>
      <Frame15 />
    </div>
  );
}

function MapPin() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="map-pin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="map-pin">
          <path d={svgPaths.p1b8a0e00} id="Vector" stroke="var(--stroke-0, #777980)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <MapPin />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Jakarta, Indonesia</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="📍 Leading Icon">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[13px] top-[calc(50%+0.5px)]" data-name="Icon">
          <div className="absolute inset-[-6.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.7333 14.7333">
              <path d={svgPaths.p2e445000} id="Icon" stroke="var(--stroke-0, #777980)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.73333" />
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Onsite · Full-time</p>
    </div>
  );
}

function Briefcase1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="briefcase">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="briefcase">
          <path d={svgPaths.p33811580} id="Vector" stroke="var(--stroke-0, #777980)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Briefcase1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Engineering</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0" data-name="Frame">
      <Frame17 />
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame63 />
      <Frame16 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start leading-[20px] not-italic relative shrink-0 text-[#383b46] text-[14px] w-full" data-name="Frame">
      <p className="font-['DM_Sans:Bold',sans-serif] relative shrink-0 whitespace-nowrap" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
        Tentang Peran Ini
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] min-w-full relative shrink-0 w-[min-content]">Kami sedang mencari Backend Engineer yang berbakat untuk bergabung dengan tim kami. Anda akan bertanggung jawab untuk membangun dan memelihara infrastruktur server-side aplikasi kami, memastikan performa tinggi dan responsivitas yang baik.</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 text-[#383b46] text-[14px] w-full" data-name="Frame">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[20px] relative shrink-0 whitespace-nowrap" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
        Persyaratan
      </p>
      <div className="font-['DM_Sans:Regular',sans-serif] leading-[0] min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[20px] mb-0">• Minimal 3 tahun pengalaman sebagai Backend Engineer</p>
        <p className="leading-[20px] mb-0">• Ahli dalam Node.js dan TypeScript</p>
        <p className="leading-[20px] mb-0">• Pengalaman dengan database PostgreSQL dan Redis</p>
        <p className="leading-[20px] mb-0">• Memahami arsitektur microservices</p>
        <p className="leading-[20px]">• Memiliki kemampuan problem-solving yang kuat</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[#e6f4ff] content-stretch flex items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#bfe7ff] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1e3a8a] text-[12px] whitespace-nowrap">Node.js</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#e6f4ff] content-stretch flex items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#bfe7ff] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1e3a8a] text-[12px] whitespace-nowrap">TypeScript</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#e6f4ff] content-stretch flex items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#bfe7ff] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1e3a8a] text-[12px] whitespace-nowrap">PostgreSQL</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#e6f4ff] content-stretch flex items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#bfe7ff] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1e3a8a] text-[12px] whitespace-nowrap">Redis</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#e6f4ff] content-stretch flex items-center px-[12px] py-[6px] relative rounded-[999px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#bfe7ff] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#1e3a8a] text-[12px] whitespace-nowrap">Microservices</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame24 />
      <Frame25 />
      <Frame26 />
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
        Skill Tags
      </p>
      <Frame23 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['DM_Sans:Bold',sans-serif] relative shrink-0 text-black" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
        Kompensasi
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] relative shrink-0 text-[#383b46]">Rp 8.000.000 – Rp 15.000.000 / bulan</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['DM_Sans:Bold',sans-serif] relative shrink-0 text-black" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
        Jumlah Kuota
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] relative shrink-0 text-[#383b46]">2 Pelamar</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[40px] items-start leading-[20px] not-italic relative shrink-0 text-[14px] w-full whitespace-nowrap" data-name="Frame">
      <Frame30 />
      <Frame31 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[252px]" data-name="Frame">
      <p className="font-['DM_Sans:Bold',sans-serif] relative shrink-0 text-black" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
        Tanggal Dibuat
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] relative shrink-0 text-[#383b46]">12 Okt 2023</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['DM_Sans:Bold',sans-serif] relative shrink-0 text-black" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
        Batas tanggal Pelamaran
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] relative shrink-0 text-[#383b46]">30 Nov 2023</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[40px] items-start leading-[20px] not-italic relative shrink-0 text-[14px] w-full whitespace-nowrap" data-name="Frame">
      <Frame33 />
      <Frame34 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[32px] items-start p-[24px] relative size-full">
        <Frame14 />
        <Frame20 />
        <Frame21 />
        <Frame22 />
        <Frame29 />
        <Frame32 />
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Frame">
      <Frame13 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#4c4f59] text-[12px]">Total Pelamar</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#383b46] text-[24px]">34</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#4c4f59] text-[12px]">Lulus Seleksi</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#383b46] text-[24px]">12</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[normal] relative shrink-0 w-full" data-name="Frame">
      <Frame38 />
      <Frame39 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-[#f6f4f4] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic p-[20px] relative size-full whitespace-nowrap">
        <p className="font-['DM_Sans:Bold',sans-serif] leading-[20px] relative shrink-0 text-[#383b46] text-[14px]" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
          Statistik Cepat
        </p>
        <Frame37 />
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[24px] relative shrink-0 text-[#383b46] text-[16px]">Pelamar Terbaru</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#0052ff] text-[14px]">Lihat Semua Pelamar</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-start py-[12px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e6e6e7] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] w-[133px]">NAMA KANDIDAT</p>
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] w-[150px]">TANGGAL MELAMAR</p>
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] w-[150px]">STATUS</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[133px]" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] whitespace-nowrap">Ananda Putri</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[99px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e40af] text-[11px] whitespace-nowrap">Penyaringan</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[150px]" data-name="Frame">
      <Frame47 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e6e6e7] border-b border-solid inset-0 pointer-events-none" />
      <Frame45 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[150px]">12 Okt 2023</p>
      <Frame46 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[135px]" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] whitespace-nowrap">Rizky Pratama</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-[#fef3c7] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[99px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#92400e] text-[11px] whitespace-nowrap">Wawancara</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[150px]" data-name="Frame">
      <Frame51 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e6e6e7] border-b border-solid inset-0 pointer-events-none" />
      <Frame49 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[150px]">11 Okt 2023</p>
      <Frame50 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[135px]" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] whitespace-nowrap">Dewi Lestari</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[99px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#065f46] text-[11px] whitespace-nowrap">Ditawarkan</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[150px]" data-name="Frame">
      <Frame55 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e6e6e7] border-b border-solid inset-0 pointer-events-none" />
      <Frame53 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[150px]">10 Okt 2023</p>
      <Frame54 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[135px]" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] whitespace-nowrap">Bambang Wijaya</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-[#fee2e2] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[99px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#991b1b] text-[11px] whitespace-nowrap">Ditolak</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[150px]" data-name="Frame">
      <Frame59 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e6e6e7] border-b border-solid inset-0 pointer-events-none" />
      <Frame57 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[150px]">09 Okt 2023</p>
      <Frame58 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame43 />
      <Frame44 />
      <Frame48 />
      <Frame52 />
      <Frame56 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[16px] w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative size-full">
        <Frame41 />
        <Frame42 />
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[644px] items-start relative shrink-0 w-[420px]" data-name="Frame">
      <Frame36 />
      <Frame40 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex gap-[24px] items-start px-[40px] relative size-full">
        <Frame12 />
        <Frame35 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[32px] items-start py-[32px] relative size-full">
        <Frame8 />
        <Frame11 />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="Frame">
      <TopHeader />
      <Frame7 />
    </div>
  );
}

export default function LowonganDetail() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-start relative size-full" data-name="Lowongan - Detail">
      <Sidebar />
      <Frame1 />
    </div>
  );
}