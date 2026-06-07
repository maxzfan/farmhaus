import Link from "next/link";
import { Button } from "@/components/ui/button";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#founders", label: "Founders" },
  { href: "#events", label: "Events" },
];

/**
 * Fixed top navigation. Wordmark on the left, section anchors in the center
 * (hidden on small screens), and a persistent contact CTA on the right.
 */
export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-content items-center justify-between px-5 py-3.5 sm:px-8"
      >
        <Link
          href="#home"
          className="font-display text-xl font-semibold tracking-tight text-primary sm:text-2xl"
        >
          Farm<span className="text-foreground">house</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Button asChild variant="secondary" size="sm">
          <a href="mailto:maxfan@stanford.edu?subject=Farmhouse%20Summer%20Event%20Suggestion">
            Contact
          </a>
        </Button>
      </nav>
    </header>
  );
}
