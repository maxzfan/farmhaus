import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroFarmhouse } from "@/components/ui/HeroFarmhouse";

/**
 * Above-the-fold identity moment. Two-column layout: wordmark, tagline, intro,
 * and CTAs on the left; a real Three.js red-and-green barn on the right. The
 * barn is angled toward the left and slides rightward into place on mount
 * (right after the visitor enters through the gate).
 */
export function Hero() {
  return (
    <section
      id="home"
      className="paper-bg relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8"
    >
      {/* soft warm wash behind everything */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent/40 via-transparent to-transparent"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-content grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        {/* left: copy */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-secondary">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            Stanford Hacker House
          </span>

          <h1 className="mt-6 font-display text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl">
            <span className="text-primary">Farm</span>
            <span className="text-foreground">house</span>
          </h1>

          <p className="mt-4 font-display text-xl italic text-secondary sm:text-2xl">
            Summer 2026 · Code the Farm
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A red barn full of founders. Seven builders live, ship, and break
            things together all summer — companies, research, patents, and the
            occasional 36-hour hackathon sprint.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#founders">Meet the Founders</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#events">Suggest an Event</Link>
            </Button>
          </div>
        </div>

        {/* right: real-time 3D farmhouse */}
        <div className="relative animate-fade-up [animation-delay:120ms]">
          <HeroFarmhouse />
        </div>
      </div>
    </section>
  );
}
