import { LANGUAGE, ENGLISH } from "@/utils/constants"
import { useState, useEffect } from "react"
import cn from "classnames"
import Image from "next/image"
import useResponsive from "@/utils/media-query"
const DetailProyek = ({ index, detail }) => {
    const { isMobile } = useResponsive()
    const [language, setLanguage] = useState("")
    const [activeIndex, setActiveIndex] = useState(index - 1)
    const ProjectItem = ({ title, description }) => {
        return (
            <div className="flex flex-col">
                <div className={cn("text-sooty", isMobile ? "w-text-subhead-1 font-bold" : "w-text-title-1")}>{title}</div>
                <div className={cn("font-medium text-hard_coal", isMobile ? "w-text-body-1 mt-[0.25rem]" : "w-text-body-2 mt-[0.75rem]")}>{description}</div>
            </div>
        )
    }

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
        <div className={cn("flex flex-col w-full", isMobile ? "px-[1rem]" : " px-[6.25rem]")}>
            <div className={cn("flex flex-row justify-between", isMobile ? "mt-[2.5rem] mb-[1.5rem]" : "my-[2.5rem]")}>
                <div className={cn("flex flex-col", isMobile ? "w-[16.25rem]" : "")}>
                    <div className={cn(isMobile ? "w-text-body-1 font-medium text-black_oaf" : "w-text-subhead-2 text-black_oaf font-medium")}>{detail[activeIndex].data.type}</div>
                    <div className={cn(isMobile ? "font-bold w-text-title-1 text-sooty mt-[0.625rem]" : "w-text-display-2 text-sooty mt-[0.625rem]")}>{detail[activeIndex].data.name}</div>
                </div>
                <div className={cn("flex flex-row", isMobile ? "gap-x-[0.625rem]" : "")}>
                    <img src={activeIndex == 0 ? "/icons/ic_circle_left_disabled.svg" : "/icons/ic_circle_right_black.svg"} className={cn("cursor-pointer", isMobile ? "w-[1.5rem] h-[1.5rem]" : "w-[2.5rem] h-[2.5rem]", activeIndex == 0 ? "" : "rotate-180")}
                        onClick={() => {
                            if (activeIndex != 0)
                                setActiveIndex(activeIndex - 1)
                        }} />
                    <img src={activeIndex == detail.length - 1 ? "/icons/ic_circle_left_disabled.svg" : "/icons/ic_circle_right_black.svg"} className={cn("cursor-pointer", isMobile ? "w-[1.5rem] h-[1.5rem]" : "ml-[1.25rem] w-[2.5rem] h-[2.5rem]", activeIndex == detail.length - 1 ? "rotate-180" : "")}
                        onClick={() => {
                            if (activeIndex != detail.length - 1)
                                setActiveIndex(activeIndex + 1)
                        }}
                    />
                </div>
            </div>
            <div className={cn(isMobile ? "flex flex-col gap-y-[1rem]" : "grid grid-cols-2 gap-x-[2.5rem]")}>
                <div className="flex flex-col">
                    <div className={cn("text-sooty", isMobile ? "w-text-subhead-1" : "w-text-title-1 font-bold")}>{language == ENGLISH ? "Project Information" : "Informasi Proyek"}</div>
                    <div className={cn("text-jet", isMobile ? "w-text-body-1 font-normal mt-[0.75rem]" : "w-text-body-2 mt-[1.5rem]")} dangerouslySetInnerHTML={{ __html: language == ENGLISH ? detail[activeIndex].data.information_en : detail[activeIndex].data.information }}></div>
                </div>
                <div className={cn("flex flex-col bg-lynx_white rounded-lg", isMobile ? "p-[1rem] gap-y-[1.25rem]" : "gap-y-[1.5rem] p-[1.5rem]")}>
                    <ProjectItem title="Project Owner" description={detail[activeIndex].data.owner} />
                    <ProjectItem title="Project Category" description={language == ENGLISH ? detail[activeIndex].data.category_name_en : detail[activeIndex].data.category_name} />
                    <ProjectItem title="Project Target" description={`${detail[activeIndex].data.finished} - ${detail[activeIndex].data.target}`} />
                </div>
            </div>

            <div className={cn("flex flex-col", isMobile ? "mt-[1.5rem]" : "mt-[1.875rem] mb-[0.625rem] overflow-x-auto")}>
                <div className={cn("text-sooty font-bold", isMobile ? "w-text-subhead-1 mb-[0.75rem]" : "w-text-title-1 ")}>{language == ENGLISH ? "Project Gallery" : "Galery Proyek"}</div>
                <div className={cn(isMobile ? "grid grid-cols-2 gap-x-[0.75rem] gap-y-[1.5rem]" : "flex flex-row gap-x-[1.5rem] mt-[1.5rem]")}>
                    {detail[activeIndex].data.image.map((item, key) => {
                        return (
                            <div key={key} className={cn("hover:cursor-pointer rounded-lg relative", isMobile ? "w-full min-h-[9.875rem] max-h-[9.875rem]" : "min-w-[15.5rem] max-w-[27rem] max-h-[16.25rem]  min-h-[16.25rem]")}>
                                <Image
                                    alt="galery_proyek"
                                    quality={50}
                                    style={{ objectFit: "cover" }}
                                    onClick={() => {
                                        window.open(item, "_blankƒ")
                                    }}
                                    src={item} fill className="rounded-lg" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default DetailProyek