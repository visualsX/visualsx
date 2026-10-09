import { Building2, Code2, Coffee, Home, Mic, PenTool, Plane, Rocket, ShieldCheck, Video } from "lucide-react";
import SectionHeading, { Eyebrow } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/site";

export const metadata = {
  title: "Careers",
  description: "Careers at visualsX, a small remote product studio that designs and builds apps for founders.",
  alternates: { canonical: "/careers" },
};

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-clip">
        <div
          aria-hidden
          className="bg-dots pointer-events-none absolute inset-0 text-ink/[0.07] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_65%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-56 left-1/2 size-[560px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
        />
        <div className="container-x relative flex flex-col items-center gap-7 pt-14 pb-16 text-center sm:pt-24 sm:pb-20">
          <Eyebrow>Careers</Eyebrow>
          <h1 className="max-w-4xl text-4xl leading-[1.04] font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.5rem]">
            Build products <span className="text-primary">people actually use</span>
          </h1>
          <p className="max-w-2xl text-base text-pretty text-muted sm:text-lg">
            We&apos;re a small remote team of designers and developers building products for founders. If you like seeing your
            work go live, you&apos;ll enjoy it here.
          </p>
        </div>
      </section>

      {/* Why you'll like it */}
      <section className="container-x pb-16 sm:pb-20 lg:pb-24">
        <SectionHeading eyebrow="Why you'll like it" title="What working here is like" />

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Remote-first */}
          <article className="flex flex-col gap-6 rounded-[28px] bg-surface p-6 ring-1 ring-line sm:p-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">Remote-first</h2>
              <p className="text-muted">We work remotely. Live wherever suits you.</p>
            </div>
            {/* A team call where everyone joins from a different place */}
            <div aria-hidden className="mt-auto rounded-2xl bg-ink p-2">
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { icon: Home, place: "Home" },
                  { icon: Coffee, place: "Café" },
                  { icon: Building2, place: "Cowork" },
                  { icon: Plane, place: "Travelling" },
                ].map(({ icon: Icon, place }, i) => (
                  <div key={place} className="relative flex h-16 items-center justify-center rounded-xl bg-white/[0.07]">
                    <span
                      className={
                        i === 0
                          ? "flex size-8 items-center justify-center rounded-full bg-primary text-white ring-2 ring-primary/40"
                          : "flex size-8 items-center justify-center rounded-full bg-white/10 text-white/80"
                      }
                    >
                      <Icon className="size-4" />
                    </span>
                    <span className="absolute bottom-1 left-1.5 text-[10px] font-medium text-white/60">{place}</span>
                  </div>
                ))}
              </div>
              <div className="mt-2 flex items-center justify-center gap-2 pb-0.5">
                <span className="flex size-6 items-center justify-center rounded-full bg-white/10 text-white/70">
                  <Mic className="size-3" />
                </span>
                <span className="flex size-6 items-center justify-center rounded-full bg-white/10 text-white/70">
                  <Video className="size-3" />
                </span>
                <span className="h-6 rounded-full bg-primary px-2.5 text-[10px] leading-6 font-semibold text-white">
                  Team call
                </span>
              </div>
            </div>
          </article>

          {/* Launch real products */}
          <article className="flex flex-col gap-6 overflow-clip rounded-[28px] bg-primary-soft p-6 sm:p-8 lg:col-span-2">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">Launch real products</h2>
              <p className="max-w-md text-ink/70">
                We help founders get their MVP live in about 30 days, so what you build reaches real users quickly.
              </p>
            </div>
            <ol aria-hidden className="mt-auto flex flex-wrap items-center gap-2 min-[400px]:flex-nowrap min-[400px]:gap-0">
              {["Idea", "Design", "Build", "Live"].map((stage, i, all) => {
                const last = i === all.length - 1;
                return (
                  <li key={stage} className="flex min-w-0 flex-1 items-center last:flex-none">
                    <span
                      className={
                        last
                          ? "flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-1.5 text-xs font-semibold text-white sm:px-3.5 sm:py-2 sm:text-sm"
                          : "rounded-full bg-white/80 px-2.5 py-1.5 text-xs font-semibold sm:px-3.5 sm:py-2 sm:text-sm"
                      }
                    >
                      {last && <Rocket className="size-3.5" />}
                      {stage}
                    </span>
                    {!last && (
                      <span className="mx-1 hidden h-0.5 min-w-2 flex-1 rounded-full min-[400px]:block sm:mx-2 bg-gradient-to-r from-primary/30 to-primary" />
                    )}
                  </li>
                );
              })}
            </ol>
          </article>

          {/* Different problems */}
          <article className="flex flex-col gap-5 rounded-[28px] bg-surface p-6 ring-1 ring-line sm:p-8 lg:col-span-2">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">Different problems</h2>
              <p className="max-w-md text-muted">The work keeps changing. Recent projects have covered:</p>
            </div>
            <ul className="mt-auto flex flex-wrap gap-2">
              {[...new Set(projects.map((p) => p.category))].map((c) => (
                <li key={c} className="rounded-full bg-background px-4 py-2 font-medium ring-1 ring-line">
                  {c}
                </li>
              ))}
            </ul>
          </article>

          {/* Real ownership */}
          <article className="flex flex-col gap-6 rounded-[28px] bg-surface p-6 ring-1 ring-line sm:p-8">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold">Real ownership</h2>
              <p className="text-muted">We&apos;re a small team, so your ideas actually shape the products and how we work.</p>
            </div>
            <div aria-hidden className="mt-auto flex items-center">
              {[PenTool, Code2, ShieldCheck].map((Icon, i) => (
                <span
                  key={i}
                  className={`flex size-12 items-center justify-center rounded-full border-4 border-surface text-white ${i === 0 ? "bg-ink" : "-ml-3 " + (i === 1 ? "bg-primary-strong" : "bg-primary")}`}
                >
                  <Icon className="size-5" />
                </span>
              ))}
              <span className="-ml-3 flex size-12 items-center justify-center rounded-full border-2 border-dashed border-primary bg-primary-soft text-sm font-bold text-primary-strong">
                You
              </span>
            </div>
          </article>
        </div>
      </section>

      {/* Open roles */}
      <section className="container-x pb-16 sm:pb-20 lg:pb-24">
        <div className="flex flex-col items-center gap-3 rounded-[28px] bg-surface px-6 py-12 text-center ring-1 ring-line sm:py-14">
          <span className="flex items-center gap-2 rounded-full bg-background px-3 py-1.5 text-sm font-medium text-muted ring-1 ring-line">
            <span aria-hidden className="size-2 rounded-full bg-muted/40" />
            Open roles
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">No open roles right now</h2>
          <p className="max-w-md text-muted">Check back here later. New roles will be listed on this page.</p>
        </div>
      </section>
    </>
  );
}
