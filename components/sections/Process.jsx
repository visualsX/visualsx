import Image from "next/image";
import { Check, Rocket, Video } from "lucide-react";
import Button from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { founders, process, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Process() {
  return (
    <section id="process" className="container-x">
      <div className="relative overflow-clip rounded-[36px] bg-ink px-5 py-12 text-white sm:px-10 sm:py-14 lg:px-12">
        <div aria-hidden className="bg-dots pointer-events-none absolute inset-0 text-white/[0.06]" />
        <div aria-hidden className="pointer-events-none absolute -right-32 -bottom-40 size-96 rounded-full bg-primary/25 blur-[120px]" />

        <div className="relative">
          {/* Header: title left, intro + action right */}
          <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
            <div className="flex flex-col gap-4">
              <Eyebrow tone="dark">How we work</Eyebrow>
              <h2 className="text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl">
                Your MVP, <span className="text-primary">live in 30 days</span>
              </h2>
            </div>
            <div className="flex flex-col items-start gap-5">
              <p className="text-lg text-white/65">
                Scope, price and launch date are agreed up front. Along the way you get regular demo calls to see the build and
                approve the next step.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button href={site.bookingUrl} variant="light" arrow>
                  Plan your MVP
                </Button>
                <span className="flex items-center gap-2 text-sm text-white/55">
                  <span className="flex -space-x-2">
                    {founders.map((f) => (
                      <Image
                        key={f.name}
                        src={f.image}
                        alt=""
                        width={28}
                        height={28}
                        className="size-7 rounded-full object-cover ring-2 ring-ink"
                      />
                    ))}
                  </span>
                  Demos run by the founders
                </span>
              </div>
            </div>
          </div>

          <ol className="relative mt-10 grid gap-6 sm:gap-8 lg:mt-14 lg:grid-cols-4 lg:gap-0">
            {/* Desktop rail: fills left to right as the section scrolls into view */}
            <div aria-hidden className="absolute top-[3.125rem] right-0 left-0 hidden h-1 rounded-full bg-white/10 lg:block">
              <div className="reveal-wipe absolute inset-0 rounded-full bg-gradient-to-r from-primary/40 via-primary to-primary" />
            </div>
            {/* Mobile rail: fills top to bottom */}
            <div aria-hidden className="absolute top-2 bottom-2 left-4 w-1 rounded-full bg-white/10 lg:hidden">
              <div className="reveal-wipe-y absolute inset-0 rounded-full bg-gradient-to-b from-primary/40 via-primary to-primary" />
            </div>

            {process.map((step, i) => {
              const last = i === process.length - 1;
              return (
                <li key={step.week} className="relative grid grid-cols-[2.25rem_1fr] gap-x-4 lg:block lg:pr-10">
                  {/* Week label, above the rail on desktop */}
                  <p className="col-start-2 flex items-baseline gap-2 text-sm lg:h-8">
                    <span className="font-semibold text-primary">{step.week}</span>
                    <span className="text-white/40">{step.days}</span>
                  </p>

                  {/* Rail marker: a demo call closes each week, the rocket marks launch */}
                  <span
                    aria-hidden
                    title={last ? "Launch" : "Demo call"}
                    className={cn(
                      "col-start-1 row-span-2 row-start-1 flex size-9 items-center justify-center rounded-full ring-4 ring-ink lg:absolute lg:top-8 lg:right-6",
                      last ? "bg-primary text-white" : "border border-white/15 bg-ink-2 text-primary"
                    )}
                  >
                    {last ? <Rocket className="size-4" /> : <Video className="size-4" />}
                  </span>

                  <div className="col-start-2 mt-1.5 flex flex-col gap-2.5 sm:mt-2 sm:gap-3 lg:mt-10">
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="hidden text-sm leading-relaxed text-white/60 sm:block lg:text-[0.95rem]">{step.body}</p>
                    <p className="flex w-fit items-center gap-2 rounded-full bg-white/[0.07] py-1.5 pr-3.5 pl-1.5 text-sm font-medium">
                      <span className={cn("flex size-5 items-center justify-center rounded-full", last ? "bg-primary" : "bg-white/15")}>
                        <Check aria-hidden className="size-3" />
                      </span>
                      {step.deliverable}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>

          <p className="mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/45 lg:mt-12">
            <Video aria-hidden className="size-4 text-primary" />
            Demo call after every step
            <span className="mx-1 text-white/20">·</span>
            <Rocket aria-hidden className="size-4 text-primary" />
            MVP live in about 30 days
          </p>
        </div>
      </div>
    </section>
  );
}
