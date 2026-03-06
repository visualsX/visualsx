import React from "react";

export default function TransformationBanner() {
  return (
    <section className="w-full">
      <div className="relative overflow-hidden rounded-[40px] bg-black px-8 py-16 text-center text-white">
        {/* Grid Background Pattern */}
        <div className="absolute inset-0 opacity-20" 
             style={{ 
               backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
               backgroundSize: '32px 32px' 
             }} 
        />
        
        <div className="relative z-10 flex flex-col items-center gap-8">
          <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl md:text-5xl">
            It's Time To Accelerate Your <span className="text-primary">Digital Transformation</span> Journey
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://cal.com/osamajavaid/30min"
              target="_blank"
              className="rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-black hover:bg-gray-100 transition-colors"
            >
              Schedule a Call
            </a>
            <a
              href="mailto:visualsx.ltd@gmail.com"
              className="rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
