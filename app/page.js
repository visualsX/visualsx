import Hero from "@/components/sections/Hero";
import ClientMarquee from "@/components/sections/ClientMarquee";
import Highlights from "@/components/sections/Highlights";
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
      <Highlights />
      <ServicesGrid />
      <Process />
      <SelectedWork />
      <Comparison />
      <FAQ />
      <CTA />
    </>
  );
}
