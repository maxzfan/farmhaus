import { founders } from "@/data/founders";
import { FounderCard } from "@/components/ui/FounderCard";

/**
 * Founders section. Renders one FounderCard per entry in `data/founders.ts`.
 * Cards stack in a single column — they're wide (photo + text), so a single
 * column reads cleanly and sidesteps the orphaned-card problem of a 7-item grid.
 */
export function Founders() {
  return (
    <section
      id="founders"
      className="relative mx-auto max-w-content scroll-mt-20 px-5 py-24 sm:px-8"
    >
      <header className="mb-12">
        <p className="font-mono text-sm text-terminal text-glow">
          <span className="text-fog-dim">$</span> cat founders/*.json
        </p>
        <h2 className="mt-3 font-display text-3xl text-fog sm:text-4xl">
          The <span className="text-barn text-glow-red">Founders</span>
        </h2>
        <p className="mt-3 max-w-2xl font-mono text-sm text-fog-dim sm:text-base">
          Seven builders shipping companies, research, and patents — under one roof
          this summer.
        </p>
      </header>

      <div className="flex flex-col gap-6">
        {founders.map((founder) => (
          <FounderCard key={founder.num} founder={founder} />
        ))}
      </div>
    </section>
  );
}
