'use client'
import cn from 'classnames';
import { useState, useEffect } from 'react';
import { LANGUAGE, ENGLISH } from '@/utils/constants';
import moment from "moment"
import { useRouter } from 'next/navigation';
import { Container } from '@/components/Layout';
import useResponsive from '@/utils/media-query';
import Image from 'next/image';
const News = ({ data, news }) => {
    const { isMobile } = useResponsive()
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
            <div className={cn("zoom hover:cursor-pointer relative col-span-1 h-[20rem] items-start rounded-lg")}
                onClick={() => {
                    router.push("/news/" + alias)
                }}
            >
                <Image src={thumbnail} quality={50} placeholder="blur" blurDataURL={thumbnail} fill className="rounded-lg z-[-2]" />
                <Image src="/images/overlay.png" fill className="rounded-lg z-[-1]" />
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
                    router.push("/news/" + alias)
                }}>
                <div className='min-w-[8.375rem] min-h-[8.375rem] max-w-[8.375rem] max-h-[8.375rem] relative'>
                    <Image src={thumbnail} className="rounded-lg"
                        quality={50} placeholder="blur"
                        blurDataURL={thumbnail}
                        fill />
                </div>
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

    const MobileNewsItem = ({ location, date, title, thumbnail, alias }) => {
        return (
            <div onClick={() => {
                router.push("/news/" + alias)
            }} className="rounded-xl shadow-md zoom flex flex-col items-center hover:cursor-pointer min-w-[14.5rem] h-[20rem] mb-[5px]">
                <img src="/images/dummy_news_2.webp" className="rounded-t-lg min-w-[14.5rem] h-[10.125rem]" />
                <div className="p-[1.5rem]">
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
        <Container className={cn(isMobile ? "pt-[2rem]" : "pt-[7.5rem]")}>
            <div className={cn(isMobile ? "flex flex-col mx-[0.875rem]" : "mx-[2.5rem] grid grid-cols-3")}>
                <div className={cn("flex flex-col", isMobile ? "" : "col-span-1")}>
                    {!isMobile && <div className="text-orange w-text-body-1 font-bold">{language == ENGLISH ? "News" : "Berita"}</div>}
                    <div className={cn("text-sooty pr-[1rem]", isMobile ? "w-text-body-2 font-bold" : "leading-[3.125rem] w-text-headline-1")}>{language == ENGLISH ? data.news_title_en : data.news_title}</div>
                    {isMobile && <div className={cn("text-jet font-normal mt-[0.875rem] w-text-body-1")}>{language == ENGLISH ? data.news_text_en : data.news_text}</div>}
                </div>
                {!isMobile && <div className="col-span-2 flex flex-col">
                    <div className="text-jet w-text-body-2 font-normal leading-[2rem]">{language == ENGLISH ? data.news_text_en : data.news_text}</div>
                    <div className="btn btn-outline btn-warning mt-[1.5rem] w-[10.75rem] px-0 capitalize">{language == ENGLISH ? "See More" : "Lihat Selengkapnya"}</div>
                </div>}
            </div>
            {/* card news */}
            {!isMobile && <div className="flex flex-col mt-[6.938rem] justify-center mb-[8.75rem]">
                <div className="grid grid-cols-2 gap-x-[1.313rem]">
                    {getLargeNews().map((news, index) => {
                        return (
                            <LargeNewsItem
                                key={index}
                                date={moment(news.news_date).format("D MMMM YYYY")}
                                title={language == ENGLISH ? news.news_title_en : news.news_title}
                                location={news.news_place}
                                thumbnail={news.news_file_path}
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
                                    key={index}
                                    date={moment(news.news_date).format("D MMMM YYYY")}
                                    title={language == ENGLISH ? news.news_title_en : news.news_title}
                                    location={news.news_place}
                                    thumbnail={news.news_file_path}
                                    alias={news.news_alias}
                                />
                            )
                        })}
                    </div>
                }
            </div>}


            {isMobile && <div className='flex flex-row overflow-x-auto mx-[0.875rem] gap-x-[0.875rem] mt-[1.875rem] '>
                {news.map((news, index) => {
                    return (
                        <MobileNewsItem
                            key={index}
                            date={moment(news.news_date).format("D MMMM YYYY")}
                            title={language == ENGLISH ? news.news_title_en : news.news_title}
                            location={news.news_place}
                            thumbnail={news.news_file_path}
                            alias={news.news_alias}
                        />
                    )
                })}
            </div>}

            {isMobile && <div className="btn btn-outline btn-warning mt-[2.5rem] w-[10.75rem] btn-sm px-0 capitalize mx-auto">{language == ENGLISH ? "See More" : "Lihat Selengkapnya"}</div>}
        </Container>
    )
}

export default News