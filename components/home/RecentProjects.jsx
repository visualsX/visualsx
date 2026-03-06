import LogoBadge from "../common/LogoBadge";
import Link from "next/link";
import SectionHeader from "../common/section-header";
import { DollarSign, Sprout, LayoutGrid, Code2, ArrowUpRight } from "lucide-react";

export default function RecentProjects() {
	const projects = [
		{
			name: "Finance Management System",
			description: "A comprehensive financial management platform for tracking expenses, budgets, and financial analytics.",
			category: "FinTech",
			bgColor: "#e8f1ff",
			link: "https://www.nie.com.pk",
			icon: <DollarSign size={24} />
		},
		{
			name: "GardenHub",
			description: "E-commerce platform for plants and gardening supplies with seamless shopping experience.",
			category: "E-Commerce",
			bgColor: "#f3e8ff",
			link: "https://gardenhub.ae/",
			icon: <Sprout size={24} />
		},
		{
			name: "Hysabat",
			description: "Complete ERP solution for business management, inventory, and operations optimization.",
			category: "ERP Solution",
			bgColor: "#ffebd3",
			link: "https://hysabat.com/",
			icon: <LayoutGrid size={24} />
		},
		{
			name: "JMM Technologies",
			description: "Software development agency website showcasing services and portfolio.",
			category: "Agency Website",
			bgColor: "#e8f1ff",
			link: "https://jmmtech.sa/",
			icon: <Code2 size={24} />
		}
	];

	return (
		<div id="recentProjects" className="flex w-full flex-col items-center justify-center gap-12 sm:gap-16 md:gap-20">
			<SectionHeader
				badgeTitle={"Portfolio"}
				title={"Recent Projects"}
				description={"Check out some of our latest work and success stories"}
			/>
			<div className="grid w-full gap-6 sm:gap-8 md:grid-cols-2 md:gap-10">
				{projects.map((project, index) => (
					<Link 
						target="_blank"
						key={index} 
						href={project.link}
						className="group block"
					>
						<div
							className="flex min-h-[300px] w-full transform flex-col items-start justify-between gap-6 rounded-[32px] p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:min-h-[320px] sm:gap-8 sm:p-8 md:min-h-[340px] md:p-10"
							style={{ backgroundColor: project.bgColor }}
						>
							<div className="flex w-full flex-col gap-6">
								{/* Card Top: Icon & Category */}
								<div className="flex w-full items-start justify-between">
									<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/5 text-black shadow-sm">
										{project.icon}
									</div>
									<div className="inline-flex items-center rounded-full bg-black/10 px-3 py-1.5 sm:px-4 sm:py-2">
										<span className="text-xs font-semibold text-black/70 sm:text-sm">
											{project.category}
										</span>
									</div>
								</div>
								
								{/* Project Content */}
								<div className="flex flex-col gap-3">
									<h3 className="text-2xl font-bold transition-colors group-hover:text-[#f97316] sm:text-3xl">
										{project.name}
									</h3>
									<p className="text-base font-normal leading-relaxed text-gray-700 sm:text-lg">
										{project.description}
									</p>
								</div>
							</div>

							{/* View Project Link */}
							<div className="flex items-center gap-2 text-[#f97316] transition-all group-hover:gap-3">
								<span className="text-sm font-bold sm:text-base">View Project</span>
								<ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-6 sm:w-6" />
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
