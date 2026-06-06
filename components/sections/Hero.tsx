import { TerminalWindow } from "@/components/ui/TerminalWindow";
import { MatrixBackground } from "@/components/ui/MatrixBackground";

/**
 * Above-the-fold identity moment. A terminal window frames the FARMHOUSE
 * wordmark, tagline, intro, and the two primary CTAs, over a static matrix
 * texture. Echoes the supplied reference screenshot's hero composition.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-16 pt-28 sm:px-8"
    >
      <MatrixBackground />

      <div className="relative z-10 w-full max-w-4xl animate-fade-up">
        <TerminalWindow prompt="./summer-2026 --boot">
          <h1 className="font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl">
            <span className="text-barn text-glow-red">FARM</span>
            <span className="text-fog">HOUSE</span>
          </h1>

          <p className="mt-4 font-mono text-base text-terminal text-glow sm:text-lg">
            Stanford Hacker House · Summer 2026 · Code the Farm
          </p>

          <p className="mt-6 max-w-2xl font-mono text-sm leading-relaxed text-fog sm:text-base">
            A red barn full of founders. We&apos;re a Stanford hacker house where
            seven builders live, ship, and break things together all summer —
            companies, research, patents, and the occasional 36-hour hackathon
            sprint.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#founders"
              className="rounded border border-terminal bg-terminal/15 px-5 py-2.5 text-center font-mono text-sm text-terminal transition-all hover:bg-terminal/25 hover:shadow-glow sm:text-base"
            >
              Meet the Founders
            </a>
            <a
              href="#events"
              className="rounded border border-fog/25 px-5 py-2.5 text-center font-mono text-sm text-fog transition-colors hover:border-barn-bright hover:text-barn-bright sm:text-base"
            >
              Suggest an Event
            </a>
          </div>

          <p className="mt-9 font-mono text-xs text-fog-dim">
            [root@farmhouse ~]# whoami
            <br />
            <span className="text-terminal">
              uid=0(builders) gid=0(stanford) groups=0(founders)
            </span>
            <span className="cursor-blink ml-1 align-middle" aria-hidden="true" />
          </p>
        </TerminalWindow>
      </div>
    </section>
  );
}
