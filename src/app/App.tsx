import React, { useState, useRef, useEffect } from "react";
import { RouterProvider, useNavigate, useLocation, useParams, useRouteError, createBrowserRouter, Outlet } from "react-router";
import svgLoginPaths from "../imports/Register-4/svg-94u8bsjmpz";
import svgLowonganPaths from "../imports/LowonganPageJobList/svg-we7j378d6k";
import svgFilterPaths from "../imports/Filter-1/svg-doy4j2cmxe";
import svgDetailPaths from "../imports/LowonganDetail/svg-25afbh8kme";
import svgEditPaths from "../imports/EditLowongan/svg-i1uycnsjer";
import svgCandidatePaths from "../imports/Frame626639/svg-7zccrrmevh";
import imgCandidate from "../imports/Frame626639/fb0866f26f42d40c2ae9ca60a1f6f85a45c71cad.png";
import imgAvatar from "../imports/LowonganPageJobList/c6659080845fc664635625ec6b1f2bd6fc3a8f49.png";
import Lottie from "lottie-react";
import blueLoadingAnim from "../imports/blue_loading__1_.json";
import { Eye, EyeOff, ChevronDown, Paperclip, Info, Check, Upload, X, Search, ListFilter, MoreVertical, Pencil, Copy, Trash2, Calendar, ChevronLeft, ChevronRight, ArrowLeft, MapPin, Briefcase, Video, Download, ArrowRightLeft, User, LogOut, Building2, Settings, Italic, Underline, List, ListOrdered, AlignLeft, AlignCenter, AlignRight, AlignJustify, Link2, Clock } from "lucide-react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, isSameDay, isWithinInterval, addMonths, subMonths, isBefore } from "date-fns";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Step1Data {
  namaLengkap: string;
  email: string;
  password: string;
  konfirmasiPassword: string;
  nomorTelepon: string;
}

interface Step2Data {
  namaPerusahaan: string;
  deskripsi: string;
  industri: string;
  ukuranPerusahaan: string;
  kota: string;
  alamat: string;
  website: string;
}

interface Step3Data {
  jenisDokumen: string;
  file: File | null;
  agreed: boolean;
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function BriefcaseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M14 5H2C1.44772 5 1 5.44772 1 6V13C1 13.5523 1.44772 14 2 14H14C14.5523 14 15 13.5523 15 13V6C15 5.44772 14.5523 5 14 5Z M5 5V3C5 2.44772 5.44772 2 6 2H10C10.5523 2 11 2.44772 11 3V5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface SidebarStepProps {
  num: number;
  label: string;
  desc: string;
  active: boolean;
  completed: boolean;
}

function SidebarStep({ num, label, desc, active, completed }: SidebarStepProps) {
  const isHighlighted = active || completed;
  return (
    <div className="flex gap-4 items-start w-full">
      <div
        className={`flex items-center justify-center rounded-full w-8 h-8 shrink-0 font-bold text-sm transition-all duration-300 ${
          isHighlighted
            ? "bg-white text-[#0052ff]"
            : "border border-white/25 text-white/50"
        }`}
      >
        {completed && !active ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7L5.5 10.5L12 4" stroke="#0052ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          num
        )}
      </div>
      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
        <p
          className={`text-sm font-semibold transition-colors duration-300 ${
            isHighlighted ? "text-white" : "text-white/50"
          }`}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {label}
        </p>
        <p
          className={`text-xs transition-colors duration-300 ${
            isHighlighted ? "text-white/80" : "text-white/25"
          }`}
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

interface SidebarProps {
  currentStep: number;
}

function Sidebar({ currentStep }: SidebarProps) {
  const steps = [
    { label: "Akun & Keamanan", desc: "Data login dan keamanan akun" },
    { label: "Data Perusahaan", desc: "Informasi profil perusahaan" },
    { label: "Dokumen Legal", desc: "Verifikasi legalitas usaha" },
    { label: "Verifikasi Admin", desc: "Pengecekan data oleh tim" },
  ];

  return (
    <div
      className="relative self-stretch shrink-0 w-[320px]"
      style={{
        backgroundImage:
          "linear-gradient(134.33deg, rgb(0, 65, 204) 0%, rgb(0, 82, 255) 39.01%, rgb(14, 165, 233) 78.021%)",
      }}
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="flex flex-col items-start justify-between p-10 relative size-full">
          {/* Decorative circles */}
          <div className="absolute left-[116px] w-[292px] h-[292px] top-[-82px] pointer-events-none">
            <svg viewBox="0 0 292 292" fill="none" className="size-full">
              <circle cx="146" cy="146" r="146" fill="#D9D9D9" opacity="0.1" />
            </svg>
          </div>
          <div className="absolute left-[-110px] w-[292px] h-[292px] top-[760px] pointer-events-none">
            <svg viewBox="0 0 292 292" fill="none" className="size-full">
              <circle cx="146" cy="146" r="146" fill="#D9D9D9" opacity="0.1" />
            </svg>
          </div>

          {/* Top section */}
          <div className="flex flex-col gap-[185px] items-start w-full relative z-10">
            {/* Logo */}
            <div className="flex gap-3 items-center">
              <div className="bg-[#4361ee] flex items-center justify-center rounded-lg w-8 h-8">
                <BriefcaseIcon />
              </div>
              <p className="text-white text-xl font-bold" style={{ fontFamily: "Inter, sans-serif" }}>
                Perisaiku Talenta
              </p>
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-8 w-full">
              <p
                className="text-white text-[11px] font-bold uppercase tracking-wider"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Langkah Pendaftaran
              </p>
              <div className="flex flex-col gap-6 w-full">
                {steps.map((s, i) => (
                  <SidebarStep
                    key={i}
                    num={i + 1}
                    label={s.label}
                    desc={s.desc}
                    active={currentStep === i + 1}
                    completed={currentStep > i + 1}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom card */}
          <div className="relative rounded-xl w-full bg-white/10 border border-[#e6e6e7]/50">
            <div className="flex flex-col gap-3 items-start p-4">
              <p
                className="text-white text-sm font-semibold"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Kenapa perlu verifikasi?
              </p>
              <p
                className="text-white text-xs leading-4"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Verifikasi diperlukan untuk memastikan keamanan platform dan validitas
                perusahaan yang mendaftar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Shared UI ────────────────────────────────────────────────────────────────

function FieldLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <div className="flex items-center gap-0.5">
      <span
        className="text-[#4c4f59] text-xs"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        {children}
      </span>
      {required && (
        <span className="text-[#cc0e0e] text-[10px] font-semibold" style={{ fontFamily: "Open Sans, sans-serif" }}>
          *
        </span>
      )}
    </div>
  );
}

function TextInput({
  placeholder,
  value,
  onChange,
  type = "text",
  prefix,
  suffix,
  error,
}: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  error?: boolean;
}) {
  return (
    <div className={`relative bg-white border rounded-xl h-10 w-full transition-colors focus-within:border-[#0052ff] ${error ? "border-[#cc0e0e]" : "border-[#c5c6c9]"}`}>
      <div className="flex items-center h-full px-3 gap-2">
        {prefix && <span className="text-[#4c4f59] text-xs font-medium shrink-0" style={{ fontFamily: "DM Sans, sans-serif" }}>{prefix}</span>}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-xs text-[#4c4f59] placeholder-[#c5c6c9] min-w-0"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        />
        {suffix}
      </div>
    </div>
  );
}

function SelectInput({
  placeholder,
  value,
  onChange,
  options,
  error,
}: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  error?: boolean;
}) {
  return (
    <div className={`relative bg-white border rounded-xl h-10 w-full transition-colors focus-within:border-[#0052ff] ${error ? "border-[#cc0e0e]" : "border-[#c5c6c9]"}`}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none w-full h-full px-3 bg-transparent outline-none text-xs min-w-0 cursor-pointer"
        style={{
          fontFamily: "DM Sans, sans-serif",
          color: value ? "#4c4f59" : "#c5c6c9",
        }}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} style={{ color: "#4c4f59" }}>
            {o}
          </option>
        ))}
      </select>
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <ChevronDown size={14} className="text-[#606268]" />
      </div>
    </div>
  );
}

function TextareaInput({
  placeholder,
  value,
  onChange,
  rows = 4,
}: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
}) {
  return (
    <div className="relative bg-white border border-[#c5c6c9] rounded-xl w-full focus-within:border-[#0052ff] transition-colors">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full bg-transparent outline-none text-xs text-[#4c4f59] placeholder-[#c5c6c9] p-3 resize-none"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      />
    </div>
  );
}

// ─── Step Progress Bar ────────────────────────────────────────────────────────

function StepProgress({ step, total }: { step: number; total: number }) {
  const pct = (step / total) * 100;
  return (
    <div className="flex flex-col gap-2 w-full">
      <div
        className="bg-[#ebf2ff] flex items-center justify-center px-2.5 py-1 rounded-full self-start"
      >
        <p
          className="text-[#0052ff] text-xs font-medium"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          Langkah {step} dari {total}
        </p>
      </div>
      <div className="bg-[#f6f4f4] h-1 rounded-full w-full">
        <div
          className="bg-[#ff6b35] h-full rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

// ─── Password Strength ────────────────────────────────────────────────────────

function checkPasswordStrength(pw: string): number {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score;
}

const STRENGTH_CONFIG: Record<number, { bars: string[]; label: string; labelColor: string }> = {
  0: { bars: ["#f6f4f4", "#f6f4f4", "#f6f4f4", "#f6f4f4"], label: "", labelColor: "#777980" },
  1: { bars: ["#f83a1e", "#f6f4f4", "#f6f4f4", "#f6f4f4"], label: "Lemah", labelColor: "#777980" },
  2: { bars: ["#ffb40f", "#ffb40f", "#f6f4f4", "#f6f4f4"], label: "Cukup", labelColor: "#9b9ca1" },
  3: { bars: ["#6acd75", "#6acd75", "#6acd75", "#f6f4f4"], label: "Kuat", labelColor: "#9b9ca1" },
  4: { bars: ["#6acd75", "#6acd75", "#6acd75", "#6acd75"], label: "Sangat Kuat", labelColor: "#9b9ca1" },
};

function PasswordStrength({ password }: { password: string }) {
  if (!password) return (
    <div className="flex gap-2.5 w-full">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="h-1 flex-1 rounded-full bg-[#f6f4f4]" />
      ))}
    </div>
  );

  const score = checkPasswordStrength(password);
  const { bars, label, labelColor } = STRENGTH_CONFIG[score];

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex gap-2.5 w-full">
        {bars.map((color, i) => (
          <div
            key={i}
            className="h-1 flex-1 rounded-full transition-colors duration-300"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      {label && (
        <p
          className="text-xs leading-[18px]"
          style={{ fontFamily: "Open Sans, sans-serif", color: labelColor }}
        >
          {label}
        </p>
      )}
    </div>
  );
}

// ─── Error message component ──────────────────────────────────────────────────

function FieldError({ msg }: { msg: string | undefined }) {
  if (!msg) return null;
  return (
    <p className="text-[#cc0e0e] text-[11px] leading-4" style={{ fontFamily: "Open Sans, sans-serif" }}>
      {msg}
    </p>
  );
}

// ─── Step 1: Akun & Keamanan ──────────────────────────────────────────────────

interface Step1Props {
  data: Step1Data;
  setData: (d: Step1Data) => void;
  onNext: () => void;
}

type Step1Errors = Partial<Record<keyof Step1Data, string>>;

function validateStep1(data: Step1Data): Step1Errors {
  const e: Step1Errors = {};
  if (!data.namaLengkap.trim()) e.namaLengkap = "Nama lengkap PIC wajib diisi";
  if (!data.email.trim()) {
    e.email = "Email perusahaan wajib diisi";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    e.email = "Format email tidak valid";
  }
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
  if (!data.nomorTelepon.trim()) e.nomorTelepon = "Nomor telepon wajib diisi";
  return e;
}

function Step1Form({ data, setData, onNext }: Step1Props) {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errors, setErrors] = useState<Step1Errors>({});

  const handleNext = () => {
    const e = validateStep1(data);
    setErrors(e);
    if (Object.keys(e).length === 0) onNext();
  };

  const update = (patch: Partial<Step1Data>) => {
    setData({ ...data, ...patch });
    // clear errors for changed fields
    const cleared: Step1Errors = { ...errors };
    (Object.keys(patch) as (keyof Step1Data)[]).forEach((k) => delete cleared[k]);
    setErrors(cleared);
  };

  return (
    <div className="flex flex-col gap-8 w-[520px]">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <StepProgress step={1} total={3} />
        <div className="flex flex-col gap-2">
          <p className="text-[#4c4f59] text-[28px] font-bold leading-8" style={{ fontFamily: "DM Sans, sans-serif" }}>
            Buat akun employer
          </p>
          <p className="text-[#383b46] text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>
            Sudah punya akun?{" "}
            <a href="/login" className="text-[#0052ff] font-semibold">
              Masuk di sini
            </a>
          </p>
        </div>
      </div>

      {/* Fields */}
      <div className="flex flex-col gap-5 w-full">
        {/* Nama Lengkap PIC */}
        <div className="flex flex-col gap-1.5">
          <FieldLabel required>Nama lengkap PIC</FieldLabel>
          <TextInput
            placeholder="Nama PIC"
            value={data.namaLengkap}
            onChange={(v) => update({ namaLengkap: v })}
            error={!!errors.namaLengkap}
          />
          <FieldError msg={errors.namaLengkap} />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <FieldLabel required>Email akun anda</FieldLabel>
          <TextInput
            placeholder="john@email.com"
            value={data.email}
            onChange={(v) => update({ email: v })}
            type="email"
            error={!!errors.email}
          />
          <FieldError msg={errors.email} />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1.5">
          <FieldLabel required>Password</FieldLabel>
          <TextInput
            placeholder="Min. 8 Karakter"
            value={data.password}
            onChange={(v) => update({ password: v })}
            type={showPass ? "text" : "password"}
            error={!!errors.password}
            suffix={
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="text-[#606268] shrink-0"
              >
                {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            }
          />
          <PasswordStrength password={data.password} />
          <FieldError msg={errors.password} />
        </div>

        {/* Konfirmasi Password */}
        <div className="flex flex-col gap-1.5">
          <FieldLabel required>Konfirmasi Password</FieldLabel>
          <TextInput
            placeholder="Min. 8 Karakter"
            value={data.konfirmasiPassword}
            onChange={(v) => update({ konfirmasiPassword: v })}
            type={showConfirm ? "text" : "password"}
            error={!!errors.konfirmasiPassword}
            suffix={
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="text-[#606268] shrink-0"
              >
                {showConfirm ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            }
          />
          <FieldError msg={errors.konfirmasiPassword} />
        </div>

        {/* Nomor Telepon */}
        <div className="flex flex-col gap-1.5">
          <FieldLabel required>Nomor telepon</FieldLabel>
          <TextInput
            placeholder="812 3456 7890"
            value={data.nomorTelepon}
            onChange={(v) => update({ nomorTelepon: v })}
            type="tel"
            prefix="+62"
            error={!!errors.nomorTelepon}
          />
          <FieldError msg={errors.nomorTelepon} />
        </div>
      </div>

      {/* Button */}
      <button
        onClick={handleNext}
        className="h-12 rounded-full w-full text-white text-base font-bold bg-[#0052ff] hover:bg-[#0041cc] cursor-pointer transition-colors"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        Lanjut ke Data Perusahaan
      </button>
    </div>
  );
}

// ─── Step 2: Data Perusahaan ──────────────────────────────────────────────────

interface Step2Props {
  data: Step2Data;
  setData: (d: Step2Data) => void;
  onNext: () => void;
  onBack: () => void;
}

const industriOptions = [
  "Teknologi Informasi",
  "Keuangan & Perbankan",
  "Manufaktur",
  "Ritel & E-commerce",
  "Kesehatan",
  "Pendidikan",
  "Konstruksi & Properti",
  "Media & Hiburan",
  "Logistik & Transportasi",
  "Lainnya",
];

const ukuranOptions = [
  "1–10 karyawan",
  "11–50 karyawan",
  "51–200 karyawan",
  "201–500 karyawan",
  "501–1000 karyawan",
  "> 1000 karyawan",
];

const kotaOptions = [
  "Jakarta",
  "Surabaya",
  "Bandung",
  "Medan",
  "Semarang",
  "Makassar",
  "Yogyakarta",
  "Denpasar",
  "Palembang",
  "Lainnya",
];

type Step2Errors = Partial<Record<keyof Step2Data, string>>;

function validateStep2(data: Step2Data): Step2Errors {
  const e: Step2Errors = {};
  if (!data.namaPerusahaan.trim()) e.namaPerusahaan = "Nama perusahaan wajib diisi";
  if (!data.industri) e.industri = "Industri wajib dipilih";
  if (!data.ukuranPerusahaan) e.ukuranPerusahaan = "Ukuran perusahaan wajib dipilih";
  if (!data.kota) e.kota = "Kota wajib dipilih";
  return e;
}

function Step2Form({ data, setData, onNext, onBack }: Step2Props) {
  const [errors, setErrors] = useState<Step2Errors>({});

  const handleNext = () => {
    const e = validateStep2(data);
    setErrors(e);
    if (Object.keys(e).length === 0) onNext();
  };

  const update = (patch: Partial<Step2Data>) => {
    setData({ ...data, ...patch });
    const cleared = { ...errors };
    (Object.keys(patch) as (keyof Step2Data)[]).forEach((k) => delete cleared[k]);
    setErrors(cleared);
  };

  return (
    <div className="flex flex-col w-[520px] h-full">
      {/* Header — fixed, never scrolls */}
      <div className="flex flex-col gap-4 shrink-0 pt-10 pb-6">
        <StepProgress step={2} total={3} />
        <div className="flex flex-col gap-2">
          <p className="text-[#4c4f59] text-[28px] font-bold leading-8" style={{ fontFamily: "DM Sans, sans-serif" }}>
            Data perusahaan
          </p>
          <p className="text-[#64748b] text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>
            Informasi ini akan ditampilkan di Company Profile publik.
          </p>
        </div>
      </div>

      {/* Scrollable fields */}
      <div className="flex-1 overflow-y-auto min-h-0 pr-1" style={{ scrollbarWidth: "thin", scrollbarColor: "#c5c6c9 transparent" }}>
        <div className="flex flex-col gap-5 w-full pb-4">
          {/* Nama Perusahaan */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5 w-full">
              <span className="text-[#4c4f59] text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>Nama perusahaan</span>
              <span className="text-[#cc0e0e] text-[10px] font-semibold">*</span>
            </div>
            <TextInput
              placeholder="PT Maju Bersama"
              value={data.namaPerusahaan}
              onChange={(v) => update({ namaPerusahaan: v.slice(0, 100) })}
              error={!!errors.namaPerusahaan}
            />
            <div className="flex justify-between items-center">
              <FieldError msg={errors.namaPerusahaan} />
              <p className="text-[#777980] text-[10px] ml-auto" style={{ fontFamily: "Open Sans, sans-serif" }}>
                {data.namaPerusahaan.length} / 100
              </p>
            </div>
          </div>

          {/* Deskripsi */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-1.5">
              <span className="text-[#4c4f59] text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>Deskripsi singkat</span>
              <span className="text-[#9b9ca1] text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>(opsional)</span>
            </div>
            <TextareaInput
              placeholder="Ceritakan tentang perusahaan Anda, produk atau layanan yang ditawarkan..."
              value={data.deskripsi}
              onChange={(v) => update({ deskripsi: v })}
              rows={4}
            />
          </div>

          {/* Industri & Ukuran */}
          <div className="flex gap-4 w-full">
            <div className="flex flex-col gap-1.5 flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-[#4c4f59] text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>Industri</span>
                <span className="text-[#cc0e0e] text-[10px] font-semibold">*</span>
              </div>
              <SelectInput
                placeholder="Pilih industri"
                value={data.industri}
                onChange={(v) => update({ industri: v })}
                options={industriOptions}
                error={!!errors.industri}
              />
              <FieldError msg={errors.industri} />
            </div>
            <div className="flex flex-col gap-1.5 flex-1 min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-[#4c4f59] text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>Ukuran perusahaan</span>
                <span className="text-[#cc0e0e] text-[10px] font-semibold">*</span>
              </div>
              <SelectInput
                placeholder="Pilih ukuran"
                value={data.ukuranPerusahaan}
                onChange={(v) => update({ ukuranPerusahaan: v })}
                options={ukuranOptions}
                error={!!errors.ukuranPerusahaan}
              />
              <FieldError msg={errors.ukuranPerusahaan} />
            </div>
          </div>

          {/* Kota */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2.5">
              <span className="text-[#4c4f59] text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>Kota / lokasi kantor</span>
              <span className="text-[#cc0e0e] text-[10px] font-semibold">*</span>
            </div>
            <SelectInput
              placeholder="Pilih kota"
              value={data.kota}
              onChange={(v) => update({ kota: v })}
              options={kotaOptions}
              error={!!errors.kota}
            />
            <FieldError msg={errors.kota} />
          </div>

          {/* Alamat */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[#4c4f59] text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>Alamat lengkap</span>
            <TextareaInput
              placeholder="Jl. Sudirman No. 123, Jakarta Pusat 10220"
              value={data.alamat}
              onChange={(v) => update({ alamat: v })}
              rows={3}
            />
          </div>

          {/* Website */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[#4c4f59] text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>Website perusahaan</span>
            <TextInput
              placeholder="https://perusahaan.com"
              value={data.website}
              onChange={(v) => update({ website: v })}
              type="url"
            />
          </div>
        </div>
      </div>

      {/* Buttons — fixed at bottom, never scrolls */}
      <div className="flex gap-2.5 w-full shrink-0 pt-5 pb-10 bg-white">
        <button
          onClick={onBack}
          className="h-12 rounded-full px-6 border-2 border-[#0052ff] text-[#0052ff] text-base font-bold bg-white hover:bg-[#ebf2ff] transition-colors w-40 shrink-0"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          Kembali
        </button>
        <button
          onClick={handleNext}
          className="h-12 rounded-full flex-1 text-white text-base font-bold bg-[#0052ff] hover:bg-[#0041cc] cursor-pointer transition-colors"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          Lanjut ke Dokumen Legal
        </button>
      </div>
    </div>
  );
}

// ─── Step 3: Dokumen Legal ────────────────────────────────────────────────────

interface Step3Props {
  data: Step3Data;
  setData: (d: Step3Data) => void;
  onNext: () => void;
  onBack: () => void;
}

const dokumenOptions = ["NIB (Nomor Induk Berusaha)", "SIUP (Surat Izin Usaha Perdagangan)"];

interface Step3Errors {
  jenisDokumen?: string;
  file?: string;
  agreed?: string;
}

function validateStep3(data: Step3Data): Step3Errors {
  const e: Step3Errors = {};
  if (!data.jenisDokumen) e.jenisDokumen = "Jenis dokumen wajib dipilih";
  if (!data.file) e.file = "Dokumen wajib diunggah";
  if (!data.agreed) e.agreed = "Anda harus menyetujui syarat & ketentuan";
  return e;
}

function Step3Form({ data, setData, onNext, onBack }: Step3Props) {
  const [errors, setErrors] = useState<Step3Errors>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleNext = () => {
    const e = validateStep3(data);
    setErrors(e);
    if (Object.keys(e).length === 0) onNext();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) { setData({ ...data, file }); setErrors((prev) => ({ ...prev, file: undefined })); }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) { setData({ ...data, file }); setErrors((prev) => ({ ...prev, file: undefined })); }
  };

  return (
    <div className="flex flex-col gap-6 w-[520px]">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <StepProgress step={3} total={3} />
        <div className="flex flex-col gap-2">
          <p className="text-[#4c4f59] text-[28px] font-bold leading-8" style={{ fontFamily: "Inter, sans-serif" }}>
            Upload dokumen legal
          </p>
          <p className="text-[#6b7280] text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
            Satu dokumen sudah cukup - SIUP atau NIB yang masih berlaku.
          </p>
        </div>
      </div>

      {/* Jenis Dokumen */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5">
          <span className="text-[#4c4f59] text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>Jenis Dokumen</span>
          <span className="text-[#cc0e0e] text-[10px] font-semibold">*</span>
        </div>
        <SelectInput
          placeholder="Pilih Jenis dokumen NIB/SIUP"
          value={data.jenisDokumen}
          onChange={(v) => { setData({ ...data, jenisDokumen: v }); setErrors((prev) => ({ ...prev, jenisDokumen: undefined })); }}
          options={dokumenOptions}
          error={!!errors.jenisDokumen}
        />
        <FieldError msg={errors.jenisDokumen} />
      </div>

      {/* Upload Area */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2.5">
          <span className="text-[#4c4f59] text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>Upload Dokumen</span>
          <span className="text-[#cc0e0e] text-[10px] font-semibold">*</span>
        </div>

        {data.file ? (
          <div className="flex items-center gap-3 bg-[#ebf2ff] border border-[#0052ff]/30 rounded-lg p-4">
            <div className="bg-[#0052ff] rounded-lg p-2 shrink-0">
              <Upload size={16} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[#4c4f59] text-xs font-medium truncate" style={{ fontFamily: "DM Sans, sans-serif" }}>
                {data.file.name}
              </p>
              <p className="text-[#9b9ca1] text-[10px]" style={{ fontFamily: "DM Sans, sans-serif" }}>
                {(data.file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            <button
              onClick={() => setData({ ...data, file: null })}
              className="text-[#606268] hover:text-[#cc0e0e] shrink-0 transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <div
            className={`bg-[#f9fafb] border border-dashed rounded-lg h-40 flex flex-col items-center justify-center cursor-pointer hover:border-[#0052ff] hover:bg-[#f0f5ff] transition-colors ${errors.file ? "border-[#cc0e0e]" : "border-[#d1d5db]"}`}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="flex flex-col items-center gap-2 p-4">
              <Paperclip size={32} className="text-[#6b7280]" />
              <p className="text-[#111827] text-sm font-bold" style={{ fontFamily: "Inter, sans-serif" }}>
                Klik atau seret file ke sini
              </p>
              <p className="text-[#6b7280] text-xs text-center" style={{ fontFamily: "Inter, sans-serif" }}>
                PDF, PNG, atau JPEG · Maks. 5 MB
              </p>
            </div>
            <input ref={fileInputRef} type="file" accept=".pdf,.png,.jpg,.jpeg" className="hidden" onChange={handleFileChange} />
          </div>
        )}
        <FieldError msg={errors.file} />
      </div>

      {/* Info Card */}
      <div className="bg-[#ebf2ff] rounded-lg">
        <div className="flex gap-3 items-start p-4">
          <div className="bg-[#dbeafe] flex items-center justify-center rounded-full w-8 h-8 shrink-0">
            <Info size={18} className="text-[#1d4ed8]" />
          </div>
          <div className="flex flex-col gap-1.5 flex-1">
            <p className="text-[#0044d2] text-sm font-bold" style={{ fontFamily: "Inter, sans-serif" }}>
              Yang terjadi selanjutnya
            </p>
            <p className="text-[#383b46] text-[13px] leading-[18px]" style={{ fontFamily: "Inter, sans-serif" }}>
              Tim verifikasi Perisaku akan meninjau dokumen Anda dalam{" "}
              <span className="font-bold">1×24 jam</span>. Setelah terverifikasi, akun
              Anda aktif dan Anda bisa langsung memasang lowongan.
            </p>
          </div>
        </div>
      </div>

      {/* Checkbox */}
      <div className="flex flex-col gap-1.5">
        <div className="flex gap-3 items-start">
          <button
            type="button"
            onClick={() => { setData({ ...data, agreed: !data.agreed }); setErrors((prev) => ({ ...prev, agreed: undefined })); }}
            className={`flex items-center justify-center w-4 h-4 rounded border shrink-0 mt-0.5 transition-colors ${
              data.agreed ? "bg-[#0052ff] border-[#0052ff]" : errors.agreed ? "bg-white border-[#cc0e0e]" : "bg-white border-[#d1d5db]"
            }`}
          >
            {data.agreed && <Check size={10} className="text-white" strokeWidth={3} />}
          </button>
          <p className="text-[#111827] text-xs leading-4 flex-1" style={{ fontFamily: "Inter, sans-serif" }}>
            Saya menyatakan bahwa informasi dan dokumen yang diberikan adalah benar. Saya
            menyetujui{" "}
            <span className="text-[#1d4ed8] font-semibold cursor-pointer">Syarat &amp; Ketentuan</span>{" "}
            serta{" "}
            <span className="text-[#1d4ed8] font-semibold cursor-pointer">Kebijakan Privasi Perisaku Talenta</span>.
          </p>
        </div>
        <FieldError msg={errors.agreed} />
      </div>

      {/* Buttons */}
      <div className="flex gap-2.5 w-full">
        <button
          onClick={onBack}
          className="h-12 rounded-full px-6 border-2 border-[#0052ff] text-[#0052ff] text-base font-bold bg-white hover:bg-[#ebf2ff] transition-colors w-40 shrink-0"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          Kembali
        </button>
        <button
          onClick={handleNext}
          className="h-12 rounded-full flex-1 text-white text-base font-bold bg-[#0052ff] hover:bg-[#0041cc] cursor-pointer transition-colors"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          Kirim &amp; Daftar Sekarang
        </button>
      </div>
    </div>
  );
}

/// ─── Step 4: Verifikasi Admin ─────────────────────────────────────────────────

type VerifState = "waiting" | "success" | "failed";

function Step4Screen({ onDashboard }: { onDashboard?: () => void }) {
  const navigate = useNavigate();
  const [verifState, setVerifState] = useState<VerifState>("waiting");

  return (
    <div className="flex flex-col items-center gap-5 w-[520px]">
      {/* Demo state switcher */}
      <div className="flex items-center gap-1 bg-black/5 rounded-full p-1">
        {(["waiting", "success", "failed"] as VerifState[]).map((s) => (
          <button
            key={s}
            onClick={() => setVerifState(s)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
              verifState === s
                ? "bg-white text-[#4c4f59] shadow-sm"
                : "text-[#9b9ca1] hover:text-[#4c4f59]"
            }`}
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            {s === "waiting" ? "Menunggu" : s === "success" ? "Berhasil" : "Ditolak"}
          </button>
        ))}
      </div>

      {/* Waiting state */}
      {verifState === "waiting" && (
        <div className="bg-white rounded-3xl shadow-[0px_18px_20px_rgba(0,0,0,0.08)] flex flex-col items-center p-10 w-full border border-white/50">
          <div className="w-[230px] h-[230px] mb-5 flex items-center justify-center bg-white rounded-xl">
            <Lottie animationData={blueLoadingAnim} loop className="w-full h-full" />
          </div>
          <div className="flex flex-col gap-2 items-center text-center w-full">
            <p className="text-[#4c4f59] text-base font-bold" style={{ fontFamily: "DM Sans, sans-serif", fontFeatureSettings: '"lnum","tnum"' }}>
              Akun Sedang Diverifikasi
            </p>
            <p className="text-[#383b46] text-sm leading-5" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Akun Anda sedang dalam proses verifikasi oleh admin. Proses ini membutuhkan waktu
              1×24 jam. Silakan masuk kembali untuk melihat hasilnya.
            </p>
          </div>
        </div>
      )}

      {/* Success state */}
      {verifState === "success" && (
        <div className="bg-[#f9f9f9] rounded-3xl shadow-[0px_18px_20px_rgba(0,0,0,0.08)] flex flex-col items-center p-10 w-full">
          <div className="flex flex-col gap-8 items-start w-full">
            {/* Hero */}
            <div className="flex flex-col gap-5 items-center w-full">
              {/* Illustration */}
              <div className="bg-[rgba(16,185,129,0.06)] flex items-center justify-center rounded-3xl w-20 h-20">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M6 16L13 23L26 10" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* Text */}
              <div className="flex flex-col gap-2 items-center text-center w-full">
                <p className="text-[#4c4f59] text-base font-bold w-full" style={{ fontFamily: "DM Sans, sans-serif", fontFeatureSettings: '"lnum","tnum"' }}>
                  Akun Anda Telah Terverifikasi!
                </p>
                <p className="text-[#383b46] text-sm leading-5 w-full" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  Dokumen legal Anda telah disetujui. Selamat datang di Perisaku!
                </p>
              </div>
            </div>
            {/* CTA */}
            <button onClick={() => { if (onDashboard) onDashboard(); else navigate("/dashboard"); }} className="bg-[#0052ff] flex items-center justify-center gap-2 py-4 rounded-xl w-full hover:bg-[#0041cc] transition-colors cursor-pointer">
              <span className="text-white text-sm font-semibold" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Masuk ke Dashboard
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Failed state */}
      {verifState === "failed" && (
        <div className="bg-white rounded-3xl shadow-[0px_18px_20px_rgba(0,0,0,0.08)] flex flex-col items-center p-10 w-full">
          <div className="flex flex-col gap-5 items-center w-full">
            {/* Illustration */}
            <div className="bg-[rgba(239,68,68,0.06)] flex items-center justify-center rounded-3xl w-20 h-20">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M24 8L8 24M8 8L24 24" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>

            {/* Title + InfoCard */}
            <div className="flex flex-col gap-2 items-center w-full">
              <p className="text-[#4c4f59] text-base font-bold text-center" style={{ fontFamily: "DM Sans, sans-serif", fontFeatureSettings: '"lnum","tnum"' }}>
                Pendaftaran Anda Ditolak
              </p>
              {/* Info card */}
              <div className="bg-white border border-[#e6e6e7] rounded-2xl p-5 flex flex-col gap-5 w-full mt-1">
                {/* Alasan */}
                <div className="flex flex-col gap-2">
                  <p className="text-[#f83a1e] text-sm font-semibold leading-5" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    Alasan Penolakan:
                  </p>
                  <p className="text-[#4c4f59] text-sm leading-5" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    SIUP yang diunggah sudah kedaluwarsa. Harap unggah dokumen yang masih berlaku sesuai dengan data perusahaan.
                  </p>
                </div>
                {/* Divider */}
                <div className="w-full border-t border-dashed border-[#c5c6c9]" />
                {/* Langkah */}
                <div className="flex flex-col gap-2">
                  <p className="text-[#4c4f59] text-sm font-semibold leading-5" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    Langkah Perbaikan:
                  </p>
                  <p className="text-[#383b46] text-sm leading-5" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    1. Siapkan dokumen yang masih berlaku (SIUP/NIB)<br />
                    2. Unggah ulang melalui halaman dokumen<br />
                    3. Tim kami akan meninjau ulang dalam 1×24 jam
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="bg-[#0052ff] flex items-center justify-center gap-2 py-4 rounded-xl w-full hover:bg-[#0041cc] transition-colors cursor-pointer">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-white text-sm font-semibold" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Perbaiki
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────


function useCountUp(target: number, duration = 1400) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTs: number | null = null;
    const tick = (ts: number) => {
      if (!startTs) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration]);
  return count;
}

const kpiCards = [
  { label: "Lowongan Aktif", value: 24, suffix: "" },
  { label: "Lowongan Belum Diproses", value: 127, suffix: "" },
  { label: "Total Pelamar", value: 1482, suffix: "" },
  { label: "Waktu Hiring Rata-rata", value: 18, suffix: " Hari" },
];

function KpiCard({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const count = useCountUp(value);
  return (
    <div className="bg-white flex-1 min-w-0 rounded-2xl border border-[#e6e6e7] shadow-[0px_4px_6px_rgba(0,0,0,0.02)] p-6 flex flex-col gap-3">
      <p className="text-[#777980] text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>{label}</p>
      <p className="text-[#0052ff] text-[21px] font-bold leading-[26px]" style={{ fontFamily: "DM Sans, sans-serif" }}>
        {count.toLocaleString("id-ID")}{suffix}
      </p>
    </div>
  );
}

const funnelBars = [
  { label: "Melamar", height: 180, color: "#0052ff", count: 180 },
  { label: "Penyaringan", height: 150, color: "#4e86ff", count: 150 },
  { label: "Wawancara", height: 80, color: "#85acff", count: 80 },
  { label: "Ditawarkan", height: 40, color: "#bbd1ff", count: 40 },
  { label: "Diterima", height: 24, color: "#e6efff", count: 24 },
  { label: "Ditolak", height: 32, color: "#f83a1e", count: 80 },
];

function FunnelChart() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);
  const maxH = 180;

  return (
    <div className="flex items-end justify-between flex-1 min-h-0 w-full" style={{ height: 210 }}>
      {funnelBars.map((b) => (
        <div key={b.label} className="flex flex-col items-center gap-3 w-[80px]">
          <div className="flex items-end" style={{ height: maxH }}>
            <div
              className="relative w-12 transition-all duration-700 ease-out"
              style={{ height: mounted ? b.height : 0 }}
            >
              <span
                className="absolute -top-5 left-1/2 -translate-x-1/2 text-[11px] font-medium whitespace-nowrap transition-opacity duration-500"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  color: b.label === "Ditolak" ? "#f83a1e" : "#0052ff",
                  opacity: mounted ? 1 : 0,
                }}
              >
                {b.count}
              </span>
              <div
                className="w-12 h-full rounded-t-md"
                style={{ backgroundColor: b.color }}
              />
            </div>
          </div>
          <p className="text-[#64748b] text-xs text-center whitespace-nowrap" style={{ fontFamily: "Inter, sans-serif" }}>{b.label}</p>
        </div>
      ))}
    </div>
  );
}

const popularJobs = [
  { rank: 1, title: "Backend Engineer", date: "12/01/2026", pct: 0.72, count: 34, closes: "5 hari lagi" },
  { rank: 2, title: "Product Designer", date: "12/01/2026", pct: 0.72, count: 27, closes: "12 hari lagi" },
  { rank: 3, title: "Sales Executive", date: "12/01/2026", pct: 0.72, count: 19, closes: "3 hari lagi" },
  { rank: 4, title: "Data Analyst", date: "12 Jan '26", pct: 0.81, count: 12, closes: "18 hari lagi" },
  { rank: 5, title: "Product Manager", date: "12/01/2026", pct: 0.54, count: 8, closes: "9 hari lagi" },
];

function PopularJobRow({ job, mounted }: { job: typeof popularJobs[0]; mounted: boolean }) {
  return (
    <div className="flex gap-3 items-center py-1.5 w-full">
      <span className="text-[#6b7280] text-[13px] w-6 shrink-0" style={{ fontFamily: "DM Sans, sans-serif" }}>{job.rank}</span>
      <div className="flex flex-col gap-1 shrink-0 w-[130px]">
        <p className="text-sm font-medium text-black" style={{ fontFamily: "DM Sans, sans-serif" }}>{job.title}</p>
        <p className="text-[#6b7280] text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>Dibuat pada {job.date}</p>
      </div>
      <div className="flex-1 min-w-0 bg-[rgba(0,82,255,0.1)] h-2 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#ff6b35] rounded-full transition-all duration-700 ease-out"
          style={{ width: mounted ? `${job.pct * 100}%` : "0%" }}
        />
      </div>
      <div className="flex flex-col gap-0.5 items-end shrink-0 w-24">
        <div className="flex items-center gap-1.5">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M7 3.5C7 4.88 6.1 6 5 6C3.9 6 3 4.88 3 3.5C3 2.12 3.9 1 5 1C6.1 1 7 2.12 7 3.5ZM1 9C1 7.34 2.79 6 5 6C7.21 6 9 7.34 9 9" stroke="#383B46" strokeWidth="1.25" strokeLinecap="round" />
          </svg>
          <span className="text-[#383b46] text-sm font-bold" style={{ fontFamily: "DM Sans, sans-serif" }}>{job.count}</span>
        </div>
        <p className="text-[#6b7280] text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>Tutup {job.closes}</p>
      </div>
    </div>
  );
}

const statusBadge: Record<string, { bg: string; text: string; label: string }> = {
  Penyaringan: { bg: "#dbeafe", text: "#1e40af", label: "Penyaringan" },
  Wawancara: { bg: "#fef3c7", text: "#92400e", label: "Wawancara" },
  Ditawarkan: { bg: "#d1fae5", text: "#065f46", label: "Ditawarkan" },
  Ditolak: { bg: "#fee2e2", text: "#991b1b", label: "Ditolak" },
};

const recentApplicants = [
  { name: "Ananda Putri", role: "Manajer Produk Senior", date: "12 Okt 2023", status: "Penyaringan" },
  { name: "Rizky Pratama", role: "Insinyur Backend", date: "11 Okt 2023", status: "Wawancara" },
  { name: "Dewi Lestari", role: "Direktur Kreatif", date: "10 Okt 2023", status: "Ditawarkan" },
  { name: "Bambang Wijaya", role: "Pengembang Full Stack", date: "09 Okt 2023", status: "Ditolak" },
];

const interviews = [
  { name: "Aditya Wirawan", role: "Desainer UI/UX", time: "10:00 AM", date: "1 Jul '26" },
  { name: "Siti Aminah", role: "Insinyur DevOps", time: "02:30 PM", date: "1 Jul '26" },
  { name: "Fajar Ramadhan", role: "Pemimpin Penjualan", time: "04:00 PM", date: "1 Jul '26" },
];

function TopBarUserMenu() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen(v => !v)} className="flex items-center gap-3">
        <div className="text-right">
          <p className="text-sm font-semibold text-black" style={{ fontFamily: "DM Sans, sans-serif" }}>Budi Santoso</p>
          <p className="text-[11px] text-[#64748b]" style={{ fontFamily: "Inter, sans-serif" }}>Manajer HR</p>
        </div>
        <div className="relative rounded-full shrink-0 size-10 overflow-hidden">
          <img alt="avatar" className="absolute inset-0 size-full object-cover" src={imgAvatar} />
        </div>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute z-50 top-[calc(100%+8px)] right-0 bg-white border border-[#e6e6e7] rounded-2xl shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] w-[240px] overflow-hidden">
            <div className="flex flex-col px-4 pt-4 pb-3">
              <p className="text-[14px] font-semibold text-[#4c4f59]" style={{ fontFamily: "Inter, sans-serif" }}>Budi Santoso</p>
              <p className="text-[12px] text-[#4c4f59]" style={{ fontFamily: "Inter, sans-serif" }}>budi.santoso@gmail.com</p>
              <p className="text-[10px] text-[#9b9ca1]" style={{ fontFamily: "Inter, sans-serif" }}>Manajer HR</p>
            </div>
            <div className="h-px bg-[#e6e6e7] w-full" />
            <button
              onClick={() => { setOpen(false); navigate("/profile"); }}
              className="flex items-center gap-3 px-4 py-2.5 w-full hover:bg-gray-50 transition-colors text-left"
            >
              <User size={20} className="text-[#383b46]" />
              <span className="flex-1 text-[16px] text-[#383b46]" style={{ fontFamily: "Inter, sans-serif" }}>Profile</span>
            </button>
            <div className="h-px bg-[#e6e6e7] w-full" />
            <button
              onClick={() => { setOpen(false); navigate("/login"); }}
              className="flex items-center gap-3 px-4 py-3.5 w-full hover:bg-gray-50 transition-colors text-left"
            >
              <LogOut size={20} className="text-[#c55d53]" />
              <span className="flex-1 text-[16px] text-[#c55d53]" style={{ fontFamily: "Inter, sans-serif" }}>Keluar</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function SidebarLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-[#0052ff] w-8 h-8 rounded-lg flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path d="M10 2l8 4v5c0 4-3.5 7-8 8C5.5 18 2 15 2 11V6l8-4z" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <span className="text-[#0052ff] text-lg font-bold" style={{ fontFamily: "DM Sans, sans-serif" }}>Perisaiku Talenta</span>
    </div>
  );
}

function ProfileSidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="bg-white w-[260px] shrink-0 h-full flex flex-col gap-8 p-6 border-r border-[#e6e6e7]">
      <SidebarLogo />
      <div className="flex flex-col gap-2 w-full">
        {SETTINGS_NAV.map(item => {
          const isActive = pathname === item.path;
          const Icon = item.icon;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-semibold transition-colors text-left ${isActive ? "bg-[#ebf2ff] text-[#0044d2]" : "text-[#383b46] hover:bg-gray-50"}`}
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              <Icon size={20} className={isActive ? "text-[#0052ff]" : "text-[#64748b]"} />
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function DashboardSidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [candidateOpen, setCandidateOpen] = useState(
    pathname === "/pipeline" || pathname === "/list-kandidat"
  );

  const SidebarIcon = ({ d }: { d: string }) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d={d} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  const dashboardD = "M3 3h6v6H3zM11 3h6v6h-6zM3 11h6v6H3zM11 11h6v6h-6z";
  const lowonganD  = "M13 2H7a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7l-4-5zm-1 0v5h5";
  const usersD     = "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75";
  const chartD     = "M18 20V10M12 20V4M6 20v-6";

  const navBtn = (path: string, label: string, d: string, indent = false) => {
    const isActive = pathname === path;
    return (
      <button
        key={path}
        onClick={() => navigate(path)}
        className={`flex items-center gap-3 w-full rounded-lg text-sm font-semibold transition-colors text-left ${
          isActive ? "bg-[#ebf2ff] text-[#0044d2]" : "text-[#383b46] hover:bg-gray-50"
        } ${indent ? "pl-10 py-2 px-4" : "px-4 py-3"}`}
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        {!indent && (
          <span className={isActive ? "text-[#0052ff]" : "text-[#64748b]"}>
            <SidebarIcon d={d} />
          </span>
        )}
        {indent && <span className="w-5" />}
        {label}
      </button>
    );
  };

  const candidateActive = pathname === "/pipeline" || pathname === "/list-kandidat";

  return (
    <div className="bg-white w-[260px] shrink-0 h-full flex flex-col gap-8 p-6 border-r border-[#e6e6e7]">
      <SidebarLogo />

      {/* Nav */}
      <div className="flex flex-col gap-2 w-full">
        {navBtn("/dashboard", "Dashboard", dashboardD)}
        {navBtn("/lowongan", "Lowongan", lowonganD)}

        {/* Manajemen Kandidat w/ submenu */}
        <div>
          <button
            onClick={() => setCandidateOpen((o) => !o)}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
              candidateActive ? "text-[#0052ff]" : "text-[#383b46] hover:bg-gray-50"
            }`}
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            <span className={candidateActive ? "text-[#0052ff]" : "text-[#64748b]"}>
              <SidebarIcon d={usersD} />
            </span>
            <span className="flex-1 text-left">Manajemen Kandidat</span>
            <svg
              width="14" height="14" viewBox="0 0 14 14" fill="none"
              className={`transition-transform duration-200 ${candidateOpen ? "rotate-180" : ""}`}
            >
              <path d="M2 4l5 5 5-5" stroke={candidateActive ? "#0052ff" : "#606268"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {candidateOpen && (
            <div className="flex flex-col">
              {navBtn("/pipeline", "Pipeline", usersD, true)}
              {navBtn("/list-kandidat", "List Kandidat", usersD, true)}
            </div>
          )}
        </div>

        {navBtn("/analitik", "Analitik", chartD)}
      </div>
    </div>
  );
}

function DashboardContent() {
  const navigate = useNavigate();
  const [barMounted, setBarMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setBarMounted(true), 100); return () => clearTimeout(t); }, []);

  return (
    <div className="flex-1 min-w-0 h-full overflow-y-auto bg-[#f9f9f9]">
      {/* Top bar */}
      <div className="bg-white border-b border-[#e6e6e7] px-10 py-5 flex items-center justify-end">
        <div className="flex items-center gap-4">
          <button className="border border-[#e6e6e7] rounded-full p-2.5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2a6 6 0 016 6c0 3.5 1.5 5 1.5 5H2.5S4 11.5 4 8a6 6 0 016-6zM8 16a2 2 0 004 0" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <TopBarUserMenu />
        </div>
      </div>

      <div className="flex flex-col gap-8 pb-10">
        {/* Page title row */}
        <div className="flex items-center justify-between px-10 pt-8">
          <div>
            <p className="text-[#383b46] text-[28px] font-bold leading-8" style={{ fontFamily: "DM Sans, sans-serif" }}>Dashboard</p>
            <p className="text-[#64748b] text-sm mt-1" style={{ fontFamily: "DM Sans, sans-serif" }}>Selamat datang kembali, inilah yang terjadi hari ini.</p>
          </div>
          <div className="flex gap-3">
            <button className="h-12 px-6 rounded-full border-[1.5px] border-[#0052ff] text-[#0052ff] font-bold bg-white hover:bg-[#ebf2ff] transition-colors text-base" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Lihat Pelamar
            </button>
            <button onClick={() => navigate("/post-job")} className="h-12 px-6 rounded-full bg-[#0052ff] text-white font-bold hover:bg-[#0041cc] transition-colors text-base" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Post Job
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="flex gap-6 px-10">
          {kpiCards.map((c) => <KpiCard key={c.label} {...c} />)}
        </div>

        {/* Charts row */}
        <div className="flex gap-6 px-10" style={{ height: 360 }}>
          {/* Funnel card */}
          <div className="bg-white flex-1 min-w-0 rounded-2xl border border-[#e6e6e7] shadow-[0px_4px_6px_rgba(0,0,0,0.02)] p-6 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#4c4f59] text-base font-bold" style={{ fontFamily: "DM Sans, sans-serif" }}>Status Kandidat</p>
                <p className="text-[#777980] text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>Kondisi terkini, semua lowongan</p>
              </div>
              <span className="text-[#0052ff] text-sm font-semibold cursor-pointer" style={{ fontFamily: "Inter, sans-serif" }}>Lihat lebih lengkap</span>
            </div>
            <div className="w-full h-px bg-[#e5e7eb]" />
            <FunnelChart />
          </div>

          {/* Popular jobs card */}
          <div className="bg-white flex-1 min-w-0 rounded-2xl border border-[#e6e6e7] shadow-[0px_4px_6px_rgba(0,0,0,0.02)] p-6 flex flex-col gap-5 overflow-hidden">
            <div>
              <p className="text-[#4c4f59] text-base font-bold" style={{ fontFamily: "DM Sans, sans-serif" }}>Lowongan Populer</p>
              <p className="text-[#777980] text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>Sejak lowongan dibuka</p>
            </div>
            <div className="w-full h-px bg-[#e5e7eb]" />
            <div className="flex flex-col gap-1 flex-1 overflow-hidden">
              {popularJobs.map((job, i) => (
                <div key={job.rank}>
                  <PopularJobRow job={job} mounted={barMounted} />
                  {i < popularJobs.length - 1 && <div className="w-full h-px bg-[#e5e7eb]" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Table + interviews row */}
        <div className="flex gap-2.5 px-10">
          {/* Recent applicants table */}
          <div className="bg-white flex-1 min-w-0 rounded-2xl border border-[#e6e6e7] shadow-[0px_4px_6px_rgba(0,0,0,0.02)] p-6 flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <p className="text-[#383b46] text-base font-bold" style={{ fontFamily: "DM Sans, sans-serif" }}>Pelamar Terbaru</p>
              <span className="text-[#0052ff] text-sm font-semibold cursor-pointer" style={{ fontFamily: "Inter, sans-serif" }}>Lihat Semua</span>
            </div>
            {/* Table header */}
            <div className="flex items-center py-3 border-b border-[#e6e6e7]">
              <p className="text-[#4c4f59] text-xs font-bold w-44" style={{ fontFamily: "DM Sans, sans-serif" }}>NAMA KANDIDAT</p>
              <p className="text-[#4c4f59] text-xs font-bold flex-1" style={{ fontFamily: "DM Sans, sans-serif" }}>PERAN YANG DILAMAR</p>
              <p className="text-[#4c4f59] text-xs font-bold w-36" style={{ fontFamily: "DM Sans, sans-serif" }}>TANGGAL MELAMAR</p>
              <p className="text-[#4c4f59] text-xs font-bold w-36" style={{ fontFamily: "DM Sans, sans-serif" }}>STATUS</p>
            </div>
            {recentApplicants.map((a) => {
              const badge = statusBadge[a.status];
              return (
                <div key={a.name} className="flex items-center py-4 border-b border-[#e6e6e7]">
                  <div className="flex items-center gap-3 w-44">
                    <div className="w-10 h-10 rounded-lg bg-[#ebf2ff] flex items-center justify-center text-[#0052ff] font-bold text-sm shrink-0">
                      {a.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </div>
                    <p className="text-[#4c4f59] text-sm font-semibold whitespace-nowrap" style={{ fontFamily: "DM Sans, sans-serif" }}>{a.name}</p>
                  </div>
                  <p className="text-[#4c4f59] text-sm flex-1" style={{ fontFamily: "DM Sans, sans-serif" }}>{a.role}</p>
                  <p className="text-[#4c4f59] text-sm w-36" style={{ fontFamily: "DM Sans, sans-serif" }}>{a.date}</p>
                  <div className="w-36">
                    <span className="px-2 py-1 rounded-full text-[11px] font-semibold" style={{ backgroundColor: badge.bg, color: badge.text, fontFamily: "DM Sans, sans-serif" }}>
                      {badge.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Upcoming interviews */}
          <div className="bg-white w-[360px] shrink-0 rounded-2xl border border-[#e6e6e7] shadow-[0px_4px_6px_rgba(0,0,0,0.02)] p-6 flex flex-col gap-5">
            <p className="text-[#383b46] text-base font-bold" style={{ fontFamily: "DM Sans, sans-serif" }}>Wawancara Mendatang</p>
            <div className="flex flex-col gap-5">
              {interviews.map((iv) => (
                <div key={iv.name} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#f3f4f6] flex items-center justify-center text-[#383b46] font-bold text-sm shrink-0">
                    {iv.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-black" style={{ fontFamily: "Inter, sans-serif" }}>{iv.name}</p>
                    <p className="text-[#64748b] text-xs" style={{ fontFamily: "Inter, sans-serif" }}>{iv.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#0052ff] text-xs font-bold" style={{ fontFamily: "Inter, sans-serif" }}>{iv.time}</p>
                    <p className="text-[#777980] text-[9px]" style={{ fontFamily: "Inter, sans-serif" }}>{iv.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Lowongan Page ────────────────────────────────────────────────────────────

type JobStatus = "Diterbitkan" | "Tutup" | "Draf";

const jobStatusStyle: Record<JobStatus, { bg: string; text: string; w?: string }> = {
  Diterbitkan: { bg: "#d1fae5", text: "#065f46" },
  Tutup:       { bg: "#fee2e2", text: "#991b1b", w: "79px" },
  Draf:        { bg: "#f6f4f4", text: "#4c4f59", w: "79px" },
};

const jobRows: { id: string; nama: string; kategori: string; lokasi: string; setting: string; pelamar: number; kuota: string; tutup: string; status: JobStatus }[] = [
  { id: "JOB-20", nama: "Product Designer",     kategori: "Designer",          lokasi: "Jakarta",    setting: "On-site", pelamar: 34, kuota: "3/10",  tutup: "2 Jan '26", status: "Diterbitkan" },
  { id: "JOB-19", nama: "BE Engineer",           kategori: "Software Engineer", lokasi: "Medan",      setting: "Remote",  pelamar: 34, kuota: "0/10",  tutup: "2 Jan '26", status: "Diterbitkan" },
  { id: "JOB-18", nama: "FE Engineer",           kategori: "Software Engineer", lokasi: "Jakarta",    setting: "Hybrid",  pelamar: 34, kuota: "9/10",  tutup: "2 Jan '26", status: "Tutup" },
  { id: "JOB-17", nama: "QA Engineer",           kategori: "Software Engineer", lokasi: "Jakarta",    setting: "Hybrid",  pelamar: 34, kuota: "10/10", tutup: "2 Jan '26", status: "Draf" },
  { id: "JOB-16", nama: "Data Analyst",          kategori: "Analyst",           lokasi: "Bandung",    setting: "On-site", pelamar: 34, kuota: "4/10",  tutup: "3 Jan '26", status: "Diterbitkan" },
  { id: "JOB-15", nama: "UI/UX Designer",        kategori: "Designer",          lokasi: "Yogyakarta", setting: "Remote",  pelamar: 34, kuota: "2/10",  tutup: "3 Jan '26", status: "Tutup" },
  { id: "JOB-14", nama: "System Administrator",  kategori: "IT Support",        lokasi: "Surabaya",   setting: "Hybrid",  pelamar: 34, kuota: "1/10",  tutup: "3 Jan '26", status: "Draf" },
  { id: "JOB-13", nama: "Marketing Specialist",  kategori: "Marketing",         lokasi: "Bali",       setting: "On-site", pelamar: 34, kuota: "5/10",  tutup: "3 Jan '26", status: "Draf" },
  { id: "JOB-12", nama: "Content Writer",        kategori: "Writer",            lokasi: "Jakarta",    setting: "Remote",  pelamar: 34, kuota: "7/10",  tutup: "3 Jan '26", status: "Diterbitkan" },
  { id: "JOB-11", nama: "DevOps Engineer",       kategori: "Engineer",          lokasi: "Jakarta",    setting: "Hybrid",  pelamar: 34, kuota: "3/10",  tutup: "3 Jan '26", status: "Tutup" },
  { id: "JOB-10", nama: "Sales Executive",       kategori: "Sales",             lokasi: "Tangerang",  setting: "On-site", pelamar: 34, kuota: "6/10",  tutup: "4 Jan '26", status: "Diterbitkan" },
  { id: "JOB-09", nama: "Graphic Designer",      kategori: "Designer",          lokasi: "Semarang",   setting: "Remote",  pelamar: 34, kuota: "8/10",  tutup: "4 Jan '26", status: "Diterbitkan" },
  { id: "JOB-08", nama: "Network Engineer",      kategori: "IT Support",        lokasi: "Surabaya",   setting: "Hybrid",  pelamar: 34, kuota: "3/10",  tutup: "4 Jan '26", status: "Tutup" },
  { id: "JOB-07", nama: "HR Manager",            kategori: "HR",                lokasi: "Jakarta",    setting: "Remote",  pelamar: 34, kuota: "4/10",  tutup: "4 Jan '26", status: "Draf" },
];

function DeleteConfirmModal({ onConfirm, onClose }: { onConfirm: () => void; onClose: () => void }) {
  return (
    <InfoModal
      title="Hapus Lowongan"
      onClose={onClose}
      footer={
        <div className="flex items-center justify-end gap-3 w-full">
          <button onClick={onClose} className="px-5 py-2 rounded-full border-[1.5px] border-[#c5c6c9] text-[#4c4f59] font-bold text-[14px] hover:bg-gray-50 transition-colors" style={{ fontFamily: "DM Sans, sans-serif" }}>Batal</button>
          <button onClick={onConfirm} className="bg-[#f83a1e] h-10 px-4 rounded-full text-white font-bold text-[14px] hover:bg-[#d92e14] transition-colors" style={{ fontFamily: "DM Sans, sans-serif" }}>Hapus Lowongan</button>
        </div>
      }
    >
      Apakah anda yakin ingin menghapus lowongan ini?
    </InfoModal>
  );
}

function LowonganActionIcons({ status, jobId }: { status: JobStatus; jobId: string }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isDraf = status === "Draf";

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const menuItems: { label: string; icon: React.ReactNode; onClick?: () => void }[] = [
    ...(status === "Diterbitkan" ? [{ label: "Edit Lowongan", icon: <Pencil size={14} className="text-[#606268]" />, onClick: () => navigate(`/edit-job/${jobId}`) }] : []),
    { label: "Duplicate Lowongan", icon: <Copy size={14} className="text-[#606268]" />, onClick: () => navigate(`/duplicate-job/${jobId}`) },
  ];

  return (
    <div ref={ref} className="flex gap-1.5 items-center">
      {/* Primary action: Eye for Diterbitkan/Tutup, Pencil for Draf */}
      <button
        title={isDraf ? "Edit" : "Lihat Detail"}
        onClick={() => isDraf ? navigate(`/edit-job/${jobId}`) : navigate(`/lowongan/${jobId}`)}
        className="w-7 h-7 rounded-md flex items-center justify-center text-[#606268] hover:bg-gray-100 transition-colors"
      >
        {isDraf ? <Pencil size={14} /> : <Eye size={14} />}
      </button>

      {/* More / three-dots */}
      <div className="relative">
        <button
          title={isDraf ? "Edit" : "More"}
          onClick={() => setOpen((v) => !v)}
          className="w-7 h-7 rounded-md flex items-center justify-center text-[#606268] hover:bg-gray-100 transition-colors"
        >
          <MoreVertical size={14} />
        </button>

        {open && (
          <div
            className="absolute right-0 top-full mt-1 z-50 bg-white rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] py-1.5 w-[160px]"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => { setOpen(false); item.onClick?.(); }}
                className="flex items-center gap-2.5 w-full px-2 py-1.5 text-[12px] text-[#4c4f59] hover:bg-gray-50 rounded-md transition-colors leading-[18px]"
              >
                {item.icon}
                {item.label}
              </button>
            ))}
            <div className="bg-[#e6e6e7] h-px my-1 mx-2" />
            <button
              onClick={() => { setOpen(false); setShowDeleteModal(true); }}
              className="flex items-center gap-2.5 w-full px-2 py-1.5 text-[12px] text-[#c93f2a] hover:bg-red-50 rounded-md transition-colors leading-[18px]"
            >
              <Trash2 size={14} className="text-[#c93f2a]" />
              Hapus Lowongan
            </button>
          </div>
        )}
      </div>

      {showDeleteModal && (
        <DeleteConfirmModal onClose={() => setShowDeleteModal(false)} onConfirm={() => setShowDeleteModal(false)} />
      )}
    </div>
  );
}

// ─── DateRangePicker ─────────────────────────────────────────────────────────

interface DateRange { start: Date | null; end: Date | null }

function MiniCalendar({
  range,
  hovered,
  onHover,
  onSelect,
}: {
  range: DateRange;
  hovered: Date | null;
  onHover: (d: Date | null) => void;
  onSelect: (d: Date) => void;
}) {
  const [month, setMonth] = useState(() => new Date());
  const monthStart = startOfMonth(month);
  const monthEnd = endOfMonth(month);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const startOffset = (getDay(monthStart) + 6) % 7; // Mon=0
  const DAY_LABELS = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

  const getEffectiveEnd = () => {
    if (range.start && !range.end && hovered) {
      return isBefore(hovered, range.start) ? range.start : hovered;
    }
    return range.end;
  };
  const effectiveStart = range.start && !range.end && hovered && isBefore(hovered, range.start) ? hovered : range.start;
  const effectiveEnd = getEffectiveEnd();

  const isStart = (d: Date) => !!effectiveStart && isSameDay(d, effectiveStart);
  const isEnd = (d: Date) => !!effectiveEnd && isSameDay(d, effectiveEnd);
  const isInRange = (d: Date) =>
    !!effectiveStart && !!effectiveEnd &&
    isWithinInterval(d, { start: effectiveStart, end: effectiveEnd }) &&
    !isSameDay(d, effectiveStart) && !isSameDay(d, effectiveEnd);

  return (
    <div className="w-full select-none">
      {/* Month nav */}
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={() => setMonth(subMonths(month, 1))}
          className="p-1 rounded hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft size={14} className="text-[#606268]" />
        </button>
        <span className="text-[13px] font-semibold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>
          {format(month, "MMMM yyyy")}
        </span>
        <button
          onClick={() => setMonth(addMonths(month, 1))}
          className="p-1 rounded hover:bg-gray-100 transition-colors"
        >
          <ChevronRight size={14} className="text-[#606268]" />
        </button>
      </div>
      {/* Day labels */}
      <div className="grid grid-cols-7 mb-1">
        {DAY_LABELS.map((d) => (
          <div key={d} className="text-center text-[10px] text-[#9ca0a8] font-semibold py-1">{d}</div>
        ))}
      </div>
      {/* Day cells */}
      <div className="grid grid-cols-7">
        {Array.from({ length: startOffset }).map((_, i) => <div key={`e${i}`} />)}
        {days.map((d) => {
          const start = isStart(d);
          const end = isEnd(d);
          const inRange = isInRange(d);
          return (
            <div
              key={d.toISOString()}
              className="flex items-center justify-center"
              style={{ height: 32 }}
              onMouseEnter={() => onHover(d)}
              onMouseLeave={() => onHover(null)}
              onClick={() => onSelect(d)}
            >
              <div
                className={`
                  w-full h-full flex items-center justify-center cursor-pointer text-[12px] transition-colors
                  ${start || end ? "bg-[#0052ff] text-white rounded-full" : ""}
                  ${inRange ? "bg-[#e8efff] text-[#0052ff]" : ""}
                  ${!start && !end && !inRange ? "hover:bg-gray-100 rounded-full text-[#383b46]" : ""}
                `}
              >
                {format(d, "d")}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── FilterSelectField ────────────────────────────────────────────────────────

function FilterSelectField({
  label,
  values,
  options,
  open,
  onToggle,
  onToggleOption,
}: {
  label: string;
  values: string[];
  options: string[];
  open: boolean;
  onToggle: () => void;
  onToggleOption: (v: string) => void;
}) {
  const labelClass = "text-[#383b46] text-[12px] leading-[18px] whitespace-nowrap";
  const fieldClass = "bg-white h-10 rounded border border-[#c5c6c9] flex items-center gap-2 px-3 w-full cursor-pointer hover:border-[#9ca0a8] transition-colors";
  const displayText = values.length === 0
    ? "Pilih..."
    : values.length === 1
    ? values[0]
    : `${values[0]} +${values.length - 1}`;
  return (
    <div className="flex flex-col gap-2 flex-1 min-w-0 relative">
      <span className={labelClass}>{label}</span>
      <div className={`${fieldClass} ${open ? "border-[#0052ff]" : ""}`} onClick={onToggle}>
        <p className={`flex-1 min-w-0 text-[12px] leading-[18px] truncate ${values.length > 0 ? "text-[#383b46]" : "text-[#c5c6c9]"}`}>
          {displayText}
        </p>
        <ChevronDown size={14} className={`shrink-0 transition-transform ${open ? "rotate-180 text-[#0052ff]" : "text-[#606268]"}`} />
      </div>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg border border-[#e6e6e7] shadow-lg z-10 overflow-hidden max-h-[180px] overflow-y-auto">
          {options.map((opt) => {
            const checked = values.includes(opt);
            return (
              <div
                key={opt}
                onClick={(e) => { e.stopPropagation(); onToggleOption(opt); }}
                className={`flex items-center gap-2.5 px-3 py-2 text-[12px] cursor-pointer hover:bg-[#f3f4f6] transition-colors ${checked ? "text-[#0052ff]" : "text-[#383b46]"}`}
              >
                <div className={`size-3.5 rounded border flex items-center justify-center shrink-0 transition-colors ${checked ? "bg-[#0052ff] border-[#0052ff]" : "border-[#c5c6c9]"}`}>
                  {checked && <Check size={9} className="text-white" strokeWidth={3} />}
                </div>
                {opt}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── FilterModal ──────────────────────────────────────────────────────────────

interface FilterValues {
  kategori: string[];
  lokasi: string[];
  modeKerja: string[];
  dibuatOleh: string[];
  dibuatRange: DateRange;
  tutupRange: DateRange;
}

const EMPTY_FILTERS: FilterValues = {
  kategori: [], lokasi: [], modeKerja: [], dibuatOleh: [],
  dibuatRange: { start: null, end: null }, tutupRange: { start: null, end: null },
};

function FilterModal({ onClose, onSave, initial }: { onClose: () => void; onSave: (f: FilterValues) => void; initial: FilterValues }) {
  const [datePickerField, setDatePickerField] = useState<"dibuat" | "tutup" | null>(null);
  const [dibuatRange, setDibuatRange] = useState<DateRange>(initial.dibuatRange);
  const [tutupRange, setTutupRange] = useState<DateRange>(initial.tutupRange);
  const [dibuatHovered, setDibuatHovered] = useState<Date | null>(null);
  const [tutupHovered, setTutupHovered] = useState<Date | null>(null);

  const [kategori, setKategori] = useState<string[]>(initial.kategori);
  const [lokasi, setLokasi] = useState<string[]>(initial.lokasi);
  const [modeKerja, setModeKerja] = useState<string[]>(initial.modeKerja);
  const [dibuatOleh, setDibuatOleh] = useState<string[]>(initial.dibuatOleh);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (key: string) => setOpenDropdown((v) => (v === key ? null : key));
  const toggleOption = (setter: React.Dispatch<React.SetStateAction<string[]>>, v: string) =>
    setter((prev) => prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]);

  const handleDateSelect = (date: Date, field: "dibuat" | "tutup") => {
    const range = field === "dibuat" ? dibuatRange : tutupRange;
    const setRange = field === "dibuat" ? setDibuatRange : setTutupRange;
    if (!range.start || (range.start && range.end)) {
      setRange({ start: date, end: null });
    } else {
      const ordered = isBefore(date, range.start)
        ? { start: date, end: range.start }
        : { start: range.start, end: date };
      setRange(ordered);
      setDatePickerField(null);
    }
  };

  const formatRange = (range: DateRange) => {
    const fmt = (d: Date) => format(d, "dd/MM/yyyy");
    if (!range.start) return "DD/MM/YYYY - DD/MM/YYYY";
    if (!range.end) return `${fmt(range.start)} - DD/MM/YYYY`;
    return `${fmt(range.start)} - ${fmt(range.end)}`;
  };

  const fieldClass = "bg-white h-10 rounded border border-[#c5c6c9] flex items-center gap-2 px-3 w-full cursor-pointer hover:border-[#9ca0a8] transition-colors";
  const labelClass = "text-[#383b46] text-[12px] leading-[18px] whitespace-nowrap";

  return (
    <div
      className="absolute right-0 top-full mt-2 z-50 bg-white rounded-2xl border border-[#e6e6e7] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] w-[420px]"
      style={{ fontFamily: "Open Sans, sans-serif" }}
    >
      <div className="flex flex-col gap-4 p-6">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <p className="text-[#4c4f59] text-[21px] font-bold leading-[26px]" style={{ fontFamily: "DM Sans, sans-serif" }}>Filter</p>
          <button
            onClick={onClose}
            className="bg-[#f3f4f6] rounded-full p-1 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 9.33333 9.33333" fill="none">
              <path d={svgFilterPaths.p27be5e00} fill="#606268" />
            </svg>
          </button>
        </div>

        {/* Tanggal Dibuat */}
        <div className="flex flex-col gap-2 w-full">
          <span className={labelClass}>Tanggal Dibuat</span>
          <div
            className={`${fieldClass} ${datePickerField === "dibuat" ? "border-[#0052ff]" : ""}`}
            onClick={() => setDatePickerField((v) => v === "dibuat" ? null : "dibuat")}
          >
            <p className={`flex-1 min-w-0 text-[12px] leading-[18px] ${dibuatRange.start ? "text-[#383b46]" : "text-[#c5c6c9]"}`}>
              {formatRange(dibuatRange)}
            </p>
            <Calendar size={14} className={`shrink-0 ${datePickerField === "dibuat" ? "text-[#0052ff]" : "text-[#606268]"}`} />
          </div>
          {datePickerField === "dibuat" && (
            <div className="border border-[#e6e6e7] rounded-xl p-3 bg-white shadow-sm">
              <MiniCalendar
                range={dibuatRange}
                hovered={dibuatHovered}
                onHover={setDibuatHovered}
                onSelect={(d) => handleDateSelect(d, "dibuat")}
              />
              {dibuatRange.start && (
                <button
                  onClick={() => { setDibuatRange({ start: null, end: null }); }}
                  className="mt-2 text-[11px] text-[#9ca0a8] hover:text-[#606268] transition-colors"
                >
                  Reset
                </button>
              )}
            </div>
          )}
        </div>

        {/* Tanggal Tutup */}
        <div className="flex flex-col gap-2 w-full">
          <span className={labelClass}>Tanggal Tutup</span>
          <div
            className={`${fieldClass} ${datePickerField === "tutup" ? "border-[#0052ff]" : ""}`}
            onClick={() => setDatePickerField((v) => v === "tutup" ? null : "tutup")}
          >
            <p className={`flex-1 min-w-0 text-[12px] leading-[18px] ${tutupRange.start ? "text-[#383b46]" : "text-[#c5c6c9]"}`}>
              {formatRange(tutupRange)}
            </p>
            <Calendar size={14} className={`shrink-0 ${datePickerField === "tutup" ? "text-[#0052ff]" : "text-[#606268]"}`} />
          </div>
          {datePickerField === "tutup" && (
            <div className="border border-[#e6e6e7] rounded-xl p-3 bg-white shadow-sm">
              <MiniCalendar
                range={tutupRange}
                hovered={tutupHovered}
                onHover={setTutupHovered}
                onSelect={(d) => handleDateSelect(d, "tutup")}
              />
              {tutupRange.start && (
                <button
                  onClick={() => { setTutupRange({ start: null, end: null }); }}
                  className="mt-2 text-[11px] text-[#9ca0a8] hover:text-[#606268] transition-colors"
                >
                  Reset
                </button>
              )}
            </div>
          )}
        </div>

        {/* Kategori + Lokasi */}
        <div className="flex gap-4 w-full">
          <FilterSelectField
            label="Kategori Pekerjaan"
            values={kategori}
            options={["Designer", "Software Engineer", "Analyst", "IT Support", "Marketing", "Writer", "Engineer", "Sales", "HR"]}
            open={openDropdown === "kategori"}
            onToggle={() => toggleDropdown("kategori")}
            onToggleOption={(v) => toggleOption(setKategori, v)}
          />
          <FilterSelectField
            label="Lokasi"
            values={lokasi}
            options={["Jakarta", "Surabaya", "Bandung", "Medan", "Bali", "Yogyakarta", "Semarang", "Tangerang", "Remote"]}
            open={openDropdown === "lokasi"}
            onToggle={() => toggleDropdown("lokasi")}
            onToggleOption={(v) => toggleOption(setLokasi, v)}
          />
        </div>

        {/* Mode Kerja + Dibuat Oleh */}
        <div className="flex gap-4 w-full">
          <FilterSelectField
            label="Mode Kerja"
            values={modeKerja}
            options={["On-site", "Remote", "Hybrid"]}
            open={openDropdown === "modeKerja"}
            onToggle={() => toggleDropdown("modeKerja")}
            onToggleOption={(v) => toggleOption(setModeKerja, v)}
          />
          <FilterSelectField
            label="Dibuat Oleh"
            values={dibuatOleh}
            options={["Budi Santoso", "Siti Rahayu", "Ahmad Fauzi", "Dewi Kusuma", "Riko Pratama"]}
            open={openDropdown === "dibuatOleh"}
            onToggle={() => toggleDropdown("dibuatOleh")}
            onToggleOption={(v) => toggleOption(setDibuatOleh, v)}
          />
        </div>

        {/* Footer buttons */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full border-[1.5px] border-[#c5c6c9] text-[#4c4f59] font-bold text-base hover:bg-gray-50 transition-colors"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Kembali
          </button>
          <button
            onClick={() => { onSave({ kategori, lokasi, modeKerja, dibuatOleh, dibuatRange, tutupRange }); onClose(); }}
            className="bg-[#0052ff] h-10 px-5 rounded-full text-white font-bold text-base w-[121px] hover:bg-[#0041cc] transition-colors"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}

function LowonganContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<FilterValues>(EMPTY_FILTERS);
  const filterRef = useRef<HTMLDivElement>(null);

  // Toast from navigation state
  const toastType = (location.state as { toast?: string } | null)?.toast ?? null;
  const [toast, setToast] = useState<string | null>(toastType);
  useEffect(() => {
    if (!toastType) return;
    setToast(toastType);
    // Clear navigation state so refresh doesn't re-show
    window.history.replaceState({}, "");
    const t = setTimeout(() => setToast(null), 4000);
    return () => clearTimeout(t);
  }, [toastType]);

  useEffect(() => {
    if (!filterOpen) return;
    const handler = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) setFilterOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [filterOpen]);

  // One chip per selected value, not per field
  const activeChips: { fieldKey: keyof FilterValues; label: string; value: string }[] = [
    ...activeFilters.kategori.map((v) => ({ fieldKey: "kategori" as const, label: "Kategori Pekerjaan", value: v })),
    ...activeFilters.lokasi.map((v) => ({ fieldKey: "lokasi" as const, label: "Lokasi", value: v })),
    ...activeFilters.modeKerja.map((v) => ({ fieldKey: "modeKerja" as const, label: "Mode Kerja", value: v })),
    ...activeFilters.dibuatOleh.map((v) => ({ fieldKey: "dibuatOleh" as const, label: "Dibuat Oleh", value: v })),
  ];

  const removeChipValue = (fieldKey: keyof FilterValues, value: string) =>
    setActiveFilters((prev) => ({
      ...prev,
      [fieldKey]: (prev[fieldKey] as string[]).filter((v) => v !== value),
    }));

  const hasFilters = activeChips.length > 0;

  const filtered = jobRows.filter((j) => {
    const matchSearch = j.nama.toLowerCase().includes(search.toLowerCase()) || j.id.toLowerCase().includes(search.toLowerCase());
    const matchKategori = activeFilters.kategori.length === 0 || activeFilters.kategori.includes(j.kategori);
    const matchLokasi = activeFilters.lokasi.length === 0 || activeFilters.lokasi.includes(j.lokasi);
    const matchMode = activeFilters.modeKerja.length === 0 || activeFilters.modeKerja.includes(j.setting);
    return matchSearch && matchKategori && matchLokasi && matchMode;
  });

  return (
    <div className="flex-1 min-w-0 h-full overflow-y-auto bg-[#f9f9f9]">
      {/* Header */}
      <div className="bg-white border-b border-[#e6e6e7] px-10 py-5 flex items-center justify-end shrink-0 relative">
        {/* Toast */}
        {toast && (
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-40">
            {toast === "published" ? (
              <div className="bg-[#fafffb] drop-shadow-[0px_8px_12px_rgba(0,0,0,0.08)] flex gap-3 items-center px-4 py-3 rounded-xl border border-[#6acd75] whitespace-nowrap">
                <div className="bg-[#33893c] rounded-xl size-6 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.6662 3.5L5.25017 9.9162L2.3338 6.99975" stroke="white" strokeLinecap="round" strokeWidth="2" /></svg>
                </div>
                <p className="text-[#6acd75] text-[14px] font-semibold" style={{ fontFamily: "DM Sans, sans-serif" }}>Lowongan berhasil dibuat</p>
                <button onClick={() => setToast(null)} className="bg-white rounded-xl size-6 flex items-center justify-center border border-[#33893c] shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="#33893C" strokeLinecap="round" strokeWidth="2" /></svg>
                </button>
              </div>
            ) : (
              <div className="bg-[#fafffb] drop-shadow-[0px_8px_12px_rgba(0,0,0,0.08)] flex gap-3 items-center px-4 py-3 rounded-xl border border-[#6acd75] whitespace-nowrap">
                <div className="bg-[#33893c] rounded-xl size-6 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.6662 3.5L5.25017 9.9162L2.3338 6.99975" stroke="white" strokeLinecap="round" strokeWidth="2" /></svg>
                </div>
                <p className="text-[#6acd75] text-[14px] font-semibold" style={{ fontFamily: "DM Sans, sans-serif" }}>Lowongan berhasil disimpan sebagai draft</p>
                <button onClick={() => setToast(null)} className="bg-white rounded-xl size-6 flex items-center justify-center border border-[#33893c] shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="#33893C" strokeLinecap="round" strokeWidth="2" /></svg>
                </button>
              </div>
            )}
          </div>
        )}
        <div className="flex items-center gap-4">
          <button className="border border-[#e6e6e7] rounded-full p-2.5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d={svgLowonganPaths.p21bb9400} stroke="#64748B" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </button>
          <TopBarUserMenu />
        </div>
      </div>

      <div className="flex flex-col gap-8 pb-10">
        {/* Page title */}
        <div className="flex items-center justify-between px-10 pt-8">
          <div>
            <p className="text-[#383b46] text-[28px] font-bold leading-8" style={{ fontFamily: "DM Sans, sans-serif" }}>Lowongan</p>
            <p className="text-[#64748b] text-sm mt-1" style={{ fontFamily: "DM Sans, sans-serif" }}>Kelola semua lowongan pekerjaan Anda di sini</p>
          </div>
          <button onClick={() => navigate("/post-job")} className="bg-[#0052ff] h-12 px-6 rounded-full text-white font-bold text-base hover:bg-[#0041cc] transition-colors" style={{ fontFamily: "DM Sans, sans-serif" }}>
            Post Job
          </button>
        </div>

        {/* Table card */}
        <div className="px-10">
          <div className="bg-white rounded-xl border border-[#e6e6e7] overflow-hidden">
            {/* Table toolbar */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-[#e6e6e7]">
              <p className="text-[#383b46] text-base font-bold" style={{ fontFamily: "DM Sans, sans-serif" }}>Daftar Lowongan</p>
              <div className="flex gap-5 items-center">
                {/* Search */}
                <div className="bg-white h-10 rounded-xl border border-[#c5c6c9] flex items-center gap-2 px-3 w-[378px]">
                  <Search size={14} className="text-[#606268] shrink-0" />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Cari Nama Posisi atau Posisi ID"
                    className="flex-1 min-w-0 text-xs bg-transparent outline-none text-[#383b46] placeholder-[#777980]"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  />
                </div>
                {/* Filter button */}
                <div ref={filterRef} className="relative">
                  <button
                    onClick={() => setFilterOpen((v) => !v)}
                    className={`bg-white h-10 flex items-center gap-2 px-3 rounded-full border-[1.5px] text-[#4c4f59] text-sm font-bold transition-colors ${filterOpen ? "border-[#0052ff] text-[#0052ff]" : "border-[#c5c6c9]"}`}
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  >
                    Filter
                    <ListFilter size={14} className={filterOpen ? "text-[#0052ff]" : "text-[#606268]"} />
                  </button>
                  {filterOpen && (
                    <FilterModal
                      onClose={() => setFilterOpen(false)}
                      onSave={(f) => setActiveFilters(f)}
                      initial={activeFilters}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Filter aktif bar */}
            {hasFilters && (
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#e6e6e7] flex-wrap">
                <span className="text-[12px] text-[#4c4f59] font-medium shrink-0" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  Filter Aktif :
                </span>
                {activeChips.map((chip) => (
                  <div
                    key={`${chip.fieldKey}-${chip.value}`}
                    className="bg-white h-6 flex items-center gap-2 pl-3 pr-1 rounded-full border border-[#c5c6c9]"
                  >
                    <span className="text-[10px] text-[#333] leading-4" style={{ fontFamily: "Open Sans, sans-serif" }}>
                      {chip.label}: {chip.value}
                    </span>
                    <button
                      onClick={() => removeChipValue(chip.fieldKey, chip.value)}
                      className="size-[14px] flex items-center justify-center rounded-full hover:bg-gray-100 shrink-0"
                    >
                      <X size={9} className="text-[#606268]" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => setActiveFilters(EMPTY_FILTERS)}
                  className="text-[10px] font-bold text-[#c93f2a] hover:text-[#a83222] transition-colors shrink-0"
                  style={{ fontFamily: "Open Sans, sans-serif" }}
                >
                  Hapus Semua
                </button>
              </div>
            )}

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1100px]">
                <thead>
                  <tr className="border-b border-[#e6e6e7]">
                    {["POSISI ID", "NAMA POSISI", "KATEGORI PEKERJAAN", "LOKASI", "WORK SETTING", "JUMLAH PELAMAR", "KUOTA TERISI", "TGL TUTUP", "STATUS", "AKSI"].map((h) => (
                      <th key={h} className="text-left px-3 py-3 text-[#4c4f59] text-[12px] font-bold whitespace-nowrap" style={{ fontFamily: "DM Sans, sans-serif" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((job) => {
                    const badge = jobStatusStyle[job.status];
                    return (
                      <tr key={job.id} className="border-b border-[#e6e6e7] hover:bg-[#fafafa] transition-colors">
                        <td className="px-3 py-4 text-[#4c4f59] text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>{job.id}</td>
                        <td className="px-3 py-4 text-[#4c4f59] text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>{job.nama}</td>
                        <td className="px-3 py-4 text-[#4c4f59] text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>{job.kategori}</td>
                        <td className="px-3 py-4 text-[#4c4f59] text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>{job.lokasi}</td>
                        <td className="px-3 py-4 text-[#4c4f59] text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>{job.setting}</td>
                        <td className="px-3 py-4 text-[#4c4f59] text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>{job.pelamar} Pelamar</td>
                        <td className="px-3 py-4 text-[#4c4f59] text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>{job.kuota}</td>
                        <td className="px-3 py-4 text-[#4c4f59] text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>{job.tutup}</td>
                        <td className="px-3 py-4">
                          <span
                            className="px-2 py-1 rounded-full text-[11px] font-semibold inline-block"
                            style={{ backgroundColor: badge.bg, color: badge.text, minWidth: badge.w, textAlign: "center", fontFamily: "DM Sans, sans-serif" }}
                          >
                            {job.status}
                          </span>
                        </td>
                        <td className="px-3 py-4 relative">
                          <LowonganActionIcons status={job.status} jobId={job.id} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-6 py-4">
              <p className="text-[#64748b] text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Menampilkan {filtered.length} dari {jobRows.length} lowongan
              </p>
              <div className="flex items-center gap-6">
                {/* Prev chevrons */}
                <div className="flex gap-2">
                  {[svgLowonganPaths.p17a2ab00, svgLowonganPaths.p1a9b5e00].map((_, i) => (
                    <button key={i} className="size-8 rounded-full border border-[#e6e6e7] flex items-center justify-center hover:bg-gray-50">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path clipRule="evenodd" d={svgLowonganPaths.p17a2ab00} fill="#606268" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgLowonganPaths.p1a9b5e00} fill="#606268" fillRule="evenodd" />
                      </svg>
                    </button>
                  ))}
                </div>
                {/* Page numbers */}
                <div className="flex gap-2">
                  {[1, 2, 3].map((n) => (
                    <button
                      key={n}
                      className={`size-8 rounded-md flex items-center justify-center text-sm font-semibold transition-colors ${n === 1 ? "bg-[#0052ff] text-white" : "border border-[#e6e6e7] text-[#383b46] hover:bg-gray-50"}`}
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {n}
                    </button>
                  ))}
                </div>
                {/* Next chevrons */}
                <div className="flex gap-2">
                  {[0, 1].map((i) => (
                    <button key={i} className="size-8 rounded-full border border-[#e6e6e7] flex items-center justify-center hover:bg-gray-50">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="rotate-180">
                        <path clipRule="evenodd" d={svgLowonganPaths.p17a2ab00} fill="#606268" fillRule="evenodd" />
                        <path clipRule="evenodd" d={svgLowonganPaths.p1a9b5e00} fill="#606268" fillRule="evenodd" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Lowongan Detail Page ─────────────────────────────────────────────────────

const DUMMY_APPLICANTS = [
  { name: "Ananda Putri",   date: "12 Okt 2023", status: "Penyaringan", color: "bg-[#dbeafe] text-[#1e40af]" },
  { name: "Rizky Pratama",  date: "11 Okt 2023", status: "Wawancara",   color: "bg-[#fef3c7] text-[#92400e]" },
  { name: "Dewi Lestari",   date: "10 Okt 2023", status: "Ditawarkan",  color: "bg-[#d1fae5] text-[#065f46]" },
  { name: "Bambang Wijaya", date: "09 Okt 2023", status: "Ditolak",     color: "bg-[#fee2e2] text-[#991b1b]" },
];

function IconActionButton({ label, className, onClick, children }: {
  label: string; className: string; onClick?: () => void; children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <button onClick={onClick} className={className}>{children}</button>
      {hovered && (
        <div
          role="tooltip"
          className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap bg-[#383b46] text-white text-[11px] font-medium px-2 py-1 rounded-md z-20"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          {label}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#383b46]" />
        </div>
      )}
    </div>
  );
}

function DetailField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex-1 min-w-0 flex flex-col gap-1">
      <p className="text-[12px] font-medium text-[#777980]" style={{ fontFamily: "DM Sans, sans-serif" }}>{label}</p>
      <p className="text-[14px] text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>{value}</p>
    </div>
  );
}

function LowonganDetailContent() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const job = jobRows.find(j => j.id === id);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCopyToast, setShowCopyToast] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(`${window.location.origin}/lowongan/${id}`);
    setShowCopyToast(true);
    setTimeout(() => setShowCopyToast(false), 3000);
  };

  if (!job) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#f9f9f9]">
        <div className="text-center">
          <p className="text-[20px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>Lowongan tidak ditemukan</p>
          <button onClick={() => navigate("/lowongan")} className="mt-4 text-[#0052ff] text-sm font-semibold hover:underline">Kembali ke Daftar Lowongan</button>
        </div>
      </div>
    );
  }

  const isDiterbitkan = job.status === "Diterbitkan";

  // Status badge styles
  const statusBadge: Record<JobStatus, { bg: string; text: string; label: string }> = {
    Diterbitkan: { bg: "bg-[#d1fae5]", text: "text-[#065f46]", label: "Diterbitkan" },
    Tutup:       { bg: "bg-[#fee2e2]", text: "text-[#991b1b]", label: "Tutup" },
    Draf:        { bg: "bg-[#f3f4f6]", text: "text-[#4c4f59]", label: "Draf" },
  };
  const badge = statusBadge[job.status];

  return (
    <div className="flex-1 min-w-0 h-full flex flex-col overflow-hidden bg-[#f9f9f9]">
      {/* Top bar */}
      <div className="bg-white border-b border-[#e6e6e7] px-10 py-5 flex items-center justify-end shrink-0 relative">
        {showCopyToast && (
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-40">
            <div className="bg-[#fafffb] drop-shadow-[0px_8px_12px_rgba(0,0,0,0.08)] flex gap-3 items-center px-4 py-3 rounded-xl border border-[#6acd75] whitespace-nowrap">
              <div className="bg-[#33893c] rounded-xl size-6 flex items-center justify-center shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.6662 3.5L5.25017 9.9162L2.3338 6.99975" stroke="white" strokeLinecap="round" strokeWidth="2" /></svg>
              </div>
              <p className="text-[#6acd75] text-[14px] font-semibold" style={{ fontFamily: "DM Sans, sans-serif" }}>Link lowongan berhasil disalin!</p>
              <button onClick={() => setShowCopyToast(false)} className="bg-white rounded-xl size-6 flex items-center justify-center border border-[#33893c] shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="#33893C" strokeLinecap="round" strokeWidth="2" /></svg>
              </button>
            </div>
          </div>
        )}
        <div className="flex items-center gap-4">
          <button className="border border-[#e6e6e7] rounded-full p-2.5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d={svgLowonganPaths.p21bb9400} stroke="#64748B" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </button>
          <TopBarUserMenu />
        </div>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-6 px-10 py-8 pb-12">

          {/* Title bar */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <button onClick={() => navigate("/lowongan")} className="text-[#383b46] hover:text-[#0052ff] transition-colors"><ArrowLeft size={20} /></button>
                <p className="text-[28px] font-bold text-[#383b46] leading-8" style={{ fontFamily: "DM Sans, sans-serif" }}>Detail Lowongan</p>
              </div>
              <div className="flex items-center gap-2 pl-9" style={{ fontFamily: "DM Sans, sans-serif" }}>
                <button onClick={() => navigate("/lowongan")} className="text-[14px] font-semibold text-[#ff6b35] hover:underline">Daftar Lowongan</button>
                <ChevronRight size={14} className="text-[#606268]" />
                <span className="text-[14px] text-[#64748b]">Detail Lowongan</span>
              </div>
            </div>

            {/* Action buttons — differ by status */}
            <div className="flex items-center gap-3">
              {/* Delete — always shown */}
              <IconActionButton label="Hapus" onClick={() => setShowDeleteModal(true)} className="bg-white size-10 rounded-lg border-[1.25px] border-[#f83a1e] flex items-center justify-center hover:bg-red-50 transition-colors">
                <svg width="10" height="10" viewBox="0 0 9.33333 9.33333" fill="none">
                  <path d={svgDetailPaths.p27be5e00} fill="#C93F2A" />
                </svg>
              </IconActionButton>

              {/* Preview, Copy Link, Duplicate — only for Diterbitkan */}
              {isDiterbitkan && (
                <>
                  <IconActionButton label="Preview" className="bg-white size-10 rounded-lg border-[1.25px] border-[#c5c6c9] flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <Eye size={16} className="text-[#606268]" />
                  </IconActionButton>
                  <IconActionButton label="Salin Link" onClick={handleCopyLink} className="bg-white size-10 rounded-lg border-[1.25px] border-[#c5c6c9] flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <Link2 size={16} className="text-[#606268]" />
                  </IconActionButton>
                  <IconActionButton label="Duplikat" onClick={() => navigate(`/duplicate-job/${job.id}`)} className="bg-white size-10 rounded-lg border-[1.25px] border-[#c5c6c9] flex items-center justify-center hover:bg-gray-50 transition-colors">
                    <Copy size={16} className="text-[#606268]" />
                  </IconActionButton>
                </>
              )}

              <div className="h-9 w-px bg-[#e6e6e7]" />

              {/* Primary CTA */}
              {isDiterbitkan ? (
                <button onClick={() => navigate(`/edit-job/${job?.id}`)} className="bg-[#0052ff] h-10 px-5 rounded-full text-white font-bold text-[14px] hover:bg-[#0041cc] transition-colors" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  Edit Lowongan
                </button>
              ) : (
                <button onClick={() => navigate(`/duplicate-job/${job.id}`)} className="bg-[#0052ff] h-10 px-5 rounded-full text-white font-bold text-[14px] hover:bg-[#0041cc] transition-colors" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  Duplicate Lowongan
                </button>
              )}
            </div>
          </div>

          {/* Content grid */}
          <div className="flex gap-5 items-start">
            {/* Left: job card */}
            <div className="flex-1 min-w-0 bg-white rounded-2xl border border-[#e6e6e7] p-6 flex flex-col gap-8">
              {/* Header */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <p className="text-[28px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>{job.nama}</p>
                  <span className={`${badge.bg} ${badge.text} text-[11px] font-semibold px-2 py-1 rounded-full`} style={{ fontFamily: "DM Sans, sans-serif" }}>{badge.label}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d={svgDetailPaths.p1b8a0e00} stroke="#777980" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                    <span className="text-[12px] text-[#475569]" style={{ fontFamily: "Inter, sans-serif" }}>{job.lokasi}, Indonesia</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d={svgDetailPaths.p2e445000} stroke="#777980" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.73" />
                    </svg>
                    <span className="text-[12px] text-[#475569]" style={{ fontFamily: "Inter, sans-serif" }}>{job.setting} · Full-time</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d={svgDetailPaths.p33811580} stroke="#777980" strokeLinecap="round" strokeWidth="2" />
                    </svg>
                    <span className="text-[12px] text-[#475569]" style={{ fontFamily: "Inter, sans-serif" }}>{job.kategori}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[12px] text-[#475569]" style={{ fontFamily: "Inter, sans-serif" }}>Dibuat: 12 Okt 2023</span>
                  <span className="text-[12px] text-[#475569]" style={{ fontFamily: "Inter, sans-serif" }}>Batas Lamaran: {job.tutup}</span>
                </div>
              </div>

              {/* Tentang Peran */}
              <div className="flex flex-col gap-3">
                <p className="text-[14px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>Tentang Peran Ini</p>
                <p className="text-[14px] text-[#383b46] leading-5" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  Kami sedang mencari {job.nama} yang berbakat untuk bergabung dengan tim kami. Anda akan bertanggung jawab untuk membangun dan memelihara infrastruktur aplikasi kami, memastikan performa tinggi dan responsivitas yang baik.
                </p>
              </div>

              {/* Skill tags */}
              <div className="flex flex-col gap-3">
                <p className="text-[14px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>Skill Tags</p>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "TypeScript", "PostgreSQL", "Redis", "Microservices"].map(tag => (
                    <span key={tag} className="bg-[#e6f4ff] border border-[#bfe7ff] text-[#1e3a8a] text-[12px] font-bold px-3 py-1.5 rounded-full" style={{ fontFamily: "DM Sans, sans-serif" }}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Lokasi & Kebijakan Kerja */}
              <div className="flex flex-col gap-3">
                <p className="text-[14px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>Lokasi &amp; Kebijakan Kerja</p>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-10">
                    <DetailField label="Lokasi Bekerja" value={`${job.lokasi}, Indonesia`} />
                    <DetailField label="Kebijakan Bekerja" value="Kerja Dari Kantor (WFO)" />
                  </div>
                  <div className="flex gap-10">
                    <DetailField label="Hari Kerja" value="Senin - Jumat" />
                    <DetailField label="Jam Kerja" value="09:00 - 18:00" />
                  </div>
                  <div className="flex gap-10">
                    <DetailField label="Jumlah Kuota" value={`${job.kuota} pelamar`} />
                  </div>
                </div>
              </div>

              {/* Syarat Pelamar */}
              <div className="flex flex-col gap-3">
                <p className="text-[14px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>Syarat Pelamar</p>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-10">
                    <DetailField label="Pendidikan Terakhir" value="S1 (Sarjana)" />
                    <DetailField label="Preferensi Jurusan" value="Teknik Informatika, Sistem Informasi" />
                  </div>
                  <div className="flex gap-10">
                    <DetailField label="Fresh Graduate" value="Tidak" />
                    <DetailField label="Tingkat Pengalaman" value="Minimal 3 tahun" />
                  </div>
                  <div className="flex gap-10">
                    <DetailField label="Persyaratan Usia" value="Tanpa persyaratan usia" />
                    <DetailField label="Jenis Kelamin" value="Semua" />
                  </div>
                </div>
              </div>

              {/* Kompensasi & Komunikasi */}
              <div className="flex flex-col gap-3">
                <p className="text-[14px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>Kompensasi &amp; Komunikasi</p>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-10">
                    <DetailField label="Rentang Gaji" value="Rp 8.000.000 - Rp 15.000.000 / bulan" />
                    <div className="flex-1 min-w-0 flex flex-col gap-1">
                      <p className="text-[12px] font-medium text-[#777980]" style={{ fontFamily: "DM Sans, sans-serif" }}>Benefit &amp; Tunjangan</p>
                      <div className="text-[14px] text-[#383b46] leading-5" style={{ fontFamily: "DM Sans, sans-serif" }}>
                        <p className="mb-0">• BPJS Kesehatan</p>
                        <p className="mb-0">• BPJS Ketenagakerjaan</p>
                        <p>• Tunjangan Makan</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-10">
                    <DetailField label="Kontak" value="WhatsApp:  +62 812 3456 7890" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="w-[420px] shrink-0 flex flex-col gap-4">
              {/* Quick stats */}
              <div className="bg-[#f6f4f4] rounded-xl p-5 flex flex-col gap-4">
                <p className="text-[14px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>Statistik Cepat</p>
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="text-[12px] text-[#4c4f59]" style={{ fontFamily: "Inter, sans-serif" }}>Total Pelamar</p>
                    <p className="text-[24px] font-bold text-[#383b46]" style={{ fontFamily: "Inter, sans-serif" }}>{job.pelamar}</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[12px] text-[#4c4f59]" style={{ fontFamily: "Inter, sans-serif" }}>Lulus Seleksi</p>
                    <p className="text-[24px] font-bold text-[#383b46]" style={{ fontFamily: "Inter, sans-serif" }}>12</p>
                  </div>
                </div>
              </div>

              {/* Recent applicants */}
              <div className="bg-white rounded-xl border border-[#e6e6e7] p-5 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <p className="text-[16px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>Pelamar Terbaru</p>
                  <button className="text-[14px] font-semibold text-[#0052ff] hover:underline" style={{ fontFamily: "Inter, sans-serif" }}>Lihat Semua Pelamar</button>
                </div>
                {/* Table header */}
                <div className="flex items-start border-b border-[#e6e6e7] pb-3">
                  <p className="w-[140px] shrink-0 text-[12px] font-bold text-[#4c4f59]" style={{ fontFamily: "DM Sans, sans-serif" }}>NAMA KANDIDAT</p>
                  <p className="w-[140px] shrink-0 text-[12px] font-bold text-[#4c4f59]" style={{ fontFamily: "DM Sans, sans-serif" }}>TGL MELAMAR</p>
                  <p className="text-[12px] font-bold text-[#4c4f59]" style={{ fontFamily: "DM Sans, sans-serif" }}>STATUS</p>
                </div>
                {DUMMY_APPLICANTS.map(a => (
                  <div key={a.name} className="flex items-center border-b border-[#e6e6e7] pb-4 last:border-b-0 last:pb-0">
                    <p className="w-[140px] shrink-0 text-[14px] text-[#4c4f59] font-medium" style={{ fontFamily: "DM Sans, sans-serif" }}>{a.name}</p>
                    <p className="w-[140px] shrink-0 text-[14px] text-[#4c4f59]" style={{ fontFamily: "DM Sans, sans-serif" }}>{a.date}</p>
                    <span className={`${a.color} text-[11px] font-semibold px-2 py-1 rounded-full`} style={{ fontFamily: "DM Sans, sans-serif" }}>{a.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {showDeleteModal && (
        <DeleteConfirmModal
          onClose={() => setShowDeleteModal(false)}
          onConfirm={() => { setShowDeleteModal(false); navigate("/lowongan"); }}
        />
      )}
    </div>
  );
}

// ─── Post Job Page ────────────────────────────────────────────────────────────

const SKILL_SUGGESTIONS = ["Figma", "UI Design", "Prototyping", "React", "TypeScript", "Node.js", "Python", "SQL", "Adobe XD", "Sketch", "Photoshop", "Docker"];
const KATEGORI_OPTIONS = ["Designer", "Software Engineer", "Analyst", "IT Support", "Marketing", "Writer", "Engineer", "Sales", "HR", "Keuangan", "Operasional"];
const TIPE_OPTIONS = ["Full-time", "Part-time", "Contract", "Internship", "Freelance"];
const LOKASI_OPTIONS = ["Jakarta", "Surabaya", "Bandung", "Medan", "Bali", "Yogyakarta", "Semarang", "Tangerang", "Remote"];
const LEVEL_OPTIONS = ["Entry Level", "Junior", "Mid-Senior", "Senior", "Lead", "Manager"];
const PROVINSI_OPTIONS = ["DKI Jakarta", "Jawa Barat", "Jawa Tengah", "Jawa Timur", "Banten", "Bali", "Sumatera Utara", "Sulawesi Selatan", "Yogyakarta"];
const KABUPATEN_OPTIONS = ["Kabupaten Bandung", "Kabupaten Bekasi", "Kabupaten Sleman", "Kabupaten Badung", "Kabupaten Gresik", "Kabupaten Tangerang", "Lainnya"];
const KEBIJAKAN_KERJA_OPTIONS = ["Kerja Dari Kantor (WFO)", "Kerja Dari Mana pun (Remote)", "Campuran (Hybrid)", "Kerja di lapangan (Fieldwork)"];
const HARI_OPTIONS = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
const PENDIDIKAN_OPTIONS = ["SD", "SMP", "SMA / SMK", "D3", "S1", "S2", "S3"];
const PENDIDIKAN_WITH_JURUSAN = ["SMA / SMK", "D3", "S1", "S2", "S3"];
const JURUSAN_OPTIONS = ["Teknik Informatika", "Sistem Informasi", "Desain Komunikasi Visual", "Manajemen", "Akuntansi", "Psikologi", "Hukum", "Ilmu Komunikasi", "Teknik Industri", "Lainnya"];
const PENGALAMAN_OPTIONS = ["Berpengalaman", "Tidak Berpengalaman"];
const BENEFIT_OPTIONS = ["BPJS Kesehatan", "BPJS Ketenagakerjaan", "Asuransi Kesehatan Tambahan", "Tunjangan Transportasi", "Tunjangan Makan", "Bonus Tahunan", "THR", "Cuti Tambahan", "Pelatihan & Pengembangan", "Jenjang Karir"];
const KODE_ETIK_ITEMS = [
  "Pastikan informasi & keterangan yang Anda cantumkan pada lowongan telah sesuai & tidak mengandung unsur penipuan atau pemalsuan.",
  "Buat lowongan Anda tampak meyakinkan dengan mencantumkan deskripsi, detail, & kualifikasi pelamar yang Anda harapkan secara jelas.",
  "Balaslah pesan Whatsapp atau email yang dikirimkan oleh para pelamar terkait lowongan Anda.",
  "Responslah para pelamar yang tertarik bekerja sama dengan Anda secara sopan.",
  "Sebaiknya Anda tidak mengenakan biaya/charge pada pelamar. Namun jika ada biaya yang memang diwajibkan, mohon jelaskan detailnya di deskripsi pekerjaan sebagai bentuk transparansi.",
  "Tutuplah lowongan jika proses rekrutmen telah selesai atau Anda telah mendapatkan pelamar yang sesuai.",
];

function PostJobSelect({ value, options, placeholder, onChange }: {
  value: string; options: string[]; placeholder: string; onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [open]);
  return (
    <div ref={ref} className="relative flex-1 min-w-0">
      <div onClick={() => setOpen(v => !v)} className={`bg-white h-10 rounded-xl border flex items-center gap-2 px-3 cursor-pointer hover:border-[#9ca0a8] transition-colors ${open ? "border-[#0052ff]" : "border-[#c5c6c9]"}`}>
        <span className={`flex-1 min-w-0 text-[12px] truncate ${value ? "text-[#4c4f59]" : "text-[#c5c6c9]"}`} style={{ fontFamily: "DM Sans, sans-serif" }}>{value || placeholder}</span>
        <ChevronDown size={16} className={`shrink-0 transition-transform ${open ? "rotate-180 text-[#0052ff]" : "text-[#606268]"}`} />
      </div>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl border border-[#c5c6c9] shadow-lg z-20 overflow-hidden max-h-[180px] overflow-y-auto">
          {options.map(opt => (
            <div key={opt} onClick={() => { onChange(opt); setOpen(false); }}
              className={`px-3 py-2.5 text-[12px] cursor-pointer hover:bg-[#f3f4f6] transition-colors ${opt === value ? "bg-[#ebf2ff] text-[#0052ff] font-medium" : "text-[#4c4f59]"}`}
              style={{ fontFamily: "DM Sans, sans-serif" }}>{opt}</div>
          ))}
        </div>
      )}
    </div>
  );
}

function ConfirmLeaveModal({ onLeave, onStay }: { onLeave: () => void; onStay: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl w-[400px] border border-[#e6e6e7] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)]">
        <div className="flex flex-col gap-4 p-6">
          <div className="flex items-center justify-between w-full">
            <p className="text-[#4c4f59] text-[18px] font-bold" style={{ fontFamily: "Open Sans, sans-serif" }}>Apakah Anda yakin?</p>
            <button onClick={onStay} className="bg-[#f3f4f6] rounded-full p-1 hover:bg-gray-200 transition-colors">
              <svg width="16" height="16" viewBox="0 0 9.33333 9.33333" fill="none">
                <path d={svgFilterPaths.p27be5e00} fill="#606268" />
              </svg>
            </button>
          </div>
          <p className="text-[#4c4f59] text-[14px] leading-5" style={{ fontFamily: "Open Sans, sans-serif" }}>
            Semua data yang telah Anda masukkan akan hilang jika Anda meninggalkan formulir ini.
          </p>
          <div className="flex items-center justify-end gap-3 pt-2">
            <button onClick={onLeave} className="px-5 py-2 rounded-full border-[1.5px] border-[#c5c6c9] text-[#4c4f59] font-bold text-[14px] hover:bg-gray-50 transition-colors" style={{ fontFamily: "DM Sans, sans-serif" }}>Batal</button>
            <button onClick={onStay} className="bg-[#0052ff] h-10 px-4 rounded-full text-white font-bold text-[14px] hover:bg-[#0041cc] transition-colors" style={{ fontFamily: "DM Sans, sans-serif" }}>Selesaikan Formulir</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoModal({ title, onClose, children, footer }: {
  title: string; onClose: () => void; children: React.ReactNode; footer?: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl w-full max-w-[440px] border border-[#e6e6e7] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)] p-6 flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3 w-full">
          <p className="flex-1 text-[18px] font-bold text-[#4c4f59] leading-7" style={{ fontFamily: "Open Sans, sans-serif" }}>{title}</p>
          <button onClick={onClose} className="bg-[#f3f4f6] rounded-full p-1 hover:bg-gray-200 transition-colors shrink-0">
            <X size={16} className="text-[#606268]" />
          </button>
        </div>
        <div className="text-[12px] text-[#4c4f59] leading-[18px]" style={{ fontFamily: "Open Sans, sans-serif" }}>
          {children}
        </div>
        {footer}
      </div>
    </div>
  );
}

function RichEditor({ label, value, onChange, maxLen = 5000 }: {
  label: string; value: string; onChange: (v: string) => void; maxLen?: number;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[12px] text-[#4c4f59]" style={{ fontFamily: "DM Sans, sans-serif" }}>{label}</span>
      <div className="bg-white rounded-xl border border-[#c5c6c9] overflow-hidden focus-within:border-[#0052ff] transition-colors">
        <div className="border-b border-[#e6e6e7] px-3 py-2 flex gap-2 items-center">
          {["B", "I", "U"].map(f => <button key={f} className="text-[11px] font-semibold text-[#777980] w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100">{f}</button>)}
          <div className="bg-[#e6e6e7] h-4 w-px mx-1" />
          <button className="text-[11px] text-[#777980] px-2 py-1 rounded hover:bg-gray-100">≡</button>
          <button className="text-[11px] text-[#777980] px-2 py-1 rounded hover:bg-gray-100">1.</button>
        </div>
        <textarea value={value} onChange={e => onChange(e.target.value)} maxLength={maxLen}
          placeholder="Jelaskan posisi ini secara detail..."
          className="w-full min-h-[160px] p-4 text-[12px] text-[#4c4f59] placeholder-[#c5c6c9] resize-none outline-none bg-transparent"
          style={{ fontFamily: "Open Sans, sans-serif" }} />
      </div>
      <p className="text-[10px] text-[#777980] text-right" style={{ fontFamily: "Open Sans, sans-serif" }}>{value.length} / {maxLen}</p>
    </div>
  );
}

// ─── Rich Text Editor (Deskripsi Pekerjaan) ───────────────────────────────────

const DESKRIPSI_PLACEHOLDER_LINES = [
  "Saran: Untuk meningkatkan keterbacaan, gunakan bullet points atau angka untuk menjelaskan poin-poin yang ingin Anda sampaikan.",
  "",
  "Deskripsi pekerjaan: ",
  "1. Pengembangan perangkat lunak ",
  "2. Manajemen proyek ",
  "",
  "Kualifikasi yang dibutuhkan: ",
  "1. Pengalaman dalam pemrograman ",
  "2. Kemampuan komunikasi yang baik",
];

const PESAN_PLACEHOLDER_LINES = [
  "Halo,",
  "",
  "Terima kasih telah mengajukan permohonan untuk posisi ini! Jika Anda berhasil ke tahap berikutnya, mungkin Anda akan diminta untuk menyiapkan beberapa dokumen administratif.",
  "",
  "Salam,",
  "Tim Rekrutmen",
];

function RichTextToolbarBtn({ onClick, active, wide, children }: {
  onClick: () => void; active?: boolean; wide?: boolean; children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className={`flex items-center justify-center rounded transition-colors ${wide ? "px-2 py-1" : "w-6 h-6"} ${active ? "bg-[#ebf2ff] text-[#0052ff]" : "text-[#777980] hover:bg-[#f3f4f6]"}`}
    >
      {children}
    </button>
  );
}

function RichTextEditor({ label, required, value, onChange, maxLen = 5000, placeholderLines = DESKRIPSI_PLACEHOLDER_LINES, footer }: {
  label: string; required?: boolean; value: string; onChange: (html: string) => void; maxLen?: number;
  placeholderLines?: string[]; footer?: React.ReactNode | null;
}) {
  const editorRef = useRef<HTMLDivElement>(null);
  const savedRangeRef = useRef<Range | null>(null);
  const [isEmpty, setIsEmpty] = useState(!value);
  const [charCount, setCharCount] = useState(0);
  const [alignOpen, setAlignOpen] = useState(false);
  const [linkOpen, setLinkOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const [kodeEtikOpen, setKodeEtikOpen] = useState(false);
  const alignRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (alignRef.current && !alignRef.current.contains(e.target as Node)) setAlignOpen(false);
      if (linkRef.current && !linkRef.current.contains(e.target as Node)) setLinkOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  // Sync DOM from `value` only when it actually differs from the live content
  // (i.e. an external change) — never on every render, or typing resets the
  // caret because innerHTML gets reassigned on each keystroke.
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value;
      const text = editorRef.current.innerText;
      setIsEmpty(text.trim().length === 0);
      setCharCount(text.length);
    }
  }, [value]);

  const handleInput = () => {
    if (!editorRef.current) return;
    const html = editorRef.current.innerHTML;
    const text = editorRef.current.innerText;
    setIsEmpty(text.trim().length === 0);
    setCharCount(text.length);
    onChange(html);
  };

  const exec = (cmd: string, val?: string) => {
    editorRef.current?.focus();
    document.execCommand(cmd, false, val);
    handleInput();
  };

  const saveSelection = () => {
    const sel = window.getSelection();
    if (sel && sel.rangeCount > 0 && editorRef.current?.contains(sel.getRangeAt(0).commonAncestorContainer)) {
      savedRangeRef.current = sel.getRangeAt(0);
    }
  };

  const openLink = () => {
    saveSelection();
    setLinkUrl("");
    setLinkOpen(true);
    setAlignOpen(false);
  };

  const applyLink = () => {
    const url = linkUrl.trim();
    if (!url) { setLinkOpen(false); return; }
    editorRef.current?.focus();
    const sel = window.getSelection();
    if (sel && savedRangeRef.current) {
      sel.removeAllRanges();
      sel.addRange(savedRangeRef.current);
    }
    const href = /^https?:\/\//i.test(url) ? url : `https://${url}`;
    document.execCommand("createLink", false, href);
    setLinkOpen(false);
    handleInput();
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center gap-1">
        <span className="text-[12px] font-medium text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>{label}</span>
        {required && <span className="text-[14px] font-semibold text-[#ff4d4f]">*</span>}
      </div>
      <div className="bg-white border border-[#c5c6c9] rounded-xl overflow-hidden focus-within:border-[#0052ff] transition-colors">
        <div className="border-b border-[#e6e6e7] px-3 py-2 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <RichTextToolbarBtn onClick={() => exec("bold")}>
              <span className="text-[11px] font-semibold" style={{ fontFamily: "Open Sans, sans-serif" }}>B</span>
            </RichTextToolbarBtn>
            <RichTextToolbarBtn onClick={() => exec("italic")}><Italic size={13} /></RichTextToolbarBtn>
            <RichTextToolbarBtn onClick={() => exec("underline")}><Underline size={13} /></RichTextToolbarBtn>
          </div>
          <div className="bg-[#e6e6e7] h-4 w-px shrink-0" />
          <div className="flex items-center gap-1">
            <RichTextToolbarBtn onClick={() => exec("insertOrderedList")}><ListOrdered size={14} /></RichTextToolbarBtn>
            <RichTextToolbarBtn onClick={() => exec("insertUnorderedList")}><List size={14} /></RichTextToolbarBtn>
            <div ref={alignRef} className="relative">
              <RichTextToolbarBtn onClick={() => { setAlignOpen(v => !v); setLinkOpen(false); }}><AlignLeft size={14} /></RichTextToolbarBtn>
              {alignOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-[#c5c6c9] rounded-lg shadow-lg z-30 flex gap-0.5 p-1">
                  <RichTextToolbarBtn onClick={() => { exec("justifyLeft"); setAlignOpen(false); }}><AlignLeft size={14} /></RichTextToolbarBtn>
                  <RichTextToolbarBtn onClick={() => { exec("justifyCenter"); setAlignOpen(false); }}><AlignCenter size={14} /></RichTextToolbarBtn>
                  <RichTextToolbarBtn onClick={() => { exec("justifyRight"); setAlignOpen(false); }}><AlignRight size={14} /></RichTextToolbarBtn>
                  <RichTextToolbarBtn onClick={() => { exec("justifyFull"); setAlignOpen(false); }}><AlignJustify size={14} /></RichTextToolbarBtn>
                </div>
              )}
            </div>
          </div>
          <div className="bg-[#e6e6e7] h-4 w-px shrink-0" />
          <div ref={linkRef} className="relative">
            <RichTextToolbarBtn onClick={openLink}><Link2 size={14} /></RichTextToolbarBtn>
            {linkOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-[#e6e6e7] rounded-2xl shadow-lg z-30 p-2 flex items-center gap-4 w-80">
                <div className="flex items-center gap-1.5 flex-1 min-w-0 border border-[#0052ff] rounded-full px-4 py-2.5">
                  <Link2 size={14} className="text-[#9b9ca1] shrink-0" />
                  <input
                    autoFocus
                    value={linkUrl}
                    onChange={(e) => setLinkUrl(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); applyLink(); } }}
                    placeholder="Ketik atau tempel tautan"
                    className="flex-1 min-w-0 text-[14px] text-[#4c4f59] placeholder-[#c5c6c9] outline-none bg-transparent"
                    style={{ fontFamily: "DM Sans, sans-serif" }}
                  />
                </div>
                <button
                  type="button"
                  onClick={applyLink}
                  disabled={!linkUrl.trim()}
                  className={`text-[16px] font-semibold shrink-0 transition-colors ${linkUrl.trim() ? "text-[#0052ff] cursor-pointer" : "text-[#c5c6c9] cursor-not-allowed"}`}
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                >
                  Apply
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="relative">
          {isEmpty && (
            <div
              className="absolute inset-0 p-4 pointer-events-none text-[12px] text-[#c5c6c9] whitespace-pre-wrap"
              style={{ fontFamily: "Open Sans, sans-serif", lineHeight: "18px" }}
            >
              {placeholderLines.map((line, i) => <p key={i} className="m-0">{line || " "}</p>)}
            </div>
          )}
          <div
            ref={editorRef}
            contentEditable
            suppressContentEditableWarning
            onInput={handleInput}
            onBlur={saveSelection}
            className="min-h-[160px] p-4 text-[12px] text-[#4c4f59] outline-none [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5 [&_a]:text-[#0052ff] [&_a]:underline"
            style={{ fontFamily: "Open Sans, sans-serif", lineHeight: "18px" }}
          />
        </div>
      </div>
      <div className={`flex items-center gap-2 ${footer === null ? "justify-end" : "justify-between"}`}>
        {footer !== null && (
          footer !== undefined ? footer : (
            <p className="text-[10px] text-[#777980]" style={{ fontFamily: "Open Sans, sans-serif" }}>
              Penulisan deskripsi &amp; kualifikasi sebaiknya sesuai dengan{" "}
              <button type="button" onClick={() => setKodeEtikOpen(true)} className="text-[10px] font-bold text-[#0052ff] hover:underline" style={{ fontFamily: "Open Sans, sans-serif" }}>Kode Etik Perisaiku Talenta Pemberi Kerja</button>
            </p>
          )
        )}
        <p className="text-[10px] text-[#777980] shrink-0" style={{ fontFamily: "Open Sans, sans-serif" }}>{charCount} / {maxLen}</p>
      </div>
      {kodeEtikOpen && (
        <InfoModal
          title="Kode Etik Perisaiku Talenta Tentang Pembuatan Lowongan"
          onClose={() => setKodeEtikOpen(false)}
          footer={
            <button
              type="button"
              onClick={() => setKodeEtikOpen(false)}
              className="bg-[#0052ff] h-12 rounded-full text-white font-bold text-[16px] hover:bg-[#0041cc] transition-colors w-full"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              Oke, Mengerti
            </button>
          }
        >
          <ol className="list-decimal pl-[18px] flex flex-col gap-2">
            <li>Pastikan informasi &amp; keterangan yang Anda cantumkan pada lowongan telah sesuai &amp; tidak mengandung unsur penipuan atau pemalsuan.</li>
            <li>Buat lowongan Anda tampak meyakinkan dengan mencantumkan deskripsi, detail &amp; kualifikasi pelamar yang Anda harapkan secara jelas.</li>
            <li>Berdasarkan <span className="text-[#0052ff]">Surat Edaran Menteri Ketenagakerjaan Republik Indonesia M/6/HK.04/V/2025</span>, kami menyarankan sebaiknya tidak mencantumkan persyaratan usia.</li>
            <li>Sebaiknya Anda tidak mengenakan biaya/charge pada pelamar. Namun jika ada biaya yang memang diwajibkan, mohon jelaskan detailnya di deskripsi pekerjaan sebagai bentuk transparansi.</li>
          </ol>
        </InfoModal>
      )}
    </div>
  );
}

// ─── Post Job Wizard ──────────────────────────────────────────────────────────

const WIZARD_STEPS = [
  { label: "Informasi Pekerjaan" },
  { label: "Lokasi & Kebijakan Kerja" },
  { label: "Syarat Pelamar" },
  { label: "Kompensasi & Komunikasi" },
  { label: "Konfirmasi" },
];

function StepperHeader({ currentStep }: { currentStep: number }) {
  return (
    <div className="bg-white border border-[#e6e6e7] rounded-[19px] px-8 py-6 flex flex-col w-full shrink-0">
      <div className="flex items-center justify-between w-full flex-wrap gap-y-3">
        {WIZARD_STEPS.map((s, i) => {
          const stepNum = i + 1;
          const completed = stepNum < currentStep;
          const active = stepNum === currentStep;
          return (
            <div key={s.label} className="flex items-center gap-3 shrink-0">
              <div className={`flex items-center justify-center rounded-full w-8 h-8 shrink-0 ${completed || active ? "bg-[#0052ff]" : "bg-[#f1f3f5]"}`}>
                {completed ? (
                  <Check size={14} className="text-white" strokeWidth={3} />
                ) : (
                  <span className="text-[14px] font-bold" style={{ fontFamily: "DM Sans, sans-serif", color: active ? "white" : "#777980" }}>{stepNum}</span>
                )}
              </div>
              <span
                className="text-[14px] whitespace-nowrap"
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: active ? 700 : 500,
                  color: active || completed ? "#0052ff" : "#777980",
                }}
              >
                {s.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RadioOption({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="flex items-center gap-2">
      <div className="relative size-5 shrink-0">
        <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 20 20">
          {selected
            ? <circle cx="10" cy="10" fill="white" r="7" stroke="#FF6B35" strokeWidth="6" />
            : <circle cx="10" cy="10" fill="white" r="9" stroke="#E6E6E7" strokeWidth="2" />}
        </svg>
      </div>
      <span className="text-[14px] text-[#4c4f59]" style={{ fontFamily: "DM Sans, sans-serif" }}>{label}</span>
    </button>
  );
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`relative w-8 h-4 rounded-full shrink-0 transition-colors ${checked ? "bg-[#ff6b35]" : "bg-[#c5c6c9]"}`}
    >
      <span className={`absolute top-0.5 size-3 rounded-full bg-white shadow transition-all ${checked ? "left-[18px]" : "left-0.5"}`} />
    </button>
  );
}

function Checkbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      onClick={(e) => { e.stopPropagation(); onChange(); }}
      className={`flex items-center justify-center w-4 h-4 rounded border shrink-0 transition-colors ${checked ? "bg-[#0052ff] border-[#0052ff]" : "bg-white border-[#c5c6c9]"}`}
    >
      {checked && <Check size={10} className="text-white" strokeWidth={3} />}
    </button>
  );
}

function TagPicker({ label, required, tags, setTags, suggestions, placeholder = "Cari dan tambahkan..." }: {
  label: string; required?: boolean; tags: string[]; setTags: (t: string[]) => void; suggestions: string[]; placeholder?: string;
}) {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const h = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);
  const filtered = suggestions.filter(s => s.toLowerCase().includes(input.toLowerCase()) && !tags.includes(s));
  useEffect(() => { setActiveIndex(0); }, [input, open]);
  const add = (s: string) => { setTags([...tags, s]); setInput(""); setOpen(false); };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open || filtered.length === 0) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setActiveIndex(i => (i + 1) % filtered.length); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setActiveIndex(i => (i - 1 + filtered.length) % filtered.length); }
    else if (e.key === "Enter") { e.preventDefault(); add(filtered[activeIndex]); }
    else if (e.key === "Escape") { setOpen(false); }
  };
  return (
    <div ref={ref} className="flex flex-col gap-2 relative">
      <div className="flex items-center gap-1">
        <span className="text-[12px] text-[#4c4f59]" style={{ fontFamily: "DM Sans, sans-serif" }}>{label}</span>
        {required && <span className="text-[#cc0e0e] text-[10px] font-semibold">*</span>}
      </div>
      <div onClick={() => setOpen(true)} className={`bg-white min-h-10 rounded-xl border px-3 py-1.5 flex flex-col gap-1.5 cursor-text transition-colors ${open ? "border-[#0052ff]" : "border-[#c5c6c9]"}`}>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 items-center">
            {tags.map(tag => (
              <div key={tag} className="bg-[#f6f4f4] border border-[#e6e6e7] rounded-full flex items-center gap-1.5 px-2.5 py-1 shrink-0">
                <span className="text-[12px] text-[#383b46]" style={{ fontFamily: "Inter, sans-serif" }}>{tag}</span>
                <button onClick={e => { e.stopPropagation(); setTags(tags.filter(s => s !== tag)); }}><X size={9} className="text-[#606268]" /></button>
              </div>
            ))}
          </div>
        )}
        <div className="flex items-center gap-1.5 min-w-[80px]">
          <Search size={14} className="text-[#777980] shrink-0" />
          <input
            value={input}
            onChange={e => { setInput(e.target.value); setOpen(true); }}
            onFocus={() => setOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder={tags.length === 0 ? placeholder : ""}
            className="flex-1 min-w-0 text-[12px] text-[#4c4f59] placeholder-[#777980] outline-none bg-transparent"
            style={{ fontFamily: "Inter, sans-serif" }}
          />
        </div>
      </div>
      {open && filtered.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl border border-[#c5c6c9] shadow-lg z-20 overflow-hidden max-h-[180px] overflow-y-auto">
          {filtered.map((s, i) => (
            <div
              key={s}
              onClick={() => add(s)}
              onMouseEnter={() => setActiveIndex(i)}
              className={`px-3 py-2.5 text-[12px] cursor-pointer transition-colors flex items-center justify-between gap-2 ${i === activeIndex ? "bg-[#ebf2ff]" : "text-[#4c4f59]"}`}
              style={{ fontFamily: "DM Sans, sans-serif", color: i === activeIndex ? "#383b46" : undefined }}
            >
              <span>{s}</span>
              {i === activeIndex && <Check size={14} className="text-[#0052ff] shrink-0" strokeWidth={3} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const SETTING_TO_KEBIJAKAN: Record<string, string> = {
  "On-site": "Kerja Dari Kantor (WFO)",
  "Remote": "Kerja Dari Mana pun (Remote)",
  "Hybrid": "Campuran (Hybrid)",
};

function PostJobContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams<{ id: string }>();
  const job = id ? jobRows.find(j => j.id === id) : undefined;
  const isDuplicateRoute = location.pathname.startsWith("/duplicate-job");
  const isPrefill = !!job;
  const isEditMode = isPrefill && !isDuplicateRoute;
  const isDraftEdit = isEditMode && job!.status === "Draf";
  const isPublishedEdit = isEditMode && job!.status !== "Draf";

  const [showModal, setShowModal] = useState(false);
  const [showLokasiInfoModal, setShowLokasiInfoModal] = useState(false);
  const [showPendidikanInfoModal, setShowPendidikanInfoModal] = useState(false);
  const [step, setStep] = useState(1);

  // Step 1 — Informasi Pekerjaan
  const [namaPosisi, setNamaPosisi] = useState(job ? (isDuplicateRoute ? `${job.nama} (Copy)` : job.nama) : "");
  const [kategori, setKategori] = useState(job?.kategori ?? "");
  const [levelPekerjaan, setLevelPekerjaan] = useState(isPrefill ? "Mid-Senior" : "");
  const [tipePekerjaan, setTipePekerjaan] = useState(isPrefill ? "Full-time" : "");
  const [deskripsi, setDeskripsi] = useState(isPrefill ? `Kami mencari ${job!.nama} yang berpengalaman untuk bergabung dengan tim kami. Bertanggung jawab merancang solusi berkualitas tinggi dan berkolaborasi erat dengan tim lintas fungsi.` : "");
  const [batasTanggal, setBatasTanggal] = useState("");
  const [kuota, setKuota] = useState(job?.kuota.split("/")[1] ?? "");
  const [metodeLamaran, setMetodeLamaran] = useState("In App");
  const [urlRedirect, setUrlRedirect] = useState("");

  // Step 2 — Lokasi & Kebijakan Kerja
  const [provinsi, setProvinsi] = useState(isPrefill ? "DKI Jakarta" : "");
  const [kota, setKota] = useState(job?.lokasi ?? "");
  const [kabupaten, setKabupaten] = useState("");
  const [kotaSyaratUtama, setKotaSyaratUtama] = useState(false);
  const [kebijakanKerja, setKebijakanKerja] = useState(job ? (SETTING_TO_KEBIJAKAN[job.setting] ?? KEBIJAKAN_KERJA_OPTIONS[0]) : KEBIJAKAN_KERJA_OPTIONS[0]);
  const [hariKerja, setHariKerja] = useState<string[]>(isPrefill ? ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"] : []);
  const [jamMasuk, setJamMasuk] = useState(isPrefill ? "09:00" : "");
  const [jamSelesai, setJamSelesai] = useState(isPrefill ? "18:00" : "");

  // Step 3 — Syarat Pelamar
  const [pendidikan, setPendidikan] = useState(isPrefill ? "S1" : "");
  const [pendidikanSyaratUtama, setPendidikanSyaratUtama] = useState(false);
  const [jurusanTags, setJurusanTags] = useState<string[]>(isPrefill ? ["Teknik Informatika", "Sistem Informasi"] : []);
  const [pengalaman, setPengalaman] = useState(isPrefill ? "Berpengalaman" : "");
  const [minPengalamanTahun, setMinPengalamanTahun] = useState(isPrefill ? "3" : "");
  const [freshGraduate, setFreshGraduate] = useState(isPrefill ? "Tidak" : "");
  const [jenisKelamin, setJenisKelamin] = useState("Semua");
  const [tanpaSyaratUsia, setTanpaSyaratUsia] = useState(true);
  const [usiaMin, setUsiaMin] = useState("");
  const [usiaMax, setUsiaMax] = useState("");
  const [skillTags, setSkillTags] = useState<string[]>(isPrefill ? ["Node.js", "TypeScript", "PostgreSQL", "Redis", "Microservices"] : []);

  // Step 4 — Kompensasi & Komunikasi
  const [gajiMin, setGajiMin] = useState(isPrefill ? "8000000" : "");
  const [tampilkanGaji, setTampilkanGaji] = useState(true);
  const [gajiMax, setGajiMax] = useState(isPrefill ? "15000000" : "");
  const [benefitTags, setBenefitTags] = useState<string[]>(isPrefill ? ["BPJS Kesehatan", "BPJS Ketenagakerjaan", "Tunjangan Makan"] : []);
  const [kontakType, setKontakType] = useState<"WhatsApp" | "Email">("WhatsApp");
  const [kontakValue, setKontakValue] = useState(isPrefill ? "812 3456 7890" : "");
  const [pesanOtomatis, setPesanOtomatis] = useState("");

  // Step 5 — Konfirmasi
  const [agreed, setAgreed] = useState(isPrefill);

  const exitTarget = isPublishedEdit ? `/lowongan/${id}` : "/lowongan";
  const skipDirtyCheck = isEditMode || isDuplicateRoute;
  const isDirty = !skipDirtyCheck && (step > 1 || !!(namaPosisi || kategori || levelPekerjaan || tipePekerjaan || deskripsi || batasTanggal || kuota || urlRedirect));
  const handleExit = () => { if (isDirty) { setShowModal(true); } else { navigate(exitTarget); } };
  const handleFooterBack = () => { if (step > 1) setStep(step - 1); else handleExit(); };
  const handleNext = () => { if (step < 5) setStep(step + 1); else navigate(exitTarget, { state: { toast: "published" } }); };
  const handleSaveDraft = () => { if (isPublishedEdit) return; navigate("/lowongan", { state: { toast: "draft" } }); };

  const fieldCls = "bg-white h-10 rounded-xl border border-[#c5c6c9] flex items-center px-3 gap-2 focus-within:border-[#0052ff] transition-colors";
  const labelCls = "text-[12px] text-[#4c4f59]";
  const labelStyle = { fontFamily: "DM Sans, sans-serif" };

  return (
    <div className="flex-1 min-w-0 h-full flex flex-col overflow-hidden bg-[#f9f9f9]">
      {/* Top bar */}
      <div className="bg-white border-b border-[#e6e6e7] px-10 py-5 flex items-center justify-end shrink-0">
        <TopBarUserMenu />
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-6 pb-32">
          {/* Title + breadcrumb */}
          <div className="flex flex-col gap-1 px-10 pt-8">
            <div className="flex items-center gap-3">
              <button onClick={handleExit} className="text-[#383b46] hover:text-[#0052ff] transition-colors"><ArrowLeft size={20} /></button>
              <p className="text-[28px] font-bold text-[#383b46] leading-8" style={{ fontFamily: "DM Sans, sans-serif" }}>{isPublishedEdit ? "Edit Lowongan" : isDraftEdit ? "Add Lowongan" : isDuplicateRoute ? "Duplikat Lowongan" : "Buat Lowongan baru"}</p>
            </div>
            <div className="flex items-center gap-2 pl-9" style={{ fontFamily: "DM Sans, sans-serif" }}>
              <button onClick={handleExit} className="text-[14px] font-semibold text-[#ff6b35] hover:underline">Daftar Lowongan</button>
              <ChevronRight size={14} className="text-[#606268]" />
              <span className="text-[14px] text-[#64748b]">{isPublishedEdit ? "Edit Lowongan" : isDraftEdit ? "Add Lowongan" : isDuplicateRoute ? "Duplikat Lowongan" : "Buat Lowongan Baru"}</span>
            </div>
          </div>

          <div className="px-10 flex flex-col gap-6">
            <StepperHeader currentStep={step} />

            <div className="bg-white rounded-xl border border-[#e6e6e7] p-8 flex flex-col gap-8">

              {/* Step 1 — Informasi Pekerjaan */}
              {step === 1 && (
                <div className="flex flex-col gap-6">
                  <p className="text-[16px] font-bold text-[#383b46]" style={labelStyle}>Informasi Dasar Pekerjaan</p>
                  <div className={isPublishedEdit ? "flex gap-5" : "flex flex-col gap-2"}>
                    {isPublishedEdit && (
                      <div className="flex flex-col gap-2 w-[280px] shrink-0">
                        <span className={labelCls} style={labelStyle}>Job ID</span>
                        <div className="bg-[#f6f4f4] h-10 rounded-xl border border-[#c5c6c9] flex items-center px-3">
                          <span className="text-[12px] text-[#777980]" style={labelStyle}>{job!.id}</span>
                        </div>
                      </div>
                    )}
                    <div className={isPublishedEdit ? "flex flex-col gap-2 flex-1 min-w-0" : "contents"}>
                      <span className={labelCls} style={labelStyle}>Nama Posisi <span className="text-[#cc0e0e]">*</span></span>
                      <input type="text" maxLength={100} value={namaPosisi} onChange={e => setNamaPosisi(e.target.value)}
                        placeholder="Contoh: Senior Product Designer"
                        className="bg-white h-10 rounded-xl border border-[#c5c6c9] px-3 text-[12px] text-[#4c4f59] placeholder-[#c5c6c9] outline-none focus:border-[#0052ff] transition-colors w-full"
                        style={labelStyle} />
                      <p className="text-[10px] text-[#777980] text-right" style={{ fontFamily: "Open Sans, sans-serif" }}>{namaPosisi.length} / 100</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                      <span className={labelCls} style={labelStyle}>Kategori Pekerjaan <span className="text-[#cc0e0e]">*</span></span>
                      <PostJobSelect value={kategori} options={KATEGORI_OPTIONS} placeholder="Pilih kategori pekerjaan" onChange={setKategori} />
                    </div>
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                      <span className={labelCls} style={labelStyle}>Level Pekerjaan <span className="text-[#cc0e0e]">*</span></span>
                      <PostJobSelect value={levelPekerjaan} options={LEVEL_OPTIONS} placeholder="Pilih level pekerjaan" onChange={setLevelPekerjaan} />
                    </div>
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                      <span className={labelCls} style={labelStyle}>Tipe Pekerjaan <span className="text-[#cc0e0e]">*</span></span>
                      <PostJobSelect value={tipePekerjaan} options={TIPE_OPTIONS} placeholder="Pilih tipe pekerjaan" onChange={setTipePekerjaan} />
                    </div>
                  </div>
                  <RichTextEditor label="Deskripsi Pekerjaan" required value={deskripsi} onChange={setDeskripsi} />
                  <div className="flex gap-5">
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                      <span className={labelCls} style={labelStyle}>Batas Tanggal Pelamaran</span>
                      <div className={fieldCls}>
                        <input type="date" value={batasTanggal} onChange={e => setBatasTanggal(e.target.value)} className="flex-1 min-w-0 text-[12px] text-[#4c4f59] outline-none bg-transparent" style={labelStyle} />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                      <span className={labelCls} style={labelStyle}>Kuota Posisi</span>
                      <div className={fieldCls}>
                        <input type="number" min={0} value={kuota} onChange={e => setKuota(e.target.value)} placeholder="0" className="flex-1 min-w-0 text-[12px] text-[#4c4f59] placeholder-[#c5c6c9] outline-none bg-transparent" style={labelStyle} />
                        <span className="text-[12px] text-[#4c4f59] shrink-0" style={labelStyle}>Pelamar</span>
                      </div>
                    </div>
                  </div>
                  <div className={`flex gap-5 ${metodeLamaran === "External Link (Redirect)" ? "" : "max-w-[508px]"}`}>
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                      <span className={labelCls} style={labelStyle}>Metode Lamaran</span>
                      <PostJobSelect value={metodeLamaran} options={["In App", "External Link (Redirect)"]} placeholder="Pilih metode" onChange={setMetodeLamaran} />
                    </div>
                    {metodeLamaran === "External Link (Redirect)" && (
                      <div className="flex flex-col gap-2 flex-1 min-w-0">
                        <span className={labelCls} style={labelStyle}>URL Redirect</span>
                        <input type="url" value={urlRedirect} onChange={e => setUrlRedirect(e.target.value)}
                          placeholder="https://example.com/apply"
                          className="bg-white h-10 rounded-xl border-[1.5px] border-[#c5c6c9] focus:border-[#0052ff] px-3 text-[12px] text-[#4c4f59] placeholder-[#c5c6c9] outline-none transition-colors w-full"
                          style={labelStyle} />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 2 — Lokasi & Kebijakan Kerja */}
              {step === 2 && (
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <p className="text-[16px] font-bold text-[#383b46]" style={labelStyle}>Lokasi Bekerja</p>
                    <div className="flex gap-5">
                      <div className="flex flex-col gap-2 flex-1 min-w-0">
                        <span className={labelCls} style={labelStyle}>Provinsi <span className="text-[#cc0e0e]">*</span></span>
                        <PostJobSelect value={provinsi} options={PROVINSI_OPTIONS} placeholder="Pilih Provinsi" onChange={setProvinsi} />
                      </div>
                      <div className="flex flex-col gap-2 flex-1 min-w-0">
                        <span className={labelCls} style={labelStyle}>Kota <span className="text-[#cc0e0e]">*</span></span>
                        <PostJobSelect value={kota} options={LOKASI_OPTIONS} placeholder="Pilih Kota" onChange={setKota} />
                      </div>
                      <div className="flex flex-col gap-2 flex-1 min-w-0">
                        <span className={labelCls} style={labelStyle}>Kabupaten <span className="text-[#cc0e0e]">*</span></span>
                        <PostJobSelect value={kabupaten} options={KABUPATEN_OPTIONS} placeholder="Pilih Kabupaten" onChange={setKabupaten} />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox checked={kotaSyaratUtama} onChange={() => setKotaSyaratUtama(v => !v)} />
                      <span className="text-[12px] text-[#4c4f59]" style={labelStyle}>Jadikan kota sebagai syarat utama <button type="button" onClick={() => setShowLokasiInfoModal(true)} className="text-[12px] text-[#0052ff] font-medium hover:underline" style={labelStyle}>Pelajari lebih lanjut</button></span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <p className="text-[16px] font-bold text-[#383b46]" style={labelStyle}>Kebijakan Bekerja</p>
                    <div className="flex gap-6 flex-wrap">
                      {KEBIJAKAN_KERJA_OPTIONS.map(opt => (
                        <RadioOption key={opt} label={opt} selected={kebijakanKerja === opt} onClick={() => setKebijakanKerja(opt)} />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-8">
                    <p className="text-[16px] font-bold text-[#383b46]" style={labelStyle}>Hari &amp; Jam Kerja</p>
                    <div className="flex items-center gap-4 w-full">
                      {HARI_OPTIONS.map(hari => {
                        const active = hariKerja.includes(hari);
                        return (
                          <button key={hari} type="button"
                            onClick={() => setHariKerja(prev => prev.includes(hari) ? prev.filter(h => h !== hari) : [...prev, hari])}
                            className="flex items-center gap-2.5 flex-1 min-w-0"
                          >
                            <div className={`flex items-center justify-center rounded-[4px] shrink-0 w-[18px] h-[18px] border transition-colors ${active ? "bg-[#0052ff] border-[#0052ff]" : "bg-white border-[#e2e8f0]"}`}>
                              {active && <Check size={12} className="text-white" strokeWidth={3} />}
                            </div>
                            <span className="text-[14px] font-medium text-[#4c4f59] whitespace-nowrap" style={labelStyle}>{hari}</span>
                          </button>
                        );
                      })}
                    </div>
                    {hariKerja.length > 0 && (
                      <div className="flex gap-4 w-full">
                        <div className="flex flex-col gap-2 flex-1 min-w-0">
                          <span className="text-[12px] font-medium text-[#383b46]" style={labelStyle}>Jam Masuk <span className="text-[#ef4444]">*</span></span>
                          <div className="bg-white border border-[#e2e8f0] rounded-[13px] flex items-center gap-2 px-4 py-3 w-full focus-within:border-[#0052ff] transition-colors">
                            <input type="time" value={jamMasuk} onChange={e => setJamMasuk(e.target.value)} className="flex-1 min-w-0 text-[14px] text-[#4c4f59] outline-none bg-transparent [&::-webkit-calendar-picker-indicator]:hidden" style={labelStyle} />
                            <Clock size={20} className="text-[#9ca0a8] shrink-0" />
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 flex-1 min-w-0">
                          <span className="text-[12px] font-medium text-[#383b46]" style={labelStyle}>Jam Selesai <span className="text-[#ef4444]">*</span></span>
                          <div className="bg-white border border-[#e2e8f0] rounded-[13px] flex items-center gap-2 px-4 py-3 w-full focus-within:border-[#0052ff] transition-colors">
                            <input type="time" value={jamSelesai} onChange={e => setJamSelesai(e.target.value)} className="flex-1 min-w-0 text-[14px] text-[#4c4f59] outline-none bg-transparent [&::-webkit-calendar-picker-indicator]:hidden" style={labelStyle} />
                            <Clock size={20} className="text-[#9ca0a8] shrink-0" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Step 3 — Syarat Pelamar */}
              {step === 3 && (
                <div className="flex flex-col gap-6">
                  <p className="text-[16px] font-bold text-[#383b46]" style={labelStyle}>Syarat Pelamar</p>

                  <div className={`flex gap-5 ${PENDIDIKAN_WITH_JURUSAN.includes(pendidikan) ? "" : "max-w-[508px]"}`}>
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                      <span className={labelCls} style={labelStyle}>Pendidikan Terakhir <span className="text-[#cc0e0e]">*</span></span>
                      <PostJobSelect value={pendidikan} options={PENDIDIKAN_OPTIONS} placeholder="Pilih Pendidikan terakhir" onChange={(v) => { setPendidikan(v); if (!PENDIDIKAN_WITH_JURUSAN.includes(v)) setJurusanTags([]); }} />
                      <div className="flex items-center gap-2 mt-1">
                        <Checkbox checked={pendidikanSyaratUtama} onChange={() => setPendidikanSyaratUtama(v => !v)} />
                        <span className="text-[12px] text-[#4c4f59]" style={labelStyle}>Jadikan pendidikan sebagai syarat utama <button type="button" onClick={() => setShowPendidikanInfoModal(true)} className="text-[12px] text-[#0052ff] font-medium hover:underline" style={labelStyle}>Pelajari lebih lanjut</button></span>
                      </div>
                    </div>

                    {PENDIDIKAN_WITH_JURUSAN.includes(pendidikan) && (
                      <div className="flex flex-col gap-1 flex-1 min-w-0">
                        <TagPicker label="Preferensi Jurusan" required tags={jurusanTags} setTags={setJurusanTags} suggestions={JURUSAN_OPTIONS} placeholder="Pilih preferensi Jurusan" />
                        <p className="text-[10px] text-[#777980]" style={{ fontFamily: "Open Sans, sans-serif" }}>*Terbuka untuk semua jurusan jika dikosongkan</p>
                      </div>
                    )}
                  </div>

                  <div className={`flex gap-5 ${pengalaman === "Berpengalaman" ? "" : "max-w-[508px]"}`}>
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                      <span className={labelCls} style={labelStyle}>Tingkat Pengalaman <span className="text-[#cc0e0e]">*</span></span>
                      <PostJobSelect value={pengalaman} options={PENGALAMAN_OPTIONS} placeholder="Pilih tingkat pengalaman" onChange={setPengalaman} />
                    </div>
                    {pengalaman === "Berpengalaman" && (
                      <div className="flex flex-col gap-2 flex-1 min-w-0">
                        <span className={labelCls} style={labelStyle}>Minimal Pengalaman Kerja <span className="text-[#cc0e0e]">*</span></span>
                        <div className={fieldCls}>
                          <input type="number" min={0} value={minPengalamanTahun} onChange={e => setMinPengalamanTahun(e.target.value)} placeholder="0" className="flex-1 min-w-0 text-[12px] text-[#4c4f59] placeholder-[#c5c6c9] outline-none bg-transparent" style={labelStyle} />
                          <span className="text-[12px] text-[#4c4f59] shrink-0" style={labelStyle}>Tahun</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className={labelCls} style={labelStyle}>Apakah lowongan ini terbuka untuk Fresh Graduate? <span className="text-[#cc0e0e]">*</span></span>
                    <div className="flex gap-6">
                      <RadioOption label="Ya" selected={freshGraduate === "Ya"} onClick={() => setFreshGraduate("Ya")} />
                      <RadioOption label="Tidak" selected={freshGraduate === "Tidak"} onClick={() => setFreshGraduate("Tidak")} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className={labelCls} style={labelStyle}>Jenis Kelamin (Opsional)</span>
                    <div className="flex gap-6">
                      {["Semua", "Laki-laki", "Perempuan"].map(opt => (
                        <RadioOption key={opt} label={opt} selected={jenisKelamin === opt} onClick={() => setJenisKelamin(opt)} />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className={labelCls} style={labelStyle}>Persyaratan Usia (Opsional)</span>
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="flex items-center gap-2">
                        <span className="text-[12px] text-[#777980]" style={labelStyle}>Min</span>
                        <div className={`${fieldCls} w-24`}>
                          <input disabled={tanpaSyaratUsia} type="number" value={usiaMin} onChange={e => setUsiaMin(e.target.value)} className="flex-1 min-w-0 text-[12px] text-[#4c4f59] outline-none bg-transparent disabled:opacity-50" style={labelStyle} />
                        </div>
                      </div>
                      <span className="text-[#777980]">-</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[12px] text-[#777980]" style={labelStyle}>Max</span>
                        <div className={`${fieldCls} w-24`}>
                          <input disabled={tanpaSyaratUsia} type="number" value={usiaMax} onChange={e => setUsiaMax(e.target.value)} className="flex-1 min-w-0 text-[12px] text-[#4c4f59] outline-none bg-transparent disabled:opacity-50" style={labelStyle} />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 ml-2">
                        <Checkbox checked={tanpaSyaratUsia} onChange={() => setTanpaSyaratUsia(v => !v)} />
                        <span className="text-[12px] text-[#4c4f59] cursor-pointer" style={labelStyle} onClick={() => setTanpaSyaratUsia(v => !v)}>Tanpa persyaratan usia</span>
                      </div>
                    </div>
                    {!tanpaSyaratUsia && (
                      <div className="bg-[#f0f9ff] border border-[#e6e6e7] rounded-xl p-6 flex flex-col gap-2.5 shadow-[0px_4px_6px_rgba(0,0,0,0.04)]">
                        <div className="flex gap-3 items-start">
                          <Info size={20} className="text-[#0052ff] shrink-0 mt-0.5" />
                          <p className="flex-1 text-[14px] text-[#383b46] leading-5" style={labelStyle}>
                            Berdasarkan{" "}
                            <a href="https://jdih.kemnaker.go.id" target="_blank" rel="noreferrer" className="text-[#0052ff] cursor-pointer hover:underline">
                              Surat Edaran Menteri Ketenagakerjaan Republik Indonesia Nomor M/6/HK.04/V/2025
                            </a>
                            , pemberi kerja hanya dapat menerapkan persyaratan usia dalam proses rekrutmen tenaga kerja jika ada kepentingan khusus dengan ketentuan khusus sebagai berikut:
                          </p>
                        </div>
                        <div className="flex flex-col gap-3 pl-9">
                          <div className="flex gap-2">
                            <span className="text-[16px] text-[#383b46] w-4 shrink-0" style={labelStyle}>a.</span>
                            <p className="flex-1 text-[14px] text-[#383b46] leading-5" style={labelStyle}>Untuk pekerjaan atau jabatan yang memiliki sifat atau karakteristik yang secara nyata memengaruhi kemampuan seseorang dalam melaksanakan pekerjaan; dan/atau</p>
                          </div>
                          <div className="flex gap-2">
                            <span className="text-[16px] text-[#383b46] w-4 shrink-0" style={labelStyle}>b.</span>
                            <p className="flex-1 text-[14px] text-[#383b46] leading-5" style={labelStyle}>Tidak boleh berdampak pada hilangnya atau berkurangnya kesempatan dalam memperoleh pekerjaan.</p>
                          </div>
                        </div>
                        <p className="text-[14px] text-[#383b46] leading-5" style={labelStyle}>Jika Anda memilih untuk menerapkan persyaratan usia dalam proses rekrutmen ini, segala pembuktian atas kepatuhan terhadap Surat Edaran tersebut dibebankan pada perusahaan Anda.</p>
                      </div>
                    )}
                  </div>

                  <div className="max-w-[508px]">
                    <TagPicker label="Skill Tags" tags={skillTags} setTags={setSkillTags} suggestions={SKILL_SUGGESTIONS} placeholder="Cari dan tambahkan skill..." />
                  </div>
                </div>
              )}

              {/* Step 4 — Kompensasi & Komunikasi */}
              {step === 4 && (
                <div className="flex flex-col gap-6">
                  <p className="text-[16px] font-bold text-[#383b46]" style={labelStyle}>Kompensasi &amp; Komunikasi</p>

                  <div className="flex gap-5 items-end">
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                      <span className={labelCls} style={labelStyle}>Rentang Gaji (Minimal)</span>
                      <div className={fieldCls}>
                        <span className="text-[12px] text-[#4c4f59] shrink-0" style={{ fontFamily: "Open Sans, sans-serif" }}>Rp</span>
                        <input type="number" value={gajiMin} onChange={e => setGajiMin(e.target.value)} placeholder="0" className="flex-1 min-w-0 text-[12px] text-[#4c4f59] placeholder-[#c5c6c9] outline-none bg-transparent" style={labelStyle} />
                        <span className="text-[12px] text-[#4c4f59] shrink-0" style={{ fontFamily: "Open Sans, sans-serif" }}>/ bulan</span>
                      </div>
                    </div>
                    <div className="h-10 flex items-center shrink-0"><div className="bg-[#777980] h-0.5 w-3" /></div>
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                      <span className={labelCls} style={labelStyle}>Rentang Gaji (Maksimal)</span>
                      <div className={fieldCls}>
                        <span className="text-[12px] text-[#4c4f59] shrink-0" style={{ fontFamily: "Open Sans, sans-serif" }}>Rp</span>
                        <input type="number" value={gajiMax} onChange={e => setGajiMax(e.target.value)} placeholder="0" className="flex-1 min-w-0 text-[12px] text-[#4c4f59] placeholder-[#c5c6c9] outline-none bg-transparent" style={labelStyle} />
                        <span className="text-[12px] text-[#4c4f59] shrink-0" style={{ fontFamily: "Open Sans, sans-serif" }}>/ bulan</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex gap-2.5 items-center">
                      <Toggle checked={tampilkanGaji} onChange={() => setTampilkanGaji(v => !v)} />
                      <span className="text-[14px] font-medium text-[#4c4f59]" style={labelStyle}>Tampilkan informasi gaji di lowongan</span>
                    </div>
                    <p className="text-[12px] text-[#777980]" style={labelStyle}>Menampilkan gaji terbukti menarik hingga 2,5x lebih banyak pelamar</p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <TagPicker label="Benefit & Tunjangan" required tags={benefitTags} setTags={setBenefitTags} suggestions={BENEFIT_OPTIONS} placeholder="Pilih benefit & tunjangan" />
                    <p className="text-[10px] text-[#777980]" style={{ fontFamily: "Open Sans, sans-serif" }}>*Terbuka untuk semua jurusan jika dikosongkan</p>
                  </div>

                  <div className="flex flex-col gap-4 max-w-[700px]">
                    <div className="flex flex-col gap-0.5">
                      <p className="text-[14px] font-semibold text-[#383b46]" style={labelStyle}>Kontak untuk Dihubungi Pelamar</p>
                      <p className="text-[12px] text-[#777980]" style={labelStyle}>Pilih salah satu kontak di bawah agar pelamar dapat dengan mudah bertanya tentang proses selanjutnya. Pastikan kontak tersebut aktif dan siap dihubungi.</p>
                    </div>
                    <div className="flex gap-6">
                      <RadioOption label="WhatsApp" selected={kontakType === "WhatsApp"} onClick={() => setKontakType("WhatsApp")} />
                      <RadioOption label="Email" selected={kontakType === "Email"} onClick={() => setKontakType("Email")} />
                    </div>
                    <div className="flex flex-col gap-2 max-w-[356px]">
                      <span className={labelCls} style={labelStyle}>{kontakType === "WhatsApp" ? "Nomor WhatsApp" : "Email"} <span className="text-[#cc0e0e]">*</span></span>
                      <div className={fieldCls}>
                        {kontakType === "WhatsApp" && <span className="text-[12px] text-[#4c4f59] shrink-0" style={{ fontFamily: "Open Sans, sans-serif" }}>+62</span>}
                        <input type={kontakType === "WhatsApp" ? "tel" : "email"} value={kontakValue} onChange={e => setKontakValue(e.target.value)}
                          placeholder={kontakType === "WhatsApp" ? "812 3456 7890" : "hr@perusahaan.com"}
                          className="flex-1 min-w-0 text-[12px] text-[#4c4f59] placeholder-[#c5c6c9] outline-none bg-transparent" style={labelStyle} />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-0.5">
                      <p className="text-[14px] font-semibold text-[#383b46]" style={labelStyle}>Pesan Otomatis untuk Pelamar</p>
                      <p className="text-[12px] text-[#777980]" style={labelStyle}>Buat pesan untuk pelamar agar bisa menyapa mereka secara personal atau menyampaikan informasi penting. Pesan ini akan otomatis terkirim setelah mereka melamar lowongan Anda.</p>
                    </div>
                    <RichTextEditor label="Pesan Selamat Datang" value={pesanOtomatis} onChange={setPesanOtomatis} maxLen={5000} placeholderLines={PESAN_PLACEHOLDER_LINES} footer={null} />
                  </div>
                </div>
              )}

              {/* Step 5 — Konfirmasi */}
              {step === 5 && (
                <div className="flex flex-col gap-6 max-w-[720px]">
                  <p className="text-[16px] font-bold text-[#383b46]" style={labelStyle}>Kode Etik Perisaiku Talenta Pemberi Kerja</p>
                  <div className="flex flex-col gap-5">
                    {KODE_ETIK_ITEMS.map((item, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <div className="w-7 h-7 rounded-full bg-[#ebf2ff] flex items-center justify-center shrink-0">
                          <span className="text-[12px] font-bold text-[#0052ff]" style={labelStyle}>{i + 1}</span>
                        </div>
                        <p className="text-[13px] text-[#4c4f59] leading-5 pt-0.5" style={labelStyle}>{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-[#e6e6e7] pt-5">
                    <div className="flex items-start gap-3 cursor-pointer" onClick={() => setAgreed(v => !v)}>
                      <Checkbox checked={agreed} onChange={() => setAgreed(v => !v)} />
                      <span className="text-[13px] text-[#4c4f59]" style={labelStyle}>Saya setuju dengan kode etik Perisaiku Talenta</span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>

      {/* Sticky footer */}
      <div className="shrink-0 bg-white border-t border-[#e6e6e7] px-10 py-4 flex items-center justify-between">
        <button onClick={handleFooterBack} className="h-10 px-5 rounded-full border-[1.5px] border-[#c5c6c9] text-[#4c4f59] font-bold text-[14px] hover:bg-gray-50 transition-colors" style={{ fontFamily: "DM Sans, sans-serif" }}>Kembali</button>
        <div className="flex gap-3">
          {isPublishedEdit ? (
            <button disabled className="h-10 px-5 rounded-full bg-[#f6f4f4] text-[#c5c6c9] font-bold text-[14px] cursor-not-allowed" style={{ fontFamily: "DM Sans, sans-serif" }}>Simpan Sebagai Draft</button>
          ) : (
            <button onClick={handleSaveDraft} className="h-10 px-5 rounded-full border-[1.5px] border-[#0052ff] text-[#0052ff] font-bold text-[14px] hover:bg-[#f0f5ff] transition-colors" style={{ fontFamily: "DM Sans, sans-serif" }}>Simpan Sebagai Draft</button>
          )}
          {step < 5 ? (
            <button onClick={handleNext} className="bg-[#0052ff] h-10 px-5 rounded-full text-white font-bold text-[14px] hover:bg-[#0041cc] transition-colors" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Lanjut ke {WIZARD_STEPS[step].label}
            </button>
          ) : (
            <button onClick={handleNext} disabled={!agreed}
              className={`h-10 px-5 rounded-full font-bold text-[14px] transition-colors ${agreed ? "bg-[#0052ff] text-white hover:bg-[#0041cc]" : "bg-[#e6e6e7] text-[#9b9ca1] cursor-not-allowed"}`}
              style={{ fontFamily: "DM Sans, sans-serif" }}>
              {isPublishedEdit ? "Simpan" : "Publikasikan"}
            </button>
          )}
        </div>
      </div>

      {showModal && <ConfirmLeaveModal onLeave={() => navigate(exitTarget)} onStay={() => setShowModal(false)} />}
      {showLokasiInfoModal && (
        <InfoModal title="Pelajari Lebih Lanjut" onClose={() => setShowLokasiInfoModal(false)}>
          Anda dapat memfilter pelamar yang berdomisili di kota tersebut. Pelamar yang tidak memenuhi syarat utama masih bisa melamar, tetapi akan diberi peringatan tentang ketidakcocokan kualifikasi.
        </InfoModal>
      )}
      {showPendidikanInfoModal && (
        <InfoModal title="Pelajari Lebih Lanjut" onClose={() => setShowPendidikanInfoModal(false)}>
          Anda dapat memfilter pelamar yang berdomisili di kota tersebut. Pelamar yang tidak memenuhi syarat utama masih bisa melamar, tetapi akan diberi peringatan tentang ketidakcocokan kualifikasi.
        </InfoModal>
      )}
    </div>
  );
}

// ─── Pipeline Pages ────────────────────────────────────────────────────────────

const PIPELINE_STAGES = ["Melamar", "Penyaringan", "Wawancara", "Ditawarkan", "Diterima", "Ditolak"] as const;
type PipelineStage = typeof PIPELINE_STAGES[number];

interface PipelineJob {
  id: string; nama: string; status: "Diterbitkan" | "Tutup";
  lokasi: string; tipe: string; kategori: string;
  counts: Record<PipelineStage, number>;
}

interface Candidate {
  id: string; name: string; role: string; stage: PipelineStage; appliedDate: string;
  rating?: number; interviewSchedule?: string; createdBy?: string;
  interviewDuration?: number; interviewNote?: string;
}

const PIPELINE_JOBS: PipelineJob[] = [
  { id: "PJ-01", nama: "Backend Engineer",  status: "Diterbitkan", lokasi: "Jakarta, Indonesia", tipe: "Onsite · Full-time", kategori: "Engineering",    counts: { Melamar: 12, Penyaringan: 5, Wawancara: 3, Ditawarkan: 1, Diterima: 1, Ditolak: 8 } },
  { id: "PJ-02", nama: "Product Designer",  status: "Diterbitkan", lokasi: "Jakarta, Indonesia", tipe: "Onsite · Full-time", kategori: "Product",         counts: { Melamar: 8,  Penyaringan: 12,Wawancara: 2, Ditawarkan: 0, Diterima: 0, Ditolak: 3 } },
  { id: "PJ-03", nama: "DevOps Lead",       status: "Tutup",       lokasi: "Jakarta, Indonesia", tipe: "Onsite · Full-time", kategori: "Engineering",    counts: { Melamar: 45, Penyaringan: 20,Wawancara: 8, Ditawarkan: 3, Diterima: 0, Ditolak: 10 } },
  { id: "PJ-04", nama: "HR Generalist",     status: "Diterbitkan", lokasi: "Jakarta, Indonesia", tipe: "Onsite · Full-time", kategori: "Human Resource", counts: { Melamar: 15, Penyaringan: 4, Wawancara: 1, Ditawarkan: 0, Diterima: 0, Ditolak: 2 } },
];

const CANDIDATES_BY_JOB: Record<string, Candidate[]> = {
  "PJ-01": [
    { id: "C1", name: "Budi Santoso",   role: "Senior Software Engineer", stage: "Melamar",     appliedDate: "12 Jun 2025", rating: 4.2 },
    { id: "C2", name: "Ananda Putri",   role: "Backend Developer",        stage: "Melamar",     appliedDate: "13 Jun 2025", rating: 4.0 },
    { id: "C3", name: "Rizky Pratama",  role: "Software Engineer",        stage: "Penyaringan", appliedDate: "10 Jun 2025", rating: 4.5 },
    { id: "C4", name: "Dewi Lestari",   role: "Full Stack Developer",     stage: "Wawancara",   appliedDate: "8 Jun 2025",  rating: 4.7, interviewSchedule: "10 Jul · 14:00" },
    { id: "C18", name: "Fajar Nugraha", role: "Backend Engineer",        stage: "Wawancara",   appliedDate: "9 Jun 2025",  rating: 4.3 },
    { id: "C5", name: "Bambang Wijaya", role: "Backend Specialist",       stage: "Ditawarkan",  appliedDate: "5 Jun 2025",  rating: 4.8 },
    { id: "C13", name: "Farhan Maulana", role: "Backend Engineer",       stage: "Diterima",    appliedDate: "1 Jun 2025",  rating: 4.9 },
    { id: "C14", name: "Siti Nurhaliza", role: "Backend Engineer",       stage: "Ditolak",     appliedDate: "3 Jun 2025",  rating: 3.2 },
  ],
  "PJ-02": [
    { id: "C6", name: "Sari Indah",     role: "UI/UX Designer",           stage: "Melamar",     appliedDate: "14 Jun 2025", rating: 4.1 },
    { id: "C7", name: "Eko Prasetyo",   role: "Product Designer",         stage: "Penyaringan", appliedDate: "11 Jun 2025", rating: 4.3 },
    { id: "C8", name: "Fitri Wahyuni",  role: "Senior UX Researcher",     stage: "Wawancara",   appliedDate: "9 Jun 2025",  rating: 4.6, interviewSchedule: "12 Jul · 10:00" },
    { id: "C19", name: "Putri Ayuningtyas", role: "Product Designer",    stage: "Wawancara",   appliedDate: "10 Jun 2025", rating: 4.2 },
    { id: "C15", name: "Galih Pratomo", role: "Product Designer",        stage: "Ditolak",     appliedDate: "2 Jun 2025",  rating: 3.5 },
  ],
  "PJ-03": [
    { id: "C9",  name: "Hendra Kusuma",  role: "DevOps Engineer",          stage: "Melamar",     appliedDate: "15 Jun 2025", rating: 3.9 },
    { id: "C10", name: "Maya Puspita",   role: "Infrastructure Engineer",  stage: "Penyaringan", appliedDate: "12 Jun 2025", rating: 4.1 },
    { id: "C16", name: "Yusuf Ramadhan", role: "DevOps Engineer",         stage: "Ditolak",     appliedDate: "4 Jun 2025",  rating: 3.0 },
  ],
  "PJ-04": [
    { id: "C11", name: "Andi Saputra",   role: "HR Specialist",            stage: "Melamar",     appliedDate: "16 Jun 2025", rating: 4.0 },
    { id: "C12", name: "Rina Kartika",   role: "HR Generalist",            stage: "Penyaringan", appliedDate: "13 Jun 2025", rating: 4.4 },
    { id: "C17", name: "Melati Sari",    role: "HR Specialist",            stage: "Ditolak",     appliedDate: "6 Jun 2025",  rating: 3.3 },
  ],
};

const ACTIVITY_LOG = [
  { color: "#10B981", title: "Kandidat dibuat",                                            sub: "Created by Aditya Rahardjo",  date: "15 Jun 2025, 09:30", last: false },
  { color: "#0052FF", title: "Dipindahkan ke stage Interview HR",                          sub: "Moved by Aditya Rahardjo",   date: "16 Jun 2025, 14:15", last: false },
  { color: "#F59E0B", title: `Menambahkan komentar: "Pengalaman di Gojek sangat relevan dengan stack kita."`, sub: "Comment by Aditya Rahardjo", date: "16 Jun 2025, 15:00", last: false },
  { color: "#0052FF", title: "Dipindahkan ke stage Technical Test",                        sub: "Moved by Sarah Wijaya",      date: "18 Jun 2025, 10:00", last: false },
  { color: "#F59E0B", title: `Menambahkan komentar: "Skill system design sangat solid, bisa lanjut interview."`, sub: "Comment by Adityo", date: "20 Jun 2025, 11:30", last: false },
  { color: "#0052FF", title: "Dipindahkan ke stage Final Interview",                       sub: "Moved by Sarah Wijaya",      date: "22 Jun 2025, 09:00", last: false },
  { color: "#0052FF", title: "Dipindahkan ke stage Offering",                              sub: "Moved by HR Manager",        date: "25 Jun 2025, 16:45", last: true },
];

const STAGE_BADGE: Record<PipelineStage, { bg: string; text: string }> = {
  Melamar:     { bg: "bg-[#f1f5f9]",  text: "text-[#475569]" },
  Penyaringan: { bg: "bg-[rgba(14,165,233,0.1)]", text: "text-[#383b46]" },
  Wawancara:   { bg: "bg-[#fef3c7]",  text: "text-[#92400e]" },
  Ditawarkan:  { bg: "bg-[#d1fae5]",  text: "text-[#065f46]" },
  Diterima:    { bg: "bg-[#dbeafe]",  text: "text-[#1e40af]" },
  Ditolak:     { bg: "bg-[#ffe4e6]",  text: "text-[#f83a1e]" },
};

const STAGE_DROPDOWN_CHIP_BG: Record<PipelineStage, string> = {
  Melamar: "rgba(0,82,255,0.1)",
  Penyaringan: "rgba(14,165,233,0.1)",
  Wawancara: "rgba(245,158,11,0.1)",
  Ditawarkan: "rgba(139,92,246,0.1)",
  Diterima: "rgba(16,185,129,0.1)",
  Ditolak: "rgba(248,58,30,0.1)",
};

const KANBAN_DRAG_TYPE = "CANDIDATE_CARD";
const DEFAULT_CREATED_BY = "Aditya Rahardjo";

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#25D366" className="shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
    </svg>
  );
}

function StarRatingIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M8.90239 3.29825C8.54015 2.53913 7.45959 2.53913 7.09736 3.29825L5.98572 5.62786L3.42662 5.9652C2.59271 6.07513 2.2588 7.1028 2.86883 7.68189L4.74091 9.459L4.27093 11.9971C4.11778 12.8242 4.99198 13.4593 5.73123 13.0581L7.99987 11.8268L10.2685 13.0581C11.0078 13.4593 11.882 12.8242 11.7288 11.9971L11.2588 9.459L13.1309 7.68189C13.7409 7.1028 13.407 6.07513 12.5731 5.9652L10.014 5.62786L8.90239 3.29825Z" fill="#FF6B35" />
    </svg>
  );
}

// ── Kanban card (draggable, multi-selectable) ─────────────────────────────────

function KanbanCard({ candidate, stage, onOpen, onScheduleClick, selected, isActive, selectionMode, onToggleSelect, selectedCount }: {
  candidate: Candidate; stage: PipelineStage; onOpen: (c: Candidate) => void; onScheduleClick: (c: Candidate) => void;
  selected: boolean; isActive: boolean; selectionMode: boolean; onToggleSelect: () => void; selectedCount: number;
}) {
  const isRejected = stage === "Ditolak";
  const highlighted = selected || isActive;
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: KANBAN_DRAG_TYPE,
    item: { id: candidate.id, fromStage: stage },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  }), [candidate.id, stage]);

  return (
    <div
      ref={dragRef}
      onClick={() => onOpen(candidate)}
      className={`group relative w-full text-left rounded-[10px] border p-4 flex flex-col gap-3 transition-all shrink-0 shadow-[0px_4px_6px_rgba(0,0,0,0.04)] hover:shadow-[0px_8px_10px_rgba(0,0,0,0.1)] cursor-grab active:cursor-grabbing ${highlighted ? "bg-[#ebf2ff] border-[#0052ff]" : isRejected ? "bg-[#f6f4f4] border-[#e2e8f0]" : "bg-white border-[#e2e8f0]"} ${isDragging ? "opacity-40" : "opacity-100"}`}
    >
      {isDragging && selected && selectedCount >= 2 && (
        <div className="absolute -top-2 -right-2 z-20 bg-[#0052ff] text-white rounded-full size-[22px] flex items-center justify-center shadow-md">
          <span className="text-[11px] font-bold" style={{ fontFamily: "DM Sans, sans-serif" }}>{selectedCount}</span>
        </div>
      )}
      <button
        onClick={(e) => { e.stopPropagation(); onToggleSelect(); }}
        className={`absolute top-2.5 right-2.5 z-10 size-4 rounded border-[1.5px] flex items-center justify-center transition-opacity shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06)] ${selected ? "bg-[#0052ff] border-[#0052ff] opacity-100" : "bg-white border-[#c7c7c7] opacity-0 group-hover:opacity-100"} ${selectionMode ? "opacity-100" : ""}`}
      >
        {selected && <Check size={11} className="text-white" strokeWidth={3} />}
      </button>
      <div className={`flex flex-col gap-[5px] w-full ${stage === "Wawancara" ? "border-b border-[#e6e6e7] pb-2" : ""}`}>
        <div className="flex items-start justify-between w-full gap-2 pr-[22px]">
          <div className="flex flex-1 min-w-0 items-center gap-2.5">
            <img src={imgCandidate} alt="" className="size-5 rounded-full object-cover shrink-0" />
            <p className={`text-[14px] font-semibold truncate ${isRejected ? "text-[#777980]" : "text-[#0f172a]"}`} style={{ fontFamily: "DM Sans, sans-serif" }}>{candidate.name}</p>
          </div>
          <WhatsAppIcon />
        </div>
        <div className="flex items-center justify-between w-full">
          {candidate.rating != null && (
            <span className="flex items-center gap-1 text-[10px] text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>
              <StarRatingIcon size={14} />
              {candidate.rating}
            </span>
          )}
          <span className="text-[10px] text-[#94a3b8]" style={{ fontFamily: "DM Sans, sans-serif" }}>{candidate.appliedDate}</span>
        </div>
      </div>
      {stage === "Wawancara" && (
        candidate.interviewSchedule ? (
          <div className="flex items-center gap-1.5 bg-[#f0f9ff] rounded-[4px] px-2 py-1 w-full">
            <Video size={16} className="text-[#0284c7] shrink-0" />
            <span className="text-[11px] font-semibold text-[#0284c7] truncate" style={{ fontFamily: "DM Sans, sans-serif" }}>{candidate.interviewSchedule}</span>
          </div>
        ) : (
          <button
            onClick={(e) => { e.stopPropagation(); onScheduleClick(candidate); }}
            className="flex items-center justify-center gap-1.5 border border-[#0052ff] rounded-[11px] px-2 py-1 w-full hover:bg-[#ebf2ff] transition-colors"
          >
            <Video size={16} className="text-[#0052ff] shrink-0" />
            <span className="text-[11px] font-semibold text-[#0052ff]" style={{ fontFamily: "DM Sans, sans-serif" }}>Set Jadwal</span>
          </button>
        )
      )}
      <p className="text-[10px] text-[#94a3b8] text-center w-full" style={{ fontFamily: "DM Sans, sans-serif" }}>
        Created by {candidate.createdBy ?? DEFAULT_CREATED_BY}
      </p>
    </div>
  );
}

// ── Kanban column (drop target) ───────────────────────────────────────────────

function KanbanColumn({ stage, candidates, onDropRequest, onOpenCandidate, onScheduleClick, selectedIds, selectionMode, onToggleSelect, activeCandidateId }: {
  stage: PipelineStage;
  candidates: Candidate[];
  onDropRequest: (candidateId: string, from: PipelineStage, to: PipelineStage) => void;
  onOpenCandidate: (c: Candidate) => void;
  onScheduleClick: (c: Candidate) => void;
  selectedIds: Set<string>;
  selectionMode: boolean;
  onToggleSelect: (id: string) => void;
  activeCandidateId: string | null;
}) {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: KANBAN_DRAG_TYPE,
    drop: (item: { id: string; fromStage: PipelineStage }) => {
      if (item.fromStage !== stage) onDropRequest(item.id, item.fromStage, stage);
    },
    collect: (monitor) => ({ isOver: monitor.isOver() }),
  }), [stage, onDropRequest]);

  return (
    <div className="flex flex-col gap-4 flex-1 min-w-[240px]">
      <div className="flex items-center justify-between pb-2 border-b-[0.5px] border-[#c5c6c9]">
        <div className="flex items-center gap-2">
          <span className="text-[14px] font-bold text-[#4c4f59]" style={{ fontFamily: "DM Sans, sans-serif" }}>{stage}</span>
          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${STAGE_BADGE[stage].bg} ${STAGE_BADGE[stage].text}`} style={{ fontFamily: "DM Sans, sans-serif" }}>{candidates.length}</span>
        </div>
      </div>
      <div
        ref={dropRef}
        className={`bg-[#f1f5f9] rounded-xl p-3 flex flex-col gap-3 min-h-[600px] flex-1 overflow-y-auto border transition-colors ${isOver ? "border-dashed border-[#0052ff]" : "border-transparent"}`}
      >
        {candidates.length === 0 ? (
          <div className="bg-white rounded-lg border border-dashed border-[#c5c6c9] flex items-center justify-center h-20 w-full">
            <span className="text-[12px] text-[#c5c6c9]" style={{ fontFamily: "DM Sans, sans-serif" }}>Tidak ada kandidat</span>
          </div>
        ) : candidates.map(c => (
          <KanbanCard
            key={c.id}
            candidate={c}
            stage={stage}
            onOpen={onOpenCandidate}
            onScheduleClick={onScheduleClick}
            selected={selectedIds.has(c.id)}
            isActive={activeCandidateId === c.id}
            selectionMode={selectionMode}
            onToggleSelect={() => onToggleSelect(c.id)}
            selectedCount={selectedIds.size}
          />
        ))}
      </div>
    </div>
  );
}

// ── Confirm move modal ────────────────────────────────────────────────────────

function ConfirmMoveModal({ candidateName, toStage, onCancel, onConfirm }: {
  candidateName: string; toStage: PipelineStage; onCancel: () => void; onConfirm: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-6" onClick={onCancel}>
      <div className="bg-white rounded-2xl border border-[#e6e6e7] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] p-6 flex flex-col gap-4 w-full max-w-[400px]"
        onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between w-full gap-2">
          <p className="text-[18px] font-bold text-[#4c4f59]" style={{ fontFamily: "DM Sans, sans-serif" }}>Pindahkan Kandidat?</p>
          <button onClick={onCancel} className="bg-[#f3f4f6] rounded-full p-1 flex items-center justify-center text-[#606268] hover:text-[#383b46] transition-colors shrink-0">
            <X size={16} />
          </button>
        </div>
        <p className="text-[14px] leading-[20px] text-[#475569]" style={{ fontFamily: "Inter, sans-serif" }}>
          Apakah Anda yakin ingin memindahkan{" "}
          <span className="font-semibold text-[#0f172a]" style={{ fontFamily: "DM Sans, sans-serif" }}>{candidateName}</span>
          {" "}ke tahap{" "}
          <span className="font-semibold text-[#0052ff]" style={{ fontFamily: "DM Sans, sans-serif" }}>{toStage}</span>?
        </p>
        <div className="flex items-center justify-end gap-3 pt-1">
          <button onClick={onCancel}
            className="border-[1.5px] border-[#c5c6c9] rounded-full px-5 py-2 text-[14px] font-bold text-[#4c4f59] hover:bg-gray-50 transition-colors"
            style={{ fontFamily: "DM Sans, sans-serif" }}>Batal</button>
          <button onClick={onConfirm}
            className="bg-[#0052ff] rounded-full px-4 py-2 text-[14px] font-bold text-white hover:bg-[#0041cc] transition-colors"
            style={{ fontFamily: "DM Sans, sans-serif" }}>Ya, Pindahkan</button>
        </div>
      </div>
    </div>
  );
}

// ── Bulk action bar (shown when multiple candidates are selected) ────────────

function BulkActionBar({ selectedIds, candidates, onMoveStage, onReject, onDownload, onClear }: {
  selectedIds: Set<string>; candidates: Candidate[];
  onMoveStage: () => void; onReject: () => void; onDownload: () => void; onClear: () => void;
}) {
  const count = selectedIds.size;
  if (count === 0) return null;
  const selected = candidates.filter(c => selectedIds.has(c.id));
  const avatars = selected.slice(0, 3);

  return (
    <div className="fixed bottom-7 left-1/2 -translate-x-1/2 z-40">
      <div className="bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.18)] border border-[#e2e8f0] flex items-center gap-4 px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center">
            {avatars.map((c, i) => (
              <div key={c.id} className="relative size-7 rounded-full border-2 border-white overflow-hidden" style={{ marginLeft: i === 0 ? 0 : -8, zIndex: avatars.length - i }}>
                <img src={imgCandidate} alt="" className="size-full object-cover" />
              </div>
            ))}
            {count > 3 && (
              <div className="relative size-7 rounded-full border-2 border-white bg-[#f1f5f9] flex items-center justify-center" style={{ marginLeft: -8 }}>
                <span className="text-[10px] font-bold text-[#4c4f59]" style={{ fontFamily: "DM Sans, sans-serif" }}>+{count - 3}</span>
              </div>
            )}
          </div>
          <div>
            <p className="text-[14px] font-bold text-[#0f172a] leading-[18px]" style={{ fontFamily: "DM Sans, sans-serif" }}>{count} Kandidat</p>
            <p className="text-[11px] text-[#94a3b8]" style={{ fontFamily: "Inter, sans-serif" }}>dipilih</p>
          </div>
        </div>
        <div className="w-px h-9 bg-[#e2e8f0]" />
        <div className="flex items-center gap-2">
          <button onClick={onMoveStage} className="flex items-center gap-2 bg-[#0052ff] hover:bg-[#0041cc] text-white px-4 h-[38px] rounded-[10px] transition-colors text-[13px] font-semibold whitespace-nowrap" style={{ fontFamily: "DM Sans, sans-serif" }}>
            <ArrowRightLeft size={15} /> Pindah Tahap
          </button>
          <button onClick={onReject} className="flex items-center gap-2 bg-[#ffe4e6] hover:bg-[#fecdd3] text-[#f83a1e] px-4 h-[38px] rounded-[10px] transition-colors text-[13px] font-semibold whitespace-nowrap" style={{ fontFamily: "DM Sans, sans-serif" }}>
            <X size={15} /> Tolak
          </button>
          <button onClick={onDownload} className="flex items-center gap-2 bg-[#f1f5f9] hover:bg-[#e2e8f0] text-[#4c4f59] px-4 h-[38px] rounded-[10px] transition-colors text-[13px] font-semibold whitespace-nowrap" style={{ fontFamily: "DM Sans, sans-serif" }}>
            <Download size={15} /> Download CV
          </button>
        </div>
        <div className="w-px h-9 bg-[#e2e8f0]" />
        <button onClick={onClear} title="Batal pilih" className="flex items-center justify-center size-[34px] rounded-lg hover:bg-[#f1f5f9] text-[#94a3b8] hover:text-[#4c4f59] transition-colors shrink-0">
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

// ── Bulk move modal (pick a target stage for all selected candidates) ────────

function BulkMoveModal({ count, onConfirm, onCancel }: { count: number; onConfirm: (stage: PipelineStage) => void; onCancel: () => void }) {
  const [chosen, setChosen] = useState<PipelineStage | null>(null);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-6" onClick={onCancel}>
      <div className="bg-white rounded-2xl border border-[#e6e6e7] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] p-6 flex flex-col gap-5 w-full max-w-[420px]"
        onClick={e => e.stopPropagation()}>
        <div className="flex flex-col gap-1">
          <p className="text-[18px] font-bold text-[#0f172a]" style={{ fontFamily: "DM Sans, sans-serif" }}>Pindah Tahap</p>
          <p className="text-[14px] text-[#475569]" style={{ fontFamily: "Inter, sans-serif" }}>
            Pilih tahap tujuan untuk{" "}
            <span className="font-semibold text-[#0f172a]" style={{ fontFamily: "DM Sans, sans-serif" }}>{count} kandidat</span> terpilih.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {PIPELINE_STAGES.map(stage => (
            <button key={stage} onClick={() => setChosen(stage)}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-[10px] border text-left transition-colors ${chosen === stage ? "border-[#0052ff] bg-[#ebf2ff]" : "border-[#e2e8f0] bg-white hover:bg-gray-50"}`}>
              <div className={`size-[18px] rounded-full border-2 flex items-center justify-center shrink-0 ${chosen === stage ? "border-[#0052ff]" : "border-[#c5c6c9]"}`}>
                {chosen === stage && <div className="size-2 rounded-full bg-[#0052ff]" />}
              </div>
              <span className={`text-[14px] font-semibold ${chosen === stage ? "text-[#0052ff]" : "text-[#4c4f59]"}`} style={{ fontFamily: "DM Sans, sans-serif" }}>{stage}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center justify-end gap-3">
          <button onClick={onCancel}
            className="border-[1.5px] border-[#c5c6c9] rounded-full px-5 py-2 text-[14px] font-bold text-[#4c4f59] hover:bg-gray-50 transition-colors"
            style={{ fontFamily: "DM Sans, sans-serif" }}>Batal</button>
          <button onClick={() => chosen && onConfirm(chosen)} disabled={!chosen}
            className={`rounded-full px-4 py-2 text-[14px] font-bold transition-colors ${chosen ? "bg-[#0052ff] text-white hover:bg-[#0041cc]" : "bg-[#c5c6c9] text-white cursor-not-allowed"}`}
            style={{ fontFamily: "DM Sans, sans-serif" }}>Pindahkan</button>
        </div>
      </div>
    </div>
  );
}

// ── Bulk reject modal ─────────────────────────────────────────────────────────

function BulkRejectModal({ names, onConfirm, onCancel }: { names: string[]; onConfirm: () => void; onCancel: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-6" onClick={onCancel}>
      <div className="bg-white rounded-2xl border border-[#e6e6e7] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] p-6 flex flex-col gap-4 w-full max-w-[420px] items-center text-center"
        onClick={e => e.stopPropagation()}>
        <div className="bg-[#ffe4e6] rounded-full size-14 flex items-center justify-center">
          <X size={28} className="text-[#f83a1e]" strokeWidth={2.5} />
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-[18px] font-bold text-[#0f172a]" style={{ fontFamily: "DM Sans, sans-serif" }}>Tolak {names.length} Kandidat?</p>
          <p className="text-[14px] leading-[20px] text-[#475569]" style={{ fontFamily: "Inter, sans-serif" }}>
            Tindakan ini akan memindahkan kandidat berikut ke tahap{" "}
            <span className="font-semibold text-[#f83a1e]" style={{ fontFamily: "DM Sans, sans-serif" }}>Ditolak</span>:
          </p>
          <div className="flex flex-wrap gap-1.5 justify-center mt-1">
            {names.map((n, i) => (
              <span key={i} className="bg-[#f1f5f9] px-2.5 py-1 rounded-full text-[12px] font-semibold text-[#4c4f59]" style={{ fontFamily: "DM Sans, sans-serif" }}>{n}</span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 w-full pt-1">
          <button onClick={onCancel}
            className="flex-1 border-[1.5px] border-[#c5c6c9] rounded-full px-5 py-2 text-[14px] font-bold text-[#4c4f59] hover:bg-gray-50 transition-colors"
            style={{ fontFamily: "DM Sans, sans-serif" }}>Batal</button>
          <button onClick={onConfirm}
            className="flex-1 bg-[#f83a1e] rounded-full px-4 py-2 text-[14px] font-bold text-white hover:bg-[#d62e14] transition-colors"
            style={{ fontFamily: "DM Sans, sans-serif" }}>Ya, Tolak</button>
        </div>
      </div>
    </div>
  );
}

// ── Generic bottom toast ──────────────────────────────────────────────────────

function Toast({ title, subtitle, onDismiss }: { title: string; subtitle?: string; onDismiss: () => void }) {
  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-[#0f172a] text-white px-5 py-3.5 rounded-xl flex items-center gap-3 shadow-2xl">
        <div className="bg-[#22c55e] rounded-full size-7 flex items-center justify-center shrink-0">
          <Check size={15} className="text-white" strokeWidth={2.5} />
        </div>
        <div className="flex flex-col">
          <p className="text-[14px] font-semibold" style={{ fontFamily: "DM Sans, sans-serif" }}>{title}</p>
          {subtitle && <p className="text-[12px] text-[#94a3b8]" style={{ fontFamily: "Inter, sans-serif" }}>{subtitle}</p>}
        </div>
        <button onClick={onDismiss} className="ml-2 text-[#64748b] hover:text-white transition-colors shrink-0">
          <X size={16} />
        </button>
      </div>
    </div>
  );
}

// ── Schedule interview modal (EMP-07) ─────────────────────────────────────────

const INTERVIEW_MAX_DURATION_MIN = 90;
const INTERVIEW_DEFAULT_DURATION_MIN = 30;
const INTERVIEW_NOTE_MAX_LEN = 500;

function ScheduleInterviewModal({ candidateName, onCancel, onConfirm }: {
  candidateName: string;
  onCancel: () => void;
  onConfirm: (data: { dateTime: Date; durationMinutes: number; note: string }) => void;
}) {
  const nowLocal = format(new Date(), "yyyy-MM-dd'T'HH:mm");
  const [dateTime, setDateTime] = useState("");
  const [duration, setDuration] = useState(INTERVIEW_DEFAULT_DURATION_MIN);
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!dateTime) { setError("Tanggal & waktu wajib diisi."); return; }
    const parsed = new Date(dateTime);
    if (isBefore(parsed, new Date())) { setError("Waktu interview harus sekarang atau setelahnya."); return; }
    onConfirm({ dateTime: parsed, durationMinutes: duration, note: note.trim() });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-6" onClick={onCancel}>
      <div className="bg-white rounded-2xl border border-[#e6e6e7] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] p-6 flex flex-col gap-5 w-full max-w-[440px]"
        onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between w-full gap-2">
          <div>
            <p className="text-[18px] font-bold text-[#0f172a]" style={{ fontFamily: "DM Sans, sans-serif" }}>Jadwalkan Interview</p>
            <p className="text-[13px] text-[#64748b]" style={{ fontFamily: "Inter, sans-serif" }}>
              Kandidat: <span className="font-semibold text-[#0f172a]" style={{ fontFamily: "DM Sans, sans-serif" }}>{candidateName}</span>
            </p>
          </div>
          <button onClick={onCancel} className="bg-[#f3f4f6] rounded-full p-1 flex items-center justify-center text-[#606268] hover:text-[#383b46] transition-colors shrink-0">
            <X size={16} />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-semibold text-[#4c4f59] flex items-center gap-1" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Tanggal &amp; waktu <span className="text-[#f83a1e]">*</span>
            </label>
            <div className="flex items-center gap-2 border border-[#c5c6c9] rounded-xl h-10 px-3">
              <Calendar size={14} className="text-[#606268] shrink-0" />
              <input
                type="datetime-local"
                value={dateTime}
                min={nowLocal}
                onChange={e => { setDateTime(e.target.value); setError(""); }}
                className="flex-1 min-w-0 text-[13px] text-[#4c4f59] outline-none bg-transparent"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              />
            </div>
            <p className="text-[11px] text-[#94a3b8]" style={{ fontFamily: "Inter, sans-serif" }}>Waktu interview harus sekarang atau setelahnya. Akan tersinkron ke Google Calendar.</p>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-semibold text-[#4c4f59]" style={{ fontFamily: "DM Sans, sans-serif" }}>Durasi (menit)</label>
            <input
              type="number"
              min={1}
              max={INTERVIEW_MAX_DURATION_MIN}
              value={duration}
              onChange={e => setDuration(Math.min(INTERVIEW_MAX_DURATION_MIN, Math.max(1, Number(e.target.value) || 1)))}
              className="border border-[#c5c6c9] rounded-xl h-10 px-3 text-[13px] text-[#4c4f59] outline-none w-[120px]"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            />
            <p className="text-[11px] text-[#94a3b8]" style={{ fontFamily: "Inter, sans-serif" }}>Maks {INTERVIEW_MAX_DURATION_MIN} menit, default {INTERVIEW_DEFAULT_DURATION_MIN} menit.</p>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-semibold text-[#4c4f59]" style={{ fontFamily: "DM Sans, sans-serif" }}>Catatan undangan</label>
            <textarea
              value={note}
              maxLength={INTERVIEW_NOTE_MAX_LEN}
              onChange={e => setNote(e.target.value)}
              placeholder="Contoh: siapkan portofolio terbaru..."
              rows={3}
              className="border border-[#c5c6c9] rounded-xl px-3 py-2 text-[13px] text-[#4c4f59] placeholder-[#c5c6c9] outline-none resize-none"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            />
            <p className="text-[11px] text-[#94a3b8] text-right" style={{ fontFamily: "Inter, sans-serif" }}>{note.length}/{INTERVIEW_NOTE_MAX_LEN}</p>
          </div>

          {error && <p className="text-[12px] text-[#f83a1e]" style={{ fontFamily: "Inter, sans-serif" }}>{error}</p>}
        </div>

        <div className="flex items-center justify-end gap-3">
          <button onClick={onCancel}
            className="border-[1.5px] border-[#c5c6c9] rounded-full px-5 py-2 text-[14px] font-bold text-[#4c4f59] hover:bg-gray-50 transition-colors"
            style={{ fontFamily: "DM Sans, sans-serif" }}>Batal</button>
          <button onClick={handleSubmit}
            className="bg-[#0052ff] rounded-full px-4 py-2 text-[14px] font-bold text-white hover:bg-[#0041cc] transition-colors"
            style={{ fontFamily: "DM Sans, sans-serif" }}>Jadwalkan Interview</button>
        </div>
      </div>
    </div>
  );
}

// ── Candidate Profile Modal ──────────────────────────────────────────────────

function CandidateProfileModal({ candidate, onClose, onScheduleClick, onStageChangeRequest }: {
  candidate: Candidate; onClose: () => void; onScheduleClick: (c: Candidate) => void;
  onStageChangeRequest: (candidate: Candidate, newStage: PipelineStage) => void;
}) {
  const [tab, setTab] = useState<"detail" | "activity">("detail");
  const [notes, setNotes] = useState([
    { author: "Aditya Rahardjo", time: "16 Jun 2025", text: "Kandidat sangat potensial. Pengalaman di Gojek sangat relevan dengan kebutuhan tim." },
  ]);
  const [noteInput, setNoteInput] = useState("");
  const [joiningMeeting, setJoiningMeeting] = useState(false);
  const [stageDropdownOpen, setStageDropdownOpen] = useState(false);
  const currentStageIndex = PIPELINE_STAGES.indexOf(candidate.stage);

  const handleSaveNote = () => {
    if (!noteInput.trim()) return;
    setNotes(prev => [{ author: "Budi Santoso", time: "Baru saja", text: noteInput.trim() }, ...prev]);
    setNoteInput("");
  };

  const handleJoinMeeting = () => {
    setJoiningMeeting(true);
    setTimeout(() => setJoiningMeeting(false), 4000);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-6" onClick={onClose}>
      <div className="bg-[#f9f9f9] rounded-xl w-full max-w-[900px] max-h-[90vh] flex flex-col overflow-hidden"
        onClick={e => e.stopPropagation()}>

        {/* Modal scroll area */}
        <div className="overflow-y-auto flex-1 px-10 py-8 flex flex-col gap-5">

          {/* Title row */}
          <div className="flex items-center justify-between shrink-0">
            <p className="text-[28px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>Profile Kandidat</p>
            <button onClick={onClose} className="text-[#475569] hover:text-[#383b46] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeLinecap="round" strokeWidth="2" /></svg>
            </button>
          </div>

          {/* Header card */}
          <div className="bg-white rounded-xl border border-[#e2e8f0] shadow-[0px_1px_1.5px_rgba(0,0,0,0.1)] p-8 flex items-center gap-8 shrink-0">
            <img src={imgCandidate} alt="" className="size-[120px] rounded-full object-cover shrink-0" />
            <div className="flex-1 min-w-0 flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-3">
                  <p className="text-[28px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>{candidate.name}</p>
                  <div className="relative">
                    <button
                      onClick={() => setStageDropdownOpen(v => !v)}
                      style={{ backgroundColor: STAGE_DROPDOWN_CHIP_BG[candidate.stage] }}
                      className="flex items-center gap-2 px-3 py-2 border border-[#e2e8f0] rounded-lg cursor-pointer"
                    >
                      <span className="text-[13px] font-semibold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>{candidate.stage}</span>
                      <ChevronDown size={16} className={`text-[#777980] transition-transform ${stageDropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    {stageDropdownOpen && (
                      <>
                        <div className="fixed inset-0 z-10" onClick={() => setStageDropdownOpen(false)} />
                        <div className="absolute z-20 top-[calc(100%+4px)] left-0 bg-white border border-[#c5c6c9] rounded-xl w-[160px] overflow-hidden shadow-lg">
                          {PIPELINE_STAGES.map((stage, i) => {
                            const isCurrent = stage === candidate.stage;
                            const isForward = i > currentStageIndex;
                            return (
                              <button
                                key={stage}
                                disabled={!isForward}
                                onClick={() => {
                                  if (!isForward) return;
                                  setStageDropdownOpen(false);
                                  onStageChangeRequest(candidate, stage);
                                }}
                                className={`w-full text-left px-3 h-10 flex items-center border-b border-[#e6e6e7] last:border-b-0 text-[12px] transition-colors ${isCurrent ? "bg-[#ebf2ff] text-[#4c4f59]" : isForward ? "bg-white text-[#4c4f59] hover:bg-gray-50 cursor-pointer" : "bg-white text-[#c5c6c9] cursor-not-allowed"}`}
                                style={{ fontFamily: "DM Sans, sans-serif" }}
                              >
                                {stage}
                              </button>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <p className="text-[16px] text-[#4c4f59]" style={{ fontFamily: "Inter, sans-serif" }}>{candidate.role} dengan 8+ tahun pengalaman di backend development</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d={svgCandidatePaths.p10d0c00} stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" /></svg>
                  <span className="text-[14px] text-[#4c4f59]" style={{ fontFamily: "Inter, sans-serif" }}>budisantoso@email.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d={svgCandidatePaths.p29098400} stroke="#94A3B8" strokeLinecap="round" strokeWidth="2" /></svg>
                  <span className="text-[14px] text-[#4c4f59]" style={{ fontFamily: "Inter, sans-serif" }}>+62 812 3456 7890</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-[220px] shrink-0">
              {candidate.stage === "Wawancara" && (
                candidate.interviewSchedule ? (
                  <button onClick={handleJoinMeeting}
                    className="bg-[#0052ff] h-10 rounded-full flex items-center justify-center gap-2 text-white font-semibold text-[14px] hover:bg-[#0041cc] transition-colors w-full" style={{ fontFamily: "Inter, sans-serif" }}>
                    <Video size={16} /> Join Meeting
                  </button>
                ) : (
                  <button onClick={() => { onClose(); onScheduleClick(candidate); }}
                    className="bg-[#0052ff] h-10 rounded-full flex items-center justify-center gap-2 text-white font-semibold text-[14px] hover:bg-[#0041cc] transition-colors w-full" style={{ fontFamily: "Inter, sans-serif" }}>
                    <Video size={16} /> Set Jadwal
                  </button>
                )
              )}
              <button className={`h-10 rounded-full flex items-center justify-center gap-2 font-semibold text-[14px] transition-colors w-full ${candidate.stage === "Wawancara" ? "bg-[#f8fafc] border border-[#0052ff] text-[#0052ff] hover:bg-[#ebf2ff]" : "bg-[#0052ff] text-white hover:bg-[#0041cc]"}`} style={{ fontFamily: "Inter, sans-serif" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d={svgCandidatePaths.p37225cc0} stroke={candidate.stage === "Wawancara" ? "#0052FF" : "white"} strokeWidth="2" /></svg>
                Download CV
              </button>
              <button className="bg-[#f8fafc] h-10 rounded-full border border-[#0052ff] flex items-center justify-center gap-2 text-[#0052ff] font-semibold text-[14px] hover:bg-[#ebf2ff] transition-colors w-full" style={{ fontFamily: "Inter, sans-serif" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d={svgCandidatePaths.p2cd64800} fill="#0052FF" /></svg>
                Hubungi Kandidat
              </button>
            </div>
          </div>

          {/* Tab bar */}
          <div className="flex items-end gap-8 border-b border-[#e2e8f0] shrink-0">
            <button onClick={() => setTab("detail")} className="flex flex-col items-center gap-2 pb-0">
              <span className={`text-[14px] pb-2 ${tab === "detail" ? "font-bold text-[#0052ff]" : "font-semibold text-[#94a3b8]"}`} style={{ fontFamily: "DM Sans, sans-serif" }}>Detail Kandidat</span>
              {tab === "detail" && <div className="h-[3px] w-full bg-[#0052ff] rounded-full -mb-px" />}
            </button>
            <button onClick={() => setTab("activity")} className="flex flex-col items-center gap-2 pb-0">
              <span className={`text-[14px] pb-2 ${tab === "activity" ? "font-bold text-[#0052ff]" : "font-semibold text-[#94a3b8]"}`} style={{ fontFamily: "DM Sans, sans-serif" }}>Activity Log</span>
              {tab === "activity" && <div className="h-[3px] w-full bg-[#0052ff] rounded-full -mb-px" />}
            </button>
          </div>

          {/* Tab content */}
          {tab === "detail" ? (
            <div className="flex gap-5 items-start">
              {/* Left column */}
              <div className="flex-1 min-w-0 flex flex-col gap-4">
                {/* Pengalaman Kerja */}
                <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 flex flex-col gap-4">
                  <p className="text-[16px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>Pengalaman Kerja</p>
                  {[
                    { title: "Senior Software Engineer", company: "Gojek", period: "Jan 2021 - Sekarang", desc: "Memimpin tim backend 5 orang, mengembangkan microservices architecture untuk payment system." },
                    { title: "Software Engineer", company: "Tokopedia", period: "Mar 2018 - Des 2020", desc: "Mengembangkan API gateway dan optimasi performa database." },
                    { title: "Junior Developer", company: "Bukalapak", period: "Jun 2016 - Feb 2018", desc: "Membangun fitur checkout dan integrasi payment gateway." },
                  ].map((exp, i) => (
                    <div key={i} className={i > 0 ? "pt-4 border-t border-[#e2e8f0]" : ""}>
                      <div className="flex items-start justify-between">
                        <p className="text-[14px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>{exp.title}</p>
                        <p className="text-[12px] text-[#94a3b8] shrink-0" style={{ fontFamily: "Inter, sans-serif" }}>{exp.period}</p>
                      </div>
                      <p className="text-[13px] text-[#0052ff] font-semibold mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{exp.company}</p>
                      <p className="text-[13px] text-[#4c4f59] mt-1" style={{ fontFamily: "Inter, sans-serif" }}>{exp.desc}</p>
                    </div>
                  ))}
                </div>
                {/* Pendidikan */}
                <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 flex flex-col gap-4">
                  <p className="text-[16px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>Pendidikan</p>
                  {[
                    { title: "S2, Computer Science", school: "Universitas Indonesia", period: "2019 - 2021" },
                    { title: "S1, Teknik Informatika", school: "Institut Teknologi Bandung", period: "2012 - 2016" },
                  ].map((edu, i) => (
                    <div key={i} className={i > 0 ? "pt-4 border-t border-[#e2e8f0]" : ""}>
                      <div className="flex items-start justify-between">
                        <p className="text-[14px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>{edu.title}</p>
                        <p className="text-[12px] text-[#94a3b8]" style={{ fontFamily: "Inter, sans-serif" }}>{edu.period}</p>
                      </div>
                      <p className="text-[13px] text-[#4c4f59] mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{edu.school}</p>
                    </div>
                  ))}
                </div>
                {/* Skill */}
                <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 flex flex-col gap-3">
                  <p className="text-[16px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>Skill &amp; Sertifikasi</p>
                  <div className="flex flex-wrap gap-2">
                    {["Go", "Java", "Python", "Kubernetes", "Docker", "PostgreSQL", "Redis", "gRPC", "System Design", "Microservices", "AWS", "CI/CD"].map(s => (
                      <span key={s} className="bg-[#f1f5f9] text-[#475569] text-[12px] font-medium px-3 py-1 rounded-full" style={{ fontFamily: "Inter, sans-serif" }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Right sidebar */}
              <div className="w-[240px] shrink-0 flex flex-col gap-4">
                <div className="bg-white rounded-xl border border-[#e2e8f0] p-5 flex flex-col gap-4">
                  <p className="text-[14px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>Informasi Pribadi</p>
                  {[{ label: "TANGGAL LAHIR", value: "15-03-1992" }, { label: "JENIS KELAMIN", value: "Laki-laki" }, { label: "DOMISILI", value: "Jakarta Selatan" }].map(item => (
                    <div key={item.label}>
                      <p className="text-[10px] font-semibold text-[#94a3b8] tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>{item.label}</p>
                      <p className="text-[13px] text-[#383b46] mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white rounded-xl border border-[#e2e8f0] p-5 flex flex-col gap-4">
                  <p className="text-[14px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>Preferensi Kerja</p>
                  {[{ label: "LOKASI", value: "Jakarta" }, { label: "TIPE KERJA", value: "Hybrid" }, { label: "GAJI EKSPEKTASI", value: "Rp 35.000.000 - Rp 45.000.000 / bln" }].map(item => (
                    <div key={item.label}>
                      <p className="text-[10px] font-semibold text-[#94a3b8] tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>{item.label}</p>
                      <p className="text-[13px] text-[#383b46] mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{item.value}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-white rounded-xl border border-[#e2e8f0] p-5 flex flex-col gap-3">
                  <p className="text-[14px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>Portofolio</p>
                  <a href="#" className="flex items-center gap-2 text-[13px] text-[#0052ff] hover:underline" style={{ fontFamily: "Inter, sans-serif" }}>
                    <svg width="14" height="14" viewBox="0 0 18 18" fill="none"><path d={svgCandidatePaths.p32832dc0} stroke="#0052FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
                    github.com/budisantoso
                  </a>
                  <a href="#" className="flex items-center gap-2 text-[13px] text-[#0052ff] hover:underline" style={{ fontFamily: "Inter, sans-serif" }}>
                    <svg width="14" height="14" viewBox="0 0 18 18" fill="none"><path d={svgCandidatePaths.p19a5ee80} fill="#0052FF" /><circle cx="3" cy="3" r="1.5" fill="#0052FF" /><path d={svgCandidatePaths.p104b6a40} fill="#0052FF" /></svg>
                    linkedin.com/in/budisantoso
                  </a>
                </div>
                <div className="bg-white rounded-xl border border-[#e2e8f0] p-5 flex flex-col gap-3">
                  <p className="text-[14px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>Catatan Internal</p>
                  <div className="flex flex-col gap-3">
                    {notes.map((n, i) => (
                      <div key={i} className="bg-[#f8fafc] rounded-lg p-3 flex flex-col gap-1">
                        <p className="text-[12px]" style={{ fontFamily: "Inter, sans-serif" }}>
                          <span className="font-bold text-[#4c4f59]">{n.author}</span>
                          <span className="text-[#94a3b8]"> · {n.time}</span>
                        </p>
                        <p className="text-[13px] text-[#4c4f59]" style={{ fontFamily: "Inter, sans-serif" }}>{n.text}</p>
                      </div>
                    ))}
                  </div>
                  <div className="relative">
                    <textarea
                      value={noteInput}
                      onChange={e => setNoteInput(e.target.value)}
                      placeholder="Tulis catatan baru..."
                      rows={3}
                      className="w-full rounded-lg border border-[#e2e8f0] px-3 py-2.5 text-[13px] text-[#4c4f59] placeholder-[#94a3b8] outline-none resize-none focus:border-[#0052ff] transition-colors"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    />
                    {noteInput.trim() && (
                      <button
                        onClick={handleSaveNote}
                        className="absolute bottom-2.5 right-2.5 bg-[#0052ff] text-white text-[12px] font-semibold px-3 py-1 rounded-md hover:bg-[#0041cc] transition-colors"
                        style={{ fontFamily: "DM Sans, sans-serif" }}
                      >
                        Simpan
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Activity Log tab */
            <div className="bg-white rounded-xl border border-[#e2e8f0] p-6 flex flex-col gap-4">
              <p className="text-[16px] font-bold text-[#383b46]" style={{ fontFamily: "Inter, sans-serif" }}>Activity Log</p>
              <div className="flex flex-col gap-4">
                {ACTIVITY_LOG.map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="size-[10px] rounded-full shrink-0 mt-[3px]" style={{ backgroundColor: item.color }} />
                      {!item.last && <div className="w-0.5 flex-1 bg-[#e2e8f0] mt-1 min-h-[28px]" />}
                    </div>
                    <div className="flex-1 min-w-0 pb-4">
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-[14px] font-semibold text-[#383b46]" style={{ fontFamily: "Inter, sans-serif" }}>{item.title}</p>
                        <p className="text-[12px] text-[#94a3b8] shrink-0" style={{ fontFamily: "Inter, sans-serif" }}>{item.date}</p>
                      </div>
                      <p className="text-[13px] font-medium text-[#383b46] mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {joiningMeeting && (
        <Toast
          title="Membuka ruang tunggu interview"
          subtitle={`Menghubungkan ke sesi video dengan ${candidate.name}...`}
          onDismiss={() => setJoiningMeeting(false)}
        />
      )}
    </div>
  );
}

// ── Pipeline list page ────────────────────────────────────────────────────────

function PipelineContent() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filtered = PIPELINE_JOBS.filter(j => j.nama.toLowerCase().includes(search.toLowerCase()));

  const statusBadge = (s: "Diterbitkan" | "Tutup") =>
    s === "Diterbitkan"
      ? "bg-[#d1fae5] text-[#065f46]"
      : "bg-[#fee2e2] text-[#991b1b]";

  return (
    <div className="flex-1 min-w-0 h-full overflow-y-auto bg-[#f9f9f9]">
      {/* Top bar */}
      <div className="bg-white border-b border-[#e6e6e7] px-10 py-5 flex items-center justify-end shrink-0">
        <TopBarUserMenu />
      </div>

      <div className="flex flex-col gap-6 px-10 pt-8 pb-12">
        <div>
          <p className="text-[28px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>Pipeline</p>
          <p className="text-sm text-[#64748b] mt-1" style={{ fontFamily: "DM Sans, sans-serif" }}>Pilih lowongan untuk melihat pipeline kandidat</p>
        </div>

        {/* Search + Filter */}
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-white border border-[#c5c6c9] rounded-xl h-10 flex items-center gap-2 px-3">
            <Search size={16} className="text-[#606268] shrink-0" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Cari posisi lowongan..."
              className="flex-1 text-[13px] text-[#4c4f59] placeholder-[#c5c6c9] outline-none bg-transparent"
              style={{ fontFamily: "DM Sans, sans-serif" }} />
          </div>
          <button className="h-10 px-4 rounded-full border border-[#c5c6c9] bg-white flex items-center gap-2 hover:bg-gray-50 transition-colors">
            <span className="text-[13px] text-[#4c4f59]" style={{ fontFamily: "DM Sans, sans-serif" }}>Filter</span>
            <ListFilter size={14} className="text-[#606268]" />
          </button>
        </div>

        {/* Job cards */}
        <div className="flex flex-col gap-4">
          {filtered.map(job => (
            <div key={job.id} className="bg-white rounded-xl border border-[#e6e6e7] px-6 py-5 flex items-center justify-between hover:border-[#c5c6c9] transition-colors">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <p className="text-[18px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>{job.nama}</p>
                  <span className={`${statusBadge(job.status)} text-[11px] font-semibold px-2 py-0.5 rounded-full`} style={{ fontFamily: "DM Sans, sans-serif" }}>{job.status}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d={svgDetailPaths.p1b8a0e00} stroke="#777980" strokeLinecap="round" strokeWidth="1.5" /></svg>
                    <span className="text-[12px] text-[#475569]" style={{ fontFamily: "Inter, sans-serif" }}>{job.lokasi}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d={svgDetailPaths.p2e445000} stroke="#777980" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" /></svg>
                    <span className="text-[12px] text-[#475569]" style={{ fontFamily: "Inter, sans-serif" }}>{job.tipe}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d={svgDetailPaths.p33811580} stroke="#777980" strokeLinecap="round" strokeWidth="1.5" /></svg>
                    <span className="text-[12px] text-[#475569]" style={{ fontFamily: "Inter, sans-serif" }}>{job.kategori}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {PIPELINE_STAGES.map((stage, i) => (
                    <React.Fragment key={stage}>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[13px] font-semibold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>{job.counts[stage]}</span>
                        <span className="text-[13px] text-[#64748b]" style={{ fontFamily: "DM Sans, sans-serif" }}>{stage}</span>
                      </div>
                      {i < PIPELINE_STAGES.length - 1 && <span className="text-[#c5c6c9]">|</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <button onClick={() => navigate(`/pipeline/${job.id}`)}
                className="h-10 px-5 rounded-full border-[1.5px] border-[#0052ff] text-[#0052ff] font-bold text-[14px] hover:bg-[#ebf2ff] transition-colors shrink-0"
                style={{ fontFamily: "DM Sans, sans-serif" }}>Lihat Pipeline</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Pipeline detail (kanban) page ─────────────────────────────────────────────

function PipelineDetailContent() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const job = PIPELINE_JOBS.find(j => j.id === id);
  const [candidates, setCandidates] = useState<Candidate[]>(() => (id && CANDIDATES_BY_JOB[id]) ?? []);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [search, setSearch] = useState("");
  const [pendingMove, setPendingMove] = useState<{ candidateId: string; from: PipelineStage; to: PipelineStage } | null>(null);

  // Multi-select + bulk actions
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [bulkModal, setBulkModal] = useState<"move" | "reject" | null>(null);
  const [pendingBulkDragMove, setPendingBulkDragMove] = useState<PipelineStage | null>(null);
  const [downloadCount, setDownloadCount] = useState<number | null>(null);

  // Schedule interview (EMP-07)
  const [schedulingCandidate, setSchedulingCandidate] = useState<Candidate | null>(null);
  const [scheduleToast, setScheduleToast] = useState<string | null>(null);

  if (!job) return (
    <div className="flex-1 flex items-center justify-center bg-[#f9f9f9]">
      <button onClick={() => navigate("/pipeline")} className="text-[#0052ff] hover:underline text-[14px]">← Kembali ke Pipeline</button>
    </div>
  );

  const filteredCandidates = candidates.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));
  const pendingCandidate = pendingMove ? candidates.find(c => c.id === pendingMove.candidateId) : null;

  const toggleSelect = (candidateId: string) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      next.has(candidateId) ? next.delete(candidateId) : next.add(candidateId);
      return next;
    });
  };
  const clearSelection = () => setSelectedIds(new Set());

  const handleDropRequest = (candidateId: string, from: PipelineStage, to: PipelineStage) => {
    // Dragging a card that's part of a multi-selection moves the whole selection
    if (selectedIds.has(candidateId) && selectedIds.size >= 2) {
      setPendingBulkDragMove(to);
    } else {
      setPendingMove({ candidateId, from, to });
    }
  };

  const confirmMove = () => {
    if (!pendingMove) return;
    setCandidates(prev => prev.map(c => c.id === pendingMove.candidateId ? { ...c, stage: pendingMove.to } : c));
    setPendingMove(null);
  };

  const confirmBulkDragMove = () => {
    if (!pendingBulkDragMove) return;
    const target = pendingBulkDragMove;
    setCandidates(prev => prev.map(c => selectedIds.has(c.id) ? { ...c, stage: target } : c));
    setPendingBulkDragMove(null);
    clearSelection();
  };

  const handleBulkMove = (targetStage: PipelineStage) => {
    setCandidates(prev => prev.map(c => selectedIds.has(c.id) ? { ...c, stage: targetStage } : c));
    setBulkModal(null);
    clearSelection();
  };

  const handleBulkReject = () => {
    setCandidates(prev => prev.map(c => selectedIds.has(c.id) ? { ...c, stage: "Ditolak" } : c));
    setBulkModal(null);
    clearSelection();
  };

  const handleDownload = () => {
    setDownloadCount(selectedIds.size);
    clearSelection();
    setTimeout(() => setDownloadCount(null), 4000);
  };

  const handleScheduleConfirm = ({ dateTime, durationMinutes, note }: { dateTime: Date; durationMinutes: number; note: string }) => {
    if (!schedulingCandidate) return;
    const label = format(dateTime, "d MMM · HH:mm");
    setCandidates(prev => prev.map(c => c.id === schedulingCandidate.id
      ? { ...c, interviewSchedule: label, interviewDuration: durationMinutes, interviewNote: note }
      : c));
    setScheduleToast(schedulingCandidate.name);
    setSchedulingCandidate(null);
    setTimeout(() => setScheduleToast(null), 4000);
  };

  return (
    <div className="flex-1 min-w-0 h-full flex flex-col overflow-hidden bg-[#f9f9f9]">
      {/* Top bar */}
      <div className="bg-white border-b border-[#e6e6e7] px-10 py-5 flex items-center justify-end shrink-0">
        <TopBarUserMenu />
      </div>

      {/* Title */}
      <div className="px-10 pt-6 pb-4 shrink-0 flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/pipeline")} className="text-[#383b46] hover:text-[#0052ff] transition-colors"><ArrowLeft size={20} /></button>
          <p className="text-[24px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>Pipeline Detail</p>
        </div>
        <div className="flex items-center gap-2 pl-9" style={{ fontFamily: "DM Sans, sans-serif" }}>
          <button onClick={() => navigate("/pipeline")} className="text-[14px] font-semibold text-[#ff6b35] hover:underline">Daftar Lowongan</button>
          <ChevronRight size={14} className="text-[#606268]" />
          <span className="text-[14px] text-[#64748b]">Pipeline Detail</span>
        </div>
      </div>

      {/* Kanban board card */}
      <div className="flex-1 min-h-0 px-10 pb-8 overflow-hidden">
        <div className="bg-white rounded-xl border border-[#e6e6e7] h-full flex flex-col overflow-hidden">
          {/* Header row inside card */}
          <div className="border-b border-[#e2e8f0] p-6 flex items-center justify-between gap-4 shrink-0 flex-wrap">
            <div className="flex flex-col gap-1">
              <p className="text-[21px] font-bold text-[#0f172a]" style={{ fontFamily: "DM Sans, sans-serif" }}>{job.nama}</p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <MapPin size={14} className="text-[#475569]" />
                  <span className="text-[12px] text-[#475569]" style={{ fontFamily: "Inter, sans-serif" }}>{job.lokasi}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase size={14} className="text-[#475569]" />
                  <span className="text-[12px] text-[#475569]" style={{ fontFamily: "Inter, sans-serif" }}>{job.tipe}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 shrink-0">
              <div className="bg-white border border-[#c5c6c9] rounded-xl h-10 flex items-center gap-2 px-3 w-[266px]">
                <Search size={14} className="text-[#606268] shrink-0" />
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Cari Kandidat . . ."
                  className="flex-1 min-w-0 text-[13px] text-[#4c4f59] placeholder-[#c5c6c9] outline-none bg-transparent"
                  style={{ fontFamily: "DM Sans, sans-serif" }} />
              </div>
              <button className="h-10 px-4 rounded-full border-[1.5px] border-[#c5c6c9] bg-white flex items-center gap-2 hover:bg-gray-50 transition-colors shrink-0">
                <span className="text-[13px] font-bold text-[#4c4f59]" style={{ fontFamily: "DM Sans, sans-serif" }}>Filter</span>
                <ListFilter size={14} className="text-[#606268]" />
              </button>
            </div>
          </div>

          {/* Kanban scroll area */}
          <div className="flex-1 min-h-0 overflow-auto bg-[#f9f9f9] p-8">
            <DndProvider backend={HTML5Backend}>
              <div className="flex gap-4 h-full" style={{ minWidth: `${PIPELINE_STAGES.length * 240}px` }}>
                {PIPELINE_STAGES.map(stage => (
                  <KanbanColumn
                    key={stage}
                    stage={stage}
                    candidates={filteredCandidates.filter(c => c.stage === stage)}
                    onDropRequest={handleDropRequest}
                    onOpenCandidate={setSelectedCandidate}
                    onScheduleClick={setSchedulingCandidate}
                    selectedIds={selectedIds}
                    selectionMode={selectedIds.size > 0}
                    onToggleSelect={toggleSelect}
                    activeCandidateId={selectedCandidate?.id ?? null}
                  />
                ))}
              </div>
            </DndProvider>
          </div>
        </div>
      </div>

      <BulkActionBar
        selectedIds={selectedIds}
        candidates={candidates}
        onMoveStage={() => setBulkModal("move")}
        onReject={() => setBulkModal("reject")}
        onDownload={handleDownload}
        onClear={clearSelection}
      />

      {selectedCandidate && (
        <CandidateProfileModal
          candidate={selectedCandidate}
          onClose={() => setSelectedCandidate(null)}
          onScheduleClick={setSchedulingCandidate}
          onStageChangeRequest={(c, newStage) => {
            setSelectedCandidate(null);
            setPendingMove({ candidateId: c.id, from: c.stage, to: newStage });
          }}
        />
      )}
      {pendingMove && pendingCandidate && (
        <ConfirmMoveModal
          candidateName={pendingCandidate.name}
          toStage={pendingMove.to}
          onCancel={() => setPendingMove(null)}
          onConfirm={confirmMove}
        />
      )}
      {pendingBulkDragMove && (
        <ConfirmMoveModal
          candidateName={`${selectedIds.size} kandidat`}
          toStage={pendingBulkDragMove}
          onCancel={() => setPendingBulkDragMove(null)}
          onConfirm={confirmBulkDragMove}
        />
      )}
      {bulkModal === "move" && (
        <BulkMoveModal
          count={selectedIds.size}
          onConfirm={handleBulkMove}
          onCancel={() => setBulkModal(null)}
        />
      )}
      {bulkModal === "reject" && (
        <BulkRejectModal
          names={candidates.filter(c => selectedIds.has(c.id)).map(c => c.name)}
          onConfirm={handleBulkReject}
          onCancel={() => setBulkModal(null)}
        />
      )}
      {downloadCount != null && (
        <Toast
          title={`Mengunduh ${downloadCount} CV sebagai ZIP...`}
          subtitle={`cv_kandidat_${downloadCount}x.zip`}
          onDismiss={() => setDownloadCount(null)}
        />
      )}
      {schedulingCandidate && (
        <ScheduleInterviewModal
          candidateName={schedulingCandidate.name}
          onCancel={() => setSchedulingCandidate(null)}
          onConfirm={handleScheduleConfirm}
        />
      )}
      {scheduleToast && (
        <Toast
          title="Interview terjadwalkan"
          subtitle={`Notifikasi terkirim ke ${scheduleToast}`}
          onDismiss={() => setScheduleToast(null)}
        />
      )}
    </div>
  );
}

// ── Analytics page (EMP-08) ───────────────────────────────────────────────────

const ANALYTICS_METRIC_DEFS = [
  { key: "pelamar", label: "Total Pelamar" },
  { key: "conversion", label: "Conversion Rate" },
  { key: "hiring", label: "Waktu Hiring" },
] as const;
type AnalyticsMetricKey = typeof ANALYTICS_METRIC_DEFS[number]["key"];

function AnalyticsStatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white flex-1 min-w-0 rounded-2xl border border-[#e6e6e7] shadow-[0px_4px_6px_rgba(0,0,0,0.02)] p-6 flex flex-col gap-3">
      <p className="text-[#777980] text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>{label}</p>
      <p className="text-[#0052ff] text-[21px] font-bold leading-[26px]" style={{ fontFamily: "DM Sans, sans-serif" }}>{value}</p>
    </div>
  );
}

function toDateInputValue(d: Date) {
  return d.toISOString().slice(0, 10);
}

function AnalyticsContent() {
  const today = new Date();
  const defaultStart = new Date(today);
  defaultStart.setDate(today.getDate() - 30);

  const [startDate, setStartDate] = useState(toDateInputValue(defaultStart));
  const [endDate, setEndDate] = useState(toDateInputValue(today));
  const [selectedJobIds, setSelectedJobIds] = useState<string[]>(PIPELINE_JOBS.map(j => j.id));
  const [jobDropdownOpen, setJobDropdownOpen] = useState(false);
  const [activeMetrics, setActiveMetrics] = useState<Set<AnalyticsMetricKey>>(new Set(["pelamar", "conversion", "hiring"]));
  const [trendView, setTrendView] = useState<"mingguan" | "bulanan">("mingguan");

  const toggleJob = (id: string) => {
    setSelectedJobIds(prev => prev.includes(id) ? prev.filter(j => j !== id) : [...prev, id]);
  };
  const toggleMetric = (key: AnalyticsMetricKey) => {
    setActiveMetrics(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const selectedJobs = PIPELINE_JOBS.filter(j => selectedJobIds.includes(j.id));
  const totalPelamar = selectedJobs.reduce((sum, j) => sum + j.counts.Melamar, 0);
  const totalDiterima = selectedJobs.reduce((sum, j) => sum + j.counts.Diterima, 0);
  const conversionRate = totalPelamar > 0 ? (totalDiterima / totalPelamar) * 100 : 0;
  const avgHiringDays = selectedJobs.length > 0 ? Math.round(18 + (selectedJobs.length - PIPELINE_JOBS.length) * 0.8) : 0;

  const rangeDays = Math.max(1, Math.round((new Date(endDate).getTime() - new Date(startDate).getTime()) / 86400000));
  const weekCount = Math.min(12, Math.max(1, Math.round(rangeDays / 7)));
  const monthCount = Math.min(12, Math.max(1, Math.round(rangeDays / 30)));
  const jobFactor = Math.max(1, selectedJobs.length);

  const weeklyTrend = Array.from({ length: weekCount }, (_, i) => {
    const weekStart = new Date(startDate);
    weekStart.setDate(weekStart.getDate() + i * 7);
    return {
      label: format(weekStart, "d MMM"),
      pelamar: Math.max(0, Math.round(10 + Math.sin(i * 0.9) * 6 + i * 1.2) * jobFactor),
    };
  });
  const monthlyTrend = Array.from({ length: monthCount }, (_, i) => {
    const monthDate = subMonths(new Date(endDate), monthCount - 1 - i);
    return {
      label: format(monthDate, "MMM yyyy"),
      pelamar: Math.max(0, Math.round(40 + Math.sin(i * 0.7) * 15 + i * 4) * jobFactor),
    };
  });
  const trendData = trendView === "mingguan" ? weeklyTrend : monthlyTrend;

  const handleExportCsv = () => {
    const lines: string[] = [];
    lines.push("Analitik Rekrutmen");
    lines.push(`Rentang Waktu,${startDate} s/d ${endDate}`);
    lines.push(`Lowongan,"${selectedJobs.map(j => j.nama).join("; ")}"`);
    lines.push("");
    lines.push("Metrik,Nilai");
    lines.push(`Total Pelamar,${totalPelamar}`);
    lines.push(`Conversion Rate (%),${conversionRate.toFixed(1)}`);
    lines.push(`Rata-rata Waktu Hiring (Hari),${avgHiringDays}`);
    lines.push("");
    lines.push("Lowongan,Pelamar,Diterima,Conversion Rate (%)");
    selectedJobs.forEach(j => {
      const rate = j.counts.Melamar > 0 ? (j.counts.Diterima / j.counts.Melamar) * 100 : 0;
      lines.push(`${j.nama},${j.counts.Melamar},${j.counts.Diterima},${rate.toFixed(1)}`);
    });
    lines.push("");
    lines.push(`${trendView === "mingguan" ? "Minggu" : "Bulan"},Jumlah Pelamar`);
    trendData.forEach(t => lines.push(`${t.label},${t.pelamar}`));

    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `analitik_${startDate}_${endDate}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex-1 min-w-0 h-full overflow-y-auto bg-[#f9f9f9]" onClick={() => setJobDropdownOpen(false)}>
      {/* Top bar */}
      <div className="bg-white border-b border-[#e6e6e7] px-10 py-5 flex items-center justify-end shrink-0">
        <TopBarUserMenu />
      </div>

      <div className="flex flex-col gap-6 px-10 pt-8 pb-12">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-[28px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>Analitik</p>
            <p className="text-sm text-[#64748b] mt-1" style={{ fontFamily: "DM Sans, sans-serif" }}>Insight performa rekrutmen perusahaan Anda</p>
          </div>
          <button
            onClick={(e) => { e.stopPropagation(); handleExportCsv(); }}
            className="h-11 px-5 rounded-full bg-[#0052ff] text-white font-bold text-[14px] flex items-center gap-2 hover:bg-[#0041cc] transition-colors"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            <Download size={16} /> Export CSV
          </button>
        </div>

        {/* Filter bar */}
        <div className="bg-white rounded-2xl border border-[#e6e6e7] p-4 flex items-center gap-3 flex-wrap" onClick={e => e.stopPropagation()}>
          <div className="flex items-center gap-2 border border-[#c5c6c9] rounded-xl h-10 px-3">
            <Calendar size={14} className="text-[#606268] shrink-0" />
            <input type="date" value={startDate} max={endDate} onChange={e => setStartDate(e.target.value)}
              className="text-[13px] text-[#4c4f59] outline-none bg-transparent" style={{ fontFamily: "DM Sans, sans-serif" }} />
            <span className="text-[#c5c6c9]">–</span>
            <input type="date" value={endDate} min={startDate} onChange={e => setEndDate(e.target.value)}
              className="text-[13px] text-[#4c4f59] outline-none bg-transparent" style={{ fontFamily: "DM Sans, sans-serif" }} />
          </div>

          <div className="relative">
            <button
              onClick={(e) => { e.stopPropagation(); setJobDropdownOpen(v => !v); }}
              className="h-10 px-4 rounded-xl border border-[#c5c6c9] bg-white flex items-center gap-2 hover:bg-gray-50 transition-colors"
            >
              <span className="text-[13px] text-[#4c4f59]" style={{ fontFamily: "DM Sans, sans-serif" }}>
                {selectedJobIds.length === PIPELINE_JOBS.length ? "Semua Lowongan" : `${selectedJobIds.length} Lowongan dipilih`}
              </span>
              <ChevronDown size={14} className="text-[#606268]" />
            </button>
            {jobDropdownOpen && (
              <div className="absolute z-20 top-[calc(100%+4px)] left-0 bg-white border border-[#e2e8f0] rounded-xl shadow-lg w-[240px] p-2 flex flex-col gap-0.5" onClick={e => e.stopPropagation()}>
                {PIPELINE_JOBS.map(job => (
                  <label key={job.id} className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-50 cursor-pointer text-[13px]" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    <input type="checkbox" checked={selectedJobIds.includes(job.id)} onChange={() => toggleJob(job.id)} className="accent-[#0052ff]" />
                    {job.nama}
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            {ANALYTICS_METRIC_DEFS.map(m => (
              <button key={m.key} onClick={(e) => { e.stopPropagation(); toggleMetric(m.key); }}
                className={`px-3 py-2 rounded-full text-[12px] font-semibold border transition-colors ${activeMetrics.has(m.key) ? "bg-[#ebf2ff] border-[#0052ff] text-[#0052ff]" : "bg-white border-[#c5c6c9] text-[#4c4f59]"}`}
                style={{ fontFamily: "DM Sans, sans-serif" }}>
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* KPI cards */}
        <div className="flex gap-6 flex-wrap">
          {activeMetrics.has("pelamar") && <AnalyticsStatCard label="Total Pelamar" value={totalPelamar.toLocaleString("id-ID")} />}
          {activeMetrics.has("conversion") && <AnalyticsStatCard label="Conversion Rate" value={`${conversionRate.toFixed(1)}%`} />}
          {activeMetrics.has("hiring") && <AnalyticsStatCard label="Rata-rata Waktu Hiring" value={`${avgHiringDays} Hari`} />}
        </div>

        {/* Trend chart */}
        <div className="bg-white rounded-2xl border border-[#e6e6e7] shadow-[0px_4px_6px_rgba(0,0,0,0.02)] p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#4c4f59] text-base font-bold" style={{ fontFamily: "DM Sans, sans-serif" }}>Tren Lamaran</p>
              <p className="text-[#777980] text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>{startDate} s/d {endDate}</p>
            </div>
            <div className="flex items-center gap-1 bg-[#f1f5f9] rounded-full p-1">
              {(["mingguan", "bulanan"] as const).map(v => (
                <button key={v} onClick={() => setTrendView(v)}
                  className={`px-3 py-1.5 rounded-full text-[12px] font-semibold capitalize transition-colors ${trendView === v ? "bg-white text-[#0052ff] shadow-sm" : "text-[#64748b]"}`}
                  style={{ fontFamily: "DM Sans, sans-serif" }}>
                  {v}
                </button>
              ))}
            </div>
          </div>
          <div style={{ width: "100%", height: 260 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData} margin={{ top: 8, right: 12, left: -12, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={{ stroke: "#e5e7eb" }} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e2e8f0" }} />
                <Line type="monotone" dataKey="pelamar" name="Pelamar" stroke="#0052ff" strokeWidth={2.5} dot={{ r: 3, fill: "#0052ff" }} activeDot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Per-job conversion table */}
        <div className="bg-white rounded-2xl border border-[#e6e6e7] shadow-[0px_4px_6px_rgba(0,0,0,0.02)] flex flex-col">
          <div className="p-6 pb-4">
            <p className="text-[#4c4f59] text-base font-bold" style={{ fontFamily: "DM Sans, sans-serif" }}>Conversion Rate per Lowongan</p>
            <p className="text-[#777980] text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>Pelamar hingga diterima, per lowongan terpilih</p>
          </div>
          <div className="flex flex-col">
            <div className="grid grid-cols-4 gap-4 px-6 py-2 border-y border-[#e5e7eb] bg-[#f9f9f9]">
              {["Lowongan", "Pelamar", "Diterima", "Conversion Rate"].map(h => (
                <span key={h} className="text-[11px] font-bold text-[#94a3b8] uppercase tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>{h}</span>
              ))}
            </div>
            {selectedJobs.length === 0 ? (
              <div className="px-6 py-8 text-center text-[13px] text-[#94a3b8]" style={{ fontFamily: "DM Sans, sans-serif" }}>Pilih setidaknya satu lowongan.</div>
            ) : selectedJobs.map(job => {
              const rate = job.counts.Melamar > 0 ? (job.counts.Diterima / job.counts.Melamar) * 100 : 0;
              return (
                <div key={job.id} className="grid grid-cols-4 gap-4 px-6 py-3 border-b border-[#f1f5f9] last:border-b-0 items-center">
                  <span className="text-[13px] font-semibold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>{job.nama}</span>
                  <span className="text-[13px] text-[#4c4f59]" style={{ fontFamily: "DM Sans, sans-serif" }}>{job.counts.Melamar}</span>
                  <span className="text-[13px] text-[#4c4f59]" style={{ fontFamily: "DM Sans, sans-serif" }}>{job.counts.Diterima}</span>
                  <span className="text-[13px] font-semibold text-[#0052ff]" style={{ fontFamily: "DM Sans, sans-serif" }}>{rate.toFixed(1)}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Profile / account settings (Jira-style settings shell) ───────────────────

const SETTINGS_NAV = [
  { path: "/profile",          label: "Profil Saya",       icon: User },
  { path: "/profile/company",  label: "Profil Perusahaan", icon: Building2 },
  { path: "/profile/settings", label: "Pengaturan",        icon: Settings },
] as const;

function SettingsSaveButton({ onClick, saved, label = "Simpan Perubahan" }: { onClick: () => void; saved: boolean; label?: string }) {
  return (
    <div className="flex items-center gap-3 pt-1">
      <button onClick={onClick}
        className="h-10 px-5 rounded-full bg-[#0052ff] text-white font-bold text-[13px] hover:bg-[#0041cc] transition-colors"
        style={{ fontFamily: "DM Sans, sans-serif" }}>
        {label}
      </button>
      {saved && (
        <span className="text-[13px] text-[#10b981] font-semibold" style={{ fontFamily: "DM Sans, sans-serif" }}>Tersimpan</span>
      )}
    </div>
  );
}

function SettingsToggleRow({ label, description, checked, onChange }: {
  label: string; description: string; checked: boolean; onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-[13px] font-semibold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>{label}</p>
        <p className="text-[12px] text-[#94a3b8]" style={{ fontFamily: "Inter, sans-serif" }}>{description}</p>
      </div>
      <button
        onClick={() => onChange(!checked)}
        className={`relative w-11 h-6 rounded-full shrink-0 transition-colors ${checked ? "bg-[#0052ff]" : "bg-[#c5c6c9]"}`}
      >
        <span className={`absolute top-0.5 size-5 rounded-full bg-white shadow transition-transform ${checked ? "translate-x-[22px]" : "translate-x-0.5"}`} />
      </button>
    </div>
  );
}

function ProfileLayout() {
  const navigate = useNavigate();

  return (
    <div className="flex-1 min-w-0 h-full flex flex-col overflow-hidden bg-[#f9f9f9]">
      {/* Top bar */}
      <div className="bg-white border-b border-[#e6e6e7] px-10 py-5 flex items-center justify-end shrink-0">
        <TopBarUserMenu />
      </div>

      {/* Header */}
      <div className="px-10 pt-6 pb-2 shrink-0 flex items-center gap-3">
        <button onClick={() => navigate("/dashboard")} className="text-[#383b46] hover:text-[#0052ff] transition-colors"><ArrowLeft size={20} /></button>
        <div>
          <p className="text-[24px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>Pengaturan Akun</p>
          <p className="text-sm text-[#64748b] mt-1" style={{ fontFamily: "DM Sans, sans-serif" }}>Kelola profil, perusahaan, dan preferensi akun Anda</p>
        </div>
      </div>

      {/* Active section content */}
      <div className="flex-1 min-h-0 overflow-y-auto px-10 pt-6 pb-10">
        <Outlet />
      </div>
    </div>
  );
}

function ProfileUserContent() {
  const [name, setName] = useState("Budi Santoso");
  const [email, setEmail] = useState("budi.santoso@gmail.com");
  const [phone, setPhone] = useState("812 3456 7890");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="flex flex-col gap-6 max-w-[640px]">
      <div className="bg-white rounded-2xl border border-[#e6e6e7] p-6 flex items-center gap-5">
        <div className="relative rounded-full shrink-0 size-20 overflow-hidden">
          <img alt="avatar" className="absolute inset-0 size-full object-cover" src={imgAvatar} />
        </div>
        <div>
          <p className="text-[18px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>{name}</p>
          <p className="text-sm text-[#64748b]" style={{ fontFamily: "Inter, sans-serif" }}>Manajer HR</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-[#e6e6e7] p-6 flex flex-col gap-5">
        <p className="text-[16px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>Informasi Akun</p>

        <div className="flex flex-col gap-2">
          <label className="text-[#4c4f59] text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>Nama Lengkap</label>
          <div className="bg-white h-10 rounded-xl border border-[#c5c6c9] flex items-center px-3 gap-2">
            <input value={name} onChange={e => setName(e.target.value)}
              className="flex-1 min-w-0 text-xs bg-transparent outline-none text-[#383b46]"
              style={{ fontFamily: "DM Sans, sans-serif" }} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#4c4f59] text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>Email</label>
          <div className="bg-white h-10 rounded-xl border border-[#c5c6c9] flex items-center px-3 gap-2">
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
              className="flex-1 min-w-0 text-xs bg-transparent outline-none text-[#383b46]"
              style={{ fontFamily: "DM Sans, sans-serif" }} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#4c4f59] text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>Nomor Telepon</label>
          <div className="bg-white h-10 rounded-xl border border-[#c5c6c9] flex items-center px-3 gap-2">
            <span className="text-xs text-[#94a3b8]" style={{ fontFamily: "DM Sans, sans-serif" }}>+62</span>
            <input value={phone} onChange={e => setPhone(e.target.value)}
              className="flex-1 min-w-0 text-xs bg-transparent outline-none text-[#383b46]"
              style={{ fontFamily: "DM Sans, sans-serif" }} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#4c4f59] text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>Role</label>
          <div className="bg-[#f9f9f9] h-10 rounded-xl border border-[#e6e6e7] flex items-center px-3">
            <span className="text-xs text-[#94a3b8]" style={{ fontFamily: "DM Sans, sans-serif" }}>Manajer HR</span>
          </div>
        </div>

        <SettingsSaveButton onClick={handleSave} saved={saved} />
      </div>
    </div>
  );
}

function ProfileCompanyContent() {
  const [namaPerusahaan, setNamaPerusahaan] = useState("PT Perisaiku Talenta");
  const [industri, setIndustri] = useState("Teknologi Informasi");
  const [ukuranPerusahaan, setUkuranPerusahaan] = useState("51-200 karyawan");
  const [kota, setKota] = useState("Jakarta Selatan");
  const [alamat, setAlamat] = useState("Jl. Jendral Sudirman No. 1");
  const [website, setWebsite] = useState("https://perisakutalenta.com");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const field = (label: string, value: string, setValue: (v: string) => void) => (
    <div className="flex flex-col gap-2">
      <label className="text-[#4c4f59] text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>{label}</label>
      <div className="bg-white h-10 rounded-xl border border-[#c5c6c9] flex items-center px-3 gap-2">
        <input value={value} onChange={e => setValue(e.target.value)}
          className="flex-1 min-w-0 text-xs bg-transparent outline-none text-[#383b46]"
          style={{ fontFamily: "DM Sans, sans-serif" }} />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-6 max-w-[640px]">
      <div className="bg-white rounded-2xl border border-[#e6e6e7] p-6 flex items-center gap-5">
        <div className="rounded-2xl shrink-0 size-20 bg-[#ebf2ff] flex items-center justify-center">
          <Building2 size={32} className="text-[#0052ff]" />
        </div>
        <div>
          <p className="text-[18px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>{namaPerusahaan}</p>
          <p className="text-sm text-[#64748b]" style={{ fontFamily: "Inter, sans-serif" }}>{industri}</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-[#e6e6e7] p-6 flex flex-col gap-5">
        <p className="text-[16px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>Informasi Perusahaan</p>
        {field("Nama Perusahaan", namaPerusahaan, setNamaPerusahaan)}
        {field("Industri", industri, setIndustri)}
        {field("Ukuran Perusahaan", ukuranPerusahaan, setUkuranPerusahaan)}
        {field("Kota", kota, setKota)}
        {field("Alamat", alamat, setAlamat)}
        {field("Website", website, setWebsite)}
        <SettingsSaveButton onClick={handleSave} saved={saved} />
      </div>
    </div>
  );
}

function ProfileSettingsContent() {
  const [emailNotif, setEmailNotif] = useState(true);
  const [interviewReminder, setInterviewReminder] = useState(true);
  const [notifSaved, setNotifSaved] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordSaved, setPasswordSaved] = useState(false);

  const handleSaveNotif = () => {
    setNotifSaved(true);
    setTimeout(() => setNotifSaved(false), 2500);
  };

  const handleChangePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError("Semua kolom password wajib diisi.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError("Konfirmasi password baru tidak cocok.");
      return;
    }
    setPasswordError("");
    setPasswordSaved(true);
    setCurrentPassword(""); setNewPassword(""); setConfirmPassword("");
    setTimeout(() => setPasswordSaved(false), 2500);
  };

  return (
    <div className="flex flex-col gap-6 max-w-[640px]">
      <div className="bg-white rounded-2xl border border-[#e6e6e7] p-6 flex flex-col gap-5">
        <p className="text-[16px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>Notifikasi</p>
        <SettingsToggleRow label="Notifikasi Email" description="Terima update lowongan dan kandidat lewat email" checked={emailNotif} onChange={setEmailNotif} />
        <SettingsToggleRow label="Pengingat Wawancara" description="Dapatkan pengingat sebelum sesi wawancara dimulai" checked={interviewReminder} onChange={setInterviewReminder} />
        <SettingsSaveButton onClick={handleSaveNotif} saved={notifSaved} />
      </div>

      <div className="bg-white rounded-2xl border border-[#e6e6e7] p-6 flex flex-col gap-5">
        <p className="text-[16px] font-bold text-[#383b46]" style={{ fontFamily: "DM Sans, sans-serif" }}>Ubah Password</p>

        <div className="flex flex-col gap-2">
          <label className="text-[#4c4f59] text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>Password Saat Ini</label>
          <div className="bg-white h-10 rounded-xl border border-[#c5c6c9] flex items-center px-3 gap-2">
            <input type="password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)}
              className="flex-1 min-w-0 text-xs bg-transparent outline-none text-[#383b46]"
              style={{ fontFamily: "DM Sans, sans-serif" }} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#4c4f59] text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>Password Baru</label>
          <div className="bg-white h-10 rounded-xl border border-[#c5c6c9] flex items-center px-3 gap-2">
            <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)}
              className="flex-1 min-w-0 text-xs bg-transparent outline-none text-[#383b46]"
              style={{ fontFamily: "DM Sans, sans-serif" }} />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[#4c4f59] text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>Konfirmasi Password Baru</label>
          <div className="bg-white h-10 rounded-xl border border-[#c5c6c9] flex items-center px-3 gap-2">
            <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}
              className="flex-1 min-w-0 text-xs bg-transparent outline-none text-[#383b46]"
              style={{ fontFamily: "DM Sans, sans-serif" }} />
          </div>
        </div>

        {passwordError && <p className="text-[12px] text-[#f83a1e]" style={{ fontFamily: "Inter, sans-serif" }}>{passwordError}</p>}

        <SettingsSaveButton onClick={handleChangePassword} saved={passwordSaved} label="Ubah Password" />
      </div>
    </div>
  );
}

function PlaceholderPage({ label }: { label: string }) {
  return (
    <div className="flex-1 min-w-0 h-full bg-[#f9f9f9] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="w-16 h-16 rounded-2xl bg-[#ebf2ff] flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="4" y="4" width="20" height="20" rx="4" stroke="#0052ff" strokeWidth="2" />
            <path d="M9 14h10M9 10h6M9 18h8" stroke="#0052ff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <p className="text-[#4c4f59] text-xl font-bold" style={{ fontFamily: "DM Sans, sans-serif" }}>{label}</p>
        <p className="text-[#9b9ca1] text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>Halaman ini sedang dalam pengembangan.</p>
      </div>
    </div>
  );
}

function DashboardLayout() {
  const { pathname } = useLocation();
  const inProfileSection = pathname.startsWith("/profile");

  return (
    <div className="flex w-full h-screen overflow-hidden">
      {inProfileSection ? <ProfileSidebar /> : <DashboardSidebar />}
      <Outlet />
    </div>
  );
}

// ─── Register Page ────────────────────────────────────────────────────────────

export function RegisterPage() {
  const [step, setStep] = useState(1);

  const [step1, setStep1] = useState<Step1Data>({
    namaLengkap: "",
    email: "",
    password: "",
    konfirmasiPassword: "",
    nomorTelepon: "",
  });

  const [step2, setStep2] = useState<Step2Data>({
    namaPerusahaan: "",
    deskripsi: "",
    industri: "",
    ukuranPerusahaan: "",
    kota: "",
    alamat: "",
    website: "",
  });

  const [step3, setStep3] = useState<Step3Data>({
    jenisDokumen: "",
    file: null,
    agreed: false,
  });

  return (
    <div className="bg-white flex items-start w-full h-screen overflow-hidden">
      <Sidebar currentStep={step} />

      <div className="flex-1 min-w-0 self-stretch flex items-center justify-center overflow-hidden">
        {step === 2 ? (
          <div className="flex h-full w-full justify-center overflow-hidden">
            <Step2Form
              data={step2}
              setData={setStep2}
              onNext={() => setStep(3)}
              onBack={() => setStep(1)}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 w-full">
            {step === 1 && (
              <Step1Form
                data={step1}
                setData={setStep1}
                onNext={() => setStep(2)}
              />
            )}
            {step === 3 && (
              <Step3Form
                data={step3}
                setData={setStep3}
                onNext={() => setStep(4)}
                onBack={() => setStep(2)}
              />
            )}
            {step === 4 && <Step4Screen />}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Login Page ───────────────────────────────────────────────────────────────

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
        style={{ backgroundImage: "linear-gradient(155.536deg, rgb(0, 65, 204) 0%, rgb(0, 82, 255) 39.01%, rgb(14, 165, 233) 78.021%)" }}
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
            <span className="text-white text-xl font-bold" style={{ fontFamily: "Inter, sans-serif" }}>Perisaiku Talenta</span>
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-8 w-full">
            <p className="text-white font-extrabold text-[56px] leading-[1.1]" style={{ fontFamily: "Inter, sans-serif" }}>
              Rekrut talenta terbaik,{" "}
              <span className="text-[#a8a4c9]">lebih cepat</span>
              {" "}dari sebelumnya.
            </p>
            <p className="text-[#e5e7eb] text-lg leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
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
            <p className="text-[#4c4f59] text-[28px] font-bold leading-8" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Selamat datang kembali 👋
            </p>
            <p className="text-[#383b46] text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Belum punya akun?{" "}
              <a href="/" className="text-[#0052ff] font-semibold" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Daftar di sini
              </a>
            </p>
          </div>

          {/* Fields */}
          <div className="flex flex-col gap-5 w-full">
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-[#4c4f59] text-xs flex items-center gap-0.5" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Email perusahaan <span className="text-[#cc0e0e] text-[10px]">*</span>
              </label>
              <div className="bg-white h-10 rounded-xl border border-[#c5c6c9] flex items-center px-3 gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@perusahaan.com"
                  className="flex-1 min-w-0 text-xs bg-transparent outline-none text-[#383b46] placeholder-[#c5c6c9]"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                />
              </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className="text-[#4c4f59] text-xs flex items-center gap-0.5" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Password <span className="text-[#cc0e0e] text-[10px]">*</span>
              </label>
              <div className="bg-white h-10 rounded-xl border border-[#c5c6c9] flex items-center px-3 gap-2">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 8 Karakter"
                  className="flex-1 min-w-0 text-xs bg-transparent outline-none text-[#383b46] placeholder-[#c5c6c9]"
                  style={{ fontFamily: "DM Sans, sans-serif" }}
                />
                <button onClick={() => setShowPassword((v) => !v)} className="shrink-0 text-[#606268]">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
          </div>

          {/* Login button — goes straight to dashboard (no real auth) */}
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-[#0052ff] h-12 rounded-full w-full text-white font-bold text-base hover:bg-[#0041cc] transition-colors"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Masuk
          </button>

          <p className="text-[#4c4f59] text-xs text-center" style={{ fontFamily: "Inter, sans-serif" }}>
            Dengan masuk, kamu menyetujui{" "}
            <span className="font-bold text-[#0052ff]">Syarat &amp; Ketentuan</span>
            {" "}dan{" "}
            <span className="font-bold text-[#0052ff]">Kebijakan Privasi</span>
            {" "}kami.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

function RouteErrorPage() {
  const error = useRouteError() as { message?: string; statusText?: string } | null;
  return (
    <div className="flex items-center justify-center h-screen bg-[#f9f9f9]">
      <div className="text-center max-w-md px-6">
        <p className="text-[20px] font-bold text-[#383b46] mb-2" style={{ fontFamily: "DM Sans, sans-serif" }}>Terjadi Kesalahan</p>
        <p className="text-[14px] text-[#777980]" style={{ fontFamily: "DM Sans, sans-serif" }}>{error?.message ?? error?.statusText ?? "Unknown error"}</p>
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  { path: "/",        Component: RegisterPage,  ErrorBoundary: RouteErrorPage },
  { path: "/login",   Component: LoginPage,     ErrorBoundary: RouteErrorPage },
  {
    Component: DashboardLayout,
    ErrorBoundary: RouteErrorPage,
    children: [
      { path: "/dashboard",     Component: DashboardContent },
      { path: "/lowongan",      Component: LowonganContent },
      { path: "/pipeline",      Component: PipelineContent },
      { path: "/pipeline/:id",  Component: PipelineDetailContent },
      { path: "/list-kandidat", Component: () => <PlaceholderPage label="List Kandidat" /> },
      { path: "/analitik",      Component: AnalyticsContent },
      { path: "/post-job",       Component: PostJobContent },
      { path: "/lowongan/:id",   Component: LowonganDetailContent },
      { path: "/edit-job/:id",   Component: PostJobContent },
      { path: "/duplicate-job/:id", Component: PostJobContent },
      {
        Component: ProfileLayout,
        children: [
          { path: "/profile",          Component: ProfileUserContent },
          { path: "/profile/company",  Component: ProfileCompanyContent },
          { path: "/profile/settings", Component: ProfileSettingsContent },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
