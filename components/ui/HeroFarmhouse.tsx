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
    <div className="relative h-[42vh] w-full lg:h-[68vh]">
      {/* warm glow halo behind the scene */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 mx-auto my-auto h-2/3 w-2/3 rounded-full bg-primary/10 blur-3xl"
      />
      <Farmhouse3D />
    </div>
  );
}
