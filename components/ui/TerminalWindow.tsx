import type { ReactNode } from "react";

type TerminalWindowProps = {
  /** Optional monospace prompt shown in the title bar, e.g. "founder@farmhouse: ~" */
  title?: string;
  /** Optional command echoed under the title bar, e.g. "./summer-2026" */
  prompt?: string;
  children: ReactNode;
  className?: string;
};

/**
 * Reusable terminal-chrome frame: traffic-light dots, a monospace title, and an
 * optional prompt line. Mirrors the hero treatment from the reference screenshot.
 * Purely presentational — content goes in `children`.
 */
export function TerminalWindow({
  title = "founder@farmhouse: ~",
  prompt,
  children,
  className = "",
}: TerminalWindowProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-terminal/25 bg-panel/80 shadow-glow-sm backdrop-blur-sm scanlines ${className}`}
    >
      {/* title bar */}
      <div className="flex items-center gap-3 border-b border-terminal/15 bg-panel-light/70 px-4 py-2.5">
        <span className="flex gap-2" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-barn" />
          <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <span className="h-3 w-3 rounded-full bg-terminal" />
        </span>
        <span className="truncate font-mono text-xs text-fog-dim">{title}</span>
      </div>

      {/* body */}
      <div className="px-6 py-7 sm:px-9 sm:py-9">
        {prompt ? (
          <p className="mb-5 font-mono text-sm text-terminal text-glow sm:text-base">
            <span className="text-fog-dim">$</span> {prompt}
          </p>
        ) : null}
        {children}
      </div>
    </div>
  );
}
