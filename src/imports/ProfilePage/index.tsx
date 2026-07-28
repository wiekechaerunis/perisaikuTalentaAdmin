import svgPaths from "./svg-nn6f2zff2y";
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
  return <div className="bg-[#e2e8f0] h-[3px] relative rounded-[2px] shrink-0 w-[120px]" data-name="indicator" />;
}

function TabDetailKandidat() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="tab-detail-kandidat">
      <p className="[word-break:break-word] font-['DM_Sans:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#94a3b8] text-[14px] whitespace-nowrap">Detail Kandidat</p>
      <Indicator />
    </div>
  );
}

function Indicator1() {
  return <div className="bg-[#0052ff] h-[3px] relative rounded-[2px] shrink-0 w-[96px]" data-name="indicator" />;
}

function TabActivityLog() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="tab-activity-log">
      <p className="[word-break:break-word] font-['DM_Sans:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0052ff] text-[14px] whitespace-nowrap">Activity Log</p>
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

function Rail() {
  return (
    <div className="h-[34px] relative shrink-0 w-[16px]" data-name="rail">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 34">
        <g id="rail">
          <circle cx="8" cy="5" fill="var(--fill-0, #10B981)" id="Ellipse" r="5" />
          <rect fill="var(--fill-0, #E2E8F0)" height="24" id="Rectangle" width="2" x="7" y="10" />
        </g>
      </svg>
    </div>
  );
}

function Meta() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="meta">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#383b46] text-[14px]">Kandidat dibuat</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[12px]">15 Jun 2025, 09:30</p>
    </div>
  );
}

function Content() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic pb-[16px] relative whitespace-nowrap" data-name="content">
      <Meta />
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#383b46] text-[13px]">Created by Aditya Rahardjo</p>
    </div>
  );
}

function ActivityItem() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="activity-item">
      <Rail />
      <Content />
    </div>
  );
}

function Rail1() {
  return (
    <div className="h-[34px] relative shrink-0 w-[16px]" data-name="rail">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 34">
        <g id="rail">
          <circle cx="8" cy="5" fill="var(--fill-0, #0052FF)" id="Ellipse" r="5" />
          <rect fill="var(--fill-0, #E2E8F0)" height="24" id="Rectangle" width="2" x="7" y="10" />
        </g>
      </svg>
    </div>
  );
}

function Meta1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="meta">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#383b46] text-[14px]">Dipindahkan ke stage Interview HR</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[12px]">16 Jun 2025, 14:15</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic pb-[16px] relative whitespace-nowrap" data-name="content">
      <Meta1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#383b46] text-[13px]">Moved by Aditya Rahardjo</p>
    </div>
  );
}

function ActivityItem1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="activity-item">
      <Rail1 />
      <Content1 />
    </div>
  );
}

function Rail2() {
  return (
    <div className="h-[34px] relative shrink-0 w-[16px]" data-name="rail">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 34">
        <g id="rail">
          <circle cx="8" cy="5" fill="var(--fill-0, #F59E0B)" id="Ellipse" r="5" />
          <rect fill="var(--fill-0, #E2E8F0)" height="24" id="Rectangle" width="2" x="7" y="10" />
        </g>
      </svg>
    </div>
  );
}

function Meta2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="meta">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#383b46] text-[14px]">{`Menambahkan komentar: "Pengalaman di Gojek sangat relevan dengan stack kita."`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[12px]">16 Jun 2025, 15:00</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic pb-[16px] relative whitespace-nowrap" data-name="content">
      <Meta2 />
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#383b46] text-[13px]">Comment by Aditya Rahardjo</p>
    </div>
  );
}

function ActivityItem2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="activity-item">
      <Rail2 />
      <Content2 />
    </div>
  );
}

function Rail3() {
  return (
    <div className="h-[34px] relative shrink-0 w-[16px]" data-name="rail">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 34">
        <g id="rail">
          <circle cx="8" cy="5" fill="var(--fill-0, #0052FF)" id="Ellipse" r="5" />
          <rect fill="var(--fill-0, #E2E8F0)" height="24" id="Rectangle" width="2" x="7" y="10" />
        </g>
      </svg>
    </div>
  );
}

function Meta3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="meta">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#383b46] text-[14px]">Dipindahkan ke stage Technical Test</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[12px]">18 Jun 2025, 10:00</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic pb-[16px] relative whitespace-nowrap" data-name="content">
      <Meta3 />
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#383b46] text-[13px]">Moved by Sarah Wijaya</p>
    </div>
  );
}

function ActivityItem3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="activity-item">
      <Rail3 />
      <Content3 />
    </div>
  );
}

function Rail4() {
  return (
    <div className="h-[34px] relative shrink-0 w-[16px]" data-name="rail">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 34">
        <g id="rail">
          <circle cx="8" cy="5" fill="var(--fill-0, #F59E0B)" id="Ellipse" r="5" />
          <rect fill="var(--fill-0, #E2E8F0)" height="24" id="Rectangle" width="2" x="7" y="10" />
        </g>
      </svg>
    </div>
  );
}

function Meta4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="meta">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#383b46] text-[14px]">{`Menambahkan komentar: "Skill system design sangat solid, bisa lanjut interview."`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[12px]">20 Jun 2025, 11:30</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic pb-[16px] relative whitespace-nowrap" data-name="content">
      <Meta4 />
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#383b46] text-[13px]">Comment by Adityo</p>
    </div>
  );
}

function ActivityItem4() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="activity-item">
      <Rail4 />
      <Content4 />
    </div>
  );
}

function Rail5() {
  return (
    <div className="h-[34px] relative shrink-0 w-[16px]" data-name="rail">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 34">
        <g id="rail">
          <circle cx="8" cy="5" fill="var(--fill-0, #0052FF)" id="Ellipse" r="5" />
          <rect fill="var(--fill-0, #E2E8F0)" height="24" id="Rectangle" width="2" x="7" y="10" />
        </g>
      </svg>
    </div>
  );
}

function Meta5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="meta">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#383b46] text-[14px]">Dipindahkan ke stage Final Interview</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[12px]">22 Jun 2025, 09:00</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic pb-[16px] relative whitespace-nowrap" data-name="content">
      <Meta5 />
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#383b46] text-[13px]">Moved by Sarah Wijaya</p>
    </div>
  );
}

function ActivityItem5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="activity-item">
      <Rail5 />
      <Content5 />
    </div>
  );
}

function Rail6() {
  return (
    <div className="h-[10px] relative shrink-0 w-[16px]" data-name="rail">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 10">
        <g id="rail">
          <circle cx="8" cy="5" fill="var(--fill-0, #0052FF)" id="Ellipse" r="5" />
        </g>
      </svg>
    </div>
  );
}

function Meta6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="meta">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[#383b46] text-[14px]">Dipindahkan ke stage Offering</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#94a3b8] text-[12px]">25 Jun 2025, 16:45</p>
    </div>
  );
}

function Content6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-name="content">
      <Meta6 />
      <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#383b46] text-[13px]">Moved by HR Manager</p>
    </div>
  );
}

function ActivityItem6() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="activity-item">
      <Rail6 />
      <Content6 />
    </div>
  );
}

function Timeline() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="timeline">
      <ActivityItem />
      <ActivityItem1 />
      <ActivityItem2 />
      <ActivityItem3 />
      <ActivityItem4 />
      <ActivityItem5 />
      <ActivityItem6 />
    </div>
  );
}

function SectionActivityLog() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.06)] relative rounded-[12px] shrink-0 w-full" data-name="Section-Activity Log">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#383b46] text-[16px] w-full">Activity Log</p>
        <Timeline />
      </div>
    </div>
  );
}

function MainCol() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Main-Col">
      <SectionActivityLog />
    </div>
  );
}

function Columns() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-name="Columns">
      <MainCol />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <HeaderCard />
      <TabBar />
      <Columns />
    </div>
  );
}

export default function ProfilePage() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col gap-[32px] items-start overflow-clip px-[40px] py-[48px] relative rounded-[6px] size-full" data-name="profile-page">
      <Frame />
      <Frame5 />
    </div>
  );
}