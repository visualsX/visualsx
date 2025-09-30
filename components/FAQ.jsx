"use client";
import React, { useState } from "react";
import Image from "next/image";
// import Minus from "@/public/icons/minus.svg";
// import Plus from "/icons/plus.svg";


export default function FAQ({ question = "question?", answer = "answer" }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			onClick={() => setIsOpen(!isOpen)}
			className="flex w-full cursor-pointer flex-col items-start gap-2 rounded-lg border-b border-black/10 p-4 py-4"
		>
			<div className="flex w-full items-start justify-between gap-6">
				<h1 className="text-sm font-medium capitalize md:text-xl">
					{question}
				</h1>
				{/* <Minus /> */}
				{/* <Image alt="minus-icon" src={"/icons/minus.svg"} width={10} height={10} /> */}
				{isOpen ? <Image alt="minus-icon" src={"/icons/minus.svg"} width={10} height={10} /> : <Image alt="plus-icon" src={"/icons/plus.svg"} width={10} height={10} />}
			</div>
			{isOpen && (
				<p className="md:text-md mt-2 max-w-4xl text-[13px] font-normal leading-normal opacity-90 md:text-[15px]">
					{answer}
				</p>
			)}
		</div>
	);
}
