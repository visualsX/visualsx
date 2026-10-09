import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-primary text-white hover:bg-primary-strong shadow-[0_8px_24px_-8px_var(--primary)]",
  dark: "bg-ink text-white hover:bg-ink-2",
  outline: "border border-line bg-surface text-foreground hover:border-foreground/30",
  light: "bg-white text-ink hover:bg-white/90",
  ghostLight: "border border-white/20 text-white hover:bg-white/10",
};

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-7 text-base",
};

export default function Button({ href, variant = "primary", size = "md", arrow = false, className, children, ...props }) {
  const isExternal = /^(https?:|mailto:)/.test(href);
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-200 active:scale-[0.98]",
    variants[variant],
    sizes[size],
    className
  );
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowUpRight
          aria-hidden
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  if (isExternal) {
    return (
      <a href={href} className={classes} {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })} {...props}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  );
}
