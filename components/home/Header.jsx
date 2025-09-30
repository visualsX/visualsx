import Image from "next/image";

export default function Header() {
	return (
		<a href="/">
			<div className="group flex items-center justify-center gap-2 font-bold md:text-2xl">
				{/* <Logo className="logo h-[30px] w-[30px]" /> */}
				<Image className="transform transition duration-300 ease-in-out group-hover:rotate-180" alt="logo" src={"/logo/logo.svg"} width={30} height={30} />
				<p className="text-md">visuals<strong className="text-[#f97316]">X</strong>.</p>
			</div>
		</a>
	);
}
