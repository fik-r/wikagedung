'use client'
import moment from "moment"
import { useState, useEffect } from "react"
import { LANGUAGE, ENGLISH } from "@/utils/constants"
import { useRouter } from "next/navigation"
const NewsDetail = ({ data, news }) => {
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
            <div className="w-[21.938rem] h-[8.375rem] zoom flex flex-row items-center gap-x-[1.5rem] hover:cursor-pointer"
                onClick={() => {
                    router.push("/news/" + alias)
                }}
            >
                <img src={thumbnail} className="rounded-lg w-[8.375rem] h-[8.375rem]" />
                <div>
                    <div className="flex flex-row gap-x-[0.875rem] items-center">
                        <div className="w-text-caption text-jet font-semibold">{location}</div>
                        <div className="w-text-subhead-1 text-aria">|</div>
                        <div className="w-text-caption font-normal text-hard_coal">{date}</div>
                    </div>
                    <div className="mt-[0.875rem] w-text-body-1 font-semibold text-sooty">
                        {title}
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="mx-[6.25rem] flex flex-col border-l-secondary border-l pl-[3.75rem] pt-[5rem]">
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <div className="flex flex-row gap-x-[0.875rem] items-center">
                        <div className="w-text-body-1 font-bold text-jet">{data.news_place}</div>
                        <div>|</div>
                        <div className="w-text-body-1 text-hard_coal">{moment(data.news_date).format("D MMMM YYYY")}</div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="w-text-display-2 text-sooty">
                            {language == ENGLISH ? data.news_title_en : data.news_title}
                        </div>
                        {/* <div className="flex flex-col">
                                <div>Share</div>
                            </div> */}
                    </div>
                </div>
                <div className="flex flex-col mt-[2.5rem]">
                    <img src={data.image_url} className="w-[79rem] h-[34.375rem] rounded-lg" />
                    <div className="flex flex-row pt-[2.5rem] gap-x-[3.125rem]">
                        <div className="w-text-body-1 text-jet leading-[1.5rem]">
                            <div dangerouslySetInnerHTML={{ __html: language == ENGLISH ? data.news_content_en : data.news_content }}></div>
                        </div>
                        <div className="flex flex-col">
                            <div className="w-text-title-1 font-bold text-sooty mb-[1.5rem]">{language == ENGLISH ? "News Recommendations" : "Rekomendasi Berita"}</div>
                            {news.map((item, key) => {
                                return (
                                    <div key={key}>
                                        <SmallNewsItem
                                            alias={item.news_alias}
                                            thumbnail={item.news_file_path}
                                            date={moment(item.news_date).format("D MMMM YYYY")} location={item.news_place}
                                            title=
                                            {language == ENGLISH ? item.news_title_en : item.news_title} />
                                        <hr className="my-[1rem]" />
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