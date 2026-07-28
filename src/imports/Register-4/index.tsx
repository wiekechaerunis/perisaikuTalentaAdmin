import svgPaths from "./svg-94u8bsjmpz";

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

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[0] relative shrink-0 text-[56px] text-white w-full">
        <span className="leading-[1.1]">{`Rekrut talenta terbaik, `}</span>
        <span className="leading-[1.1] text-[#a8a4c9]">lebih cepat</span>
        <span className="leading-[1.1]">{` dari sebelumnya.`}</span>
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#e5e7eb] text-[18px] w-full">Kelola seluruh proses rekrutmen - dari posting lowongan hingga video interview - dalam satu platform terintegrasi.</p>
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

function BottomSpacer() {
  return <div className="h-px opacity-0 relative shrink-0 w-full" data-name="bottom-spacer" />;
}

function Sidebar() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" style={{ backgroundImage: "linear-gradient(155.536deg, rgb(0, 65, 204) 0%, rgb(0, 82, 255) 39.01%, rgb(14, 165, 233) 78.021%)" }} data-name="sidebar">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[40px] relative size-full">
          <div className="absolute left-[147px] size-[292px] top-[-125px]">
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
          <BottomSpacer />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full" data-name="Frame">
      <p className="font-['DM_Sans:Bold',sans-serif] leading-[32px] relative shrink-0 text-[#4c4f59] text-[28px] whitespace-nowrap">Selamat datang kembali 👋</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#64748b] text-[0px] w-[min-content]">
        <span className="font-['DM_Sans:Regular',sans-serif] leading-[20px] text-[#383b46] text-[14px]">Belum punya akun ?</span>
        <span className="leading-[normal] text-[14px]">{` `}</span>
        <a className="cursor-pointer font-['DM_Sans:SemiBold',sans-serif] leading-[20px] text-[#0052ff] text-[14px]" href="https://example.com/login" target="_blank">
          <span href="https://example.com/login" target="_blank">
            Daftar di sini
          </span>
        </a>
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame5 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0">
        <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] h-full leading-[14px] not-italic relative shrink-0 text-[#cc0e0e] text-[10px] w-[6px]">*</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Email perusahaan</p>
      </div>
      <Frame7 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] h-[20px] justify-center leading-[0] min-w-px not-italic relative text-[#c5c6c9] text-[12px]">
            <p className="leading-[16px]">email@perusahaan.com</p>
          </div>
          <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="📍 Trailing Icon">
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
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex gap-[4px] h-full items-center relative shrink-0">
        <p className="[word-break:break-word] font-['Open_Sans:SemiBold',sans-serif] h-full leading-[14px] not-italic relative shrink-0 text-[#cc0e0e] text-[10px] w-[6px]">*</p>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Label">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4c4f59] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Password</p>
      </div>
      <Frame8 />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[40px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['DM_Sans:Regular',sans-serif] h-[20px] justify-center leading-[0] min-w-px not-italic relative text-[#c5c6c9] text-[12px]">
            <p className="leading-[16px]">Min. 8 Karakter</p>
          </div>
          <div className="content-stretch flex items-start relative shrink-0 size-[16px]" data-name="📍 Trailing Icon">
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
      <div aria-hidden className="absolute border border-[#c5c6c9] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function FormGroup() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Form Group">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text Field">
        <Label1 />
        <Input1 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text Field">
        <Label />
        <Input />
      </div>
      <FormGroup />
    </div>
  );
}

function FormContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[520px]" data-name="form-container">
      <Frame4 />
      <Frame6 />
      <div className="bg-[#0052ff] h-[48px] relative rounded-[40px] shrink-0 w-full" data-name="Button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Bold',sans-serif] leading-[24px] min-w-px not-italic relative text-[16px] text-center text-white" style={{ fontFeatureSettings: '"lnum", "tnum"' }}>
              Masuk
            </p>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#4c4f59] text-[12px] w-full">
        <span className="leading-[16px]">{`Dengan masuk, kamu menyetujui `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] text-[#0052ff]">{`Syarat & Ketentuan`}</span>
        <span className="leading-[16px]">{` dan `}</span>
        <span className="font-['Inter:Bold',sans-serif] font-bold leading-[16px] text-[#0052ff]">Kebijakan Privasi</span>
        <span className="leading-[16px]">{` kami.`}</span>
      </p>
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
      <div className="absolute left-[553px] size-[292px] top-[502px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 292 292">
          <circle cx="146" cy="146" fill="var(--fill-0, #D9D9D9)" id="Ellipse 1" opacity="0.1" r="146" />
        </svg>
      </div>
      <Content />
    </div>
  );
}