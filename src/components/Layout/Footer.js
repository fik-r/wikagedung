import useResponsive from "@/utils/media-query"
import cn from 'classnames'
import { useState, useEffect } from "react"
import { LANGUAGE, ENGLISH } from "@/utils/constants"
const Footer = ({ data }) => {
    const [language, setLanguage] = useState("")
    const { isMobile } = useResponsive()
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
    return (
        <div className={cn(isMobile ? "mt-[2rem]" : "mt-[5rem]")}>
            <div className={cn("w-full bg-primary", isMobile ? "px-[0.875rem] py-[1.375rem]" : "px-[6.25rem] py-[4.969rem]")}>
                <div className={cn("flex items-center px-0", isMobile ? "justify-center" : "justify-between")}>
                    <img src="/images/ic_wika_gedung_white.svg" className={cn(isMobile ? "w-[9.125rem] h-[2.375rem]" : "w-[15rem] h-[3.875rem]")} />
                    {!isMobile && <div className='text-white mt-[1.125rem]'>© 2023 WIKA Gedung. All Rights Reserved.</div>}
                </div>
                <div className="w-full h-[0.5px] bg-white my-[1.5rem]"></div>

                <div className={cn("grid", isMobile ? "grid-cols-2" : "grid-cols-5")}>
                    <div className="col-span-2 flex flex-col">
                        <div className={cn("text-white", isMobile ? "w-text-caption font-bold" : "w-text-subhead-2")}>{language == ENGLISH ? "Head Office" : "Kantor Pusat"}</div>
                        <div className={cn("text-white font-normal mt-[0.625rem]", isMobile ? "w-text-caption" : "w-text-body-2")}>{data.name}</div>
                    </div>
                    <div className="col-span-1 flex flex-col">
                        <div className={cn(isMobile ? "flex flex-col" : "grid grid-cols-3")}>
                            <div className={cn("text-white", isMobile ? "w-text-caption font-bold" : "w-text-subhead-1")}>Email</div>
                            <div className={cn("col-span-2 text-white", isMobile ? "w-text-caption" : "w-text-body-2")}>{data.email}</div>
                        </div>
                        <div className={cn(isMobile ? "flex flex-col" : "grid grid-cols-3")}>
                            <div className={cn("text-white", isMobile ? "w-text-caption font-bold" : "w-text-subhead-1")}>Phone</div>
                            <div className={cn("col-span-2 text-white", isMobile ? "w-text-caption" : "w-text-body-2")}>{data.telp}</div>
                        </div>
                        <div className={cn(isMobile ? "flex flex-col" : "grid grid-cols-3")}>
                            <div className={cn("text-white", isMobile ? "w-text-caption font-bold" : "w-text-subhead-1")}>Fax</div>
                            <div className={cn("col-span-2 text-white", isMobile ? "w-text-caption" : "w-text-body-2")}>{data.fax}</div>
                        </div>
                    </div>
                    {!isMobile && <div className="col-span-2 flex flex-row gap-[0.625rem] h-[1.875rem] justify-end">
                        <img src="/icons/linkedin.svg" className="cursor-pointer" onClick={() => {
                            window.open(data.linkedin, "_blank")
                        }} />
                        <img src="/icons/facebook.svg" className="cursor-pointer" onClick={() => {
                            window.open(data.facebook, "_blank")
                        }} />
                        <img src="/icons/youtube.svg" className="cursor-pointer" onClick={() => {
                            window.open(data.youtube, "_blank")
                        }} />
                        <img src="/icons/twitter.svg" className="cursor-pointer" onClick={() => {
                            window.open(data.twitter, "_blank")
                        }} />
                        <img src="/icons/instagram.svg" className="cursor-pointer" onClick={() => {
                            window.open(data.instagram, "_blank")
                        }} />
                        <img src="/icons/_TikTok.svg" className="cursor-pointer" onClick={() => {
                            window.open(data.tiktok, "_blank")
                        }} />
                        <img src="/icons/_Spotify.svg" className="cursor-pointer" onClick={() => {
                            window.open(data.spotify, "_blank")
                        }} />
                    </div>}
                </div>

                {isMobile &&
                    <>
                        <div className="flex flex-row gap-x-[0.875rem] h-[1.875rem] justify-center mt-[3rem]">
                            <img src="/icons/linkedin.svg" className="w-[1.5rem] h-[1.5rem] cursor-pointer" onClick={() => {
                                window.open(data.linkedin, "_blank")
                            }} />
                            <img src="/icons/facebook.svg" className="w-[1.5rem] h-[1.5rem] cursor-pointer" onClick={() => {
                                window.open(data.facebook, "_blank")
                            }} />
                            <img src="/icons/youtube.svg" className="w-[1.5rem] h-[1.5rem] cursor-pointer" onClick={() => {
                                window.open(data.youtube, "_blank")
                            }} />
                            <img src="/icons/twitter.svg" className="w-[1.5rem] h-[1.5rem] cursor-pointer" onClick={() => {
                                window.open(data.twitter, "_blank")
                            }} />
                            <img src="/icons/instagram.svg" className="w-[1.5rem] h-[1.5rem] cursor-pointer" onClick={() => {
                                window.open(data.instagram, "_blank")
                            }} />
                            <img src="/icons/_TikTok.svg" className="w-[1.5rem] h-[1.5rem] cursor-pointer" onClick={() => {
                                window.open(data.tiktok, "_blank")
                            }} />
                            <img src="/icons/_Spotify.svg" className="w-[1.5rem] h-[1.5rem] cursor-pointer" onClick={() => {
                                window.open(data.spotify, "_blank")
                            }} />
                        </div>
                        <hr className="mt-[1.25rem]" />
                        <div className='w-text-caption font-medium text-center text-white mt-[0.5rem]'>© 2023 WIKA Gedung. All Rights Reserved.</div>
                    </>
                }


            </div>
        </div>
    )
}

export default Footer;