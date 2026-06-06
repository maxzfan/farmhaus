import { TerminalWindow } from "@/components/ui/TerminalWindow";

const SUGGEST_MAILTO =
  "mailto:maxfan@stanford.edu?subject=Farmhouse%20Summer%20Event%20Suggestion&body=Here's%20an%20event%20Farmhouse%20should%20run%20this%20summer%3A%0A%0A";

/**
 * Events section, intentionally empty for now. Instead of placeholder event
 * cards, it presents a styled terminal "coming soon" state and a prominent
 * mailto CTA so visitors can suggest programming. The blinking cursor freezes
 * under prefers-reduced-motion (see globals.css .cursor-blink).
 */
export function Events() {
  return (
    <section
      id="events"
      className="relative mx-auto max-w-content scroll-mt-20 px-5 py-24 sm:px-8"
    >
      <header className="mb-10">
        <p className="font-mono text-sm text-terminal text-glow">
          <span className="text-fog-dim">$</span> ls events/summer-2026/
        </p>
        <h2 className="mt-3 font-display text-3xl text-fog sm:text-4xl">
          Summer <span className="text-barn text-glow-red">Events</span>
        </h2>
      </header>

      <TerminalWindow title="farmhouse@events: ~/summer-2026">
        <div className="font-mono text-sm leading-relaxed sm:text-base">
          <p className="text-fog-dim">
            <span className="text-terminal">$</span> fetch --schedule summer-2026
          </p>
          <p className="mt-2 text-fog">
            <span className="text-barn-bright"># status:</span> compiling the lineup…
          </p>
          <p className="mt-1 text-fog-dim">
            Demo nights, build sprints, founder dinners, and speaker sessions are
            in the works.
          </p>
          <p className="mt-4 text-terminal text-glow">
            &gt; schedule loading
            <span className="cursor-blink ml-1 align-middle" aria-hidden="true" />
          </p>
        </div>

        <div className="mt-8 border-t border-terminal/15 pt-6">
          <p className="font-mono text-sm text-fog-dim">
            Got an idea for what we should run? We&apos;re taking suggestions.
          </p>
          <a
            href={SUGGEST_MAILTO}
            className="mt-4 inline-flex items-center gap-2 rounded border border-terminal bg-terminal/15 px-5 py-2.5 font-mono text-sm text-terminal transition-all hover:bg-terminal/25 hover:shadow-glow sm:text-base"
          >
            <span aria-hidden="true">✉</span> Suggest an Event
          </a>
        </div>
      </TerminalWindow>
    </section>
  );
}
