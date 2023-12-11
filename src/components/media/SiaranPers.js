'use client'
import { useState, useEffect } from "react";
import cn from "classnames"
import { Pagination } from "../common";
import { LANGUAGE, ENGLISH } from "@/utils/constants"
import useResponsive from "@/utils/media-query";

const SiaranPers = ({ data = [] }) => {
    const { isMobile } = useResponsive()
    const [filteredData, setFilteredData] = useState(data.detail)
    const [language, setLanguage] = useState("")
    const [page, setPage] = useState(1)
    const [activeYear, setActiveYear] = useState(0)
    const [showDropdownFilter, setShowDropdownFilter] = useState(false)

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

    function getPast5Years() {
        const currentYear = new Date().getFullYear();
        const last5Years = [];
        for (let i = 0; i < 5; i++) {
            last5Years.push(currentYear - i);
        }

        return last5Years;
    }

    function dataAsPagination() {
        const result = [];
        if (isMobile) {
            for (let i = 0; i < filteredData.length; i += 6) {
                result.push(filteredData.slice(i, i + 6));

            }
        } else {
            for (let i = 0; i < filteredData.length; i += 4) {
                result.push(filteredData.slice(i, i + 4));

            }
        }
        return result;
    }

    const pagination = dataAsPagination()

    return (
        <div className="w-full flex flex-col">
            <div className={cn("flex", isMobile ? "flex-col" : "flex-row justify-between")}>
                {!isMobile &&
                    <div className="flex flex-row">
                        <div className={cn("cursor-pointer h-[2.625rem] w-[5.188rem] w-text-body-2 flex font-medium justify-center items-center ",
                            activeYear == 0 ? "border-b-[2px] border-primary text-primary" : "text-more_than_a_week"
                        )}
                            onClick={() => {
                                setActiveYear(0)
                                setFilteredData(data.detail)
                                setPage(1)
                            }}>
                            Semua
                        </div>
                        {getPast5Years().map((item, key) => {
                            return (
                                <div key={key} className={cn("cursor-pointer h-[2.625rem] w-[5.188rem] w-text-body-2 flex font-medium justify-center items-center ",
                                    activeYear == item ? "border-b-[2px] border-primary text-primary" : "text-more_than_a_week"
                                )} onClick={() => {
                                    setActiveYear(item)
                                    const filteredData = data.detail.filter((val) => (val.cntn_detail_year == item))
                                    setFilteredData(filteredData)
                                    setPage(1)
                                }}>
                                    {item}
                                </div>
                            )
                        })}
                    </div>
                }
                <div className={cn(isMobile ? "px-[1rem]" : "")}>
                    <div className={cn("rounded-full bg-white border border-silver_spoon flex items-center px-[0.875rem] gap-x-[0.875rem] h-[2.75rem]", isMobile ? "w-full" : "")}>
                        <img src="/icons/ic_search_black.svg" />
                        <input
                            type="text"
                            placeholder={language == ENGLISH ? "Search" : "Cari"}
                            className="w-text-body-2 placeholder-robo_master bg-transparent border-none focus:ring-0 outline-none flex-grow"
                            onChange={(e) => {
                                const value = e.target.value
                                if (activeYear != 0) {
                                    const filteredData = data.detail.filter
                                        ((val) =>
                                            ((language == ENGLISH ? val.cntn_detail_title_en : val.cntn_detail_title))
                                                .toLowerCase()
                                                .includes(value.toLowerCase())
                                            && val.cntn_detail_year == activeYear
                                        )
                                    setFilteredData(filteredData)
                                } else {
                                    const filteredData = data.detail.filter
                                        ((val) =>
                                            ((language == ENGLISH ? val.cntn_detail_title_en : val.cntn_detail_title))
                                                .toLowerCase()
                                                .includes(value.toLowerCase())
                                        )
                                    setFilteredData(filteredData)
                                }


                                setPage(1)
                            }}
                        />
                    </div>
                </div>
                {isMobile && <div className={cn("px-[1rem] flex flex-row items-center gap-x-[0.25rem] mt-[1.5rem] dropdown dropdown-bottom cursor-pointer", showDropdownFilter ? "dropdown-open" : "")} onClick={() => {
                    setShowDropdownFilter(!showDropdownFilter)
                }}>
                    <div className="w-text-body-1 font-medium text-black">Filter: </div>
                    <div className="w-text-body-1 font-medium text-black">{activeYear == 0 ? language == ENGLISH ? "All" : "Semua" : activeYear}</div>
                    <img className="w-[10px] h-[5px] mt-[3px]" src="/icons/ic_dropdown_black.svg" />
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box">
                        <div className={cn("w-text-body-1 px-[0.5rem] py-[0.5rem] cursor-pointer", activeYear == 0 ? "text-primary border-primary" : "text-more_than_a_week")}
                            onClick={() => {
                                setActiveYear(0)
                                setFilteredData(data.detail)
                                setPage(1)
                                setShowDropdownFilter(false)
                            }}
                        >{language == ENGLISH ? "All" : "Semua"}</div>
                        {getPast5Years().map((item, key) => {
                            return (
                                <div key={key} className={cn("w-text-body-1 px-[0.5rem] py-[0.5rem] cursor-pointer", activeYear == item ? "text-primary border-primary" : "text-more_than_a_week")}
                                    onClick={() => {
                                        setActiveYear(item)
                                        const filteredData = data.detail.filter((val) => (val.cntn_detail_year == item))
                                        setFilteredData(filteredData)
                                        setPage(1)
                                        setShowDropdownFilter(false)
                                    }}
                                >{item}</div>
                            )
                        })}
                    </ul>
                </div>}
            </div>
            <div className={cn(isMobile ? "px-[1rem] mb-[2rem]" : "")}>
                <div className={cn("w-full border border-aria shadow-md rounded rounded-lg pb-[1.25rem]", isMobile ? "flex flex-col items-center mt-[0.75rem]" : "mt-[2rem]")}>
                    <table className="w-full table table-zebra mb-[1.5rem]">
                        {!isMobile && <>
                            <thead>
                                <tr>
                                    <th className='capitalize w-text-body-1 font-semibold'>No</th>
                                    <th className='capitalize w-text-body-1 font-semibold'>Title</th>
                                    <th className='capitalize w-text-body-1 font-semibold'>Years</th>
                                    <th className='capitalize w-text-body-1 font-semibold'>Link</th>
                                    <th className='capitalize w-text-body-1 font-semibold'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pagination.length > 0 && pagination[page - 1].map((item, key) => {
                                    return (
                                        <tr key={key} onClick={() => {
                                            // window.open(item.link_to_apply, "_blankƒ")
                                        }}>
                                            <td className='capitalize w-text-body-1 font-regular'>{key + 1}</td>
                                            <td className='capitalize w-text-body-1 font-regular max-w-[18.239rem] truncate'>{language == ENGLISH ? item.cntn_detail_title_en : item.cntn_detail_title}</td>
                                            <td className='capitalize w-text-body-1 font-regular'>{item.cntn_detail_year}</td>
                                            <td className='capitalize w-text-body-1 font-regular'>{item.cntn_detail_link}</td>
                                            <td className='capitalize w-text-body-1 font-medium text-primary cursor-pointer' onClick={() => {
                                                window.open(item.cntn_detail_file_path, "_blank")
                                            }}>Download File</td>

                                        </tr>
                                    )
                                })}
                            </tbody>
                        </>}
                        {isMobile &&
                            <tbody>
                                {pagination.length > 0 && pagination[page - 1].map((item, key) => {
                                    return (
                                        <tr className="flex flex-row" key={key} onClick={() => {
                                            // window.open(item.link_to_apply, "_blankƒ")
                                        }}>
                                            <td className="flex-1 w-32 flex flex-col w-full py-[0.75rem]">
                                                <div className='capitalize font-bold w-text-body-1 font-regular h-[1.375rem] truncate'>{language == ENGLISH ? item.cntn_detail_title_en : item.cntn_detail_title}</div>
                                                <div className='capitalize w-text-body-1 font-regular h-[1.375rem]'>{item.cntn_detail_year}</div>
                                            </td>
                                            <td className='flex-none h-[4.25rem] capitalize w-text-body-1 font-medium text-primary cursor-pointer py-[0.75rem] flex items-center justify-end' onClick={() => {
                                                window.open(item.cntn_detail_file_path, "_blank")
                                            }}>Download File</td>

                                        </tr>
                                    )
                                })}
                            </tbody>
                        }
                    </table>
                    <Pagination totalPages={pagination.length} currentPage={page} isMobile={isMobile}
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
        </div >
    )
}

export default SiaranPers