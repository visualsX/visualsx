import Image from "next/image";
import { Check, Clock, X } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { comparison } from "@/lib/site";
import { cn } from "@/lib/utils";

// The first row is the timeline (shown as a headline stat); the rest are yes/no features.
const [timeline, ...features] = comparison.rows;

// Desktop order puts visualsX in the middle; on phones it comes first in the swipe row.
const desktopOrder = ["lg:order-2", "lg:order-1", "lg:order-3"];

export default function Comparison() {
  return (
    <section className="container-x section-y">
      <SectionHeading
        align="center"
        eyebrow="Why visualsX"
        title="How we compare"
        description="A rough comparison with the other options founders usually look at."
      />

      <ul className="carousel-until-lg mt-10 gap-4 lg:grid lg:grid-cols-3 lg:items-center lg:gap-6">
        {comparison.columns.map((name, col) => (
          <li key={name} className={cn("min-w-0", desktopOrder[col])}>
            <OptionCard name={name} col={col} featured={col === 0} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function OptionCard({ name, col, featured }) {
  const score = features.filter((row) => row.values[col] === true).length;

  return (
    <article
      className={cn(
        "relative flex h-full flex-col gap-6 overflow-clip rounded-[28px] p-6 sm:p-7",
        featured
          ? "bg-ink text-white shadow-[0_40px_80px_-30px_rgb(249_115_22/0.45)] ring-1 ring-primary/30 lg:py-9"
          : "bg-surface ring-1 ring-line"
      )}
    >
      {featured && (
        <>
          <div aria-hidden className="bg-dots pointer-events-none absolute inset-0 text-white/[0.05]" />
          <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-primary/25 blur-3xl" />
        </>
      )}

      {/* Header */}
      <div className="relative flex flex-col gap-3">
        {featured && (
          <span className="w-fit rounded-full bg-primary px-2.5 py-1 text-[11px] font-bold text-ink">Our approach</span>
        )}
        <div>
          <h3 className={cn("flex items-center gap-2 text-xl font-bold", featured && "text-primary")}>
            {featured && <Image src="/logo/white-logo.svg" alt="" width={24} height={24} className="size-6 shrink-0" />}
            {name}
          </h3>
          <p className={cn("mt-1 text-sm", featured ? "text-white/60" : "text-muted")}>{comparison.notes[col]}</p>
        </div>
      </div>

      {/* Timeline stat */}
      <div className={cn("relative rounded-2xl p-4", featured ? "bg-white/[0.06]" : "bg-background")}>
        <p className={cn("flex items-center gap-1.5 text-xs font-medium", featured ? "text-white/50" : "text-muted")}>
          <Clock aria-hidden className="size-3.5" />
          {timeline.label}
        </p>
        <p className={cn("mt-1 text-2xl font-bold tracking-tight", featured ? "text-white" : "text-foreground")}>
          {timeline.values[col]}
        </p>
      </div>

      {/* Score */}
      <div className="relative flex flex-col gap-2">
        <div className="flex items-baseline justify-between text-sm">
          <span className={featured ? "text-white/60" : "text-muted"}>What you get</span>
          <span className="font-semibold">
            {score} of {features.length}
          </span>
        </div>
        <div aria-hidden className="flex gap-1">
          {features.map((row, i) => (
            <span
              key={row.label}
              className={cn(
                "h-1.5 flex-1 rounded-full",
                i < score ? (featured ? "bg-primary" : "bg-ink") : featured ? "bg-white/10" : "bg-ink/10"
              )}
            />
          ))}
        </div>
      </div>

      {/* Feature checklist */}
      <ul className="relative flex flex-col gap-3">
        {features.map((row) => {
          const yes = row.values[col] === true;
          return (
            <li key={row.label} className="flex items-center gap-3 text-sm sm:text-base">
              <span
                className={cn(
                  "flex size-6 shrink-0 items-center justify-center rounded-full",
                  yes
                    ? featured
                      ? "bg-primary text-ink"
                      : "bg-ink text-white"
                    : featured
                      ? "bg-white/10 text-white/40"
                      : "bg-ink/5 text-muted/60"
                )}
              >
                {yes ? <Check aria-hidden className="size-3.5" /> : <X aria-hidden className="size-3.5" />}
              </span>
              <span
                className={cn(
                  !yes && "line-through decoration-1",
                  yes ? (featured ? "text-white" : "text-foreground") : featured ? "text-white/40" : "text-muted/70"
                )}
              >
                {row.label}
                <span className="sr-only">{yes ? ": yes" : ": no"}</span>
              </span>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
