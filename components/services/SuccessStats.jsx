import React from "react";
import { Users, Calendar, Trophy, Globe, Heart } from "lucide-react";
import SectionHeader from "../common/section-header";

export default function SuccessStats() {
  const stats = [
    { label: "Talented Team!", value: "15+", icon: <Users size={24} />, color: "bg-black" },
    { label: "Full Scale Projects Delivered", value: "20+", icon: <Calendar size={24} />, color: "bg-black" },
    { label: "Years of Experience", value: "5+", icon: <Trophy size={24} />, color: "bg-black" },
    { label: "World Class Engineers", value: "10+", icon: <Globe size={24} />, color: "bg-black" },
    { label: "Happy Clients :)", value: "15+", icon: <Heart size={24} />, color: "bg-black" },
  ];

  return (
    <section className="w-full space-y-12 px-4 sm:space-y-16">
      <SectionHeader
        badgeTitle={"Stats"}
        title={"Success Key Stats"}
        description={"Our journey of delivering excellence and empowering businesses world wide."}
      />
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition-all hover:shadow-md">
            <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${stat.color} text-white`}>
              {stat.icon}
            </div>
            <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
            <p className="mt-2 text-center text-sm font-medium text-gray-500 leading-tight">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
