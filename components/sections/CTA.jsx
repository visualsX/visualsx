import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Check, PenLine } from "lucide-react";
import { founders, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const talkingPoints = ["Your idea and who it's for", "What the first version needs", "Rough timeline and budget"];

export default function CTA({
  title = (
    <>
      Got an idea you want to <span className="text-primary">build?</span>
    </>
  ),
  description = "Book a free 30-minute call. We'll talk it through, and if it's a good fit you'll get a fixed-price proposal a few days later.",
}) {
  return (
    <section className="container-x section-y">
      <div className="relative overflow-clip rounded-[36px] bg-surface shadow-[0_30px_80px_-50px_rgb(20_17_15/0.35)] ring-1 ring-line">
        <div aria-hidden className="bg-dots pointer-events-none absolute inset-0 text-ink/[0.04]" />
        <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 size-[28rem] rounded-full bg-primary/10 blur-3xl" />

        <div className="relative grid gap-10 px-5 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-16 lg:px-14">
          <div className="flex min-w-0 flex-col items-start gap-6">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {founders.map((f) => (
                  <Image
                    key={f.name}
                    src={f.image}
                    alt=""
                    width={44}
                    height={44}
                    className="size-11 rounded-full object-cover ring-4 ring-surface"
                  />
                ))}
              </div>
              <p className="text-sm font-semibold text-muted">You&apos;ll talk to a founder</p>
            </div>

            <h2 className="text-3xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl">{title}</h2>
            <p className="max-w-xl text-base text-muted sm:text-lg">{description}</p>

            <ul className="flex flex-wrap gap-2">
              {talkingPoints.map((item) => (
                <li key={item} className="flex items-center gap-1.5 rounded-full bg-background px-3 py-1.5 text-sm font-medium ring-1 ring-line">
                  <Check aria-hidden className="size-3.5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex min-w-0 flex-col gap-3">
            <ActionTile href={site.bookingUrl} icon={CalendarDays} title="Book a free call" meta="30 min · Video call" dark />
            <ActionTile href="/contact" icon={PenLine} title="Send a brief" meta="Tell us about your project in writing" />
            <p className="mt-1 text-center text-sm text-muted">
              or email{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-foreground underline decoration-primary underline-offset-4">
                {site.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ActionTile({ href, icon: Icon, title, meta, dark = false }) {
  const external = href.startsWith("http");
  return (
    <Link
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className={cn(
        "group flex items-center gap-4 rounded-[22px] p-4 transition-all duration-300 hover:-translate-y-0.5 sm:p-5",
        dark
          ? "bg-ink text-white shadow-[0_20px_40px_-20px_rgb(20_17_15/0.6)] hover:bg-ink-2"
          : "bg-background ring-1 ring-line hover:ring-primary/40"
      )}
    >
      <span
        className={cn(
          "flex size-12 shrink-0 items-center justify-center rounded-2xl",
          dark ? "bg-primary text-white" : "bg-primary-soft text-primary-strong"
        )}
      >
        <Icon aria-hidden className="size-5" />
      </span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="text-lg font-bold">{title}</span>
        <span className={cn("text-sm", dark ? "text-white/60" : "text-muted")}>{meta}</span>
      </span>
      <span
        className={cn(
          "flex size-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:rotate-45",
          dark ? "bg-white/10 group-hover:bg-primary" : "ring-1 ring-line group-hover:bg-ink group-hover:text-white group-hover:ring-ink"
        )}
      >
        <ArrowUpRight aria-hidden className="size-4" />
      </span>
    </Link>
  );
}
