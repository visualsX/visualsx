import { projects } from "@/lib/site";

export default function ClientMarquee() {
  const names = projects.map((p) => p.name);
  // Repeat so one half always fills the viewport; the animation shifts by exactly 50%.
  const row = [...names, ...names, ...names];

  return (
    <section aria-label="Clients" className="border-y border-line bg-surface/60 py-6">
      <div className="container-x flex flex-col items-center gap-4 md:flex-row md:gap-10">
        <p className="shrink-0 text-sm font-medium text-muted">Products we&apos;ve shipped for</p>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <ul className="flex w-max animate-marquee gap-12">
            {[...row, ...row].map((name, i) => (
              <li
                key={i}
                aria-hidden={i >= names.length}
                className="flex items-center gap-12 text-xl font-bold tracking-tight whitespace-nowrap text-foreground/70"
              >
                {name}
                <span aria-hidden className="size-1.5 rounded-full bg-primary" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
