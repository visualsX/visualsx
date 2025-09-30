import Image from "next/image";


export default function ReadyToLaunch() {
	return (
		<div className="flex min-h-[400px] w-full items-center justify-center rounded-3xl bg-gradient-to-l from-zinc-800 to-black">
			<div className="flex flex-col items-center justify-center gap-5">
				<div className="group flex cursor-pointer items-center justify-center gap-2">
					{/* <Logo className="logo" /> */}
					<Image alt="logo" src={"/logo/logo.svg"} width={30} height={30} />
					<p className="text-[16px] font-medium text-[#f97316]">
						Vision into Reality
					</p>
				</div>
				<h2 className="max-w-2xl text-center text-3xl font-semibold text-white md:text-5xl md:leading-[60px]">
					Ready to launch your MVP in just 30 days?
				</h2>
			</div>
		</div>
	);
}
