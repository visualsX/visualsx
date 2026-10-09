import { FileCheck2, Globe, MousePointerClick, Rocket } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { process, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const icons = [FileCheck2, MousePointerClick, Globe, Rocket];

export default function Process() {
  return (
    <section id="process" className="container-x">
      <div className="relative overflow-clip rounded-[36px] bg-ink px-5 py-14 text-white sm:px-12 sm:py-20">
        <div aria-hidden className="bg-dots pointer-events-none absolute inset-0 text-white/[0.06]" />
        <div aria-hidden className="pointer-events-none absolute -right-32 -bottom-32 size-96 rounded-full bg-primary/30 blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute -top-40 -left-20 size-80 rounded-full bg-primary/10 blur-[100px]" />

        <div className="relative">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              tone="dark"
              eyebrow="How we work"
              title={
                <>
                  How a <span className="text-primary">30-day sprint</span> works
                </>
              }
              description="We agree on the scope and launch date in the first week, then show you progress on a call every week until launch."
            />
            <Button href={site.bookingUrl} variant="light" arrow className="shrink-0 self-start lg:self-auto">
              Plan your sprint
            </Button>
          </div>

          {/* Progress rail: fills left to right as the section scrolls into view */}
          <div aria-hidden className="relative mt-12 hidden h-1.5 rounded-full bg-white/10 lg:block">
            <div className="reveal-wipe absolute inset-0 rounded-full bg-gradient-to-r from-primary/40 via-primary to-primary" />
            <div className="absolute inset-0 grid grid-cols-4 gap-4">
              {process.map((step) => (
                <span key={step.week} className="relative">
                  <span className="absolute top-1/2 left-6 size-4 -translate-y-1/2 rounded-full border-4 border-ink bg-primary" />
                </span>
              ))}
            </div>
          </div>

          <ol className="mobile-carousel mt-10 gap-4 md:grid md:grid-cols-2 lg:mt-8 lg:grid-cols-4">
            {process.map((step, i) => {
              const Icon = icons[i];
              const last = i === process.length - 1;
              return (
                <li
                  key={step.week}
                  className={cn(
                    "flex min-w-0 flex-col gap-5 rounded-[24px] border p-6 transition-colors duration-300",
                    last
                      ? "border-primary/40 bg-primary/10"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                  )}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={cn(
                        "flex size-11 items-center justify-center rounded-2xl",
                        last ? "bg-primary text-white" : "bg-white/10 text-primary"
                      )}
                    >
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <span className="text-xs font-medium text-white/45">{step.days}</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium text-primary">{step.week}</p>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                    <p className="text-white/60">{step.body}</p>
                  </div>

                  <div className="mt-auto flex flex-col gap-1 rounded-2xl bg-white/[0.06] px-4 py-3">
                    <span className="text-[10px] font-semibold tracking-[0.15em] text-white/40 uppercase">You get</span>
                    <span className="text-sm font-semibold">{step.deliverable}</span>
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
