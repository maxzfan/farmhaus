import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroFarmhouse } from "@/components/ui/HeroFarmhouse";

/**
 * Above-the-fold identity moment. Poster layout: an oversized two-line wordmark
 * anchored top-left, with the tagline, intro, and CTAs to the right. A warm
 * red→green gradient bloom washes the dark background, and the real Three.js
 * barn rises full-bleed and cropped from the bottom-center of the screen.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      {/* top copy */}
      <div className="relative z-10 mx-auto w-full max-w-content px-5 pt-36 sm:px-8 sm:pt-44">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.5fr_0.85fr] lg:items-start lg:gap-12">
          {/* oversized stacked wordmark */}
          <div className="animate-fade-up">
            <h1 className="font-display text-7xl font-semibold leading-[0.92] tracking-tighter sm:text-8xl lg:text-9xl">
              <span className="text-metallic-red">Farm</span><span className="text-metallic-silver">house</span>
            </h1>
            <p className="mt-4 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground sm:text-base">
              Stanford&apos;s Hacker House for the Bay Area Ecosystem
            </p>
          </div>

          {/* tagline, intro, CTAs */}
          <div className="animate-fade-up max-w-md lg:pt-4 [animation-delay:120ms]">
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A red barn full of founders. Eight builders live, ship, and break
              things together all summer — companies, research, patents, and the
              occasional 36-hour hackathon sprint.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button asChild size="lg">
                <Link href="#founders">Meet the Founders</Link>
              </Button>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">
                  Got an idea?
                </span>
                <Link
                  href="#events"
                  className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
                >
                  Suggest an Event
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* barn rising from the bottom of the screen, full-bleed and cropped */}
      <div className="relative z-0 mt-auto h-[42vh] w-full sm:h-[48vh]">
        <HeroFarmhouse />
      </div>
    </section>
  );
}
