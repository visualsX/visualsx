import React from "react";
import LogoBadge from "../common/LogoBadge";

export default function ServicesHero() {
  return (
    <section className="flex flex-col items-center justify-center space-y-8 text-center">
      <div className="flex items-center gap-2 rounded-full bg-white/50 px-4 py-1.5 text-sm font-medium shadow-sm ring-1 ring-black/5">
        <span className="flex h-2 w-2 rounded-full bg-[#f97316] animate-pulse" />
        Your Tech Partner, Engineering Your Success
      </div>
      <h1 className="max-w-5xl text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
        Engineering Ideas Into <span className="italic text-[#f97316] bg-[#f97316]/20">Visuals</span>
      </h1>
      <p className="max-w-5xl text-lg leading-8 text-gray-600 sm:text-xl">
        We partner with startups, scaleups, and visionary businesses to build fast, intelligent, and scalable 
        software solutions. Our engineers bring the speed, precision, and technical edge needed to 
        deliver market-ready products that meet the highest standards — built to scale, built to last.
      </p>
      {/* <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://cal.com/osamajavaid/30min"
          target="_blank"
          className="rounded-full bg-white px-8 py-4 text-sm font-bold text-black shadow-sm ring-1 ring-black/5 hover:bg-gray-50 transition-colors"
        >
          Schedule a Call
        </a>
        <a
          href="mailto:contact@visualsx.com"
          className="rounded-full bg-black px-8 py-4 text-sm font-bold text-white shadow-sm hover:bg-black/90 transition-colors"
        >
          Contact Us
        </a>
      </div> */}
    </section>
  );
}
