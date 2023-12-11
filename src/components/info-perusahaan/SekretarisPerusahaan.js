import { LANGUAGE, ENGLISH } from "@/utils/constants"
import { useEffect, useState } from "react"
import Image from "next/image"
import cn from "classnames"
import useResponsive from "@/utils/media-query"
const SekretarisPerusahaan = ({ data }) => {
    const { isMobile } = useResponsive()
    const [language, setLanguage] = useState("")
    useEffect(() => {

        function setLanguageOnStorageChange() {
            setLanguage(localStorage.getItem(LANGUAGE))
        }
        setLanguageOnStorageChange()

        window.addEventListener('storage', setLanguageOnStorageChange)
        return () => {
            window.removeEventListener('storage', setLanguageOnStorageChange)
        }
    }, [])
    return (
        <div className={cn("flex flex-col w-full", isMobile ? "px-[1rem]" : "px-[6.25rem]")}>
            <div className={cn(isMobile ? "flex flex-col" : "flex flex-row gap-x-[2.5rem]")}>
                <div className={cn("bg-white_smoke rounded rounded-lg relative", isMobile ? "w-full min-h-[20.5rem] max-h-[20.5rem]" : "w-[26.25rem] h-[34.375rem] min-w-[26.25rem] min-h-[34.375rem]")}>
                    <Image
                        quality={50} placeholder="blur"
                        blurDataURL={data.foto}
                        style={{ objectFit: "cover", objectPosition: "top" }}
                        src={data.foto} fill className="rounded-lg" />
                </div>
                <div className={cn("flex flex-col", isMobile ? "mt-[1.5rem]" : "")}>
                    <div className={cn("text-primary font-semibold", isMobile ? "w-text-headline-1" : "w-text-display-3")}>{data.name}</div>
                    <div className={cn("font-normal text-sooty", isMobile ? "w-text-body-2 mt-[0.5rem]" : "w-text-title-1 mt-[0.5rem] mb-[2.5rem]" )}>{language == ENGLISH ? data.position_en : data.position}</div>
                    <div className={cn("font-normal text-jet", isMobile ? "w-text-body-1 mt-[1.5rem]" : "w-text-body-2 ")}>{data.profil}</div>
                </div>
            </div>
        </div>
    )
}

export default SekretarisPerusahaan