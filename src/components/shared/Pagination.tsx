import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

function getPageNumbers(current: number, total: number): (number | "...")[] {
  const delta = 1;
  const rangeStart = Math.max(2, current - delta);
  const rangeEnd = Math.min(total - 1, current + delta);

  const pages: (number | "...")[] = [1];
  if (rangeStart > 2) pages.push("...");
  for (let i = rangeStart; i <= rangeEnd; i++) pages.push(i);
  if (rangeEnd < total - 1) pages.push("...");
  if (total > 1) pages.push(total);

  return pages;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const pages = getPageNumbers(currentPage, totalPages);

  return (
    <div className="flex items-center gap-6">
      <div className="flex gap-2">
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          aria-label="Halaman pertama"
          className="size-8 rounded-full border border-border-lighter flex items-center justify-center hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-not-allowed"
        >
          <ChevronsLeft size={14} className="text-icon-default" />
        </button>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Halaman sebelumnya"
          className="size-8 rounded-full border border-border-lighter flex items-center justify-center hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-not-allowed"
        >
          <ChevronLeft size={14} className="text-icon-default" />
        </button>
      </div>
      <div className="flex gap-2">
        {pages.map((p, i) =>
          p === "..." ? (
            <span key={`ellipsis-${i}`} className="size-8 flex items-center justify-center text-sm text-text-muted" style={{ fontFamily: "var(--font-body)" }}>
              …
            </span>
          ) : (
            <button
              key={p}
              onClick={() => onPageChange(p)}
              aria-current={p === currentPage ? "page" : undefined}
              className={`size-8 rounded-md flex items-center justify-center text-sm font-semibold transition-colors ${p === currentPage ? "bg-brand-primary text-white" : "border border-border-lighter text-text-default hover:bg-gray-50"}`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              {p}
            </button>
          )
        )}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Halaman berikutnya"
          className="size-8 rounded-full border border-border-lighter flex items-center justify-center hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-not-allowed"
        >
          <ChevronRight size={14} className="text-icon-default" />
        </button>
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          aria-label="Halaman terakhir"
          className="size-8 rounded-full border border-border-lighter flex items-center justify-center hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-transparent disabled:cursor-not-allowed"
        >
          <ChevronsRight size={14} className="text-icon-default" />
        </button>
      </div>
    </div>
  );
}

export function PaginationFooter({
  currentPage,
  totalPages,
  pageSize,
  totalItems,
  itemLabel,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  itemLabel: string;
  onPageChange: (page: number) => void;
}) {
  const start = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalItems);

  return (
    <div className="flex items-center justify-between p-6">
      <p className="text-text-muted text-sm" style={{ fontFamily: "var(--font-body)" }}>
        {totalItems === 0 ? `Tidak ada ${itemLabel}` : `Menampilkan ${start}-${end} dari ${totalItems} ${itemLabel}`}
      </p>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
}
