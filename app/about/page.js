import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/sections/PageHero";
import CTA from "@/components/sections/CTA";
import { founders, values } from "@/lib/site";

export const metadata = {
  title: "About",
  description:
    "About visualsX, a small product studio that helps founders design, build and launch their first product.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            A small team that <span className="text-primary">builds products</span> for founders
          </>
        }
        description="We started visualsX after watching too many founders wait months for a first version, or lose time switching between freelancers."
      />

      <section className="container-x section-y pt-0">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading eyebrow="Our story" title="Why we started" />
          <div className="flex flex-col gap-6 text-lg text-muted">
            <p>
              Most founders we meet have a clear idea and a limited budget. What they need is someone who understands
              the business side, can make sensible technical decisions, and can get a first version to users quickly.
            </p>
            <p>
              So that&apos;s what we set up. Design, development and testing happen in one small team. Projects run in
              30-day sprints, and the scope and launch date are agreed in the first week.
            </p>
            <p>
              So far we&apos;ve built ERP software, online stores, finance tools and company websites for clients in
              Pakistan, the UAE and Saudi Arabia, and we keep supporting those products after launch.
            </p>
          </div>
        </div>
      </section>


      <section className="container-x section-y">
        <SectionHeading eyebrow="What we believe" title="How we work" />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <li key={value.title} className="flex flex-col gap-4 rounded-[28px] border border-line bg-surface p-7">
              <span className="font-mono text-sm text-primary-strong">0{i + 1}</span>
              <h3 className="text-xl font-bold">{value.title}</h3>
              <p className="text-muted">{value.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-x section-y">
        <SectionHeading eyebrow="The team" title="Founders" />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:max-w-3xl">
          {founders.map((f) => (
            <li key={f.name} className="group overflow-hidden rounded-[28px] border border-line bg-surface">
              <div className="relative aspect-[4/5] overflow-hidden bg-primary-soft">
                <Image
                  src={f.image}
                  alt={f.name}
                  fill
                  sizes="(min-width: 640px) 384px, 100vw"
                  className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="p-6">
                <p className="text-xl font-bold">{f.name}</p>
                <p className="text-muted">{f.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <CTA />
    </>
  );
}
