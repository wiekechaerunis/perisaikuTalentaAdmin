import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import { Eye, EyeOff } from "lucide-react";
import { FieldLabel, TextInput, FieldError, PasswordStrength } from "../../components/shared/FormFields";
import { ProfileSharedState } from "../../mocks/profile";

export interface ChangePasswordErrors {
  current?: string;
  next?: string;
  confirm?: string;
}

export function ChangePasswordContent() {
  const navigate = useNavigate();
  const { savedPassword, setSavedPassword, pushToast } = useOutletContext<ProfileSharedState>();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState<ChangePasswordErrors>({});

  const validate = (): ChangePasswordErrors => {
    const e: ChangePasswordErrors = {};

    if (!currentPassword) e.current = "Kata Sandi Saat ini wajib diisi";
    else if (currentPassword !== savedPassword) e.current = "Kata sandi saat ini salah";

    if (!newPassword) e.next = "Kata Sandi Baru wajib diisi";
    else if (newPassword.length < 8) e.next = "Kata Sandi Baru minimal 8 karakter";
    else if (!/[A-Z]/.test(newPassword) || !/[a-z]/.test(newPassword) || !/[0-9]/.test(newPassword)) e.next = "Harus mengandung huruf kapital, huruf kecil, dan angka";

    if (!confirmPassword) e.confirm = "Konfirmasi kata sandi baru wajib diisi";
    else if (confirmPassword !== newPassword) e.confirm = "Konfirmasi kata sandi baru tidak sama";

    return e;
  };

  const handleSave = () => {
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setSavedPassword(newPassword);
    pushToast("Password berhasil diperbarui");
    navigate("/profile");
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white rounded-2xl border border-border-lighter p-6 flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <FieldLabel required>Kata Sandi Saat Ini</FieldLabel>
          <TextInput
            placeholder="Masukan Kata Sandi Saat Ini"
            value={currentPassword}
            onChange={v => { setCurrentPassword(v); setErrors(prev => ({ ...prev, current: undefined })); }}
            type={showCurrent ? "text" : "password"}
            error={!!errors.current}
            suffix={
              <button type="button" onClick={() => setShowCurrent(v => !v)} className="text-icon-default shrink-0">
                {showCurrent ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            }
          />
          <FieldError msg={errors.current} />
        </div>

        <div className="flex flex-col gap-1.5">
          <FieldLabel required>Kata Sandi Baru</FieldLabel>
          <TextInput
            placeholder="Min. 8 Karakter"
            value={newPassword}
            onChange={v => { setNewPassword(v); setErrors(prev => ({ ...prev, next: undefined })); }}
            type={showNew ? "text" : "password"}
            error={!!errors.next}
            suffix={
              <button type="button" onClick={() => setShowNew(v => !v)} className="text-icon-default shrink-0">
                {showNew ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            }
          />
          <PasswordStrength password={newPassword} />
          <FieldError msg={errors.next} />
        </div>

        <div className="flex flex-col gap-1.5">
          <FieldLabel required>Konfirmasi Kata Sandi Baru</FieldLabel>
          <TextInput
            placeholder="Min. 8 Karakter"
            value={confirmPassword}
            onChange={v => { setConfirmPassword(v); setErrors(prev => ({ ...prev, confirm: undefined })); }}
            type={showConfirm ? "text" : "password"}
            error={!!errors.confirm}
            suffix={
              <button type="button" onClick={() => setShowConfirm(v => !v)} className="text-icon-default shrink-0">
                {showConfirm ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            }
          />
          <FieldError msg={errors.confirm} />
        </div>

        <div className="flex items-center justify-between pt-1">
          <button onClick={() => navigate("/profile")} className="h-10 px-5 rounded-full border border-border-default text-text-default font-bold text-[13px] hover:bg-gray-50 transition-colors" style={{ fontFamily: "var(--font-body)" }}>Batal</button>
          <button onClick={handleSave} className="h-10 px-5 rounded-full bg-brand-primary text-white font-bold text-[13px] hover:bg-brand-primary-hover transition-colors" style={{ fontFamily: "var(--font-body)" }}>Simpan Perubahan</button>
        </div>
      </div>
    </div>
  );
}
