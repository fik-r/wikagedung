'use client'
import { LANGUAGE, ENGLISH } from "@/utils/constants"
import { CircleTab } from "../common"
import ProfileItem from "./ProfileItem"
import { useEffect, useState } from "react"
import { useSearchParams } from 'next/navigation'
import cn from "classnames"
import useResponsive from "@/utils/media-query"
const Organisasi = ({ direksi = [], komisaris = [] }) => {
    const { isMobile } = useResponsive();
    const searchParams = useSearchParams()
    const query = searchParams.get("q")
    const [isDireksi, setIsDireksi] = useState(query.includes("direksi") ? true : false)
    const [data, setData] = useState(komisaris)
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


    useEffect(() => {
        setIsDireksi(query.includes("direksi") ? true : false)
        setData(query.includes("direksi") ? direksi : komisaris)
    }, [query])

    return (
        <div className={cn("border-t border-secondary flex flex-col", isMobile ? "mt-[2rem] pt-[2rem] px-[1rem]" : "pt-[4.375rem] pb-[15.625rem] items-center")}>
            <div className={cn(isMobile ? "w-text-title-1 font-bold mb-[1.5rem]" : "w-text-display-2 mb-[2rem]")}>{language == ENGLISH ? "Profile of the Board of Commissioners and Directors" : "Profil Dewan Komisaris dan Direksi"}</div>
            <div className={cn("flex flex-row", isMobile ? "gap-x-[0.5rem]" : "gap-x-[1.25rem]")}>
                <CircleTab active={!isDireksi} text={language == ENGLISH ? "Commissioner" : "Komisaris"} onClick={() => {
                    setIsDireksi(false)
                    setData(komisaris)
                }} />
                <CircleTab active={isDireksi} text={language == ENGLISH ? "Directors" : "Direksi"} onClick={() => {
                    setIsDireksi(true)
                    setData(direksi)
                }} />
            </div>
            <div className={cn("w-full flex flex-col", isMobile ? "px-[1rem]" : "px-[6.25rem] mt-[2.625rem] ")}>
                {!isMobile && <div className="border-t border-silver_spoon pb-[2.5rem]"></div>}
                <div className={cn(isMobile ? "grid grid-cols-1 mt-[1.5rem] gap-y-[1.5rem]" : "flex flex-row flex-wrap justify-center gap-x-[2.5rem] gap-y-[2.5rem]")}>
                    {data.length > 0 && data.map((item, key) => {
                        return (
                            <ProfileItem key={key} image={item.foto} job={item.position} name={item.name} index={key} isDireksi={isDireksi} />
                        )
                    })}
                </div>
                {!isMobile && <div className="border-t border-silver_spoon mt-[2.5rem]"></div>}
            </div>
        </div>
    )
}

export default Organisasi