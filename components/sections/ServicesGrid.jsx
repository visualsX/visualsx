import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { serviceVisuals } from "@/components/services/ServiceVisuals";
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
          const Visual = serviceVisuals[service.slug];
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
