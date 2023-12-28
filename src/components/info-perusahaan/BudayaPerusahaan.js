import { LANGUAGE, ENGLISH } from "@/utils/constants"
import { useEffect, useState } from "react"
import cn from "classnames"
import useResponsive from "@/utils/media-query"
const BudayaPerusahaan = ({ dataVisiMisi, dataNilaiPerusahaan }) => {
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
            <div className={cn("text-sooty", isMobile ? "w-text-subhead-1 mb-[1rem]" : "w-text-title-1  mb-[1.5rem]")}>{language == ENGLISH ? "Company Vision & Mission" : "Visi & Misi Perusahaan"}</div>
            <div className="content-html" dangerouslySetInnerHTML={{ __html: language == ENGLISH ? dataVisiMisi.content_data_en : dataVisiMisi.content_data }}></div>
            <div className={cn("text-sooty", isMobile ? "w-text-subhead-1 mb-[1rem]" : "w-text-title-1  mb-[1.5rem]")}>{language == ENGLISH ? "Company Value" : "Nilai Perusahaan"}</div>
            <div className="content-html" dangerouslySetInnerHTML={{ __html: language == ENGLISH ? dataNilaiPerusahaan.content_data_en : dataNilaiPerusahaan.content_data }}></div>
        </div>
    )
}

export default BudayaPerusahaan