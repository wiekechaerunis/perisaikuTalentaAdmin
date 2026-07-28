import svgPaths from "./svg-rr13kphty3";
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
          <path d={svgPaths.p1023670} id="Vector" stroke="var(--stroke-0, #777980)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function NavRecruitment() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Nav-Recruitment">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <Briefcase />
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] whitespace-nowrap">Lowongan</p>
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
          <path d={svgPaths.p1165c980} id="Vector" stroke="var(--stroke-0, #0052FF)" strokeLinecap="round" strokeWidth="2" />
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
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0052ff] text-[14px] whitespace-nowrap">Manajemen Kandidat</p>
          <div className="overflow-clip relative shrink-0 size-[14px]" data-name="chevron down">
            <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
              <div className="absolute inset-[-28.57%_-14.29%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5.5">
                  <path d="M1 1L4.5 4.5L8 1" id="Vector" stroke="var(--stroke-0, #0052FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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
    <div className="bg-[#ebf2ff] relative rounded-[8px] shrink-0 w-full" data-name="Nav-Talent Pool">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[8px] relative size-full">
          <Users1 />
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0052ff] text-[14px] whitespace-nowrap">Pipeline</p>
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

function Frame72() {
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
      <Frame72 />
      <NavRecruitment1 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] h-[1129px] items-start p-[24px] relative shrink-0 w-[260px]" data-name="Sidebar">
      <div aria-hidden className="absolute border-[#e6e6e7] border-r border-solid inset-0 pointer-events-none" />
      <Logo />
      <Menu />
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="bell">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="bell">
          <path d={svgPaths.p21bb9400} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[10px] relative rounded-[99px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <Bell />
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-end not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] leading-[20px] relative shrink-0 text-[14px] text-black">Budi Santoso</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#64748b] text-[11px]">Manajer HR</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame4 />
      <div className="relative rounded-[20px] shrink-0 size-[40px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle} />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center justify-end min-w-px relative" data-name="Frame">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[40px] py-[20px] relative size-full">
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic relative" data-name="Frame">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[32px] relative shrink-0 text-[#383b46] text-[28px] whitespace-nowrap">Pipeline</p>
      <p className="font-['DM_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#64748b] text-[14px] w-[392px]">Pilih lowongan untuk melihat pipeline kandidat</p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex items-start px-[40px] relative size-full">
        <Frame5 />
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="search">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="search">
          <path d={svgPaths.p1615880} id="Vector" stroke="var(--stroke-0, #94A3B8)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Toolbar() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[10px]" data-name="toolbar">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
          <Search />
          <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] leading-[normal] min-w-px not-italic relative text-[#94a3b8] text-[14px]">Cari posisi lowongan...</p>
        </div>
      </div>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Toolbar />
      <div className="bg-white content-stretch flex gap-[10px] h-[40px] items-center justify-center px-[12px] py-[8px] relative rounded-[20px] shrink-0 w-[85px]" data-name="Button">
        <div aria-hidden className="absolute border-[#c5c6c9] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Bold',sans-serif] leading-[20px] min-w-px not-italic relative text-[#4c4f59] text-[14px]" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
          Filter
        </p>
        <div className="content-stretch flex items-start relative shrink-0" data-name="filter">
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
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[99px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#065f46] text-[11px] whitespace-nowrap">Diterbitkan</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#383b46] text-[16px] whitespace-nowrap">Backend Engineer</p>
      <Frame7 />
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

function Frame9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <MapPin />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Jakarta, Indonesia</p>
    </div>
  );
}

function Frame10() {
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

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Briefcase1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Engineering</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0" data-name="Frame">
      <Frame9 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[rgba(0,82,255,0.1)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap">12</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Frame13 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Melamar</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[rgba(14,165,233,0.1)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap">5</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Frame15 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Penyaringan</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[rgba(245,158,11,0.1)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap">3</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Frame17 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Wawancara</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[rgba(139,92,246,0.1)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap">1</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Frame19 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Ditawarkan</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[rgba(16,185,129,0.1)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap">0</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Frame21 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Diterima</p>
    </div>
  );
}

function PipelineStats() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="pipeline-stats">
      <Frame12 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#647396] text-[12px] whitespace-nowrap">|</p>
      <Frame14 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#647396] text-[12px] whitespace-nowrap">|</p>
      <Frame16 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#647396] text-[12px] whitespace-nowrap">|</p>
      <Frame18 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#647396] text-[12px] whitespace-nowrap">|</p>
      <Frame20 />
    </div>
  );
}

function LeftContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="left-content">
      <Frame6 />
      <Frame8 />
      <PipelineStats />
    </div>
  );
}

function JobRow() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.02)] relative rounded-[12px] shrink-0 w-full" data-name="job-row">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative size-full">
          <LeftContent />
          <div className="bg-white content-stretch flex h-[40px] items-center justify-center px-[12px] py-[8px] relative rounded-[20px] shrink-0 w-[132px]" data-name="Button">
            <div aria-hidden className="absolute border-[#0052ff] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Bold',sans-serif] leading-[20px] min-w-px not-italic relative text-[#0052ff] text-[14px] text-center" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
              Lihat Pipeline
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[99px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#065f46] text-[11px] whitespace-nowrap">Diterbitkan</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#383b46] text-[16px] whitespace-nowrap">Product Designer</p>
      <Frame23 />
    </div>
  );
}

function MapPin1() {
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

function Frame25() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <MapPin1 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Jakarta, Indonesia</p>
    </div>
  );
}

function Frame26() {
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

function Briefcase2() {
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

function Frame27() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Briefcase2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Product</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0" data-name="Frame">
      <Frame25 />
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[rgba(0,82,255,0.1)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap">8</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Frame30 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Melamar</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[rgba(14,165,233,0.1)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap">12</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Frame32 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Penyaringan</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="bg-[rgba(245,158,11,0.1)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap">2</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Frame34 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Wawancara</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-[rgba(139,92,246,0.1)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap">0</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Frame36 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Ditawarkan</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[rgba(16,185,129,0.1)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap">0</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Frame38 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Diterima</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Frame">
      <Frame29 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#647396] text-[12px] whitespace-nowrap">|</p>
      <Frame31 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#647396] text-[12px] whitespace-nowrap">|</p>
      <Frame33 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#647396] text-[12px] whitespace-nowrap">|</p>
      <Frame35 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#647396] text-[12px] whitespace-nowrap">|</p>
      <Frame37 />
    </div>
  );
}

function LeftContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="left-content">
      <Frame22 />
      <Frame24 />
      <Frame28 />
    </div>
  );
}

function JobRow1() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.02)] relative rounded-[12px] shrink-0 w-full" data-name="job-row">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative size-full">
          <LeftContent1 />
          <div className="bg-white content-stretch flex h-[40px] items-center justify-center px-[12px] py-[8px] relative rounded-[20px] shrink-0 w-[132px]" data-name="Button">
            <div aria-hidden className="absolute border-[#0052ff] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Bold',sans-serif] leading-[20px] min-w-px not-italic relative text-[#0052ff] text-[14px] text-center" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
              Lihat Pipeline
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-[#fee2e2] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[99px] shrink-0 w-[79px]" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#991b1b] text-[11px] whitespace-nowrap">Tutup</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#383b46] text-[16px] whitespace-nowrap">DevOps Lead</p>
      <Frame40 />
    </div>
  );
}

function MapPin2() {
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

function Frame42() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <MapPin2 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Jakarta, Indonesia</p>
    </div>
  );
}

function Frame43() {
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

function Briefcase3() {
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

function Frame44() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Briefcase3 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Engineering</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0" data-name="Frame">
      <Frame42 />
      <Frame43 />
      <Frame44 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="bg-[rgba(0,82,255,0.1)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap">45</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Frame46 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Melamar</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-[rgba(14,165,233,0.1)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap">20</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Frame48 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Penyaringan</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-[rgba(245,158,11,0.1)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap">8</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Frame50 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Wawancara</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-[rgba(139,92,246,0.1)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap">3</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Frame52 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Ditawarkan</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-[rgba(16,185,129,0.1)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap">0</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Frame54 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Diterima</p>
    </div>
  );
}

function PipelineStats1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="pipeline-stats">
      <Frame45 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#647396] text-[12px] whitespace-nowrap">|</p>
      <Frame47 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#647396] text-[12px] whitespace-nowrap">|</p>
      <Frame49 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#647396] text-[12px] whitespace-nowrap">|</p>
      <Frame51 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#647396] text-[12px] whitespace-nowrap">|</p>
      <Frame53 />
    </div>
  );
}

function LeftContent2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="left-content">
      <Frame39 />
      <Frame41 />
      <PipelineStats1 />
    </div>
  );
}

function JobRow2() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.02)] relative rounded-[12px] shrink-0 w-full" data-name="job-row">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative size-full">
          <LeftContent2 />
          <div className="bg-white content-stretch flex h-[40px] items-center justify-center px-[12px] py-[8px] relative rounded-[20px] shrink-0 w-[132px]" data-name="Button">
            <div aria-hidden className="absolute border-[#0052ff] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Bold',sans-serif] leading-[20px] min-w-px not-italic relative text-[#0052ff] text-[14px] text-center" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
              Lihat Pipeline
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[99px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#065f46] text-[11px] whitespace-nowrap">Diterbitkan</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#383b46] text-[16px] whitespace-nowrap">HR Generalist</p>
      <Frame56 />
    </div>
  );
}

function MapPin3() {
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

function Frame58() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <MapPin3 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Jakarta, Indonesia</p>
    </div>
  );
}

function Frame59() {
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

function Briefcase4() {
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

function Frame60() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Briefcase4 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Human Resource</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[14px] items-start relative shrink-0" data-name="Frame">
      <Frame58 />
      <Frame59 />
      <Frame60 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="bg-[rgba(0,82,255,0.1)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap">15</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Frame63 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Melamar</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-[rgba(14,165,233,0.1)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap">4</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Frame65 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Penyaringan</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-[rgba(245,158,11,0.1)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap">1</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Frame67 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Wawancara</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-[rgba(139,92,246,0.1)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap">0</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Frame69 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Ditawarkan</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-[rgba(16,185,129,0.1)] content-stretch flex items-start px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#374151] text-[12px] whitespace-nowrap">0</p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Frame">
      <Frame71 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#475569] text-[12px] whitespace-nowrap">Diterima</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Frame">
      <Frame62 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#647396] text-[12px] whitespace-nowrap">|</p>
      <Frame64 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#647396] text-[12px] whitespace-nowrap">|</p>
      <Frame66 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#647396] text-[12px] whitespace-nowrap">|</p>
      <Frame68 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#647396] text-[12px] whitespace-nowrap">|</p>
      <Frame70 />
    </div>
  );
}

function LeftContent3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="left-content">
      <Frame55 />
      <Frame57 />
      <Frame61 />
    </div>
  );
}

function JobRow3() {
  return (
    <div className="bg-white drop-shadow-[0px_2px_2px_rgba(0,0,0,0.02)] relative rounded-[12px] shrink-0 w-full" data-name="job-row">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[20px] relative size-full">
          <LeftContent3 />
          <div className="bg-white content-stretch flex h-[40px] items-center justify-center px-[12px] py-[8px] relative rounded-[20px] shrink-0 w-[132px]" data-name="Button">
            <div aria-hidden className="absolute border-[#0052ff] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
            <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Bold',sans-serif] leading-[20px] min-w-px not-italic relative text-[#0052ff] text-[14px] text-center" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
              Lihat Pipeline
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[1100px]" data-name="list-section">
      <JobRow />
      <JobRow1 />
      <JobRow2 />
      <JobRow3 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame77 />
      <ListSection />
    </div>
  );
}

function Frame75() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[40px] relative size-full">
        <Frame76 />
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Header />
      <Frame74 />
      <Frame75 />
    </div>
  );
}

function Main() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Main">
      <div className="content-stretch flex flex-col items-start pb-[40px] relative size-full">
        <Frame73 />
      </div>
    </div>
  );
}

export default function LowonganPageJobList() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-start relative size-full" data-name="Lowongan Page -Job List">
      <Sidebar />
      <Main />
    </div>
  );
}