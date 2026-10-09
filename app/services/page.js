import PageHero from "@/components/sections/PageHero";
import ServiceExplorer from "@/components/services/ServiceExplorer";
import Process from "@/components/sections/Process";
import Engagements from "@/components/sections/Engagements";
import CTA from "@/components/sections/CTA";

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

      <ServiceExplorer />

      <Process />
      <Engagements />
      <CTA />
    </>
  );
}
