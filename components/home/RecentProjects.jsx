import LogoBadge from "../common/LogoBadge";
import Link from "next/link";

export default function RecentProjects() {
	const projects = [
		{
			name: "Finance Management System",
			description: "A comprehensive financial management platform for tracking expenses, budgets, and financial analytics.",
			category: "FinTech",
			bgColor: "#e8f1ff",
			link: "https://www.nie.com.pk"
		},
		{
			name: "GardenHub",
			description: "E-commerce platform for plants and gardening supplies with seamless shopping experience.",
			category: "E-Commerce",
			bgColor: "#f3e8ff",
			link: "https://client.gardenhub.ae/"
		},
		{
			name: "Hysabat",
			description: "Complete ERP solution for business management, inventory, and operations optimization.",
			category: "ERP Solution",
			bgColor: "#ffebd3",
			link: "https://hysabat.com/"
		},
		{
			name: "JMM Technologies",
			description: "Software development agency website showcasing services and portfolio.",
			category: "Agency Website",
			bgColor: "#e8f1ff",
			link: "https://jmmtech.sa/"
		}
	];

	return (
		<div id="recentProjects" className="flex w-full flex-col items-center justify-center gap-12 px-4 sm:gap-16 md:gap-20">
			<div className="flex max-w-2xl flex-col items-center justify-center gap-3 text-center sm:gap-4">
				<LogoBadge title="Portfolio" />
				<h1 className="text-[32px] font-bold leading-[48px] sm:text-[40px] sm:leading-[56px] md:text-[52px] md:leading-[60px]">
					Recent Projects
				</h1>
				<p className="__className_7b1666 text-base font-normal leading-[24px] sm:text-lg sm:leading-[26px] md:text-xl">
					Check out some of our latest work and success stories
				</p>
			</div>
			<div className="grid w-full gap-6 sm:gap-8 md:grid-cols-2 md:gap-10">
				{projects.map((project, index) => (
					<Link 
						target="_blank"
						key={index} 
						href={project.link}
						className="group block"
					>
						<div
							className="flex min-h-[280px] w-full transform flex-col items-start justify-between gap-6 rounded-[24px] p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl sm:min-h-[300px] sm:gap-8 sm:rounded-[28px] sm:p-7 md:min-h-[320px] md:rounded-[30px] md:p-8"
							style={{ backgroundColor: project.bgColor }}
						>
							<div className="flex flex-col gap-4">
								{/* Category Badge */}
								<div className="inline-flex w-fit items-center rounded-full bg-black/10 px-3 py-1.5 sm:px-4 sm:py-2">
									<span className="text-xs font-medium text-black/70 sm:text-sm">
										{project.category}
									</span>
								</div>
								
								{/* Project Name */}
								<h3 className="text-[20px] font-bold transition-colors group-hover:text-[#f97316] sm:text-[22px] md:text-[24px]">
									{project.name}
								</h3>
								
								{/* Description */}
								<p className="text-[14px] font-normal leading-[22px] text-gray-700 sm:text-[15px] sm:leading-[23px] md:text-[16px] md:leading-[24px]">
									{project.description}
								</p>
							</div>

							{/* View Project Link */}
							<div className="flex items-center gap-2 text-[#f97316] transition-all group-hover:gap-3">
								<span className="text-sm font-semibold sm:text-base">View Project</span>
								<svg
									className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 8l4 4m0 0l-4 4m4-4H3"
									/>
								</svg>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
