import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectGrid from "@/components/sections/ProjectGrid";
import { projects } from "@/lib/site";

export default function SelectedWork() {
  return (
    <section id="work" className="container-x section-y">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Selected work"
          title="Recent projects"
          description="ERPs, online stores, finance tools and websites for clients in Pakistan, the UAE and Saudi Arabia."
        />
        <Button href="/work" variant="outline" arrow className="shrink-0">
          View all work
        </Button>
      </div>

      <div className="mt-10">
        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
