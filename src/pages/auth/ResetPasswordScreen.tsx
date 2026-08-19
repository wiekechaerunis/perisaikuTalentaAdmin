import { useState } from "react";
import { useNavigate } from "react-router";
import { Eye, EyeOff } from "lucide-react";
import { WaitingScreenHeader } from "../../components/shared/WaitingScreenHeader";
import { PasswordStrength } from "../../components/shared/FormFields";
import { StatusToast } from "../../components/shared/StatusToast";

export function ResetPasswordScreen() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);

  const isValid = password.length >= 8 && confirmPassword.length >= 8;

  const handleSubmit = () => {
    if (password.length < 8) { setError("Password minimal 8 karakter"); return; }
    if (password !== confirmPassword) { setError("Konfirmasi password tidak cocok"); return; }
    setError("");
    setShowToast(true);
    setTimeout(() => navigate("/login"), 1800);
  };

  return (
    <div className="bg-white flex flex-col items-start w-full h-screen overflow-hidden">
      <WaitingScreenHeader />
      <div className="flex-1 w-full overflow-y-auto flex items-center justify-center px-6 py-12">
        <div className="flex flex-col items-center gap-8 w-full max-w-[420px]">
          <div className="flex flex-col gap-3 items-center text-center">
            <p className="text-text-darker text-[24px] font-bold leading-8" style={{ fontFamily: "var(--font-body)" }}>Buat Password Baru</p>
            <p className="text-text-lighter text-sm leading-5" style={{ fontFamily: "var(--font-body)" }}>
              Silakan buat password baru Anda untuk login ke aplikasi Perisaiku Talenta
            </p>
          </div>
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-2">
              <label className="text-text-darker text-xs flex items-center gap-0.5" style={{ fontFamily: "var(--font-body)" }}>
                Password Baru <span className="text-danger text-[10px]">*</span>
              </label>
              <div className="bg-white h-11 rounded-xl border border-border-default flex items-center px-3 gap-2 focus-within:border-brand-primary">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(""); }}
                  placeholder="Masukkan password"
                  className="flex-1 min-w-0 text-sm bg-transparent outline-none text-text-default placeholder-[#c5c6c9]"
                  style={{ fontFamily: "var(--font-body)" }}
                  autoFocus
                />
                <button type="button" onClick={() => setShowPassword((v) => !v)} className="shrink-0 text-icon-default">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <PasswordStrength password={password} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-text-darker text-xs flex items-center gap-0.5" style={{ fontFamily: "var(--font-body)" }}>
                Konfirmasi Password Baru <span className="text-danger text-[10px]">*</span>
              </label>
              <div className="bg-white h-11 rounded-xl border border-border-default flex items-center px-3 gap-2 focus-within:border-brand-primary">
                <input
                  type={showConfirm ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => { setConfirmPassword(e.target.value); setError(""); }}
                  onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                  placeholder="Konfirmasi password"
                  className="flex-1 min-w-0 text-sm bg-transparent outline-none text-text-default placeholder-[#c5c6c9]"
                  style={{ fontFamily: "var(--font-body)" }}
                />
                <button type="button" onClick={() => setShowConfirm((v) => !v)} className="shrink-0 text-icon-default">
                  {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            {error && <p className="text-danger text-xs" style={{ fontFamily: "var(--font-body)" }}>{error}</p>}
          </div>
          <button
            onClick={handleSubmit}
            disabled={!isValid}
            className="h-12 rounded-full w-full text-white font-bold text-base bg-brand-primary hover:bg-brand-primary-hover transition-colors disabled:bg-[#f6f4f4] disabled:text-border-default disabled:cursor-not-allowed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Simpan Password Baru
          </button>
        </div>
      </div>
      {showToast && (
        <div className="fixed left-1/2 top-6 z-[150] -translate-x-1/2">
          <StatusToast variant="success" message="Password berhasil diubah" onDismiss={() => setShowToast(false)} />
        </div>
      )}
    </div>
  );
}

