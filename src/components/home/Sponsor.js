import cn from "classnames"
import { useState, useEffect } from "react"
import { LANGUAGE, ENGLISH } from "@/utils/constants"
import useResponsive from "@/utils/media-query"
import { Container } from "../Layout"
import Image from "next/image"

const Sponsor = ({ data, dataHomepage }) => {
    const { isMobile } = useResponsive()
    const [language, setLanguage] = useState("")
    const [isExpand, setIsExpand] = useState(false)

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

    const numItemsToShow = isExpand ? data.length : 6;

    return (
        <Container className={cn(isMobile ? "pt-[4.438rem]" : "pt-[2.75rem]")}>
            <div className={cn("flex flex-col", isMobile ? "px-[0.875rem]" : "mt-[3.75rem] px-[4.75rem] gap-y-[1.875rem]")}>
                {
                    <div className={cn("flex flex-col", isMobile ? "" : "mx-[4.75rem]")}>
                        <div className={cn("self-center font-bold text-sooty", isMobile ? "w-text-body-2" : "w-text-headline-1")}>{language == ENGLISH ? dataHomepage.member_title_en : dataHomepage.member_title}</div>
                        <div className="flex flex-row flex-wrap self-center mt-[0.875rem] gap-x-[0.875rem] justify-center">
                            {
                                data.slice(0, numItemsToShow).map((sponsor, index) => {
                                    return (
                                        <div key={index} className={cn(isMobile ? "w-[5.375rem] h-[2.438rem]" : "w-[13.75rem] h-[6.125rem]", "relative fade-in hover:cursor-pointer")}>
                                            <Image fill
                                                quality={50} placeholder="blur"
                                                blurDataURL={sponsor.image_url}
                                                src={sponsor.image_url} alt={sponsor.image_name} onClick={() => {
                                                    window.open(sponsor.link, "_blank")
                                                }} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                }
                {data.length > 6 &&
                    <div className={cn("btn btn-outline btn-warning w-[10.75rem] px-0 capitalize self-center", isMobile ? "btn-sm mt-[2.5rem]" : "mt-[1.5rem]")} onClick={() => {
                        setIsExpand(!isExpand)
                    }}>{isExpand ? language == ENGLISH ? "See Less" : "Lihat Lebih Sedikit" : language == ENGLISH ? "See More" : "Lihat Selengkapnya"}</div>}
            </div>
        </Container>
    )
}

export default Sponsor