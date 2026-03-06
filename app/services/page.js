import ServicesHero from "@/components/services/ServicesHero";
import SuccessStats from "@/components/services/SuccessStats";
import TransformationBanner from "@/components/services/TransformationBanner";
import ServicesTabs from "@/components/services/ServicesTabs";
import {
    Smartphone,
    Layout, Globe, ShoppingCart, FileText, Building2, Wrench,
    Apple, Terminal
} from "lucide-react";

export const metadata = {
    title: "Services | visualsX",
    description: "Explore our range of services including Branding, UI/UX Design, and MVP Development tailored for startups.",
};

export default function ServicesPage() {
    const webItems = [
        { title: "Web Portal Development", desc: "Customer-focused web portals with all the necessary functionalities to help expand your business digitally", icon: <Layout size={24} /> },
        { title: "Custom Web Development", desc: "Fully-customized websites to speed up business processes, improve productivity, & multiply revenue", icon: <Globe size={24} /> },
        { title: "E-commerce Development", desc: "E-commerce solutions to simplify online shopping, increase revenue & attract a larger customer base", icon: <ShoppingCart size={24} /> },
        { title: "CMS Web Development", desc: "Easy-to-use CMS web applications to manage your digital content efficiently & gain competitive advantage", icon: <FileText size={24} /> },
        { title: "Enterprise Web Development", desc: "Highly functional ERP web solution for better team collaborations, improved user engagement, & transparent results", icon: <Building2 size={24} /> },
        { title: "Support & Maintenance", desc: "Unmatched maintenance support & services to make sure your website is functional, secure, and bug free", icon: <Wrench size={24} /> },
    ];

    const mobileItems = [
        { title: "Native iOS Development", desc: "Swift & Objective-C power our end-to-end iOS development—from ideation to App Store submission.", icon: <Apple size={24} /> },
        { title: "Native Android Development", desc: "Kotlin & Java power our high-performance native Android apps, leveraging full OS capabilities.", icon: <Smartphone size={24} /> },
        { title: "Hybrid Mobile App Development", desc: "Hybrid apps cut costs & time—we build them with innovative cross-platform tech for iOS, Android, and beyond.", icon: <Terminal size={24} /> },
    ];

    return (
        <main className="min-h-screen mx-auto w-full max-w-7xl bg-[#fff8ef] px-4 space-y-12 sm:space-y-16 lg:space-y-20">
            <ServicesHero />
            <ServicesTabs webItems={webItems} mobileItems={mobileItems} />
            {/* <SuccessStats /> */}
            <TransformationBanner />
            {/* <HowWeWorks /> */}
        </main>
    );
}
