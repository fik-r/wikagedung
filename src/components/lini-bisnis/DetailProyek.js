import { LANGUAGE, ENGLISH } from "@/utils/constants"
import { useState, useEffect } from "react"
import cn from "classnames"
import Image from "next/image"

const DetailProyek = ({ index, detail }) => {
    const [language, setLanguage] = useState("")
    const [activeIndex, setActiveIndex] = useState(index - 1)
    const ProjectItem = ({ title, description }) => {
        return (
            <div className="flex flex-col">
                <div className="w-text-title-1 text-sooty">{title}</div>
                <div className="w-text-body-2 font-medium text-hard_coal mt-[0.75rem]">{description}</div>
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
        <div className="flex flex-col w-full px-[6.25rem]">
            <div className="flex flex-row justify-between my-[2.5rem]">
                <div className="flex flex-col">
                    <div className="w-text-subhead-2 text-black_oaf font-medium">{detail[activeIndex].data.type}</div>
                    <div className="w-text-display-2 text-sooty mt-[0.625rem]">{detail[activeIndex].data.name}</div>
                </div>
                <div className="flex flex-row">
                    <img src={activeIndex == 0 ? "/icons/ic_circle_left_disabled.svg" : "/icons/ic_circle_right_black.svg"} className={cn("cursor-pointer w-[2.5rem] h-[2.5rem]", activeIndex == 0 ? "" : "rotate-180")}
                        onClick={() => {
                            if (activeIndex != 0)
                                setActiveIndex(activeIndex - 1)
                        }} />
                    <img src={activeIndex == detail.length - 1 ? "/icons/ic_circle_left_disabled.svg" : "/icons/ic_circle_right_black.svg"} className={cn("cursor-pointer ml-[1.25rem] w-[2.5rem] h-[2.5rem]", activeIndex == detail.length - 1 ? "rotate-180" : "")}
                        onClick={() => {
                            if (activeIndex != detail.length - 1)
                                setActiveIndex(activeIndex + 1)
                        }}
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-x-[2.5rem]">
                <div className="flex flex-col">
                    <div className="text-sooty w-text-title-1 font-bold">Informasi Proyek</div>
                    <div className="w-text-body-2 text-jet mt-[1.5rem]" dangerouslySetInnerHTML={{ __html: language == ENGLISH ? detail[activeIndex].data.information_en : detail[activeIndex].data.information }}></div>
                </div>
                <div className="flex flex-col bg-lynx_white p-[1.5rem] gap-y-[1.5rem] rounded-lg">
                    <ProjectItem title="Project Owner" description={detail[activeIndex].data.owner} />
                    <ProjectItem title="Project Category" description={language == ENGLISH ? detail[activeIndex].data.category_name_en : detail[activeIndex].data.category_name} />
                    <ProjectItem title="Project Target" description={`${detail[activeIndex].data.finished} - ${detail[activeIndex].data.target}`} />
                </div>
            </div>

            <div className="flex flex-col mt-[1.875rem] overflow-x-auto mb-[0.625rem]">
                <div className="w-text-title-1 text-sooty font-bold">Galery Proyek</div>
                <div className="flex flex-row gap-x-[1.5rem] mt-[1.5rem]">
                    {detail[activeIndex].data.image.map((item, key) => {
                        return (
                            <div key={key} className="hover:cursor-pointer  rounded-lg min-w-[15.5rem] max-w-[27rem] h-[16.25rem] relative">
                                <Image
                                    quality={50} placeholder="blur"
                                    blurDataURL={item}
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