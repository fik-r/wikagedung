'use client';

import { useState, useEffect } from "react";
import cn from "classnames";
import { ChildMenu } from "./Menu";
import { useRouter, usePathname } from 'next/navigation'
import { ENGLISH, INDONESIA, LANGUAGE } from "@/utils/constants";
import timezone, { lang } from "moment-timezone"
import useResponsive from "@/utils/media-query";

export default function Navbar(props) {
    const { isMobile } = useResponsive()
    const router = useRouter()
    const pathname = usePathname()
    const data = props.data
    const dataHomepage = props.dataHomepage
    const [isSticky, setIsSticky] = useState(false)
    const [expandMenu, setExpandMenu] = useState(false)
    const [expandMenuMobile, setExpandMenuMobile] = useState(false)
    const [theme, setTheme] = useState(props.theme)
    const [dataChildMenu, setDataChildMenu] = useState([])
    const [dataParent, setDataParent] = useState({title: "", description: ""})
    const [language, setLanguage] = useState("")

    useEffect(() => {
        window.addEventListener('scroll', stickyListener)
        return () => {
            window.removeEventListener('scroll', stickyListener)
        }
    })

    useEffect(() => {
        setLanguage(localStorage.getItem(LANGUAGE))
    }, [])

    function getBreadcumbsText() {
        var segments = pathname.split('/').filter(segment => segment !== '');
        var middle = segments[0].charAt(0).toUpperCase() + segments[0].slice(1).replace(/-/g, ' ');
        if (segments.length == 2) {

            var end = segments[1].charAt(0).toUpperCase() + segments[1].slice(1).replace(/-/g, ' ');
            return [middle, end]
        } else {
            return [middle]
        }
    }

    const stickyListener = (e) => {
        const scrollTop = window.scrollY;
        if (scrollTop >= 200) {
            setIsSticky(true)
            setTheme("light")
        } else if (!expandMenu) {
            setIsSticky(false)
            setTheme(props.theme)
        }
    };

    const expandChildrenMenu = () => {
        setExpandMenu(true)
        setIsSticky(true)
        setTheme("light")
    }

    const collapseMenu = () => {
        const scrollTop = window.scrollY;
        if (props.theme == "light" && scrollTop < 200)
            setIsSticky(false)
        setExpandMenu(false)
    }

    const setDesiredLanguage = (language) => {
        localStorage.setItem(LANGUAGE, language)
        setLanguage(localStorage.getItem(LANGUAGE))
        window.dispatchEvent(new Event("storage"));
    }
    return (
        <>
            {/* desktop */}
            {!isMobile && <div id="navbar" className={cn(props.className, isSticky ? "fixed top-0 z-[999]" : "", theme == "light" ? "bg-white fade-in" : "", "flex flex-col w-full pt-[2.5rem]")}>
                {/* image wika */}
                <div className="flex h-[2.625rem] px-[5rem]">
                    <img src="/images/ic_wika_gedung.svg" className="items-center hover:cursor-pointer" onClick={() => {
                        router.push("/")
                    }} />
                    <div className={cn(theme == "light" ? "text-sooty " : "text-white ", "w-text-subhead-1 font-bold self-center ml-[3.5rem]")}>WEGE - IDR {dataHomepage.nilai_saham}</div>
                    <div className="flex items-center ml-[0.719rem]"><img className="w-[1.125rem] h-[1.125rem]" src="/icons/ic_trending_up.svg" />
                        <span className="w-text-body-1 text-garnish ml-[0.25rem]">+{dataHomepage.grafik_saham} %</span>
                    </div>
                    <div className="text-white mx-[0.625rem] self-center">|</div>
                    <div className={cn(theme == "light" ? "text-jet " : "text-white ", "self-center w-text-body-1 font-normal")}>{timezone(dataHomepage.updated_at).tz('Asia/Bangkok').format('D MMMM YYYY HH:mm [GMT+7]')} </div>
                </div>
                {/* item navbar */}
                <div className="flex justify-between mt-[1.406rem] w-full px-[5rem]">
                    <div className="flex gap-x-[2.75rem]">
                        {
                            data.map((item, index) => {
                                return <div
                                    key={index}
                                    className={cn(pathname.replace(/[\/-]/g, ' ').includes(item.menu_name.toLowerCase()) ? "text-democrat" : theme == "light" ? "text-sooty" : "text-white", "w-text-subhead-1 cursor-pointer hover:text-democrat")}
                                    onMouseEnter={() => {
                                        expandChildrenMenu()
                                        setDataChildMenu(item.child)
                                        setDataParent({title: language == ENGLISH ? item.menu_name_en : item.menu_name, description: language == ENGLISH ? item.description_en : item.description})
                                    }}
                                >{language == ENGLISH ? item.menu_name_en : item.menu_name}</div>
                            })
                        }
                    </div>
                    <div className="flex items-center">
                        <div className={cn("hover:text-orange w-text-body-1 font-semibold cursor-pointer", language != ENGLISH ? "text-radiant_yellow" : theme == "light" ? "text-jet" : "text-white")} onClick={() => {
                            setDesiredLanguage(INDONESIA)
                        }}>Indonesia</div>
                        <div className={cn(theme == "light" ? "text-jet" : "text-white", "mx-[0.625rem]")}>|</div>
                        <div className={cn(language == ENGLISH ? "text-radiant_yellow" : theme == "light" ? "text-jet" : "text-white", "w-text-body-1 font-semibold cursor-pointer mr-[1.688rem] hover:text-orange")} onClick={() => {
                            setDesiredLanguage(ENGLISH)
                        }}>English</div>
                        <img src={theme == "light" ? "/icons/ic_search_black.svg" : "/icons/ic_search.svg"} className="cursor-pointer" />
                    </div>
                </div>
                {theme == "light" && <hr className="mt-[1.656rem]" />}
                {props.showBreadcrumb && !expandMenu &&
                    <>
                        <div className={cn("flex flex-row justify-between mx-[6.25rem] my-[1.75rem]", props.isOnDetailPage ? "" : "border-l-4 border-primary")}>
                            {!props.isOnDetailPage &&
                                <ul className="breadcrumb ml-[1.25rem]">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="#" className="capitalize">{getBreadcumbsText()[0]}</a></li>
                                    {getBreadcumbsText()[1] && <li><a href="#" className="capitalize">{getBreadcumbsText()[1]}</a></li>}
                                </ul>
                            }
                            <div className="flex flex-row cursor-pointer items-center gap-x-[0.875rem]" onClick={() => {
                                if (props.isOnDetailPage) {
                                    router.back();
                                } else {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                            }}>
                                <img src={props.isOnDetailPage ? "/icons/ic_circle_arrow_back.svg" : "/icons/ic_circle_arrow_up.svg"} />
                                <div className="font-medium text-primary w-text-body-1">{language == ENGLISH ? `Back to ${props.isOnDetailPage ? "Previous" : "Top"}` : `Kembali ke ${props.isOnDetailPage ? "Awal" : "Atas"}`}</div>
                            </div>
                        </div>
                        <hr />
                    </>
                }
                {isSticky && expandMenu &&
                    <ChildMenu
                        onMouseEnter={() => {
                            expandChildrenMenu()
                        }}
                        data={dataChildMenu}
                        title={dataParent.title}
                        description={dataParent.description}
                        onMouseLeave={collapseMenu} />
                }
            </div>}
            {/* mobile */}
            {isMobile && <div id="navbar" className="w-full fixed top-0 z-[995] bg-white">
                <div className="flex flex-row bg-[#424242] py-[0.625rem] px-[0.875rem]">
                    <div className={cn("text-white w-text-caption font-medium self-center")}>WEGE - IDR {dataHomepage.nilai_saham}</div>
                    <div className="flex items-center ml-[0.625rem]"><img className="w-[1.125rem] h-[1.125rem]" src="/icons/ic_trending_up.svg" />
                        <span className="w-text-caption text-garnish ml-[0.25rem]">+{dataHomepage.grafik_saham} %</span>
                    </div>
                </div>
                <div className="flex flex-row justify-between h-[4rem]">
                    <div className="flex flex-row my-[1.25rem]">
                        <img className="w-[1.5rem] h-[1.5rem] mx-[0.875rem] cursor-pointer" onClick={() => {
                            setExpandMenuMobile(true)
                        }} src="/icons/ic_menu.svg" />
                        <img className="w-[8.5rem] h-[1.5rem] cursor-pointer" src="/images/ic_wika_gedung.svg" onClick={() => {
                            router.push("/")
                        }} />
                    </div>
                    <div className="flex flex-row my-[1.25rem]">
                        <div className="flex flex-row items-center gap-x-[0.625rem]">
                            <div className={cn("w-text-body-1 cursor-pointer", language == INDONESIA ? "text-secondary font-semibold" : "text-aria font-normal")} onClick={() => {
                                setDesiredLanguage(INDONESIA)
                            }}>ID</div>
                            <div className="text-aria">|</div>
                            <div className={cn("w-text-body-1 cursor-pointer", language == ENGLISH ? "text-secondary font-semibold" : "text-aria font-normal")} onClick={() => {
                                setDesiredLanguage(ENGLISH)
                            }}>EN</div>
                        </div>
                        <img src={"/icons/ic_search_black.svg"} className="cursor-pointer mx-[0.875rem]" />
                    </div>
                </div>


            </div>}

            {isMobile && expandMenuMobile && <div className="w-full top-0 fixed h-full bg-black bg-opacity-50 z-[999]">
                <div className="w-[80%] h-full bg-white p-[1.5rem] flex flex-col">
                    <img className="w-[9.625rem] h-[1.625rem] mb-[1.5rem] cursor-pointer" src="/images/ic_wika_gedung.svg" onClick={() => {
                        setExpandMenuMobile(false)
                    }} />
                    <ChildMenu
                        data={data} />
                </div>
            </div>}
        </>
    )
}