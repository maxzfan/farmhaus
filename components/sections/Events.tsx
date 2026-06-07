import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SUGGEST_MAILTO =
  "mailto:maxfan@stanford.edu?subject=Farmhouse%20Summer%20Event%20Suggestion&body=Here's%20an%20event%20Farmhouse%20should%20run%20this%20summer%3A%0A%0A";

/**
 * Events section, intentionally empty for now. Instead of placeholder event
 * cards, it presents a warm "coming soon" Card and a prominent mailto CTA so
 * visitors can suggest programming.
 */
export function Events() {
  return (
    <section
      id="events"
      className="relative mx-auto max-w-content scroll-mt-20 px-5 py-24 sm:px-8"
    >
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
          On the calendar
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
          Summer <span className="text-primary">Events</span>
        </h2>
      </header>

      <Card className="overflow-hidden shadow-soft">
        <CardContent className="p-8">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-secondary" />
            <p className="text-sm font-medium uppercase tracking-wide text-secondary">
              Compiling the lineup
            </p>
          </div>
          <p className="mt-4 text-base leading-relaxed text-foreground sm:text-lg">
            Demo nights, build sprints, founder dinners, and speaker sessions
            are in the works for Summer 2026.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Check back soon — the schedule is on its way.
          </p>

          <div className="mt-8 border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">
              Got an idea for what we should run? We&apos;re taking suggestions.
            </p>
            <Button asChild className="mt-4">
              <a href={SUGGEST_MAILTO}>Suggest an Event</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
