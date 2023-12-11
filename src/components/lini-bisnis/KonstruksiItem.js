'use client'
import { useRouter } from "next/navigation"
import Image from "next/image"
import useResponsive from "@/utils/media-query"
import cn from "classnames"
const KonstruksiItem = ({ type, name, thumbnail, route, proyekType, index }) => {
    const { isMobile } = useResponsive()
    const router = useRouter()
    return (
        <div className={cn("flex flex-col rounded-lg shadow-lg hover:cursor-pointer", isMobile ? "w-full" : " w-[16.25rem] zoom")} onClick={() => {
            router.push(`${route}/${index}?q=${proyekType}`)
        }}>
            <div className={cn("rounded-t-lg bg-white_smoke w-full relative", isMobile ? "max-h-[13.438rem] min-h-[13.438rem]" : "max-h-[20.25rem] min-h-[20.25rem]")} >
                <Image
                    quality={50} placeholder="blur"
                    blurDataURL={thumbnail}
                    style={{ objectFit: "cover" }}
                    src={thumbnail} fill className="rounded-t-lg" />
            </div>
            <div className="w-text-subhead-1 font-normal text-sooty mx-[1rem] mt-[1.25rem]">{type}</div>
            <div className="w-text-subhead-1 font-bold text-primary mx-[1rem] mt-[0.5rem] mb-[1.25rem]">{name}</div>
        </div>
    )
}

export default KonstruksiItem