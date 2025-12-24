import Image from "next/image";
import LogoBadge from "../common/LogoBadge";

export default function WhyWorkWithUs() {
	return (
		<div className="flex w-full flex-col items-center justify-center gap-12 px-4 sm:gap-16 md:gap-20">
			<div className="flex max-w-2xl flex-col items-center justify-center gap-3 text-center sm:gap-4">
				<LogoBadge title="Features" />
				<h1 className="text-[32px] font-bold leading-[48px] sm:text-[40px] sm:leading-[56px] md:text-[52px] md:leading-[60px]">
					Here is why you'll love working with us
				</h1>
				<p className="__className_7b1666 text-base font-normal leading-[24px] sm:text-lg sm:leading-[26px] md:text-xl">
					We provide everything you need to grow your business.
				</p>
			</div>
			<div className="relative grid w-full place-items-center gap-12 sm:gap-14 md:grid-cols-2 md:gap-16 lg:grid-cols-3">
				<div className="flex w-full flex-col items-center justify-center gap-6 text-center sm:gap-8 md:gap-10">
					<div className="flex h-[70px] w-[70px] items-center justify-center overflow-hidden rounded-full bg-black sm:h-[85px] sm:w-[85px] md:h-[100px] md:w-[100px]">
						<Image alt="icon" src={"/icons/lighting.svg"} width={28} height={28} className="h-[28px] w-[28px] sm:h-[34px] sm:w-[34px] md:h-[40px] md:w-[40px]" />
					</div>
					<div className="flex flex-col items-center gap-2">
						<h3 className="text-[20px] font-bold sm:text-[22px] md:text-[24px]">Lightning Speed</h3>
						<p className="text-[15px] font-normal sm:text-[16px] md:text-[18px]">
							Get your product to market in just 30 days
						</p>
					</div>
				</div>
				<div className="flex w-full flex-col items-center justify-center gap-6 text-center sm:gap-8 md:gap-10">
					<div className="flex h-[70px] w-[70px] items-center justify-center overflow-hidden rounded-full bg-black sm:h-[85px] sm:w-[85px] md:h-[100px] md:w-[100px]">
						<Image alt="icon" src={"/icons/design.svg"} width={28} height={28} className="h-[28px] w-[28px] sm:h-[34px] sm:w-[34px] md:h-[40px] md:w-[40px]" />
					</div>
					<div className="flex flex-col items-center gap-2">
						<h3 className="text-[20px] font-bold sm:text-[22px] md:text-[24px]">Design Perfection</h3>
						<p className="text-[15px] font-normal sm:text-[16px] md:text-[18px]">
							Beautiful, user-centric designs tailored for your brand
						</p>
					</div>
				</div>
				<div className="flex w-full flex-col items-center justify-center gap-6 text-center sm:gap-8 md:gap-10">
					<div className="flex h-[70px] w-[70px] items-center justify-center overflow-hidden rounded-full bg-black sm:h-[85px] sm:w-[85px] md:h-[100px] md:w-[100px]">
						<Image alt="icon" src={"/icons/payments.svg"} width={28} height={28} className="h-[28px] w-[28px] sm:h-[34px] sm:w-[34px] md:h-[40px] md:w-[40px]" />
					</div>
					<div className="flex flex-col items-center gap-2">
						<h3 className="text-[20px] font-bold sm:text-[22px] md:text-[24px]">Secure Payments</h3>
						<p className="text-[15px] font-normal sm:text-[16px] md:text-[18px]">
							Seamless payment integration for smooth transactions
						</p>
					</div>
				</div>
				<div className="flex w-full flex-col items-center justify-center gap-6 text-center sm:gap-8 md:gap-10">
					<div className="flex h-[70px] w-[70px] items-center justify-center overflow-hidden rounded-full bg-black sm:h-[85px] sm:w-[85px] md:h-[100px] md:w-[100px]">
						<Image alt="icon" src={"/icons/scaleable.svg"} width={28} height={28} className="h-[28px] w-[28px] sm:h-[34px] sm:w-[34px] md:h-[40px] md:w-[40px]" />
					</div>
					<div className="flex flex-col items-center gap-2">
						<h3 className="text-[20px] font-bold sm:text-[22px] md:text-[24px]">Scalable Apps</h3>
						<p className="text-[15px] font-normal sm:text-[16px] md:text-[18px]">
							Build scalable apps that grow with your business
						</p>
					</div>
				</div>
				<div className="flex w-full flex-col items-center justify-center gap-6 text-center sm:gap-8 md:gap-10">
					<div className="flex h-[70px] w-[70px] items-center justify-center overflow-hidden rounded-full bg-black sm:h-[85px] sm:w-[85px] md:h-[100px] md:w-[100px]">
						<Image alt="icon" src={"/icons/care.svg"} width={28} height={28} className="h-[28px] w-[28px] sm:h-[34px] sm:w-[34px] md:h-[40px] md:w-[40px]" />
					</div>
					<div className="flex flex-col items-center gap-2">
						<h3 className="text-[20px] font-bold sm:text-[22px] md:text-[24px]">Continuous Care</h3>
						<p className="text-[15px] font-normal sm:text-[16px] md:text-[18px]">
							Dedicated support to keep your app running smoothly
						</p>
					</div>
				</div>
				<div className="flex w-full flex-col items-center justify-center gap-6 text-center sm:gap-8 md:gap-10">
					<div className="flex h-[70px] w-[70px] items-center justify-center overflow-hidden rounded-full bg-black sm:h-[85px] sm:w-[85px] md:h-[100px] md:w-[100px]">
						<Image alt="icon" src={"/icons/package.svg"} width={28} height={28} className="h-[28px] w-[28px] sm:h-[34px] sm:w-[34px] md:h-[40px] md:w-[40px]" />
					</div>
					<div className="flex flex-col items-center gap-2">
						<h3 className="text-[20px] font-bold sm:text-[22px] md:text-[24px]">Complete Package</h3>
						<p className="text-[15px] font-normal sm:text-[16px] md:text-[18px]">
							From idea to launch, everything you need under one roof
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
