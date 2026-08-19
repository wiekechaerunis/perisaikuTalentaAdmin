import React from "react";

export const PROFILE_PAGE_HEADERS: Record<string, { title: string; description: string }> = {
  "/profile":              { title: "Profil Saya",           description: "Kelola profil, perusahaan, dan preferensi akun Anda" },
  "/profile/notifications": { title: "Preferensi Notifikasi", description: "Atur preferensi notifikasi email dan pengingat Anda" },
  "/profile/company":      { title: "Profil Perusahaan",      description: "Kelola informasi dan detail perusahaan Anda" },
  "/profile/team":         { title: "Manajemen Tim",          description: "Kelola anggota tim dan hak akses mereka" },
  "/profile/billing":      { title: "Billing & Langganan",    description: "Kelola paket langganan dan metode pembayaran Anda" },
};

export interface ProfileSharedState {
  name: string; setName: (v: string) => void;
  email: string; setEmail: (v: string) => void;
  phone: string; setPhone: (v: string) => void;
  avatarSrc: string | null; setAvatarSrc: (v: string | null) => void;
  savedPassword: string; setSavedPassword: (v: string) => void;
  companyName: string; setCompanyName: (v: string) => void;
  companyIndustry: string; setCompanyIndustry: (v: string) => void;
  companyCity: string; setCompanyCity: (v: string) => void;
  companySize: string; setCompanySize: (v: string) => void;
  companyAddress: string; setCompanyAddress: (v: string) => void;
  companyWebsite: string; setCompanyWebsite: (v: string) => void;
  companyLogoSrc: string | null; setCompanyLogoSrc: (v: string | null) => void;
  companyOfficeCity: string; setCompanyOfficeCity: (v: string) => void;
  companyDescription: string; setCompanyDescription: (v: string) => void;
  companyPhotos: string[]; setCompanyPhotos: (v: string[]) => void;
  pushToast: (message: string) => void;
  setHeaderActions: (v: React.ReactNode) => void;
}

export const PROFILE_SUBPAGE_HEADERS: Record<string, { title: string; description?: string; back: string }> = {
  "/profile/edit":             { title: "Edit Profil Saya", back: "/profile" },
  "/profile/change-password":  { title: "Ganti Kata Sandi", description: "Kelola profil, perusahaan, dan preferensi akun Anda", back: "/profile" },
  "/profile/company/edit":     { title: "Edit Profil Perusahaan", description: "Kelola profil, perusahaan, dan preferensi akun Anda", back: "/profile/company" },
};

export const COMPANY_ABOUT_PARAGRAPHS = [
  "PT Perisaiku Talenta adalah perusahaan teknologi inovatif yang berkomitmen membangun solusi rekrutmen digital masa depan. Kami percaya bahwa kekuatan talenta terbaik adalah kunci utama dalam menghadirkan platform kelas dunia yang bermakna bagi ribuan perusahaan di Indonesia.",
  "Fokus kami saat ini meliputi pengembangan applicant tracking system (ATS) yang efisien, integrasi kecerdasan buatan untuk penyaringan kandidat, serta peningkatan pengalaman pengguna bagi tim HR di berbagai skala bisnis.",
];

export const COMPANY_DOCUMENTS = [
  { label: "NIB", filename: "NIB_PerisakuTalenta.pdf", date: "12 Jan 2025" },
];

export const COMPANY_PHOTO_LIMIT = 6;
export const COMPANY_NAME_MAX_LEN = 100;

export const TEAM_MEMBERS = [
  { id: "TM1", name: "Budi Santoso", email: "budi@talenta.id", role: "SUPER ADMIN", status: "AKTIF", joined: "12 Jan 2024", locked: true },
  { id: "TM2", name: "Sarah Wijaya", email: "sarah@talenta.id", role: "MULTI-ADMIN", status: "AKTIF", joined: "3 Mar 2024", locked: false },
  { id: "TM3", name: "Rina Kusuma", email: "rina@talenta.id", role: "MULTI-ADMIN", status: "AKTIF", joined: "15 Jun 2024", locked: false },
  { id: "TM4", name: "Dimas Pratama", email: "dimas@talenta.id", role: "MULTI-ADMIN", status: "INVITED", joined: "—", locked: false },
];
