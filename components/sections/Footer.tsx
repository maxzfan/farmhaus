import Link from "next/link";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#founders", label: "Founders" },
  { href: "#events", label: "Events" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-terminal/15 bg-panel/40">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link
            href="#home"
            className="font-display text-xl tracking-tight text-barn text-glow-red"
          >
            FARM<span className="text-fog">HOUSE</span>
          </Link>
          <p className="mt-2 font-mono text-xs text-fog-dim">
            Stanford Hacker House · Summer 2026 ·{" "}
            <span className="text-terminal">Code the Farm</span>
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-fog-dim transition-colors hover:text-terminal"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:maxfan@stanford.edu?subject=Farmhouse"
            className="font-mono text-sm text-fog-dim transition-colors hover:text-terminal"
          >
            Contact
          </a>
        </nav>
      </div>

      <div className="border-t border-terminal/10 px-5 py-4 sm:px-8">
        <p className="mx-auto max-w-content font-mono text-xs text-fog-dim">
          <span className="text-terminal">$</span> echo &quot;built with too much
          coffee&quot; — © {new Date().getFullYear()} Farmhouse
        </p>
      </div>
    </footer>
  );
}
