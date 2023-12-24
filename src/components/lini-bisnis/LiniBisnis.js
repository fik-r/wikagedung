import { useState, useEffect } from "react"
import { CircleTab } from "../common"
import KonstruksiItem from "./KonstruksiItem"
import { LANGUAGE, ENGLISH } from "@/utils/constants"
import cn from "classnames"
import { useSearchParams } from "next/navigation"
import useResponsive from "@/utils/media-query"
const LiniBisnis = ({ dataProyekBerjalan, dataProyekSelesai, dataKategori, route }) => {
    const { isMobile } = useResponsive();
    const searchParams = useSearchParams()
    const query = searchParams.get("q")
    const [data, setData] = useState(dataProyekBerjalan);
    const [language, setLanguage] = useState("")
    const [category, setCategory] = useState(0)
    const [showDropdownFilter, setShowDropdownFilter] = useState(false)
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

    function getActualIndex(id) {
        if (isProyekDone) {
            for (let i = 0; i < dataProyekSelesai.length; i++) {
                if (dataProyekSelesai[i].id === id) {
                    return i + 1;
                }
            }
        }
        else {
            for (let i = 0; i < dataProyekBerjalan.length; i++) {
                if (dataProyekBerjalan[i].id === id) {
                    return i + 1;
                }
            }
        }
        return -1
    }
    return (
        <div className={cn("border-t border-secondary flex flex-col", isMobile ? "mt-[2rem] pt-[2rem] px-[1rem]" : "items-center pt-[4.375rem] pb-[15.625rem] px-[6.25rem]")}>
            <div className={cn(isMobile ? "w-text-title-1 font-bold mb-[1.5rem]" : "w-text-display-2 mb-[2rem]")}>Proyek Konstruksi</div>
            <div className={cn("flex flex-row", isMobile ? "gap-x-[0.5rem]" : "gap-x-[1.25rem]")}>
                <CircleTab active={!isProyekDone} text={language == ENGLISH ? "Current Project" : "Proyek Berjalan"} onClick={() => {
                    setIsProyekDone(false)
                    setData(dataProyekBerjalan)
                }} />
                <CircleTab active={isProyekDone} text={language == ENGLISH ? "Past Project" : "Proyek Selesai"} onClick={() => {
                    setIsProyekDone(true)
                    setData(dataProyekSelesai)
                }} />
            </div>
            {!isMobile && <div className="w-full flex flex-col border-t border-[#D2D2D2] mt-[2.625rem] p-[2.5rem]">
                <div className="flex justify-center">
                    <div className="flex flex-row flex-wrap">
                        <div className={cn("w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem] cursor-pointer", category == 0 ? "text-primary border-primary" : "text-more_than_a_week")} onClick={() => {
                            setCategory(0)
                        }}>{language == ENGLISH ? "All" : "Semua"}</div>
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
            </div>}
            {isMobile && <div className={cn("flex flex-row items-center gap-x-[0.25rem] mt-[1.5rem] mb-[0.75rem] dropdown dropdown-bottom cursor-pointer", showDropdownFilter ? "dropdown-open" : "")} onClick={() => {
                setShowDropdownFilter(!showDropdownFilter)
            }}>
                <div className="w-text-body-1 font-medium text-black">Filter: </div>
                <div className="w-text-body-1 font-medium text-black">{category == 0 ? language == ENGLISH ? "All" : "Semua" : language == ENGLISH ? getCategoryById(category).name_en : getCategoryById(category).name}</div>
                <img className="w-[10px] h-[5px] mt-[3px]" src="/icons/ic_dropdown_black.svg" />
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
                    <div className={cn("w-text-body-1 px-[0.5rem] py-[0.5rem] cursor-pointer", category == 0 ? "text-primary border-primary" : "text-more_than_a_week")}
                        onClick={() => {
                            setCategory(0)
                            setShowDropdownFilter(false)
                        }}
                    >{language == ENGLISH ? "All" : "Semua"}</div>
                    {dataKategori.map((item, key) => {
                        return (
                            <div key={key} className={cn("w-text-body-1 px-[0.5rem] py-[0.5rem] cursor-pointer", category == item.id ? "text-primary border-primary" : "text-more_than_a_week")}
                                onClick={() => {
                                    setCategory(item.id)
                                    setShowDropdownFilter(false)
                                }}
                            >{language == ENGLISH ? item.name_en : item.name}</div>
                        )
                    })}
                </ul>
            </div>}

            <div className={cn(isMobile ? "grid grid-cols-1 gap-y-[1.5rem]" : "flex flex-row flex-wrap justify-center gap-[2.5rem] px-[2.5rem]")}>
                {(category === 0 ? data : data.filter(item => item.ctgr_id === category)).map((item, key) => {
                    return (
                        <KonstruksiItem
                            key={key}
                            type={language == ENGLISH ? getCategoryById(item.ctgr_id).name_en : getCategoryById(item.ctgr_id).name}
                            name={item.prjc_name}
                            thumbnail={item.image_1_url ? item.image_1_url : ""}
                            proyekType={isProyekDone ? "proyek-sebelumnya" : "proyek-berjalan"}
                            index={getActualIndex(item.id)}
                            route={route} />
                    )
                })}
            </div>
        </div>
    )
}

export default LiniBisnis