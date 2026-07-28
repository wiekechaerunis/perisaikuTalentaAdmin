import svgPaths from "./svg-q16d8v99l3";

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
    <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.25)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)] whitespace-nowrap">3</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start leading-[normal] min-w-px not-italic relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold relative shrink-0 text-[14px] text-[rgba(255,255,255,0.5)]">Dokumen Legal</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[12px] text-[rgba(255,255,255,0.25)]">Verifikasi legalitas usaha</p>
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
    <div className="relative self-stretch shrink-0 w-[320px]" style={{ backgroundImage: "linear-gradient(130.539deg, rgb(0, 65, 204) 0%, rgb(0, 82, 255) 39.01%, rgb(14, 165, 233) 78.021%)" }} data-name="sidebar">
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

function StepIndicator() {
  return (
    <div className="bg-[#ebf2ff] content-stretch flex items-center justify-center px-[10px] py-[4px] relative rounded-[15px] shrink-0" data-name="Step Indicator">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0052ff] text-[12px] whitespace-nowrap">Langkah 2 dari 3</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#f6f4f4] content-stretch flex h-[4px] items-start relative rounded-[2px] shrink-0 w-full" data-name="Frame">
      <div className="bg-[#ff6b35] h-full relative rounded-[2px] shrink-0 w-[104px]" data-name="Rectangle" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <StepIndicator />
      <Frame20 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[32px] relative shrink-0 text-[#4c4f59] text-[28px] whitespace-nowrap">Data perusahaan</p>
      <p className="font-['DM_Sans:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#64748b] text-[14px] w-[min-content]">Informasi ini akan ditampilkan di Company Profile publik.</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame19 />
      <Frame21 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0">
        <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] h-full leading-[14px] not-italic relative shrink-0 text-[#cc0e0e] text-[10px] w-[6px]">*</p>
      </div>
    </div>
  );
}

function LabelRow() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="label-row">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">Nama perusahaan</p>
      <Frame23 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="input">
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#c5c6c9] text-[12px]">PT Maju Bersama</p>
        </div>
      </div>
    </div>
  );
}

function AssertiveText() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Assertive Text">
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Open_Sans:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#777980] text-[10px] text-right">
        <p className="leading-[16px]">0 / 100</p>
      </div>
    </div>
  );
}

function FieldNamaPerusahaan() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="field-nama-perusahaan">
      <LabelRow />
      <Input />
      <AssertiveText />
    </div>
  );
}

function LabelRow1() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['DM_Sans:Regular',sans-serif] gap-[6px] items-center leading-[16px] not-italic relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="label-row">
      <p className="relative shrink-0 text-[#4c4f59]">Deskripsi singkat</p>
      <p className="relative shrink-0 text-[#9b9ca1]">(opsional)</p>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white h-[120px] relative rounded-[12px] shrink-0 w-full" data-name="textarea">
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#c5c6c9] text-[12px] w-full">Ceritakan tentang perusahaan Anda, produk atau layanan yang ditawarkan...</p>
      </div>
    </div>
  );
}

function FieldDeskripsi() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="field-deskripsi">
      <LabelRow1 />
      <Textarea />
    </div>
  );
}

function Frame24() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0">
        <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] h-full leading-[14px] not-italic relative shrink-0 text-[#cc0e0e] text-[10px] w-[6px]">*</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">Industri</p>
      <Frame24 />
    </div>
  );
}

function Select() {
  return (
    <div className="bg-white h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="select">
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#c5c6c9] text-[12px]">Pilih industri</p>
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

function FieldIndustri() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="field-industri">
      <Frame28 />
      <Select />
    </div>
  );
}

function Frame25() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0">
        <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] h-full leading-[14px] not-italic relative shrink-0 text-[#cc0e0e] text-[10px] w-[6px]">*</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">Ukuran perusahaan</p>
      <Frame25 />
    </div>
  );
}

function Select1() {
  return (
    <div className="bg-white h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="select">
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#c5c6c9] text-[12px]">Pilih ukuran</p>
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

function FieldUkuran() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="field-ukuran">
      <Frame29 />
      <Select1 />
    </div>
  );
}

function RowIndustriUkuran() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="row-industri-ukuran">
      <FieldIndustri />
      <FieldUkuran />
    </div>
  );
}

function Frame26() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0">
        <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] h-full leading-[14px] not-italic relative shrink-0 text-[#cc0e0e] text-[10px] w-[6px]">*</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">Kota / lokasi kantor</p>
      <Frame26 />
    </div>
  );
}

function Select2() {
  return (
    <div className="bg-white h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="select">
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#c5c6c9] text-[12px]">Pilih kota</p>
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

function FieldKota() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="field-kota">
      <Frame30 />
      <Select2 />
    </div>
  );
}

function Textarea1() {
  return (
    <div className="bg-white h-[96px] relative rounded-[12px] shrink-0 w-full" data-name="textarea">
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative size-full">
        <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#c5c6c9] text-[12px] w-full">Jl. Sudirman No. 123, Jakarta Pusat 10220</p>
      </div>
    </div>
  );
}

function FieldAlamat() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="field-alamat">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">Alamat lengkap</p>
      <Textarea1 />
    </div>
  );
}

function LabelRow2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="label-row">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">Website perusahaan</p>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="input">
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] leading-[16px] min-w-px not-italic relative text-[#c5c6c9] text-[12px]">{`https://perusahaan.com`}</p>
        </div>
      </div>
    </div>
  );
}

function FieldWebsite() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="field-website">
      <LabelRow2 />
      <Input1 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <FieldNamaPerusahaan />
      <FieldDeskripsi />
      <RowIndustriUkuran />
      <FieldKota />
      <FieldAlamat />
      <FieldWebsite />
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

function Frame27() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <Button />
      <div className="bg-[#0052ff] flex-[1_0_0] h-[48px] min-w-px relative rounded-[40px]" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Bold',sans-serif] leading-[24px] min-w-px not-italic relative text-[16px] text-center text-white" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
              Lanjut ke Data Perusahaan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[520px]" data-name="form-container">
      <Frame18 />
      <Frame22 />
      <Frame27 />
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="content">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center py-[80px] relative size-full">
          <FormContainer />
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