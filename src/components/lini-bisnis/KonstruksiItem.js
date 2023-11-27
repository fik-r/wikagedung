'use client'
import { useRouter } from "next/navigation"
import Image from "next/image"
const KonstruksiItem = ({ type, name, thumbnail, route, proyekType, index }) => {
    const router = useRouter()
    return (
        <div className="flex flex-col rounded-lg shadow-lg w-[16.25rem] hover:cursor-pointer zoom" onClick={() => {
            router.push(`${route}/${index}?q=${proyekType}`)
        }}>
            <div className="rounded-t-lg bg-white_smoke w-full min-h-[20.25rem] relative" >
                <Image
                    quality={50} placeholder="blur"
                    blurDataURL={thumbnail}
                    style={{ objectFit: "cover"}}
                    src={thumbnail} fill className="rounded-t-lg" />
            </div>
            <div className="w-text-subhead-1 font-normal text-sooty mx-[1rem] mt-[1.25rem]">{type}</div>
            <div className="w-text-subhead-1 font-bold text-primary mx-[1rem] mt-[0.5rem] mb-[1.25rem]">{name}</div>
        </div>
    )
}

export default KonstruksiItem