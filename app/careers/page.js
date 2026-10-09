import { Globe2, Lightbulb, Rocket, TrendingUp } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/sections/PageHero";
import { site } from "@/lib/site";

export const metadata = {
  title: "Careers",
  description:
    "Careers at visualsX, a small remote product studio that designs and builds apps for founders.",
  alternates: { canonical: "/careers" },
};

const perks = [
  { icon: Rocket, title: "Ship every month", body: "Projects run in 30-day sprints, so the things you build go live often." },
  { icon: Lightbulb, title: "Variety of problems", body: "One month it's an ERP, the next it's an online store or an AI feature." },
  { icon: Globe2, title: "Remote-first", body: "We work remotely. Live wherever suits you." },
  { icon: TrendingUp, title: "Real ownership", body: "We're a small team, so your ideas actually shape the products and how we work." },
];

const disciplines = ["Product Design", "Frontend Engineering", "Full-stack Engineering", "Mobile Engineering", "QA & Automation", "Growth & Marketing"];

export default function CareersPage() {
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Careers at visualsX")}`;

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Work <span className="text-primary">with us</span>
          </>
        }
        description="We're a small remote team of designers and developers building products for founders. If you like seeing your work go live, you'll enjoy it here."
      >
        <Button href={mailto} size="lg" arrow className="mt-2">
          Send us your portfolio
        </Button>
      </PageHero>

      <section className="container-x section-y pt-0">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex flex-col gap-5 rounded-[28px] border border-line bg-surface p-7">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary-soft text-primary-strong">
                <Icon aria-hidden className="size-5" />
              </span>
              <h2 className="text-xl font-bold">{title}</h2>
              <p className="text-muted">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-x section-y">
        <div className="grid gap-12 rounded-[36px] border border-line bg-surface p-8 sm:p-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            eyebrow="Open roles"
            title="No open roles at the moment"
            description="We still like hearing from good people. Send us your portfolio and we'll reach out when something opens up."
          />
          <div className="flex flex-col gap-6">
            <p className="font-semibold">Disciplines we hire for</p>
            <ul className="flex flex-wrap gap-2">
              {disciplines.map((d) => (
                <li key={d} className="rounded-full border border-line px-4 py-2 font-medium">
                  {d}
                </li>
              ))}
            </ul>
            <Button href={mailto} variant="dark" arrow className="mt-auto w-fit">
              Introduce yourself
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
