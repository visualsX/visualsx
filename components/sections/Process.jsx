import { Check, Rocket, Video } from "lucide-react";
import Button from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { process, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Process() {
  return (
    <section id="process" className="container-x">
      <div className="relative overflow-clip rounded-[36px] bg-ink px-5 py-12 text-white sm:px-10 sm:py-16 lg:px-14">
        <div aria-hidden className="bg-dots pointer-events-none absolute inset-0 text-white/[0.06]" />
        <div aria-hidden className="pointer-events-none absolute -right-32 -bottom-40 size-96 rounded-full bg-primary/25 blur-[120px]" />

        <div className="relative">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="flex flex-col gap-4">
              <Eyebrow tone="dark">How we work</Eyebrow>
              <h2 className="text-3xl leading-[1.08] font-bold tracking-tight text-balance sm:text-[2.5rem]">
                Your MVP, <span className="text-primary">live in 30 days</span>
              </h2>
              <p className="text-base text-white/60 sm:text-lg">Four steps, with a demo call after each one.</p>
            </div>
            <Button href={site.bookingUrl} variant="light" arrow className="shrink-0">
              Plan your MVP
            </Button>
          </div>

          <ol className="relative mt-12 grid gap-8 lg:mt-16 lg:grid-cols-4 lg:gap-0">
            {/* Desktop rail: fills left to right as the section scrolls into view */}
            <div aria-hidden className="absolute top-[1.125rem] right-0 left-0 hidden h-1 rounded-full bg-white/10 lg:block">
              <div className="reveal-wipe absolute inset-0 rounded-full bg-gradient-to-r from-primary/40 via-primary to-primary" />
            </div>
            {/* Mobile rail: fills top to bottom */}
            <div aria-hidden className="absolute top-2 bottom-2 left-4 w-1 rounded-full bg-white/10 lg:hidden">
              <div className="reveal-wipe-y absolute inset-0 rounded-full bg-gradient-to-b from-primary/40 via-primary to-primary" />
            </div>

            {process.map((step, i) => {
              const last = i === process.length - 1;
              return (
                <li key={step.week} className="relative grid grid-cols-[2.25rem_1fr] items-start gap-x-4 lg:block lg:pr-8">
                  {/* Rail marker: a demo call after each step, the rocket marks launch */}
                  <span
                    aria-hidden
                    title={last ? "Launch" : "Demo call"}
                    className={cn(
                      "flex size-9 items-center justify-center rounded-full ring-4 ring-ink",
                      last ? "bg-primary text-white" : "border border-white/15 bg-ink-2 text-primary"
                    )}
                  >
                    {last ? <Rocket className="size-4" /> : <Video className="size-4" />}
                  </span>

                  <div className="flex flex-col gap-3 pt-1.5 lg:pt-6">
                    <p className="text-sm font-semibold text-primary">{step.week}</p>
                    <h3 className="text-xl font-bold sm:text-2xl">{step.title}</h3>
                    <p className="flex items-center gap-2 text-sm text-white/60">
                      <Check aria-hidden className={cn("size-4 shrink-0", last ? "text-primary" : "text-white/40")} />
                      {step.deliverable}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
