'use client'

import { LANGUAGE, ENGLISH } from "@/utils/constants"
import cn from "classnames"
import { useEffect, useState } from "react"
import useResponsive from "@/utils/media-query"
const Hero = ({ data, onIndexChange, index }) => {
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
        <div className={cn("flex flex-col w-full", isMobile ? "px-[0.875rem] absolute bottom-0" : "mt-[28.75rem] px-[7.5rem]")}>
            <div className="flex flex-col">
                <div className={cn("text-white", isMobile ? "w-text-display-mobile" : "w-text-display-4")}>{language == ENGLISH ? data[index][`banner${index + 1}_title_en`] : data[index][`banner${index + 1}_title`]}</div>
                <div className={cn("flex flex-row justify-between mt-[0.688rem]", isMobile ? "mt-[0.875rem]" : "mt-[0.688rem]")}>
                    <div className={cn("min-h-[3.75rem] inline-block line-clamp-2 max-w-[62.5rem] text-white font-normal self-center", isMobile ? "mb-[3.125rem] w-text-body-2" : "w-text-title-1")}>{language == ENGLISH ? data[index][`banner${index + 1}_desc_en`] : data[index][`banner${index + 1}_desc`]}</div>
                    {!isMobile && <div className="flex flex-row">
                        <img src="/icons/ic_arrow_left.svg" className="cursor-pointer" onClick={() => {
                            onIndexChange(index - 1)
                        }} />
                        <img src="/icons/ic_arrow_right.svg" className="cursor-pointer ml-[1.25rem]" onClick={() => {
                            onIndexChange(index + 1)
                        }} />
                    </div>}
                </div>
            </div>
            {!isMobile &&
                <div className="relative pt-[3.438rem] items-end">
                    <div className="absolute w-full border border-radiant_yellow top-[3.625rem]"></div>
                    <div className="grid grid-cols-8 items-stretch h-[7.5rem]">
                        {
                            data.map((item, i) => {
                                return <div key={i}
                                    className={cn(
                                        "text-white hover:text-radiant_yellow font-semibold w-text-subhead-1 pt-[1.875rem] hover:border-t-4 hover:border-t-radiant_yellow cursor-pointer text-center"
                                        , index == i ? "border-t-radiant_yellow border-t-4" : "")} onClick={() => {
                                            onIndexChange(i)
                                        }}>{language == ENGLISH ? item[`banner${i + 1}_tab_text_en`] : item[`banner${i + 1}_tab_text`]}</div>
                            })
                        }
                    </div>
                </div>
            }
            {isMobile &&
                <>
                    <div className="border-b-4 border-radiant_yellow w-[6.938rem]"></div>
                    <div className="flex flex-row w-full border-t border-radiant_yellow justify-between">
                        <div className="w-text-body-1 font-semibold text-radiant_yellow mt-[1.375rem]">{language == ENGLISH ? data[index][`banner${index + 1}_tab_text_en`] : data[index][`banner${index + 1}_tab_text`]}</div>
                        <div className="flex flex-row mt-[1.063rem] mb-[1.813rem]">
                            <img src="/icons/ic_arrow_left.svg" className="w-[1.5rem] h-[1.5rem] cursor-pointer" onClick={() => {
                                onIndexChange(index - 1)
                            }} />
                            <img src="/icons/ic_arrow_right.svg" className="w-[1.5rem] h-[1.5rem] cursor-pointer ml-[0.875rem]" onClick={() => {
                                onIndexChange(index + 1)
                            }} />
                        </div>
                    </div>
                </>
            }
        </div>
    )
}
export default Hero;