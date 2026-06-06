import { MatrixBackground } from "@/components/ui/MatrixBackground";

/**
 * Above-the-fold identity moment. A two-column layout: the FARMHOUSE wordmark,
 * tagline, intro, and CTAs on the left; a glowing 3D red-and-green farmhouse
 * render floating on the right. Futuristic glassmorphic surfaces replace the
 * old terminal-window framing.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8"
    >
      <MatrixBackground />

      {/* ambient glow orbs for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-terminal/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-10 h-80 w-80 rounded-full bg-barn/10 blur-[120px]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-content grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* left: copy */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-terminal/30 bg-terminal/10 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-terminal backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-terminal shadow-glow-sm" />
            Stanford Hacker House
          </span>

          <h1 className="mt-6 font-display text-6xl leading-[0.92] tracking-tight sm:text-7xl">
            <span className="text-barn text-glow-red">FARM</span>
            <span className="text-fog">HOUSE</span>
          </h1>

          <p className="mt-5 font-mono text-base text-terminal text-glow sm:text-lg">
            Summer 2026 · Code the Farm
          </p>

          <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-fog sm:text-base">
            A red barn full of founders. Seven builders live, ship, and break
            things together all summer — companies, research, patents, and the
            occasional 36-hour hackathon sprint.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#founders"
              className="rounded-xl border border-terminal/60 bg-terminal/15 px-6 py-3 text-center font-mono text-sm text-terminal shadow-glow-sm transition-all hover:bg-terminal/25 hover:shadow-glow sm:text-base"
            >
              Meet the Founders
            </a>
            <a
              href="#events"
              className="rounded-xl border border-fog/25 bg-panel/40 px-6 py-3 text-center font-mono text-sm text-fog backdrop-blur-sm transition-colors hover:border-barn-bright hover:text-barn-bright sm:text-base"
            >
              Suggest an Event
            </a>
          </div>
        </div>

        {/* right: 3D farmhouse */}
        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="relative mx-auto max-w-md">
            {/* glow halo behind the render */}
            <div
              aria-hidden="true"
              className="absolute inset-0 scale-90 rounded-full bg-terminal/15 blur-3xl"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/farmhouse-hero.png"
              alt="A 3D futuristic red and green Farmhouse barn with glowing neon trim"
              className="relative w-full select-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
              draggable={false}
            />
            {/* reflective floor pad */}
            <div
              aria-hidden="true"
              className="mx-auto mt-2 h-px w-3/4 bg-gradient-to-r from-transparent via-terminal/40 to-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
