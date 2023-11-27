'use client'

import { ENGLISH, LANGUAGE } from "@/utils/constants"
import { useEffect, useState } from "react"
import cn from "classnames"
import useResponsive from "@/utils/media-query"
import Image from "next/image"
import { Pagination } from "../common"
const KegiatanPers = ({ data }) => {
    const { isMobile } = useResponsive()
    const [language, setLanguage] = useState("")
    const [page, setPage] = useState(1)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)

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
            <div className="px-[6.25rem] flex flex-col">
                <div className="grid grid-cols-4 gap-y-[2.5rem] gap-x-[2.5rem]">
                    {
                        pagination.length > 0 && pagination[page - 1].map((item, key) => {
                            return (
                                <div key={key}
                                    onClick={() => {
                                        setIsModalOpen(!isModalOpen)
                                        setActiveIndex(key)
                                    }}
                                    className="rounded-xl shadow-md zoom flex flex-col hover:cursor-pointer w-full h-[20.5rem]">
                                    <div className="rounded-t-lg w-full min-h-[15rem] max-h-[15rem] relative">
                                        <Image
                                            quality={100} placeholder="blur"
                                            blurDataURL={item.image_url}
                                            style={{ objectFit: "cover" }}
                                            alt={language == ENGLISH ? item.name_en : item.name}
                                            src={item.image_url} fill className="rounded-t-lg" />
                                    </div>
                                    <div className="p-[1.5rem] w-text-body-1 font-semibold text-sooty">
                                        {language == ENGLISH ? item.name_en : item.name}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="w-full flex justify-center mt-[2rem]">
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
            <dialog id="pers_modal" className={cn(isModalOpen ? "modal-open" : "", "w-full h-full modal")}>
                <div className="modal-box max-w-[50.063rem]">
                    <div className="flex flex-row w-full justify-between mb-[3rem]">
                        <h3 className="w-text-title-2 text-sooty font-bold">{language == ENGLISH ? data[activeIndex].name_en : data[activeIndex].name}</h3>
                        <img src="/icons/ic_close.svg" className="cursor-pointer" onClick={() => {
                            setIsModalOpen(false)
                        }} />
                    </div>
                    <div className="flex w-full relative min-h-[29.438rem] max-h-[29.438rem] rounded-lg">
                        <Image quality={100}
                            style={{ objectFit: "cover" }}
                            alt={language == ENGLISH ? data[activeIndex].name_en : data[activeIndex].name}
                            src={data[activeIndex].image_url} fill className="rounded-lg" />
                    </div>
                </div>
            </dialog>
        </>
    )
}
export default KegiatanPers