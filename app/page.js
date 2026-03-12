import Banner from "@/components/home/Banner";
import Branding from "@/components/home/Branding";
import FAQs from "@/components/home/FAQs";
import HowWeWorks from "@/components/home/HowWeWorks";
import ReadyToLaunch from "@/components/home/ReadyToLaunch";
// import RecentProjects from "@/components/home/RecentProjects";
// import Testimonials from "@/components/home/Testimonials";
import WhyWorkWithUs from "@/components/home/WhyWorkWithUs";
import ServiceSection from "@/components/services/ServiceSection";
import { Figma, Code, Smartphone, Users, ClipboardCheck, Cpu, Share2 } from "lucide-react";
// import ReadyToLaunch from "@/components/Home/ReadyToLaunch";

export default function Home() {
  const domainItems = [
    { title: "UI/UX Design", desc: "We design products that don't just look good — they feel right. Our UI/UX design process puts your users at the center of every decision.", icon: <Figma size={24} /> },
    { title: "Full Stack Development", desc: "We build robust, scalable web applications using modern frontend and backend technologies — delivering secure, high-performance solutions.", icon: <Code size={24} /> },
    { title: "Mobile App Development", desc: "From concept to launch, we design and develop mobile apps that deliver seamless experiences across all devices and platforms.", icon: <Smartphone size={24} /> },
    { title: "Dedicated Team", desc: "Need to scale your tech team? We provide dedicated developers who work as an extension of your business — fully aligned with your goals.", icon: <Users size={24} /> },
    { title: "QA Testing", desc: "Once development is complete, we ensure your product works flawlessly through thorough testing and validation — before it reaches your users.", icon: <ClipboardCheck size={24} /> },
    { title: "AI/ML", desc: "We help you turn data into intelligence. From smart features to full-scale AI products, we turn your vision into machine-powered solutions.", icon: <Cpu size={24} /> },
    { title: "DevOps", desc: "Deliver faster with our DevOps solutions. We automate, integrate, and optimize your workflows so your apps move at the speed of your business.", icon: <Share2 size={24} /> },
  ];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'visualsX',
    url: 'https://visualsx.vercel.app',
    logo: 'https://visualsx.vercel.app/logo/logo-512x512.png',
    sameAs: [
      'https://twitter.com/visualsx',
      'https://www.linkedin.com/company/visualsx',
      'https://www.instagram.com/visualsx'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+923159591822',
      contactType: 'customer service',
      availableLanguage: 'English'
    },
    description: "Launch your MVP in just 30 days with visualsX. We provide high-performance branding, website development, and mobile app solutions."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative flex max-h-[80vh] pb-10 w-full flex-col text-center md:max-h-screen">
        <Banner />
      </div>

      {/* ========================= */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-[80px] sm:gap-[100px] md:gap-[200px]">
        <HowWeWorks />
        <Branding />
        <ServiceSection
          badge="Services"
          title="Domains We Work In"
          subtitle="Transforming Industries with Cutting-Edge Solutions"
          items={domainItems}
          className="py-0!"
        />
        <WhyWorkWithUs />
        {/* <RecentProjects /> */}
        <ReadyToLaunch />
        {/* <Testimonials /> */}
        <FAQs />
        {/* === */}
      </div>
    </>
  );
}
