import { Eyebrow } from "@/components/ui/SectionHeading";

export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="bg-dots pointer-events-none absolute inset-0 text-ink/[0.07] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_65%)]" />
      <div aria-hidden className="pointer-events-none absolute -top-48 left-1/2 size-[480px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
      <div className="container-x relative flex flex-col items-start gap-6 pt-12 pb-16 sm:pt-20 sm:pb-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-4xl text-5xl leading-[1] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">{title}</h1>
        {description && <p className="max-w-2xl text-lg text-pretty text-muted sm:text-xl">{description}</p>}
        {children}
      </div>
    </section>
  );
}
