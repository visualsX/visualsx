import { cn } from "@/lib/utils";

export function Eyebrow({ children, className, tone = "light" }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase",
        tone === "dark" ? "text-white/60" : "text-muted",
        className
      )}
    >
      <span aria-hidden className="size-1.5 rounded-full bg-primary" />
      {children}
    </p>
  );
}

export default function SectionHeading({ eyebrow, title, description, align = "left", tone = "light", className, as: Tag = "h2" }) {
  return (
    <div className={cn("flex max-w-3xl flex-col gap-4", align === "center" && "mx-auto items-center text-center", className)}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <Tag
        className={cn(
          "text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl",
          tone === "dark" ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </Tag>
      {description && (
        <p className={cn("max-w-2xl text-lg text-pretty", tone === "dark" ? "text-white/65" : "text-muted")}>{description}</p>
      )}
    </div>
  );
}
