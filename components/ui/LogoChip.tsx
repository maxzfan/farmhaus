/* eslint-disable @next/next/no-img-element */

type LogoChipProps = {
  /** Organization / company name (always required — used as alt text and text fallback) */
  name: string;
  /** Optional logo image path under /public. When absent, a styled text chip renders. */
  src?: string;
};

/**
 * A small pill representing an org/company affiliation.
 *
 * When a clean logo asset exists, pass `src` and it renders as an image with the
 * org name as alt text. When no asset is available (the common case for the
 * early-stage startups in this cohort), it degrades to a styled monospace text
 * chip — keeping the hacker aesthetic instead of showing a broken image.
 * Chip height is fixed so mixed logo/text chips align in a row.
 */
export function LogoChip({ name, src }: LogoChipProps) {
  return (
    <span className="inline-flex h-8 items-center rounded-md border border-border bg-muted px-2.5">
      {src ? (
        <img src={src} alt={name} className="h-4 w-auto object-contain" />
      ) : (
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {name}
        </span>
      )}
    </span>
  );
}
