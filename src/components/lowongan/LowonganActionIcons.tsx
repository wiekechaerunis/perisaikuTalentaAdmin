import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { Eye, MoreVertical, Pencil, Copy, Kanban, Link2, RotateCw } from "lucide-react";
import { StatusToast } from "../shared/StatusToast";
import { JobStatus } from "../../mocks/lowongan";
import { PIPELINE_JOBS } from "../../mocks/pipeline";

export function LowonganActionIcons({ status, jobId, jobNama, onCloseJob, onRepostJob }: { status: JobStatus; jobId: string; jobNama: string; onCloseJob: (jobId: string) => void; onRepostJob: (jobId: string) => void }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const goToTahapanRekrutmen = () => {
    const pipelineJob = PIPELINE_JOBS.find((pj) => pj.nama === jobNama);
    navigate(`/pipeline/${pipelineJob ? pipelineJob.id : jobId}`);
  };

  const copyJobLink = async () => {
    const url = `${window.location.origin}/lowongan/${jobId}`;
    try { await navigator.clipboard.writeText(url); }
    catch { const input = document.createElement("textarea"); input.value = url; document.body.appendChild(input); input.select(); document.execCommand("copy"); input.remove(); }
    setOpen(false);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  };

  // Draf: two direct icon buttons, no dropdown
  if (status === "Draf") {
    return (
      <div className="flex gap-1.5 items-center">
        <button
          title="Lihat Detail"
          onClick={() => navigate(`/edit-job/${jobId}`)}
          className="w-7 h-7 rounded-md flex items-center justify-center text-icon-default hover:bg-gray-100 transition-colors"
        >
          <Pencil size={14} />
        </button>
        <button
          title="Duplikasi"
          onClick={() => navigate(`/duplicate-job/${jobId}`)}
          className="w-7 h-7 rounded-md flex items-center justify-center text-icon-default hover:bg-gray-100 transition-colors"
        >
          <Copy size={14} />
        </button>
      </div>
    );
  }

  // Diterbitkan & Tutup: eye + 3-dot dropdown (menu contents differ by status)
  return (
    <div ref={ref} className="flex gap-1.5 items-center">
      <button
        title={status === "Diterbitkan" ? "Lihat Detail Lowongan" : "Lihat Detail"}
        onClick={() => navigate(`/lowongan/${jobId}`)}
        className="w-7 h-7 rounded-md flex items-center justify-center text-icon-default hover:bg-gray-100 transition-colors"
      >
        <Eye size={14} />
      </button>

      <div className="relative">
        <button
          title="More"
          onClick={() => setOpen((v) => !v)}
          className="w-7 h-7 rounded-md flex items-center justify-center text-icon-default hover:bg-gray-100 transition-colors"
        >
          <MoreVertical size={14} />
        </button>

        {open && (
          <div
            className="absolute right-0 top-full mt-1 z-50 bg-white rounded-lg shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-1px_rgba(0,0,0,0.06)] py-1.5 w-[184px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <button
              onClick={() => { setOpen(false); goToTahapanRekrutmen(); }}
              className="flex items-center gap-2.5 w-full px-2 py-1.5 text-[12px] text-text-darker hover:bg-gray-50 rounded-md transition-colors leading-[18px]"
            >
              <Kanban size={14} className="text-icon-default" />
              Lihat Tahapan Rekrutmen
            </button>
            {status === "Diterbitkan" && (
              <button
                onClick={() => { setOpen(false); navigate(`/edit-job/${jobId}`); }}
                className="flex items-center gap-2.5 w-full px-2 py-1.5 text-[12px] text-text-darker hover:bg-gray-50 rounded-md transition-colors leading-[18px]"
              >
                <Pencil size={14} className="text-icon-default" />
                Edit Lowongan
              </button>
            )}
            <button
              onClick={() => { setOpen(false); navigate(`/duplicate-job/${jobId}`); }}
              className="flex items-center gap-2.5 w-full px-2 py-1.5 text-[12px] text-text-darker hover:bg-gray-50 rounded-md transition-colors leading-[18px]"
            >
              <Copy size={14} className="text-icon-default" />
              Duplicate Lowongan
            </button>
            {status === "Diterbitkan" && (
              <button onClick={copyJobLink} className="flex items-center gap-2.5 w-full px-2 py-1.5 text-[12px] text-text-darker hover:bg-gray-50 rounded-md transition-colors leading-[18px]">
                <Link2 size={14} className="text-icon-default" />
                Copy Link
              </button>
            )}
            {status === "Diterbitkan" && (
              <>
                <div className="bg-border-lighter h-px my-1 mx-2" />
                <button
                  onClick={() => { setOpen(false); onCloseJob(jobId); }}
                  className="flex items-center gap-2.5 w-full px-2 py-1.5 text-[12px] text-[#c93f2a] hover:bg-red-50 rounded-md transition-colors leading-[18px]"
                >
                  <span className="w-[14px] shrink-0" />
                  Tutup Lowongan
                </button>
              </>
            )}
            {status === "Tutup" && (
              <button
                onClick={() => { setOpen(false); onRepostJob(jobId); }}
                className="flex items-center gap-2.5 w-full px-2 py-1.5 text-[12px] text-text-darker hover:bg-gray-50 rounded-md transition-colors leading-[18px]"
              >
                <RotateCw size={14} className="text-icon-default" />
                Posting Ulang
              </button>
            )}
          </div>
        )}
      </div>
      {copied && <div className="fixed left-1/2 top-6 z-[150] -translate-x-1/2"><StatusToast variant="success" message="Link lowongan berhasil disalin!" onDismiss={() => setCopied(false)} /></div>}
    </div>
  );
}
