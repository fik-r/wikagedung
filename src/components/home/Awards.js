'use client'
import { useRouter } from 'next/navigation'
import { LANGUAGE, ENGLISH } from '@/utils/constants'
import { useState, useEffect } from "react"
import useResponsive from '@/utils/media-query'
import { Container } from '../Layout'

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
            <div className="zoom hover:cursor-pointer flex flex-col items-center w-[8.75rem]" onClick={() => {
                router.push("/info-perusahaan/penghargaan-sertifikasi")
            }}>
                <img src={logo} className="w-[8.75rem] h-[8.75rem]" />
                <div className="w-text-subhead-1 text-sooty font-semibold mt-[1.625rem] text-center">{desc}</div>
            </div>
        )
    }
    return (
        <>
            {!isMobile && <Container className="pt-[3.75rem] pb-[5.188rem]">
                <div className="flex flex-col items-center">
                    <div className="w-text-headline-1 text-sooty font-bold pb-[3rem]">Our Awards & Commitment</div>
                    <div className="flex flex-row gap-x-[5rem]">
                        <AwardsItem logo="/images/illust_awards.svg" desc={language == ENGLISH ? data[0].award_text_en : data[0].award_text} />
                        <AwardsItem logo="/images/illust_iso.svg" desc={language == ENGLISH ? data[1].award_text_en : data[1].award_text} />
                        <AwardsItem logo="/images/illust_green_building.svg" desc={language == ENGLISH ? data[2].award_text_en : data[2].award_text} />
                    </div>
                </div>
            </Container>}
        </>
    )
}

export default Awards