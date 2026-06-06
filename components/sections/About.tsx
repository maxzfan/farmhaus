import { founders } from "@/data/founders";
import { TerminalWindow } from "@/components/ui/TerminalWindow";

/**
 * "The House" — a short narrative on what Farmhouse is, plus a credibility stat
 * strip. The founder count is derived from data; the other figures are
 * cohort-derived constants and are meant to be edited as the summer evolves.
 */
const STATS: { value: string; label: string }[] = [
  { value: String(founders.length), label: "Founders" },
  { value: "7", label: "Companies" }, // TODO: keep in sync with the cohort
  { value: "2", label: "US Patents" },
  { value: "3x", label: "TreeHacks wins" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-content scroll-mt-20 px-5 py-24 sm:px-8"
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div>
          <p className="font-mono text-sm text-terminal text-glow">
            <span className="text-fog-dim">$</span> man farmhouse
          </p>
          <h2 className="mt-3 font-display text-3xl text-fog sm:text-4xl">
            The <span className="text-barn text-glow-red">House</span>
          </h2>
          {/* TODO: replace with final copy / voice */}
          <div className="mt-5 space-y-4 font-mono text-sm leading-relaxed text-fog sm:text-base">
            <p>
              Farmhouse is a Stanford hacker house — a red barn in the Valley where
              founders build together over the summer. One roof, seven builders,
              and a shared bet that the best way to ship is side by side.
            </p>
            <p>
              We run on the <span className="text-terminal">Code the Farm</span>{" "}
              ethos: late nights, fast iterations, demo-or-die energy, and a door
              that&apos;s always open to the next interesting problem.
            </p>
          </div>
        </div>

        <TerminalWindow title="farmhouse@stats: ~" prompt="uptime --summer-2026">
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-4xl text-terminal text-glow sm:text-5xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 font-mono text-xs uppercase tracking-wide text-fog-dim sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </TerminalWindow>
      </div>
    </section>
  );
}
