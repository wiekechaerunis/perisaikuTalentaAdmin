import { useState } from "react";
import { useNavigate } from "react-router";
import { FieldLabel, TextInput, SelectInput, TextareaInput, FieldError, StepProgress } from "../../components/shared/FormFields";
import { OnboardingSidebar } from "../../components/onboarding/OnboardingSidebar";
import { industriOptions, kotaOptions, ukuranOptions } from "../../mocks/options";

export interface OnboardingCompanyData {
  deskripsi: string;
  industri: string;
  lokasi: string;
  ukuranPerusahaan: string;
  kotaKantor: string;
  alamat: string;
  website: string;
}

export type OnboardingCompanyErrors = Partial<Record<keyof OnboardingCompanyData, string>>;

export function validateOnboardingCompany(data: OnboardingCompanyData): OnboardingCompanyErrors {
  const e: OnboardingCompanyErrors = {};
  if (!data.deskripsi.trim()) e.deskripsi = "Deskripsi perusahaan wajib diisi";
  if (!data.industri) e.industri = "Industri wajib dipilih";
  if (!data.lokasi) e.lokasi = "Lokasi wajib dipilih";
  if (!data.ukuranPerusahaan) e.ukuranPerusahaan = "Ukuran perusahaan wajib dipilih";
  if (!data.kotaKantor) e.kotaKantor = "Kota / lokasi kantor wajib dipilih";
  return e;
}

export function OnboardingCompanyScreen() {
  const navigate = useNavigate();
  const [data, setData] = useState<OnboardingCompanyData>({
    deskripsi: "", industri: "", lokasi: "", ukuranPerusahaan: "", kotaKantor: "", alamat: "", website: "",
  });
  const [errors, setErrors] = useState<OnboardingCompanyErrors>({});

  const update = (patch: Partial<OnboardingCompanyData>) => {
    setData(prev => ({ ...prev, ...patch }));
    const cleared = { ...errors };
    (Object.keys(patch) as (keyof OnboardingCompanyData)[]).forEach(k => delete cleared[k]);
    setErrors(cleared);
  };

  const handleNext = () => {
    const e = validateOnboardingCompany(data);
    setErrors(e);
    if (Object.keys(e).length === 0) navigate("/onboarding/documents");
  };

  return (
    <div className="bg-white flex items-stretch w-full h-screen overflow-hidden">
      <OnboardingSidebar currentStep={1} />
      <div className="flex-1 min-w-0 flex items-start justify-center overflow-y-auto py-16 px-6">
        <div className="flex flex-col gap-6 w-full max-w-[560px]">
          <div className="flex flex-col gap-4">
            <StepProgress step={1} total={2} />
            <div className="flex flex-col gap-2">
              <p className="text-text-darker text-[28px] font-bold leading-8" style={{ fontFamily: "var(--font-body)" }}>Data perusahaan</p>
              <p className="text-text-muted text-sm" style={{ fontFamily: "var(--font-body)" }}>Informasi ini akan ditampilkan di Company Profile publik.</p>
            </div>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-1.5">
              <FieldLabel required>Deskripsi Perusahaan</FieldLabel>
              <TextareaInput
                placeholder="Ceritakan tentang perusahaan Anda, produk atau layanan yang ditawarkan..."
                value={data.deskripsi}
                onChange={v => update({ deskripsi: v })}
                rows={4}
              />
              <FieldError msg={errors.deskripsi} />
            </div>

            <div className="flex gap-4 w-full">
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <FieldLabel required>Industri</FieldLabel>
                <SelectInput placeholder="Pilih industri" value={data.industri} onChange={v => update({ industri: v })} options={industriOptions} error={!!errors.industri} />
                <FieldError msg={errors.industri} />
              </div>
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <FieldLabel required>Lokasi</FieldLabel>
                <SelectInput placeholder="Pilih lokasi" value={data.lokasi} onChange={v => update({ lokasi: v })} options={kotaOptions} error={!!errors.lokasi} />
                <FieldError msg={errors.lokasi} />
              </div>
            </div>

            <div className="flex gap-4 w-full">
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <FieldLabel required>Ukuran perusahaan</FieldLabel>
                <SelectInput placeholder="Pilih ukuran" value={data.ukuranPerusahaan} onChange={v => update({ ukuranPerusahaan: v })} options={ukuranOptions} error={!!errors.ukuranPerusahaan} />
                <FieldError msg={errors.ukuranPerusahaan} />
              </div>
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <FieldLabel required>Kota / lokasi kantor</FieldLabel>
                <SelectInput placeholder="Pilih kota" value={data.kotaKantor} onChange={v => update({ kotaKantor: v })} options={kotaOptions} error={!!errors.kotaKantor} />
                <FieldError msg={errors.kotaKantor} />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <FieldLabel>Alamat lengkap</FieldLabel>
              <TextareaInput placeholder="Jl. Sudirman No. 123, Jakarta Pusat 10220" value={data.alamat} onChange={v => update({ alamat: v })} rows={3} />
            </div>

            <div className="flex flex-col gap-1.5">
              <FieldLabel>Website perusahaan</FieldLabel>
              <TextInput placeholder="https://perusahaan.com" value={data.website} onChange={v => update({ website: v })} type="url" />
            </div>
          </div>

          <div className="flex gap-2.5 w-full pt-2 pb-10">
            <button onClick={() => navigate("/")} className="h-12 rounded-full px-6 border-2 border-brand-primary text-brand-primary text-base font-bold bg-white hover:bg-[#ebf2ff] transition-colors w-40 shrink-0" style={{ fontFamily: "var(--font-body)" }}>
              Kembali
            </button>
            <button onClick={handleNext} className="h-12 rounded-full flex-1 text-white text-base font-bold bg-brand-primary hover:bg-brand-primary-hover cursor-pointer transition-colors" style={{ fontFamily: "var(--font-body)" }}>
              Lanjut ke Dokumen Legal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
