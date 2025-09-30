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
		<div className="flex w-full flex-col items-center justify-center gap-20">
			<div className="flex flex-col items-center justify-center gap-4 text-center">
				<LogoBadge title="Services" />
				<h1 className="text-[40px] font-bold leading-[60px] md:text-[52px]">
					Apps, Websites & Branding
				</h1>
				<p className="__className_7b1666 text-xl font-normal leading-[26px]">
					Get everything you need in one place
				</p>
			</div>
			<div className="relative grid w-full gap-10 lg:grid-cols-3">
				<div
					className="flex min-h-[300px] w-full transform flex-col items-start justify-start gap-10 rounded-[30px] p-8 lg:translate-y-5 lg:-rotate-6"
					style={{ backgroundColor: "#e8f1ff" }}
				>
					<div className="relative h-[160px] w-full">
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
					<div className="flex flex-col items-start gap-4">
						<h3 className="text-[24px] font-bold">Branding & Identity</h3>
						<p className="text-[18px] font-normal">
							We help you stand out from the competition with a unique brand
							identity.
						</p>
					</div>
				</div>
				<div
					className="flex min-h-[300px] w-full transform flex-col items-start justify-start gap-10 rounded-[30px] p-8"
					style={{ backgroundColor: "#f3e8ff" }}
				>
					<div className="relative h-[160px] w-full">
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
					<div className="flex flex-col items-start gap-4">
						<h3 className="text-[24px] font-bold">UI/UX Design</h3>
						<p className="text-[18px] font-normal">
							We create websites that look great on any device and boost your
							business growth.
						</p>
					</div>
				</div>
				<div
					className="flex min-h-[300px] w-full transform flex-col items-start justify-start gap-10 rounded-[30px] p-8 lg:translate-y-5 lg:rotate-6"
					style={{ backgroundColor: "#ffebd3" }}
				>
					<div className="relative h-[160px] w-full">
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
					<div className="flex flex-col items-start gap-4">
						<h3 className="text-[24px] font-bold">MVP Development</h3>
						<p className="text-[18px] font-normal">
							We build apps that are scalable, secure, and easy to use. Ready to
							launch in weeks, not months.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
