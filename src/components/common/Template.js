'use client'
import { useState, useEffect } from "react";
import cn from "classnames"
import { Pagination } from "../common";
import { LANGUAGE, ENGLISH } from "@/utils/constants"
const Template = ({ data }) => {
    const [filteredData, setFilteredData] = useState(data.detail)
    const [language, setLanguage] = useState("")
    const [page, setPage] = useState(1)
    const [activeYear, setActiveYear] = useState(0)

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
        for (let i = 0; i < filteredData.length; i += 4) {
            result.push(filteredData.slice(i, i + 4));

        }
        return result;
    }

    const pagination = dataAsPagination()

    return (
        <div className="flex flex-col w-full overflow-x-auto">
            <div className="mb-[1.5rem]" dangerouslySetInnerHTML={{ __html: language == ENGLISH ? data.content_data_en : data.content_data }}></div>
            {data.detail && data.detail.length > 0 &&
                <>
                    <div className="flex flex-row justify-between">
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
                        <div className="rounded-full bg-white border border-silver_spoon flex items-center px-[0.875rem] h-[2.75rem] gap-x-[0.875rem]">
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
                    <div className="w-full border border-aria shadow-md rounded rounded-lg mt-[2rem] pb-[1.25rem]">
                        <table className="w-full table table-zebra mb-[1.5rem]">
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
                        </table>
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
                </>
            }
        </div>
    )
}

export default Template