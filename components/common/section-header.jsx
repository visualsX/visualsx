import LogoBadge from "./LogoBadge";

export default function SectionHeader({
    badgeTitle=null,
    title=null,
    description=null
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
                    {badgeTitle&&<LogoBadge title={badgeTitle}/>}
                   {title&& <h1 className="section-heading">
                       {title}
                    </h1>}
                   {description&& <p className="text-base font-normal leading-[24px] sm:text-lg sm:leading-[26px] md:text-xl">
                       {description}
                    </p>}
                </div>
  )
}
