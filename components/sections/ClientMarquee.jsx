import Image from "next/image";
import { logoSize } from "@/lib/logo";
import { projects } from "@/lib/site";

function ClientLogo({ project, hidden }) {
  const { logo, name } = project;
  const size = logoSize(logo);
  return (
    <span className="flex h-12 items-center opacity-80 transition-opacity duration-300 hover:opacity-100">
      <Image
        src={logo.src}
        alt={hidden ? "" : name}
        width={size.width}
        height={size.height}
        style={{ width: size.width, height: size.height }}
        className="object-contain"
      />
    </span>
  );
}

export default function ClientMarquee() {
  // Repeat so one half always fills the viewport; the animation shifts by exactly 50%.
  const row = [...projects, ...projects, ...projects];

  return (
    <section aria-label="Clients" className="border-y border-line bg-surface/60 py-6">
      <div className="container-x flex flex-col items-center gap-4 md:flex-row md:gap-10">
        <p className="shrink-0 text-sm font-medium text-muted">Trusted by teams at</p>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <ul className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
            {[...row, ...row].map((project, i) => {
              const hidden = i >= projects.length;
              return (
                <li key={i} aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
                  <ClientLogo project={project} hidden={hidden} />
                  {/* Separator after every logo keeps the spacing even across the loop */}
                  <span aria-hidden className="mx-8 h-7 w-px bg-gradient-to-b from-transparent via-ink/15 to-transparent sm:mx-10" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
