import RecentProjects from "@/components/home/RecentProjects";
import ReadyToLaunch from "@/components/home/ReadyToLaunch";
import Testimonials from "@/components/home/Testimonials";

export const metadata = {
    title: "Portfolio",
    description: "Check out our latest projects and success stories. We've helped startups launch MVPs across various industries.",
};

export default function PortfolioPage() {
    return (
        <>
            <div className="relative mb-24 flex w-full flex-col text-center">
                <div className="mx-auto max-w-4xl px-4">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Our Work Speaks <span className="text-primary">for Itself</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We've partnered with ambitious founders to build products that users love.
                        Explore our portfolio of FinTech, E-Commerce, and ERP solutions.
                    </p>
                </div>
            </div>

            <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-[80px] sm:gap-[100px] md:gap-[200px]">
                <RecentProjects />
                <Testimonials />
                <ReadyToLaunch />
            </div>
        </>
    );
}
