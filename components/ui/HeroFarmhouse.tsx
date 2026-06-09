"use client";

import dynamic from "next/dynamic";

/**
 * Client-only wrapper so the Three.js canvas is never server-rendered.
 * Shows a soft warm placeholder while the 3D scene loads.
 */
const Farmhouse3D = dynamic(
  () => import("@/components/ui/Farmhouse3D").then((m) => m.Farmhouse3D),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-1/2 w-1/2 animate-pulse rounded-full bg-primary/10 blur-2xl" />
      </div>
    ),
  },
);

export function HeroFarmhouse() {
  return (
    // Full-bleed and anchored to the bottom of the hero. The extra height +
    // negative bottom offset push the barn's base below the fold so it reads as
    // rising, cropped, out of the bottom edge of the screen.
    <div className="pointer-events-none absolute inset-x-0 -bottom-[12vh] h-[62vh]">
      <Farmhouse3D />
    </div>
  );
}
