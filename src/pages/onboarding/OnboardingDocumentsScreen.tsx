import React, { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { FileText, X, Paperclip, Info } from "lucide-react";
import { useSession } from "../../lib/session";
import { FieldLabel, SelectInput, FieldError, StepProgress } from "../../components/shared/FormFields";
import { OnboardingSidebar } from "../../components/onboarding/OnboardingSidebar";
import { DocRequirement, DOCUMENT_REQUIREMENTS_BY_ENTITAS, jenisEntitasOptions } from "../../mocks/options";

export function LegalDocumentUploadField({ requirement, file, error, onFileSelect, onFileRemove }: {
  requirement: DocRequirement;
  file: File | null;
  error?: string;
  onFileSelect: (f: File) => void;
  onFileRemove: () => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (f) onFileSelect(f);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) onFileSelect(f);
  };

  return (
    <div className="flex flex-col gap-1.5">
      <FieldLabel required={requirement.mandatory}>
        {requirement.label}
      </FieldLabel>
      {file ? (
        <div className="flex items-center gap-3 bg-white border border-[#e5e7eb] rounded-lg px-4 py-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#dbeafe]">
            <FileText size={20} className="text-brand-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[#111827] text-sm font-bold truncate" style={{ fontFamily: "var(--font-heading)" }}>{file.name}</p>
            <p className="text-[#6b7280] text-xs font-medium" style={{ fontFamily: "var(--font-heading)" }}>{(file.size / 1024 / 1024).toFixed(2)} MB</p>
          </div>
          <button onClick={onFileRemove} className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#e5e7eb] bg-[#f3f4f6] text-icon-default transition-colors hover:text-danger">
            <X size={16} />
          </button>
        </div>
      ) : (
        <div
          className={`bg-[#f9fafb] border border-dashed rounded-lg h-32 flex flex-col items-center justify-center cursor-pointer hover:border-brand-primary hover:bg-[#f0f5ff] transition-colors ${error ? "border-danger" : "border-[#d1d5db]"}`}
          onDrop={handleDrop}
          onDragOver={e => e.preventDefault()}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="flex flex-col items-center gap-2 p-4">
            <Paperclip size={28} className="text-[#6b7280]" />
            <p className="text-[#111827] text-sm font-bold" style={{ fontFamily: "var(--font-body)" }}>Klik atau seret file ke sini</p>
            <p className="text-[#6b7280] text-xs text-center" style={{ fontFamily: "var(--font-body)" }}>PDF, PNG, atau JPEG · Maks. 5 MB</p>
          </div>
          <input ref={fileInputRef} type="file" accept=".pdf,.png,.jpg,.jpeg" className="hidden" onChange={handleFileChange} />
        </div>
      )}
      <FieldError msg={error} />
    </div>
  );
}

export function OnboardingDocumentsScreen() {
  const navigate = useNavigate();
  const { setSession } = useSession();

  const [jenisEntitas, setJenisEntitas] = useState("");
  const [files, setFiles] = useState<Record<string, File | null>>({});
  const [entitasError, setEntitasError] = useState<string | undefined>();
  const [docErrors, setDocErrors] = useState<Record<string, string>>({});

  const requirements = jenisEntitas ? (DOCUMENT_REQUIREMENTS_BY_ENTITAS[jenisEntitas] ?? []) : [];

  const handleEntitasChange = (v: string) => {
    setJenisEntitas(v);
    setFiles({});
    setEntitasError(undefined);
    setDocErrors({});
  };

  const handleFileSelect = (key: string, f: File) => {
    setFiles(prev => ({ ...prev, [key]: f }));
    setDocErrors(prev => ({ ...prev, [key]: undefined as unknown as string }));
  };

  const handleFileRemove = (key: string) => {
    setFiles(prev => ({ ...prev, [key]: null }));
  };

  const handleSubmit = () => {
    if (!jenisEntitas) {
      setEntitasError("Jenis entitas wajib dipilih");
      return;
    }
    const newDocErrors: Record<string, string> = {};
    requirements.forEach(req => {
      if (req.mandatory && !files[req.key]) {
        newDocErrors[req.key] = `${req.label} wajib diunggah`;
      }
    });
    setDocErrors(newDocErrors);
    if (Object.keys(newDocErrors).length > 0) return;
    setSession(prev => ({ ...prev, verificationStatus: "pending", userRole: "Super Admin" }));
    navigate("/onboarding/pending");
  };

  return (
    <div className="bg-white flex items-stretch w-full h-screen overflow-hidden">
      <OnboardingSidebar currentStep={2} />
      <div className="flex-1 min-w-0 flex items-start justify-center overflow-y-auto py-16 px-6">
        <div className="flex flex-col gap-6 w-full max-w-[560px]">
          <div className="flex flex-col gap-4">
            <StepProgress step={2} total={2} />
            <div className="flex flex-col gap-2">
              <p className="text-text-darker text-[28px] font-bold leading-8" style={{ fontFamily: "var(--font-body)" }}>Upload dokumen legal</p>
              <p className="text-[#6b7280] text-sm" style={{ fontFamily: "var(--font-body)" }}>Unggah dokumen legal yang relevan dan masih berlaku sesuai jenis entitas.</p>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <FieldLabel required>Jenis Entitas</FieldLabel>
            <SelectInput
              placeholder="Pilih Jenis Entitas"
              value={jenisEntitas}
              onChange={handleEntitasChange}
              options={jenisEntitasOptions}
              error={!!entitasError}
            />
            <FieldError msg={entitasError} />
          </div>

          {requirements.map(req => (
            <LegalDocumentUploadField
              key={req.key}
              requirement={req}
              file={files[req.key] ?? null}
              error={docErrors[req.key]}
              onFileSelect={f => handleFileSelect(req.key, f)}
              onFileRemove={() => handleFileRemove(req.key)}
            />
          ))}

          <div className="bg-[#ebf2ff] rounded-lg">
            <div className="flex gap-3 items-start p-4">
              <div className="bg-[#dbeafe] flex items-center justify-center rounded-full size-8 shrink-0">
                <Info size={18} className="text-[#1d4ed8]" />
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                <p className="text-[#0044d2] text-sm font-bold" style={{ fontFamily: "var(--font-body)" }}>Yang terjadi selanjutnya</p>
                <p className="text-text-default text-[13px] leading-[18px]" style={{ fontFamily: "var(--font-body)" }}>
                  Tim verifikasi Perisaku akan meninjau dokumen Anda dalam{" "}
                  <span className="font-bold">1×24 jam</span>. Setelah terverifikasi, akun Anda aktif dan Anda bisa langsung memasang lowongan.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-2.5 w-full pt-2 pb-10">
            <button onClick={() => navigate("/onboarding/company")} className="h-12 rounded-full px-6 border-2 border-brand-primary text-brand-primary text-base font-bold bg-white hover:bg-[#ebf2ff] transition-colors w-40 shrink-0" style={{ fontFamily: "var(--font-body)" }}>
              Kembali
            </button>
            <button onClick={handleSubmit} className="h-12 rounded-full flex-1 text-white text-base font-bold bg-brand-primary hover:bg-brand-primary-hover cursor-pointer transition-colors" style={{ fontFamily: "var(--font-body)" }}>
              Kirim &amp; Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
