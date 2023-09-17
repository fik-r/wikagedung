import { LANGUAGE, ENGLISH } from "@/utils/constants"
import { useState, useEffect } from "react"
import cn from "classnames"

const DetailOrganisasi = ({ data, index, type }) => {
    const [language, setLanguage] = useState("")
    const [activeIndex, setActiveIndex] = useState(index - 1)
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
        <div className="w-full px-[6.25rem]">
            <div className="relative flex flex-col">
                <div className="w-text-display-2 text-sooty] mt-[2.5rem]">{type == "Komisaris" ? language == ENGLISH ? "Profile Board of Commissioners" : "Profil Dewan Komisaris" : language == ENGLISH ? "Profile Directors" : "Profil Direksi"}</div>
            </div>
            <div className="flex flex-row mt-[3.75rem] gap-x-[2.5rem]">
                <img className="w-[26.25rem] h-[34.375rem] bg-white_smoke rounded rounded-lg" src={data[activeIndex].foto} />
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between">
                        <div className="w-text-display-3 text-primary">{data[activeIndex].name}</div>
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
                    </div>
                    <div className="w-text-title-1 text-sooty font-normal mt-[0.5rem]">{data[activeIndex].position}</div>
                    <div className="w-text-body-2 text-jet mt-[2.5rem]">{data[activeIndex].profil}</div>
                </div>

            </div>
        </div>
    )
}

export default DetailOrganisasi