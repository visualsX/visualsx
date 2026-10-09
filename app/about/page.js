import { Check, MessagesSquare, Rocket, ShieldCheck, Target, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/SectionHeading";
import PageHero from "@/components/sections/PageHero";
import CTA from "@/components/sections/CTA";
import { projects, story, values } from "@/lib/site";
import { cn } from "@/lib/utils";
import { JsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "About visualsX, a small product studio that helps founders design, build and launch their MVP in about 30 days.",
  path: "/about",
});

const valueIcons = { rocket: Rocket, chat: MessagesSquare, shield: ShieldCheck, target: Target };

function Step({ label, title, last = false, children }) {
  return (
    <li className="relative grid grid-cols-[2.5rem_1fr] gap-x-5 pb-12 last:pb-0 sm:grid-cols-[3rem_1fr] sm:gap-x-6">
      <span
        aria-hidden
        className={cn(
          "relative z-10 flex size-10 items-center justify-center rounded-full font-mono text-xs font-semibold ring-[6px] ring-background sm:size-12",
          last ? "bg-primary text-white" : "border border-line bg-surface text-primary-strong"
        )}
      >
        {label}
      </span>
      <div className="flex min-w-0 flex-col gap-4 pt-1.5 sm:pt-2.5">
        <h3 className="text-xl font-bold tracking-tight sm:text-2xl">{title}</h3>
        {children}
      </div>
    </li>
  );
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd("About Us", "/about")} />
      <PageHero
        eyebrow="About us"
        title={
          <>
            A small team that <span className="text-primary">builds products</span> for founders
          </>
        }
        description="We design, build and launch first versions of web and mobile products, usually in about 30 days."
      />

      <section className="container-x pb-16 sm:pb-20 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
          {/* Statement, pinned while the timeline scrolls */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <Eyebrow>Why we started</Eyebrow>
            <p className="text-2xl leading-[1.15] font-bold tracking-tight text-balance sm:text-3xl">{story.statement}</p>
          </div>

          <ol className="relative">
            {/* Rail: fills top to bottom as you scroll */}
            <div aria-hidden className="absolute top-2 bottom-2 left-5 w-0.5 -translate-x-1/2 rounded-full bg-line sm:left-6">
              <div className="reveal-wipe-y absolute inset-0 rounded-full bg-gradient-to-b from-primary/30 via-primary to-primary" />
            </div>

            <Step label="01" title="The problem">
              <p className="text-base text-muted sm:text-lg">{story.body[0]}</p>
            </Step>

            <Step label="02" title="What founders told us">
              <ul className="flex flex-wrap gap-2">
                {story.pairs.map((pair) => (
                  <li
                    key={pair.before}
                    className="flex items-center gap-2 rounded-full bg-surface px-3.5 py-2 text-sm text-muted ring-1 ring-line"
                  >
                    <X aria-hidden className="size-3.5 shrink-0 text-muted/60" />
                    {pair.before}
                  </li>
                ))}
              </ul>
            </Step>

            <Step label="03" title="What we built">
              <p className="text-base text-muted sm:text-lg">{story.body[1]}</p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {story.pairs.map((pair) => (
                  <li key={pair.after} className="flex items-center gap-3 rounded-2xl bg-ink px-4 py-3.5 text-sm font-medium text-white">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary">
                      <Check aria-hidden className="size-3" />
                    </span>
                    {pair.after}
                  </li>
                ))}
              </ul>
            </Step>

            <Step label="04" title="The rules we keep">
              <ul className="grid gap-3 sm:grid-cols-2">
                {values.map((value) => {
                  const Icon = valueIcons[value.icon];
                  return (
                    <li key={value.title} className="group flex flex-col gap-3 rounded-[22px] bg-surface p-5 ring-1 ring-line">
                      <span className="flex size-10 items-center justify-center rounded-xl bg-primary-soft text-primary-strong transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                        <Icon aria-hidden className="size-5" />
                      </span>
                      <p className="text-lg font-bold">{value.title}</p>
                      <p className="text-sm text-muted">{value.body}</p>
                    </li>
                  );
                })}
              </ul>
            </Step>

            <Step label="05" title="Today" last>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <p>
                  <span className="block text-4xl font-bold tracking-tight">{projects.length}</span>
                  <span className="text-muted">products shipped</span>
                </p>
                <p>
                  <span className="block text-4xl font-bold tracking-tight">3</span>
                  <span className="text-muted">client countries</span>
                </p>
                <Button href="/work" variant="outline" arrow className="sm:ml-auto">
                  See the work
                </Button>
              </div>
            </Step>
          </ol>
        </div>
      </section>

      <CTA />
    </>
  );
}
