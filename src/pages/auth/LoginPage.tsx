import { useState } from "react";
import { useNavigate } from "react-router";
import { Eye, EyeOff } from "lucide-react";
import svgLoginPaths from "../../imports/Register-4/svg-94u8bsjmpz";

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white flex items-start w-full h-screen overflow-hidden">
      {/* Sidebar — same gradient as register */}
      <div
        className="flex-1 min-w-0 relative self-stretch"
        style={{ backgroundImage: "linear-gradient(155.536deg, rgb(34, 103, 194) 0%, rgb(43, 129, 243) 39.01%, rgb(14, 165, 233) 78.021%)" }}
      >
        {/* decorative circles */}
        <div className="absolute left-[147px] size-[292px] top-[-125px] rounded-full opacity-10 bg-white" />
        <div className="absolute left-[-110px] size-[292px] top-[760px] rounded-full opacity-10 bg-white" />

        <div className="flex flex-col items-start justify-between p-10 h-full relative">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-white/20 w-8 h-8 rounded-lg flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d={svgLoginPaths.p1770e00} stroke="white" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
            <span className="text-white text-xl font-bold" style={{ fontFamily: "var(--font-body)" }}>Perisaiku Talenta</span>
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-8 w-full">
            <p className="text-white font-extrabold text-[56px] leading-[1.1]" style={{ fontFamily: "var(--font-body)" }}>
              Rekrut talenta terbaik,{" "}
              <span className="text-[#a8a4c9]">lebih cepat</span>
              {" "}dari sebelumnya.
            </p>
            <p className="text-[#e5e7eb] text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              Kelola seluruh proses rekrutmen - dari posting lowongan hingga video interview - dalam satu platform terintegrasi.
            </p>
          </div>
          <div />
        </div>
      </div>

      {/* Right — login form */}
      <div className="flex-1 min-w-0 flex flex-col items-center justify-center h-full py-20 px-8">
        <div className="flex flex-col gap-8 w-[520px]">
          {/* Heading */}
          <div className="flex flex-col gap-2">
            <p className="text-text-darker text-[28px] font-bold leading-8" style={{ fontFamily: "var(--font-body)" }}>
              Selamat datang kembali 👋
            </p>
            <p className="text-text-default text-sm" style={{ fontFamily: "var(--font-body)" }}>
              Belum punya akun?{" "}
              <a href="/" className="text-brand-primary font-semibold" style={{ fontFamily: "var(--font-body)" }}>
                Daftar di sini
              </a>
            </p>
          </div>

          {/* Fields */}
          <div className="flex flex-col gap-5 w-full">
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-text-darker text-xs flex items-center gap-0.5" style={{ fontFamily: "var(--font-body)" }}>
                Email perusahaan <span className="text-danger text-[10px]">*</span>
              </label>
              <div className="bg-white h-10 rounded-xl border border-border-default flex items-center px-3 gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@perusahaan.com"
                  className="flex-1 min-w-0 text-xs bg-transparent outline-none text-text-default placeholder-[#c5c6c9]"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className="text-text-darker text-xs flex items-center gap-0.5" style={{ fontFamily: "var(--font-body)" }}>
                Password <span className="text-danger text-[10px]">*</span>
              </label>
              <div className="bg-white h-10 rounded-xl border border-border-default flex items-center px-3 gap-2">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 8 Karakter"
                  className="flex-1 min-w-0 text-xs bg-transparent outline-none text-text-default placeholder-[#c5c6c9]"
                  style={{ fontFamily: "var(--font-body)" }}
                />
                <button onClick={() => setShowPassword((v) => !v)} className="shrink-0 text-icon-default">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              <button
                type="button"
                onClick={() => navigate("/forgot-password")}
                className="self-start text-brand-primary text-sm font-semibold hover:underline"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Lupa Password?
              </button>
            </div>
          </div>

          {/* Login button — goes straight to dashboard (no real auth); "superadmin" in the email routes to the Superadmin area */}
          <button
            onClick={() => navigate(email.toLowerCase().includes("superadmin") ? "/superadmin/verifikasi-employer" : "/dashboard")}
            className="bg-brand-primary h-12 rounded-full w-full text-white font-bold text-base hover:bg-brand-primary-hover transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Masuk
          </button>

          <p className="text-text-darker text-xs text-center" style={{ fontFamily: "var(--font-body)" }}>
            Dengan masuk, kamu menyetujui{" "}
            <span className="font-bold text-brand-primary">Syarat &amp; Ketentuan</span>
            {" "}dan{" "}
            <span className="font-bold text-brand-primary">Kebijakan Privasi</span>
            {" "}kami.
          </p>
        </div>
      </div>
    </div>
  );
}
