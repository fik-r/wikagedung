'use client'

import { ENGLISH, LANGUAGE } from "@/utils/constants"
import { useEffect, useState } from "react"
import cn from "classnames"
import Link from "next/link"
import useResponsive from "@/utils/media-query"
const Sitemap = ({ menu }) => {
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

    function parseMenu() {
        let chunkSize = 3;
        let dividedMenu = [];

        for (let i = 0; i < menu.length; i += chunkSize) {
            let chunk = menu.slice(i, i + chunkSize);
            dividedMenu.push(chunk);
        }
        return dividedMenu
    }

    const parsedMenu = parseMenu()

    function getHrefForChildMenu(child) {
        var href = ""
        var alias = child.alias
        if (alias.includes("pctk")) {
            alias = child.alias.replace("pctk", "konstruksi-off-site-pracetak-gedung")
        }
        if (alias.includes("mdlr")) {
            alias = child.alias.replace("mdlr", "konstruksi-off-site-modular")
        }
        if (alias.includes("knsi")) {
            alias = child.alias.replace("knsi", "investasi-konsesi")
        }
        if (alias.includes("knst")) {
            alias = child.alias.replace("knst", "konstruksi")
        }
        if (alias && !isMobile) {
            var path = alias;
            var segments = path.split('/');
            if (segments.length > 2 && (!alias.includes("media") && !alias.includes("press-kit"))) {
                var queryParam = segments.pop();

                var newPath = segments.join('/') + '?q=' + queryParam;
                href = newPath
            } else {
                href = path
            }
        }

        if (isMobile) {
            if (alias || (alias.includes("media") && alias.includes("press-kit"))) {
                href = alias
            } else {
                var path = child.child[0].alias;
                var segments = path.split('/');
                var queryParam = segments.pop();

                var newPath = segments.join('/') + '?q=' + queryParam;
                href = newPath
            }
        }
        return href
    }

    return (
        <div className={cn("w-full", isMobile ? "px-[1rem] py-[2.5rem]" : "px-[6.25rem]")}>

            <div className={cn(isMobile ? "w-text-title-1 text-sooty font-bold" : "py-[2.5rem] w-text-display-4 text-sooty")}>Sitemap</div>
            <div className={cn("flex flex-col", isMobile ? "" : "gap-y-[2.5rem]")}>
                {
                    parsedMenu.map((item, key) => {
                        return (
                            <div key={key} className={cn(isMobile ? "w-full flex flex-col" : "w-full grid grid-cols-3")}>
                                {
                                    item.map((menu, key) => {
                                        return (
                                            <div key={key} className="flex flex-col">
                                                {menu.child && <div className={cn("text-sooty capitalize font-bold mb-[1rem]", isMobile ? "w-text-subhead-1 mt-[1.5rem]" : "w-text-headline-1")}>{language == ENGLISH ? menu.menu_name_en.toLowerCase() : menu.menu_name.toLowerCase()}</div>}
                                                {!menu.child && <Link href={menu.alias} className={cn("text-sooty capitalize font-bold mb-[1rem] cursor-pointer hover:text-primary", isMobile ? "w-text-subhead-1 mt-[1.5rem]" : "w-text-headline-1")}>{language == ENGLISH ? menu.menu_name_en.toLowerCase() : menu.menu_name.toLowerCase()}</Link>}
                                                <hr className="mb-[0.75rem]" />
                                                {
                                                    menu.child && menu.child.map((child, key) => {
                                                        return (
                                                            <div key={key} className="flex flex-col">
                                                                {child.child && <div className={cn("text-sooty py-[0.625rem]", isMobile ? "w-text-body-1 font-medium" : "w-text-subhead-1")}>{language == ENGLISH ? child.menu_name_en : child.menu_name}</div>}
                                                                {!child.child && <Link href={getHrefForChildMenu(child)} className={cn("text-sooty py-[0.625rem] cursor-pointer hover:text-primary", isMobile ? "w-text-body-1 font-medium" : "w-text-subhead-1")}>{language == ENGLISH ? child.menu_name_en : child.menu_name}</Link>}
                                                                <div className="flex flex-col">
                                                                    {
                                                                        child.child && child.child.map((child, key) => {
                                                                            return (
                                                                                <Link key={key} href={getHrefForChildMenu(child)} className={cn("text-sooty py-[0.625rem] cursor-pointer hover:text-primary", isMobile ? "w-text-body-1" : "w-text-body-2")}>{child.menu_name}</Link>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Sitemap