"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { services, site } from "@/lib/site";
import { cn } from "@/lib/utils";

const budgets = ["Under $5k", "$5k to $15k", "$15k to $40k", "$40k+", "Not sure yet"];
const timelines = ["ASAP", "Within 1 month", "1 to 3 months", "Just exploring"];

const fieldClass =
  "w-full rounded-2xl border border-line bg-background px-4 py-3.5 text-base transition-colors placeholder:text-muted/70 focus:border-primary focus:outline-none";

export default function ContactForm() {
  const [selected, setSelected] = useState([]);

  const toggle = (title) => setSelected((prev) => (prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]));

  // No backend: compose the brief into the visitor's email client.
  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const details = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      data.get("company") && `Company: ${data.get("company")}`,
      selected.length > 0 && `Interested in: ${selected.join(", ")}`,
      `Budget: ${data.get("budget")}`,
      `Timeline: ${data.get("timeline")}`,
    ].filter(Boolean);
    const body = `${details.join("\n")}\n\n${data.get("message")}`;
    const subject = `Project brief from ${data.get("name")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6 rounded-[28px] border border-line bg-surface p-6 sm:p-10">
      <fieldset className="flex flex-col gap-3">
        <legend className="mb-3 font-semibold">What can we help with?</legend>
        <div className="flex flex-wrap gap-2">
          {services.map((s) => {
            const active = selected.includes(s.title);
            return (
              <button
                key={s.slug}
                type="button"
                aria-pressed={active}
                onClick={() => toggle(s.title)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active ? "border-ink bg-ink text-white" : "border-line hover:border-foreground/30"
                )}
              >
                {s.title}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" htmlFor="name">
          <input id="name" name="name" required autoComplete="name" className={fieldClass} placeholder="Jane Doe" />
        </Field>
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="jane@startup.com" />
        </Field>
        <Field label="Company (optional)" htmlFor="company">
          <input id="company" name="company" autoComplete="organization" className={fieldClass} placeholder="Startup Inc." />
        </Field>
        <Field label="Budget" htmlFor="budget">
          <select id="budget" name="budget" className={fieldClass} defaultValue={budgets[4]}>
            {budgets.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </Field>
        <Field label="Timeline" htmlFor="timeline" className="sm:col-span-2">
          <select id="timeline" name="timeline" className={fieldClass} defaultValue={timelines[1]}>
            {timelines.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
        <Field label="Tell us about your idea" htmlFor="message" className="sm:col-span-2">
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={cn(fieldClass, "resize-y")}
            placeholder="What are you building, who is it for, and where are you today?"
          />
        </Field>
      </div>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">This opens your email app with the brief filled in.</p>
        <button
          type="submit"
          className="group inline-flex h-13 items-center gap-2 rounded-full bg-ink px-7 font-semibold text-white transition-colors hover:bg-ink-2"
        >
          Send brief
          <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </form>
  );
}

function Field({ label, htmlFor, className, children }) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium">
        {label}
      </label>
      {children}
    </div>
  );
}
