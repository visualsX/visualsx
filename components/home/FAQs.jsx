"use client";
// import Logo from "/public/logo/logo.svg";

import React from "react";

import Image from "next/image";
import FAQ from "../FAQ";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import LogoBadge from "../common/LogoBadge";

export default function FAQs() {
	return (
		<div className="flex w-full max-w-full flex-col items-center justify-center gap-12 px-4 sm:max-w-[750px] sm:gap-16 sm:px-0 md:gap-20">

			<div className="flex flex-col items-center justify-center gap-3 text-center sm:gap-4">
				<LogoBadge title="Faqs" />
				<h1 className="text-[32px] font-bold leading-[48px] sm:text-[40px] sm:leading-[56px] md:text-[52px] md:leading-[60px]">
					Frequently Asked Questions
				</h1>
				<p className="__className_7b1666 text-base font-normal leading-[24px] sm:text-lg sm:leading-[26px] md:text-xl">
					Here are some of the most common questions we get asked.
				</p>
			</div>
			<Accordion
				type="single"
				collapsible
				className="w-full"
				defaultValue="item-1"
			>
				{
					faqs.map((faq, index) => (
						<AccordionItem key={index} value={`item-${index + 1}`}>
							<AccordionTrigger className="text-base sm:text-lg md:text-xl">{faq.question}</AccordionTrigger>
							<AccordionContent className="flex flex-col gap-4 text-balance">
								{faq.answer}
							</AccordionContent>
						</AccordionItem>
					))
				}


			</Accordion>
		</div>
	);
}
const faqs = [
	{
		question: "What is an MVP and why do I need one?",
		answer:
			"An MVP, or Minimum Viable Product, is a simplified version of your product with just enough features to satisfy early users and provide feedback for future development. It's essential for testing your concept in the market quickly and cost-effectively.",
	},
	{
		question: "Can I choose specific features for my MVP?",
		answer:
			"We provide ongoing support to address any issues during user onboarding and to ensure the smooth operation of your product. Our support includes technical assistance, updates, and enhancements as needed.",
	},
	{
		question: "Can I choose specific features for my MVP?",
		answer:
			"Yes, our development process is highly collaborative. We'll work with you to identify and prioritize the most critical features for your MVP to ensure it meets your business goals.",
	},
	{
		question: "How do I get started with visualsX?",
		answer:
			"Simply book a call with us to discuss your project requirements. We'll guide you through our process, understand your vision, and create a tailored plan to bring your product to life.",
	},
	{
		question: "What if my project requirements change during development?",
		answer:
			"We understand that project needs can evolve. Our flexible approach allows for adjustments to be made during the development process. We'll work closely with you to accommodate changes while keeping the project on track.",
	},
	{
		question: "How do you handle intellectual property and confidentiality?",
		answer:
			"We take confidentiality and intellectual property very seriously. All projects are covered by non-disclosure agreements (NDAs) to protect your ideas and sensitive information. Upon completion, you retain full ownership of the developed product.",
	},
	{
		question: "Can you help with marketing and user acquisition post-launch?",
		answer:
			"While our primary focus is on product development, we can offer basic marketing guidance and connect you with trusted partners who specialize in digital marketing and user acquisition to help promote your product.",
	},
];



// <div className="flex w-full flex-col items-center justify-center gap-20">
// 	<div className="flex flex-col items-center justify-center gap-4 text-center">
// 		<div className="group flex cursor-pointer items-center justify-center gap-2">
// 			{/* <Logo className="logo" /> */}
// 			<Image alt="logo" src={"/logo/logo.svg"} width={30} height={30} />
// 			<p className="text-[16px] font-medium text-[#f97316]">Faqs</p>
// 		</div>
// 		<h1 className="text-[40px] font-bold leading-[60px] md:text-[52px]">
// 			Frequently Asked Questions
// 		</h1>
// 		<p className="__className_7b1666 text-xl font-normal leading-[26px]">
// 			Here are some of the most common questions we get asked.
// 		</p>
// 	</div>
// 	<div className="flex w-full flex-col items-start justify-center gap-4 md:w-[800px]">
// 		<FAQ
// 			question="What is an MVP and why do I need one?"
// 			answer="An MVP, or Minimum Viable Product, is a simplified version of your product with just enough features to satisfy early users and provide feedback for future development. It's essential for testing your concept in the market quickly and cost-effectively."
// 		/>
// 		<FAQ
// 			question="Can I choose specific features for my MVP?"
// 			answer="We provide ongoing support to address any issues during user onboarding and to ensure the smooth operation of your product. Our support includes technical assistance, updates, and enhancements as needed."
// 		/>
// 		<FAQ
// 			question="Can I choose specific features for my MVP?"
// 			answer="Yes, our development process is highly collaborative. We'll work with you to identify and prioritize the most critical features for your MVP to ensure it meets your business goals."
// 		/>
// 		<FAQ
// 			question="How do I get started with visualsX?"
// 			answer="Simply book a call with us to discuss your project requirements. We'll guide you through our process, understand your vision, and create a tailored plan to bring your product to life."
// 		/>
// 		<FAQ
// 			question="What if my project requirements change during development?"
// 			answer="We understand that project needs can evolve. Our flexible approach allows for adjustments to be made during the development process. We'll work closely with you to accommodate changes while keeping the project on track."
// 		/>
// 		<FAQ
// 			question="How do you handle intellectual property and confidentiality?"
// 			answer="We take confidentiality and intellectual property very seriously. All projects are covered by non-disclosure agreements (NDAs) to protect your ideas and sensitive information. Upon completion, you retain full ownership of the developed product."
// 		/>
// 		<FAQ
// 			question="Can you help with marketing and user acquisition post-launch?"
// 			answer="While our primary focus is on product development, we can offer basic marketing guidance and connect you with trusted partners who specialize in digital marketing and user acquisition to help promote your product."
// 		/>
// 	</div>
// </div>
