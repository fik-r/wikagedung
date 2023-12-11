'use client'
import moment from "moment"
import { useState, useEffect } from "react"
import { LANGUAGE, ENGLISH } from "@/utils/constants"
import { useRouter } from "next/navigation"
import Image from "next/image"
import cn from "classnames"
import useResponsive from "@/utils/media-query"
const NewsDetail = ({ data, news }) => {
    const { isMobile } = useResponsive();
    const [language, setLanguage] = useState("")
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
    const SmallNewsItem = ({ location, date, title, thumbnail, alias }) => {
        return (
            <div className={cn("flex flex-row items-center hover:cursor-pointer", isMobile ? "w-full h-[5.625rem] gap-x-[1rem]" : "gap-x-[1.5rem] w-[21.938rem] h-[8.375rem] zoom")}
                onClick={() => {
                    router.push("/news/" + alias)
                }}
            >
                <div className={cn("rounded-lg relative", isMobile ? "min-w-[9.125rem] max-w-[9.125rem] min-h-[5.625rem] max-h-[5.625rem]" : "min-w-[8.375rem] min-h-[8.375rem] max-w-[8.375rem] max-h-[8.375rem]")}>
                    <Image
                        quality={50} placeholder="blur"
                        blurDataURL={thumbnail}
                        alt={"recommended_news_thumbnail"}
                        style={{ objectFit: "cover" }}
                        src={thumbnail} className="rounded-lg" fill />
                </div>
                <div>
                    <div className={cn("flex flex-row items-center", isMobile ? "gap-x-[0.5rem]" : "gap-x-[0.875rem]")}>
                        <div className="w-text-caption text-jet font-semibold">{location}</div>
                        <div className="w-text-caption text-aria">|</div>
                        <div className="w-text-caption font-normal text-hard_coal">{date}</div>
                    </div>
                    <div className={cn("w-text-body-1 font-semibold text-sooty line-clamp-3", isMobile ? "mt-[0.75rem]" : "mt-[0.875rem]")}>
                        {title}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className={cn("flex flex-col", isMobile ? "pt-[2.5rem]" : "mx-[6.25rem] border-l-secondary border-l pl-[3.75rem] pt-[5rem]")}>
            <div className="flex flex-col">
                <div className={cn("flex flex-col", isMobile ? "px-[1rem]" : "")}>
                    <div className={cn("flex flex-row items-center", isMobile ? "gap-x-[0.5rem]" : "gap-x-[0.875rem]")}>
                        <div className={cn("font-bold text-jet", isMobile ? "w-text-caption" : "w-text-body-1")}>{data.news_place}</div>
                        <div className={cn(isMobile ? "w-text-caption" : "")}>|</div>
                        <div className={cn("text-hard_coal", isMobile ? "w-text-caption" : "w-text-body-1")}>{moment(data.news_date).format("D MMMM YYYY")}</div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className={cn("text-sooty", isMobile ? "w-text-title-1 mt-[0.625rem]" : "w-text-display-2")}>
                            {language == ENGLISH ? data.news_title_en : data.news_title}
                        </div>
                        {/* <div className="flex flex-col">
                                <div>Share</div>
                            </div> */}
                    </div>
                </div>
                <div className={cn("flex flex-col", isMobile ? "mt-[1.5rem]" : "mt-[2.5rem]")}>
                    <div className={cn(isMobile ? "px-[1rem]" : "")}>
                        <div className={cn("rounded-lg relative", isMobile ? "w-full min-h-[20.438rem] max-h-[20.438rem]" : "w-full min-h-[34.375rem] max-h-[34.375rem]")}>
                            <Image
                                quality={50} placeholder="blur"
                                blurDataURL={data.image_url}
                                style={{ objectFit: "cover" }}
                                alt="detail_news_thumbnail"
                                src={data.image_url} className="rounded-lg" fill />
                        </div>
                    </div>
                    <div className={cn(isMobile ? "mt-[1rem] flex flex-col" : "flex flex-row pt-[2.5rem] gap-x-[3.125rem]")}>
                        <div className={cn("w-text-body-1 text-jet leading-[1.5rem]", isMobile ? "px-[1rem] pb-[2rem]" : "")}>
                            <div dangerouslySetInnerHTML={{ __html: language == ENGLISH ? data.news_content_en : data.news_content }}></div>
                        </div>
                        {isMobile && <div className="border-t border-t-secondary mb-[2rem]"></div>}
                        <div className={cn("flex flex-col", isMobile ? "px-[1rem] gap-y-[1.5rem]" : "")}>
                            <div className={cn("w-text-title-1 font-bold text-sooty", isMobile ? "" : "mb-[1.5rem]")}>{language == ENGLISH ? "News Recommendations" : "Rekomendasi Berita"}</div>
                            {news.map((item, key) => {
                                return (
                                    <div key={key}>
                                        <SmallNewsItem
                                            alias={item.news_alias}
                                            thumbnail={item.news_file_path}
                                            date={moment(item.news_date).format("D MMMM YYYY")} location={item.news_place}
                                            title=
                                            {language == ENGLISH ? item.news_title_en : item.news_title} />
                                        {!isMobile && <hr className="my-[1rem]" />}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsDetail