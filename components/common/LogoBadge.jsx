import Image from 'next/image'

export default function LogoBadge({ title = "Badge Title" }) {
    return (
        <div className="group flex cursor-pointer items-center justify-center gap-2">
            <Image className='h-6 w-6 transform transition duration-300 ease-in-out group-hover:rotate-180' alt="logo" src={"/logo/logo.svg"} width={30} height={30} />
            <p className="text-[16px] font-medium text-[#f97316]">{title}</p>
        </div>
    )
}
