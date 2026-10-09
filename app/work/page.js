import PageHero from "@/components/sections/PageHero";
import ProjectGrid from "@/components/sections/ProjectGrid";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import { projects } from "@/lib/site";

export const metadata = {
  title: "Work",
  description:
    "Projects by visualsX: ERP software, online stores, finance tools and company websites.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
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
