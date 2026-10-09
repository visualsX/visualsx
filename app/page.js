import Hero from "@/components/sections/Hero";
import ClientMarquee from "@/components/sections/ClientMarquee";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Process from "@/components/sections/Process";
import SelectedWork from "@/components/sections/SelectedWork";
import Comparison from "@/components/sections/Comparison";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <ServicesGrid />
      <Process />
      <SelectedWork />
      <Comparison />
      <FAQ />
      <CTA />
    </>
  );
}
