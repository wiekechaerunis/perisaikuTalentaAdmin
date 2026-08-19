import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { WaitingScreenHeader } from "../../components/shared/WaitingScreenHeader";
import imgResetLinkSent from "../../assets/illustrations/reset-link-sent.png";

export function ResetLinkSentScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = (location.state as { email?: string } | null)?.email || "email Anda";
  const [resent, setResent] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => navigate("/reset-password", { state: { email } }), 4000);
    return () => clearTimeout(t);
  }, [navigate, email]);

  const steps = [
    { n: 1, text: <>Buka email Anda yang terdaftar: <span className="font-bold text-text-default">{email}</span></> },
    { n: 2, text: "Buka folder Inbox atau Spam, lalu klik tautan reset password yang kami kirimkan." },
    { n: 3, text: "Anda akan diarahkan ke aplikasi kembali untuk membuat password baru." },
  ];

  return (
    <div className="bg-white flex flex-col items-start w-full h-screen overflow-hidden">
      <WaitingScreenHeader />
      <div className="flex-1 w-full overflow-y-auto flex flex-col items-center justify-center px-6 py-12 gap-8">
        <img src={imgResetLinkSent} alt="" className="w-[200px] h-[133px] object-contain" />
        <div className="flex flex-col gap-3 items-center text-center max-w-[480px]">
          <p className="text-text-darker text-[24px] font-bold leading-8" style={{ fontFamily: "var(--font-body)" }}>
            Tautan Reset Password Telah Dikirim ke Email Anda
          </p>
          <p className="text-text-lighter text-sm leading-5" style={{ fontFamily: "var(--font-body)" }}>
            Kami telah mengirimkan tautan untuk mengatur ulang password ke email yang terdaftar pada akun Anda.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full max-w-[420px]">
          {steps.map((step) => (
            <div key={step.n} className="flex gap-3 items-start">
              <div className="bg-brand-primary rounded-full size-6 flex items-center justify-center shrink-0 text-white text-xs font-bold" style={{ fontFamily: "var(--font-body)" }}>
                {step.n}
              </div>
              <p className="text-text-default text-sm leading-5" style={{ fontFamily: "var(--font-body)" }}>{step.text}</p>
            </div>
          ))}
        </div>
        <p className="text-[#595959] text-xs" style={{ fontFamily: "var(--font-body)" }}>
          Belum menerima link?{" "}
          <button onClick={() => setResent(true)} className="text-brand-primary font-bold hover:underline">Kirim Ulang</button>
          {resent && <span className="ml-2 font-semibold text-[#22c55e]">Terkirim!</span>}
        </p>
        <button
          onClick={() => navigate("/login")}
          className="h-12 rounded-full w-full max-w-[420px] text-white font-bold text-base bg-brand-primary hover:bg-brand-primary-hover transition-colors"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Masuk ke Halaman Login
        </button>
      </div>
    </div>
  );
}

