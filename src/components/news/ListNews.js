'use client'
import { useEffect, useState } from "react"
import { LANGUAGE, ENGLISH } from "@/utils/constants"
import { Pagination } from "../common"
import { News } from "../media"
import moment from "moment"
import { useRouter } from "next/navigation"
import Image from "next/image"
const ListNews = ({ data }) => {
    const [news, setNews] = useState(data)
    const [language, setLanguage] = useState("")
    const [page, setPage] = useState(1)
    const router = useRouter()

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
        const sortedData = [...news]
        sortedData.shift()
        const result = [];
        for (let i = 0; i < sortedData.length; i += 8) {
            result.push(sortedData.slice(i, i + 8));
        }
        return result;
    }

    const pagination = dataAsPagination()
    return (
        <div className="w-full">
            <div className="flex flex-row gap-x-[2.5rem] mt-[3.125rem] items-center mx-[6.25rem]">
                <div className="rounded-xl min-w-[42.5rem] min-h-[30rem] max-w-[42.5rem] max-h-[30rem] relative">
                    <Image src={news[0].news_file_path} fill className="rounded-lg" />
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row gap-x-[0.875rem] items-center">
                        <div className="w-text-body-1 font-bold text-jet">{news[0].news_place}</div>
                        <div>|</div>
                        <div className="w-text-body-1 text-hard_coal">{moment(news[0].news_date).format("D MMMM YYYY")}</div>
                    </div>
                    <div className="mt-[0.875rem] w-text-display-2 text-sooty">{language == ENGLISH ? news[0].news_title_en : news[0].news_title}</div>
                    {/* <div dangerouslySetInnerHTML={{ __html: language == ENGLISH ? news[0].news_content_en : news[0].news_content }}></div> */}

                    <button className="mt-[1.5rem] btn btn-warning px-0 capitalize text-white w-text-button btn-outline w-[9.813rem]"
                        onClick={() => {
                            router.push("/news/" + news[0].news_alias)
                        }}
                    >{language == ENGLISH ? "Read more" : "Baca selengkapnya"}</button>
                </div>
            </div>

            <div className="flex flex-col border-t border-t-secondary mt-[3.938rem] pt-[5rem] px-[6.25rem]">
                <div className="flex flex-row justify-between mb-[2.75rem]">
                    <div className="w-text-title-1 font-bold text-sooty">{language == ENGLISH ? "Other News" : "Berita Lainnya"}</div>
                    <div className="flex flex-row">
                        {/* <div>Urutkan Berdasarkan</div>
                            <div>Cari</div> */}
                    </div>
                </div>
                {/* news */}
                <div className="grid grid-cols-4 gap-[2.5rem] mb-[2.5rem]">
                    {pagination.length > 0 && pagination[page - 1].map((item, index) => {
                        return (
                            <News key={index}
                                alias={item.news_alias}
                                description={language == ENGLISH ? item.news_title_en : item.news_title}
                                location={item.news_place}
                                thumbnail={item.news_file_path}
                                date={moment(item.news_date).format("D MMMM YYYY")}
                            />
                        )
                    })}
                </div>
                <div className="w-full flex justify-center">
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
    )
}

export default ListNews