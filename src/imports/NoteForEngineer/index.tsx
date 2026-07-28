import imgImage1 from "./7048ccd6292444dd97eec01cf3d5942ffe2aba2e.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['Open_Sans:Bold',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[23px] text-black w-[min-content]">Note For Engineer</p>
      <div className="h-[101px] relative rounded-[5px] shrink-0 w-[276px]" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[5px]">
          <img alt="" className="absolute h-[100.38%] left-0 max-w-none top-[-0.19%] w-[177.9%]" src={imgImage1} />
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="note content">
        <div className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#443105] text-[16px] w-[290px] whitespace-pre-wrap">
          <p className="leading-[24px] mb-0">{`function checkStrength(pw) {`}</p>
          <p className="leading-[24px] mb-0">{`  let score = 0;`}</p>
          <p className="leading-[24px] mb-0">{`  if (pw.length >= 8) score++;      // panjang minimal`}</p>
          <p className="leading-[24px] mb-0">{`  if (/[A-Z]/.test(pw)) score++;   // ada huruf besar`}</p>
          <p className="leading-[24px] mb-0">{`  if (/[0-9]/.test(pw)) score++;   // ada angka`}</p>
          <p className="leading-[24px] mb-0">{`  if (/[^A-Za-z0-9]/.test(pw)) score++;  // ada simbol`}</p>
          <p className="mb-0">
            <span className="leading-[24px]">
              {`} `}
              <br aria-hidden />
              <br aria-hidden />
            </span>
            <span className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic">Logic: Score 0–4 berdasarkan 4 kriteria independen yang dicek via regex:</span>
          </p>
          <p className="leading-[24px] mb-0">{`length ≥ 8      → +1`}</p>
          <p className="leading-[24px] mb-0">{`/[A-Z]/         → +1  (huruf kapital)`}</p>
          <p className="leading-[24px] mb-0">{`/[0-9]/         → +1  (angka)`}</p>
          <p className="leading-[24px]">{`/[^A-Za-z0-9]/ → +1  (simbol / karakter spesial)`}</p>
        </div>
      </div>
    </div>
  );
}

export default function NoteForEngineer() {
  return (
    <div className="bg-[#fff7cd] content-stretch drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] flex gap-[6px] items-start p-[32px] relative rounded-[21.333px] size-full" data-name="Note for Engineer">
      <Frame />
    </div>
  );
}