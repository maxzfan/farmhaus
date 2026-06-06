import Link from "next/link";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#founders", label: "Founders" },
  { href: "#events", label: "Events" },
];

/**
 * Fixed top navigation. Wordmark on the left, section anchors in the center
 * (hidden on small screens where the page is a single scroll), and a persistent
 * "Suggest an Event" contact CTA on the right. Keyboard focus uses the global
 * terminal-green focus-visible ring.
 */
export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-terminal/10 bg-ink/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-content items-center justify-between px-5 py-3.5 sm:px-8"
      >
        <Link
          href="#home"
          className="font-display text-lg tracking-tight text-barn text-glow-red sm:text-xl"
        >
          FARM<span className="text-fog">HOUSE</span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-mono text-sm text-fog-dim transition-colors hover:text-terminal hover:text-glow"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="mailto:maxfan@stanford.edu?subject=Farmhouse%20Summer%20Event%20Suggestion"
          className="rounded border border-terminal/50 bg-terminal/10 px-3.5 py-1.5 font-mono text-xs text-terminal transition-all hover:bg-terminal/20 hover:shadow-glow-sm sm:text-sm"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
