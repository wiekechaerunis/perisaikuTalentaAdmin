import React, { useState, useRef } from "react";
import { useNavigate, useOutletContext } from "react-router";
import { Building2, Plus, X } from "lucide-react";
import { FieldLabel, TextInput, SelectInput, TextareaInput } from "../../components/shared/FormFields";
import { AvatarCropModal } from "../../components/profile/AvatarCropModal";
import { ProfileSharedState, COMPANY_PHOTO_LIMIT, COMPANY_NAME_MAX_LEN } from "../../mocks/profile";
import { industriOptions, kotaOptions, ukuranOptions } from "../../mocks/options";

export function ProfileCompanyEditContent() {
  const navigate = useNavigate();
  const {
    companyName, companyIndustry, companyCity, companySize, companyAddress, companyWebsite, companyLogoSrc,
    companyOfficeCity, companyDescription, companyPhotos,
    setCompanyName, setCompanyIndustry, setCompanyCity, setCompanySize, setCompanyAddress, setCompanyWebsite, setCompanyLogoSrc,
    setCompanyOfficeCity, setCompanyDescription, setCompanyPhotos,
    pushToast,
  } = useOutletContext<ProfileSharedState>();

  const [draftName, setDraftName] = useState(companyName);
  const [draftIndustry, setDraftIndustry] = useState(companyIndustry);
  const [draftLocation, setDraftLocation] = useState(companyCity);
  const [draftSize, setDraftSize] = useState(companySize);
  const [draftOfficeCity, setDraftOfficeCity] = useState(companyOfficeCity);
  const [draftAddress, setDraftAddress] = useState(companyAddress);
  const [draftWebsite, setDraftWebsite] = useState(companyWebsite);
  const [draftDescription, setDraftDescription] = useState(companyDescription);
  const [draftLogo, setDraftLogo] = useState<string | null>(companyLogoSrc);
  const [draftPhotos, setDraftPhotos] = useState<string[]>(companyPhotos);

  const [cropSrc, setCropSrc] = useState<string | null>(null);
  const logoInputRef = useRef<HTMLInputElement>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const dragIndexRef = useRef<number | null>(null);

  const handleLogoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setCropSrc(reader.result as string);
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const handlePhotoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []).slice(0, Math.max(0, COMPANY_PHOTO_LIMIT - draftPhotos.length));
    files.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => setDraftPhotos(prev => [...prev, reader.result as string]);
      reader.readAsDataURL(file);
    });
    e.target.value = "";
  };

  const removePhoto = (index: number) => setDraftPhotos(prev => prev.filter((_, i) => i !== index));

  const handlePhotoDrop = (index: number) => {
    const from = dragIndexRef.current;
    dragIndexRef.current = null;
    if (from === null || from === index) return;
    setDraftPhotos(prev => {
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(index, 0, moved);
      return next;
    });
  };

  const handleSave = () => {
    setCompanyName(draftName);
    setCompanyIndustry(draftIndustry);
    setCompanyCity(draftLocation);
    setCompanySize(draftSize);
    setCompanyOfficeCity(draftOfficeCity);
    setCompanyAddress(draftAddress);
    setCompanyWebsite(draftWebsite);
    setCompanyDescription(draftDescription);
    setCompanyLogoSrc(draftLogo);
    setCompanyPhotos(draftPhotos);
    pushToast("Profil perusahaan berhasil diperbarui");
    navigate("/profile/company");
  };

  return (
    <div className="flex flex-col gap-6">
      <input ref={logoInputRef} type="file" accept="image/png,image/jpeg" className="hidden" onChange={handleLogoFileChange} />
      <input ref={photoInputRef} type="file" accept="image/png,image/jpeg" multiple className="hidden" onChange={handlePhotoFileChange} />
      {cropSrc && (
        <AvatarCropModal
          src={cropSrc}
          onCancel={() => setCropSrc(null)}
          onSave={dataUrl => { setDraftLogo(dataUrl); setCropSrc(null); }}
        />
      )}

      <div className="bg-white rounded-xl border border-[#e4e4e7] p-8 flex flex-col gap-6">
        <p className="text-[16px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Identitas Perusahaan</p>

        {/* Logo */}
        <div className="flex items-center gap-6">
          <div className="bg-[#f4f4f5] border border-[#e4e4e7] rounded-xl shrink-0 size-20 flex items-center justify-center overflow-hidden">
            {draftLogo ? <img src={draftLogo} alt="Logo perusahaan" className="size-full object-cover" /> : <Building2 size={28} className="text-[#a1a1aa]" />}
          </div>
          <div className="flex-1 min-w-0 flex flex-col gap-1.5">
            <div className="flex items-center gap-3">
              <button onClick={() => logoInputRef.current?.click()} className="h-8 px-4 rounded-md border border-[#e4e4e7] text-[#09090b] font-semibold text-[13px] hover:bg-gray-50 transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                {draftLogo ? "Ganti Logo" : "Upload Logo"}
              </button>
              {draftLogo && (
                <button onClick={() => setDraftLogo(null)} className="text-[13px] text-[#a1a1aa] hover:text-danger-strong transition-colors" style={{ fontFamily: "var(--font-body)" }}>Hapus</button>
              )}
            </div>
            <p className="text-[12px] text-[#71717a]" style={{ fontFamily: "var(--font-body)" }}>Rekomendasi ukuran: 500x500 px dalam format PNG atau JPG</p>
          </div>
        </div>

        {/* Nama perusahaan */}
        <div className="flex flex-col gap-2">
          <FieldLabel required>Nama perusahaan</FieldLabel>
          <TextInput placeholder="Nama perusahaan" value={draftName} onChange={v => setDraftName(v.slice(0, COMPANY_NAME_MAX_LEN))} />
          <p className="text-[10px] text-text-lighter text-right" style={{ fontFamily: "var(--font-body)" }}>{draftName.length} / {COMPANY_NAME_MAX_LEN}</p>
        </div>

        {/* Industri | Lokasi */}
        <div className="flex gap-3 flex-wrap">
          <div className="flex-1 min-w-[220px] flex flex-col gap-2">
            <FieldLabel required>Industri</FieldLabel>
            <SelectInput placeholder="Pilih industri" value={draftIndustry} onChange={setDraftIndustry} options={industriOptions} />
          </div>
          <div className="flex-1 min-w-[220px] flex flex-col gap-2">
            <FieldLabel required>Lokasi</FieldLabel>
            <SelectInput placeholder="Pilih lokasi" value={draftLocation} onChange={setDraftLocation} options={kotaOptions} />
          </div>
        </div>

        {/* Jumlah Karyawan | Kota / lokasi kantor */}
        <div className="flex gap-3 flex-wrap">
          <div className="flex-1 min-w-[220px] flex flex-col gap-2">
            <FieldLabel required>Jumlah Karyawan</FieldLabel>
            <SelectInput placeholder="Pilih jumlah karyawan" value={draftSize} onChange={setDraftSize} options={ukuranOptions} />
          </div>
          <div className="flex-1 min-w-[220px] flex flex-col gap-2">
            <FieldLabel required>Kota / lokasi kantor</FieldLabel>
            <SelectInput placeholder="Pilih kota" value={draftOfficeCity} onChange={setDraftOfficeCity} options={kotaOptions} />
          </div>
        </div>

        {/* Alamat lengkap */}
        <div className="flex flex-col gap-2">
          <FieldLabel>Alamat lengkap</FieldLabel>
          <TextareaInput placeholder="Jl. Sudirman No. 123, Jakarta Pusat 10220" value={draftAddress} onChange={setDraftAddress} rows={3} />
        </div>

        {/* Website perusahaan */}
        <div className="flex flex-col gap-2 max-w-[512px]">
          <FieldLabel>Website perusahaan</FieldLabel>
          <TextInput placeholder="https://perusahaan.com" type="url" value={draftWebsite} onChange={setDraftWebsite} />
        </div>

        {/* Deskripsi Perusahaan */}
        <div className="flex flex-col gap-5 pt-1">
          <p className="text-[16px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Deskripsi Perusahaan</p>
          <div className="flex flex-col gap-2">
            <FieldLabel required>Deskripsi Perusahaan</FieldLabel>
            <TextareaInput placeholder="Ceritakan tentang perusahaan Anda" value={draftDescription} onChange={setDraftDescription} rows={5} />
          </div>
        </div>

        {/* Foto Kantor */}
        <div className="flex flex-col gap-4 pt-1">
          <div className="flex items-center justify-between">
            <p className="text-[16px] font-bold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>Foto Kantor</p>
            <span className="bg-[#f4f4f5] text-[#71717a] font-bold text-[12px] rounded-md px-2.5 py-1" style={{ fontFamily: "var(--font-body)" }}>{draftPhotos.length}/{COMPANY_PHOTO_LIMIT} foto</span>
          </div>
          <div className="flex gap-4 flex-wrap">
            {draftPhotos.map((src, i) => (
              <div
                key={i}
                draggable
                onDragStart={() => { dragIndexRef.current = i; }}
                onDragOver={e => e.preventDefault()}
                onDrop={() => handlePhotoDrop(i)}
                className="relative rounded-lg overflow-hidden h-[90px] w-[120px] shrink-0 cursor-grab active:cursor-grabbing"
              >
                <img src={src} alt={`Foto kantor ${i + 1}`} className="size-full object-cover pointer-events-none" />
                <button onClick={() => removePhoto(i)} className="absolute top-1.5 right-1.5 bg-black/50 rounded-full size-6 flex items-center justify-center hover:bg-black/70 transition-colors">
                  <X size={12} className="text-white" />
                </button>
              </div>
            ))}
            {draftPhotos.length < COMPANY_PHOTO_LIMIT && (
              <button
                onClick={() => photoInputRef.current?.click()}
                className="bg-[#f4f4f5] border-[1.5px] border-dashed border-border-lighter rounded-lg h-[90px] w-[120px] shrink-0 flex flex-col items-center justify-center gap-1 hover:bg-gray-100 transition-colors"
              >
                <Plus size={16} className="text-brand-primary" />
                <span className="text-[11px] font-semibold text-brand-primary" style={{ fontFamily: "var(--font-body)" }}>Unggah Foto</span>
              </button>
            )}
          </div>
          <p className="text-[11px] text-[#71717a]" style={{ fontFamily: "var(--font-body)" }}>Gunakan fitur drag-and-drop untuk mengatur urutan tampilan foto kantor utama Anda.</p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2">
          <button onClick={() => navigate("/profile/company")} className="h-10 px-5 rounded-full border-[1.5px] border-border-default text-text-darker font-bold text-[14px] hover:bg-gray-50 transition-colors" style={{ fontFamily: "var(--font-body)" }}>Batal</button>
          <button onClick={handleSave} className="h-12 px-6 rounded-full bg-brand-primary text-white font-bold text-[14px] hover:bg-brand-primary-hover transition-colors" style={{ fontFamily: "var(--font-body)" }}>Simpan Perubahan</button>
        </div>
      </div>
    </div>
  );
}
