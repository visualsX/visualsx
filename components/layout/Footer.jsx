import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { nav, services, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-clip bg-ink text-white">
      <div aria-hidden className="bg-dots pointer-events-none absolute inset-0 text-white/[0.05]" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 size-[640px] -translate-x-1/2 rounded-full bg-primary/20 blur-[140px]"
      />

      {/* Links */}
      <div className="container-x relative grid grid-cols-2 gap-10 pt-16 pb-12 sm:grid-cols-[1.4fr_1fr_1fr_1fr] sm:pt-20">
        <div className="col-span-2 flex flex-col gap-5 sm:col-span-1">
          <Link href="/" className="group flex w-fit items-center gap-2 text-xl font-bold">
            <Image
              src="/logo/white-logo.svg"
              alt=""
              width={28}
              height={28}
              className="size-7 transition-transform duration-700 group-hover:rotate-180"
            />
            {site.name}
          </Link>
          <p className="max-w-xs text-white/55">
            A small product studio that designs and builds web and mobile apps for founders.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="group inline-flex w-fit items-center gap-1.5 font-semibold text-white transition-colors hover:text-primary"
          >
            {site.email}
            <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:rotate-45" />
          </a>
          <div className="flex gap-2">
            <SocialLink href={site.socials.linkedin} label="LinkedIn" icon={Linkedin} />
            <SocialLink href={site.socials.github} label="GitHub" icon={Github} />
          </div>
        </div>

        <FooterColumn title="Company" links={[{ label: "Home", href: "/" }, ...nav, { label: "Contact", href: "/contact" }]} />
        <FooterColumn
          className="hidden sm:block"
          title="Services"
          links={services.map((s) => ({ label: s.title, href: `/services#${s.slug}` }))}
        />
        <FooterColumn
          title="Connect"
          links={[
            { label: "Book a call", href: site.bookingUrl },
            { label: "Send a brief", href: "/contact" },
            { label: "LinkedIn", href: site.socials.linkedin },
            { label: "GitHub", href: site.socials.github },
          ]}
        />
      </div>

      {/* Bottom bar */}
      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 py-6 text-sm text-white/45 sm:flex-row sm:items-center">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 py-1.5 pr-1.5 pl-4 text-white/70 transition-colors hover:border-white/30 hover:text-white"
          >
            Back to top
            <span className="flex size-7 items-center justify-center rounded-full bg-white/10 transition-transform group-hover:-translate-y-0.5">
              <ArrowUp aria-hidden className="size-3.5" />
            </span>
          </a>
        </div>
      </div>

      {/* Oversized wordmark, stretched to exactly the content width and cut off by the bottom edge */}
      <div aria-hidden className="container-x relative select-none">
        <svg viewBox="0 18 1000 200" className="block h-auto w-full">
          <defs>
            <linearGradient id="footer-wordmark" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="0.14" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          <text
            x="0"
            y="232"
            textLength="988"
            lengthAdjust="spacingAndGlyphs"
            fill="url(#footer-wordmark)"
            className="font-sans text-[262px] font-bold tracking-[-0.06em]"
          >
            visualsX
          </text>
        </svg>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex size-11 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-primary hover:bg-primary"
    >
      <Icon aria-hidden className="size-[18px]" />
    </a>
  );
}

function FooterColumn({ title, links, className }) {
  return (
    <div className={className}>
      <h2 className="text-xs font-semibold tracking-[0.18em] text-white/40 uppercase">{title}</h2>
      <ul className="mt-5 flex flex-col gap-3">
        {links.map((link) => {
          const external = link.href.startsWith("http");
          return (
            <li key={link.label}>
              <Link
                href={link.href}
                {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                className="group inline-flex items-center gap-1 text-white/70 transition-colors hover:text-white"
              >
                {link.label}
                {external && (
                  <ArrowUpRight aria-hidden className="size-3.5 opacity-50 transition-opacity group-hover:opacity-100" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
