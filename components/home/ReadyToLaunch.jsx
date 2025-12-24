import LogoBadge from "../common/LogoBadge";


export default function ReadyToLaunch() {
	return (
		<div className="group relative flex min-h-[300px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-l from-zinc-800 to-black px-4 sm:min-h-[350px] sm:rounded-3xl sm:px-6 md:min-h-[400px]">
			{/* Sparkles */}
			<span className="animate-sparkle-large absolute inset-0 rounded-[inherit]"></span>
			<span className="sparkle-static-large absolute inset-0 rounded-[inherit]"></span>

			<div className="relative z-10 flex flex-col items-center justify-center gap-4 sm:gap-5">
				<LogoBadge title="Vision into Reality" />
				<h2 className="max-w-2xl text-center text-[28px] font-semibold leading-[40px] text-white sm:text-3xl sm:leading-[48px] md:text-5xl md:leading-[60px]">
					Ready to launch your MVP in just 30 days?
				</h2>
			</div>
		</div>
	);
}
