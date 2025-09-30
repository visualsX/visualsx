import Banner from "@/components/home/Banner";
import Branding from "@/components/home/Branding";
import FAQs from "@/components/home/FAQs";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import HowWeWorks from "@/components/home/HowWeWorks";
import ReadyToLaunch from "@/components/home/ReadyToLaunch";
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
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-[100px] px-4 md:gap-[200px]">
        <HowWeWorks />
        <Branding />
        <WhyWorkWithUs />
        <ReadyToLaunch />
        <FAQs />
        <Footer />
        {/* === */}
      </div>
    </>
  );
}
