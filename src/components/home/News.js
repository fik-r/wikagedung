'use client'
import cn from 'classnames';
import { useState, useEffect } from 'react';
import { LANGUAGE, ENGLISH } from '@/utils/constants';
import Index from '@/app/page';
import moment from "moment"
import { useRouter } from 'next/navigation';

const News = ({ data, news }) => {
    const router = useRouter()
    const [language, setLanguage] = useState("")

    function getLargeNews() {
        if (news && news.length > 2) {
            let array1 = news.slice(0, 2);
            return array1
        }
        else {
            return news
        }
    }

    function getSmallNews() {
        let array2 = news.slice(2, news.length);
        return array2
    }

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

    const LargeNewsItem = ({ location, date, title, thumbnail, alias }) => {
        return (
            <div className={cn("zoom hover:cursor-pointer relative col-span-1 h-[20rem] items-start rounded-lg bg-cover bg-center bg-no-repeat")}
                style={{ backgroundImage: `url(${thumbnail})` }}
                onClick={() => {
                    router.push("/media/berita/" + alias)
                }}
            >
                <div className="absolute pt-[1.375rem] px-[1.5rem] pb-[2rem] bottom-0">
                    <div className="flex flex-row gap-x-[0.875rem] items-center">
                        <div className="w-text-body text-white font-semibold">{location}</div>
                        <div className="w-text-body text-white">|</div>
                        <div className="w-text-body font-normal text-white">{date}</div>
                    </div>
                    <div className="mt-[1rem] w-text-title-1 font-semibold text-white">
                        {title}
                    </div>
                </div>
            </div>
        )
    }

    const SmallNewsItem = ({ location, date, title, thumbnail, alias }) => {
        return (
            <div className="zoom flex flex-row items-center gap-x-[1.5rem] hover:cursor-pointer"
                onClick={() => {
                    router.push("/media/berita/" + alias)
                }}>
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
        <>
            <div className="grid grid-cols-3 mx-[2.5rem]">
                <div className="col-span-1 flex flex-col">
                    <div className="text-orange w-text-body-1 font-bold">{language == ENGLISH ? "News" : "Berita"}</div>
                    <div className="text-sooty w-text-headline-1 leading-[3.125rem] pr-[1rem]">{language == ENGLISH ? data.news_title_en : data.news_title}</div>
                </div>
                <div className="col-span-2 flex flex-col">
                    <div className="text-jet w-text-body-2 font-normal leading-[2rem]">{language == ENGLISH ? data.news_text_en : data.news_text}</div>
                    <div className="btn btn-outline btn-warning mt-[1.5rem] w-[10.75rem] px-0 capitalize">{language == ENGLISH ? "See More" : "Lihat Selengkapnya"}</div>
                </div>
            </div>
            {/* card news */}
            <div className="flex flex-col mt-[6.938rem] justify-center mb-[8.75rem]">
                <div className="grid grid-cols-2 gap-x-[1.313rem]">
                    {getLargeNews().map((news, index) => {
                        return (
                            <LargeNewsItem
                                key={index}
                                date={moment(news.news_date).format("D MMMM YYYY")}
                                title={language == ENGLISH ? news.news_title_en : news.news_title}
                                location={news.news_place}
                                thumbnail={process.env.NEXT_PUBLIC_BASE_URL + news.news_file_path}
                                alias={news.news_alias}
                            />
                        )
                    })}
                </div>
                {news && news.length > 2 &&
                    <div className="grid grid-cols-3 gap-x-[2.5rem] mt-[2.5rem]">
                        {getSmallNews().map((news, index) => {
                            return (
                                <SmallNewsItem
                                    key={Index}
                                    date={moment(news.news_date).format("D MMMM YYYY")}
                                    title={language == ENGLISH ? news.news_title_en : news.news_title}
                                    location={news.news_place}
                                    thumbnail={process.env.NEXT_PUBLIC_BASE_URL + news.news_file_path}
                                    alias={news.news_alias}
                                />
                            )
                        })}
                    </div>
                }
            </div>
        </>
    )
}

export default News