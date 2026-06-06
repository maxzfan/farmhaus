/**
 * Binary/matrix texture layer. Pure CSS (no per-frame JS), so it costs nothing
 * on the main thread and is inherently reduced-motion safe — the texture is
 * static. Render it as an absolutely-positioned sibling behind section content.
 */
export function MatrixBackground({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 matrix-bg opacity-60 ${className}`}
    >
      {/* fade the texture out toward the center so foreground text stays legible */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,_theme(colors.ink)_30%,_transparent_100%)]" />
    </div>
  );
}
