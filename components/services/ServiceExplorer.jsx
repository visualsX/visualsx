"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import ServiceIcon from "@/components/ui/ServiceIcon";
import { serviceVisuals } from "@/components/services/ServiceVisuals";
import { services, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function ServiceExplorer() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const tabRefs = useRef([]);

  // Open the service named in the URL hash (e.g. /services#mobile-apps), and keep in sync.
  useEffect(() => {
    const fromHash = (scroll) => {
      const i = services.findIndex((s) => `#${s.slug}` === window.location.hash);
      if (i === -1) return;
      setActive(i);
      if (scroll) sectionRef.current?.scrollIntoView({ block: "start" });
    };
    fromHash(true);
    const onHash = () => fromHash(true);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const select = (i, focus = false) => {
    setActive(i);
    history.replaceState(null, "", `#${services[i].slug}`);
    if (focus) tabRefs.current[i]?.focus();
    tabRefs.current[i]?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  };

  const onKeyDown = (e) => {
    const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
    if (e.key in keys) {
      e.preventDefault();
      select((active + keys[e.key] + services.length) % services.length, true);
    } else if (e.key === "Home") select(0, true);
    else if (e.key === "End") select(services.length - 1, true);
  };

  const service = services[active];
  const next = services[(active + 1) % services.length];
  const Visual = serviceVisuals[service.slug];

  return (
    <section ref={sectionRef} className="container-x scroll-mt-24 pb-16 sm:pb-20 lg:pb-24">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-6">
        {/* Service list: vertical on desktop, swipeable chips on smaller screens */}
        <div
          role="tablist"
          aria-label="Services"
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {services.map((s, i) => {
            const selected = i === active;
            return (
              <button
                key={s.slug}
                ref={(el) => (tabRefs.current[i] = el)}
                role="tab"
                id={`tab-${s.slug}`}
                aria-selected={selected}
                aria-controls="service-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => select(i)}
                className={cn(
                  "group flex shrink-0 items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition-all duration-300 lg:w-full lg:flex-1 lg:gap-4 lg:p-4",
                  selected
                    ? "bg-ink text-white shadow-[0_16px_32px_-16px_rgb(20_17_15/0.6)]"
                    : "bg-surface ring-1 ring-line hover:ring-primary/40"
                )}
              >
                <span
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center rounded-xl transition-colors lg:size-11",
                    selected ? "bg-primary text-white" : "bg-primary-soft text-primary-strong"
                  )}
                >
                  <ServiceIcon slug={s.slug} className="size-4 lg:size-5" />
                </span>
                <span className="flex min-w-0 flex-col">
                  <span className="text-sm font-semibold whitespace-nowrap lg:text-base">{s.title}</span>
                  <span className={cn("hidden text-sm lg:line-clamp-1", selected ? "text-white/55" : "text-muted")}>
                    {s.short}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Detail panel; key restarts the entrance animation on every switch */}
        <div
          key={service.slug}
          id="service-panel"
          role="tabpanel"
          aria-labelledby={`tab-${service.slug}`}
          className="group animate-in fade-in slide-in-from-bottom-2 min-w-0 overflow-clip rounded-[32px] bg-surface ring-1 ring-line duration-500 lg:grid lg:min-h-[36rem]"
        >
          <div className="grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
            {/* Illustration */}
            <div
              aria-hidden
              className="relative m-2 flex min-h-56 items-center justify-center overflow-clip rounded-[26px] bg-background px-6 pt-12 pb-8 sm:min-h-64 sm:p-8"
            >
              <div className="bg-dots pointer-events-none absolute inset-0 text-ink/[0.06]" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 size-64 rounded-full bg-primary/15 blur-3xl" />
              <span className="absolute top-5 left-5 font-mono text-xs text-muted">
                {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
              </span>
              <div className="relative flex w-full justify-center">
                <Visual />
              </div>
            </div>

            {/* Copy */}
            <div className="flex min-w-0 flex-col gap-7 p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl leading-tight font-bold tracking-tight text-balance sm:text-3xl">{service.title}</h2>
                <p className="text-base text-pretty text-muted sm:text-lg">{service.description}</p>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold tracking-[0.15em] text-muted uppercase">What&apos;s included</p>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2.5 rounded-xl bg-background px-3.5 py-3 text-sm font-medium">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                        <Check aria-hidden className="size-3" />
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/cta inline-flex h-12 shrink-0 items-center justify-center gap-3 rounded-full whitespace-nowrap bg-ink py-1 pr-1 pl-5 text-sm font-semibold text-white transition-colors hover:bg-ink-2 sm:justify-start"
                >
                  Get a proposal
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary transition-transform duration-300 group-hover/cta:rotate-45">
                    <ArrowUpRight aria-hidden className="size-4" />
                  </span>
                </a>
                <button
                  type="button"
                  onClick={() => select((active + 1) % services.length)}
                  className="group/next inline-flex items-center justify-center gap-2 text-left text-sm font-semibold text-muted transition-colors hover:text-foreground"
                >
                  Next: {next.title}
                  <ArrowRight aria-hidden className="size-4 transition-transform group-hover/next:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
