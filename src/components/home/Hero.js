'use client'

import { LANGUAGE, ENGLISH } from "@/utils/constants"
import cn from "classnames"
import { useEffect, useState } from "react"
const Hero = ({ data, onIndexChange, index }) => {
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
        <div className={"flex flex-col mt-[28.75rem] w-full px-[7.5rem] "}>
            <div className="flex flex-col">
                <div className="w-text-display-4 text-white">{language == ENGLISH ? data[index][`banner${index + 1}_title_en`] : data[index][`banner${index + 1}_title`]}</div>
                <div className="flex flex-row justify-between mt-[0.688rem]">
                    <div className="text-white w-text-title-1 font-normal self-center">{language == ENGLISH ? data[index][`banner${index + 1}_desc_en`] : data[index][`banner${index + 1}_desc`]}</div>
                    <div className="flex flex-row">
                        <img src="/icons/ic_arrow_left.svg" className="cursor-pointer" onClick={() => {
                            onIndexChange(index - 1)
                        }} />
                        <img src="/icons/ic_arrow_right.svg" className="cursor-pointer ml-[1.25rem]" onClick={() => {
                            onIndexChange(index + 1)
                        }} />
                    </div>
                </div>
            </div>
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
        </div>
    )
}
export default Hero;