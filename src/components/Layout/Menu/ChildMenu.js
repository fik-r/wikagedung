'use client'
import { ENGLISH, LANGUAGE } from "@/utils/constants"
import cn from "classnames"
import { useEffect, useState } from "react"
import useResponsive from "@/utils/media-query"
import Link from "next/link"

const ChildMenu = (props) => {
    const { isMobile } = useResponsive()
    const data = props.data
    const title = props.title
    const description = props.description
    const [language, setLanguage] = useState("")
    const [isExpand, setIsExpand] = useState(
        getMenu().length == 2 ? [Array(getMenu()[0].length).fill(false), Array(getMenu()[1].length).fill(false)]
            : [Array(getMenu()[0].length).fill(false)]
    )
    const [isExpandMobile, setIsExpandMobile] = useState([Array(data.length).fill(false)])

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

    function getMenu() {
        if (data.length > 4) {
            const middleIndex = Math.floor(data.length / 2);

            let array1 = data.slice(0, middleIndex + (data.length % 2));
            let array2 = data.slice(middleIndex + (data.length % 2));
            return [array1, array2]
        }
        else {
            return [data]
        }
    }

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

    const Menu = ({ index, item, expand, onExpand }) => {
        const isExpand = expand[index]
        return (
            <div className={cn("w-100 row-span-1 flex flex-col justify-center")}>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between items-center">
                        {!item.child &&
                            <Link href={item.alias} className="z-[3] cursor-pointer min-h-fit p-0 w-text-body-2 text-sooty font-medium h-[2.5rem] flex items-center group-focus:text-orange hover:text-orange">
                                {language == ENGLISH ? item.menu_name_en : item.menu_name}
                            </Link>
                        }
                        {item.child && item.child.length > 0 &&
                            <>
                                <span onClick={() => {
                                    onExpand()
                                }} className={cn("z-[3] cursor-pointer min-h-fit p-0 w-text-body-2 font-medium h-[2.5rem] flex items-center hover:text-orange", isExpand ? "text-orange" : "text-sooty")}>
                                    {language == ENGLISH ? item.menu_name_en : item.menu_name}
                                </span>
                                <img src="/icons/ic_dropdown_black.svg" className={cn("transform transition-transform duration-300 w-[0.9rem] h-[0.463rem]", isExpand ? "rotate-180" : "")} />
                            </>
                        }
                    </div>
                    {isExpand && item.child && item.child.length > 0 &&
                        <>
                            <div className="flex flex-col min-h-fit p-0">
                                {
                                    item.child.map((child, index) => {
                                        return (
                                            <>
                                                <Link href={getHrefForChildMenu(child)} className={cn("cursor-pointer text-sooty font-normal h-[2.5rem] flex items-center hover:text-orange", isMobile ? "w-text-body-1" : "w-text-body-2")}>{language == ENGLISH ? child.menu_name_en : child.menu_name}</Link>
                                                {isMobile && <hr />}
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </>
                    }
                </div>
                {!isMobile && <hr />}
            </div>
        )
    }

    return (
        <>
            {!isMobile &&
                <div onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} className="relative grid grid-cols-3 p-[2.5rem] gap-x-[6.25rem]">
                    <div className="col-span-1 flex flex-col">
                        <div className="text-primary w-text-display-3">
                            {title}
                        </div>
                        <div className="leading-[1.875rem] w-text-body-2 text-sooty mt-[1.5rem]">
                            {description}
                        </div>
                    </div>
                    <div className={cn("col-span-2 gap-x-[2.5rem]", data.length > 4 ? "grid grid-cols-2" : "flex flex-col")}>
                        {
                            getMenu().map((menu, indexParent) => {
                                return (
                                    <div key={indexParent} className="flex flex-col w-full col-span-1">
                                        {
                                            menu.map((data, index) => {
                                                return (
                                                    <Menu key={index} item={data} index={index} expand={isExpand[indexParent]} onExpand={() => {
                                                        const updatedExpandMenus = isExpand.map((parentArray, parentIndex) =>
                                                            parentArray.map((item, itemIndex) =>
                                                                parentIndex === indexParent && itemIndex === index
                                                                    ? !item
                                                                    : false
                                                            )
                                                        );
                                                        setIsExpand(updatedExpandMenus)
                                                    }} />
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
            {isMobile &&
                <div className="w-full flex flex-col gap-y-[1.5rem]">
                    {data.map((item, index) => {
                        return <Menu key={index} item={item} index={index} expand={isExpandMobile[0]} onExpand={() => {
                            const updatedExpandMenus = isExpandMobile.map((parentArray, parentIndex) =>
                                parentArray.map((item, itemIndex) =>
                                    parentIndex === 0 && itemIndex === index
                                        ? !item
                                        : false
                                )
                            );
                            setIsExpandMobile(updatedExpandMenus)
                        }} />
                    })}
                </div>
            }
        </>

    )
}

export default ChildMenu