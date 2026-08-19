import { useState } from "react";
import { useNavigate } from "react-router";
import { Briefcase, User, Mail, Eye, EyeOff, Check } from "lucide-react";
import { useSession } from "../../lib/session";
import { FieldLabel, TextInput, FieldError, PasswordStrength } from "../../components/shared/FormFields";
import { BrandBlurCircles } from "../../components/shared/BrandBlurCircles";
import imgRegisterHero from "../../assets/register/hero-illustration.png";

export interface RegisterFormData {
  namaPerusahaan: string;
  namaLengkap: string;
  email: string;
  nomorTelepon: string;
  password: string;
  konfirmasiPassword: string;
  agreed: boolean;
}

export type RegisterErrors = Partial<Record<keyof RegisterFormData, string>>;

export function validateRegisterForm(data: RegisterFormData): RegisterErrors {
  const e: RegisterErrors = {};
  if (!data.namaPerusahaan.trim()) e.namaPerusahaan = "Nama perusahaan wajib diisi";
  if (!data.namaLengkap.trim()) e.namaLengkap = "Nama lengkap wajib diisi";
  if (!data.email.trim()) {
    e.email = "Email wajib diisi";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    e.email = "Format email tidak valid";
  }
  if (!data.nomorTelepon.trim()) e.nomorTelepon = "Nomor telepon wajib diisi";
  if (!data.password) {
    e.password = "Password wajib diisi";
  } else if (data.password.length < 8) {
    e.password = "Password minimal 8 karakter";
  }
  if (!data.konfirmasiPassword) {
    e.konfirmasiPassword = "Konfirmasi password wajib diisi";
  } else if (data.konfirmasiPassword !== data.password) {
    e.konfirmasiPassword = "Password tidak cocok";
  }
  if (!data.agreed) e.agreed = "Anda harus menyetujui syarat & ketentuan";
  return e;
}

export function RegisterPage() {
  const navigate = useNavigate();
  const { setSession } = useSession();

  const [data, setData] = useState<RegisterFormData>({
    namaPerusahaan: "",
    namaLengkap: "",
    email: "",
    nomorTelepon: "",
    password: "",
    konfirmasiPassword: "",
    agreed: false,
  });
  const [errors, setErrors] = useState<RegisterErrors>({});
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const update = (patch: Partial<RegisterFormData>) => {
    setData(prev => ({ ...prev, ...patch }));
    const cleared = { ...errors };
    (Object.keys(patch) as (keyof RegisterFormData)[]).forEach(k => delete cleared[k]);
    setErrors(cleared);
  };

  const handleSubmit = () => {
    const e = validateRegisterForm(data);
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setSession(prev => ({
      ...prev,
      userName: data.namaLengkap,
      email: data.email,
      phone: data.nomorTelepon,
      companyName: data.namaPerusahaan,
    }));
    navigate("/register/verify-email");
  };

  return (
    <div className="bg-white flex items-stretch w-full h-screen overflow-hidden">
      {/* Marketing panel */}
      <div
        className="flex-1 min-w-0 relative overflow-hidden flex flex-col justify-between p-10"
        style={{ background: "linear-gradient(155.5deg, #2267C2 0%, #2B81F3 39.01%, #0EA5E9 78.021%)" }}
      >
        <BrandBlurCircles />
        <div className="relative z-10 flex flex-col gap-10 items-start">
          <div className="flex gap-3 items-center">
            <div className="bg-[#4361ee] flex items-center justify-center rounded-lg size-8 shrink-0">
              <Briefcase size={16} className="text-white" />
            </div>
            <p className="text-white text-xl font-bold" style={{ fontFamily: "var(--font-body)" }}>Perisaiku Talenta</p>
          </div>
          <div className="flex flex-col gap-8 items-start">
            <p className="text-[#e9e9e9] text-[44px] xl:text-[56px] font-extrabold leading-[1.1]" style={{ fontFamily: "var(--font-body)" }}>
              Mulai rekrut <span className="text-[#35bafb]">talenta terbaik</span> Anda.
            </p>
            <p className="text-[#e5e7eb] text-lg leading-relaxed max-w-[560px]" style={{ fontFamily: "var(--font-body)" }}>
              Buat akun employer dan kelola seluruh proses rekrutmen mulai dari posting lowongan, screening kandidat, hingga proses hiring dalam satu platform
            </p>
            <img src={imgRegisterHero} alt="" className="w-full max-w-[633px] relative z-10" />
          </div>
        </div>
        <div />
      </div>

      {/* Form panel */}
      <div className="flex-1 min-w-0 flex items-center justify-center overflow-y-auto py-16 px-6">
        <div className="flex flex-col gap-8 w-full max-w-[520px]">
          <div className="flex flex-col gap-2">
            <p className="text-text-darker text-[28px] font-bold leading-8" style={{ fontFamily: "var(--font-body)" }}>Buat Akun Perusahaan</p>
            <p className="text-text-default text-sm" style={{ fontFamily: "var(--font-body)" }}>
              Sudah punya akun?{" "}
              <a href="/login" className="text-brand-primary font-semibold">Masuk di sini</a>
            </p>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-1.5">
              <FieldLabel required>Nama perusahaan</FieldLabel>
              <TextInput
                placeholder="PT Maju Bersama"
                value={data.namaPerusahaan}
                onChange={v => update({ namaPerusahaan: v.slice(0, 100) })}
                error={!!errors.namaPerusahaan}
              />
              <div className="flex justify-between items-center">
                <FieldError msg={errors.namaPerusahaan} />
                <p className="text-text-lighter text-[10px] ml-auto" style={{ fontFamily: "var(--font-body)" }}>{data.namaPerusahaan.length} / 100</p>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <FieldLabel required>Nama lengkap Anda</FieldLabel>
              <TextInput
                placeholder="Nama Lengkap Anda"
                value={data.namaLengkap}
                onChange={v => update({ namaLengkap: v })}
                error={!!errors.namaLengkap}
                suffix={<User size={14} className="text-[#9b9ca1] shrink-0" />}
              />
              <FieldError msg={errors.namaLengkap} />
            </div>

            <div className="flex flex-col gap-1.5">
              <FieldLabel required>Email akun Anda</FieldLabel>
              <TextInput
                placeholder="john@email.com"
                value={data.email}
                onChange={v => update({ email: v })}
                type="email"
                error={!!errors.email}
                suffix={<Mail size={14} className="text-[#9b9ca1] shrink-0" />}
              />
              <FieldError msg={errors.email} />
            </div>

            <div className="flex flex-col gap-1.5">
              <FieldLabel required>Nomor telepon</FieldLabel>
              <TextInput
                placeholder="812 3456 7890"
                value={data.nomorTelepon}
                onChange={v => update({ nomorTelepon: v })}
                type="tel"
                prefix="+62"
                error={!!errors.nomorTelepon}
              />
              <FieldError msg={errors.nomorTelepon} />
            </div>

            <div className="flex flex-col gap-1.5">
              <FieldLabel required>Password</FieldLabel>
              <TextInput
                placeholder="Min. 8 Karakter"
                value={data.password}
                onChange={v => update({ password: v })}
                type={showPass ? "text" : "password"}
                error={!!errors.password}
                suffix={
                  <button type="button" onClick={() => setShowPass(v => !v)} className="text-icon-default shrink-0">
                    {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                }
              />
              <PasswordStrength password={data.password} />
              <FieldError msg={errors.password} />
            </div>

            <div className="flex flex-col gap-1.5">
              <FieldLabel required>Konfirmasi Password</FieldLabel>
              <TextInput
                placeholder="Min. 8 Karakter"
                value={data.konfirmasiPassword}
                onChange={v => update({ konfirmasiPassword: v })}
                type={showConfirm ? "text" : "password"}
                error={!!errors.konfirmasiPassword}
                suffix={
                  <button type="button" onClick={() => setShowConfirm(v => !v)} className="text-icon-default shrink-0">
                    {showConfirm ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                }
              />
              <FieldError msg={errors.konfirmasiPassword} />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex gap-3 items-start">
              <button
                type="button"
                onClick={() => update({ agreed: !data.agreed })}
                className={`flex items-center justify-center size-4 rounded border shrink-0 mt-0.5 transition-colors ${
                  data.agreed ? "bg-brand-primary border-brand-primary" : errors.agreed ? "bg-white border-danger" : "bg-white border-[#d1d5db]"
                }`}
              >
                {data.agreed && <Check size={10} className="text-white" strokeWidth={3} />}
              </button>
              <p className="text-text-darker text-xs leading-4 flex-1" style={{ fontFamily: "var(--font-body)" }}>
                Saya menyatakan bahwa informasi dan dokumen yang diberikan adalah benar. Saya menyetujui{" "}
                <span className="text-brand-primary font-bold cursor-pointer">Syarat &amp; Ketentuan</span> serta{" "}
                <span className="text-brand-primary font-bold cursor-pointer">Kebijakan Privasi Perisaku Talenta</span>.
              </p>
            </div>
            <FieldError msg={errors.agreed} />
          </div>

          <button
            onClick={handleSubmit}
            className="h-12 rounded-full w-full text-white text-base font-bold bg-brand-primary hover:bg-brand-primary-hover cursor-pointer transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Daftar
          </button>
        </div>
      </div>
    </div>
  );
}
