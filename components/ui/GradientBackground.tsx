/**
 * Page-spanning red→green gradient wash that runs the full height of the site.
 * Alternating barn-red and farm-green blooms are distributed down the document
 * so the color theme flows continuously behind every section. Rendered behind
 * all content (-z-10); sections are transparent, so it shows through.
 */
export function GradientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* hero — red left, green right */}
      <div className="animate-float absolute -left-[15vw] -top-[10vh] h-[70vh] w-[70vw] rounded-full bg-primary/30 blur-[150px]" />
      <div className="animate-float absolute -right-[18vw] top-[12%] h-[62vh] w-[62vw] rounded-full bg-secondary/28 blur-[150px] [animation-delay:1.5s]" />
      {/* mid — red */}
      <div className="animate-float absolute -left-[20vw] top-[42%] h-[58vh] w-[58vw] rounded-full bg-primary/22 blur-[150px] [animation-delay:1s]" />
      {/* lower — green */}
      <div className="animate-float absolute -right-[15vw] top-[68%] h-[55vh] w-[58vw] rounded-full bg-secondary/24 blur-[150px] [animation-delay:2s]" />
      {/* bottom — red */}
      <div className="animate-float absolute left-[8vw] top-[90%] h-[45vh] w-[55vw] rounded-full bg-primary/20 blur-[150px] [animation-delay:0.5s]" />
      {/* subtle vertical darkening so text stays readable across the page */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background/30" />
    </div>
  );
}
