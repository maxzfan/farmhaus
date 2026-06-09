import { founders } from "@/data/founders";
import { Card, CardContent } from "@/components/ui/card";

/**
 * "The House" — a short narrative on what Farmhouse is, plus a credibility stat
 * strip rendered in a warm shadcn Card.
 */
const STATS: { value: string; label: string }[] = [
  { value: String(founders.length), label: "Founders" },
  { value: "8", label: "Companies" }, // TODO: keep in sync with the cohort
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            About the house
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
            The <span className="text-primary">House</span>
          </h2>
          <div className="mt-5 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Farmhouse is a Stanford hacker house — a red barn in the Valley
              where founders build together over the summer. One roof, eight
              builders, and a shared bet that the best way to ship is side by
              side.
            </p>
            <p>
              We run on the{" "}
              <span className="font-medium text-secondary">Code the Farm</span>{" "}
              ethos: late nights, fast iterations, demo-or-die energy, and a
              door that&apos;s always open to the next interesting problem.
            </p>
          </div>
        </div>

        <Card className="shadow-soft">
          <CardContent className="p-8">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-4xl font-semibold text-primary sm:text-5xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-wide text-muted-foreground sm:text-sm">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
