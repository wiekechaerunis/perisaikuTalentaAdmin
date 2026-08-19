import { useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router";
import { ArrowLeft, ChevronRight, Check, Clock, Info } from "lucide-react";
import { NotificationBell } from "../../components/shared/NotificationBell";
import { TopBarUserMenu } from "../../components/shared/TopBarUserMenu";
import { InfoModal } from "../../components/shared/InfoModal";
import { StepperHeader, WIZARD_STEPS } from "../../components/post-job/StepperHeader";
import { NamaPosisiAutocomplete } from "../../components/post-job/NamaPosisiAutocomplete";
import { PostJobSelect } from "../../components/post-job/PostJobSelect";
import { ConfirmLeaveModal } from "../../components/post-job/ConfirmLeaveModal";
import { RichTextEditor, PESAN_PLACEHOLDER_LINES } from "../../components/post-job/RichTextEditor";
import { RadioOption, Toggle, Checkbox } from "../../components/post-job/FormControls";
import { TagPicker } from "../../components/post-job/TagPicker";
import { jobRows } from "../../mocks/lowongan";
import { PROVINSI_OPTIONS } from "../../mocks/options";
import {
  KATEGORI_OPTIONS, TIPE_OPTIONS, LOKASI_OPTIONS, LEVEL_OPTIONS, KABUPATEN_OPTIONS, KECAMATAN_OPTIONS,
  KEBIJAKAN_KERJA_OPTIONS, HARI_OPTIONS, PENDIDIKAN_OPTIONS, PENDIDIKAN_WITH_JURUSAN, JURUSAN_OPTIONS,
  PENGALAMAN_OPTIONS, BENEFIT_OPTIONS, KODE_ETIK_ITEMS, SKILL_SUGGESTIONS,
} from "../../mocks/post-job";

export const SETTING_TO_KEBIJAKAN: Record<string, string> = {
  "On-site": "Kerja Dari Kantor (WFO)",
  "Remote": "Kerja Dari Mana pun (Remote)",
  "Hybrid": "Campuran (Hybrid)",
};

export function PostJobContent() {
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
  const [metodeLamaran, setMetodeLamaran] = useState("In App");
  const [urlRedirect, setUrlRedirect] = useState("");

  // Step 1 — Lokasi & Kebijakan Kerja
  const [provinsi, setProvinsi] = useState(isPrefill ? "DKI Jakarta" : "");
  const [kota, setKota] = useState(job?.lokasi ?? "");
  const [kecamatan, setKecamatan] = useState("");
  const [kotaSyaratUtama, setKotaSyaratUtama] = useState(false);
  const [kebijakanKerja, setKebijakanKerja] = useState(job ? (SETTING_TO_KEBIJAKAN[job.setting] ?? KEBIJAKAN_KERJA_OPTIONS[0]) : KEBIJAKAN_KERJA_OPTIONS[0]);
  const [hariKerja, setHariKerja] = useState<string[]>(isPrefill ? ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"] : []);
  const [jamMasuk, setJamMasuk] = useState(isPrefill ? "09:00" : "");
  const [jamSelesai, setJamSelesai] = useState(isPrefill ? "18:00" : "");

  // Step 2 — Syarat Pelamar
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

  // Step 3 — Kompensasi & Komunikasi
  const [gajiMin, setGajiMin] = useState(isPrefill ? "8000000" : "");
  const [tampilkanGaji, setTampilkanGaji] = useState(true);
  const [gajiMax, setGajiMax] = useState(isPrefill ? "15000000" : "");
  const [benefitTags, setBenefitTags] = useState<string[]>(isPrefill ? ["BPJS Kesehatan", "BPJS Ketenagakerjaan", "Tunjangan Makan"] : []);
  const [kontakType, setKontakType] = useState<"WhatsApp" | "Email">("WhatsApp");
  const [kontakValue, setKontakValue] = useState(isPrefill ? "812 3456 7890" : "");
  const [pesanOtomatis, setPesanOtomatis] = useState("");

  // Step 4 — Konfirmasi
  const [agreed, setAgreed] = useState(isPrefill);

  const exitTarget = isPublishedEdit ? `/lowongan/${id}` : "/lowongan";
  const skipDirtyCheck = isEditMode || isDuplicateRoute;
  const isDirty = !skipDirtyCheck && (step > 1 || !!(namaPosisi || kategori || levelPekerjaan || tipePekerjaan || deskripsi || batasTanggal || urlRedirect));
  const handleExit = () => { if (isDirty) { setShowModal(true); } else { navigate(exitTarget); } };
  const handleFooterBack = () => { if (step > 1) setStep(step - 1); else handleExit(); };
  const handleNext = () => { if (step < 4) setStep(step + 1); else navigate(exitTarget, { state: { toast: "published" } }); };
  const handleSaveDraft = () => { if (isPublishedEdit) return; navigate("/lowongan", { state: { toast: "draft" } }); };

  const fieldCls = "bg-white h-10 rounded-xl border border-border-default flex items-center px-3 gap-2 focus-within:border-brand-primary transition-colors";
  const labelCls = "text-[12px] text-text-darker";
  const labelStyle = { fontFamily: "var(--font-body)" };

  return (
    <div className="flex-1 min-w-0 h-full flex flex-col overflow-hidden bg-surface">
      {/* Top bar */}
      <div className="bg-white border-b border-border-lighter px-10 py-5 flex items-center justify-end shrink-0">
        <div className="flex items-center gap-4">
          <NotificationBell />
          <TopBarUserMenu />
        </div>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col gap-6 pb-32">
          {/* Title + breadcrumb */}
          <div className="flex flex-col gap-1 px-10 pt-8">
            <div className="flex items-center gap-3">
              <button onClick={handleExit} className="text-text-default hover:text-brand-primary transition-colors"><ArrowLeft size={20} /></button>
              <p className="text-[28px] font-bold text-text-default leading-8" style={{ fontFamily: "var(--font-body)" }}>{isPublishedEdit ? "Edit Lowongan" : isDraftEdit ? "Add Lowongan" : isDuplicateRoute ? "Duplikat Lowongan" : "Buat Lowongan baru"}</p>
            </div>
            <div className="flex items-center gap-2 pl-9" style={{ fontFamily: "var(--font-body)" }}>
              <button onClick={handleExit} className="text-[14px] font-semibold text-[#ff6b35] hover:underline">Daftar Lowongan</button>
              <ChevronRight size={14} className="text-icon-default" />
              <span className="text-[14px] text-text-muted">{isPublishedEdit ? "Edit Lowongan" : isDraftEdit ? "Add Lowongan" : isDuplicateRoute ? "Duplikat Lowongan" : "Buat Lowongan Baru"}</span>
            </div>
          </div>

          <div className="px-10 flex flex-col gap-6">
            <StepperHeader currentStep={step} />

            <div className="bg-white rounded-xl border border-border-lighter p-8 flex flex-col gap-8">

              {/* Step 1 — Informasi Pekerjaan */}
              {step === 1 && (
                <>
                <div className="flex flex-col gap-6">
                  <p className="text-[16px] font-bold text-text-default" style={labelStyle}>Informasi Dasar Pekerjaan</p>
                  <div className="flex gap-5">
                    {isPublishedEdit && (
                      <div className="flex flex-col gap-2 w-[200px] shrink-0">
                        <span className={labelCls} style={labelStyle}>Job ID</span>
                        <div className="bg-[#f6f4f4] h-10 rounded-xl border border-border-default flex items-center px-3">
                          <span className="text-[12px] text-text-lighter" style={labelStyle}>{job!.id}</span>
                        </div>
                      </div>
                    )}
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                      <span className={labelCls} style={labelStyle}>Nama Posisi <span className="text-danger">*</span></span>
                      <NamaPosisiAutocomplete value={namaPosisi} onChange={setNamaPosisi} />
                    </div>
                    <div className="flex flex-col gap-2 w-[280px] shrink-0">
                      <span className={labelCls} style={labelStyle}>Batas Tanggal Pelamaran</span>
                      <div className={fieldCls}>
                        <input type="date" value={batasTanggal} onChange={e => setBatasTanggal(e.target.value)} className="flex-1 min-w-0 text-[12px] text-text-darker outline-none bg-transparent" style={labelStyle} />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                      <span className={labelCls} style={labelStyle}>Kategori Pekerjaan <span className="text-danger">*</span></span>
                      <PostJobSelect value={kategori} options={KATEGORI_OPTIONS} placeholder="Pilih kategori pekerjaan" onChange={setKategori} creatable />
                    </div>
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                      <span className={labelCls} style={labelStyle}>Level Pekerjaan <span className="text-danger">*</span></span>
                      <PostJobSelect value={levelPekerjaan} options={LEVEL_OPTIONS} placeholder="Pilih level pekerjaan" onChange={setLevelPekerjaan} />
                    </div>
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                      <span className={labelCls} style={labelStyle}>Tipe Pekerjaan <span className="text-danger">*</span></span>
                      <PostJobSelect value={tipePekerjaan} options={TIPE_OPTIONS} placeholder="Pilih tipe pekerjaan" onChange={setTipePekerjaan} />
                    </div>
                  </div>
                  <RichTextEditor label="Deskripsi Pekerjaan" required value={deskripsi} onChange={setDeskripsi} />
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
                          className="bg-white h-10 rounded-xl border-[1.5px] border-border-default focus:border-brand-primary px-3 text-[12px] text-text-darker placeholder-[#c5c6c9] outline-none transition-colors w-full"
                          style={labelStyle} />
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <p className="text-[16px] font-bold text-text-default" style={labelStyle}>Lokasi Bekerja</p>
                    <div className="grid grid-cols-1 gap-x-5 gap-y-4 md:grid-cols-3">
                      <div className="flex flex-col gap-2 flex-1 min-w-0">
                        <span className={labelCls} style={labelStyle}>Provinsi <span className="text-danger">*</span></span>
                        <PostJobSelect value={provinsi} options={PROVINSI_OPTIONS} placeholder="Pilih Provinsi" onChange={setProvinsi} />
                      </div>
                      <div className="flex flex-col gap-2 flex-1 min-w-0">
                        <span className={labelCls} style={labelStyle}>Kota <span className="text-danger">*</span></span>
                        <PostJobSelect value={kota} options={LOKASI_OPTIONS} placeholder="Pilih Kota" onChange={setKota} />
                      </div>
                      <div className="flex flex-col gap-2 flex-1 min-w-0">
                        <span className={labelCls} style={labelStyle}>Kecamatan <span className="text-danger">*</span></span>
                        <PostJobSelect value={kecamatan} options={KECAMATAN_OPTIONS} placeholder="Pilih Kecamatan" onChange={setKecamatan} />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox checked={kotaSyaratUtama} onChange={() => setKotaSyaratUtama(v => !v)} />
                      <span className="text-[12px] text-text-darker" style={labelStyle}>Jadikan kota sebagai syarat utama <button type="button" onClick={() => setShowLokasiInfoModal(true)} className="text-[12px] text-brand-primary font-medium hover:underline" style={labelStyle}>Pelajari lebih lanjut</button></span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <p className="text-[16px] font-bold text-text-default" style={labelStyle}>Kebijakan Bekerja</p>
                    <div className="flex gap-6 flex-wrap">
                      {KEBIJAKAN_KERJA_OPTIONS.map(opt => (
                        <RadioOption key={opt} label={opt} selected={kebijakanKerja === opt} onClick={() => setKebijakanKerja(opt)} />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-8">
                    <p className="text-[16px] font-bold text-text-default" style={labelStyle}>Hari &amp; Jam Kerja</p>
                    <div className="flex items-center gap-4 w-full">
                      {HARI_OPTIONS.map(hari => {
                        const active = hariKerja.includes(hari);
                        return (
                          <button key={hari} type="button"
                            onClick={() => setHariKerja(prev => prev.includes(hari) ? prev.filter(h => h !== hari) : [...prev, hari])}
                            className="flex items-center gap-2.5 flex-1 min-w-0"
                          >
                            <div className={`flex items-center justify-center rounded-[4px] shrink-0 w-[18px] h-[18px] border transition-colors ${active ? "bg-brand-primary border-brand-primary" : "bg-white border-[#e2e8f0]"}`}>
                              {active && <Check size={12} className="text-white" strokeWidth={3} />}
                            </div>
                            <span className="text-[14px] font-medium text-text-darker whitespace-nowrap" style={labelStyle}>{hari}</span>
                          </button>
                        );
                      })}
                    </div>
                    {hariKerja.length > 0 && (
                      <div className="flex gap-4 w-full">
                        <div className="flex flex-col gap-2 flex-1 min-w-0">
                          <span className="text-[12px] font-medium text-text-default" style={labelStyle}>Jam Masuk <span className="text-[#ef4444]">*</span></span>
                          <div className="bg-white border border-[#e2e8f0] rounded-[13px] flex items-center gap-2 px-4 py-3 w-full focus-within:border-brand-primary transition-colors">
                            <input type="time" value={jamMasuk} onChange={e => setJamMasuk(e.target.value)} className="flex-1 min-w-0 text-[14px] text-text-darker outline-none bg-transparent [&::-webkit-calendar-picker-indicator]:hidden" style={labelStyle} />
                            <Clock size={20} className="text-[#9ca0a8] shrink-0" />
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 flex-1 min-w-0">
                          <span className="text-[12px] font-medium text-text-default" style={labelStyle}>Jam Selesai <span className="text-[#ef4444]">*</span></span>
                          <div className="bg-white border border-[#e2e8f0] rounded-[13px] flex items-center gap-2 px-4 py-3 w-full focus-within:border-brand-primary transition-colors">
                            <input type="time" value={jamSelesai} onChange={e => setJamSelesai(e.target.value)} className="flex-1 min-w-0 text-[14px] text-text-darker outline-none bg-transparent [&::-webkit-calendar-picker-indicator]:hidden" style={labelStyle} />
                            <Clock size={20} className="text-[#9ca0a8] shrink-0" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                </>
              )}

              {/* Step 2 — Syarat Pelamar */}
              {step === 2 && (
                <div className="flex flex-col gap-6">
                  <p className="text-[16px] font-bold text-text-default" style={labelStyle}>Syarat Pelamar</p>

                  <div className={`flex gap-5 ${PENDIDIKAN_WITH_JURUSAN.includes(pendidikan) ? "" : "max-w-[508px]"}`}>
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                      <span className={labelCls} style={labelStyle}>Pendidikan Terakhir <span className="text-danger">*</span></span>
                      <PostJobSelect value={pendidikan} options={PENDIDIKAN_OPTIONS} placeholder="Pilih Pendidikan terakhir" onChange={(v) => { setPendidikan(v); if (!PENDIDIKAN_WITH_JURUSAN.includes(v)) setJurusanTags([]); }} />
                      <div className="flex items-center gap-2 mt-1">
                        <Checkbox checked={pendidikanSyaratUtama} onChange={() => setPendidikanSyaratUtama(v => !v)} />
                        <span className="text-[12px] text-text-darker" style={labelStyle}>Jadikan pendidikan sebagai syarat utama <button type="button" onClick={() => setShowPendidikanInfoModal(true)} className="text-[12px] text-brand-primary font-medium hover:underline" style={labelStyle}>Pelajari lebih lanjut</button></span>
                      </div>
                    </div>

                    {PENDIDIKAN_WITH_JURUSAN.includes(pendidikan) && (
                      <div className="flex flex-col gap-1 flex-1 min-w-0">
                        <TagPicker label="Preferensi Jurusan" required tags={jurusanTags} setTags={setJurusanTags} suggestions={JURUSAN_OPTIONS} placeholder="Pilih preferensi Jurusan" />
                        <p className="text-[10px] text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>*Terbuka untuk semua jurusan jika dikosongkan</p>
                      </div>
                    )}
                  </div>

                  <div className={`flex gap-5 ${pengalaman === "Berpengalaman" ? "" : "max-w-[508px]"}`}>
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                      <span className={labelCls} style={labelStyle}>Tingkat Pengalaman <span className="text-danger">*</span></span>
                      <PostJobSelect value={pengalaman} options={PENGALAMAN_OPTIONS} placeholder="Pilih tingkat pengalaman" onChange={setPengalaman} />
                    </div>
                    {pengalaman === "Berpengalaman" && (
                      <div className="flex flex-col gap-2 flex-1 min-w-0">
                        <span className={labelCls} style={labelStyle}>Minimal Pengalaman Kerja <span className="text-danger">*</span></span>
                        <div className={fieldCls}>
                          <input type="number" min={0} value={minPengalamanTahun} onChange={e => setMinPengalamanTahun(e.target.value)} placeholder="0" className="flex-1 min-w-0 text-[12px] text-text-darker placeholder-[#c5c6c9] outline-none bg-transparent" style={labelStyle} />
                          <span className="text-[12px] text-text-darker shrink-0" style={labelStyle}>Tahun</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className={labelCls} style={labelStyle}>Apakah lowongan ini terbuka untuk Fresh Graduate? <span className="text-danger">*</span></span>
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
                        <span className="text-[12px] text-text-lighter" style={labelStyle}>Min</span>
                        <div className={`${fieldCls} w-24`}>
                          <input disabled={tanpaSyaratUsia} type="number" value={usiaMin} onChange={e => setUsiaMin(e.target.value)} className="flex-1 min-w-0 text-[12px] text-text-darker outline-none bg-transparent disabled:opacity-50" style={labelStyle} />
                        </div>
                      </div>
                      <span className="text-text-lighter">-</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[12px] text-text-lighter" style={labelStyle}>Max</span>
                        <div className={`${fieldCls} w-24`}>
                          <input disabled={tanpaSyaratUsia} type="number" value={usiaMax} onChange={e => setUsiaMax(e.target.value)} className="flex-1 min-w-0 text-[12px] text-text-darker outline-none bg-transparent disabled:opacity-50" style={labelStyle} />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 ml-2">
                        <Checkbox checked={tanpaSyaratUsia} onChange={() => setTanpaSyaratUsia(v => !v)} />
                        <span className="text-[12px] text-text-darker cursor-pointer" style={labelStyle} onClick={() => setTanpaSyaratUsia(v => !v)}>Tanpa persyaratan usia</span>
                      </div>
                    </div>
                    {!tanpaSyaratUsia && (
                      <div className="bg-[#f0f9ff] border border-border-lighter rounded-xl p-6 flex flex-col gap-2.5 shadow-[0px_4px_6px_rgba(0,0,0,0.04)]">
                        <div className="flex gap-3 items-start">
                          <Info size={20} className="text-brand-primary shrink-0 mt-0.5" />
                          <p className="flex-1 text-[14px] text-text-default leading-5" style={labelStyle}>
                            Berdasarkan{" "}
                            <a href="https://jdih.kemnaker.go.id" target="_blank" rel="noreferrer" className="text-brand-primary cursor-pointer hover:underline">
                              Surat Edaran Menteri Ketenagakerjaan Republik Indonesia Nomor M/6/HK.04/V/2025
                            </a>
                            , pemberi kerja hanya dapat menerapkan persyaratan usia dalam proses rekrutmen tenaga kerja jika ada kepentingan khusus dengan ketentuan khusus sebagai berikut:
                          </p>
                        </div>
                        <div className="flex flex-col gap-3 pl-9">
                          <div className="flex gap-2">
                            <span className="text-[16px] text-text-default w-4 shrink-0" style={labelStyle}>a.</span>
                            <p className="flex-1 text-[14px] text-text-default leading-5" style={labelStyle}>Untuk pekerjaan atau jabatan yang memiliki sifat atau karakteristik yang secara nyata memengaruhi kemampuan seseorang dalam melaksanakan pekerjaan; dan/atau</p>
                          </div>
                          <div className="flex gap-2">
                            <span className="text-[16px] text-text-default w-4 shrink-0" style={labelStyle}>b.</span>
                            <p className="flex-1 text-[14px] text-text-default leading-5" style={labelStyle}>Tidak boleh berdampak pada hilangnya atau berkurangnya kesempatan dalam memperoleh pekerjaan.</p>
                          </div>
                        </div>
                        <p className="text-[14px] text-text-default leading-5" style={labelStyle}>Jika Anda memilih untuk menerapkan persyaratan usia dalam proses rekrutmen ini, segala pembuktian atas kepatuhan terhadap Surat Edaran tersebut dibebankan pada perusahaan Anda.</p>
                      </div>
                    )}
                  </div>

                  <div className="max-w-[508px]">
                    <TagPicker label="Skill Tags" tags={skillTags} setTags={setSkillTags} suggestions={SKILL_SUGGESTIONS} placeholder="Cari dan tambahkan skill..." />
                  </div>
                </div>
              )}

              {/* Step 3 — Kompensasi & Komunikasi */}
              {step === 3 && (
                <div className="flex flex-col gap-6">
                  <p className="text-[16px] font-bold text-text-default" style={labelStyle}>Kompensasi &amp; Komunikasi</p>

                  <div className="flex gap-5 items-end">
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                      <span className={labelCls} style={labelStyle}>Rentang Gaji (Minimal)</span>
                      <div className={fieldCls}>
                        <span className="text-[12px] text-text-darker shrink-0" style={{ fontFamily: "var(--font-body)" }}>Rp</span>
                        <input type="number" value={gajiMin} onChange={e => setGajiMin(e.target.value)} placeholder="0" className="flex-1 min-w-0 text-[12px] text-text-darker placeholder-[#c5c6c9] outline-none bg-transparent" style={labelStyle} />
                        <span className="text-[12px] text-text-darker shrink-0" style={{ fontFamily: "var(--font-body)" }}>/ bulan</span>
                      </div>
                    </div>
                    <div className="h-10 flex items-center shrink-0"><div className="bg-text-lighter h-0.5 w-3" /></div>
                    <div className="flex flex-col gap-2 flex-1 min-w-0">
                      <span className={labelCls} style={labelStyle}>Rentang Gaji (Maksimal)</span>
                      <div className={fieldCls}>
                        <span className="text-[12px] text-text-darker shrink-0" style={{ fontFamily: "var(--font-body)" }}>Rp</span>
                        <input type="number" value={gajiMax} onChange={e => setGajiMax(e.target.value)} placeholder="0" className="flex-1 min-w-0 text-[12px] text-text-darker placeholder-[#c5c6c9] outline-none bg-transparent" style={labelStyle} />
                        <span className="text-[12px] text-text-darker shrink-0" style={{ fontFamily: "var(--font-body)" }}>/ bulan</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex gap-2.5 items-center">
                      <Toggle checked={tampilkanGaji} onChange={() => setTampilkanGaji(v => !v)} />
                      <span className="text-[14px] font-medium text-text-darker" style={labelStyle}>Tampilkan informasi gaji di lowongan</span>
                    </div>
                    <p className="text-[12px] text-text-lighter" style={labelStyle}>Menampilkan gaji terbukti menarik hingga 2,5x lebih banyak pelamar</p>
                  </div>

                  <div className="flex flex-col gap-1">
                    <TagPicker label="Benefit & Tunjangan" required tags={benefitTags} setTags={setBenefitTags} suggestions={BENEFIT_OPTIONS} placeholder="Pilih benefit & tunjangan" />
                    <p className="text-[10px] text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>*Terbuka untuk semua jurusan jika dikosongkan</p>
                  </div>

                  <div className="flex flex-col gap-4 max-w-[700px]">
                    <div className="flex flex-col gap-0.5">
                      <p className="text-[14px] font-semibold text-text-default" style={labelStyle}>Kontak untuk Dihubungi Pelamar</p>
                      <p className="text-[12px] text-text-lighter" style={labelStyle}>Pilih salah satu kontak di bawah agar pelamar dapat dengan mudah bertanya tentang proses selanjutnya. Pastikan kontak tersebut aktif dan siap dihubungi.</p>
                    </div>
                    <div className="flex gap-6">
                      <RadioOption label="WhatsApp" selected={kontakType === "WhatsApp"} onClick={() => setKontakType("WhatsApp")} />
                      <RadioOption label="Email" selected={kontakType === "Email"} onClick={() => setKontakType("Email")} />
                    </div>
                    <div className="flex flex-col gap-2 max-w-[356px]">
                      <span className={labelCls} style={labelStyle}>{kontakType === "WhatsApp" ? "Nomor WhatsApp" : "Email"} <span className="text-danger">*</span></span>
                      <div className={fieldCls}>
                        {kontakType === "WhatsApp" && <span className="text-[12px] text-text-darker shrink-0" style={{ fontFamily: "var(--font-body)" }}>+62</span>}
                        <input type={kontakType === "WhatsApp" ? "tel" : "email"} value={kontakValue} onChange={e => setKontakValue(e.target.value)}
                          placeholder={kontakType === "WhatsApp" ? "812 3456 7890" : "hr@perusahaan.com"}
                          className="flex-1 min-w-0 text-[12px] text-text-darker placeholder-[#c5c6c9] outline-none bg-transparent" style={labelStyle} />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-0.5">
                      <p className="text-[14px] font-semibold text-text-default" style={labelStyle}>Pesan Otomatis untuk Pelamar</p>
                      <p className="text-[12px] text-text-lighter" style={labelStyle}>Buat pesan untuk pelamar agar bisa menyapa mereka secara personal atau menyampaikan informasi penting. Pesan ini akan otomatis terkirim setelah mereka melamar lowongan Anda.</p>
                    </div>
                    <RichTextEditor label="Pesan Selamat Datang" value={pesanOtomatis} onChange={setPesanOtomatis} maxLen={5000} placeholderLines={PESAN_PLACEHOLDER_LINES} footer={null} />
                  </div>
                </div>
              )}

              {/* Step 4 — Konfirmasi */}
              {step === 4 && (
                <div className="flex flex-col gap-6 max-w-[720px]">
                  <p className="text-[16px] font-bold text-text-default" style={labelStyle}>Kode Etik Perisaiku Talenta Pemberi Kerja</p>
                  <div className="flex flex-col gap-5">
                    {KODE_ETIK_ITEMS.map((item, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <div className="w-7 h-7 rounded-full bg-[#ebf2ff] flex items-center justify-center shrink-0">
                          <span className="text-[12px] font-bold text-brand-primary" style={labelStyle}>{i + 1}</span>
                        </div>
                        <p className="text-[13px] text-text-darker leading-5 pt-0.5" style={labelStyle}>{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-border-lighter pt-5">
                    <div className="flex items-start gap-3 cursor-pointer" onClick={() => setAgreed(v => !v)}>
                      <Checkbox checked={agreed} onChange={() => setAgreed(v => !v)} />
                      <span className="text-[13px] text-text-darker" style={labelStyle}>Saya setuju dengan kode etik Perisaiku Talenta</span>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>

      {/* Sticky footer */}
      <div className="shrink-0 bg-white border-t border-border-lighter px-10 py-4 flex items-center justify-between">
        <button onClick={handleFooterBack} className="h-10 px-5 rounded-full border-[1.5px] border-border-default text-text-darker font-bold text-[14px] hover:bg-gray-50 transition-colors" style={{ fontFamily: "var(--font-body)" }}>Kembali</button>
        <div className="flex gap-3">
          {isPublishedEdit ? (
            <button disabled className="h-10 px-5 rounded-full bg-[#f6f4f4] text-border-default font-bold text-[14px] cursor-not-allowed" style={{ fontFamily: "var(--font-body)" }}>Simpan Sebagai Draft</button>
          ) : (
            <button onClick={handleSaveDraft} className="h-10 px-5 rounded-full border-[1.5px] border-brand-primary text-brand-primary font-bold text-[14px] hover:bg-[#f0f5ff] transition-colors" style={{ fontFamily: "var(--font-body)" }}>Simpan Sebagai Draft</button>
          )}
          {step < 4 ? (
            <button onClick={handleNext} className="bg-brand-primary h-10 px-5 rounded-full text-white font-bold text-[14px] hover:bg-brand-primary-hover transition-colors" style={{ fontFamily: "var(--font-body)" }}>
              Lanjut ke {WIZARD_STEPS[step].label}
            </button>
          ) : (
            <button onClick={handleNext} disabled={!agreed}
              className={`h-10 px-5 rounded-full font-bold text-[14px] transition-colors ${agreed ? "bg-brand-primary text-white hover:bg-brand-primary-hover" : "bg-border-lighter text-[#9b9ca1] cursor-not-allowed"}`}
              style={{ fontFamily: "var(--font-body)" }}>
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

