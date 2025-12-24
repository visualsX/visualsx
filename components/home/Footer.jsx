'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
// import Github from "/public/icons/github.svg";
// import Linkedin from "/public/icons/linkedin.svg";


export default function Footer() {
	const [year, setYear] = useState(null);

	useEffect(() => {
		setYear(new Date().getFullYear());
	}, []);

	return (
		<>
			<div className="flex w-full flex-col items-start gap-6 px-4 sm:gap-8 md:gap-10">
				{/* Heading */}
				<h2 className="max-w-2xl text-[28px] font-bold sm:text-3xl md:text-4xl">
					Chat with us to kickstart your Idea
				</h2>

				{/* Founders Section */}
				<div className="flex flex-wrap items-center justify-start gap-6 sm:gap-8">
					<div className="flex items-center gap-3">
						<Image
							src="/founders/sam.jpeg"
							alt="Osama"
							width={70}
							height={70}
							className="h-[70px] w-[70px] rounded-lg border border-gray-500 bg-contain object-contain sm:h-[85px] sm:w-[85px] md:h-[100px] md:w-[100px]"
						/>
						<Image
							src="/founders/abd.jpeg"
							alt="Abdullah"
							width={70}
							height={70}
							className="h-[70px] w-[70px] rounded-lg border border-gray-500 bg-contain object-contain sm:h-[85px] sm:w-[85px] md:h-[100px] md:w-[100px]"
						/>
					</div>

					<div className="flex flex-col items-start">
						<p className="text-sm font-normal sm:text-base md:text-md">Founders & Product Experts</p>
						<h3 className="text-[24px] font-bold sm:text-[28px] md:text-3xl">Osama & Abdullah</h3>
					</div>
				</div>

				{/* Buttons */}
				<div className="flex w-full flex-col items-center justify-between gap-3 sm:flex-row sm:gap-2">
					<Link href="https://cal.com/osamajavaid/30min" target="_blank" className="w-full sm:w-auto">
						<button className="flex h-10 w-full items-center justify-center gap-2 rounded-full bg-black px-5 py-4 text-sm font-medium text-white shadow transition-colors hover:bg-black/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:w-auto">
							<Image
								src="/founders/sam.jpeg"
								alt="osama"
								width={20}
								height={20}
								className="rounded-full grayscale"
							/>
							Book a 30-min call
						</button>
					</Link>

					<button
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
						className="flex h-10 w-full items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-medium text-primary underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
					>
						<svg
							width="15"
							height="15"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z"
								fill="currentColor"
								fillRule="evenodd"
								clipRule="evenodd"
							/>
						</svg>
						Back to Top
					</button>
				</div>
			</div>

			<div className="mt-0 flex w-full flex-col items-center justify-center gap-3 border-t border-black/10 pt-2">
				<p className="text-md font-normal">
					Copyright © {year} visualsX. All Rights Reserved.
				</p>
				<div className="flex items-center gap-4">
					<a target="_blank" href="https://www.linkedin.com/company/visualsx">
						<Image alt="github" src={"/icons/github.svg"} height={24} width={24} />
						{/* <Linkedin className="h-6 w-6" /> */}
					</a>
					<a target="_blank" href="https://github.com/visualsx">
						<Image alt="linkedin" src={"/icons/linkedin.svg"} height={24} width={24} />
						{/* <Github className="h-6 w-6" /> */}
					</a>
				</div>
			</div>
		</>
	);
}
