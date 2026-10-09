import { CalendarDays, Mail } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Tell us about your idea. Book a free 30-minute call or send a brief and we will get back to you quickly.",
  alternates: { canonical: "/contact" },
};

const nextSteps = [
  { title: "We get back to you", body: "With a few questions, or a time to talk." },
  { title: "30-minute discovery call", body: "We go through your idea, users and goals." },
  { title: "Fixed-price proposal", body: "Scope, timeline and cost in writing, a few days after the call." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Tell us about <span className="text-primary">your project</span>
          </>
        }
        description="Fill in the form below, or book a call if you'd rather talk."
      />

      <section className="container-x pb-20 sm:pb-28">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <ContactForm />

          <aside className="flex flex-col gap-6">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 rounded-[28px] bg-ink p-8 text-white transition-transform hover:-translate-y-1"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary">
                <CalendarDays aria-hidden className="size-5" />
              </span>
              <span className="text-2xl font-bold">Book a free call</span>
              <span className="text-white/65">A free 30-minute video call. Pick any time that works for you.</span>
              <span className="font-semibold text-primary group-hover:underline">Open calendar</span>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="group flex items-center gap-4 rounded-[28px] border border-line bg-surface p-6 transition-colors hover:border-primary"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-soft text-primary-strong">
                <Mail aria-hidden className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-muted">Email us directly</span>
                <span className="block truncate font-semibold">{site.email}</span>
              </span>
            </a>

            <div className="rounded-[28px] border border-line bg-surface p-8">
              <h2 className="font-semibold">What happens next</h2>
              <ol className="mt-6 flex flex-col gap-6">
                {nextSteps.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-ink">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block font-semibold">{step.title}</span>
                      <span className="block text-sm text-muted">{step.body}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
