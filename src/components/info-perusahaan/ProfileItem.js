import { useRouter } from "next/navigation"
import Image from "next/image"
import cn from "classnames"
import useResponsive from "@/utils/media-query"
const ProfileItem = ({ job, name, image, index, isDireksi }) => {
    const { isMobile } = useResponsive();
    const router = useRouter()
    return (
        <div className={cn("flex flex-col rounded-lg shadow-lg cursor-pointer", isMobile ? "w-full" : "w-[22.5rem]")} onClick={() => {
            router.push(`/info-perusahaan/organisasi/${(index + 1)}?q=${isDireksi ? "Direksi" : "Komisaris"}`)
        }}>
            <div className={cn("rounded-t-lg bg-white_smoke w-full relative", isMobile ? "max-h-[13.438rem] min-h-[13.438rem]" : "max-h-[20.25rem] min-h-[20.25rem]")}>
                <Image
                    quality={50}
                    style={{ objectFit: "cover", objectPosition: "top" }}
                    alt="img_direksi" src={image} fill className="rounded-t-lg" />
            </div>
            <div className={cn("text-primary", isMobile ? "mx-[1rem] mt-[1.25rem] w-text-subhead-1 font-bold" : "w-text-headline-1 mx-[1rem] mt-[1.25rem]")}>{name}</div>
            <div className={cn("text-sooty", isMobile ? "mx-[1rem] mt-[0.5rem] mb-[1.25rem] w-text-body-1 font-normal" : "w-text-body-2 mx-[1rem] mb-[1.25rem]")}>{job}</div>
        </div>
    )
}

export default ProfileItem