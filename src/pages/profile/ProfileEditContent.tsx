import React, { useState, useRef } from "react";
import { useNavigate, useOutletContext } from "react-router";
import { Plus } from "lucide-react";
import { ProfileSharedState } from "../../mocks/profile";
import { AvatarCropModal } from "../../components/profile/AvatarCropModal";

export function ProfileEditContent() {
  const navigate = useNavigate();
  const { name, email, phone, avatarSrc, setName, setEmail, setPhone, setAvatarSrc, pushToast } = useOutletContext<ProfileSharedState>();

  const [draftName, setDraftName] = useState(name);
  const [draftEmail, setDraftEmail] = useState(email);
  const [draftPhone, setDraftPhone] = useState(phone);
  const [draftAvatar, setDraftAvatar] = useState<string | null>(avatarSrc);

  const [cropSrc, setCropSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setCropSrc(reader.result as string);
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const handleSaveProfile = () => {
    setName(draftName);
    setEmail(draftEmail);
    setPhone(draftPhone);
    setAvatarSrc(draftAvatar);
    pushToast("Profil akun berhasil diperbarui");
    navigate("/profile");
  };

  return (
    <div className="flex flex-col gap-6">
      <input ref={fileInputRef} type="file" accept="image/png,image/jpeg" className="hidden" onChange={handleFileChange} />
      {cropSrc && (
        <AvatarCropModal
          src={cropSrc}
          onCancel={() => setCropSrc(null)}
          onSave={dataUrl => { setDraftAvatar(dataUrl); setCropSrc(null); }}
        />
      )}

      <div className="bg-white rounded-2xl border border-border-lighter p-6 flex flex-col gap-5">
        <p className="text-[16px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Informasi Akun</p>

        <div className="flex items-center gap-4">
          <div className="relative rounded-2xl shrink-0 size-20 overflow-hidden bg-[#f1f5f9] flex items-center justify-center">
            {draftAvatar ? <img alt="avatar" className="absolute inset-0 size-full object-cover" src={draftAvatar} /> : <Plus size={24} className="text-border-default" />}
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-3">
              <button onClick={() => fileInputRef.current?.click()} className="h-9 px-4 rounded-full border border-border-default text-text-default font-bold text-[13px] hover:bg-gray-50 transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                {draftAvatar ? "Ganti Logo" : "Upload Logo"}
              </button>
              {draftAvatar && (
                <button onClick={() => setDraftAvatar(null)} className="text-[13px] font-semibold text-text-subtle hover:text-danger-strong transition-colors" style={{ fontFamily: "var(--font-body)" }}>Hapus</button>
              )}
            </div>
            <p className="text-[11px] text-text-subtle" style={{ fontFamily: "var(--font-body)" }}>Rekomendasi ukuran: 500x500 px dalam format PNG atau JPG</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-text-darker text-xs" style={{ fontFamily: "var(--font-body)" }}>Nama Lengkap</label>
          <div className="bg-white h-10 rounded-xl border border-border-default flex items-center px-3 gap-2">
            <input value={draftName} onChange={e => setDraftName(e.target.value)}
              className="flex-1 min-w-0 text-xs bg-transparent outline-none text-text-default"
              style={{ fontFamily: "var(--font-body)" }} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-text-darker text-xs" style={{ fontFamily: "var(--font-body)" }}>Email</label>
          <div className="bg-white h-10 rounded-xl border border-border-default flex items-center px-3 gap-2">
            <input type="email" value={draftEmail} onChange={e => setDraftEmail(e.target.value)}
              className="flex-1 min-w-0 text-xs bg-transparent outline-none text-text-default"
              style={{ fontFamily: "var(--font-body)" }} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-text-darker text-xs" style={{ fontFamily: "var(--font-body)" }}>Nomor Telepon</label>
          <div className="bg-white h-10 rounded-xl border border-border-default flex items-center px-3 gap-2">
            <span className="text-xs text-text-subtle" style={{ fontFamily: "var(--font-body)" }}>+62</span>
            <input value={draftPhone} onChange={e => setDraftPhone(e.target.value)}
              className="flex-1 min-w-0 text-xs bg-transparent outline-none text-text-default"
              style={{ fontFamily: "var(--font-body)" }} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-text-darker text-xs" style={{ fontFamily: "var(--font-body)" }}>Role</label>
          <div className="bg-surface h-10 rounded-xl border border-border-lighter flex items-center px-3">
            <span className="text-xs text-text-subtle" style={{ fontFamily: "var(--font-body)" }}>Manajer HR</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <button onClick={() => navigate("/profile")} className="h-10 px-5 rounded-full border border-border-default text-text-default font-bold text-[13px] hover:bg-gray-50 transition-colors" style={{ fontFamily: "var(--font-body)" }}>Batal</button>
          <button onClick={handleSaveProfile} className="h-10 px-5 rounded-full bg-brand-primary text-white font-bold text-[13px] hover:bg-brand-primary-hover transition-colors" style={{ fontFamily: "var(--font-body)" }}>Simpan Perubahan</button>
        </div>
      </div>
    </div>
  );
}

