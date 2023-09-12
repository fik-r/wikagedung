import { LANGUAGE, ENGLISH } from "@/utils/constants"
import { useEffect, useState } from "react"
const BudayaPerusahaan = ({dataVisiMisi, dataNilaiPerusahaan}) => {
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
            <div dangerouslySetInnerHTML={{ __html: language == ENGLISH ? dataVisiMisi.content_data_en : dataVisiMisi.content_data }}></div>
            <div dangerouslySetInnerHTML={{ __html: language == ENGLISH ? dataNilaiPerusahaan.content_data_en : dataNilaiPerusahaan.content_data }}></div>
        </div>
    )
}

export default BudayaPerusahaan