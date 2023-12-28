import { LANGUAGE, ENGLISH } from '@/utils/constants';
import { useState, useEffect } from 'react'
import useResponsive from '@/utils/media-query';
import cn from "classnames"
import Image from 'next/image';
const BerkarirBersamaKami = ({ data }) => {

    const { isMobile } = useResponsive()

    const [isExpand, setIsExpand] = useState(false)
    const [language, setLanguage] = useState("")
    const [readMore, setReadMore] = useState(false)

    const numItemsToShow = isExpand ? data.available_jobs.length : 4;

    useEffect(() => {

        console.log(data)
        function setLanguageOnStorageChange() {
            setLanguage(localStorage.getItem(LANGUAGE))
        }
        setLanguageOnStorageChange()

        window.addEventListener('storage', setLanguageOnStorageChange)
        return () => {
            window.removeEventListener('storage', setLanguageOnStorageChange)
        }
    }, [])

    return (
        <div className={cn("flex flex-col w-full", isMobile ? "px-[1rem]" : "px-[6.25rem] py-[1.25rem]")}>
            <div className="w-text-body-2 text-jet">
                {language == ENGLISH ? data.intro_en : data.intro}
            </div>
            <div className={cn("flex flex-row overflow-x-auto", isMobile ? "gap-x-[0.938rem] mt-[1.5rem]" : "mt-[2.5rem] gap-x-[2.5rem]")}>
                {data.image.map((item, key) => {
                    return (
                        <div key={key} className={cn("relative rounded rounded-lg", isMobile ? "min-w-[15rem] min-h-[15rem] max-w-[15rem] max-h-[15rem]" : "min-w-[17.5rem] min-h-[16.75rem] max-w-[17.5rem] max-h-[16.75rem]")}>
                            <Image
                                quality={50} placeholder="blur"
                                blurDataURL={item}
                                style={{ objectFit: "cover" }}
                                fill src={item} className='rounded rounded-lg' />
                        </div>
                    )
                })}
            </div>
            <div className={cn("text-sooty", isMobile ? "w-text-title-1 font-bold mt-[3.5rem]" : "mt-[7.5rem] w-text-headline-1")}>
                {language == ENGLISH ? data.sub_title_en : data.sub_title}
            </div>
            <div className="flex flex-col">
                {data.hc_program.map((item, key) => {
                    return (
                        <div key={key} className={cn("flex", isMobile ? "my-[2rem] flex-col" : "flex-row gap-x-[2.5rem] my-[2.5rem]")}>
                            <div className={cn("relative rounded rounded-lg", isMobile ? "w-full min-h-[12.5rem] max-h-[12.5rem]" : "min-w-[36.25rem] min-h-[20.25rem] max-w-[36.25rem] max-h-[20.25rem]")}>
                                <Image fill className='rounded-lg' src={item.image} />
                            </div>
                            <div className="flex flex-col">
                                <div className={cn("w-text-body-2 font-semibold text-sooty", isMobile ? "mt-[1.5rem]" : "h-[3.125rem]")}>{language == ENGLISH ? item.title_en : item.title}</div>
                                <div className={cn("leading-[2rem] w-text-body-2 text-jet whitespace-pre-line", readMore ? "" : "line-clamp-6")} dangerouslySetInnerHTML={{ __html: language == ENGLISH ? item.text_en : item.text }}></div>
                                <div className="mt-[1rem] cursor-pointer  flex flex-row items-center">
                                    <span className="w-text-body-1 mr-[2.063rem] text-primary font-semibold" onClick={() => {
                                        setReadMore(!readMore)
                                    }}>{!readMore ? (language == ENGLISH ? "Read more" : "Lanjutkan membaca") : (language == ENGLISH ? "Read less" : "Tutup")} </span>
                                    <img src="/icons/ic_dropdown.svg" className={cn("w-[0.563rem] h-[0.938rem] transform transition-transform duration-300", readMore ? "rotate-180" : "")} /></div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex flex-col mt-[5rem] items-center">
                <div className="w-text-headline-1 font-semibold text-sooty h-[3.125rem]">{language == ENGLISH ? "Job vacancies currently available" : "Lowongan kerja yang tersedia saat ini"}</div>
                <div className="w-text-body-2 text-jet">{language == ENGLISH ? "The following are the positions you can apply for to become part of Wika Gedung" : "Berikut ini posisi yang bisa anda lamar untuk bisa menjadi bagian dari Wika Gedung"}</div>

                <div className="w-full border border-aria shadow-md rounded rounded-lg mt-[2rem]">
                    <table className="w-full table table-zebra">
                        {!isMobile && <>
                            <thead>
                                <tr>
                                    <th className='capitalize w-text-body-1 font-semibold'>{language == ENGLISH ? "Job Name" : "Nama Lowongan"}</th>
                                    <th className='capitalize w-text-body-1 font-semibold'>{language == ENGLISH ? "Department" : "Department"}</th>
                                    <th className='capitalize w-text-body-1 font-semibold'>{language == ENGLISH ? "Location" : "Lokasi"}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.available_jobs.slice(0, numItemsToShow).map((item, key) => {
                                    return (
                                        <tr className="cursor-pointer" key={key} onClick={() => {
                                            window.open(item.link_to_apply, "_blankƒ")
                                        }}>
                                            <td className='capitalize w-text-body-1 font-regular'>{item.job_name}</td>
                                            <td className='capitalize w-text-body-1 font-regular'>{item.Department}</td>
                                            <td className='capitalize w-text-body-1 font-regular'>{item.Location}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </>}
                        {isMobile &&
                            <tbody>
                                {data.available_jobs.slice(0, numItemsToShow).map((item, key) => {
                                    return (
                                        <tr className="flex flex-row" key={key} onClick={() => {
                                            window.open(item.link_to_apply, "_blankƒ")
                                        }}>
                                            <td className="flex-1 w-32 flex flex-col w-full py-[0.75rem]">
                                                <div className='capitalize font-bold w-text-body-1 font-regular h-[1.375rem] truncate'>{item.job_name}</div>
                                                <div className='capitalize w-text-body-1 font-regular h-[1.375rem]'>{item.Department}</div>
                                            </td>
                                            <td className='flex-none h-[4.25rem] capitalize w-text-body-1 font-medium text-primary py-[0.75rem] flex items-center justify-end'>{item.Location}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        }
                    </table>
                </div>

                {data.available_jobs.length > 1 &&
                    <div className={cn("btn btn-outline btn-warning w-[10.75rem] px-0 capitalize self-center", isMobile ? "btn-sm mt-[2.5rem]" : "mt-[2rem]")} onClick={() => {
                        setIsExpand(!isExpand)
                    }}>{isExpand ? language == ENGLISH ? "See Less Jobs" : "Lihat Sedikit Lowongan" : language == ENGLISH ? "See All Jobs" : "Lihat Semua Lowongan"}</div>}
            </div>
        </div>
    )
}

export default BerkarirBersamaKami