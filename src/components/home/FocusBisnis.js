'use client'
import cn from 'classnames'
import { useEffect, useState } from 'react'
import { Slide } from "react-awesome-reveal";
import { LANGUAGE, ENGLISH } from '@/utils/constants';
import { Container } from '../Layout';
import useResponsive from '@/utils/media-query';
import Image from "next/image"

const FocusBisnis = ({ data }) => {
    const [language, setLanguage] = useState("")
    const { isMobile } = useResponsive()
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

    const CardFocusBisnis = ({ item }) => {
        const [isHover, setIsHover] = useState(false)
        return (
            <div onClick={() => { window.open(item.lini_bisnis_link, "_blank") }} onMouseEnter={() => {
                setIsHover(true)
            }} onMouseLeave={() => {
                setIsHover(false)
            }} className={cn(
                isMobile ? "min-h-[20rem] min-w-[14.563rem]" : "col-span-1 h-[30.75rem]",
                "hover:cursor-pointer relative items-start rounded-lg")}>
                <Image src={item.lini_bisnis_background}
                    quality={50} placeholder="blur"
                    blurDataURL={item.lini_bisnis_background}
                    fill className='rounded-lg'
                    style={{ objectFit: "cover"}} />
                <div className="absolute w-full h-full rounded-lg" style={{
                    "background": "linear-gradient(0deg, rgba(0, 0, 0, 0.6) 26.12%, rgba(249, 160, 27, 0) 84.35%)"
                }} />
                <div className="absolute w-full h-full rounded-lg" style={{
                    "background": "rgba(249, 160, 27, 0.3)"
                }} />
                {!isHover && <>
                    <img src={isMobile ? item.lini_bisnis_icon : item.lini_bisnis_icon}
                        className={cn("relative z-[100]", isMobile ? "pt-[10.813rem] px-[1.5rem]" : "pt-[19.063rem] px-[2.5rem]")} />
                    <div className={cn("text-neutral relative z-[100]", isMobile ? "w-text-subhead-2 mt-[0.875rem] px-[1.5rem]" : "w-text-headline-1 mt-[1.5rem] px-[2.5rem]")}>{LANGUAGE == ENGLISH ? item.lini_bisnis_title_en : item.lini_bisnis_title}</div>
                </>
                }
                {!isMobile && isHover &&
                    <div className='fade-in'>
                        <div className="absolute w-full h-full rounded-lg" style={{
                            "background": "#F9A01BCC"
                        }} />
                        <Slide direction='up' duration={300}>
                            <img src={item.lini_bisnis_icon} className="pt-[4.5rem] px-[2.5rem] relative z-[100]" />
                            <div className="text-neutral w-text-headline-1 mt-[1.5rem] px-[2.5rem] relative z-[100]">{item.title}</div>
                            <div className="text-white w-text-body-2 relative z-[100] px-[2.5rem] pt-[1.25rem]">{item.lini_bisnis_hover_text}</div>
                            <div className='w-full px-[2.5rem] '>
                                <div className="btn btn-ghost border border-white relative z-[100] text-white w-full mt-[1.688rem]">Pelajari lebih lanjut</div>
                            </div>
                        </Slide>

                    </div>
                }
            </div>
        )
    }

    return (
        <Container className={cn(isMobile ? "pt-[1.5rem]" : "pt-[5rem] pb-[5.188rem]")}>
            <div className={cn("flex flex-row justify-between gap-x-[6.25rem]", isMobile ? "px-[0.875rem]" : "mb-[5.688rem] px-[2.5rem]")}>
                <div className="flex flex-col">
                    {isMobile && <div className="text-secondary w-text-caption font-bold uppercase">Bisnis</div>}
                    <div className={cn("text-sooty font-semibold", isMobile ? "w-text-body-2" : "w-text-title-1")}>{LANGUAGE == ENGLISH ? data.lini_bisnis_header_en : data.lini_bisnis_header}</div>
                    <div className={cn("text-jet font-normal", isMobile ? "w-text-body-1 mt-[0.875rem]" : "w-text-body-2 mt-[1.5rem]")}>
                        {LANGUAGE == ENGLISH ? data.lini_bisnis_text_en : data.lini_bisnis_text}
                    </div>
                </div>
                {!isMobile && <img src="/images/illustration-ondernemingen.svg" />}
            </div>
            {/* card lini bisnis */}
            <div className={cn(isMobile ? "mx-[0.875rem] flex flex-row overflow-x-scroll mt-[1.875rem] gap-x-[0.875rem]" : "mt-[1.938rem] gap-x-[0.188rem] grid grid-cols-4")}>
                {
                    data.lini_bisnis.map((item, index) => {
                        return (
                            <CardFocusBisnis item={item} key={index} />
                        )
                    })
                }
            </div>
        </Container>
    )
}
export default FocusBisnis