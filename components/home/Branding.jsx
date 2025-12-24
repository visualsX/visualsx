import Image from "next/image";
// import branding= from "/public/branding.webp";
// import development from "/public/development.webp";
// import Logo from "/public/logo/logo.svg";
// import uiux from "/public/uiux.webp";

import React from "react";
import LogoBadge from "../common/LogoBadge";

export default function Branding() {
	const style = {
		position: "absolute",
		height: "100%",
		width: "100%",
		left: "0",
		top: "0",
		right: "0",
		bottom: "0",
		objectFit: "contain",
		color: "transparent",
	};
	return (
		<div className="flex w-full flex-col items-center justify-center gap-12 px-4 sm:gap-16 md:gap-20">
			<div className="flex flex-col items-center justify-center gap-3 text-center sm:gap-4">
				<LogoBadge title="Services" />
				<h1 className="text-[32px] font-bold leading-[48px] sm:text-[40px] sm:leading-[56px] md:text-[52px] md:leading-[60px]">
					Apps, Websites & Branding
				</h1>
				<p className="__className_7b1666 text-base font-normal leading-[24px] sm:text-lg sm:leading-[26px] md:text-xl">
					Get everything you need in one place
				</p>
			</div>
			<div className="relative grid w-full gap-6 sm:gap-8 md:gap-10 lg:grid-cols-3">
				<div
					className="flex min-h-[280px] w-full transform flex-col items-start justify-start gap-6 rounded-[24px] p-6 sm:min-h-[300px] sm:gap-8 sm:rounded-[28px] sm:p-7 md:gap-10 md:rounded-[30px] md:p-8 lg:translate-y-5 lg:-rotate-6"
					style={{ backgroundColor: "#e8f1ff" }}
				>
					<div className="relative h-[140px] w-full sm:h-[150px] md:h-[160px]">
						<Image
							alt="icon"
							loading="lazy"
							decoding="async"
							// style={style}

							width="220"
							height="164"
							src={"/branding.webp"}
						/>
					</div>
					<div className="flex flex-col items-start gap-3 sm:gap-4">
						<h3 className="text-[20px] font-bold sm:text-[22px] md:text-[24px]">Branding & Identity</h3>
						<p className="text-[14px] font-normal sm:text-[16px] md:text-[18px]">
							We help you stand out from the competition with a unique brand
							identity.
						</p>
					</div>
				</div>
				<div
					className="flex min-h-[280px] w-full transform flex-col items-start justify-start gap-6 rounded-[24px] p-6 sm:min-h-[300px] sm:gap-8 sm:rounded-[28px] sm:p-7 md:gap-10 md:rounded-[30px] md:p-8"
					style={{ backgroundColor: "#f3e8ff" }}
				>
					<div className="relative h-[140px] w-full sm:h-[150px] md:h-[160px]">
						<Image
							alt="icon"
							loading="lazy"
							decoding="async"
							// style={style}

							width="220"
							height="164"
							src={'/development.webp'}
						/>
					</div>
					<div className="flex flex-col items-start gap-3 sm:gap-4">
						<h3 className="text-[20px] font-bold sm:text-[22px] md:text-[24px]">UI/UX Design</h3>
						<p className="text-[14px] font-normal sm:text-[16px] md:text-[18px]">
							We create websites that look great on any device and boost your
							business growth.
						</p>
					</div>
				</div>
				<div
					className="flex min-h-[280px] w-full transform flex-col items-start justify-start gap-6 rounded-[24px] p-6 sm:min-h-[300px] sm:gap-8 sm:rounded-[28px] sm:p-7 md:gap-10 md:rounded-[30px] md:p-8 lg:translate-y-5 lg:rotate-6"
					style={{ backgroundColor: "#ffebd3" }}
				>
					<div className="relative h-[140px] w-full sm:h-[150px] md:h-[160px]">
						<Image
							alt="icon"
							loading="lazy"
							decoding="async"
							// style={style}

							width="220"
							height="164"
							src={"/uiux.webp"}
						/>
					</div>
					<div className="flex flex-col items-start gap-3 sm:gap-4">
						<h3 className="text-[20px] font-bold sm:text-[22px] md:text-[24px]">MVP Development</h3>
						<p className="text-[14px] font-normal sm:text-[16px] md:text-[18px]">
							We build apps that are scalable, secure, and easy to use. Ready to
							launch in weeks, not months.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
