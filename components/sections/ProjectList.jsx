import { ArrowUpRight } from "lucide-react";

export default function ProjectList({ projects }) {
  return (
    <ul className="border-t border-line">
      {projects.map((project, i) => (
        <li key={project.name} className="border-b border-line">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative -mx-5 grid gap-4 px-5 py-6 transition-colors duration-300 hover:bg-surface sm:-mx-6 sm:px-6 lg:grid-cols-[3rem_1fr_1.2fr_auto] lg:items-center lg:gap-10"
          >
            <span className="font-mono text-sm text-muted">0{i + 1}</span>

            <div className="flex flex-col gap-1">
              <h3 className="text-3xl font-bold tracking-tight transition-colors duration-300 group-hover:text-primary sm:text-4xl">
                {project.name}
              </h3>
              <p className="text-sm font-medium text-muted">{project.category}</p>
            </div>

            <div className="hidden flex-col gap-3 sm:flex">
              <p className="text-muted">{project.summary}</p>
              <ul className="flex flex-wrap gap-2">
                {project.scope.map((tag) => (
                  <li key={tag} className="rounded-full border border-line px-3 py-1 text-xs font-medium">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <span className="absolute top-6 right-5 flex size-11 items-center justify-center rounded-full border border-line transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white sm:right-6 lg:static">
              <ArrowUpRight aria-hidden className="size-5 transition-transform duration-300 group-hover:rotate-45" />
            </span>
            <span className="sr-only">(opens {project.name} in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
