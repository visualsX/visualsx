"use client";

import Image from "next/image";
import { useRef } from "react";
import LogoBadge from "../common/LogoBadge";

export default function Testimonials() {
	const scrollContainerRef = useRef(null);

	const testimonials = [
		{
			name: "Nasir Waheed",
			role: "Finance Director, NIE",
			image: "https://avatars.githubusercontent.com/u/93568072",
			content:
				"The Finance Management System built by visualsX has completely transformed our auditing and budgeting processes. It's secure, fast, and handles our complex financial data with ease.",
			rating: 5,
			bgColor: "#e8f1ff",
		},
		{
			name: "Imad Ahmad",
			role: "Founder, GardenHub",
			image: "https://placehold.co/100x100/png",
			content:
				"GardenHub is now the go-to marketplace for plant lovers in the UAE, thanks to the stunning platform visualsX created. The smooth shopping experience has significantly increased our customer retention.",
			rating: 5,
			bgColor: "#f3e8ff",
		},
		{
			name: "Muhammad Jamil",
			role: "Operations Head, Hysabat",
			image: "https://placehold.co/100x100/png",
			content:
				"Our ERP solution 'Hysabat' required a sophisticated architecture, and visualsX delivered per excellence. The system is intuitive and has optimized our business operations across all departments.",
			rating: 5,
			bgColor: "#ffebd3",
		},
		{
			name: "Wafiullah Salarzai",
			role: "CEO, JMM Technologies",
			image: "https://avatars.githubusercontent.com/u/130735471?v=4",
			content:
				"As a software agency, we needed a website that reflects our technical prowess. visualsX delivered a high-performance, visually striking site that has helped us close more deals.",
			rating: 5,
			bgColor: "#e8f1ff",
		},
	];

	const scroll = (direction) => {
		if (scrollContainerRef.current) {
			const isMobile = window.innerWidth < 768;
			const scrollAmount = isMobile ? 300 : 400;
			const newScrollPosition =
				scrollContainerRef.current.scrollLeft +
				(direction === "left" ? -scrollAmount : scrollAmount);
			scrollContainerRef.current.scrollTo({
				left: newScrollPosition,
				behavior: "smooth",
			});
		}
	};

	return (
		<div id="testimonials" className="flex w-full flex-col items-center justify-center gap-12 sm:gap-16 md:gap-20">
			{/* Header Section */}
			<div className="flex max-w-2xl flex-col items-center justify-center gap-3 px-4 text-center sm:gap-4">
				<LogoBadge title="Testimonials" />
				<h1 className="text-[32px] font-bold leading-[48px] sm:text-[40px] sm:leading-[56px] md:text-[52px] md:leading-[60px]">
					What Our Clients Say
				</h1>
				<p className="__className_7b1666 text-base font-normal leading-[24px] sm:text-lg sm:leading-[26px] md:text-xl">
					Don't just take our word for it. Here's what founders and product leaders have to say about working with us.
				</p>
			</div>

			{/* Carousel Container */}
			<div className="relative w-full">
				{/* Left Arrow */}
				<button
					onClick={() => scroll("left")}
					className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 transform rounded-full bg-black/80 p-2 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:ring-offset-2 sm:block sm:p-2.5 md:p-3"
					aria-label="Previous testimonials"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className="h-5 w-5 sm:h-6 sm:w-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.75 19.5L8.25 12l7.5-7.5"
						/>
					</svg>
				</button>

				{/* Scrollable Container */}
				<div
					ref={scrollContainerRef}
					className="scrollbar-hide flex gap-4 overflow-x-auto scroll-smooth px-4 pb-4 sm:gap-5 sm:px-10 md:gap-6 md:px-12"
					style={{
						scrollbarWidth: "none",
						msOverflowStyle: "none",
						WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
					}}
				>
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="flex min-h-[300px] min-w-[280px] max-w-[280px] flex-shrink-0 transform flex-col items-start justify-between gap-5 rounded-[24px] p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl sm:min-h-[320px] sm:min-w-[320px] sm:max-w-[320px] sm:gap-6 sm:rounded-[28px] sm:p-7 md:min-h-[340px] md:min-w-[360px] md:max-w-[360px] md:rounded-[30px] md:p-8 lg:min-w-[380px] lg:max-w-[380px]"
							style={{ backgroundColor: testimonial.bgColor }}
						>
							{/* Stars */}
							<div className="flex gap-1 text-[#f97316]">
								{[...Array(testimonial.rating)].map((_, i) => (
									<svg
										key={i}
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										className="h-4 w-4 sm:h-5 sm:w-5"
									>
										<path
											fillRule="evenodd"
											d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
											clipRule="evenodd"
										/>
									</svg>
								))}
							</div>

							{/* Content */}
							<p className="flex-grow text-[14px] font-medium leading-[22px] text-gray-800 sm:text-[15px] sm:leading-[24px] md:text-[16px] md:leading-[26px]">
								"{testimonial.content}"
							</p>

							{/* Author Info */}
							<div className="flex items-center gap-3 sm:gap-4">
								<div className="relative h-[50px] w-[50px] flex-shrink-0 overflow-hidden rounded-full border-2 border-white sm:h-[55px] sm:w-[55px] md:h-[60px] md:w-[60px]">
									<Image
										src={testimonial.image}
										alt={testimonial.name}
										fill
										className="object-cover"
									/>
								</div>
								<div className="flex flex-col">
									<p className="text-[16px] font-bold text-gray-900 sm:text-[17px] md:text-[18px]">
										{testimonial.name}
									</p>
									<p className="text-[12px] text-gray-600 sm:text-[13px] md:text-[14px]">
										{testimonial.role}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Right Arrow */}
				<button
					onClick={() => scroll("right")}
					className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 transform rounded-full bg-black/80 p-2 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#f97316] focus:ring-offset-2 sm:block sm:p-2.5 md:p-3"
					aria-label="Next testimonials"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className="h-5 w-5 sm:h-6 sm:w-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M8.25 4.5l7.5 7.5-7.5 7.5"
						/>
					</svg>
				</button>
			</div>

			{/* Mobile Scroll Hint */}
			<p className="text-center text-sm text-gray-500 sm:hidden">
				← Swipe to see more →
			</p>
		</div>
	);
}
