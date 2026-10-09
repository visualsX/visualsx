import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { logoSize } from "@/lib/logo";
import { cn } from "@/lib/utils";

// Bento of project cards: the first project is featured (wide, side-by-side layout on desktop).
export default function ProjectGrid({ projects }) {
  return (
    <ul className="mobile-carousel gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <li key={project.name} className={cn("min-w-0", i === 0 && "md:col-span-2")}>
          <ProjectCard project={project} featured={i === 0} />
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({ project, featured }) {
  const size = logoSize(project.logo, featured ? 72 : 56);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex h-full flex-col overflow-clip rounded-[28px] bg-surface ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgb(20_17_15/0.35)] hover:ring-primary/30",
        featured && "lg:flex-row"
      )}
    >
      {/* Logo stage, tinted with the client's brand colour */}
      <div
        className={cn(
          "relative m-2 flex items-center justify-center overflow-clip rounded-[22px] p-8",
          featured ? "min-h-52 lg:min-h-0 lg:w-[52%]" : "min-h-44"
        )}
        style={{ backgroundColor: project.tint }}
      >
        <div aria-hidden className="bg-dots pointer-events-none absolute inset-0 text-ink/[0.06]" />
        <span className="absolute top-4 left-4 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold backdrop-blur">
          {project.category}
        </span>
        <span className="absolute top-3 right-3 flex size-10 items-center justify-center rounded-full bg-white text-ink shadow-sm transition-all duration-300 group-hover:rotate-45 group-hover:bg-ink group-hover:text-white">
          <ArrowUpRight aria-hidden className="size-4" />
        </span>
        <Image
          src={project.logo.src}
          alt={`${project.name} logo`}
          width={size.width}
          height={size.height}
          style={{ width: size.width, height: size.height }}
          className="relative object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Details */}
      <div className={cn("flex flex-1 flex-col gap-3 p-5 pt-3 sm:p-6 sm:pt-3", featured && "lg:justify-center lg:p-10")}>
        <h3 className={cn("font-bold tracking-tight", featured ? "text-2xl sm:text-3xl" : "text-xl")}>{project.name}</h3>
        <p className={cn("text-muted", featured ? "text-base sm:text-lg" : "line-clamp-3 text-sm sm:text-base")}>
          {project.summary}
        </p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.scope.map((tag) => (
            <li key={tag} className="rounded-full bg-background px-2.5 py-1 text-xs font-medium ring-1 ring-line">
              {tag}
            </li>
          ))}
        </ul>
        {featured && (
          <span className="mt-2 hidden items-center gap-1.5 text-sm font-semibold text-primary-strong lg:inline-flex">
            Visit {project.url.replace(/^https?:\/\/(www\.)?|\/$/g, "")}
            <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        )}
      </div>
      <span className="sr-only">(opens {project.name} in a new tab)</span>
    </a>
  );
}
