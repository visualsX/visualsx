"use client";

import React, { useState } from "react";
import ServiceSection from "./ServiceSection";

export default function ServicesTabs({ webItems, mobileItems }) {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-center gap-12">
        {/* Tabs Controller */}
        <div className="flex p-1 bg-black/5 rounded-full ring-1 ring-black/5">
          <button
            onClick={() => setActiveTab("web")}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
              activeTab === "web"
                ? "bg-black text-white shadow-lg"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => setActiveTab("mobile")}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
              activeTab === "mobile"
                ? "bg-black text-white shadow-lg"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Mobile Development
          </button>
        </div>

        {/* Tab Content */}
        <div className="w-full transition-all duration-500 transform">
          {activeTab === "web" ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <ServiceSection
                title="Web Development Services We Offer"
                subtitle="Building modern, scalable web solutions tailored to your business"
                items={webItems}
                className="py-0!"
              />
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <ServiceSection
                title="Mobile Development Services We Offer"
                subtitle="High-performance native and hybrid mobile applications"
                items={mobileItems}
                className="py-0!"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
