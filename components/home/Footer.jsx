'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
// import Github from "/public/icons/github.svg";
// import Linkedin from "/public/icons/linkedin.svg";


export default function Footer() {
	const [year, setYear] = useState(null);

	useEffect(() => {
		setYear(new Date().getFullYear());
	}, []);

	return (
		<div className="mt-0 flex w-full flex-col items-center justify-center gap-3 border-t border-black/10 pt-2">
			<p className="text-md font-normal">
				Copyright © {year} visualsX. All Rights Reserved.
			</p>
			<div className="flex items-center gap-4">
				<a target="_blank" href="https://www.linkedin.com/company/visualsx">
					<Image alt="github" src={"/icons/github.svg"} height={24} width={24} />
					{/* <Linkedin className="h-6 w-6" /> */}
				</a>
				<a target="_blank" href="https://github.com/visualsx">
					<Image alt="linkedin" src={"/icons/linkedin.svg"} height={24} width={24} />
					{/* <Github className="h-6 w-6" /> */}
				</a>
			</div>
		</div>
	);
}
