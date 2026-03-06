import Image from "next/image";
import SectionHeader from "../common/section-header";

export default function HowWeWorks() {
	return (
		<div id="howWeWorks" className="w-full space-y-12 px-4 sm:space-y-16 md:space-y-20">
			<SectionHeader
				badgeTitle={"Process"}
				title={"How we work with you"}
				description={"Our process is designed to make your life easier."}
			/>
			<div className="relative grid w-full gap-6 sm:gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
				<div className="group relative flex min-h-[280px] w-full flex-col items-start justify-start gap-4 overflow-hidden rounded-[24px] bg-[#191919] p-6 sm:min-h-[300px] sm:rounded-[28px] sm:p-7 md:rounded-[30px] md:p-8">
					{/* Sparkles */}
					{/* <span className="animate-sparkle-large absolute inset-0 rounded-[inherit]"></span>
					<span className="sparkle-static-large absolute inset-0 rounded-[inherit]"></span> */}
					
					<div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary sm:h-14 sm:w-14 md:h-16 md:w-16">
						<Image alt="icon" src={"/icons/onboarded.svg"} width={28} height={28} className="h-[28px] w-[28px] sm:h-[30px] sm:w-[30px] md:h-[32px] md:w-[32px]" />
					</div>
					<div className="relative z-10 mt-4 flex flex-col items-start gap-3 text-white sm:mt-5 sm:gap-4 md:mt-6">
						<h3 className="text-[20px] font-bold sm:text-[22px] md:text-[24px]">Get Onboarded</h3>
						<p className="text-[14px] font-normal sm:text-[15px] md:text-[16px]">
							We understand your product goals, release plan, and budget. We
							then create a custom plan for you.
						</p>
					</div>
				</div>
				<div className="group relative flex min-h-[280px] w-full flex-col items-start justify-start gap-4 overflow-hidden rounded-[24px] bg-[#191919] p-6 sm:min-h-[300px] sm:rounded-[28px] sm:p-7 md:rounded-[30px] md:p-8">
					{/* Sparkles */}
					{/* <span className="animate-sparkle-large absolute inset-0 rounded-[inherit]"></span>
					<span className="sparkle-static-large absolute inset-0 rounded-[inherit]"></span> */}

					<div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary sm:h-14 sm:w-14 md:h-16 md:w-16">
						<Image alt="icon" src={"/icons/onboarded.svg"} width={28} height={28} className="h-[28px] w-[28px] sm:h-[30px] sm:w-[30px] md:h-[32px] md:w-[32px]" />
					</div>
					<div className="relative z-10 mt-4 flex flex-col items-start gap-3 text-white sm:mt-5 sm:gap-4 md:mt-6">
						<h3 className="text-[20px] font-bold sm:text-[22px] md:text-[24px]">
							Design, Develop &amp; Test
						</h3>
						<p className="text-[14px] font-normal sm:text-[15px] md:text-[16px]">
							We act like an extension of your team, giving you the freedom to
							focus on what truly matters: profitability.
						</p>
					</div>
				</div>
				<div className="group relative flex min-h-[280px] w-full flex-col items-start justify-start gap-4 overflow-hidden rounded-[24px] bg-[#191919] p-6 sm:min-h-[300px] sm:rounded-[28px] sm:p-7 md:rounded-[30px] md:p-8">
					{/* Sparkles */}
					{/* <span className="animate-sparkle-large absolute inset-0 rounded-[inherit]"></span>
					<span className="sparkle-static-large absolute inset-0 rounded-[inherit]"></span> */}

					<div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary sm:h-14 sm:w-14 md:h-16 md:w-16">
						<Image alt="icon" src={"/icons/monitize.svg"} width={28} height={28} className="h-[28px] w-[28px] sm:h-[30px] sm:w-[30px] md:h-[32px] md:w-[32px]" />
					</div>
					<div className="relative z-10 mt-4 flex flex-col items-start gap-3 text-white sm:mt-5 sm:gap-4 md:mt-6">
						<h3 className="text-[20px] font-bold sm:text-[22px] md:text-[24px]">Launch &amp; Monitize</h3>
						<p className="text-[14px] font-normal sm:text-[15px] md:text-[16px]">
							Launch your product on the planned date with complete technical
							support for any issues during user onboarding.
						</p>
					</div>
				</div>
				<Image
					alt="arrow"
					loading="lazy"
					width="120"
					height="120"
					className="absolute -top-12 left-80 hidden rotate-[6deg] transform md:block"
					src={"/images/arrow1.svg"}
				/>
				<Image
					alt="arrow"
					loading="lazy"
					width="120"
					height="120"
					className="absolute -bottom-12 right-80 hidden rotate-[180deg] transform md:block"
					src={"/images/arrow1.svg"}
				/>
			</div>
		</div>
	);
}
