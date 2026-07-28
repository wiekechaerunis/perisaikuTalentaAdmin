import svgPaths from "./svg-0fbqhtceyp";
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

function Frame20() {
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
      <Frame20 />
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
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[32px] relative shrink-0 text-[#383b46] text-[28px] whitespace-nowrap">Lowongan</p>
      <p className="font-['DM_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[#64748b] text-[14px] w-[392px]">Kelola semua lowongan pekerjaan Anda di sini</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[10px] items-start px-[40px] relative size-full">
        <Frame5 />
        <div className="bg-[#0052ff] content-stretch flex h-[48px] items-center justify-center px-[24px] py-[12px] relative rounded-[40px] shrink-0 w-[161px]" data-name="Button">
          <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Bold',sans-serif] leading-[24px] min-w-px not-italic relative text-[16px] text-center text-white" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
            Post Job
          </p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
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
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] h-[20px] justify-center leading-[0] min-w-px not-italic relative text-[#c5c6c9] text-[12px]">
            <p className="leading-[16px]">Cari Lowongan</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[266px]" data-name="Text Field">
        <Input />
      </div>
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

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1068px]">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#383b46] text-[16px] whitespace-nowrap">Daftar Lowongan</p>
      <Frame24 />
    </div>
  );
}

function ContainerCancel() {
  return (
    <div className="content-stretch flex items-center pl-[4px] relative shrink-0" data-name="containerCancel">
      <div className="content-stretch flex items-start relative shrink-0 size-[14px]" data-name="Cancel">
        <div className="relative shrink-0 size-[14px]" data-name="Solid=true">
          <div className="absolute inset-[10%]" data-name="Exclude">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2 11.2">
              <path d={svgPaths.p1d5be340} fill="var(--fill-0, #606268)" id="Exclude" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Chip() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[24px] items-center pl-[12px] pr-[4px] relative rounded-[999px] shrink-0" data-name="Chip">
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[999px]" />
      <p className="[word-break:break-word] font-['Open_Sans:Regular',sans-serif] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#333] text-[10px] text-ellipsis whitespace-nowrap">Kategori Pekerjaan: Designer</p>
      <ContainerCancel />
    </div>
  );
}

function Result() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-w-px relative" data-name="result">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Filter Aktif :</p>
      </div>
      <Chip />
      <div className="[word-break:break-word] flex flex-col font-['Open_Sans:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c93f2a] text-[10px] whitespace-nowrap">
        <p className="leading-[14px]">Hapus Semua</p>
      </div>
    </div>
  );
}

function FilterResult() {
  return (
    <div className="content-start flex flex-wrap gap-y-[8px] items-start relative shrink-0 w-[1104px]" data-name="filterResult">
      <Result />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-[97px]">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">POSISI ID</p>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="selector">
        <div className="absolute inset-[20.83%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-9.18%_-16.07%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.16667 9.66667">
              <path d={svgPaths.p7ab2800} id="Vector" stroke="var(--stroke-0, #E6E6E7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[153px]">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">NAMA POSISI</p>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="selector">
        <div className="absolute inset-[20.83%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-9.18%_-16.07%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.16667 9.66667">
              <path d={svgPaths.p7ab2800} id="Vector" stroke="var(--stroke-0, #E6E6E7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">JUMLAH PELAMAR</p>
      <div className="overflow-clip relative shrink-0 size-[14px]" data-name="selector">
        <div className="absolute inset-[20.83%_33.33%]" data-name="Vector">
          <div className="absolute inset-[-9.18%_-16.07%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.16667 9.66667">
              <path d={svgPaths.p7ab2800} id="Vector" stroke="var(--stroke-0, #E6E6E7)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="[word-break:break-word] absolute bg-white content-stretch drop-shadow-[0px_1px_2px_rgba(0,0,0,0.16)] flex font-['DM_Sans:Bold',sans-serif] gap-[20px] h-[40px] items-center leading-[16px] left-[906px] not-italic px-[10px] text-[#4c4f59] text-[12px] text-center top-0 w-[162px]">
      <p className="relative shrink-0 w-[73px]">STATUS</p>
      <p className="relative shrink-0 w-[42px]">AKSI</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex gap-[20px] items-start overflow-clip py-[12px] relative rounded-[inherit] size-full">
        <Frame41 />
        <Frame42 />
        <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] w-[150px]">KATEGORI PEKERJAAN</p>
        <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] w-[80px]">LOKASI</p>
        <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">WORK SETTING</p>
        <Frame43 />
        <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">KUOTA TERISI</p>
        <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">TGL TUTUP</p>
        <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] w-[103px]">TGL DIBUAT</p>
        <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">DIBUAT OLEH</p>
        <Frame26 />
      </div>
      <div aria-hidden className="absolute border-[#e6e6e7] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame8 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['DM_Sans:Regular',sans-serif] gap-[6px] items-center leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[135px] whitespace-nowrap">
      <p className="relative shrink-0">34</p>
      <p className="relative shrink-0">Pelamar</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[99px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#065f46] text-[11px] whitespace-nowrap">Diterbitkan</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
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
  );
}

function Frame29() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_2px_rgba(0,0,0,0.16)] flex gap-[20px] h-[52px] items-center left-[906px] px-[10px] top-0 w-[162px]">
      <Frame10 />
      <Frame30 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[20px] items-center py-[16px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e6e6e7] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[103px]">JOB-12</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[155px]">Product Designer</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[150px]">Designer</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[80px]">Jakarta</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[80px]">On-site</p>
      <Frame27 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[80px]">3/10</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[80px]">2 Jan ‘26</p>
      <Frame29 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['DM_Sans:Regular',sans-serif] gap-[6px] items-center leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[135px] whitespace-nowrap">
      <p className="relative shrink-0">34</p>
      <p className="relative shrink-0">Pelamar</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[99px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#065f46] text-[11px] whitespace-nowrap">Diterbitkan</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
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
  );
}

function Frame32() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_2px_rgba(0,0,0,0.16)] flex gap-[20px] h-[52px] items-center left-[906px] px-[10px] top-0 w-[162px]">
      <Frame12 />
      <Frame33 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[20px] items-center py-[16px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e6e6e7] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[103px]">JOB-06</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[155px]">UI/UX Designer</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[150px]">Designer</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[80px]">Yogyakarta</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[80px]">Remote</p>
      <Frame31 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[80px]">2/10</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[80px]">3 Jan ‘26</p>
      <Frame32 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['DM_Sans:Regular',sans-serif] gap-[6px] items-center leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[135px] whitespace-nowrap">
      <p className="relative shrink-0">34</p>
      <p className="relative shrink-0">Pelamar</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#d1fae5] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[99px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#065f46] text-[11px] whitespace-nowrap">Diterbitkan</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
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
  );
}

function Frame35() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_2px_rgba(0,0,0,0.16)] flex gap-[20px] h-[52px] items-center left-[906px] px-[10px] top-0 w-[162px]">
      <Frame14 />
      <Frame36 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[20px] items-center py-[16px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e6e6e7] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[103px]">JOB-01</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[155px]">Graphic Designer</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[150px]">Designer</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[80px]">Semarang</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[80px]">Remote</p>
      <Frame34 />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[80px]">8/10</p>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4c4f59] text-[14px] w-[80px]">4 Jan ‘26</p>
      <Frame35 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame9 />
      <Frame11 />
      <Frame13 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame40 />
      <Frame28 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white h-[848px] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[16px] relative size-full">
        <Frame25 />
        <FilterResult />
        <Frame7 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p17a2ab00} fill="var(--fill-0, #606268)" fillRule="evenodd" id="chevron-left-outline" />
          <path clipRule="evenodd" d={svgPaths.p1a9b5e00} fill="var(--fill-0, #606268)" fillRule="evenodd" id="chevron-left-outline_2" />
        </g>
      </svg>
    </div>
  );
}

function Previous() {
  return (
    <div className="relative rounded-[18px] shrink-0 size-[32px]" data-name="Previous">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Icon />
      </div>
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[18px]" />
    </div>
  );
}

function Previous1() {
  return (
    <div className="relative rounded-[18px] shrink-0 size-[32px]" data-name="Previous">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
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
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[18px]" />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Previous />
      <Previous1 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#0052ff] content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">1</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[32px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#383b46] text-[14px] whitespace-nowrap">2</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[6px] shrink-0 size-[32px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#383b46] text-[14px] whitespace-nowrap">3</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[12px] shrink-0">
      <Frame17 />
      <Frame18 />
      <Frame19 />
    </div>
  );
}

function Back() {
  return (
    <div className="relative rounded-[18px] shrink-0 size-[32px]" data-name="Back">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
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
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[18px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="flex-none rotate-180">
        <div className="relative size-[14px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <g id="Icon">
              <path clipRule="evenodd" d={svgPaths.p17a2ab00} fill="var(--fill-0, #606268)" fillRule="evenodd" id="chevron-left-outline" />
              <path clipRule="evenodd" d={svgPaths.p1a9b5e00} fill="var(--fill-0, #606268)" fillRule="evenodd" id="chevron-left-outline_2" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function BackToLast() {
  return (
    <div className="relative rounded-[18px] shrink-0 size-[32px]" data-name="Back to Last">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Icon1 />
      </div>
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[18px]" />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Back />
      <BackToLast />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[25px] items-start relative shrink-0" data-name="Frame">
      <Frame37 />
      <Frame38 />
      <Frame39 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#64748b] text-[14px] whitespace-nowrap">Menampilkan 3 dari 3 lowongan</p>
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start px-[40px] relative size-full">
        <Frame6 />
        <Frame15 />
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Header />
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Main() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="Main">
      <div className="content-stretch flex flex-col items-start pb-[40px] relative size-full">
        <Frame21 />
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