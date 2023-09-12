import { LANGUAGE, ENGLISH } from "@/utils/constants"
import { useEffect, useState } from "react"
const StrukturPerusahaan = ({dataGroupPerusahaan, dataOrgPerusahaan}) => {
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
        <div className="flex flex-col w-full gap-y-3">
            <div dangerouslySetInnerHTML={{ __html: language == ENGLISH ? dataGroupPerusahaan.content_data_en : dataGroupPerusahaan.content_data }}></div>
            <div dangerouslySetInnerHTML={{ __html: language == ENGLISH ? dataOrgPerusahaan.content_data_en : dataOrgPerusahaan.content_data }}></div>
        </div>
    )
}

export default StrukturPerusahaan