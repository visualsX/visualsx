"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Sticky tab bar for the services page. Highlights the section being read, and keeps
// that tab visible in the horizontal strip on mobile.
export default function ServiceTabs({ items }) {
  const [active, setActive] = useState(items[0]?.slug);
  const stripRef = useRef(null);

  useEffect(() => {
    const sections = items.map((item) => document.getElementById(item.slug)).filter(Boolean);
    let frame;
    // Active = the last section whose top has passed the upper third of the viewport.
    const update = () => {
      frame = null;
      const line = window.innerHeight / 3;
      const current = sections.filter((section) => section.getBoundingClientRect().top <= line).pop() ?? sections[0];
      if (current) setActive(current.id);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [items]);

  useEffect(() => {
    const strip = stripRef.current;
    const tab = strip?.querySelector(`[data-slug="${active}"]`);
    if (!strip || !tab) return;
    strip.scrollTo({ left: tab.offsetLeft - (strip.clientWidth - tab.clientWidth) / 2, behavior: "smooth" });
  }, [active]);

  return (
    <nav aria-label="Services" className="sticky top-[68px] z-40 border-b border-line bg-background/85 backdrop-blur-xl">
      <div
        ref={stripRef}
        className="container-x flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <a
            key={item.slug}
            href={`#${item.slug}`}
            data-slug={item.slug}
            onClick={() => setActive(item.slug)}
            aria-current={active === item.slug ? "true" : undefined}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors",
              active === item.slug
                ? "border-ink bg-ink text-white"
                : "border-line bg-surface hover:border-primary hover:text-primary-strong"
            )}
          >
            {item.title}
          </a>
        ))}
      </div>
    </nav>
  );
}
