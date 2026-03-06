import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import LogoBadge from "@/components/common/LogoBadge";
import { Zap, Lightbulb, Globe } from "lucide-react";

export const metadata = {
    title: "Careers | visualsX",
    description: "Join our team of designers, developers, and product experts. Build the future of digital products with us.",
};

export default function CareersPage() {
    const whyUs = [
        {
            title: "Fast-paced",
            desc: "We build and ship MVPs in 30 days. No bureaucracy, just pure execution.",
            icon: <Zap size={24} />,
            color: "bg-black"
        },
        {
            title: "Innovation",
            desc: "Work with the latest tech stacks and solve challenging product problems.",
            icon: <Lightbulb size={24} />,
            color: "bg-black"
        },
        {
            title: "Remote-first",
            desc: "We believe in talent, not time zones. Work from anywhere in the world.",
            icon: <Globe size={24} />,
            color: "bg-black"
        }
    ];

    const roles = [
        {
            title: "Senior Product Designer",
            type: "Full-time",
            location: "Remote",
            description: "Design stunning interfaces and seamless user experiences for our diverse range of client products."
        },
        {
            title: "Full-stack Developer (Next.js)",
            type: "Full-time",
            location: "Remote",
            description: "Build scalable, high-performance web applications using the latest web technologies."
        },
        {
            title: "Growth Lead",
            type: "Full-time",
            location: "Remote",
            description: "Help us and our clients grow by implementing data-driven marketing and product strategies."
        }
    ];

    return (
        <main className="min-h-screen bg-[#fff8ef] pt-20">
            <div className="relative flex w-full flex-col text-center">
                <div className="mx-auto max-w-4xl px-4">
                    <LogoBadge title="Join Us" />
                    <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Build the Future <span className="text-primary">with Us</span>
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        At visualsX, we're on a mission to help founders launch their dreams.
                        We're looking for passionate individuals who love building great products.
                    </p>
                </div>
            </div>

            <div className="mx-auto mt-20 flex w-full max-w-6xl flex-col items-center justify-center gap-[60px] px-4 sm:gap-[80px] md:gap-[120px]">
                {/* Why visualsX */}
                <div className="grid w-full gap-8 md:grid-cols-3">
                    {whyUs.map((item, i) => (
                        <div key={i} className="group flex flex-col items-start gap-6 rounded-[32px] border border-black/5 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl">
                            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.color} text-white shadow-lg`}>
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                                <p className="mt-3 text-lg leading-relaxed text-gray-600">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Roles */}
                {/* <div className="mb-24 w-full">
                    <h2 className="text-center text-3xl font-bold sm:text-4xl">Open Roles</h2>
                    <div className="mt-12 text-center">
                        <p className="text-lg text-gray-600">
                            There are no open roles at the moment. Please check back later!
                        </p>
                    </div>
                </div> */}

                {/* Final CTA */}
                <div
                    style={{
                        backgroundImage: 'url(/cartographer.png)',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                    }}
                    className="mb-24 flex w-full flex-col items-center gap-6 rounded-[40px] bg-black p-12 text-center text-white">
                    <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">Don't see a fit?</h2>
                    <p className="max-w-xl text-lg opacity-90">
                        We're always looking for exceptional talent. If you're a designer, developer, or product thinker, we'd love to hear from you.
                    </p>
                    <a href="mailto:visualsx.ltd@gmail.com" className="mt-4 inline-flex h-14 items-center justify-center rounded-full bg-white px-10 text-lg font-bold text-black transition-transform hover:scale-105">
                        Send us your Portfolio
                    </a>
                </div>
            </div>
        </main>
    );
}
