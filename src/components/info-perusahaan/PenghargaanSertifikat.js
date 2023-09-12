'use client'
import DocumentItem from "./DocumentItem"
import { useEffect, useState } from "react"
import { LANGUAGE, ENGLISH } from "@/utils/constants"
import { CircleTab, Pagination } from "../common"
const PenghargaanSertifikat = ({ sertifikat = [], penghargaan = [] }) => {
    const [data, setData] = useState(penghargaan)
    const [isAward, setIsAward] = useState(true)
    const [language, setLanguage] = useState("")
    const [page, setPage] = useState(1)

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

    function dataAsPagination() {
        const result = [];
        for (let i = 0; i < data.length; i += 8) {
            result.push(data.slice(i, i + 8));
        }
        return result;
    }

    const pagination = dataAsPagination()

    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row w-full justify-between">
                <div className="flex flex-row gap-x-[1.25rem]">
                    <CircleTab active={isAward} text={language == ENGLISH ? "Award" : "Penghargaan"} onClick={() => {
                        setIsAward(true)
                        setData(penghargaan)
                        setPage(1)
                    }} />
                    <CircleTab active={!isAward} text={language == ENGLISH ? "Certificate" : "Sertifikat"} onClick={() => {
                        setIsAward(false)
                        setData(sertifikat)
                        setPage(1)
                    }} />
                </div>
                <div className="rounded-full bg-white border border-silver_spoon flex items-center px-[0.875rem] h-[2.75rem] gap-x-[0.875rem]">
                    <img src="/icons/ic_search_black.svg" />
                    <input
                        type="text"
                        placeholder="Cari"
                        className="w-text-body-2 placeholder-robo_master bg-transparent border-none focus:ring-0 outline-none flex-grow"
                        onChange={(e) => {
                            const value = e.target.value
                            const filteredData = (isAward ? penghargaan : sertifikat).filter((val) => val.name.toLowerCase().includes(value.toLowerCase()))
                            setData(filteredData)
                            setPage(1)
                        }}
                    />
                </div>
            </div>
            <div className="w-full border border-aria rounded-lg mt-[1.25rem] py-[1.25rem] px-[1.875rem] flex flex-col">
                <div className="grid grid-cols-4 gap-x-[1.5rem] gap-y-[3.125rem] mb-[3.125rem]">
                    {pagination.length > 0 && pagination[page - 1].map((item, index) => {
                        return (
                            <DocumentItem key={index} title={item.name} image={item.foto} />
                        )
                    })}

                </div>
                <Pagination totalPages={pagination.length} currentPage={page} isMobile={false}
                    nextPage={() => {
                        let lastpage = pagination.length;

                        if (page !== lastpage) {
                            setPage(page + 1);
                        }
                    }}
                    prevPage={() => {
                        if (page !== 1) {
                            setPage(page - 1);
                        }
                    }}
                    goToSpecificPage={(val) => {
                        setPage(val)
                    }}
                />
            </div>
        </div>
    )
}

export default PenghargaanSertifikat