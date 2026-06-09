import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SUGGEST_MAILTO =
  "mailto:maxfan@stanford.edu?subject=Farmhouse%20Summer%20Event%20Suggestion&body=Here's%20an%20event%20Farmhouse%20should%20run%20this%20summer%3A%0A%0A";

const EVENTS = [
  {
    date: "JUN 12",
    day: "FRI",
    title: "Move-In Day",
    description: "The house opens for the summer and residents settle in.",
  },
  {
    date: "JUN 19",
    day: "FRI",
    title: "House Warming",
    description: "A kickoff dinner for the house and its earliest supporters.",
  },
  {
    date: "JUN 26",
    day: "FRI",
    title: "Founder Mixer",
    description:
      "Our first open mixer for the wider SF early-stage scene. Drinks, no agenda, new faces.",
  },
  {
    date: "JUL 3–4",
    day: "WKND",
    title: "Rooftop BBQ",
    description: "A relaxed holiday-weekend cookout, residents and friends.",
  },
  {
    date: "JUL 10",
    day: "FRI",
    title: "Poker Night I",
    description:
      "The first poker night of the summer. Founders, builders, and a few investors around the table, low-pressure and social.",
  },
  {
    date: "JUL 17",
    day: "FRI",
    title: "FarmHouse Hackathon",
    description:
      "Application-based and promoted across the BASES, ASES, and TreeHacks lists, bringing 50 of the top builders in SF together.",
    flagship: true,
  },
  {
    date: "JUL 24",
    day: "FRI",
    title: "Investor Dinner",
    description:
      "A curated, application-based dinner connecting top builders from the BASES, ASES, and TreeHacks networks with investors.",
  },
  {
    date: "JUL 25",
    day: "SAT",
    title: "YC Startup School Afterparty I",
    description:
      "A packed mixer for friends and founders passing through SF from across the country.",
  },
  {
    date: "JUL 26",
    day: "SUN",
    title: "YC Startup School Afterparty II",
    description:
      "A calmer session for a smaller, focused group of active builders.",
  },
  {
    date: "JUL 31",
    day: "FRI",
    title: "Fireside Chat",
    description:
      "A notable founder or operator speaks, open to a wider RSVP list.",
  },
  {
    date: "AUG 7",
    day: "FRI",
    title: "Poker Night II",
    description:
      "The poker table returns with a bigger field and more investors in the mix.",
  },
  {
    date: "AUG 14",
    day: "FRI",
    title: "Open House Work Day",
    description:
      "The office space opens to drop-in builders for the day, with investor office hours running alongside.",
  },
] as const;

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

      <div className="mb-8 flex items-center gap-2">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-secondary" />
        <p className="text-sm font-medium uppercase tracking-wide text-secondary">
          Compiling the lineup
        </p>
        <span className="rounded border border-border px-1.5 py-0.5 font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Tentative
        </span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {EVENTS.map(({ date, day, title, description, flagship }) => (
          <div
            key={`${date}-${title}`}
            className="flex gap-4 rounded-lg border border-border bg-card p-4"
          >
            <div className="w-14 shrink-0 text-right">
              <p className="font-mono text-xs font-bold uppercase leading-tight tracking-wider text-primary">
                {date}
              </p>
              <p className="font-mono text-xs text-muted-foreground">{day}</p>
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-semibold text-foreground">{title}</p>
                {flagship && (
                  <span className="rounded bg-primary/10 px-1.5 py-0.5 font-mono text-xs font-semibold uppercase tracking-wider text-primary">
                    Flagship
                  </span>
                )}
              </div>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Card className="mt-8 overflow-hidden shadow-soft">
        <CardContent className="p-8">
          <p className="text-sm text-muted-foreground">
            Got an idea for what we should run? We&apos;re taking suggestions.
          </p>
          <Button asChild className="mt-4">
            <a href={SUGGEST_MAILTO}>Suggest an Event</a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
