import Image from "next/image";
import LogoBadge from "../common/LogoBadge";
// import Develop from "/public/icons/develop.svg";
// import Monitize from "/public/icons/monitize.svg";
// import Onboarded from "/public/icons/onboarded.svg";
// import arrow from "/public/images/arrow1.svg";
// import Logo from "/public/logo/logo.svg";


export default function HowWeWorks() {
	return (
		<div className="w-full space-y-20">
			<div className="flex flex-col items-center justify-center gap-4 text-center">
				<LogoBadge title="Process" />
				<h1 className="text-[40px] font-bold leading-[60px] md:text-[52px]">
					How we work with you
				</h1>
				<p className="__className_7b1666 text-xl font-normal leading-[26px]">
					Our process is designed to make your life easier.
				</p>
			</div>
			<div className="relative grid w-full gap-10 md:grid-cols-2 lg:grid-cols-3">
				<div className="flex h-[300px] w-full flex-col items-start justify-start gap-4 rounded-[30px] bg-[#191919] p-8">
					<div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
						{/* <Onboarded className="h-8 w-8" /> */}
						<Image alt="icon" src={"/icons/onboarded.svg"} width={32} height={32} />
					</div>
					<div className="mt-6 flex flex-col items-start gap-4 text-white">
						<h3 className="text-[24px] font-bold">Get Onboarded</h3>
						<p className="text-[16px] font-normal">
							We understand your product goals, release plan, and budget. We
							then create a custom plan for you.
						</p>
					</div>
				</div>
				<div className="flex h-[300px] w-full flex-col items-start justify-start gap-4 rounded-[30px] bg-[#191919] p-8">
					<div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
						{/* <Develop className="h-8 w-8" /> */}
						<Image alt="icon" src={"/icons/onboarded.svg"} width={32} height={32} />
					</div>
					<div className="mt-6 flex flex-col items-start gap-4 text-white">
						<h3 className="text-[24px] font-bold">
							Design, Develop &amp; Test
						</h3>
						<p className="text-[16px] font-normal">
							We act like an extension of your team, giving you the freedom to
							focus on what truly matters: profitability.
						</p>
					</div>
				</div>
				<div className="flex h-[300px] w-full flex-col items-start justify-start gap-4 rounded-[30px] bg-[#191919] p-8">
					<div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
						{/* <Monitize className="h-8 w-8" /> */}
						<Image alt="icon" src={"/icons/monitize.svg"} width={32} height={32} />
					</div>
					<div className="mt-6 flex flex-col items-start gap-4 text-white">
						<h3 className="text-[24px] font-bold">Launch &amp; Monitize</h3>
						<p className="text-[16px] font-normal">
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
