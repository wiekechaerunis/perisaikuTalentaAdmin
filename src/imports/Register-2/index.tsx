import svgPaths from "./svg-1bqjwdfmdy";

function Briefcase() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="briefcase">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="briefcase">
          <path d={svgPaths.p1770e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#4361ee] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Frame">
      <Briefcase />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame2 />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Perisaiku Talenta</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0052ff] text-[14px] whitespace-nowrap">1</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative text-white whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[14px]">{`Akun & Keamanan`}</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[12px]">Data login dan keamanan akun</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0052ff] text-[14px] whitespace-nowrap">2</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative text-white whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[14px]">Data Perusahaan</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[12px]">Informasi profil perusahaan</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#0052ff] text-[14px] whitespace-nowrap">3</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative text-white whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[14px]">Dokumen Legal</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[12px]">Verifikasi legalitas usaha</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame12 />
      <Frame13 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.25)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">4</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)]">Verifikasi Admin</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[12px] text-[rgba(255,255,255,0.25)]">Pengecekan data oleh tim</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame5 />
      <Frame8 />
      <Frame11 />
      <Frame14 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[11px] text-white uppercase whitespace-nowrap">Langkah Pendaftaran</p>
      <Frame4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[185px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame1 />
      <Frame3 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[rgba(240,249,255,0.1)] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e6e6e7] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic p-[16px] relative size-full text-white">
        <p className="font-['DM_Sans:SemiBold',sans-serif] leading-[20px] relative shrink-0 text-[14px] whitespace-nowrap">Kenapa perlu verifikasi?</p>
        <p className="font-['DM_Sans:Regular',sans-serif] leading-[16px] min-w-full relative shrink-0 text-[12px] w-[min-content]">Verifikasi diperlukan untuk memastikan keamanan platform dan validitas perusahaan yang mendaftar.</p>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="relative self-stretch shrink-0 w-[320px]" style={{ backgroundImage: "linear-gradient(134.33deg, rgb(0, 65, 204) 0%, rgb(0, 82, 255) 39.01%, rgb(14, 165, 233) 78.021%)" }} data-name="sidebar">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[40px] relative size-full">
          <div className="absolute left-[116px] size-[292px] top-[-82px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 292 292">
              <circle cx="146" cy="146" fill="var(--fill-0, #D9D9D9)" id="Ellipse 1" opacity="0.1" r="146" />
            </svg>
          </div>
          <div className="absolute left-[-110px] size-[292px] top-[760px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 292 292">
              <circle cx="146" cy="146" fill="var(--fill-0, #D9D9D9)" id="Ellipse 1" opacity="0.1" r="146" />
            </svg>
          </div>
          <Frame />
          <Frame17 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#ebf2ff] content-stretch flex items-center justify-center px-[10px] py-[4px] relative rounded-[15px] shrink-0">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0052ff] text-[12px] whitespace-nowrap">Langkah 3 dari 3</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#f6f4f4] content-stretch flex h-[4px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Frame">
      <div className="bg-[#ff6b35] h-full relative rounded-[2px] shrink-0 w-[104px]" data-name="Rectangle" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame21 />
      <Frame19 />
    </div>
  );
}

function Header() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="header">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[#4c4f59] text-[28px] whitespace-nowrap">Upload dokumen legal</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#6b7280] text-[14px] w-[min-content]">Satu dokumen sudah cukup - SIUP atau NIB yang masih berlaku.</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0">
        <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] h-full leading-[14px] not-italic relative shrink-0 text-[#cc0e0e] text-[10px] w-[6px]">*</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[6px] items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">Jenis Dokumen</p>
      <Frame20 />
    </div>
  );
}

function LabelRow() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="label-row">
      <Frame24 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="input">
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#c5c6c9] text-[12px]">Pilih Jenis dokumen NIB/SIUP</p>
          <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="icon-company">
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

function FieldNamaPerusahaan() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="field-nama-perusahaan">
      <LabelRow />
      <Input />
    </div>
  );
}

function Frame22() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0">
        <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] h-full leading-[14px] not-italic relative shrink-0 text-[#cc0e0e] text-[10px] w-[6px]">*</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">Upload Dokumen</p>
      <Frame22 />
    </div>
  );
}

function Paperclip() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="paperclip">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="paperclip">
          <path d={svgPaths.p206efc00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function UploadArea() {
  return (
    <div className="bg-[#f9fafb] h-[160px] relative rounded-[8px] shrink-0 w-full" data-name="upload-area">
      <div aria-hidden className="absolute border border-[#d1d5db] border-dashed inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center p-[16px] relative size-full">
          <Paperclip />
          <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#111827] text-[14px] whitespace-nowrap">Klik atau seret file ke sini</p>
          <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-w-full not-italic relative shrink-0 text-[#6b7280] text-[12px] text-center w-[min-content]">PDF, PNG, atau JPEG · Maks. 5 MB</p>
        </div>
      </div>
    </div>
  );
}

function FieldUploadDokumen() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="field-upload-dokumen">
      <Frame25 />
      <UploadArea />
    </div>
  );
}

function Info() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="info">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_45)" id="info">
          <path d={svgPaths.p1850880} id="Vector" stroke="var(--stroke-0, #1D4ED8)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_45">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#dbeafe] content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="icon">
      <Info />
    </div>
  );
}

function InfoText() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px not-italic relative" data-name="info-text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#0044d2] text-[14px] whitespace-nowrap">Yang terjadi selanjutnya</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#383b46] text-[13px] w-[min-content]">
        <span className="leading-[18px]">{`Tim verifikasi Perisaku akan meninjau dokumen Anda dalam `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[18px]">1×24 jam</span>
        <span className="leading-[18px]">. Setelah terverifikasi, akun Anda aktif dan Anda bisa langsung memasang lowongan.</span>
      </p>
    </div>
  );
}

function InfoCard() {
  return (
    <div className="bg-[#ebf2ff] relative rounded-[8px] shrink-0 w-full" data-name="info-card">
      <div className="content-stretch flex gap-[12px] items-start p-[16px] relative size-full">
        <Icon />
        <InfoText />
      </div>
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="check">
          <path d={svgPaths.p2a580400} id="Vector" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center relative rounded-[4px] shrink-0 size-[16px]" data-name="checkbox">
      <div aria-hidden className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Check />
    </div>
  );
}

function CheckboxRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="checkbox-row">
      <Checkbox />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-px not-italic relative text-[#111827] text-[12px]">
        <span className="leading-[16px]">{`Saya menyatakan bahwa informasi dan dokumen yang diberikan adalah benar. Saya menyetujui `}</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] text-[#1d4ed8]">{`Syarat & Ketentuan`}</span>
        <span className="leading-[16px]">{` serta `}</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] text-[#1d4ed8]">Kebijakan Privasi Perisaku Talenta</span>
        <span className="leading-[16px]">.</span>
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex gap-[10px] h-[48px] items-center justify-center px-[24px] py-[12px] relative rounded-[40px] shrink-0 w-[163px]" data-name="Button">
      <div aria-hidden className="absolute border-[#0052ff] border-[1.5px] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <div className="content-stretch flex items-start relative shrink-0 size-[18px]" data-name="📍 Trailing Icon">
        <div className="flex-[1_0_0] h-full min-w-px overflow-clip relative" data-name="Icon">
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
      <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Bold',sans-serif] leading-[24px] min-w-px not-italic relative text-[#0052ff] text-[16px] text-center" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
        Kembali
      </p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Button />
      <div className="bg-[#0052ff] flex-[1_0_0] h-[48px] min-w-px relative rounded-[40px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Bold',sans-serif] leading-[24px] min-w-px not-italic relative text-[16px] text-center text-white" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>{`Kirim & Daftar Sekarang`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UploadDokumenLegal() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[520px]" data-name="Upload dokumen legal">
      <Frame18 />
      <Header />
      <FieldNamaPerusahaan />
      <FieldUploadDokumen />
      <InfoCard />
      <CheckboxRow />
      <Frame23 />
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="content">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center py-[80px] relative size-full">
          <UploadDokumenLegal />
        </div>
      </div>
    </div>
  );
}

export default function Register() {
  return (
    <div className="bg-white content-stretch flex items-start relative size-full" data-name="Register">
      <Sidebar />
      <Content />
    </div>
  );
}