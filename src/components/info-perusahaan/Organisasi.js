'use client'
import { LANGUAGE, ENGLISH } from "@/utils/constants"
import { CircleTab } from "../common"
import ProfileItem from "./ProfileItem"
import { useEffect, useState } from "react"
import { useSearchParams } from 'next/navigation'
const Organisasi = ({ direksi = [], komisaris = [] }) => {
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
        <div className="border-t border-secondary flex flex-col items-center pt-[4.375rem] pb-[15.625rem]">
            <div className="w-text-display-2 mb-[2rem]">{language == ENGLISH ? "Profile of the Board of Commissioners and Directors" : "Profil Dewan Komisaris dan Direksi"}</div>
            <div className="flex flex-row gap-x-[1.25rem]">
                <CircleTab active={!isDireksi} text={language == ENGLISH ? "Commissioner" : "Komisaris"} onClick={() => {
                    setIsDireksi(false)
                    setData(komisaris)
                }} />
                <CircleTab active={isDireksi} text={language == ENGLISH ? "Directors" : "Direksi"} onClick={() => {
                    setIsDireksi(true)
                    setData(direksi)
                }} />
            </div>
            <div className="px-[6.25rem] mt-[2.625rem] w-full flex flex-col">
                <div className="border-t border-silver_spoon pb-[2.5rem]"></div>
                <div className="flex flex-row flex-wrap justify-center gap-x-[2.5rem] gap-y-[2.5rem]">
                    {data.length > 0 && data.map((item, key) => {
                        return (
                            <ProfileItem key={key} image={item.foto} job={item.position} name={item.name} index={key} isDireksi={isDireksi} />
                        )
                    })}
                </div>
                <div className="border-t border-silver_spoon mt-[2.5rem]"></div>
            </div>
        </div>
    )
}

export default Organisasi