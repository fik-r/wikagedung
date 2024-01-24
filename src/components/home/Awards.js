'use client'
import { useRouter } from 'next/navigation'
import { LANGUAGE, ENGLISH } from '@/utils/constants'
import { useState, useEffect } from "react"
import useResponsive from '@/utils/media-query'
import { Container } from '../Layout'
import Image from 'next/image'
import cn from "classnames"

const Awards = ({ data }) => {
    const { isMobile } = useResponsive()

    const [language, setLanguage] = useState("")

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

    const router = useRouter()
    const AwardsItem = ({ logo, desc }) => {
        return (
            <div className={cn("zoom hover:cursor-pointer flex flex-col items-center", isMobile ? "" : "w-[8.75rem]")} onClick={() => {
                router.push("/info-perusahaan/penghargaan-sertifikasi")
            }}>
                <div className={cn("relative", isMobile ? "w-[3.75rem] h-[3.75rem]" : "w-[8.75rem] h-[8.75rem]")}>
                    <Image src={logo} fill quality={50} placeholder="blur" blurDataURL={logo} alt={"awards_logo"} />
                </div>
                <div className={cn("text-sooty font-semibold text-center", isMobile ? "w-text-caption mt-[0.75rem] w-[5rem]" : "w-text-subhead-1 mt-[1.625rem] ")}>{desc}</div>
            </div>
        )
    }
    return (
        <>
            <Container className="pt-[3.75rem] pb-[2.875rem]">
                <div className="flex flex-col items-center">
                    <div className="w-text-headline-1 text-sooty font-bold pb-[3rem]">{language == ENGLISH ? "Our Awards & Commitment" : "Penghargaan & Komitmen Kami"}</div>
                    <div className={cn(isMobile ? "grid grid-cols-3 gap-x-[2.063rem]" : "flex flex-row gap-x-[5rem]")}>
                        <AwardsItem logo="/images/illust_awards.svg" desc={language == ENGLISH ? data[0].award_text_en : data[0].award_text} />
                        <AwardsItem logo="/images/illust_iso.svg" desc={language == ENGLISH ? data[1].award_text_en : data[1].award_text} />
                        <AwardsItem logo="/images/illust_green_building.svg" desc={language == ENGLISH ? data[2].award_text_en : data[2].award_text} />
                    </div>
                </div>

            </Container>
            {isMobile && <hr />}
        </>
    )
}

export default Awards