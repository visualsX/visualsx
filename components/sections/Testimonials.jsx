import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/site";

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

export default function Testimonials() {
  return (
    <section className="container-x section-y">
      <SectionHeading eyebrow="Testimonials" title="What clients say" />

      <ul className="mobile-carousel mt-10 gap-4 md:grid md:grid-cols-2 lg:gap-6">
        {testimonials.map((t) => (
          <li key={t.name}>
            <figure className="flex h-full flex-col gap-8 rounded-[28px] border border-line bg-surface p-8">
              <Quote aria-hidden className="size-8 fill-primary text-primary" />
              <blockquote className="text-lg leading-relaxed text-pretty">{t.quote}</blockquote>
              <figcaption className="mt-auto flex items-center gap-4">
                <span aria-hidden className="flex size-12 items-center justify-center rounded-full bg-primary-soft font-bold text-primary-strong">
                  {initials(t.name)}
                </span>
                <span>
                  <span className="block font-semibold">{t.name}</span>
                  <span className="block text-sm text-muted">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
