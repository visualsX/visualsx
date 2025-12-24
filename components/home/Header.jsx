'use client';

import { useState } from "react";
import Image from "next/image";
import SparklingButton from "../ui/sparkling-button";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="relative mx-auto flex h-16 min-w-[300px] max-w-7xl items-center gap-x-2 rounded-full bg-black/10 px-3 sm:h-18 sm:gap-x-3 sm:px-4 md:h-20 md:gap-x-4">
			<a href="/" className="z-50">
				<div className="group flex items-center justify-center gap-2 font-bold text-lg sm:text-xl md:text-2xl">
					<div className="rounded-full bg-black/20 p-2 sm:p-2.5">
						<Image 
							className="h-[18px] w-[18px] transform transition duration-300 ease-in-out group-hover:rotate-180 sm:h-[20px] sm:w-[20px] md:h-[22px] md:w-[22px]" 
							alt="logo" 
							src={"/logo/white-logo.svg"} 
							width={22} 
							height={22}
						/>
					</div>
				</div>
			</a>

			{/* Desktop Navigation */}
			<nav className="hidden items-center gap-x-1.5 md:flex md:gap-x-2">
				<SparklingButton name="How We Work?" href="#howWeWorks" />
				<SparklingButton name="Recent Projects" href="#recentProjects" />
				<SparklingButton name="Testimonials" href="#testimonials" />
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
						href="#howWeWorks"
						onClick={() => setIsOpen(false)}
						className="rounded-xl px-4 py-3 text-lg font-medium text-gray-800 transition-colors hover:bg-gray-50"
					>
						How We Work?
					</Link>
					<Link 
						href="#recentProjects"
						onClick={() => setIsOpen(false)}
						className="text-3xl font-bold tracking-tight text-gray-900 transition-colors hover:text-[#f97316]"
					>
						Recent Projects
					</Link>
					<Link 
						href="#testimonials"
						onClick={() => setIsOpen(false)}
						className="text-3xl font-bold tracking-tight text-gray-900 transition-colors hover:text-[#f97316]"
					>
						Testimonials
					</Link>
					<Link 
						href="https://cal.com/osamajavaid/30min" 
						target="_blank"
						onClick={() => setIsOpen(false)}
						className="mt-2 text-center rounded-xl bg-black px-4 py-3 text-lg font-medium text-white transition-opacity hover:opacity-90"
					>
						Book a Call
					</Link>
				</div>
			)}

			<aside className="ml-auto hidden md:block">
				<Link 
					href="https://cal.com/osamajavaid/30min" 
					target="_blank" 
					className="cursor-pointer rounded-full bg-white px-3 py-2.5 text-xs font-semibold text-black sm:px-4 sm:py-3 sm:text-sm md:px-5 md:py-[13px]"
				>
					<span className="hidden sm:inline">Free Product Consultation</span>
					<span className="sm:hidden">Book Call</span>
				</Link>
			</aside>
		</header>
	);
}
