'use client'
import cn from "classnames"
import { useState, useEffect } from "react"
import { LANGUAGE, ENGLISH } from "@/utils/constants"
import Image from "next/image"
import useResponsive from "@/utils/media-query"
const TimelineInformasi = ({ data }) => {
    const { isMobile } = useResponsive();
    const [activeIndex, setActiveIndex] = useState(0)
    const [contentOpacity, setContentOpacity] = useState(0);
    const [language, setLanguage] = useState("")

    useEffect(() => {
        // Trigger fade-in animation every time activeIndex changes
        setContentOpacity(0);
        setTimeout(() => {
            setContentOpacity(1);
        }, 200);
    }, [activeIndex]);

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

    const Timeline = () => {
        return (
            <div className="flex flex-row w-full z-10">
                {
                    data.map((item, index) => {
                        return (
                            <div className={cn("flex flex-col", index < data.length - 1 ? "flex-1" : "flex-none")} key={index}>
                                <div className="flex flex-row items-center">
                                    <img className={cn("hover:cursor-pointer zoom", isMobile ? "w-[1.25rem] h-[1.25rem]" : "w-[2rem] h-[2rem]")} src={activeIndex == index ? "/icons/ic_timeline_active.svg" : "/icons/ic_timeline_default.svg"} onClick={() => {
                                        setActiveIndex(index)
                                    }} />
                                    {index < data.length - 1 ? <div className="line"></div> : <></>}
                                </div>
                                <div className={cn("text-white", isMobile ? "w-text-caption-mobile mt-[0.313rem]" : "w-text-button mt-[0.438rem] w-max")}>{item.year}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className={cn(isMobile ? "mt-[2rem] px-[1rem]" : "py-[5rem] px-[2.5rem]")}>
            <div className={cn(isMobile ? "flex flex-row justify-start w-text-body-2 font-semibold" : "flex flex-row justify-center w-text-title-1 font-semibold")}>Timeline Transformasi</div>
            <div className={cn("relative bg-primary rounded-lg", isMobile ? "mt-[1rem] py-[2rem] px-[1.5rem]" : "mx-[6.25rem] my-[3.75rem] px-[6.938rem] py-[3.125rem] min-h-[27.688rem]")}>
                <div className="flex flex-col z-10">
                    {/* timeline */}
                    <Timeline />
                    <div className={cn("z-10", isMobile ? "flex flex-col" : "flex flex-row gap-x-[2.5rem] mt-[2.313rem]", contentOpacity == 1 ? "fade-in" : "hidden")}>
                        <div className={cn("rounded-lg mt-[1.25rem] relative", isMobile ? "w-full min-h-[13.938rem]" : "min-w-[13.125rem] min-h-[16.688rem] ")}>
                            <Image
                                quality={50} placeholder="blur"
                                blurDataURL={data[activeIndex].image}
                                style={{ objectFit: "cover"}}
                                src={data[activeIndex].image} fill className="rounded-lg" />
                        </div>
                        <div className="flex flex-col">
                            {!isMobile && <div className="w-text-display-4 text-white mb-[0.25rem]">{data[activeIndex].year}</div>}
                            <div className={cn(isMobile ? "w-text-body-1 font-bold text-white mt-[1rem]" : "w-text-title-1 text-white font-bold mb-[1.875rem]")}>{language == ENGLISH ? data[activeIndex].title_en : data[activeIndex].title}</div>
                            <div className={cn(isMobile ? "w-text-body-1 text-white mt-[0.75rem]" : "w-text-body-2 text-white leading-[1.175rem]")}>{language == ENGLISH ? data[activeIndex].description_en : data[activeIndex].description}</div>
                        </div>
                    </div>
                </div>
                {!isMobile &&
                    <img className="absolute full right-0 bottom-0 h-[15.5rem]" src="/images/bg_project_overview.svg" />}
            </div>
        </div>
    )
}

export default TimelineInformasi