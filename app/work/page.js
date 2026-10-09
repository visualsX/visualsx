import PageHero from "@/components/sections/PageHero";
import ProjectGrid from "@/components/sections/ProjectGrid";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import { projects } from "@/lib/site";
import { JsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Work",
  description:
    "Projects by visualsX: ERP software, online stores, finance tools and company websites built for clients in Pakistan, the UAE and Saudi Arabia.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("Our Work", "/work")} />
      <PageHero
        eyebrow="Our work"
        title={
          <>
            Things <span className="text-primary">we&apos;ve built</span>
          </>
        }
        description="A few of the products we've designed and built for our clients. Click any project to see it live."
      />

      <section className="container-x pb-20 sm:pb-28">
        <ProjectGrid projects={projects} />
      </section>

      <Testimonials />
      <CTA title="Want to build something similar?" />
    </>
  );
}
