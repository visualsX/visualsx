import LogoBadge from "../common/LogoBadge";


export default function ReadyToLaunch() {
	return (
		<div className="flex min-h-[400px] w-full items-center justify-center rounded-3xl bg-gradient-to-l from-zinc-800 to-black">
			<div className="flex flex-col items-center justify-center gap-5">
				<LogoBadge title="Vision into Reality" />
				<h2 className="max-w-2xl text-center text-3xl font-semibold text-white md:text-5xl md:leading-[60px]">
					Ready to launch your MVP in just 30 days?
				</h2>
			</div>
		</div>
	);
}
