import Link from "next/link";

export default function SparklingButton({ name = "", href = "#" }) {
    return (
        <Link
            href={href}
            className="relative overflow-hidden px-5 py-2.5 rounded-full hover:border hover:border-white text-white font-semibold transition-all duration-300 bg-black/20 hover:bg-[#f97316] group  hover:shadow-[0_0_35px_#f97316] transform-gpu hover:scale-105 will-change-transform"
        >
            <span className="relative z-10 text-sm font-semibold">{name}</span>

            {/* <!-- Moving sparkles --> */}
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-sparkle-move"></span>

            {/* <!-- Static sparkles --> */}
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 sparkle-static"></span>

            {/* <!-- Border --> */}
            {/* <span className="absolute inset-0 rounded-full hover:border-2 hover:border-white"></span> */}
        </Link>
    )
}
