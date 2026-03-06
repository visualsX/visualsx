import React from "react";
import LogoBadge from "../common/LogoBadge";

export default function ServiceSection({ 
  title, 
  subtitle, 
  items, 
  badge,
  className = "" 
}) {
  return (
    <section className={`w-full ${className}`}>
      <div className="flex flex-col items-center justify-center gap-y-12 sm:gap-y-16 md:gap-y-20">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl">
          {badge && <LogoBadge title={badge} />}
            <h1 className="section-heading">
              {title}
          </h1>
          {subtitle && (
            <p className="text-base font-normal leading-[24px] sm:text-lg sm:leading-[26px] md:text-xl text-gray-600">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 max-w-7xl mx-auto w-full">
          {items.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-start gap-4 rounded-3xl border border-black/5 bg-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md h-full w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base font-normal text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
