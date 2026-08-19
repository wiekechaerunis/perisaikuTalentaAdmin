import React, { useState, useRef } from "react";
import { X } from "lucide-react";

export function AvatarCropModal({ src, onCancel, onSave }: { src: string; onCancel: () => void; onSave: (dataUrl: string) => void }) {
  const BOX = 280;
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [naturalSize, setNaturalSize] = useState<{ w: number; h: number } | null>(null);
  const dragRef = useRef<{ startX: number; startY: number; origX: number; origY: number } | null>(null);

  const baseScale = naturalSize ? Math.max(BOX / naturalSize.w, BOX / naturalSize.h) : 1;
  const clamp = (val: number, max: number) => Math.max(-max, Math.min(max, val));

  const boundsFor = (z: number) => {
    const w = naturalSize ? naturalSize.w * baseScale * z : BOX;
    const h = naturalSize ? naturalSize.h * baseScale * z : BOX;
    return { maxX: Math.max(0, (w - BOX) / 2), maxY: Math.max(0, (h - BOX) / 2) };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    dragRef.current = { startX: e.clientX, startY: e.clientY, origX: offset.x, origY: offset.y };
  };
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return;
    const { maxX, maxY } = boundsFor(zoom);
    setOffset({
      x: clamp(dragRef.current.origX + (e.clientX - dragRef.current.startX), maxX),
      y: clamp(dragRef.current.origY + (e.clientY - dragRef.current.startY), maxY),
    });
  };
  const handlePointerUp = () => { dragRef.current = null; };

  const applyZoom = (z: number) => {
    const { maxX, maxY } = boundsFor(z);
    setOffset(o => ({ x: clamp(o.x, maxX), y: clamp(o.y, maxY) }));
  };

  const handleZoomChange = (next: number) => {
    const z = Math.max(1, Math.min(3, next));
    setZoom(z);
    applyZoom(z);
  };

  const stepZoom = (delta: number) => {
    setZoom(prev => {
      const z = Math.max(1, Math.min(3, prev + delta));
      applyZoom(z);
      return z;
    });
  };

  const handleSave = () => {
    const img = new Image();
    img.onload = () => {
      const scale = Math.max(BOX / img.naturalWidth, BOX / img.naturalHeight) * zoom;
      const w = img.naturalWidth * scale;
      const h = img.naturalHeight * scale;
      const canvas = document.createElement("canvas");
      canvas.width = BOX; canvas.height = BOX;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, (BOX - w) / 2 + offset.x, (BOX - h) / 2 + offset.y, w, h);
      onSave(canvas.toDataURL("image/png"));
    };
    img.src = src;
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[60] p-6" onClick={onCancel}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[360px] p-5 flex flex-col gap-4" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <p className="text-[16px] font-bold text-text-default" style={{ fontFamily: "var(--font-body)" }}>Atur Gambar</p>
          <button onClick={onCancel} className="size-7 rounded-full border border-border-lighter flex items-center justify-center text-text-muted hover:bg-gray-50 transition-colors shrink-0">
            <X size={14} />
          </button>
        </div>

        <div
          className="relative overflow-hidden rounded-xl bg-[#f1f5f9] mx-auto touch-none select-none cursor-grab active:cursor-grabbing"
          style={{ width: BOX, height: BOX }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          <img
            src={src}
            alt=""
            draggable={false}
            onLoad={e => setNaturalSize({ w: e.currentTarget.naturalWidth, h: e.currentTarget.naturalHeight })}
            className="absolute top-1/2 left-1/2 max-w-none pointer-events-none"
            style={{
              width: naturalSize ? naturalSize.w * baseScale : BOX,
              height: naturalSize ? naturalSize.h * baseScale : BOX,
              transform: `translate(-50%, -50%) translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
            }}
          />
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "33.33% 33.33%",
          }} />
        </div>

        <div className="flex items-center gap-3">
          <button onClick={() => stepZoom(-0.1)} className="text-icon-default text-lg leading-none w-5 shrink-0">−</button>
          <input
            type="range" min={1} max={3} step={0.01} value={zoom}
            onChange={e => handleZoomChange(parseFloat(e.target.value))}
            className="flex-1 accent-[#ff6b35]"
          />
          <button onClick={() => stepZoom(0.1)} className="text-icon-default text-lg leading-none w-5 shrink-0">+</button>
        </div>

        <div className="flex items-center justify-end gap-3 pt-1">
          <button onClick={onCancel} className="h-9 px-4 rounded-full border border-border-default text-text-default font-bold text-[13px] hover:bg-gray-50 transition-colors" style={{ fontFamily: "var(--font-body)" }}>Batal</button>
          <button onClick={handleSave} className="h-9 px-5 rounded-full bg-brand-primary text-white font-bold text-[13px] hover:bg-brand-primary-hover transition-colors" style={{ fontFamily: "var(--font-body)" }}>Simpan</button>
        </div>
      </div>
    </div>
  );
}
