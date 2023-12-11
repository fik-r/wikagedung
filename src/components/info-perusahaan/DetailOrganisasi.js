import { LANGUAGE, ENGLISH } from "@/utils/constants"
import { useState, useEffect } from "react"
import cn from "classnames"
import useResponsive from "@/utils/media-query"

const DetailOrganisasi = ({ data, index, type }) => {
    const { isMobile } = useResponsive()
    const [language, setLanguage] = useState("")
    const [activeIndex, setActiveIndex] = useState(index)
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
        <div className={cn("w-full", isMobile ? "px-[1rem]" : "px-[6.25rem]")}>
            <div className="relative flex flex-col">
                <div className={cn("text-sooty", isMobile ? "w-text-title-1 font-bold mt-[2.5rem]" : "w-text-display-2 mt-[2.5rem]")}>{type == "Komisaris" ? language == ENGLISH ? "Profile Board of Commissioners" : "Profil Dewan Komisaris" : language == ENGLISH ? "Profile Directors" : "Profil Direksi"}</div>
            </div>
            <div className={cn("flex", isMobile ? "flex-col" : "flex-row mt-[3.75rem] gap-x-[2.5rem]")}>
                <img alt="detail_img" className={cn("bg-white_smoke rounded rounded-lg", isMobile ? "w-full min-h-[20.5rem] max-h-[20.5rem] mt-[1.5rem]" : "min-w-[26.25rem] max-w-[26.25rem] min-h-[34.375rem] max-h-[34.375rem] ")} style={{ objectFit: "cover", objectPosition: "top" }} src={data[activeIndex].foto} />
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between">
                        <div className={cn("text-primary", isMobile ? "w-text-headline-1 font-bold mt-[1.5rem]" : "w-text-display-3 ")}>{data[activeIndex].name}</div>
                        {!isMobile && <>
                            <div className="flex flex-row">
                                <img src={activeIndex == 0 ? "/icons/ic_circle_left_disabled.svg" : "/icons/ic_circle_right_black.svg"} className={cn("cursor-pointer w-[2.5rem] h-[2.5rem]", activeIndex == 0 ? "" : "rotate-180")}
                                    onClick={() => {
                                        if (activeIndex != 0)
                                            setActiveIndex(activeIndex - 1)
                                    }} />
                                <img src={activeIndex == data.length - 1 ? "/icons/ic_circle_left_disabled.svg" : "/icons/ic_circle_right_black.svg"} className={cn("cursor-pointer ml-[1.25rem] w-[2.5rem] h-[2.5rem]", activeIndex == data.length - 1 ? "rotate-180" : "")}
                                    onClick={() => {
                                        if (activeIndex != data.length - 1)
                                            setActiveIndex(activeIndex + 1)
                                    }}
                                />
                            </div>
                        </>}
                    </div>
                    <div className={cn("text-sooty font-normal mt-[0.5rem]", isMobile ? "w-text-body-2" : "w-text-title-1")}>{data[activeIndex].position}</div>
                    <div className={cn("text-jet mt-[2.5rem]", isMobile ? "w-text-body-1 mt-[1.5rem]" : "w-text-body-2 ")}>{data[activeIndex].profil}</div>
                </div>

            </div>
        </div>
    )
}

export default DetailOrganisasi