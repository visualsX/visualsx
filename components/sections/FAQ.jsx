import Image from "next/image";
import { Plus } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs, founders, site } from "@/lib/site";

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="container-x section-y">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div className="flex min-w-0 flex-col gap-4 lg:sticky lg:gap-8 lg:top-28 lg:self-start">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />

          <p className="text-muted lg:hidden">
            Something else on your mind?{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-foreground underline decoration-primary underline-offset-4">
              Email us
            </a>
          </p>

          <div className="relative hidden overflow-clip rounded-[28px] bg-ink p-7 text-white lg:block">
            <div aria-hidden className="bg-dots pointer-events-none absolute inset-0 text-white/[0.06]" />
            <div aria-hidden className="pointer-events-none absolute -right-16 -bottom-16 size-48 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative flex flex-col gap-5">
              <div className="flex -space-x-3">
                {founders.map((f) => (
                  <Image
                    key={f.name}
                    src={f.image}
                    alt=""
                    width={48}
                    height={48}
                    className="size-12 rounded-full object-cover ring-4 ring-ink"
                  />
                ))}
              </div>
              <div>
                <p className="text-xl font-bold">Still have a question?</p>
                <p className="mt-1 text-white/60">Ask us directly. You&apos;ll hear back from one of the founders.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href={site.bookingUrl} arrow>
                  Book a call
                </Button>
                <Button href={`mailto:${site.email}`} variant="ghostLight">
                  Email us
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Accordion type="single" collapsible className="flex min-w-0 flex-col gap-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`faq-${i}`}
              className="rounded-[22px] border border-line bg-surface px-5 transition-colors last:border-b data-[state=open]:border-primary/40 data-[state=open]:shadow-[0_20px_40px_-28px_rgb(249_115_22/0.5)] sm:px-7"
            >
              <AccordionTrigger className="group items-center gap-4 py-5 text-base font-semibold hover:no-underline sm:text-lg [&>svg]:hidden">
                <span className="font-mono text-sm text-muted transition-colors group-data-[state=open]:text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">{faq.q}</span>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-300 group-data-[state=open]:rotate-45 group-data-[state=open]:border-primary group-data-[state=open]:bg-primary group-data-[state=open]:text-white">
                  <Plus aria-hidden className="size-4" />
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-9 text-base leading-relaxed text-muted sm:pr-12">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
