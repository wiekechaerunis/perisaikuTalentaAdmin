import { useNavigate, useOutletContext } from "react-router";
import { ProfileSharedState } from "../../mocks/profile";

export function ProfileUserContent() {
  const navigate = useNavigate();
  const { name, email, phone, avatarSrc } = useOutletContext<ProfileSharedState>();

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white rounded-2xl border border-border-lighter p-6 flex items-center gap-5">
        <div className="relative rounded-full shrink-0 size-20 overflow-hidden bg-[#f1f5f9]">
          {avatarSrc && <img alt="avatar" className="absolute inset-0 size-full object-cover" src={avatarSrc} />}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[18px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>{name}</p>
          <p className="text-sm text-text-muted" style={{ fontFamily: "var(--font-body)" }}>Manajer HR</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button onClick={() => navigate("/profile/edit")} className="h-9 px-4 rounded-full border border-brand-primary text-brand-primary font-bold text-[13px] hover:bg-[#ebf2ff] transition-colors" style={{ fontFamily: "var(--font-body)" }}>Edit</button>
          <button onClick={() => navigate("/profile/change-password")} className="h-9 px-4 rounded-full border border-border-default text-text-default font-bold text-[13px] hover:bg-gray-50 transition-colors" style={{ fontFamily: "var(--font-body)" }}>Ganti Kata Sandi</button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-border-lighter p-6 flex flex-col gap-5">
        <p className="text-[16px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Informasi Akun</p>
        {[
          { label: "Nama Lengkap", value: name },
          { label: "Email", value: email },
          { label: "Nomor Telepon", value: `+62 ${phone}` },
          { label: "Role", value: "Manajer HR" },
        ].map(row => (
          <div key={row.label} className="flex flex-col gap-1.5">
            <span className="text-[#9b9ca1] text-xs" style={{ fontFamily: "var(--font-body)" }}>{row.label}</span>
            <span className="text-text-default text-sm" style={{ fontFamily: "var(--font-body)" }}>{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

