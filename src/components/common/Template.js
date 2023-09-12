import { LANGUAGE, ENGLISH } from "@/utils/constants"
import { useEffect, useState } from "react"
const Template = ({ data }) => {
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
        <div className="flex flex-col w-full">
            <div dangerouslySetInnerHTML={{ __html: language == ENGLISH ? data.content_data_en : data.content_data }}></div>
        </div>
    )
}

export default Template