import { Check, Code2, Compass, PenTool, Rocket, ShieldCheck, Video } from "lucide-react";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { process } from "@/lib/site";
import { cn } from "@/lib/utils";

const card = "relative min-w-0 overflow-clip rounded-[28px] border border-line p-6 min-[400px]:p-7 sm:p-8";

export default function Highlights() {
  return (
    <section className="container-x section-y">
      <div className="mb-10 flex flex-col gap-4">
        <Eyebrow>At a glance</Eyebrow>
        <h2 className="max-w-2xl text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl">
          What working with us looks like
        </h2>
      </div>

      <div className="mobile-carousel gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        <TimelineCard />
        <OwnershipCard />
        <TeamCard />
        <DemoCard />
      </div>
    </section>
  );
}

function Stat({ value, unit, tone = "light" }) {
  return (
    <p className={cn("flex items-baseline gap-2 font-bold tracking-tight", tone === "dark" ? "text-white" : "text-foreground")}>
      <span className="text-6xl leading-none min-[400px]:text-7xl sm:text-8xl lg:text-7xl">{value}</span>
      {unit && <span className="text-2xl text-primary sm:text-3xl">{unit}</span>}
    </p>
  );
}

/* 30 days: a 30-day strip grouped by sprint week, ending on launch day */
function TimelineCard() {
  const weeks = [7, 7, 8, 8];
  let day = 0;

  return (
    <article className={cn(card, "flex flex-col gap-8 border-transparent bg-ink text-white md:col-span-2")}>
      <div aria-hidden className="bg-dots pointer-events-none absolute inset-0 text-white/[0.05]" />
      <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-primary/25 blur-[100px]" />

      <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
        <div className="flex flex-col gap-4">
          <Stat value="30" unit="days" tone="dark" />
          <p className="max-w-sm text-white/65">Typical time from our first call to your product being live.</p>
        </div>
        <span className="flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80">
          <Rocket aria-hidden className="size-4 text-primary" />
          Launch date set in week 1
        </span>
      </div>

      <div aria-hidden className="reveal-wipe relative grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
        {weeks.map((count, w) => (
          <div key={w} className="flex flex-col gap-3">
            <div className="flex flex-wrap gap-1.5">
              {Array.from({ length: count }, () => {
                day += 1;
                const isLaunch = day === 30;
                return (
                  <span
                    key={day}
                    className={cn(
                      "flex size-5 items-center justify-center rounded-md sm:size-6",
                      isLaunch ? "bg-primary ring-4 ring-primary/30" : "bg-primary"
                    )}
                    style={isLaunch ? undefined : { opacity: 0.25 + (day / 30) * 0.75 }}
                  >
                    {isLaunch && <Rocket className="size-3 text-white" />}
                  </span>
                );
              })}
            </div>
            <div>
              <p className="text-xs text-white/45">{process[w].week}</p>
              <p className="text-sm font-semibold">{process[w].title}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

/* 100%: an ownership ring plus what actually gets handed over */
function OwnershipCard() {
  const items = ["Source code & repos", "Figma design files", "Hosting & admin accounts"];
  const r = 52;
  const c = 2 * Math.PI * r;

  return (
    <article className={cn(card, "flex flex-col gap-8 bg-surface")}>
      <div className="flex flex-col items-start gap-6 min-[400px]:flex-row min-[400px]:items-center">
        <div className="ring-scope relative size-32 shrink-0">
          <svg viewBox="0 0 120 120" className="size-full -rotate-90" aria-hidden>
            <circle cx="60" cy="60" r={r} fill="none" stroke="var(--primary-soft)" strokeWidth="12" />
            <circle
              className="reveal-ring"
              cx="60"
              cy="60"
              r={r}
              fill="none"
              stroke="var(--primary)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={c}
              style={{ "--ring": c }}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold tracking-tight">
            100<span className="text-lg text-primary">%</span>
          </span>
        </div>
        <p className="text-muted">Of the code and designs belong to you once the project is done.</p>
      </div>

      <ul className="mt-auto flex flex-col gap-2">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 rounded-2xl bg-background px-4 py-3 text-sm font-medium">
            <span className="flex size-6 items-center justify-center rounded-full bg-primary text-white">
              <Check aria-hidden className="size-3.5" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

/* 1 team: every role in one group, with the client as part of it */
function TeamCard() {
  const roles = [
    { icon: Compass, label: "Product" },
    { icon: PenTool, label: "Design" },
    { icon: Code2, label: "Development" },
    { icon: ShieldCheck, label: "Testing" },
  ];

  return (
    <article className={cn(card, "flex flex-col gap-8 border-transparent bg-primary-soft")}>
      <Stat value="1" unit="team" />

      <div aria-hidden className="flex items-center">
        {roles.map(({ icon: Icon, label }, i) => (
          <span
            key={label}
            title={label}
            className={cn(
              "flex size-14 items-center justify-center rounded-full border-4 border-primary-soft text-white transition-transform duration-300 hover:-translate-y-1",
              i === 0 ? "bg-ink" : "-ml-3",
              i === 1 && "bg-primary-strong",
              i === 2 && "bg-primary",
              i === 3 && "bg-ink-2"
            )}
          >
            <Icon className="size-5" />
          </span>
        ))}
        <span className="-ml-3 flex size-14 items-center justify-center rounded-full border-2 border-dashed border-ink/30 bg-primary-soft text-sm font-semibold">
          You
        </span>
      </div>

      <p className="mt-auto text-ink/70">
        Product, design, development and testing in one place. One chat, one point of contact.
      </p>
    </article>
  );
}

/* Weekly: the week planner with a demo booked, plus a log of past demos */
function DemoCard() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const log = [
    { n: 3, title: "Login, onboarding & dashboard", state: "Today" },
    { n: 2, title: "Clickable prototype", state: "Approved" },
    { n: 1, title: "Scope & user flows", state: "Approved" },
  ];

  return (
    <article className={cn(card, "grid gap-8 bg-surface md:col-span-2 lg:grid-cols-[1fr_1.15fr] lg:items-center")}>
      <div className="flex flex-col gap-4">
        <p className="text-6xl leading-none font-bold tracking-tight min-[400px]:text-7xl sm:text-8xl lg:text-7xl">Weekly</p>
        <p className="max-w-sm text-muted">
          A demo call every week where you click through the latest build yourself, on a link you can open anytime.
        </p>
      </div>

      <div aria-hidden className="flex flex-col gap-4">
        <div className="grid grid-cols-5 gap-2">
          {days.map((d) => {
            const demo = d === "Fri";
            return (
              <div
                key={d}
                className={cn(
                  "flex flex-col items-center gap-2 rounded-2xl border px-2 py-3 text-xs font-medium",
                  demo ? "border-ink bg-ink text-white" : "border-line text-muted"
                )}
              >
                {d}
                {demo ? (
                  <span className="flex size-7 items-center justify-center rounded-full bg-primary">
                    <Video className="size-3.5" />
                  </span>
                ) : (
                  <span className="h-7 w-full rounded-lg bg-ink/[0.04]" />
                )}
              </div>
            );
          })}
        </div>

        <ul className="flex flex-col gap-2">
          {log.map((item, i) => (
            <li
              key={item.n}
              className={cn(
                "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm",
                i === 0 ? "bg-primary-soft" : "bg-background"
              )}
            >
              <span className="font-mono text-xs text-muted">#{item.n}</span>
              <span className="flex-1 font-medium">{item.title}</span>
              {i === 0 ? (
                <span className="flex items-center gap-1.5 text-xs font-semibold text-primary-strong">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                    <span className="relative inline-flex size-2 rounded-full bg-primary" />
                  </span>
                  {item.state}
                </span>
              ) : (
                <span className="flex items-center gap-1 text-xs text-muted">
                  <Check className="size-3.5 text-primary" />
                  {item.state}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
