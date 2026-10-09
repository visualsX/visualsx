import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Rocket, Video } from "lucide-react";
import Button from "@/components/ui/Button";
import { founders, projects, site } from "@/lib/site";
import { cn } from "@/lib/utils";

// Two lines on every screen; each line stays on one row and the size scales with width.
const lines = [
  { text: "Your idea," },
  { text: "live", accent: true, rest: " in 30 days." },
];

export default function Hero() {
  return (
    <section className="relative -mt-[68px] overflow-clip pt-[68px] sm:-mt-[76px] sm:pt-[76px]">
      {/* Backdrop: dotted grid, warm glow and orbit rings behind the visual */}
      <div aria-hidden className="bg-dots pointer-events-none absolute inset-0 text-ink/[0.07] [mask-image:radial-gradient(ellipse_at_70%_40%,black_20%,transparent_70%)]" />
      <div aria-hidden className="pointer-events-none absolute top-[10%] right-[-15%] size-[700px] rounded-full bg-primary/25 blur-[140px] lg:right-[-5%]" />

      <div className="container-x relative grid items-center gap-14 pt-8 pb-16 sm:pt-12 lg:min-h-[calc(100svh-76px)] lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-20">
        <div className="flex min-w-0 flex-col items-start gap-8">
          <Link
            href="/work"
            className="animate-fade-up group inline-flex items-center gap-3 rounded-full border border-line bg-surface/80 py-1.5 pr-1.5 pl-3 text-sm font-medium backdrop-blur transition-colors hover:border-primary/40"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Product studio for founders
            <span className="flex items-center gap-1 rounded-full bg-ink px-2.5 py-1 text-xs text-white">
              Our work
              <ArrowRight aria-hidden className="size-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>

          <h1 className="text-[clamp(2.4rem,11vw,5.75rem)] leading-[0.95] font-bold tracking-[-0.04em] lg:text-[clamp(3.5rem,5.6vw,5.5rem)]">
            {lines.map((line, i) => (
              <span key={line.text} className="-mb-[0.1em] block overflow-clip pb-[0.1em] whitespace-nowrap">
                <span className="animate-rise block" style={{ animationDelay: `${120 + i * 110}ms` }}>
                  {line.accent ? (
                    <>
                      <span className="relative inline-block text-primary">
                        {line.text}
                        <svg
                          aria-hidden
                          viewBox="0 0 200 24"
                          preserveAspectRatio="none"
                          className="absolute -bottom-[0.06em] left-0 h-[0.16em] w-full text-primary"
                        >
                          <path
                            d="M3 17 C 45 5, 120 3, 197 13"
                            pathLength="1"
                            strokeDasharray="1"
                            className="animate-draw"
                            style={{ animationDelay: "800ms" }}
                            stroke="currentColor"
                            strokeWidth="6"
                            fill="none"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                      {line.rest}
                    </>
                  ) : (
                    line.text
                  )}
                </span>
              </span>
            ))}
          </h1>

          <p className="animate-fade-up max-w-lg text-lg text-pretty text-muted sm:text-xl" style={{ animationDelay: "450ms" }}>
            {site.description}
          </p>

          <div className="animate-fade-up flex w-full flex-col gap-3 sm:w-auto sm:flex-row" style={{ animationDelay: "550ms" }}>
            <Button href={site.bookingUrl} size="lg" arrow>
              Book a free call
            </Button>
            <Button href="/work" variant="outline" size="lg">
              See our work
            </Button>
          </div>

          <div
            className="animate-fade-up flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-line pt-6 text-sm"
            style={{ animationDelay: "650ms" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {founders.map((f) => (
                  <Image
                    key={f.name}
                    src={f.image}
                    alt=""
                    width={36}
                    height={36}
                    className="size-9 rounded-full object-cover ring-[3px] ring-background"
                  />
                ))}
              </div>
              <p className="leading-tight">
                <span className="block font-semibold">Talk to the founders</span>
                <span className="text-muted">No sales team in between</span>
              </p>
            </div>
            <span aria-hidden className="hidden h-8 w-px bg-line sm:block" />
            <p className="leading-tight">
              <span className="block font-semibold">{projects.length} products shipped</span>
              <span className="text-muted">Across 3 countries</span>
            </p>
          </div>
        </div>

        <BuildScene />
      </div>
    </section>
  );
}

/* A product coming together: dashboard, phone, MVP progress, demo call and deploy notice */
function BuildScene() {
  return (
    <div aria-hidden className="animate-fade-up relative mx-auto aspect-[1/1] w-full max-w-[560px] lg:mr-0" style={{ animationDelay: "350ms" }}>
      {/* Orbit rings */}
      <div className="absolute inset-[4%] rounded-full border border-dashed border-ink/10" />
      <div className="absolute inset-[18%] rounded-full border border-ink/[0.07]" />
      <div className="animate-spin-slow absolute inset-[4%]">
        <span className="absolute top-1/2 -left-1.5 size-3 rounded-full bg-primary shadow-[0_0_0_6px_rgb(249_115_22/0.15)]" />
      </div>

      {/* Dashboard */}
      <Float className="top-[20%] left-[8%] w-[84%]" delay={0}>
        <div className="-rotate-2 overflow-clip rounded-2xl bg-surface shadow-[0_40px_80px_-30px_rgb(20_17_15/0.45)] ring-1 ring-line">
          <div className="flex items-center gap-1.5 border-b border-line px-3 py-2.5">
            <span className="size-2 rounded-full bg-[#ff5f57]" />
            <span className="size-2 rounded-full bg-[#febc2e]" />
            <span className="size-2 rounded-full bg-[#28c840]" />
            <span className="mx-auto flex items-center gap-1.5 rounded-full bg-background px-3 py-0.5 text-[10px] text-muted">
              <span className="size-1.5 rounded-full bg-primary" />
              yourproduct.com
            </span>
          </div>
          <div className="flex gap-3 p-3 sm:gap-4 sm:p-4">
            <div className="hidden w-14 flex-col gap-2 sm:flex">
              <span className="mb-1 size-5 rounded-md bg-ink" />
              <span className="h-2 rounded bg-primary" />
              <span className="h-2 rounded bg-ink/10" />
              <span className="h-2 rounded bg-ink/10" />
              <span className="h-2 rounded bg-ink/10" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="h-2.5 w-24 rounded bg-ink" />
                <span className="h-5 w-14 rounded-full bg-primary" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {["Revenue", "Users", "Orders"].map((label, i) => (
                  <span key={label} className={cn("flex flex-col gap-1 rounded-lg p-2", i === 0 ? "bg-ink text-white" : "bg-background")}>
                    <span className={cn("text-[8px] sm:text-[9px]", i === 0 ? "text-white/60" : "text-muted")}>{label}</span>
                    <span className="h-2 w-3/4 rounded bg-current opacity-80" />
                  </span>
                ))}
              </div>
              <svg viewBox="0 0 300 90" className="h-auto w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="hero-area" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 75 C 40 70, 60 50, 100 55 S 160 30, 200 35 S 260 12, 300 8 L 300 90 L 0 90 Z" fill="url(#hero-area)" />
                <path
                  d="M0 75 C 40 70, 60 50, 100 55 S 160 30, 200 35 S 260 12, 300 8"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  pathLength="1"
                  strokeDasharray="1"
                  className="animate-draw"
                  style={{ animationDelay: "900ms", animationDuration: "1.8s" }}
                />
                <circle cx="300" cy="8" r="5" fill="var(--primary)" />
              </svg>
              <div className="flex flex-col gap-1.5">
                {[0.9, 0.7, 0.8].map((w, i) => (
                  <span key={i} className="flex items-center gap-2">
                    <span className="size-3 rounded-full bg-primary-soft" />
                    <span className="h-1.5 rounded bg-ink/10" style={{ width: `${w * 100}%` }} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Float>

      {/* MVP progress */}
      <Float className="top-[3%] right-0 w-[52%] sm:w-[46%]" delay={1.2}>
        <div className="rotate-3 rounded-2xl bg-ink p-3 text-white shadow-2xl sm:p-4">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[9px] font-semibold tracking-[0.15em] text-white/50 uppercase sm:text-[10px]">Your MVP</span>
            <span className="rounded-full bg-primary px-2 py-0.5 text-[9px] font-bold text-ink sm:text-[10px]">Day 21/30</span>
          </div>
          <p className="mt-2 text-xs font-bold sm:text-sm">Building · on schedule</p>
          <div className="mt-2 h-1.5 overflow-clip rounded-full bg-white/10">
            <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-primary/60 to-primary" />
          </div>
          <div className="mt-2.5 flex gap-1">
            {Array.from({ length: 10 }, (_, i) => (
              <span key={i} className={cn("h-1 flex-1 rounded-full", i < 7 ? "bg-primary" : "bg-white/15")} />
            ))}
          </div>
        </div>
      </Float>

      {/* Demo call */}
      <Float className="top-[6%] left-0 hidden sm:block" delay={2.4}>
        <div className="-rotate-3 flex items-center gap-2.5 rounded-2xl bg-surface py-2 pr-3.5 pl-2 shadow-xl ring-1 ring-line">
          <span className="flex size-8 items-center justify-center rounded-xl bg-primary-soft text-primary-strong">
            <Video className="size-4" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-xs font-semibold">Demo call</span>
            <span className="text-[10px] text-muted">Friday · 30 min</span>
          </span>
          <span className="ml-1 flex -space-x-2">
            {founders.map((f) => (
              <Image key={f.name} src={f.image} alt="" width={24} height={24} className="size-6 rounded-full object-cover ring-2 ring-surface" />
            ))}
          </span>
        </div>
      </Float>

      {/* Phone */}
      <Float className="bottom-[4%] left-[2%] w-[30%] sm:w-[27%]" delay={0.8}>
        <div className="relative -rotate-6 rounded-[22px] bg-ink p-1 shadow-2xl sm:rounded-[26px] sm:p-1.5">
          <div className="flex flex-col gap-1.5 rounded-[18px] bg-surface p-2 pt-4 sm:gap-2 sm:rounded-[21px] sm:p-2.5 sm:pt-5">
            <span className="absolute top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-ink sm:top-3 sm:w-10" />
            <span className="h-2 w-1/2 rounded bg-ink" />
            <span className="flex aspect-[4/3] items-end rounded-lg bg-gradient-to-br from-primary to-primary-strong p-1.5">
              <span className="h-1.5 w-1/2 rounded bg-white/80" />
            </span>
            {[0, 1].map((i) => (
              <span key={i} className="flex items-center gap-1.5 rounded-md bg-background p-1">
                <span className="size-3 rounded bg-primary-soft sm:size-4" />
                <span className="h-1.5 flex-1 rounded bg-ink/10" />
              </span>
            ))}
            <span className="mt-0.5 h-5 rounded-full bg-ink sm:h-6" />
          </div>
        </div>
      </Float>

      {/* Deploy notice */}
      <Float className="right-[2%] bottom-[10%]" delay={1.8}>
        <div className="rotate-2 flex items-center gap-2.5 rounded-2xl bg-surface py-2.5 pr-4 pl-2.5 shadow-xl ring-1 ring-line">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-white">
            <Rocket className="size-4" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="flex items-center gap-1 text-xs font-semibold">
              Deployed to production
              <Check className="size-3.5 text-primary" />
            </span>
            <span className="text-[10px] text-muted">yourproduct.com is live</span>
          </span>
        </div>
      </Float>
    </div>
  );
}

function Float({ className, delay = 0, children }) {
  return (
    <div className={cn("animate-float absolute", className)} style={{ animationDelay: `-${delay}s` }}>
      {children}
    </div>
  );
}
