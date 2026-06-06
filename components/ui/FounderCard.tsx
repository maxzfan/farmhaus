/* eslint-disable @next/next/no-img-element */
import type { Founder } from "@/data/founders";
import { Card } from "@/components/ui/card";
import { LogoChip } from "./LogoChip";

/**
 * One founder: a photo (or numeral placeholder) on the left, the big brand-red
 * number, name, role, affiliations, achievement bullets, and a row of org logo
 * chips. Stacks to a single column on mobile. Rendered inside a warm shadcn Card.
 */
export function FounderCard({ founder }: { founder: Founder }) {
  const { num, name, role, roleSuffix, meta, bullets, photo, logos } = founder;

  return (
    <Card className="grid grid-cols-1 gap-6 p-5 shadow-soft transition-shadow hover:shadow-soft-lg sm:p-7 md:grid-cols-[200px_1fr] md:gap-8">
      {/* photo / placeholder */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-border bg-muted md:h-full">
        {photo ? (
          <img src={photo} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-accent"
            role="img"
            aria-label={`${name} — photo coming soon`}
          >
            <span className="font-display text-6xl font-semibold text-primary/80">
              {num}
            </span>
          </div>
        )}
      </div>

      {/* text */}
      <div className="min-w-0">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-2xl font-semibold text-primary sm:text-3xl">
            {num}
          </span>
          <h3 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
            {name}
          </h3>
        </div>

        <p className="mt-3 text-sm sm:text-base">
          <span className="font-semibold text-secondary">{role}</span>
          {roleSuffix ? (
            <span className="text-muted-foreground">{roleSuffix}</span>
          ) : null}
        </p>

        <div className="mt-2 flex flex-col gap-0.5">
          {meta.map((line) => (
            <p key={line} className="text-xs text-muted-foreground sm:text-sm">
              {line}
            </p>
          ))}
        </div>

        <ul className="mt-4 flex flex-col gap-1.5">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-2 text-xs leading-relaxed text-foreground/90 sm:text-sm"
            >
              <span aria-hidden="true" className="select-none text-secondary">
                ▹
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {logos.map((logo) => (
            <LogoChip key={logo.name} name={logo.name} src={logo.src} />
          ))}
        </div>
      </div>
    </Card>
  );
}
