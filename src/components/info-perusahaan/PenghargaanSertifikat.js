'use client'
import DocumentItem from "./DocumentItem"
import { useEffect, useState } from "react"
import { LANGUAGE, ENGLISH } from "@/utils/constants"
import { CircleTab, Pagination } from "../common"
import useResponsive from "@/utils/media-query"
import cn from "classnames"
import Image from "next/image"
const PenghargaanSertifikat = ({ sertifikat = [], penghargaan = [] }) => {
    const [data, setData] = useState(penghargaan)
    const [isAward, setIsAward] = useState(true)
    const [language, setLanguage] = useState("")
    const [page, setPage] = useState(1)
    const { isMobile } = useResponsive()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState({})

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
        <>
            <div className="flex flex-col w-full">
                <div className={cn("w-full", isMobile ? "flex flex-col-reverse px-[1rem]" : "flex flex-row justify-between")}>
                    <div className={cn("flex flex-row", isMobile ? "gap-x-[0.5rem] mt-[1rem]" : "gap-x-[1.25rem]")}>
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
                            placeholder={language == ENGLISH ? "Search" : "Cari"}
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
                <div className={cn("w-full rounded-lg flex flex-col", isMobile ? "px-[1rem] mt-[1.5rem]" : " border border-aria mt-[1.25rem] py-[1.25rem] px-[1.875rem]")}>
                    <div className={cn(isMobile ? "grid grid-cols-2 gap-x-[1rem] gap-y-[1.5rem]" : "grid grid-cols-4 gap-x-[1.5rem] gap-y-[3.125rem] mb-[3.125rem]")}>
                        {pagination.length > 0 && pagination[page - 1].map((item, index) => {
                            return (
                                <DocumentItem key={index} title={item.name} image={item.foto} onLihatGambar={() => {
                                    setSelectedItem(item)
                                    setIsModalOpen(true)
                                }} />
                            )
                        })}

                    </div>
                    <div className={isMobile ? "w-full flex justify-center mt-[1.5rem]" : ""}>
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
            </div>
            <dialog id="cert_modal" className={cn(isModalOpen ? "modal-open" : "", "w-full h-full modal")}>
                <div className="modal-box max-w-[50.063rem]">
                    <div className={cn("flex flex-row w-full justify-between", isMobile ? "mb-[1.5rem]" : "mb-[3rem]")}>
                        <h3 className={isMobile ? "w-text-body-2 font-bold" : "w-text-title-2 text-sooty font-bold"}>{selectedItem.name}</h3>
                        <img src="/icons/ic_close.svg" className="cursor-pointer" onClick={() => {
                            setIsModalOpen(false)
                        }} />
                    </div>
                    <div className={cn("flex w-full relative rounded-lg", isMobile ? "min-h-[12.438rem] max-h-[12.438rem] " : "min-h-[29.438rem] max-h-[29.438rem]")}>
                        <Image quality={100}
                            alt={selectedItem.name}
                            src={selectedItem.foto} fill className="rounded-lg" style={{objectFit: "scale-down"}} />
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default PenghargaanSertifikat