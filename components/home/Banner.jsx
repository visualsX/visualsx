import Image from "next/image";

import React from "react";

export default function Banner() {
	return (
		<div className="mt-16 w-full space-y-12 px-4 sm:mt-24 sm:space-y-16 sm:px-6 md:mt-36 md:space-y-20 lg:space-y-40">
			<div className="relative z-50 my-auto flex flex-col items-center justify-center gap-4 sm:gap-5 md:gap-6">
				<h1 className="max-w-5xl text-center text-[28px] font-bold leading-[40px] sm:text-4xl sm:leading-[50px] md:text-[50px] md:leading-[70px] lg:text-[70px]">
					<span className="text-[#f97316]">Build & Launch</span> Your Startup 70% Cheaper & 5x Faster
				</h1>
				<p className="max-w-3xl text-center text-sm font-normal sm:text-base md:text-xl">
					Launch your product faster with efficient development that cuts time and costs, ensuring top-notch quality and a confident rollout.
				</p>
				<div className="flex items-center justify-center gap-2"></div>
				<div className="hidden lg:block">
					<Image
						src={"/images/ideation.svg"}
						className="-top-32 left-52 h-[130px] w-[130px] transform cursor-pointer lg:absolute"
						width={130}
						height={130}
						alt="design ideas, ideation"
					/>
					<Image
						src={"/images/design.svg"}
						className="left-32 top-16 h-[130px] w-[130px] transform cursor-pointer lg:absolute"
						width={130}
						height={130}
						alt="design ideas, design and developement"
					/>
					<Image
						src={"/images/development.svg"}
						className="-bottom-16 left-52 h-[95px] w-[95px] transform cursor-pointer lg:absolute"
						width={130}
						height={130}
						alt="development in nextjs, reactjs"
					/>
					<Image
						src={"/images/launch.svg"}
						className="-top-32 right-52 h-[90px] w-[90px] transform cursor-pointer lg:absolute"
						width={130}
						height={130}
						alt="website deployment, product launch"
					/>
					<Image
						src={"/images/support.svg"}
						className="right-32 top-16 h-[85px] w-[85px] transform cursor-pointer lg:absolute"
						width={130}
						height={130}
						alt="support and maintenance"
					/>
					<Image
						src={"/images/testing.svg"}
						className="-bottom-10 right-52 h-[95px] w-[95px] transform cursor-pointer lg:absolute"
						width={130}
						height={130}
						alt="unit testing, integration testing"
					/>
				</div>
			</div>
		</div>
	);
}
