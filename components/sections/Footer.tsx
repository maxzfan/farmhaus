import Link from "next/link";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#founders", label: "Founders" },
  { href: "#events", label: "Events" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background/30 backdrop-blur-md">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link
            href="#home"
            className="font-display text-xl font-semibold tracking-tight"
          >
            <span className="text-metallic-red">Farm</span><span className="text-metallic-silver">house</span>
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">
            Stanford Hacker House · Summer 2026 ·{" "}
            <span className="text-secondary">Code the Farm</span>
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:maxfan@stanford.edu?subject=Farmhouse"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Contact
          </a>
        </nav>
      </div>

      <div className="border-t border-border/60 px-5 py-4 sm:px-8">
        <p className="mx-auto max-w-content text-xs text-muted-foreground">
          Built with too much coffee — © {new Date().getFullYear()} Farmhouse
        </p>
      </div>
    </footer>
  );
}
