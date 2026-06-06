"use client";

import { useEffect, useState } from "react";

/**
 * Full-screen entrance gate. Locks page scroll until the visitor clicks the
 * farmhouse gate ("click to enter"), then fades away and restores scrolling.
 * A bouncing arrow points down at the gate to signal the interaction.
 */
export function GateOverlay() {
  const [entering, setEntering] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Lock scroll while the gate is on screen.
  useEffect(() => {
    if (hidden) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = original;
    };
  }, [hidden]);

  function enter() {
    if (entering) return;
    setEntering(true);
    // match the CSS transition duration before fully unmounting
    window.setTimeout(() => setHidden(true), 900);
  }

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-ink transition-opacity duration-700 ${
        entering ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Enter Farmhouse"
    >
      {/* ambient depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_60%,_rgba(57,255,20,0.12),_transparent_70%)]"
      />

      <button
        type="button"
        onClick={enter}
        aria-label="Click to enter the Farmhouse"
        className="group relative flex flex-col items-center"
      >
        {/* bouncing arrow + prompt */}
        <span className="mb-6 flex flex-col items-center gap-2">
          <span className="font-display text-lg uppercase tracking-[0.3em] text-terminal text-glow sm:text-xl">
            Click to enter
          </span>
          <svg
            className="h-9 w-9 animate-bounce text-terminal drop-shadow-[0_0_10px_rgba(57,255,20,0.7)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 4v14" />
            <path d="m6 12 6 6 6-6" />
          </svg>
        </span>

        {/* the gate */}
        <span className="relative block w-[min(72vw,min(56vh,460px))] overflow-hidden rounded-2xl ring-1 ring-terminal/30 shadow-[0_0_60px_-12px_rgba(57,255,20,0.45)] transition-transform duration-500 group-hover:scale-[1.03]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/farmhouse-gate.png"
            alt="Futuristic red and green Farmhouse gate"
            className="block h-auto w-full select-none"
            draggable={false}
          />
          {/* hover sheen */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-terminal/0 transition-colors duration-300 group-hover:bg-terminal/10"
          />
        </span>

        <span className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-fog-dim">
          Farmhouse · Summer 2026
        </span>
      </button>
    </div>
  );
}
