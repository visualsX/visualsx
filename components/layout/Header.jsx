"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const mobileLinks = [{ label: "Home", href: "/" }, ...nav, { label: "Contact", href: "/contact" }];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);
  // At the top of the page the bar sits flat; once scrolled it becomes a floating pill.
  const floating = scrolled && !open;

  return (
    <header className="sticky top-0 z-50 pt-3">
      {/* The bar keeps one size; the pill and the items move with transforms (see .site-bar in globals.css). */}
      <div
        data-floating={floating || undefined}
        className="site-bar relative z-50 mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-4 sm:h-16"
      >
        <span
          aria-hidden
          className="site-bar-pill rounded-full bg-surface/75 shadow-[0_12px_40px_-12px_rgb(20_17_15/0.25)] ring-1 ring-line backdrop-blur-md"
        />

        <Link
          href="/"
          onClick={() => setOpen(false)}
          className={cn(
            "site-bar-start group flex shrink-0 items-center gap-2 text-xl font-bold tracking-tight",
            open && "text-white"
          )}
        >
          <Image
            src={open ? "/logo/white-logo.svg" : "/logo/logo.svg"}
            alt=""
            width={28}
            height={28}
            className="size-7 transition-transform duration-700 group-hover:rotate-180"
            priority
          />
          {site.name}
          <span className="sr-only">home</span>
        </Link>

        <nav aria-label="Main" className="site-bar-mid hidden items-center rounded-full p-1 md:flex">
          {nav.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                  active ? "bg-ink text-white" : "text-muted hover:bg-ink/5 hover:text-foreground"
                )}
              >
                {item.label}
                {active && <span aria-hidden className="absolute -bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-primary" />}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="site-bar-end group hidden h-11 shrink-0 items-center gap-3 rounded-full bg-ink py-1 pr-1 pl-5 text-sm font-semibold text-white hover:bg-ink-2 md:flex"
        >
          Start a project
          <span className="flex size-9 items-center justify-center rounded-full bg-primary transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight aria-hidden className="size-4" />
          </span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className={cn(
            "site-bar-end relative flex size-11 items-center justify-center rounded-full md:hidden",
            open ? "bg-white/10 text-white" : "bg-ink text-white"
          )}
        >
          <span aria-hidden className="relative block h-3 w-5">
            <span
              className={cn(
                "absolute left-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300",
                open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 block h-0.5 rounded-full bg-current transition-all duration-300",
                open ? "top-1/2 w-5 -translate-y-1/2 -rotate-45" : "bottom-0 w-3"
              )}
            />
          </span>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink text-white md:hidden">
          <div aria-hidden className="bg-dots pointer-events-none absolute inset-0 text-white/[0.05]" />
          <div aria-hidden className="pointer-events-none absolute -right-24 -bottom-24 size-96 glow scale-150 opacity-30" />

          <nav aria-label="Mobile" className="relative flex flex-1 flex-col px-6 pt-28 pb-8">
            <ul className="flex flex-col">
              {mobileLinks.map((item, i) => {
                const active = pathname === item.href;
                return (
                  <li key={item.href} className="animate-fade-up border-b border-white/10" style={{ animationDelay: `${i * 60}ms` }}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className="flex items-baseline gap-4 py-4"
                    >
                      <span className="font-mono text-xs text-white/40">{String(i + 1).padStart(2, "0")}</span>
                      <span className={cn("text-4xl font-bold tracking-tight", active && "text-primary")}>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="animate-fade-up mt-auto flex flex-col gap-4 pt-10" style={{ animationDelay: "420ms" }}>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 items-center justify-between rounded-full bg-primary pr-2 pl-6 font-semibold text-ink"
              >
                Book a free call
                <span className="flex size-10 items-center justify-center rounded-full bg-ink text-white">
                  <ArrowUpRight aria-hidden className="size-4" />
                </span>
              </a>
              <a href={`mailto:${site.email}`} className="text-center text-white/60">
                {site.email}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
