/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import type { Founder } from "@/data/founders";
import { Card } from "@/components/ui/card";
import { LogoChip } from "./LogoChip";

/**
 * One founder as a compact, horizontal card: photo on the left, number + name +
 * org logo chips + the one-line "what they're building this summer" on the
 * right. The card is a toggle — clicking it ("Learn more") expands the
 * affiliations and achievement bullets with a smooth height animation. Stacks
 * the photo above the text on mobile.
 */
export function FounderCard({ founder }: { founder: Founder }) {
  const { num, name, role, roleSuffix, meta, bullets, photo, logos } = founder;
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="gap-0 p-0 shadow-soft transition-shadow hover:shadow-soft-lg">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        className="flex w-full items-start gap-4 p-4 text-left sm:gap-5 sm:p-5"
      >
        {/* photo / placeholder */}
        <div className="relative aspect-[4/5] w-20 shrink-0 overflow-hidden rounded-lg border border-border bg-muted sm:w-24">
          {photo ? (
            <img src={photo} alt={name} className="h-full w-full object-cover" />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center bg-accent"
              role="img"
              aria-label={`${name} — photo coming soon`}
            >
              <span className="font-display text-3xl font-semibold text-primary/80">
                {num}
              </span>
            </div>
          )}
        </div>

        {/* header text */}
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2.5">
            <span className="font-display text-lg font-semibold text-primary sm:text-xl">
              {num}
            </span>
            <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
              {name}
            </h3>
          </div>

          {/* logos always sit on their own row directly under the name */}
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            {logos.map((logo) => (
              <LogoChip key={logo.name} name={logo.name} src={logo.src} />
            ))}
          </div>

          <p className="mt-2 text-sm">
            <span className="font-semibold text-secondary">{role}</span>
            {roleSuffix ? (
              <span className="text-muted-foreground">{roleSuffix}</span>
            ) : null}
          </p>

          <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            {expanded ? "Show less" : "Learn more"}
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className={`h-3.5 w-3.5 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m4 6 4 4 4-4" />
            </svg>
          </span>
        </div>
      </button>

      {/* expanded detail — animates open via grid-template-rows 0fr -> 1fr */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border px-4 pb-5 pt-4 sm:px-5">
            <div className="flex flex-col gap-0.5">
              {meta.map((line) => (
                <p
                  key={line}
                  className="text-xs text-muted-foreground sm:text-sm"
                >
                  {line}
                </p>
              ))}
            </div>

            <ul className="mt-4 flex flex-col gap-1.5">
              {bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-2.5 text-xs leading-relaxed text-foreground/90 sm:text-sm"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-[2px] bg-secondary"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
}
