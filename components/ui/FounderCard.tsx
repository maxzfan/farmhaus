/* eslint-disable @next/next/no-img-element */
import type { Founder } from "@/data/founders";
import { LogoChip } from "./LogoChip";

/**
 * One founder, mirroring the cohort deck: a photo (or numeral placeholder) on the
 * left, the big brand-red number, name, role, affiliations, achievement bullets,
 * and a row of org logo chips. Stacks to a single column on mobile.
 *
 * Brand red (#C8102E) is used only for the large numeral and name accent (large
 * text clears WCAG AA 3:1); the body-size role line uses `barn-bright` which
 * clears 4.5:1 on ink.
 */
export function FounderCard({ founder }: { founder: Founder }) {
  const { num, name, role, roleSuffix, meta, bullets, photo, logos } = founder;

  return (
    <article className="grid grid-cols-1 gap-6 rounded-lg border border-terminal/15 bg-panel/60 p-5 transition-colors hover:border-terminal/35 sm:p-7 md:grid-cols-[200px_1fr] md:gap-8">
      {/* photo / placeholder */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md border border-terminal/15 bg-panel-light md:h-full">
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            role="img"
            aria-label={`${name} — photo coming soon`}
          >
            <span className="font-display text-6xl text-barn/80 text-glow-red">
              {num}
            </span>
          </div>
        )}
      </div>

      {/* text */}
      <div className="min-w-0">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-2xl text-barn text-glow-red sm:text-3xl">
            {num}
          </span>
          <h3 className="font-display text-xl text-fog sm:text-2xl">{name}</h3>
        </div>

        <p className="mt-3 font-mono text-sm sm:text-base">
          <span className="font-semibold text-barn-bright">{role}</span>
          {roleSuffix ? <span className="text-fog-dim">{roleSuffix}</span> : null}
        </p>

        <div className="mt-2 space-y-0.5">
          {meta.map((line) => (
            <p key={line} className="font-mono text-xs text-fog-dim sm:text-sm">
              {line}
            </p>
          ))}
        </div>

        <ul className="mt-4 space-y-1.5">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-2 font-mono text-xs leading-relaxed text-fog sm:text-sm"
            >
              <span aria-hidden="true" className="select-none text-terminal">
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
    </article>
  );
}
