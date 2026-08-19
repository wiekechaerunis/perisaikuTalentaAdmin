import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useSession } from "../../lib/session";
import { WaitingScreenHeader } from "../../components/shared/WaitingScreenHeader";
import imgEmailVerification from "../../assets/register/email-verification.png";

export function EmailVerificationScreen() {
  const navigate = useNavigate();
  const { session } = useSession();

  useEffect(() => {
    const t = setTimeout(() => navigate("/onboarding/company"), 2500);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="bg-white flex flex-col items-start w-full h-screen overflow-hidden">
      <WaitingScreenHeader />
      <div className="flex-1 flex flex-col gap-12 items-center justify-center w-full px-30 pt-15 pb-20">
        <img src={imgEmailVerification} alt="" className="w-[248px] h-[186px] object-contain" />
        <div className="flex flex-col gap-5 items-center text-center max-w-[640px]">
          <p className="text-text-darker text-[28px] font-bold leading-8" style={{ fontFamily: "var(--font-body)" }}>
            Link verifikasi berhasil terkirim ke email Anda
          </p>
          <p className="text-text-lighter text-sm leading-5" style={{ fontFamily: "var(--font-body)" }}>
            Demi keamanan akun, mohon segera klik link verifikasi yang telah dikirimkan ke{" "}
            <span className="font-bold text-text-darker">{session.email}</span>. Anda bisa mengakses Dashboard Perusahaan setelah verifikasi berhasil.
          </p>
        </div>
      </div>
    </div>
  );
}
