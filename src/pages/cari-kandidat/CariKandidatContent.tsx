import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { Search, ListFilter, X, MapPin, Building2, Wallet, Bookmark, Eye } from "lucide-react";
import Lottie from "lottie-react";
import searchingLottie from "../../assets/lottie/data-center-search.json";
import imgCandidate from "../../imports/Frame626639/fb0866f26f42d40c2ae9ca60a1f6f85a45c71cad.png";
import imgSavedCandidatesEmpty from "../../assets/illustrations/saved-candidates-empty.png";
import { NotificationBell } from "../../components/shared/NotificationBell";
import { TopBarUserMenu } from "../../components/shared/TopBarUserMenu";
import { PaginationFooter } from "../../components/shared/Pagination";
import { usePagination } from "../../lib/pagination";
import { StatusToastStack, StatusToastItem } from "../../components/shared/StatusToast";
import { StarRatingIcon, InviteCandidateIcon } from "../../components/shared/Icons";
import { CandidateProfileModal, searchCandidateToProfileData } from "../../components/shared/CandidateProfileModal";
import { CariKandidatFilterModal } from "../../components/cari-kandidat/CariKandidatFilterModal";
import { InviteCandidateModal } from "../../components/cari-kandidat/InviteCandidateModal";
import { SearchQuotaExhaustedModal } from "../../components/cari-kandidat/SearchQuotaExhaustedModal";
import { PIPELINE_JOBS } from "../../mocks/pipeline";
import {
  SearchCandidate, SEARCH_RESULT_CANDIDATES, CariKandidatFilterValues, EMPTY_CARI_KANDIDAT_FILTERS, SEARCH_QUOTA_LIMIT,
} from "../../mocks/cari-kandidat";

function getAgeFromBirthdate(tanggalLahir: string): number {
  const [day, month, year] = tanggalLahir.split("-").map(Number);
  const birth = new Date(year, month - 1, day);
  const now = new Date();
  let age = now.getFullYear() - birth.getFullYear();
  const hadBirthdayThisYear = now.getMonth() > birth.getMonth() || (now.getMonth() === birth.getMonth() && now.getDate() >= birth.getDate());
  if (!hadBirthdayThisYear) age--;
  return age;
}

function CandidateResultRow({ c, isSaved, onToggleSave, onView, onInvite }: { c: SearchCandidate; isSaved: boolean; onToggleSave: () => void; onView: () => void; onInvite: () => void }) {
  const visibleSkills = c.skills.slice(0, 3);
  const extraCount = c.skills.length - visibleSkills.length;
  return (
    <div className="bg-white rounded-xl shadow-[0px_4px_6px_rgba(0,0,0,0.04)] flex items-center gap-5 p-5">
      <div className="w-[196px] shrink-0 flex items-center gap-3">
        <img src={imgCandidate} alt="" className="size-14 rounded-full object-cover shrink-0" />
        <div className="flex flex-col gap-1 min-w-0">
          <p className="flex items-baseline gap-1 min-w-0 text-[15px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>
            <span className="min-w-0 truncate">{c.nama}</span>
            <span className="shrink-0 text-text-subtle font-normal">({getAgeFromBirthdate(c.tanggalLahir)}th)</span>
          </p>
          <span className="flex items-center gap-1 text-[12px] text-text-muted" style={{ fontFamily: "var(--font-body)" }}>
            <MapPin size={13} />{c.lokasi}
          </span>
          <span className="flex items-center gap-1 text-[12px] text-text-darker" style={{ fontFamily: "var(--font-body)" }}>
            <StarRatingIcon size={13} />{c.rating}
          </span>
        </div>
      </div>
      <div className="flex-1 min-w-0 flex flex-col gap-1.5">
        <p className="text-[15px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>{c.role}</p>
        <span className="flex items-center gap-1.5 text-[12px] text-text-muted" style={{ fontFamily: "var(--font-body)" }}>
          <span className="flex items-center gap-1"><Building2 size={13} />{c.company}</span>
          <span>·</span>
          <span className="flex items-center gap-1"><Wallet size={13} />{c.gaji}</span>
        </span>
        <div className="flex flex-wrap gap-1.5">
          {visibleSkills.map((s, i) => (
            <span key={i} className="bg-surface text-text-muted text-[12px] font-medium px-2 py-1 rounded" style={{ fontFamily: "var(--font-heading)" }}>{s}</span>
          ))}
          {extraCount > 0 && (
            <span className="bg-[#f3f4f6] border border-[#e5e7eb] text-text-muted text-[12px] font-semibold px-2 py-1 rounded" style={{ fontFamily: "var(--font-heading)" }}>+{extraCount}</span>
          )}
        </div>
      </div>
      <div className="w-[120px] shrink-0 text-right">
        <span className="text-[14px] font-semibold text-text-darker" style={{ fontFamily: "var(--font-heading)" }}>{c.pengalaman}</span>
      </div>
      <div className="w-[120px] shrink-0 text-right">
        <span className="text-[14px] font-semibold text-[#3e9248]" style={{ fontFamily: "var(--font-heading)" }}>{c.ketersediaan}</span>
      </div>
      <div className="w-[120px] shrink-0 flex items-center justify-end gap-1.5">
        <button
          title={isSaved ? "Batalkan Simpan" : "Simpan Kandidat"}
          onClick={onToggleSave}
          className="size-8 rounded-lg bg-white border border-border-lighter hover:bg-gray-50 transition-colors flex items-center justify-center text-icon-default"
        >
          <Bookmark size={14} fill={isSaved ? "currentColor" : "none"} />
        </button>
        <button
          title="Undang Kandidat"
          onClick={onInvite}
          className="size-8 rounded-lg bg-white border border-border-lighter hover:bg-gray-50 transition-colors flex items-center justify-center text-icon-default"
        >
          <InviteCandidateIcon size={14} />
        </button>
        <button
          title="Lihat Kandidat"
          onClick={onView}
          className="size-8 rounded-lg bg-white border border-border-lighter hover:bg-gray-50 transition-colors flex items-center justify-center text-icon-default"
        >
          <Eye size={14} />
        </button>
      </div>
    </div>
  );
}

export function CariKandidatContent() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"cari" | "disimpan">("cari");
  const [search, setSearch] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<CariKandidatFilterValues>(EMPTY_CARI_KANDIDAT_FILTERS);
  const [searching, setSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchQuotaUsed, setSearchQuotaUsed] = useState(0);
  const [showQuotaModal, setShowQuotaModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<SearchCandidate | null>(null);
  const [savedCandidateIds, setSavedCandidateIds] = useState<Set<string>>(new Set());
  const [invitingCandidate, setInvitingCandidate] = useState<SearchCandidate | null>(null);
  const [actionToasts, setActionToasts] = useState<StatusToastItem[]>([]);
  const [savedSearch, setSavedSearch] = useState("");
  const [savedFilterOpen, setSavedFilterOpen] = useState(false);
  const [savedActiveFilters, setSavedActiveFilters] = useState<CariKandidatFilterValues>(EMPTY_CARI_KANDIDAT_FILTERS);
  const filterRef = useRef<HTMLDivElement>(null);
  const savedFilterRef = useRef<HTMLDivElement>(null);

  const quotaExhausted = searchQuotaUsed >= SEARCH_QUOTA_LIMIT;

  const handleSearch = () => {
    if (quotaExhausted) {
      setHasSearched(true);
      setShowQuotaModal(true);
      return;
    }
    setSearching(true);
    setHasSearched(false);
    setTimeout(() => {
      setSearching(false);
      setHasSearched(true);
      setSearchQuotaUsed((q) => {
        const nextQuotaUsed = Math.min(q + 1, SEARCH_QUOTA_LIMIT);
        if (nextQuotaUsed >= SEARCH_QUOTA_LIMIT) setShowQuotaModal(true);
        return nextQuotaUsed;
      });
    }, 3000);
  };

  const dismissActionToast = (id: number) => setActionToasts((prev) => prev.filter((t) => t.id !== id));
  const pushActionToast = (message: string) => {
    const toastId = Date.now() + Math.random();
    setActionToasts((prev) => [...prev, { id: toastId, variant: "success", message }]);
    setTimeout(() => setActionToasts((prev) => prev.filter((t) => t.id !== toastId)), 4000);
  };
  const toggleSaved = (id: string) => {
    const wasSaved = savedCandidateIds.has(id);
    setSavedCandidateIds((prev) => {
      const next = new Set(prev);
      if (wasSaved) next.delete(id); else next.add(id);
      return next;
    });
    if (!wasSaved) pushActionToast("Kandidat berhasil disimpan");
  };
  const confirmInvite = (jobId: string) => {
    const job = PIPELINE_JOBS.find((j) => j.id === jobId);
    if (invitingCandidate && job) {
      pushActionToast(`Undangan berhasil dikirim ke ${invitingCandidate.nama} untuk posisi ${job.nama}`);
    }
    setInvitingCandidate(null);
  };
  const matchesAdvancedFilters = (candidate: SearchCandidate, filters: CariKandidatFilterValues) => {
    const age = 2026 - Number(candidate.tanggalLahir.split("-")[2]);
    const experienceYears = Number(candidate.pengalaman.match(/\d+/)?.[0] ?? 0);
    const salaryValues = candidate.gaji.match(/\d+/g)?.map(Number) ?? [];
    const salaryMin = (salaryValues[0] ?? 0) * 1000000;
    const salaryMax = (salaryValues[1] ?? salaryValues[0] ?? 0) * 1000000;
    const field = /design/i.test(candidate.role) ? "Design" : /engineer|developer/i.test(candidate.role) ? "Engineering" : /data/i.test(candidate.role) ? "Data" : /product/i.test(candidate.role) ? "Product" : /marketing/i.test(candidate.role) ? "Marketing" : /project/i.test(candidate.role) ? "Project Management" : "Human Resources";
    if (filters.usiaMin && age < Number(filters.usiaMin)) return false;
    if (filters.usiaMax && age > Number(filters.usiaMax)) return false;
    if (filters.gajiMin && salaryMax < Number(filters.gajiMin)) return false;
    if (filters.gajiMax && salaryMin > Number(filters.gajiMax)) return false;
    if (filters.bidangPekerjaan.length && !filters.bidangPekerjaan.includes(field)) return false;
    if (filters.keahlian.length && !filters.keahlian.some(skill => candidate.skills.includes(skill))) return false;
    if (filters.durasiPengalaman.length && !filters.durasiPengalaman.some(range => range === "Belum ada pengalaman" ? experienceYears === 0 : range === "Kurang dari 1 tahun" ? experienceYears < 1 : range === "1-3 Tahun" ? experienceYears >= 1 && experienceYears <= 3 : range === "3-5 Tahun" ? experienceYears >= 3 && experienceYears <= 5 : range === "5-10 Tahun" ? experienceYears >= 5 && experienceYears <= 10 : experienceYears > 10)) return false;
    return true;
  };
  const savedCandidatesRaw = SEARCH_RESULT_CANDIDATES.filter((c) => savedCandidateIds.has(c.id));
  const savedList = savedCandidatesRaw.filter((c) => {
    const q = savedSearch.trim().toLowerCase();
    if (q && !(c.nama.toLowerCase().includes(q) || c.role.toLowerCase().includes(q) || c.company.toLowerCase().includes(q) || c.skills.some((s) => s.toLowerCase().includes(q)))) return false;
    if (savedActiveFilters.skill.length && !savedActiveFilters.skill.some((s) => c.skills.includes(s))) return false;
    if (savedActiveFilters.lokasi.length && !savedActiveFilters.lokasi.some((l) => c.lokasi.toLowerCase().includes(l.toLowerCase()))) return false;
    if (savedActiveFilters.levelPekerjaan.length && !savedActiveFilters.levelPekerjaan.includes(c.levelPekerjaan)) return false;
    if (savedActiveFilters.pendidikan.length && !savedActiveFilters.pendidikan.some((p) => c.pendidikanList.some((pl) => pl.jenjang.includes(p)))) return false;
    return matchesAdvancedFilters(c, savedActiveFilters);
  });
  const searchResults = SEARCH_RESULT_CANDIDATES.filter((c) => {
    const query = search.trim().toLowerCase();
    if (query && !(c.nama.toLowerCase().includes(query) || c.role.toLowerCase().includes(query) || c.company.toLowerCase().includes(query) || c.skills.some(skill => skill.toLowerCase().includes(query)))) return false;
    if (activeFilters.skill.length && !activeFilters.skill.some(skill => c.skills.includes(skill))) return false;
    if (activeFilters.lokasi.length && !activeFilters.lokasi.some(lokasi => c.lokasi.toLowerCase().includes(lokasi.toLowerCase()))) return false;
    if (activeFilters.levelPekerjaan.length && !activeFilters.levelPekerjaan.includes(c.levelPekerjaan)) return false;
    if (activeFilters.pendidikan.length && !activeFilters.pendidikan.some(value => c.pendidikanList.some(item => item.jenjang.includes(value)))) return false;
    return matchesAdvancedFilters(c, activeFilters);
  });

  const { currentPage, setCurrentPage, totalPages, pageItems } = usePagination(searchResults, 10);

  useEffect(() => {
    if (!filterOpen) return;
    const handler = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) setFilterOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [filterOpen]);

  useEffect(() => {
    if (!savedFilterOpen) return;
    const handler = (e: MouseEvent) => {
      if (savedFilterRef.current && !savedFilterRef.current.contains(e.target as Node)) setSavedFilterOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [savedFilterOpen]);

  const activeChips: { fieldKey: keyof CariKandidatFilterValues; label: string; value: string }[] = [
    ...activeFilters.skill.map((v) => ({ fieldKey: "skill" as const, label: "Skill", value: v })),
    ...activeFilters.pengalaman.map((v) => ({ fieldKey: "pengalaman" as const, label: "Pengalaman", value: v })),
    ...activeFilters.pendidikan.map((v) => ({ fieldKey: "pendidikan" as const, label: "Pendidikan", value: v })),
    ...activeFilters.lokasi.map((v) => ({ fieldKey: "lokasi" as const, label: "Lokasi", value: v })),
    ...activeFilters.levelPekerjaan.map((v) => ({ fieldKey: "levelPekerjaan" as const, label: "Level Pekerjaan", value: v })),
    ...(activeFilters.usiaMin ? [{ fieldKey: "usiaMin" as const, label: "Usia min", value: activeFilters.usiaMin }] : []),
    ...(activeFilters.usiaMax ? [{ fieldKey: "usiaMax" as const, label: "Usia max", value: activeFilters.usiaMax }] : []),
    ...activeFilters.durasiPengalaman.map((v) => ({ fieldKey: "durasiPengalaman" as const, label: "Pengalaman", value: v })),
    ...(activeFilters.gajiMin ? [{ fieldKey: "gajiMin" as const, label: "Gaji min", value: activeFilters.gajiMin }] : []),
    ...(activeFilters.gajiMax ? [{ fieldKey: "gajiMax" as const, label: "Gaji max", value: activeFilters.gajiMax }] : []),
    ...activeFilters.bidangPekerjaan.map((v) => ({ fieldKey: "bidangPekerjaan" as const, label: "Bidang", value: v })),
    ...activeFilters.keahlian.map((v) => ({ fieldKey: "keahlian" as const, label: "Keahlian", value: v })),
  ];
  const removeChipValue = (fieldKey: keyof CariKandidatFilterValues, value: string) =>
    setActiveFilters((prev) => ({
      ...prev,
      [fieldKey]: Array.isArray(prev[fieldKey]) ? (prev[fieldKey] as string[]).filter((v) => v !== value) : "",
    }));
  const hasFilters = activeChips.length > 0;

  const savedActiveChips: { fieldKey: keyof CariKandidatFilterValues; label: string; value: string }[] = [
    ...savedActiveFilters.skill.map((v) => ({ fieldKey: "skill" as const, label: "Skill", value: v })),
    ...savedActiveFilters.pengalaman.map((v) => ({ fieldKey: "pengalaman" as const, label: "Pengalaman", value: v })),
    ...savedActiveFilters.pendidikan.map((v) => ({ fieldKey: "pendidikan" as const, label: "Pendidikan", value: v })),
    ...savedActiveFilters.lokasi.map((v) => ({ fieldKey: "lokasi" as const, label: "Lokasi", value: v })),
    ...savedActiveFilters.levelPekerjaan.map((v) => ({ fieldKey: "levelPekerjaan" as const, label: "Level Pekerjaan", value: v })),
    ...(savedActiveFilters.usiaMin ? [{ fieldKey: "usiaMin" as const, label: "Usia min", value: savedActiveFilters.usiaMin }] : []),
    ...(savedActiveFilters.usiaMax ? [{ fieldKey: "usiaMax" as const, label: "Usia max", value: savedActiveFilters.usiaMax }] : []),
    ...savedActiveFilters.durasiPengalaman.map((v) => ({ fieldKey: "durasiPengalaman" as const, label: "Pengalaman", value: v })),
    ...(savedActiveFilters.gajiMin ? [{ fieldKey: "gajiMin" as const, label: "Gaji min", value: savedActiveFilters.gajiMin }] : []),
    ...(savedActiveFilters.gajiMax ? [{ fieldKey: "gajiMax" as const, label: "Gaji max", value: savedActiveFilters.gajiMax }] : []),
    ...savedActiveFilters.bidangPekerjaan.map((v) => ({ fieldKey: "bidangPekerjaan" as const, label: "Bidang", value: v })),
    ...savedActiveFilters.keahlian.map((v) => ({ fieldKey: "keahlian" as const, label: "Keahlian", value: v })),
  ];
  const removeSavedChipValue = (fieldKey: keyof CariKandidatFilterValues, value: string) =>
    setSavedActiveFilters((prev) => ({
      ...prev,
      [fieldKey]: Array.isArray(prev[fieldKey]) ? (prev[fieldKey] as string[]).filter((v) => v !== value) : "",
    }));
  const savedHasFilters = savedActiveChips.length > 0;

  return (
    <div className="flex-1 min-w-0 h-full overflow-y-auto bg-surface">
      {/* Top bar */}
      <div className="bg-white border-b border-border-lighter px-10 py-5 flex items-center justify-end shrink-0">
        <div className="flex items-center gap-4">
          <NotificationBell />
          <TopBarUserMenu />
        </div>
      </div>

      <div className="flex flex-col gap-8 px-10 pt-8 pb-12">
        <div>
          <p className="text-[28px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Cari Kandidat</p>
          <p className="text-sm text-text-muted mt-1" style={{ fontFamily: "var(--font-body)" }}>Temukan dan undang talenta terbaik secara proaktif</p>
        </div>

        {/* Tabs */}
        <div className="flex items-end gap-8">
          <button onClick={() => setTab("cari")} className="flex flex-col items-center gap-2">
            <span className={`text-[14px] font-bold whitespace-nowrap ${tab === "cari" ? "text-brand-primary" : "text-text-subtle"}`} style={{ fontFamily: "var(--font-body)" }}>Cari Kandidat</span>
            <div className={`h-[3px] w-full rounded-t-[2px] ${tab === "cari" ? "bg-brand-primary" : "bg-transparent"}`} />
          </button>
          <button onClick={() => setTab("disimpan")} className="flex flex-col items-center gap-2">
            <span className="flex items-center gap-2 whitespace-nowrap">
              <span className={`text-[14px] font-semibold ${tab === "disimpan" ? "text-brand-primary" : "text-text-subtle"}`} style={{ fontFamily: "var(--font-body)" }}>Kandidat Disimpan</span>
              <span className="bg-[#ebf2ff] text-text-lighter text-[12px] font-semibold px-1.5 py-0.5 rounded">{savedCandidateIds.size}</span>
            </span>
            <div className={`h-[3px] w-full rounded-t-[2px] ${tab === "disimpan" ? "bg-brand-primary" : "bg-[#e2e8f0]"}`} />
          </button>
        </div>

        {tab === "cari" ? (
          <div className="bg-white rounded-2xl border border-border-lighter p-6 flex flex-col gap-4 w-full">
            <div className="flex items-center gap-4 w-full">
              <div className={`h-11 rounded-xl border flex items-center gap-2 px-4 flex-1 min-w-0 transition-colors ${quotaExhausted ? "bg-surface border-border-lighter" : "bg-white border-border-default focus-within:border-brand-primary"}`}>
                <button
                  onClick={handleSearch}
                  className="shrink-0 text-icon-default transition-colors hover:text-brand-primary"
                >
                  <Search size={16} />
                </button>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") handleSearch(); }}
                  placeholder={quotaExhausted ? "Kuota pencarian habis — tekan Enter untuk melihat opsi" : "Cari nama kandidat, posisi, atau skill"}
                  className="flex-1 min-w-0 text-sm bg-transparent outline-none text-text-default placeholder-[#777980]"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
              <div ref={filterRef} className="relative shrink-0">
                <button
                  onClick={() => setFilterOpen((v) => !v)}
                  className={`h-11 px-4 rounded-full border-[1.5px] bg-white flex items-center gap-2 hover:bg-gray-50 transition-colors ${filterOpen || hasFilters ? "border-brand-primary text-brand-primary" : "border-border-default text-text-darker"}`}
                >
                  <span className="text-[14px] font-bold" style={{ fontFamily: "var(--font-body)" }}>Filter{hasFilters ? ` (${activeChips.length})` : ""}</span>
                  <ListFilter size={16} className={filterOpen || hasFilters ? "text-brand-primary" : "text-icon-default"} />
                </button>
                {filterOpen && (
                  <CariKandidatFilterModal
                    onClose={() => setFilterOpen(false)}
                    onSave={setActiveFilters}
                    initial={activeFilters}
                  />
                )}
              </div>
            </div>

            {hasFilters && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[12px] text-text-darker font-medium shrink-0" style={{ fontFamily: "var(--font-body)" }}>
                  Filter Aktif :
                </span>
                {activeChips.map((chip) => (
                  <div
                    key={`${chip.fieldKey}-${chip.value}`}
                    className="bg-white h-6 flex items-center gap-2 pl-3 pr-1 rounded-full border border-border-default"
                  >
                    <span className="text-[10px] text-[#333] leading-4" style={{ fontFamily: "var(--font-body)" }}>
                      {chip.label}: {chip.value}
                    </span>
                    <button
                      onClick={() => removeChipValue(chip.fieldKey, chip.value)}
                      className="size-[14px] flex items-center justify-center rounded-full hover:bg-gray-100 shrink-0"
                    >
                      <X size={9} className="text-icon-default" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => setActiveFilters(EMPTY_CARI_KANDIDAT_FILTERS)}
                  className="text-[10px] font-bold text-[#c93f2a] hover:text-[#a83222] transition-colors shrink-0"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Hapus Semua
                </button>
              </div>
            )}

            <div className="flex items-center justify-between w-full flex-wrap gap-2">
              <p className={`text-[12px] ${quotaExhausted ? "text-[#c93f2a]" : "text-text-darker"}`} style={{ fontFamily: "var(--font-body)" }}>
                Kuota pencarian: <span className="font-bold">{searchQuotaUsed}/{SEARCH_QUOTA_LIMIT}</span> terpakai.{quotaExhausted ? " Kuota pencarian Anda sudah habis." : ""} Upgrade paket Talent Search untuk kuota lebih banyak.
              </p>
              <button onClick={() => navigate("/profile/billing/plans")} className="text-[14px] font-bold text-brand-primary hover:underline shrink-0" style={{ fontFamily: "var(--font-body)" }}>Lihat Paket Berlangganan</button>
            </div>

            {searching && (
              <div className="flex flex-col items-center justify-center gap-2 py-10">
                <Lottie animationData={searchingLottie} loop style={{ width: 220, height: 168 }} />
                <p className="text-[14px] font-semibold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>Mencari kandidat terbaik untuk Anda...</p>
              </div>
            )}

            {!searching && hasSearched && (
              <div className={`flex flex-col gap-4 transition-[filter] duration-200 ${quotaExhausted ? "pointer-events-none select-none blur-[5px]" : ""}`} aria-hidden={quotaExhausted}>
                <div className="rounded-xl border border-border-lighter overflow-hidden">
                  {/* Header */}
                  <div className="bg-[#f9fafb] border-b border-[#e5e7eb] flex items-center gap-5 px-5 py-3">
                    <div className="w-[196px] shrink-0">
                      <span className="text-[12px] font-bold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>KANDIDAT</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[12px] font-bold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>PROFIL & SKILL</span>
                    </div>
                    <div className="w-[120px] shrink-0 text-right">
                      <span className="text-[12px] font-bold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>PENGALAMAN</span>
                    </div>
                    <div className="w-[120px] shrink-0 text-right">
                      <span className="text-[12px] font-bold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>KETERSEDIAAN</span>
                    </div>
                    <div className="w-[120px] shrink-0 text-center">
                      <span className="text-[12px] font-bold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>AKSI</span>
                    </div>
                  </div>

                  {/* Rows */}
                  <div className="flex flex-col gap-3 p-3 bg-white">
                    {pageItems.map((c) => (
                      <CandidateResultRow
                        key={c.id}
                        c={c}
                        isSaved={savedCandidateIds.has(c.id)}
                        onToggleSave={() => toggleSaved(c.id)}
                        onView={() => setSelectedCandidate(c)}
                        onInvite={() => setInvitingCandidate(c)}
                      />
                    ))}
                  </div>
                </div>

                {/* Pagination */}
                <PaginationFooter
                  currentPage={currentPage}
                  totalPages={totalPages}
                  pageSize={10}
                  totalItems={searchResults.length}
                  itemLabel="kandidat"
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </div>
        ) : savedCandidatesRaw.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 py-16">
            <img src={imgSavedCandidatesEmpty} alt="" className="w-[280px] h-auto object-contain" />
            <p className="text-[18px] font-semibold text-[#1a1a26]" style={{ fontFamily: "var(--font-body)" }}>Belum ada kandidat disimpan</p>
            <p className="text-[14px] text-[#787d8c] text-center" style={{ fontFamily: "var(--font-body)" }}>
              Simpan kandidat favorit kamu dari hasil pencarian<br />untuk melihatnya di sini.
            </p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-border-lighter p-6 flex flex-col gap-4 w-full">
            <div className="flex items-center gap-4 w-full">
              <div className="bg-white h-11 rounded-xl border border-border-default flex items-center gap-2 px-4 flex-1 min-w-0 focus-within:border-brand-primary transition-colors">
                <Search size={16} className="shrink-0 text-icon-default" />
                <input
                  type="text"
                  value={savedSearch}
                  onChange={(e) => setSavedSearch(e.target.value)}
                  placeholder="Cari nama kandidat, posisi, atau skill"
                  className="flex-1 min-w-0 text-sm bg-transparent outline-none text-text-default placeholder-[#777980]"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
              <div ref={savedFilterRef} className="relative shrink-0">
                <button
                  onClick={() => setSavedFilterOpen((v) => !v)}
                  className={`h-11 px-4 rounded-full border-[1.5px] bg-white flex items-center gap-2 hover:bg-gray-50 transition-colors ${savedFilterOpen || savedHasFilters ? "border-brand-primary text-brand-primary" : "border-border-default text-text-darker"}`}
                >
                  <span className="text-[14px] font-bold" style={{ fontFamily: "var(--font-body)" }}>Filter{savedHasFilters ? ` (${savedActiveChips.length})` : ""}</span>
                  <ListFilter size={16} className={savedFilterOpen || savedHasFilters ? "text-brand-primary" : "text-icon-default"} />
                </button>
                {savedFilterOpen && (
                  <CariKandidatFilterModal
                    onClose={() => setSavedFilterOpen(false)}
                    onSave={setSavedActiveFilters}
                    initial={savedActiveFilters}
                  />
                )}
              </div>
            </div>

            {savedHasFilters && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[12px] text-text-darker font-medium shrink-0" style={{ fontFamily: "var(--font-body)" }}>
                  Filter Aktif :
                </span>
                {savedActiveChips.map((chip) => (
                  <div
                    key={`${chip.fieldKey}-${chip.value}`}
                    className="bg-white h-6 flex items-center gap-2 pl-3 pr-1 rounded-full border border-border-default"
                  >
                    <span className="text-[10px] text-[#333] leading-4" style={{ fontFamily: "var(--font-body)" }}>
                      {chip.label}: {chip.value}
                    </span>
                    <button
                      onClick={() => removeSavedChipValue(chip.fieldKey, chip.value)}
                      className="size-[14px] flex items-center justify-center rounded-full hover:bg-gray-100 shrink-0"
                    >
                      <X size={9} className="text-icon-default" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => setSavedActiveFilters(EMPTY_CARI_KANDIDAT_FILTERS)}
                  className="text-[10px] font-bold text-[#c93f2a] hover:text-[#a83222] transition-colors shrink-0"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Hapus Semua
                </button>
              </div>
            )}

            {savedList.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-2 py-16">
                <p className="text-[14px] font-semibold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>Tidak ada kandidat yang cocok</p>
                <p className="text-[13px] text-[#787d8c]" style={{ fontFamily: "var(--font-body)" }}>Coba ubah kata kunci atau filter pencarian.</p>
              </div>
            ) : (
            <div className="rounded-xl border border-border-lighter overflow-hidden">
              {/* Header */}
              <div className="bg-[#f9fafb] border-b border-[#e5e7eb] flex items-center gap-5 px-5 py-3">
                <div className="w-[196px] shrink-0">
                  <span className="text-[12px] font-bold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>KANDIDAT</span>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[12px] font-bold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>PROFIL & SKILL</span>
                </div>
                <div className="w-[120px] shrink-0 text-right">
                  <span className="text-[12px] font-bold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>PENGALAMAN</span>
                </div>
                <div className="w-[120px] shrink-0 text-right">
                  <span className="text-[12px] font-bold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>KETERSEDIAAN</span>
                </div>
                <div className="w-[120px] shrink-0 text-center">
                  <span className="text-[12px] font-bold text-text-darker" style={{ fontFamily: "var(--font-body)" }}>AKSI</span>
                </div>
              </div>

              {/* Rows */}
              <div className="flex flex-col gap-3 p-3 bg-white">
                {savedList.map((c) => (
                  <CandidateResultRow
                    key={c.id}
                    c={c}
                    isSaved
                    onToggleSave={() => toggleSaved(c.id)}
                    onView={() => setSelectedCandidate(c)}
                    onInvite={() => setInvitingCandidate(c)}
                  />
                ))}
              </div>
            </div>
            )}
          </div>
        )}
      </div>

      {selectedCandidate && (
        <CandidateProfileModal
          context="talent-search"
          data={searchCandidateToProfileData(selectedCandidate)}
          isSaved={savedCandidateIds.has(selectedCandidate.id)}
          onClose={() => setSelectedCandidate(null)}
          onInvite={() => { setInvitingCandidate(selectedCandidate); setSelectedCandidate(null); }}
          onBookmark={() => toggleSaved(selectedCandidate.id)}
        />
      )}

      {invitingCandidate && (
        <InviteCandidateModal
          candidateName={invitingCandidate.nama}
          onClose={() => setInvitingCandidate(null)}
          onConfirm={confirmInvite}
        />
      )}

      {showQuotaModal && <SearchQuotaExhaustedModal onClose={() => setShowQuotaModal(false)} onUpgrade={() => navigate("/profile/billing/plans")} />}

      <StatusToastStack toasts={actionToasts} onDismiss={dismissActionToast} />
    </div>
  );
}
