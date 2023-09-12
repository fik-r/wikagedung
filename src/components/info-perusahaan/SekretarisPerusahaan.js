import { LANGUAGE, ENGLISH } from "@/utils/constants"
import { useEffect, useState } from "react"
const SekretarisPerusahaan = ({ data }) => {
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
        <div className="flex flex-col w-full px-[6.25rem]">
            <div className="flex flex-row gap-x-[2.5rem]">
                <img className="bg-white_smoke rounded rounded-lg w-[26.25rem] h-[34.375rem]" src={data.foto} />

                <div className="flex flex-col">
                    <div className="w-text-display-3 text-primary font-semibold">{data.name}</div>
                    <div className="w-text-title-1 font-normal text-sooty mt-[0.5rem] mb-[2.5rem]">{language == ENGLISH ? data.position_en : data.position}</div>
                    <div className="w-text-body-2 font-normal text-jet">{data.profil}</div>
                </div>
            </div>
        </div>
    )
}

export default SekretarisPerusahaan