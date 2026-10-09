import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { engagements, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Engagements() {
  return (
    <section id="engagements" className="container-x section-y">
      <SectionHeading
        align="center"
        eyebrow="Engagement options"
        title="Ways to work with us"
        description="Every project starts with a free call, followed by a written proposal with the scope, timeline and price."
      />

      <ul className="mobile-carousel mt-10 gap-4 md:grid md:grid-cols-3 lg:gap-6">
        {engagements.map((plan) => (
          <li
            key={plan.name}
            className={cn(
              "relative flex flex-col gap-6 rounded-[28px] p-8",
              plan.featured ? "bg-ink text-white shadow-[0_40px_80px_-40px_rgb(249_115_22/0.6)]" : "border border-line bg-surface"
            )}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                Best place to start
              </span>
            )}
            <div>
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className={cn("mt-1 text-sm font-medium", plan.featured ? "text-primary" : "text-primary-strong")}>{plan.tagline}</p>
            </div>
            <p className={plan.featured ? "text-white/70" : "text-muted"}>{plan.description}</p>
            <ul className="flex flex-col gap-3">
              {plan.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <Check aria-hidden className="mt-0.5 size-5 shrink-0 text-primary" />
                  {point}
                </li>
              ))}
            </ul>
            <Button href={site.bookingUrl} variant={plan.featured ? "primary" : "outline"} className="mt-auto w-full" arrow>
              Talk to us
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}
