import Image from "next/image";
// import Care from "/icons/care.svg";
// import Design from "/icons/design.svg";
// import Lighting from "/icons/lighting.svg";
// import CompletePackage from "/icons/package.svg";
// import Payments from "/icons/payments.svg";
// import Scaleable from "/icons/scaleable.svg";
// import Logo from "/logo/logo.svg";


export default function WhyWorkWithUs() {
	return (
		<div className="flex w-full flex-col items-center justify-center gap-20">
			<div className="flex max-w-2xl flex-col items-center justify-center gap-4 text-center">
				<div className="group flex cursor-pointer items-center justify-center gap-2">
					{/* <Logo className="logo" /> */}
					<Image alt="logo" src={"/logo/logo.svg"} width={30} height={30} />
					<p className="text-[16px] font-medium text-[#f97316]">Features</p>
				</div>
				<h1 className="text-[40px] font-bold leading-[60px] md:text-[52px]">
					Here is why you'll love working with us
				</h1>
				<p className="__className_7b1666 text-xl font-normal leading-[26px]">
					We provide everything you need to grow your business.
				</p>
			</div>
			<div className="relative grid w-full place-items-center gap-16 md:grid-cols-2 lg:grid-cols-3">
				<div className="flex w-full flex-col items-center justify-center gap-10 text-center">
					<div className="flex h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-full bg-black">
						{/* <Lighting className="h-10 w-10" /> */}
						<Image alt="icon" src={"/icons/lighting.svg"} width={40} height={40} />
					</div>
					<div className="flex flex-col items-center gap-2">
						<h3 className="text-[24px] font-bold">Lightning Speed</h3>
						<p className="text-[18px] font-normal">
							Get your product to market in just 30 days
						</p>
					</div>
				</div>
				<div className="flex w-full flex-col items-center justify-center gap-10 text-center">
					<div className="flex h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-full bg-black">
						{/* <Design className="h-10 w-10" /> */}
						<Image alt="icon" src={"/icons/design.svg"} width={40} height={40} />
					</div>
					<div className="flex flex-col items-center gap-2">
						<h3 className="text-[24px] font-bold">Design Perfection</h3>
						<p className="text-[18px] font-normal">
							Beautiful, user-centric designs tailored for your brand
						</p>
					</div>
				</div>
				<div className="flex w-full flex-col items-center justify-center gap-10 text-center">
					<div className="flex h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-full bg-black">
						{/* <Payments className="h-10 w-10" /> */}
						<Image alt="icon" src={"/icons/payments.svg"} width={40} height={40} />
					</div>
					<div className="flex flex-col items-center gap-2">
						<h3 className="text-[24px] font-bold">Secure Payments</h3>
						<p className="text-[18px] font-normal">
							Seamless payment integration for smooth transactions
						</p>
					</div>
				</div>
				<div className="flex w-full flex-col items-center justify-center gap-10 text-center">
					<div className="flex h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-full bg-black">
						{/* <Scaleable className="h-10 w-10" /> */}
						<Image alt="icon" src={"/icons/scaleable.svg"} width={40} height={40} />
					</div>
					<div className="flex flex-col items-center gap-2">
						<h3 className="text-[24px] font-bold">Scalable Apps</h3>
						<p className="text-[18px] font-normal">
							Build scalable apps that grow with your business
						</p>
					</div>
				</div>
				<div className="flex w-full flex-col items-center justify-center gap-10 text-center">
					<div className="flex h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-full bg-black">
						{/* <Care className="h-10 w-10" /> */}
						<Image alt="icon" src={"/icons/care.svg"} width={40} height={40} />
					</div>
					<div className="flex flex-col items-center gap-2">
						<h3 className="text-[24px] font-bold">Continuous Care</h3>
						<p className="text-[18px] font-normal">
							Dedicated support to keep your app running smoothly
						</p>
					</div>
				</div>
				<div className="flex w-full flex-col items-center justify-center gap-10 text-center">
					<div className="flex h-[100px] w-[100px] items-center justify-center overflow-hidden rounded-full bg-black">
						{/* <CompletePackage className="h-10 w-10" /> */}
						<Image alt="icon" src={"/icons/package.svg"} width={40} height={40} />
					</div>
					<div className="flex flex-col items-center gap-2">
						<h3 className="text-[24px] font-bold">Complete Package</h3>
						<p className="text-[18px] font-normal">
							From idea to launch, everything you need under one roof
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
