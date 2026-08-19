import React, { useState, useEffect, useRef } from "react";
import { Italic, Underline, List, ListOrdered, AlignLeft, AlignCenter, AlignRight, AlignJustify, Link2 } from "lucide-react";
import { InfoModal } from "../shared/InfoModal";

// RichEditor: not currently used anywhere in the app — kept as-is during the file split (not deleted, per scope).
export function RichEditor({ label, value, onChange, maxLen = 5000 }: {
  label: string; value: string; onChange: (v: string) => void; maxLen?: number;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[12px] text-text-darker" style={{ fontFamily: "var(--font-body)" }}>{label}</span>
      <div className="bg-white rounded-xl border border-border-default overflow-hidden focus-within:border-brand-primary transition-colors">
        <div className="border-b border-border-lighter px-3 py-2 flex gap-2 items-center">
          {["B", "I", "U"].map(f => <button key={f} className="text-[11px] font-semibold text-text-lighter w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100">{f}</button>)}
          <div className="bg-border-lighter h-4 w-px mx-1" />
          <button className="text-[11px] text-text-lighter px-2 py-1 rounded hover:bg-gray-100">≡</button>
          <button className="text-[11px] text-text-lighter px-2 py-1 rounded hover:bg-gray-100">1.</button>
        </div>
        <textarea value={value} onChange={e => onChange(e.target.value)} maxLength={maxLen}
          placeholder="Jelaskan posisi ini secara detail..."
          className="w-full min-h-[160px] p-4 text-[12px] text-text-darker placeholder-[#c5c6c9] resize-none outline-none bg-transparent"
          style={{ fontFamily: "var(--font-body)" }} />
      </div>
      <p className="text-[10px] text-text-lighter text-right" style={{ fontFamily: "var(--font-body)" }}>{value.length} / {maxLen}</p>
    </div>
  );
}

// ─── Rich Text Editor (Deskripsi Pekerjaan) ───────────────────────────────────

export const DESKRIPSI_PLACEHOLDER_LINES = [
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

export const PESAN_PLACEHOLDER_LINES = [
  "Halo,",
  "",
  "Terima kasih telah mengajukan permohonan untuk posisi ini! Jika Anda berhasil ke tahap berikutnya, mungkin Anda akan diminta untuk menyiapkan beberapa dokumen administratif.",
  "",
  "Salam,",
  "Tim Rekrutmen",
];

export function RichTextToolbarBtn({ onClick, active, wide, children }: {
  onClick: () => void; active?: boolean; wide?: boolean; children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className={`flex items-center justify-center rounded transition-colors ${wide ? "px-2 py-1" : "w-6 h-6"} ${active ? "bg-[#ebf2ff] text-brand-primary" : "text-text-lighter hover:bg-[#f3f4f6]"}`}
    >
      {children}
    </button>
  );
}

export function RichTextEditor({ label, required, value, onChange, maxLen = 5000, placeholderLines = DESKRIPSI_PLACEHOLDER_LINES, footer }: {
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
        <span className="text-[12px] font-medium text-text-default" style={{ fontFamily: "var(--font-body)" }}>{label}</span>
        {required && <span className="text-[14px] font-semibold text-[#ff4d4f]">*</span>}
      </div>
      <div className="bg-white border border-border-default rounded-xl overflow-hidden focus-within:border-brand-primary transition-colors">
        <div className="border-b border-border-lighter px-3 py-2 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <RichTextToolbarBtn onClick={() => exec("bold")}>
              <span className="text-[11px] font-semibold" style={{ fontFamily: "var(--font-body)" }}>B</span>
            </RichTextToolbarBtn>
            <RichTextToolbarBtn onClick={() => exec("italic")}><Italic size={13} /></RichTextToolbarBtn>
            <RichTextToolbarBtn onClick={() => exec("underline")}><Underline size={13} /></RichTextToolbarBtn>
          </div>
          <div className="bg-border-lighter h-4 w-px shrink-0" />
          <div className="flex items-center gap-1">
            <RichTextToolbarBtn onClick={() => exec("insertOrderedList")}><ListOrdered size={14} /></RichTextToolbarBtn>
            <RichTextToolbarBtn onClick={() => exec("insertUnorderedList")}><List size={14} /></RichTextToolbarBtn>
            <div ref={alignRef} className="relative">
              <RichTextToolbarBtn onClick={() => { setAlignOpen(v => !v); setLinkOpen(false); }}><AlignLeft size={14} /></RichTextToolbarBtn>
              {alignOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-border-default rounded-lg shadow-lg z-30 flex gap-0.5 p-1">
                  <RichTextToolbarBtn onClick={() => { exec("justifyLeft"); setAlignOpen(false); }}><AlignLeft size={14} /></RichTextToolbarBtn>
                  <RichTextToolbarBtn onClick={() => { exec("justifyCenter"); setAlignOpen(false); }}><AlignCenter size={14} /></RichTextToolbarBtn>
                  <RichTextToolbarBtn onClick={() => { exec("justifyRight"); setAlignOpen(false); }}><AlignRight size={14} /></RichTextToolbarBtn>
                  <RichTextToolbarBtn onClick={() => { exec("justifyFull"); setAlignOpen(false); }}><AlignJustify size={14} /></RichTextToolbarBtn>
                </div>
              )}
            </div>
          </div>
          <div className="bg-border-lighter h-4 w-px shrink-0" />
          <div ref={linkRef} className="relative">
            <RichTextToolbarBtn onClick={openLink}><Link2 size={14} /></RichTextToolbarBtn>
            {linkOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-border-lighter rounded-2xl shadow-lg z-30 p-2 flex items-center gap-4 w-80">
                <div className="flex items-center gap-1.5 flex-1 min-w-0 border border-brand-primary rounded-full px-4 py-2.5">
                  <Link2 size={14} className="text-[#9b9ca1] shrink-0" />
                  <input
                    autoFocus
                    value={linkUrl}
                    onChange={(e) => setLinkUrl(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); applyLink(); } }}
                    placeholder="Ketik atau tempel tautan"
                    className="flex-1 min-w-0 text-[14px] text-text-darker placeholder-[#c5c6c9] outline-none bg-transparent"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>
                <button
                  type="button"
                  onClick={applyLink}
                  disabled={!linkUrl.trim()}
                  className={`text-[16px] font-semibold shrink-0 transition-colors ${linkUrl.trim() ? "text-brand-primary cursor-pointer" : "text-border-default cursor-not-allowed"}`}
                  style={{ fontFamily: "var(--font-body)" }}
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
              className="absolute inset-0 p-4 pointer-events-none text-[12px] text-border-default whitespace-pre-wrap"
              style={{ fontFamily: "var(--font-body)", lineHeight: "18px" }}
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
            className="min-h-[160px] p-4 text-[12px] text-text-darker outline-none [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5 [&_a]:text-brand-primary [&_a]:underline"
            style={{ fontFamily: "var(--font-body)", lineHeight: "18px" }}
          />
        </div>
      </div>
      <div className={`flex items-center gap-2 ${footer === null ? "justify-end" : "justify-between"}`}>
        {footer !== null && (
          footer !== undefined ? footer : (
            <p className="text-[10px] text-text-lighter" style={{ fontFamily: "var(--font-body)" }}>
              Penulisan deskripsi &amp; kualifikasi sebaiknya sesuai dengan{" "}
              <button type="button" onClick={() => setKodeEtikOpen(true)} className="text-[10px] font-bold text-brand-primary hover:underline" style={{ fontFamily: "var(--font-body)" }}>Kode Etik Perisaiku Talenta Pemberi Kerja</button>
            </p>
          )
        )}
        <p className="text-[10px] text-text-lighter shrink-0" style={{ fontFamily: "var(--font-body)" }}>{charCount} / {maxLen}</p>
      </div>
      {kodeEtikOpen && (
        <InfoModal
          title="Kode Etik Perisaiku Talenta Tentang Pembuatan Lowongan"
          onClose={() => setKodeEtikOpen(false)}
          footer={
            <button
              type="button"
              onClick={() => setKodeEtikOpen(false)}
              className="bg-brand-primary h-12 rounded-full text-white font-bold text-[16px] hover:bg-brand-primary-hover transition-colors w-full"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Oke, Mengerti
            </button>
          }
        >
          <ol className="list-decimal pl-[18px] flex flex-col gap-2">
            <li>Pastikan informasi &amp; keterangan yang Anda cantumkan pada lowongan telah sesuai &amp; tidak mengandung unsur penipuan atau pemalsuan.</li>
            <li>Buat lowongan Anda tampak meyakinkan dengan mencantumkan deskripsi, detail &amp; kualifikasi pelamar yang Anda harapkan secara jelas.</li>
            <li>Berdasarkan <span className="text-brand-primary">Surat Edaran Menteri Ketenagakerjaan Republik Indonesia M/6/HK.04/V/2025</span>, kami menyarankan sebaiknya tidak mencantumkan persyaratan usia.</li>
            <li>Sebaiknya Anda tidak mengenakan biaya/charge pada pelamar. Namun jika ada biaya yang memang diwajibkan, mohon jelaskan detailnya di deskripsi pekerjaan sebagai bentuk transparansi.</li>
          </ol>
        </InfoModal>
      )}
    </div>
  );
}
