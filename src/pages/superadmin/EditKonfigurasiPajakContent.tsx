import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { format } from "date-fns";
import { ArrowLeft, ChevronRight, Briefcase, LayoutGrid, Megaphone, Armchair, Users, CirclePlus, Info } from "lucide-react";
import { SuperadminTopBar } from "../../layouts/SuperadminLayout";
import { useFormGuard } from "../../lib/formGuard";
import { FieldLabel, TextInput, SelectInput } from "../../components/shared/FormFields";
import { PreviewPerhitunganModal } from "../../components/superadmin/PreviewPerhitunganModal";
import {
  TaxConfigCategory, TaxConfigPerlakuanHarga, TaxConfigMetode,
  TAX_CONFIG_CATEGORY_OPTIONS, TAX_CONFIG_PERLAKUAN_HARGA_OPTIONS, TAX_CONFIG_METODE_OPTIONS,
  TAX_CONFIG_PRODUCT_OPTIONS, TAX_CONFIG_ROWS, updateTaxConfigRow, buildTarifDisplay, buildTarifNote, productLabelsToIds,
} from "../../mocks/konfigurasi-pajak";

const PRODUCT_ICONS: Record<string, typeof Briefcase> = {
  "job-posting": Briefcase,
  "job-highlight": LayoutGrid,
  "sponsored-job": Megaphone,
  "recruiter-seat": Armchair,
  "candidate-credit": Users,
  "add-on": CirclePlus,
};

function SectionTitle({ children }: { children: string }) {
  return <p className="text-text-default text-[16px] font-bold" style={{ fontFamily: "var(--font-body)" }}>{children}</p>;
}

export function EditKonfigurasiPajakContent() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { setDirty, guardAction } = useFormGuard();
  const row = TAX_CONFIG_ROWS.find(r => r.id === id) ?? null;

  const [nama, setNama] = useState(row?.nama ?? "");
  const [kategori, setKategori] = useState<TaxConfigCategory | "">(row?.kategori ?? "");
  const [perlakuanHarga, setPerlakuanHarga] = useState<TaxConfigPerlakuanHarga | "">(row?.perlakuanHarga ?? "");
  const [metode, setMetode] = useState<TaxConfigMetode>(row?.metode ?? "Persentase");
  const [nilaiInput, setNilaiInput] = useState(row ? String(row.nilai) : "");
  const [selectedProducts, setSelectedProducts] = useState<string[]>(row ? productLabelsToIds(row.diterapkanPada) : []);
  const [tanggalMulai, setTanggalMulai] = useState(row?.tanggalMulaiISO ?? "");
  const [tanggalBerakhir, setTanggalBerakhir] = useState(row?.tanggalBerakhirISO ?? "");
  const [previewOpen, setPreviewOpen] = useState(false);

  const nilai = Number(nilaiInput) || 0;
  const toggleProduct = (pid: string) => setSelectedProducts(prev => (prev.includes(pid) ? prev.filter(p => p !== pid) : [...prev, pid]));

  const isValid = Boolean(nama.trim() && kategori && perlakuanHarga && nilaiInput && tanggalMulai);
  const hasUnsavedChanges = Boolean(row) && (
    nama !== row!.nama ||
    kategori !== row!.kategori ||
    perlakuanHarga !== row!.perlakuanHarga ||
    metode !== row!.metode ||
    nilai !== row!.nilai ||
    tanggalMulai !== row!.tanggalMulaiISO ||
    tanggalBerakhir !== (row!.tanggalBerakhirISO ?? "") ||
    selectedProducts.length !== productLabelsToIds(row!.diterapkanPada).length ||
    selectedProducts.some(p => !productLabelsToIds(row!.diterapkanPada).includes(p))
  );

  useEffect(() => {
    setDirty(hasUnsavedChanges);
    return () => setDirty(false);
  }, [hasUnsavedChanges, setDirty]);

  const handleBack = () => guardAction(() => navigate(-1));
  const handleGoToList = () => guardAction(() => navigate("/superadmin/konfigurasi-pajak"));

  const handleSubmit = () => {
    if (!row || !isValid || !kategori || !perlakuanHarga) return;
    updateTaxConfigRow(row.id, {
      nama: nama.trim(),
      kategori,
      perlakuanHarga,
      metode,
      nilai,
      tarifDisplay: buildTarifDisplay(metode, nilai),
      tarifNote: buildTarifNote(perlakuanHarga),
      diterapkanPada: selectedProducts.map(pid => TAX_CONFIG_PRODUCT_OPTIONS.find(p => p.id === pid)?.label || pid),
      mulaiBerlaku: format(new Date(tanggalMulai), "d MMM yyyy"),
      berakhirPada: tanggalBerakhir ? format(new Date(tanggalBerakhir), "d MMM yyyy") : undefined,
      tanggalMulaiISO: tanggalMulai,
      tanggalBerakhirISO: tanggalBerakhir || undefined,
      aktif: row.aktif,
    });
    setDirty(false);
    navigate("/superadmin/konfigurasi-pajak", { state: { toast: "Konfigurasi pajak dan biaya berhasil diubah" } });
  };

  if (!row) {
    return (
      <div className="flex-1 min-w-0 h-full overflow-y-auto bg-surface">
        <SuperadminTopBar />
        <div className="flex flex-col items-center justify-center gap-3 py-24">
          <p className="text-text-default text-base font-bold" style={{ fontFamily: "var(--font-body)" }}>Konfigurasi tidak ditemukan</p>
          <button onClick={() => navigate("/superadmin/konfigurasi-pajak")} className="text-sm font-semibold text-brand-primary hover:underline" style={{ fontFamily: "var(--font-body)" }}>
            Kembali ke Daftar Konfigurasi Pajak
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 min-w-0 h-full overflow-y-auto bg-surface pb-10">
      <SuperadminTopBar />

      <div className="flex flex-col gap-6 px-10 pt-8">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2.5">
            <button onClick={handleBack} className="text-text-default hover:text-brand-primary transition-colors" aria-label="Kembali">
              <ArrowLeft size={28} />
            </button>
            <p className="text-text-default text-[28px] font-bold leading-8" style={{ fontFamily: "var(--font-body)" }}>Edit Konfigurasi</p>
          </div>
          <div className="flex items-center gap-2.5 pl-[38px]">
            <button onClick={handleGoToList} className="text-[#ff6b35] text-sm font-semibold hover:underline" style={{ fontFamily: "var(--font-body)" }}>
              Daftar Konfigurasi Pajak
            </button>
            <ChevronRight size={14} className="text-text-muted" />
            <span className="text-text-muted text-sm" style={{ fontFamily: "var(--font-body)" }}>Edit Konfigurasi</span>
          </div>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-2xl border border-border-lighter p-8 flex flex-col gap-10 w-full">
          {/* Informasi Dasar */}
          <div className="flex flex-col gap-4 w-full">
            <SectionTitle>Informasi Dasar</SectionTitle>
            <div className="flex flex-col gap-5 w-full">
              <div className="flex flex-col gap-2 w-full">
                <FieldLabel required>Nama Konfigurasi</FieldLabel>
                <TextInput placeholder="Contoh: PPN, Biaya Platform" value={nama} onChange={v => setNama(v.slice(0, 100))} />
                <p className="text-[10px] text-text-lighter text-right w-full" style={{ fontFamily: "var(--font-body)" }}>{nama.length} / 100</p>
              </div>
              <div className="flex gap-5 w-full">
                <div className="flex-1 min-w-0 flex flex-col gap-2">
                  <FieldLabel required>Kategori</FieldLabel>
                  <SelectInput placeholder="Pilih kategori" value={kategori} onChange={v => setKategori(v as TaxConfigCategory)} options={TAX_CONFIG_CATEGORY_OPTIONS} />
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-2">
                  <FieldLabel required>Perlakuan Harga</FieldLabel>
                  <SelectInput placeholder="Pilih perlakuan harga" value={perlakuanHarga} onChange={v => setPerlakuanHarga(v as TaxConfigPerlakuanHarga)} options={TAX_CONFIG_PERLAKUAN_HARGA_OPTIONS} />
                </div>
              </div>
            </div>
          </div>

          {/* Aturan Perhitungan */}
          <div className="flex flex-col gap-4 w-full">
            <SectionTitle>Aturan Perhitungan</SectionTitle>
            <div className="flex gap-4 w-full">
              <div className="flex-1 min-w-0 flex flex-col gap-2">
                <FieldLabel required>Metode</FieldLabel>
                <SelectInput placeholder="Pilih metode" value={metode} onChange={v => setMetode(v as TaxConfigMetode)} options={TAX_CONFIG_METODE_OPTIONS} />
              </div>
              <div className="flex-1 min-w-0 flex flex-col gap-2">
                <FieldLabel required>Nilai</FieldLabel>
                <TextInput
                  placeholder="0"
                  value={nilaiInput}
                  onChange={v => setNilaiInput(v.replace(/\D/g, ""))}
                  prefix={metode === "Nominal Tetap" ? "Rp" : undefined}
                  suffix={metode === "Persentase" ? <span className="text-text-darker text-xs font-semibold shrink-0">%</span> : undefined}
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-[#666b78] text-[14px]" style={{ fontFamily: "var(--font-body)" }}>Mau lihat perhitungannya?</p>
              <button
                onClick={() => nilaiInput && setPreviewOpen(true)}
                disabled={!nilaiInput}
                className="text-[#3366e5] text-[14px] font-semibold hover:underline disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:no-underline"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Preview Perhitungan
              </button>
            </div>
          </div>

          {/* Penerapan Produk */}
          <div className="flex flex-col gap-4 w-full">
            <SectionTitle>Penerapan Produk</SectionTitle>
            <div className="grid grid-cols-3 gap-3 w-full">
              {TAX_CONFIG_PRODUCT_OPTIONS.map(product => {
                const Icon = PRODUCT_ICONS[product.id];
                const selected = selectedProducts.includes(product.id);
                return (
                  <button
                    key={product.id}
                    onClick={() => toggleProduct(product.id)}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl border transition-colors text-left ${selected ? "bg-[#ebf2ff] border-brand-primary" : "bg-white border-[#d9d9de] hover:bg-gray-50"}`}
                  >
                    <div className={`size-9 rounded-full flex items-center justify-center shrink-0 ${selected ? "bg-white" : "bg-[#ededf7]"}`}>
                      <Icon size={20} className="text-brand-primary" />
                    </div>
                    <p className="flex-1 min-w-0 text-text-darker text-[14px] font-semibold" style={{ fontFamily: "var(--font-body)" }}>{product.label}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Masa Berlaku */}
          <div className="flex flex-col gap-4 w-full">
            <SectionTitle>Masa Berlaku</SectionTitle>
            <div className="flex gap-4 w-full">
              <div className="flex-1 min-w-0 flex flex-col gap-2">
                <FieldLabel required>Tanggal Mulai</FieldLabel>
                <div className="bg-white border border-border-default rounded-xl h-10 flex items-center px-3 focus-within:border-brand-primary transition-colors">
                  <input type="date" value={tanggalMulai} onChange={e => setTanggalMulai(e.target.value)} className="flex-1 min-w-0 text-xs text-text-darker outline-none bg-transparent" style={{ fontFamily: "var(--font-body)" }} />
                </div>
              </div>
              <div className="flex-1 min-w-0 flex flex-col gap-2">
                <FieldLabel>Tanggal Berakhir</FieldLabel>
                <div className="bg-white border border-border-default rounded-xl h-10 flex items-center px-3 focus-within:border-brand-primary transition-colors">
                  <input type="date" value={tanggalBerakhir} onChange={e => setTanggalBerakhir(e.target.value)} className="flex-1 min-w-0 text-xs text-text-darker outline-none bg-transparent" style={{ fontFamily: "var(--font-body)" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Info card */}
          <div className="bg-[#f0f9ff] border border-border-lighter rounded-xl p-6 flex gap-3 items-start w-full">
            <Info size={20} className="text-brand-primary shrink-0" />
            <p className="flex-1 min-w-0 text-text-default text-[14px]" style={{ fontFamily: "var(--font-body)" }}>
              Invoice yang sudah diterbitkan tetap menggunakan snapshot konfigurasi sebelumnya
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="sticky bottom-0 bg-white border-t border-[#e2e8f0] flex items-center justify-end gap-4 px-10 py-6 mt-8">
        <button onClick={handleBack} className="h-12 px-5 rounded-full border-[1.5px] border-border-default text-text-darker font-bold text-[16px] hover:bg-gray-50 transition-colors" style={{ fontFamily: "var(--font-heading)" }}>
          Kembali
        </button>
        <button
          onClick={handleSubmit}
          disabled={!isValid}
          className="h-12 px-6 rounded-full bg-brand-primary text-white font-bold text-[16px] hover:bg-brand-primary-hover disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Simpan
        </button>
      </div>

      {previewOpen && (
        <PreviewPerhitunganModal nama={nama} metode={metode} nilai={nilai} onClose={() => setPreviewOpen(false)} />
      )}
    </div>
  );
}
