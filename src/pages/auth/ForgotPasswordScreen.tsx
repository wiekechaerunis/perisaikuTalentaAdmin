import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { WaitingScreenHeader } from "../../components/shared/WaitingScreenHeader";
import imgForgotPassword from "../../assets/illustrations/forgot-password.png";

export function ForgotPasswordScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = () => {
    if (!isValid) return;
    navigate("/forgot-password/sent", { state: { email } });
  };

  return (
    <div className="bg-white flex flex-col items-start w-full h-screen overflow-hidden">
      <WaitingScreenHeader />
      <div className="flex-1 w-full overflow-y-auto flex items-center justify-center px-6 py-12">
        <div className="flex flex-col items-center gap-8 w-full max-w-[420px]">
          <img src={imgForgotPassword} alt="" className="w-[220px] h-[176px] object-contain" />
          <div className="flex flex-col gap-3 items-center text-center">
            <p className="text-text-darker text-[24px] font-bold leading-8" style={{ fontFamily: "var(--font-body)" }}>Lupa Password</p>
            <p className="text-text-lighter text-sm leading-5" style={{ fontFamily: "var(--font-body)" }}>
              Masukkan email yang terhubung dengan akun Anda. Link "Reset Password" akan dikirim ke alamat email tersebut.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-text-darker text-xs flex items-center gap-0.5" style={{ fontFamily: "var(--font-body)" }}>
              Email <span className="text-danger text-[10px]">*</span>
            </label>
            <div className="bg-white h-11 rounded-xl border border-border-default flex items-center px-3 gap-2 focus-within:border-brand-primary">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="Masukkan email Anda"
                className="flex-1 min-w-0 text-sm bg-transparent outline-none text-text-default placeholder-[#c5c6c9]"
                style={{ fontFamily: "var(--font-body)" }}
                autoFocus
              />
            </div>
          </div>
          <button
            onClick={handleSubmit}
            disabled={!isValid}
            className="h-12 rounded-full w-full text-white font-bold text-base bg-brand-primary hover:bg-brand-primary-hover transition-colors disabled:bg-[#f6f4f4] disabled:text-border-default disabled:cursor-not-allowed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Kirim Link Reset Password
          </button>
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-1.5 text-text-darker text-sm font-semibold hover:text-brand-primary transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <ArrowLeft size={15} /> Kembali ke halaman Login
          </button>
        </div>
      </div>
    </div>
  );
}

