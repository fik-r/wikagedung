'use client'
import { useEffect, useState } from "react"
import { LANGUAGE, ENGLISH } from "@/utils/constants"
import { Pagination } from "../common"
import { News } from "../media"
import moment from "moment"
import { useRouter } from "next/navigation"
import Image from "next/image"
import cn from "classnames"
import useResponsive from "@/utils/media-query"
const ListNews = ({ data, firstNews }) => {
    const { isMobile } = useResponsive()
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
        const sortedData = [...news.filter((val) => val.news_alias != data[0].news_alias)]
        const result = [];
        for (let i = 0; i < sortedData.length; i += 8) {
            result.push(sortedData.slice(i, i + 8));
        }
        return result;
    }

    const pagination = dataAsPagination()

    const SmallNewsItem = ({ location, date, title, thumbnail, alias }) => {
        return (
            <div className="w-full h-[5.625rem] flex flex-row items-center gap-x-[1rem] hover:cursor-pointer"
                onClick={() => {
                    router.push("/news/" + alias)
                }}
            >
                <div className="rounded-lg min-w-[9.125rem] max-w-[9.125rem] min-h-[5.625rem] max-h-[5.625rem] relative">
                    <Image
                        quality={50} placeholder="blur"
                        blurDataURL={thumbnail}
                        style={{ objectFit: "cover" }}
                        alt="thumbnail_news"
                        src={thumbnail} className="rounded-lg" fill />
                </div>
                <div>
                    <div className="flex flex-row gap-x-[0.5rem] items-center">
                        <div className="w-text-caption text-jet font-semibold">{location}</div>
                        <div className="w-text-caption text-aria">|</div>
                        <div className="w-text-caption font-normal text-hard_coal">{date}</div>
                    </div>
                    <div className="mt-[0.75rem] w-text-body-1 font-semibold text-sooty line-clamp-3">
                        {title}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="w-full">
            {isMobile && <div className="mx-[1rem] mb-[1.5rem] rounded-full bg-white border border-silver_spoon flex items-center px-[0.875rem] h-[2.75rem] gap-x-[0.875rem]">
                <img src="/icons/ic_search_black.svg" />
                <input
                    type="text"
                    placeholder={language == ENGLISH ? "Search" : "Cari"}
                    className="w-text-body-2 placeholder-robo_master bg-transparent border-none focus:ring-0 outline-none flex-grow"
                    onChange={(e) => {
                        const value = e.target.value
                        const filteredData = data.filter
                            ((val) =>
                                ((language == ENGLISH ? val.news_title_en : val.news_title))
                                    .toLowerCase()
                                    .includes(value.toLowerCase())
                            )
                        setNews(filteredData)
                        setPage(1)
                    }}
                />
            </div>}
            <div onClick={() => {
                if (isMobile) {
                    router.push("/news/" + data[0].news_alias)
                }
            }}
                className={cn(isMobile ? "cursor-pointer flex flex-col px-[1rem]" : "flex flex-row gap-x-[2.5rem] mt-[3.125rem] items-center mx-[6.25rem]")}>
                <div className={cn("rounded-xl relative", isMobile ? "w-full min-h-[12.5rem] max-h-[12.5rem] mb-[1rem]" : "min-w-[42.5rem] min-h-[30rem] max-w-[42.5rem] max-h-[30rem]")}>
                    <Image
                        alt="thumbnail_news"
                        quality={50} placeholder="blur"
                        blurDataURL={data[0].news_file_path}
                        style={{ objectFit: "cover" }}
                        src={data[0].news_file_path} fill className="rounded-lg" />
                </div>
                <div className="flex flex-col">
                    <div className={cn("flex flex-row items-center", isMobile ? "gap-x-[0.5rem]" : "gap-x-[0.875rem]")}>
                        <div className={cn("font-bold text-jet", isMobile ? "w-text-caption" : "w-text-body-1 ")}>{data[0].news_place}</div>
                        <div className={cn(isMobile ? "w-text-caption" : "")}>|</div>
                        <div className={cn("text-hard_coal", isMobile ? "w-text-caption" : "w-text-body-1")}>{moment(data[0].news_date).format("D MMMM YYYY")}</div>
                    </div>
                    <div className={cn("text-sooty", isMobile ? "w-text-title-1 mt-[0.625rem] font-bold" : "mt-[0.875rem] w-text-display-2 ")}>{language == ENGLISH ? data[0].news_title_en : data[0].news_title}</div>
                    {!isMobile && <>
                        <div className="mt-[1.5rem] w-text-body-2 text-jet line-clamp-5" dangerouslySetInnerHTML={{ __html: language == ENGLISH ? firstNews.news_content_en : firstNews.news_content }}></div>
                        <button className="mt-[1.5rem] btn btn-warning px-0 capitalize text-white w-text-button btn-outline w-[9.813rem]"
                            onClick={() => {
                                router.push("/news/" + data[0].news_alias)
                            }}
                        >{language == ENGLISH ? "Read more" : "Baca selengkapnya"}</button>
                    </>}
                </div>
            </div>

            <div className={cn("flex flex-col border-t border-t-secondary", isMobile ? "mt-[2rem] px-[1rem] pt-[2rem]" : "mt-[3.938rem] pt-[5rem] px-[6.25rem]")}>
                <div className={cn("flex flex-row justify-between items-center", isMobile ? "mb-[1.5rem]" : "mb-[2.75rem]")}>
                    <div className="w-text-title-1 font-bold text-sooty">{language == ENGLISH ? "Other News" : "Berita Lainnya"}</div>
                    <div className="flex flex-row">
                        {/* <div>Urutkan Berdasarkan</div>
                            <div>Cari</div> */}
                        {!isMobile && <div className="rounded-full bg-white border border-silver_spoon flex items-center px-[0.875rem] h-[2.75rem] gap-x-[0.875rem]">
                            <img src="/icons/ic_search_black.svg" />
                            <input
                                type="text"
                                placeholder={language == ENGLISH ? "Search" : "Cari"}
                                className="w-text-body-2 placeholder-robo_master bg-transparent border-none focus:ring-0 outline-none flex-grow"
                                onChange={(e) => {
                                    const value = e.target.value
                                    const filteredData = data.filter
                                        ((val) =>
                                            ((language == ENGLISH ? val.news_title_en : val.news_title))
                                                .toLowerCase()
                                                .includes(value.toLowerCase())
                                        )
                                    setNews(filteredData)
                                    setPage(1)
                                }}
                            />
                        </div>}
                    </div>
                </div>
                {/* news */}
                <div className={cn(isMobile ? "flex flex-col gap-y-[1.5rem]" : "grid grid-cols-4 gap-[2.5rem] mb-[2.5rem]")}>
                    {pagination.length > 0 && pagination[page - 1].map((item, index) => {
                        return (
                            <div key={index}>
                                {!isMobile &&
                                    <News key={index}
                                        alias={item.news_alias}
                                        description={language == ENGLISH ? item.news_title_en : item.news_title}
                                        location={item.news_place}
                                        thumbnail={item.news_file_path}
                                        date={moment(item.news_date).format("D MMMM YYYY")}
                                    />
                                }
                                {isMobile &&
                                    <SmallNewsItem key={index}
                                        alias={item.news_alias}
                                        title={language == ENGLISH ? item.news_title_en : item.news_title}
                                        location={item.news_place}
                                        thumbnail={item.news_file_path}
                                        date={moment(item.news_date).format("D MMMM YYYY")}
                                    />
                                }
                            </div>
                        )
                    })}
                </div>
                <div className={cn("w-full flex justify-center", isMobile ? "mt-[2rem]" : "")}>
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

        </div>
    )
}

export default ListNews