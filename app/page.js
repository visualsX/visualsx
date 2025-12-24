import Banner from "@/components/home/Banner";
import Branding from "@/components/home/Branding";
import FAQs from "@/components/home/FAQs";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import HowWeWorks from "@/components/home/HowWeWorks";
import ReadyToLaunch from "@/components/home/ReadyToLaunch";
import RecentProjects from "@/components/home/RecentProjects";
import Testimonials from "@/components/home/Testimonials";
import WhyWorkWithUs from "@/components/home/WhyWorkWithUs";
// import ReadyToLaunch from "@/components/Home/ReadyToLaunch";

export default function Home() {
  return (
    <>
      <div className="relative mb-24 flex max-h-[80vh] w-full flex-col py-10 text-center md:max-h-screen">
        <Header />
        <Banner />
      </div>

      {/* ========================= */}
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-[80px] px-4 sm:gap-[100px] md:gap-[200px]">
        <HowWeWorks />
        <Branding />
        <WhyWorkWithUs />
        <RecentProjects />
        <ReadyToLaunch />
        <Testimonials />
        <FAQs />
        <Footer />
        {/* === */}
      </div>
    </>
  );
}
