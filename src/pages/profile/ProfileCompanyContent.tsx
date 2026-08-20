import { useNavigate, useOutletContext } from "react-router";
import { Building2, BadgeCheck, FileText } from "lucide-react";
import { ProfileSharedState, COMPANY_DOCUMENTS } from "../../mocks/profile";

export function ProfileCompanyContent() {
  const navigate = useNavigate();
  const {
    companyName, companyIndustry, companyCity, companySize, companyAddress, companyWebsite, companyLogoSrc,
    companyDescription, companyPhotos,
  } = useOutletContext<ProfileSharedState>();
  const websiteDisplay = companyWebsite.replace(/^https?:\/\//, "");
  const aboutParagraphs = companyDescription.split(/\n{2,}/).map(p => p.trim()).filter(Boolean);

  return (
    <div className="flex flex-col gap-6">
      {/* Hero cover */}
      <div className="bg-white rounded-[10px] border border-border-lighter px-8 py-4 flex items-center gap-8 w-full flex-wrap">
        <div className="bg-white rounded-3xl shadow-[0px_8px_16px_rgba(0,0,0,0.05)] shrink-0 size-[120px] flex items-center justify-center overflow-hidden">
          {companyLogoSrc ? (
            <img src={companyLogoSrc} alt="Logo perusahaan" className="size-full object-cover" />
          ) : (
            <Building2 size={48} className="text-brand-primary" />
          )}
        </div>
        <div className="flex-1 min-w-[280px] flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p className="text-[21px] font-bold text-[#09090b]" style={{ fontFamily: "var(--font-body)" }}>{companyName}</p>
            <BadgeCheck size={20} className="text-white shrink-0" fill="#22c55e" />
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-[14px] font-medium text-text-darker" style={{ fontFamily: "var(--font-body)" }}>{companyIndustry}</span>
            <span className="size-1 rounded-full bg-border-default shrink-0" />
            <span className="text-[14px] font-medium text-text-darker" style={{ fontFamily: "var(--font-body)" }}>{companyCity}</span>
            <span className="size-1 rounded-full bg-border-default shrink-0" />
            <span className="text-[14px] font-medium text-text-darker" style={{ fontFamily: "var(--font-body)" }}>{companySize}</span>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-[14px] font-medium text-[#666]" style={{ fontFamily: "var(--font-body)" }}>{companyAddress}</span>
            <span className="size-1 rounded-full bg-border-default shrink-0" />
            <a href={companyWebsite} target="_blank" rel="noreferrer" className="text-[14px] font-medium text-[#1a66cc] hover:underline" style={{ fontFamily: "var(--font-body)" }}>{websiteDisplay}</a>
          </div>
        </div>
        <button
          onClick={() => navigate("/profile/company/edit")}
          className="h-11 px-6 rounded-xl border-[1.5px] border-brand-primary text-brand-primary font-bold text-[14px] hover:bg-[#ebf2ff] transition-colors shrink-0"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Edit
        </button>
      </div>

      {/* Content columns */}
      <div className="bg-white rounded-[10px] border border-border-lighter px-8 pt-8 pb-10 flex gap-12 items-start flex-wrap">
        <div className="flex flex-col gap-8 flex-1 min-w-[320px]">
          <div className="flex flex-col gap-3">
            <p className="text-[16px] font-bold text-[#09090b]" style={{ fontFamily: "var(--font-body)" }}>Tentang Perusahaan</p>
            <div className="flex flex-col gap-4">
              {aboutParagraphs.map((p, i) => (
                <p key={i} className="text-[14px] leading-[1.8] text-[#71717a]" style={{ fontFamily: "var(--font-body)" }}>{p}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[16px] font-bold text-[#09090b]" style={{ fontFamily: "var(--font-body)" }}>Dokumen yang Sudah Diupload</p>
            <div className="flex flex-col">
              {COMPANY_DOCUMENTS.map((doc, i) => (
                <div key={doc.label} className={`flex items-center gap-3 py-3 ${i < COMPANY_DOCUMENTS.length - 1 ? "border-b border-[#e4e4e7]" : ""}`}>
                  <div className="bg-[#edf2f8] rounded-md shrink-0 size-7 flex items-center justify-center">
                    <FileText size={16} className="text-text-darker" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] font-medium text-[#09090b]" style={{ fontFamily: "var(--font-body)" }}>{doc.label}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-[12px] text-[#71717a] truncate" style={{ fontFamily: "var(--font-body)" }}>{doc.filename}</span>
                      <span className="size-[3px] rounded-full bg-[#71717a] shrink-0" />
                      <span className="text-[12px] text-[#71717a] shrink-0" style={{ fontFamily: "var(--font-body)" }}>{doc.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 flex-1 min-w-[280px]">
          <p className="text-[16px] font-bold text-[#09090b]" style={{ fontFamily: "var(--font-body)" }}>Foto kantor</p>
          {companyPhotos.length === 0 ? (
            <p className="text-[14px] text-[#71717a]" style={{ fontFamily: "var(--font-body)" }}>-</p>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {companyPhotos.map((src, i) => (
                <div key={i} className="rounded-xl overflow-hidden h-[148px] bg-[#f4f4f5]">
                  <img src={src} alt={`Foto kantor ${i + 1}`} className="size-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

