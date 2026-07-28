import svgPaths from "./svg-tzjov6caio";
import imgRectangle from "./c6659080845fc664635625ec6b1f2bd6fc3a8f49.png";
import imgRectangle1 from "./8d2ea234fd999a81862b9c9235f9a7acd5e95c3d.png";
import imgRectangle2 from "./29f87ed48bdc6413f832700108d2d66ac78b6827.png";
import imgRectangle3 from "./04471d6f23368b9f5cd85e72400e9b8a6f71ce92.png";

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
            <path d={svgPaths.p1fc96a00} stroke="var(--stroke-0, #0052FF)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p33089d00} stroke="var(--stroke-0, #0052FF)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p49cfa80} stroke="var(--stroke-0, #0052FF)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p1cfbf300} stroke="var(--stroke-0, #0052FF)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NavDashboard() {
  return (
    <div className="bg-[#ebf2ff] relative rounded-[8px] shrink-0 w-full" data-name="Nav-Dashboard">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative size-full">
          <LayoutDashboard />
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0044d2] text-[14px] whitespace-nowrap">Dashboard</p>
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
          <path d={svgPaths.p1023670} id="Vector" stroke="var(--stroke-0, #64748B)" strokeLinecap="round" strokeWidth="2" />
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
          <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#383b46] text-[14px] whitespace-nowrap">Lowongan</p>
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

function Frame44() {
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
      <Frame44 />
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
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[32px] relative shrink-0 text-[#383b46] text-[28px]">Dashboard</p>
      <p className="font-['DM_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#64748b] text-[14px]">Selamat datang kembali, inilah yang terjadi hari ini.</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[10px] items-start px-[40px] relative size-full">
        <Frame5 />
        <div className="bg-white content-stretch flex h-[48px] items-center justify-center px-[24px] py-[12px] relative rounded-[40px] shrink-0 w-[161px]" data-name="Button">
          <div aria-hidden className="absolute border-[#0052ff] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[40px]" />
          <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Bold',sans-serif] leading-[24px] min-w-px not-italic relative text-[#0052ff] text-[16px] text-center" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
            Lihat Pelamar
          </p>
        </div>
        <div className="bg-[#0052ff] content-stretch flex h-[48px] items-center justify-center px-[24px] py-[12px] relative rounded-[40px] shrink-0 w-[161px]" data-name="Button">
          <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Bold',sans-serif] leading-[24px] min-w-px not-italic relative text-[16px] text-center text-white" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
            Post Job
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0052ff] text-[21px] whitespace-nowrap">24</p>
    </div>
  );
}

function StatCard() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.02)] flex-[1_0_0] min-w-px relative rounded-[16px] self-stretch" data-name="StatCard">
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#777980] text-[14px] whitespace-nowrap">Lowongan Aktif</p>
        <Frame6 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[26px] relative shrink-0 text-[#0052ff] text-[21px]">127</p>
      <p className="font-['DM_Sans:Regular',sans-serif] leading-[16px] opacity-0 relative shrink-0 text-[#777980] text-[12px]">Total sejak awal</p>
    </div>
  );
}

function StatCard1() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.02)] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="StatCard">
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic p-[24px] relative size-full whitespace-nowrap">
        <p className="font-['DM_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#777980] text-[14px]">Lowangan Belum Diproses</p>
        <Frame7 />
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#0052ff] text-[21px] whitespace-nowrap">1.482</p>
    </div>
  );
}

function StatCard2() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.02)] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="StatCard">
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[24px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#777980] text-[14px] whitespace-nowrap">Total Pelamar</p>
        <Frame8 />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[26px] relative shrink-0 text-[#0052ff] text-[21px]">18 Hari</p>
      <p className="font-['DM_Sans:Regular',sans-serif] leading-[16px] relative shrink-0 text-[#777980] text-[12px]">Dari yang sudah diterima</p>
    </div>
  );
}

function StatCard3() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.02)] flex-[1_0_0] min-w-px relative rounded-[16px]" data-name="StatCard">
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic p-[24px] relative size-full whitespace-nowrap">
        <p className="font-['DM_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#777980] text-[14px]">Waktu Hiring Rata-rata</p>
        <Frame9 />
      </div>
    </div>
  );
}

function StatsRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="StatsRow">
      <StatCard />
      <StatCard1 />
      <StatCard2 />
      <StatCard3 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[339px]">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[24px] relative shrink-0 text-[#4c4f59] text-[16px] whitespace-nowrap">Status Kandidat</p>
      <p className="font-['DM_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#777980] text-[14px] w-[392px]">Kondisi terkini, semua lowongan</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between not-italic relative shrink-0 w-full" data-name="Frame">
      <Frame54 />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#0052ff] text-[14px] whitespace-nowrap">Lihat lebih lengkap</p>
    </div>
  );
}

function FunnelUserIcon({ color = "#0052ff" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_funnel_icon)" id="users">
          <path d={svgPaths.p2eddad00} id="Vector" stroke={color} strokeLinecap="round" strokeWidth="1.25" />
        </g>
        <defs>
          <clipPath id="clip0_funnel_icon">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[80px]" data-name="Frame">
      <div className="flex flex-col items-center gap-[4px]">
        <div className="flex gap-[5px] items-center">
          <FunnelUserIcon />
          <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0052ff] text-[12px] whitespace-nowrap">180</p>
        </div>
        <div className="bg-[#0052ff] h-[180px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-[48px]" data-name="Rectangle" />
      </div>
      <div className="h-[12px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Melamar</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[80px]" data-name="Frame">
      <div className="flex flex-col items-center gap-[4px]">
        <div className="flex gap-[5px] items-center">
          <FunnelUserIcon />
          <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0052ff] text-[12px] whitespace-nowrap">150</p>
        </div>
        <div className="bg-[#4e86ff] h-[150px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-[48px]" data-name="Rectangle" />
      </div>
      <div className="h-[12px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Penyaringan</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[80px]" data-name="Frame">
      <div className="flex flex-col items-center gap-[4px]">
        <div className="flex gap-[5px] items-center">
          <FunnelUserIcon />
          <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0052ff] text-[12px] whitespace-nowrap">80</p>
        </div>
        <div className="bg-[#85acff] h-[80px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-[48px]" data-name="Rectangle" />
      </div>
      <div className="h-[12px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Wawancara</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[80px]" data-name="Frame">
      <div className="flex flex-col items-center gap-[4px]">
        <div className="flex gap-[5px] items-center">
          <FunnelUserIcon />
          <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0052ff] text-[12px] whitespace-nowrap">40</p>
        </div>
        <div className="bg-[#bbd1ff] h-[40px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-[48px]" data-name="Rectangle" />
      </div>
      <div className="h-[12px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Ditawarkan</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[80px]" data-name="Frame">
      <div className="flex flex-col items-center gap-[4px]">
        <div className="flex gap-[5px] items-center">
          <FunnelUserIcon />
          <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0052ff] text-[12px] whitespace-nowrap">24</p>
        </div>
        <div className="bg-[#e6efff] h-[24px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-[48px]" data-name="Rectangle" />
      </div>
      <div className="h-[12px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Diterima</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[80px]" data-name="Frame">
      <div className="flex flex-col items-center gap-[4px]">
        <div className="flex gap-[5px] items-center">
          <FunnelUserIcon color="#f83a1e" />
          <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f83a1e] text-[12px] whitespace-nowrap">80</p>
        </div>
        <div className="bg-[#f83a1e] h-[56px] relative rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-[48px]" data-name="Rectangle" />
      </div>
      <div className="h-[12px]" />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#64748b] text-[12px] whitespace-nowrap">Ditolak</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-end justify-between min-h-px relative w-full" data-name="Frame">
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function FunnelCard() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.02)] flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="FunnelCard">
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
        <Frame10 />
        <div className="bg-[#e5e7eb] h-px relative shrink-0 w-full" data-name="Divider" />
        <Frame11 />
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start justify-center not-italic relative shrink-0">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[24px] relative shrink-0 text-[#4c4f59] text-[16px] whitespace-nowrap">Lowongan Populer</p>
      <p className="font-['DM_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#777980] text-[14px] w-[392px]">Sejak lowongan dibuka</p>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[1052px]" data-name="Header">
      <Frame55 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">Dibuat pada 12/01/2026</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black w-[124px]">Backend Engineer</p>
      <Frame58 />
    </div>
  );
}

function BarTrack() {
  return (
    <div className="bg-[rgba(0,82,255,0.1)] flex-[1_0_0] h-[8px] min-w-px overflow-clip relative rounded-[99px]" data-name="BarTrack">
      <div className="absolute bg-[#ff6b35] h-[8px] left-0 rounded-[99px] top-0 w-[177px]" data-name="BarFill" />
    </div>
  );
}

function Users9() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_1_1774)" id="users">
          <path d={svgPaths.p2eddad00} id="Vector" stroke="var(--stroke-0, #383B46)" strokeLinecap="round" strokeWidth="1.25" />
        </g>
        <defs>
          <clipPath id="clip0_1_1774">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
      <Users9 />
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#383b46] text-[14px] whitespace-nowrap">34</p>
    </div>
  );
}

function RightInfo() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end overflow-clip relative shrink-0 w-[95px]" data-name="RightInfo">
      <Frame59 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">Tutup 5 hari lagi</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip py-[5px] relative shrink-0 w-full" data-name="Row_1">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[24px]">1</p>
      <Frame57 />
      <BarTrack />
      <RightInfo />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">Dibuat pada 12/01/2026</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black w-[124px]">Product Designer</p>
      <Frame61 />
    </div>
  );
}

function BarTrack1() {
  return (
    <div className="bg-[rgba(0,82,255,0.1)] flex-[1_0_0] h-[8px] min-w-px overflow-clip relative rounded-[99px]" data-name="BarTrack">
      <div className="absolute bg-[#ff6b35] h-[8px] left-0 rounded-[99px] top-0 w-[177px]" data-name="BarFill" />
    </div>
  );
}

function Users10() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_1_1774)" id="users">
          <path d={svgPaths.p2eddad00} id="Vector" stroke="var(--stroke-0, #383B46)" strokeLinecap="round" strokeWidth="1.25" />
        </g>
        <defs>
          <clipPath id="clip0_1_1774">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
      <Users10 />
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#383b46] text-[14px] whitespace-nowrap">27</p>
    </div>
  );
}

function RightInfo1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end overflow-clip relative shrink-0 w-[95px]" data-name="RightInfo">
      <Frame62 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">Tutup 12 hari lagi</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip py-[5px] relative shrink-0 w-full" data-name="Row_2">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[24px]">2</p>
      <Frame60 />
      <BarTrack1 />
      <RightInfo1 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">Dibuat pada 12/01/2026</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black w-[124px]">Sales Excecutive</p>
      <Frame64 />
    </div>
  );
}

function BarTrack2() {
  return (
    <div className="bg-[rgba(0,82,255,0.1)] flex-[1_0_0] h-[8px] min-w-px overflow-clip relative rounded-[99px]" data-name="BarTrack">
      <div className="absolute bg-[#ff6b35] h-[8px] left-0 rounded-[99px] top-0 w-[177px]" data-name="BarFill" />
    </div>
  );
}

function Users11() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_1_1774)" id="users">
          <path d={svgPaths.p2eddad00} id="Vector" stroke="var(--stroke-0, #383B46)" strokeLinecap="round" strokeWidth="1.25" />
        </g>
        <defs>
          <clipPath id="clip0_1_1774">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
      <Users11 />
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#383b46] text-[14px] whitespace-nowrap">19</p>
    </div>
  );
}

function RightInfo2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end overflow-clip relative shrink-0 w-[95px]" data-name="RightInfo">
      <Frame65 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">Tutup 3 hari lagi</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip py-[5px] relative shrink-0 w-full" data-name="Row_3">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[24px]">3</p>
      <Frame63 />
      <BarTrack2 />
      <RightInfo2 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">Dibuat pada 12 Jan ‘2</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[129px]">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black w-[124px]">Data Analyst</p>
      <Frame67 />
    </div>
  );
}

function BarTrack3() {
  return (
    <div className="bg-[rgba(0,82,255,0.1)] flex-[1_0_0] h-[8px] min-w-px overflow-clip relative rounded-[99px]" data-name="BarTrack">
      <div className="absolute bg-[#ff6b35] h-[8px] left-0 rounded-[99px] top-0 w-[200px]" data-name="BarFill" />
    </div>
  );
}

function Users12() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_1_1774)" id="users">
          <path d={svgPaths.p2eddad00} id="Vector" stroke="var(--stroke-0, #383B46)" strokeLinecap="round" strokeWidth="1.25" />
        </g>
        <defs>
          <clipPath id="clip0_1_1774">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
      <Users12 />
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#383b46] text-[14px] whitespace-nowrap">12</p>
    </div>
  );
}

function RightInfo3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end overflow-clip relative shrink-0" data-name="RightInfo">
      <Frame68 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">Tutup 18 hari lagi</p>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip py-[5px] relative shrink-0 w-full" data-name="Row_4">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[24px]">4</p>
      <Frame66 />
      <BarTrack3 />
      <RightInfo3 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">Dibuat pada 12/01/2026</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black w-[124px]">Product Manager</p>
      <Frame70 />
    </div>
  );
}

function BarTrack4() {
  return (
    <div className="bg-[rgba(0,82,255,0.1)] flex-[1_0_0] h-[8px] min-w-px overflow-clip relative rounded-[99px]" data-name="BarTrack">
      <div className="absolute bg-[#ff6b35] h-[8px] left-0 rounded-[99px] top-0 w-[134px]" data-name="BarFill" />
    </div>
  );
}

function Users13() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_1_1774)" id="users">
          <path d={svgPaths.p2eddad00} id="Vector" stroke="var(--stroke-0, #383B46)" strokeLinecap="round" strokeWidth="1.25" />
        </g>
        <defs>
          <clipPath id="clip0_1_1774">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
      <Users13 />
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#383b46] text-[14px] whitespace-nowrap">8</p>
    </div>
  );
}

function RightInfo4() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end overflow-clip relative shrink-0 w-[95px]" data-name="RightInfo">
      <Frame71 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[12px] whitespace-nowrap">Tutup 9 hari lagi</p>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip py-[5px] relative shrink-0 w-full" data-name="Row_5">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6b7280] text-[13px] w-[24px]">5</p>
      <Frame69 />
      <BarTrack4 />
      <RightInfo4 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Row />
      <div className="bg-[#e5e7eb] h-px relative shrink-0 w-[1052px]" data-name="RowDivider" />
      <Row1 />
      <div className="bg-[#e5e7eb] h-px relative shrink-0 w-[1052px]" data-name="RowDivider" />
      <Row2 />
      <div className="bg-[#e5e7eb] h-px relative shrink-0 w-[1052px]" data-name="RowDivider" />
      <Row3 />
      <div className="bg-[#e5e7eb] h-px relative shrink-0 w-[1052px]" data-name="RowDivider" />
      <Row4 />
    </div>
  );
}

function LowonganPopulerCard() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="LowonganPopulerCard">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative size-full">
          <Header1 />
          <div className="bg-[#e5e7eb] h-px relative shrink-0 w-full" data-name="Divider" />
          <Frame52 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.02)]" />
    </div>
  );
}

function ChartsRow() {
  return (
    <div className="content-stretch flex gap-[24px] h-[400px] items-start relative shrink-0 w-full" data-name="ChartsRow">
      <FunnelCard />
      <LowonganPopulerCard />
    </div>
  );
}

function Frame18() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-center justify-between not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[24px] relative shrink-0 text-[#383b46] text-[16px]">Pelamar Terbaru</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#0052ff] text-[14px]">Lihat Semua</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-start py-[12px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e6e6e7] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] w-[177px]">NAMA KANDIDAT</p>
      <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Bold',sans-serif] leading-[16px] min-w-px not-italic relative text-[#4c4f59] text-[12px]">PERAN YANG DILAMAR</p>
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] w-[150px]">TANGGAL MELAMAR</p>
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] w-[150px]">STATUS</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[177px]" data-name="Frame">
      <div className="relative rounded-[8px] shrink-0 size-[40px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle1} />
      </div>
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] whitespace-nowrap">Ananda Putri</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[99px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1e40af] text-[11px] whitespace-nowrap">Penyaringan</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[150px]" data-name="Frame">
      <Frame24 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e6e6e7] border-b border-solid inset-0 pointer-events-none" />
      <Frame22 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#4c4f59] text-[14px]">Manajer Produk Senior</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[150px]">12 Okt 2023</p>
      <Frame23 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[179px]" data-name="Frame">
      <div className="relative rounded-[8px] shrink-0 size-[40px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle1} />
      </div>
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] whitespace-nowrap">Rizky Pratama</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#fef3c7] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[99px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#92400e] text-[11px] whitespace-nowrap">Wawancara</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[150px]" data-name="Frame">
      <Frame28 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e6e6e7] border-b border-solid inset-0 pointer-events-none" />
      <Frame26 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#4c4f59] text-[14px]">Insinyur Backend</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[150px]">11 Okt 2023</p>
      <Frame27 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[179px]" data-name="Frame">
      <div className="relative rounded-[8px] shrink-0 size-[40px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle1} />
      </div>
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] whitespace-nowrap">Dewi Lestari</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[99px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#065f46] text-[11px] whitespace-nowrap">Ditawarkan</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[150px]" data-name="Frame">
      <Frame32 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e6e6e7] border-b border-solid inset-0 pointer-events-none" />
      <Frame30 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#4c4f59] text-[14px]">Direktur Kreatif</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[150px]">10 Okt 2023</p>
      <Frame31 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[179px]" data-name="Frame">
      <div className="relative rounded-[8px] shrink-0 size-[40px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle1} />
      </div>
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] whitespace-nowrap">Bambang Wijaya</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-[#fee2e2] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[99px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#991b1b] text-[11px] whitespace-nowrap">Ditolak</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[150px]" data-name="Frame">
      <Frame36 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e6e6e7] border-b border-solid inset-0 pointer-events-none" />
      <Frame34 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] leading-[20px] min-w-px not-italic relative text-[#4c4f59] text-[14px]">Pengembang Full Stack</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[150px]">09 Okt 2023</p>
      <Frame35 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame20 />
      <Frame21 />
      <Frame25 />
      <Frame29 />
      <Frame33 />
    </div>
  );
}

function TableCard() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(0,0,0,0.02)] flex flex-col gap-[24px] items-start p-[24px] relative rounded-[16px] shrink-0 w-[716px]" data-name="TableCard">
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Frame18 />
      <Frame19 />
      <div className="absolute bg-[#f6f4f4] h-[152px] left-[701px] rounded-[3px] top-[82px] w-[5px]" />
    </div>
  );
}

function Frame39() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[14px] text-black">Aditya Wirawan</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#64748b] text-[12px]">Desainer UI/UX</p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start justify-center leading-[normal] not-italic relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#0052ff] text-[12px] whitespace-nowrap">10:00 AM</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[12px] relative shrink-0 text-[#777980] text-[9px] text-right w-[57px]">{`1 Jul '26`}</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="relative rounded-[8px] shrink-0 size-[40px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle1} />
      </div>
      <Frame39 />
      <Frame73 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[14px] text-black">Siti Aminah</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#64748b] text-[12px]">Insinyur DevOps</p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start justify-center leading-[normal] not-italic relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#0052ff] text-[12px] whitespace-nowrap">02:30 AM</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[12px] relative shrink-0 text-[#777980] text-[9px] text-right w-[57px]">{`1 Jul '26`}</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="relative rounded-[8px] shrink-0 size-[40px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle2} />
      </div>
      <Frame41 />
      <Frame74 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[14px] text-black">Fajar Ramadhan</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#64748b] text-[12px]">Pemimpin Penjualan</p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-start justify-center leading-[normal] not-italic relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#0052ff] text-[12px] whitespace-nowrap">04:00 AM</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[12px] relative shrink-0 text-[#777980] text-[9px] text-right w-[57px]">{`1 Jul '26`}</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="relative rounded-[8px] shrink-0 size-[40px]" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgRectangle3} />
      </div>
      <Frame43 />
      <Frame75 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame38 />
      <Frame40 />
      <Frame42 />
    </div>
  );
}

function UpcomingInterviews() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.02)] relative rounded-[16px] self-stretch shrink-0 w-[380px]" data-name="UpcomingInterviews">
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#383b46] text-[16px] whitespace-nowrap">Wawancara Mendatang</p>
        <Frame37 />
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <TableCard />
      <UpcomingInterviews />
    </div>
  );
}

function Frame45() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[40px] relative size-full">
        <StatsRow />
        <ChartsRow />
        <Frame72 />
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Header />
      <Frame56 />
      <Frame45 />
    </div>
  );
}

function Main() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Main">
      <div className="content-stretch flex flex-col items-start pb-[40px] relative size-full">
        <Frame46 />
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex items-start relative size-full" data-name="dashboard">
      <Sidebar />
      <Main />
    </div>
  );
}