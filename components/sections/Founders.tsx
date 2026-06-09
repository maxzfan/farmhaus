import { founders } from "@/data/founders";
import { FounderCard } from "@/components/ui/FounderCard";

/**
 * Founders section. Renders one FounderCard per entry in `data/founders.ts`.
 * Cards stack in a single column on small screens and form a 2-column grid
 * (2×4 for the eight founders) once there's room. Each card is a compact,
 * collapsible "Learn more" toggle, so `items-start` keeps an expanded card from
 * stretching its row neighbor.
 */
export function Founders() {
  return (
    <section
      id="founders"
      className="relative mx-auto max-w-content scroll-mt-20 px-5 py-24 sm:px-8"
    >
      <header className="mb-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
          Meet the cohort
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
          The <span className="text-primary">Founders</span>
        </h2>
        <p className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Eight builders shipping companies, research, and patents — under one
          roof this summer.
        </p>
      </header>

      <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
        {founders.map((founder) => (
          <FounderCard key={founder.num} founder={founder} />
        ))}
      </div>
    </section>
  );
}
