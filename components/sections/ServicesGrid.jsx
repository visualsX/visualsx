import Link from "next/link";
import { ArrowUpRight, Check, MousePointer2, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/lib/site";
import { cn } from "@/lib/utils";

// Grid placement per service: a two-row bento on large screens (4 columns).
const layout = {
  "product-design": "md:col-span-2",
  "mobile-apps": "",
  "web-development": "",
  "ai-automation": "",
  branding: "",
  "dedicated-teams": "md:col-span-2",
};

const visuals = {
  "product-design": DesignVisual,
  "web-development": WebVisual,
  "mobile-apps": MobileVisual,
  "ai-automation": AIVisual,
  branding: BrandVisual,
  "dedicated-teams": TeamVisual,
};

export default function ServicesGrid() {
  return (
    <section id="services" className="container-x section-y">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="What we do"
          title="What we can help with"
          description="Design, development and launch, handled by the same people from start to finish."
        />
        <Button href="/services" variant="outline" arrow className="shrink-0">
          All services
        </Button>
      </div>

      <ul className="mobile-carousel mt-10 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Visual = visuals[service.slug];
          return (
            <li key={service.slug} className={cn("min-w-0", layout[service.slug])}>
              <Link
                href={`/services#${service.slug}`}
                className="group flex h-full flex-col overflow-clip rounded-[28px] border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_48px_-24px_rgb(249_115_22/0.35)]"
              >
                <div
                  aria-hidden
                  className="relative m-2 flex min-h-40 flex-1 items-center justify-center overflow-clip rounded-[22px] bg-background p-6"
                >
                  <div className="bg-dots pointer-events-none absolute inset-0 text-ink/[0.06]" />
                  <Visual />
                </div>
                <div className="flex items-end justify-between gap-4 p-5 pt-3 sm:p-6 sm:pt-3">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="text-lg font-bold sm:text-xl">{service.title}</h3>
                    <p className="text-sm text-muted sm:text-base">{service.short}</p>
                  </div>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                    <ArrowUpRight aria-hidden className="size-4 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/* Design canvas: a wireframe frame, a finished frame and a collaborator cursor */
function DesignVisual() {
  return (
    <div className="relative flex w-full max-w-lg items-center gap-4">
      <div className="hidden flex-1 flex-col gap-2 rounded-2xl border border-dashed border-ink/20 bg-surface/60 p-4 sm:flex">
        <span className="h-3 w-1/2 rounded bg-ink/10" />
        <span className="h-16 rounded-lg bg-ink/5" />
        <span className="h-2.5 w-3/4 rounded bg-ink/10" />
        <span className="h-2.5 w-2/3 rounded bg-ink/10" />
      </div>
      <div className="relative flex flex-1 flex-col gap-2 rounded-2xl bg-surface p-4 shadow-lg ring-1 ring-line transition-transform duration-500 group-hover:-rotate-2">
        <span className="h-3 w-1/2 rounded bg-ink" />
        <span className="flex h-16 items-end rounded-lg bg-gradient-to-br from-primary to-primary-strong p-2">
          <span className="h-2 w-10 rounded bg-white/70" />
        </span>
        <span className="h-2.5 w-3/4 rounded bg-ink/15" />
        <span className="mt-1 h-6 w-20 rounded-full bg-ink" />
        <span className="absolute -top-3 left-4 rounded-md bg-primary px-1.5 py-0.5 text-[10px] font-semibold text-white">
          Home · v3
        </span>
      </div>
      <div className="absolute right-[18%] -bottom-3 flex items-center gap-1 transition-transform duration-500 group-hover:-translate-x-6 group-hover:-translate-y-4">
        <MousePointer2 className="size-5 fill-ink text-ink" />
        <span className="rounded-md bg-ink px-1.5 py-0.5 text-[10px] font-semibold text-white">You</span>
      </div>
    </div>
  );
}

/* Web app: a browser window with a small dashboard */
function WebVisual() {
  const bars = [40, 65, 50, 80, 60, 95];
  return (
    <div className="w-full max-w-xs overflow-clip rounded-xl bg-surface shadow-lg ring-1 ring-line">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
        <span className="size-2 rounded-full bg-ink/15" />
        <span className="size-2 rounded-full bg-ink/15" />
        <span className="size-2 rounded-full bg-ink/15" />
        <span className="ml-2 h-3 flex-1 rounded-full bg-ink/5" />
      </div>
      <div className="flex gap-3 p-3">
        <div className="flex w-10 flex-col gap-1.5">
          <span className="h-2 rounded bg-primary" />
          <span className="h-2 rounded bg-ink/10" />
          <span className="h-2 rounded bg-ink/10" />
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <div className="grid grid-cols-2 gap-2">
            <span className="h-7 rounded-md bg-primary-soft" />
            <span className="h-7 rounded-md bg-ink/5" />
          </div>
          <div className="flex h-16 items-end gap-1.5 rounded-md bg-ink/[0.03] p-2">
            {bars.map((h, i) => (
              <span
                key={i}
                className="flex-1 origin-bottom rounded-sm bg-primary transition-transform duration-500 group-hover:scale-y-110"
                style={{ height: `${h}%`, opacity: 0.45 + i * 0.11 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Mobile: a phone with a simple app screen */
function MobileVisual() {
  return (
    <div className="relative">
      <Phone />
    </div>
  );
}

function Phone() {
  return (
    <div className="relative w-32 rounded-[26px] bg-ink p-1.5 shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
      <div className="flex flex-col gap-2 rounded-[22px] bg-surface p-3 pt-5">
        <span className="absolute top-3 left-1/2 h-1.5 w-12 -translate-x-1/2 rounded-full bg-ink" />
        <span className="h-2.5 w-1/2 rounded bg-ink" />
        <span className="flex h-20 flex-col justify-end gap-1 rounded-xl bg-gradient-to-br from-primary to-primary-strong p-2.5">
          <span className="h-2 w-1/2 rounded bg-white/80" />
          <span className="h-2 w-1/3 rounded bg-white/50" />
        </span>
        {[0, 1].map((i) => (
          <span key={i} className="flex items-center gap-2 rounded-lg bg-background p-1.5">
            <span className="size-5 rounded-md bg-primary-soft" />
            <span className="h-2 flex-1 rounded bg-ink/10" />
          </span>
        ))}
        <span className="mt-1 flex justify-around border-t border-line pt-2">
          <span className="size-3 rounded-full bg-primary" />
          <span className="size-3 rounded-full bg-ink/10" />
          <span className="size-3 rounded-full bg-ink/10" />
        </span>
      </div>
    </div>
  );
}

/* AI: a short chat with an assistant reply */
function AIVisual() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2 text-xs">
      <span className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-ink px-3 py-2 text-white">
        Summarise this week&apos;s invoices
      </span>
      <span className="flex max-w-[85%] gap-2 rounded-2xl rounded-bl-md bg-surface px-3 py-2 shadow-sm ring-1 ring-line">
        <Sparkles className="mt-0.5 size-3.5 shrink-0 text-primary" />
        <span className="flex flex-1 flex-col gap-1.5 py-0.5">
          <span className="h-2 w-full rounded bg-ink/10" />
          <span className="h-2 w-4/5 rounded bg-ink/10" />
          <span className="h-2 w-3/5 rounded bg-primary/40" />
        </span>
      </span>
      <span className="flex w-fit items-center gap-1 rounded-full bg-primary-soft px-2.5 py-1 font-medium text-primary-strong">
        <Check className="size-3" />
        Done in seconds
      </span>
    </div>
  );
}

/* Branding: logo mark, colour swatches and a type specimen */
function BrandVisual() {
  return (
    <div className="flex w-full max-w-xs items-center gap-4">
      <span className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-ink text-4xl font-bold text-primary transition-transform duration-500 group-hover:rotate-6">
        b.
      </span>
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <div className="flex gap-1.5">
          {["bg-primary", "bg-primary-strong", "bg-ink", "bg-primary-soft"].map((c) => (
            <span key={c} className={cn("h-8 flex-1 rounded-lg ring-1 ring-line", c)} />
          ))}
        </div>
        <p className="flex items-baseline gap-2 leading-none">
          <span className="text-3xl font-bold">Aa</span>
          <span className="truncate text-xs text-muted">Headline · Body</span>
        </p>
      </div>
    </div>
  );
}

/* Dedicated team: a sprint board with tasks moving across */
function TeamVisual() {
  const columns = [
    { title: "To do", items: ["bg-ink/10", "bg-ink/10"] },
    { title: "In progress", items: ["bg-primary/60", "bg-ink/10"] },
    { title: "Done", items: ["bg-primary", "bg-primary", "bg-primary"] },
  ];
  return (
    <div className="grid w-full max-w-lg grid-cols-3 gap-2 sm:gap-3">
      {columns.map((col) => (
        <div key={col.title} className="flex min-w-0 flex-col gap-2 rounded-xl bg-surface/70 p-2 ring-1 ring-line sm:p-3">
          <span className="truncate text-[10px] font-semibold tracking-wide text-muted uppercase">{col.title}</span>
          {col.items.map((c, i) => (
            <span key={i} className="flex items-center gap-1.5 rounded-lg bg-surface p-1.5 shadow-sm ring-1 ring-line">
              <span className={cn("size-4 shrink-0 rounded-full", c)} />
              <span className="h-1.5 flex-1 rounded bg-ink/10" />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
