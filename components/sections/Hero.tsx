import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * Above-the-fold identity moment. Two-column layout: wordmark, tagline, intro,
 * and CTAs on the left; a cozy 3D red-and-green farmhouse render on the right.
 * The farmhouse is height-constrained (max-h via clamp) so the whole house
 * always fits within the hero viewport, and gently floats.
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

        {/* right: farmhouse render */}
        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="relative mx-auto flex items-center justify-center">
            {/* warm glow halo behind the render */}
            <div
              aria-hidden="true"
              className="absolute inset-0 mx-auto my-auto h-2/3 w-2/3 rounded-full bg-primary/10 blur-3xl"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/farmhouse-hero.png"
              alt="A cozy red barn farmhouse with a green roof on a grassy patch"
              className="animate-float relative h-auto max-h-[46vh] w-auto max-w-full select-none object-contain drop-shadow-[0_24px_40px_rgba(58,48,38,0.28)] lg:max-h-[60vh]"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
