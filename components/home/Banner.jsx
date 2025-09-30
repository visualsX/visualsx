import Image from "next/image";
// import Design from "/public/images/design.svg";
// import Development from "/public/images/development.svg";
// import Ideation from "/public/images/ideation.svg";
// import Launch from "/public/images/launch.svg";
// import Support from "/public/images/support.svg";
// import Testing from "/public/images/testing.svg";

import React from "react";

export default function Banner() {
	return (
		<div className="mt-36 w-full space-y-20 lg:space-y-40">
			<div className="relative z-50 my-auto flex flex-col items-center justify-center gap-6 px-2">
				<h1 className="max-w-4xl text-4xl font-bold sm:text-[50px] sm:leading-[70px] md:text-[70px]">
					Get Your MVP to Market in Just 30 days
				</h1>
				<p className="max-w-3xl text-base font-normal sm:text-xl">
					We will help you build a fully functional SaaS MVP within 30 days.
					Everything from designing the app to launching it to the market.
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
