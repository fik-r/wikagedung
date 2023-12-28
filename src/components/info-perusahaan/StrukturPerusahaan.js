import { LANGUAGE, ENGLISH } from "@/utils/constants"
import { useEffect, useState } from "react"
import cn from "classnames"
import useResponsive from "@/utils/media-query"
const StrukturPerusahaan = ({ dataGroupPerusahaan, dataOrgPerusahaan }) => {
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
        <div className={cn("flex flex-col w-full", isMobile ? "px-[1rem] gap-y-3" : "gap-y-3")}>
            <div className={cn("text-sooty", isMobile ? "w-text-subhead-1 mb-[1rem]" : "w-text-title-1  mb-[1.5rem]")}>{language == ENGLISH ? "Company Group Structure" : "Struktur Group Perusahaan"}</div>
            <div className="content-html" dangerouslySetInnerHTML={{ __html: language == ENGLISH ? dataGroupPerusahaan.content_data_en : dataGroupPerusahaan.content_data }}></div>
            <div className={cn("text-sooty", isMobile ? "w-text-subhead-1 mb-[1rem]" : "w-text-title-1  mb-[1.5rem]")}>{language == ENGLISH ? "Organizational Structure Company" : "Struktur Organisasi Perusahaan"}</div>
            <div className="content-html" dangerouslySetInnerHTML={{ __html: language == ENGLISH ? dataOrgPerusahaan.content_data_en : dataOrgPerusahaan.content_data }}></div>
        </div>
    )
}

export default StrukturPerusahaan