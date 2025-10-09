import Image from "next/image";
import SparklingButton from "../ui/sparkling-button";
import Link from "next/link";

export default function Header() {
	return (
		<header className="bg-black/10 px-4 max-w-7xl items-center mx-auto flex gap-x-4 h-20 rounded-full">
			<a href="/">
				<div className="group flex items-center justify-center gap-2 font-bold md:text-2xl">
					{/* <Logo className="logo h-[30px] w-[30px]" /> */}
					<div className="bg-black/20 p-2.5 rounded-full">
						<Image className="transform transition duration-300 ease-in-out group-hover:rotate-180" alt="logo" src={"/logo/white-logo.svg"} width={22} height={22} />

					</div>
					{/* <p className="text-md">visuals<strong className="text-[#f97316]">X</strong>.</p> */}
				</div>
			</a>
			<nav className="flex items-center gap-x-2">
				<SparklingButton name="How We Work?" href="#howWeWorks" />
				<SparklingButton name="Recent Projects" href="/sd" />
				<SparklingButton name="Testimonials" href="/sd" />

			</nav>
			<aside>
				<Link href="https://cal.com/osamajavaid/30min" target="_blank" className="font-semibold text-sm text-black py-[13px] px-5 rounded-full cursor-pointer bg-white">
					Fee Product Consultation
				</Link>
			</aside>
		</header>
	);
}
