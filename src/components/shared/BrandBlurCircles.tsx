export function BrandBlurCircles() {
  return (
    <>
      <div className="absolute rounded-full pointer-events-none" style={{ width: 292, height: 292, left: 147, top: -125, background: "rgba(255,255,255,0.08)", filter: "blur(40px)" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ width: 292, height: 292, left: -110, bottom: -140, background: "rgba(255,255,255,0.08)", filter: "blur(40px)" }} />
    </>
  );
}
