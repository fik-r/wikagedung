import { useState, useEffect } from "react"
import { CircleTab } from "../common"
import KonstruksiItem from "./KonstruksiItem"
import { LANGUAGE, ENGLISH } from "@/utils/constants"
import cn from "classnames"
import { useSearchParams } from "next/navigation"

const LiniBisnis = ({ dataProyekBerjalan, dataProyekSelesai, dataKategori, route }) => {
    const searchParams = useSearchParams()
    const query = searchParams.get("q")
    const [data, setData] = useState(dataProyekBerjalan);
    const [language, setLanguage] = useState("")
    const [category, setCategory] = useState(0)
    const [isProyekDone, setIsProyekDone] = useState(query == "proyek-sebelumnya" ? true : false)
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

    const getCategoryById = (id) => {
        return dataKategori.find(item => item.id === id)
    }

    useEffect(() => {
        setIsProyekDone(query == "proyek-sebelumnya" ? true : false)
        setData(query == "proyek-sebelumnya" ? dataProyekSelesai : dataProyekBerjalan)
    }, [query])
    return (
        <div className="border-t border-secondary flex flex-col items-center pt-[4.375rem] pb-[15.625rem] px-[6.25rem]">
            <div className="w-text-display-2 mb-[2rem]">Proyek Konstruksi</div>
            <div className="flex flex-row gap-x-[1.25rem]">
                <CircleTab active={!isProyekDone} text={language == ENGLISH ? "Current Project" : "Proyek Berjalan"} onClick={() => {
                    setIsProyekDone(false)
                    setData(dataProyekBerjalan)
                }} />
                <CircleTab active={isProyekDone} text={language == ENGLISH ? "Past Project" : "Proyek Selesai"} onClick={() => {
                    setIsProyekDone(true)
                    setData(dataProyekSelesai)
                }} />
            </div>
            <div className="w-full flex flex-col border-t border-[#D2D2D2] mt-[2.625rem] p-[2.5rem]">
                <div className="flex justify-center">
                    <div className="flex flex-row flex-wrap">
                        <div className={cn("w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem] cursor-pointer", category == 0 ? "text-primary border-primary" : "text-more_than_a_week")} onClick={() => {
                            setCategory(0)
                        }}>Semua</div>
                        {dataKategori.map((item, key) => {
                            return (
                                <div key={key} className={cn("w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem] cursor-pointer", category == item.id ? "text-primary border-primary" : "text-more_than_a_week")}
                                    onClick={() => {
                                        setCategory(item.id)
                                    }}
                                >{language == ENGLISH ? item.name_en : item.name}</div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="flex flex-row flex-wrap gap-[2.5rem] px-[2.5rem] justify-center">
                {(category === 0 ? data : data.filter(item => item.ctgr_id === category)).map((item, key) => {
                    return (
                        <KonstruksiItem
                            key={key}
                            type={language == ENGLISH ? getCategoryById(item.ctgr_id).name_en : getCategoryById(item.ctgr_id).name}
                            name={item.prjc_name}
                            thumbnail={item.image_1_url}
                            proyekType={isProyekDone ? "proyek-sebelumnya" : "proyek-selanjutnya"}
                            index={key + 1}
                            route={route} />
                    )
                })}
            </div>
        </div>
    )
}

export default LiniBisnis