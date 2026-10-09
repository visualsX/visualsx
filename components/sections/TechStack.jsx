import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { stackLayers } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function TechStack() {
  return (
    <section className="container-x section-y">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div className="flex min-w-0 flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Our stack"
            title="Tools we use"
            description="Well-known tools that plenty of developers know, so you're never stuck with code nobody else can work on."
          />
          <p className="text-sm text-muted">
            <span className="font-semibold text-foreground">{stackLayers.reduce((n, l) => n + l.tools.length, 0)} tools</span>{" "}
            across {stackLayers.length} layers of a typical product.
          </p>
        </div>

        <ol className="relative flex min-w-0 flex-col">
          {stackLayers.map((layer, i) => (
            <li key={layer.layer} className="relative flex gap-4 pb-4 last:pb-0 sm:gap-6">
              {/* Connector line between layers */}
              <div aria-hidden className="relative hidden flex-col items-center sm:flex">
                <span
                  className={cn(
                    "z-10 flex size-10 shrink-0 items-center justify-center rounded-full font-mono text-xs font-semibold",
                    i === 0 ? "bg-primary text-white" : "border border-line bg-surface text-muted"
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {i < stackLayers.length - 1 && <span className="w-px flex-1 bg-gradient-to-b from-primary/50 to-line" />}
              </div>

              <div className="mb-2 flex min-w-0 flex-1 flex-col gap-5 rounded-[22px] border border-line bg-surface p-5 transition-colors duration-300 hover:border-primary/40 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <div className="min-w-0 sm:max-w-44">
                  <h3 className="text-lg font-bold">{layer.layer}</h3>
                  <p className="text-sm text-muted">{layer.note}</p>
                </div>
                <ul className="flex flex-wrap gap-3 sm:justify-end">
                  {layer.tools.map((tool) => (
                    <li key={tool.name} className="group/tool flex w-16 flex-col items-center gap-2 text-center sm:w-[4.5rem]">
                      <span className="flex size-14 items-center justify-center rounded-2xl bg-background ring-1 ring-line transition-all duration-300 group-hover/tool:-translate-y-1 group-hover/tool:bg-surface group-hover/tool:shadow-[0_12px_24px_-12px_rgb(20_17_15/0.3)] group-hover/tool:ring-primary/40">
                        <Image src={`/tech/${tool.icon}.svg`} alt="" width={28} height={28} className="size-7 object-contain" />
                      </span>
                      <span className="text-xs leading-tight font-medium">{tool.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
