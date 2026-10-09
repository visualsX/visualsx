import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import ServiceIcon from "@/components/ui/ServiceIcon";
import PageHero from "@/components/sections/PageHero";
import ServiceTabs from "@/components/services/ServiceTabs";
import Process from "@/components/sections/Process";
import Engagements from "@/components/sections/Engagements";
import TechStack from "@/components/sections/TechStack";
import CTA from "@/components/sections/CTA";
import { services, site } from "@/lib/site";

export const metadata = {
  title: "Services",
  description:
    "Product design, web and mobile app development, AI features, branding and dedicated teams for startups and growing businesses.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Design and development, <span className="text-primary">start to finish</span>
          </>
        }
        description="Hire us for one piece, like the design or the mobile app, or have us take care of the whole product."
      />

      <div>
        <ServiceTabs items={services.map(({ slug, title }) => ({ slug, title }))} />
        <section className="container-x">
          <ul className="flex flex-col">
            {services.map((service, i) => (
              <li
                key={service.slug}
                id={service.slug}
                className="grid scroll-mt-36 gap-8 border-b border-line py-12 sm:py-16 lg:grid-cols-[auto_1fr_1fr] lg:gap-16"
              >
                <span className="font-mono text-sm text-muted">0{i + 1}</span>
                <div className="flex flex-col items-start gap-5">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-white">
                    <ServiceIcon slug={service.slug} className="size-6" />
                  </span>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{service.title}</h2>
                  <p className="text-lg text-muted">{service.description}</p>
                </div>
                <div className="flex flex-col justify-between gap-8">
                  <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    {service.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-3 rounded-2xl border border-line bg-surface px-5 py-4 font-medium"
                      >
                        <Check aria-hidden className="size-5 shrink-0 text-primary" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Button href={site.bookingUrl} variant="outline" arrow className="w-fit">
                    Get a proposal
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="pt-20 sm:pt-28">
        <Process />
      </div>
      <Engagements />
      <TechStack />
      <CTA />
    </>
  );
}
