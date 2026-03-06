'use client';

import { useState } from "react";
import Image from "next/image";
import SparklingButton from "../ui/sparkling-button";
import Link from "next/link";
import { Menu, X, WhatsApp } from "lucide-react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="sticky top-5 z-[100] mx-auto flex h-16 min-w-[300px] max-w-7xl items-center gap-x-2 rounded-2xl bg-white/60 px-3 backdrop-blur-sm ring-1 ring-black/5 sm:h-18 sm:gap-x-3 sm:px-4 md:h-20 md:gap-x-4">
			<a href="/" className="z-50">
				<div className="group flex items-center justify-center gap-2 font-bold text-lg sm:text-xl md:text-2xl">
					<div className="flex items-center gap-x-1">
						<Image 
							className="h-[18px] w-[18px] transform transition duration-300 ease-in-out group-hover:rotate-180 sm:h-[20px] sm:w-[20px] md:h-[32px] md:w-[32px]" 
							alt="logo" 
							src={"/logo/logo.svg"} 
							width={22} 
							height={22}
						/>
						<span>visualsX.</span>
					</div>
				</div>
			</a>

			{/* Desktop Navigation */}
			<nav className="hidden items-center gap-x-1.5 md:flex md:gap-x-2">
				<SparklingButton name="Services" href="/services" />
				<SparklingButton name="Portfolio" href="/portfolio" />
				<SparklingButton name="Careers" href="/careers" />
			</nav>

			{/* Mobile Menu Button */}
			<button 
				onClick={toggleMenu}
				className="ml-auto flex items-center justify-center rounded-full bg-black/5 p-2 text-black transition-colors hover:bg-black/10 md:hidden"
				aria-label="Toggle menu"
			>
				{isOpen ? <X size={24} /> : <Menu size={24} />}
			</button>

			{/* Mobile Navigation Overlay */}
			{isOpen && (
				<div className="absolute left-0 top-full z-[99999] mt-2 flex w-full flex-col gap-2 rounded-[2rem] bg-white p-4 shadow-xl ring-1 ring-black/5 md:hidden">
					<Link 
						href="/services"
						onClick={() => setIsOpen(false)}
						className="rounded-xl px-4 py-3 text-lg font-medium text-gray-800 transition-colors hover:bg-gray-50"
					>
						Services
					</Link>
					<Link 
						href="/portfolio"
						onClick={() => setIsOpen(false)}
						className="rounded-xl px-4 py-3 text-lg font-medium text-gray-800 transition-colors hover:bg-gray-50"
					>
						Portfolio
					</Link>
					<Link 
						href="/careers"
						onClick={() => setIsOpen(false)}
						className="rounded-xl px-4 py-3 text-lg font-medium text-gray-800 transition-colors hover:bg-gray-50"
					>
						Careers
					</Link>
					<div className="flex items-center w-full bg-amber-400 gap-x-2">
						<Link 
						href="https://cal.com/osamajavaid/30min" 
						target="_blank"
						onClick={() => setIsOpen(false)}
						className="w-full text-center rounded-xl bg-black px-4 py-2 text-lg font-medium text-white transition-opacity hover:opacity-90"
					>
						Book a Call
					</Link>
					<Link href="https://wa.me/923159591822" target="_blank">
						<Image src={"/icons/whatsapp.svg"} width={52} height={52} alt="whatsapp"/>
					</Link>
					</div>
				</div>
			)}

			<aside className="ml-auto hidden md:flex items-center gap-x-2">
				<Link 
					href="https://cal.com/osamajavaid/30min" 
					target="_blank" 
					className="cursor-pointer rounded-full bg-black px-3 py-2.5 text-xs font-semibold text-white sm:px-4 sm:py-3 sm:text-sm md:px-5 md:py-[13px]"
				>
					<span className="hidden sm:inline">Free Product Consultation</span>
					<span className="sm:hidden">Book Call</span>
				</Link>
				<Link href="https://wa.me/923159591822" target="_blank">
				<Image src={"/icons/whatsapp.svg"} width={42} height={42} alt="whatsapp"/>
			</Link>
			</aside>
		</header>
	);
}
