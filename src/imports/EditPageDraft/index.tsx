import svgPaths from "./svg-03yz710mdb";
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

function Frame21() {
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
      <Frame21 />
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

function Frame26() {
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
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#383b46] text-[28px] whitespace-nowrap">Add Lowongan</p>
    </div>
  );
}

function Frame25() {
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
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Add Lowongan</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <Frame26 />
      <Frame25 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex items-start px-[40px] relative size-full">
        <Frame5 />
      </div>
    </div>
  );
}

function Select() {
  return (
    <div className="bg-white h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="select">
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#4c4f59] text-[14px]">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
}

function AssertiveText() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Assertive Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#777980] text-[10px] text-right">
        <p className="leading-[16px]">23 / 100</p>
      </div>
    </div>
  );
}

function FieldIndustri() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[64px] items-start min-w-px relative" data-name="field-industri">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">Nama Posisi</p>
      <Select />
      <AssertiveText />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <FieldIndustri />
    </div>
  );
}

function Select1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[12px] w-full" data-name="select">
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#4c4f59] text-[14px]">{`Desain & Kreatif`}</p>
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
      </div>
    </div>
  );
}

function FieldIndustri1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[76px] items-start min-w-px relative" data-name="field-industri">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">Kategori Pekerjaan</p>
      <Select1 />
    </div>
  );
}

function Select2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[12px] w-full" data-name="select">
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#4c4f59] text-[14px]">Full-time</p>
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
      </div>
    </div>
  );
}

function FieldIndustri2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[76px] items-start min-w-px relative" data-name="field-industri">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">Tipe Pekerjaan</p>
      <Select2 />
    </div>
  );
}

function Select3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[12px] w-full" data-name="select">
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#4c4f59] text-[14px]">Jakarta</p>
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
      </div>
    </div>
  );
}

function FieldIndustri3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[76px] items-start min-w-px relative" data-name="field-industri">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">Lokasi</p>
      <Select3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <FieldIndustri1 />
      <FieldIndustri2 />
      <FieldIndustri3 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[20px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" fill="var(--fill-0, white)" id="Ellipse" r="7" stroke="var(--stroke-0, #FF6B35)" strokeWidth="6" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] whitespace-nowrap">On-site</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[20px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" fill="var(--fill-0, white)" id="Ellipse" r="9" stroke="var(--stroke-0, #E6E6E7)" strokeWidth="2" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] whitespace-nowrap">Remote</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[20px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" fill="var(--fill-0, white)" id="Ellipse" r="9" stroke="var(--stroke-0, #E6E6E7)" strokeWidth="2" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] whitespace-nowrap">Hybrid</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Frame">
      <Frame12 />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#383b46] text-[14px] whitespace-nowrap">Work Setting</p>
      <Frame11 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame29 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#383b46] text-[16px] whitespace-nowrap">Informasi Dasar</p>
      <Frame8 />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#383b46] text-[0px] whitespace-nowrap">
        <p className="leading-[16px] text-[12px]">Deskripsi Pekerjaan</p>
      </div>
    </div>
  );
}

function BtnBold() {
  return (
    <div className="content-stretch flex gap-[7px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Btn Bold">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#777980] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[14px]">{`Normal `}</p>
      </div>
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
  );
}

function BtnBold1() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Btn Bold">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[13px] text-[#777980] text-[11px] text-center">
        <p className="leading-[14px]">B</p>
      </div>
    </div>
  );
}

function TablerItalic() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="tabler:italic">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="tabler:italic">
          <path d={svgPaths.p17452c40} id="Vector" stroke="var(--stroke-0, #777980)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function BtnItalic() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Btn Italic">
      <TablerItalic />
    </div>
  );
}

function TablerUnderline() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="relative size-[13px]" data-name="tabler:underline">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <g id="tabler:underline">
              <path d={svgPaths.p6d0b580} id="Vector" stroke="var(--stroke-0, #777980)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function BtnUnderline() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Btn Underline">
      <TablerUnderline />
    </div>
  );
}

function Group() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <BtnBold1 />
      <BtnItalic />
      <BtnUnderline />
    </div>
  );
}

function GravityUiListOl() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="gravity-ui:list-ol">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="gravity-ui:list-ol">
          <path clipRule="evenodd" d={svgPaths.pb752d80} fill="var(--fill-0, #777980)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BtnBulletList() {
  return (
    <div className="content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Btn Bullet List">
      <GravityUiListOl />
    </div>
  );
}

function MaterialSymbolsListRounded() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="material-symbols:list-rounded">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="material-symbols:list-rounded">
          <path d={svgPaths.p46f6500} fill="var(--fill-0, #777980)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BtnNumberedList() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Btn Numbered List">
      <MaterialSymbolsListRounded />
    </div>
  );
}

function MajesticonsText() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="majesticons:text">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="majesticons:text">
          <path d={svgPaths.p2d469d80} id="Vector" stroke="var(--stroke-0, #777980)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function BtnNumberedList1() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Btn Numbered List">
      <MajesticonsText />
    </div>
  );
}

function Group1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <BtnBulletList />
      <BtnNumberedList />
      <BtnNumberedList1 />
    </div>
  );
}

function LineMdLink() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="line-md:link">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="line-md:link">
          <path d={svgPaths.p37f7b700} id="Vector" stroke="var(--stroke-0, #777980)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function BtnLink() {
  return (
    <div className="content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Btn Link">
      <LineMdLink />
    </div>
  );
}

function Toolbar() {
  return (
    <div className="relative shrink-0 w-full" data-name="Toolbar">
      <div aria-hidden className="absolute border-[#e6e6e7] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
          <BtnBold />
          <div className="bg-[#e6e6e7] h-[16px] relative shrink-0 w-px" data-name="Rectangle" />
          <Group />
          <div className="bg-[#e6e6e7] h-[16px] relative shrink-0 w-px" data-name="Rectangle" />
          <Group1 />
          <div className="bg-[#e6e6e7] h-[16px] relative shrink-0 w-px" data-name="Rectangle" />
          <BtnLink />
        </div>
      </div>
    </div>
  );
}

function InputArea() {
  return (
    <div className="min-h-[160px] relative shrink-0 w-full" data-name="Input Area">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] p-[16px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-full">Kami mencari Senior Product Designer berpengalaman untuk memimpin desain produk digital kami. Bertanggung jawab merancang pengalaman pengguna yang intuitif dan berkolaborasi erat dengan tim produk dan engineering.</p>
      </div>
    </div>
  );
}

function EditorContainer() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Editor Container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Toolbar />
        <InputArea />
      </div>
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function AssertiveText1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Assertive Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#777980] text-[10px] text-right">
        <p className="leading-[16px]">218 / 5000</p>
      </div>
    </div>
  );
}

function RichTextEditor() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[224px] items-start relative shrink-0 w-full" data-name="Rich Text Editor">
      <Label />
      <EditorContainer />
      <AssertiveText1 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#383b46] text-[0px] whitespace-nowrap">
        <p className="leading-[16px] text-[12px]">Persyaratan</p>
      </div>
    </div>
  );
}

function BtnBold2() {
  return (
    <div className="content-stretch flex gap-[7px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Btn Bold">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#777980] text-[11px] text-center whitespace-nowrap">
        <p className="leading-[14px]">{`Normal `}</p>
      </div>
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
  );
}

function BtnBold3() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Btn Bold">
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 size-[13px] text-[#777980] text-[11px] text-center">
        <p className="leading-[14px]">B</p>
      </div>
    </div>
  );
}

function TablerItalic1() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="tabler:italic">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="tabler:italic">
          <path d={svgPaths.p17452c40} id="Vector" stroke="var(--stroke-0, #777980)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function BtnItalic1() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Btn Italic">
      <TablerItalic1 />
    </div>
  );
}

function TablerUnderline1() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="relative size-[13px]" data-name="tabler:underline">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <g id="tabler:underline">
              <path d={svgPaths.p6d0b580} id="Vector" stroke="var(--stroke-0, #777980)" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function BtnUnderline1() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Btn Underline">
      <TablerUnderline1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <BtnBold3 />
      <BtnItalic1 />
      <BtnUnderline1 />
    </div>
  );
}

function GravityUiListOl1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="gravity-ui:list-ol">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="gravity-ui:list-ol">
          <path clipRule="evenodd" d={svgPaths.pb752d80} fill="var(--fill-0, #777980)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BtnBulletList1() {
  return (
    <div className="content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Btn Bullet List">
      <GravityUiListOl1 />
    </div>
  );
}

function MaterialSymbolsListRounded1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="material-symbols:list-rounded">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="material-symbols:list-rounded">
          <path d={svgPaths.p46f6500} fill="var(--fill-0, #777980)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BtnNumberedList2() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Btn Numbered List">
      <MaterialSymbolsListRounded1 />
    </div>
  );
}

function MajesticonsText1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="majesticons:text">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="majesticons:text">
          <path d={svgPaths.p2d469d80} id="Vector" stroke="var(--stroke-0, #777980)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function BtnNumberedList3() {
  return (
    <div className="content-stretch flex items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Btn Numbered List">
      <MajesticonsText1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <BtnBulletList1 />
      <BtnNumberedList2 />
      <BtnNumberedList3 />
    </div>
  );
}

function LineMdLink1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="line-md:link">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="line-md:link">
          <path d={svgPaths.p37f7b700} id="Vector" stroke="var(--stroke-0, #777980)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function BtnLink1() {
  return (
    <div className="content-stretch flex items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Btn Link">
      <LineMdLink1 />
    </div>
  );
}

function Toolbar1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Toolbar">
      <div aria-hidden className="absolute border-[#e6e6e7] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
          <BtnBold2 />
          <div className="bg-[#e6e6e7] h-[16px] relative shrink-0 w-px" data-name="Rectangle" />
          <Group2 />
          <div className="bg-[#e6e6e7] h-[16px] relative shrink-0 w-px" data-name="Rectangle" />
          <Group3 />
          <div className="bg-[#e6e6e7] h-[16px] relative shrink-0 w-px" data-name="Rectangle" />
          <BtnLink1 />
        </div>
      </div>
    </div>
  );
}

function InputArea1() {
  return (
    <div className="min-h-[160px] relative shrink-0 w-full" data-name="Input Area">
      <div className="content-stretch flex flex-col items-start min-h-[inherit] p-[16px] relative size-full">
        <div className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-full">
          <p className="leading-[20px] mb-0">• Min. 5 tahun pengalaman sebagai Product Designer</p>
          <p className="leading-[20px] mb-0">• Mahir menggunakan Figma dan tools desain lainnya</p>
          <p className="leading-[20px] mb-0">• Pengalaman dalam user research dan usability testing</p>
          <p className="leading-[20px]">• Portofolio yang menunjukkan kemampuan desain yang kuat</p>
        </div>
      </div>
    </div>
  );
}

function EditorContainer1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Editor Container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Toolbar1 />
        <InputArea1 />
      </div>
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function AssertiveText2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Assertive Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#777980] text-[10px] text-right">
        <p className="leading-[16px]">175 / 5000</p>
      </div>
    </div>
  );
}

function RichTextEditor1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[232px] items-start relative shrink-0 w-full" data-name="Rich Text Editor">
      <Label1 />
      <EditorContainer1 />
      <AssertiveText2 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <RichTextEditor />
      <RichTextEditor1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#383b46] text-[16px] whitespace-nowrap">{`Deskripsi & Persyaratan`}</p>
      <Frame27 />
    </div>
  );
}

function Select4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[12px] w-full" data-name="select">
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center not-italic px-[12px] relative size-full text-[12px]">
          <p className="font-['Open_Sans:Medium',sans-serif] leading-[18px] relative shrink-0 text-[#4c4f59] text-right whitespace-nowrap">Rp</p>
          <p className="flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] leading-[16px] min-w-px relative text-[#171717]">8.000.000</p>
        </div>
      </div>
    </div>
  );
}

function FieldIndustri4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[76px] items-start min-w-px relative" data-name="field-industri">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">Rentang Gaji (Minimal)</p>
      <Select4 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col h-[22px] items-center justify-end py-[4px] relative shrink-0 w-[12px]">
      <div className="bg-[#777980] h-[2px] relative shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function Select5() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[12px] w-full" data-name="select">
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center not-italic px-[12px] relative size-full text-[12px]">
          <p className="font-['Open_Sans:Medium',sans-serif] leading-[18px] relative shrink-0 text-[#4c4f59] text-right whitespace-nowrap">Rp</p>
          <p className="flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] leading-[16px] min-w-px relative text-[#171717]">15.000.000</p>
        </div>
      </div>
    </div>
  );
}

function FieldIndustri5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[76px] items-start min-w-px relative" data-name="field-industri">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">Rentang Gaji (Maksimal)</p>
      <Select5 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Frame">
      <FieldIndustri4 />
      <Frame28 />
      <FieldIndustri5 />
    </div>
  );
}

function Select6() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[12px] w-full" data-name="select">
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#171717] text-[12px]">31/07/2025</p>
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
      </div>
    </div>
  );
}

function FieldIndustri6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[76px] items-start min-w-px relative" data-name="field-industri">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">Batas Tanggal Pelamaran</p>
      <Select6 />
    </div>
  );
}

function Select7() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-[12px] w-full" data-name="select">
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center not-italic px-[12px] relative size-full text-[12px]">
          <p className="flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] leading-[16px] min-w-px relative text-[#171717]">3</p>
          <p className="font-['Open_Sans:Medium',sans-serif] leading-[18px] relative shrink-0 text-[#4c4f59] text-right whitespace-nowrap">Pelamar</p>
        </div>
      </div>
    </div>
  );
}

function FieldIndustri7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] h-[76px] items-start min-w-px relative" data-name="field-industri">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">Kuota Posisi</p>
      <Select7 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Frame">
      <FieldIndustri6 />
      <FieldIndustri7 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#383b46] text-[16px] whitespace-nowrap">{`Kompensasi & Info Lain`}</p>
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame35420Filled() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[773px] items-start overflow-clip relative shrink-0 w-full" data-name="Frame 35420 – Filled">
      <Frame7 />
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Frame">
      <div className="bg-white relative rounded-[20px] self-stretch shrink-0" data-name="Button">
        <div aria-hidden className="absolute border-[#0052ff] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative size-full">
            <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#0052ff] text-[16px] text-center whitespace-nowrap" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
              Simpan Sebagai Draft
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#0052ff] content-stretch flex h-[48px] items-center justify-center px-[24px] py-[12px] relative rounded-[40px] shrink-0 w-[160px]" data-name="Button">
        <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Bold',sans-serif] leading-[24px] min-w-px not-italic relative text-[16px] text-center text-white" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
          Publikasikan
        </p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-start justify-between pt-[16px] relative shrink-0 w-full" data-name="Frame">
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
      <Frame20 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[40px] items-start p-[32px] relative size-full">
        <Frame35420Filled />
        <Frame19 />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[40px] relative size-full">
        <Frame6 />
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-full">
      <Header />
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Main() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Main">
      <div className="content-stretch flex flex-col items-start pb-[40px] relative size-full">
        <Frame22 />
      </div>
    </div>
  );
}

export default function EditPageDraft() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-start relative size-full" data-name="edit page draft">
      <Sidebar />
      <Main />
    </div>
  );
}