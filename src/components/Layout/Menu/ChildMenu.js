'use client'
import { ENGLISH, LANGUAGE } from "@/utils/constants"
import cn from "classnames"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react"
import useResponsive from "@/utils/media-query"

const ChildMenu = (props) => {
    const { isMobile } = useResponsive()
    const router = useRouter()
    const data = props.data
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

    const Menu = ({ index, item, onClick }) => {
        return (
            <div className="w-100 row-span-1 flex flex-col justify-center">
                <div tabIndex={index} className={cn(item.child && item.child.length > 0 ? "collapse-arrow" : "", "collapse group")}>
                    <span onClick={() => {
                        if (item.alias)
                            onClick(item)
                    }} className="cursor-pointer collapse-title min-h-fit p-0 w-text-body-2 text-sooty font-medium h-[2.5rem] flex items-center group-focus:text-orange hover:text-orange">
                        {language == ENGLISH ? item.menu_name_en : item.menu_name}
                    </span>
                    {item.child && item.child.length > 0 &&
                        <div tabIndex={index} className="collapse-content flex flex-col min-h-fit p-0 group-focus:p-0">
                            {
                                item.child.map((child, index) => {
                                    return (<div key={index} onClick={() => {
                                        if (child.alias) {
                                            var path = child.alias;
                                            var segments = path.split('/');
                                            var queryParam = segments.pop();

                                            var newPath = segments.join('/') + '?q=' + queryParam;
                                            router.push(newPath)
                                        }
                                    }} className="cursor-pointer w-text-body-2 text-sooty font-normal h-[2.5rem] flex items-center hover:text-orange">{language == ENGLISH ? child.menu_name_en : child.menu_name}</div>)
                                })
                            }
                        </div>
                    }
                </div>
                {!isMobile && <hr />}
            </div>
        )
    }

    console.log(data)
    return (
        <>
            {!isMobile &&
                <div onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} className="relative grid grid-cols-3 p-[2.5rem] gap-x-[6.25rem]">
                    {/* <img src="/images/bg_menu_1.svg" className="absolute bottom-0 left-0" />
                <img src="/images/bg_menu_2.svg" className="absolute bottom-0 left-0" /> */}
                    <div className="col-span-1 flex flex-col">
                        <div className="text-primary w-text-display-3">
                            Info Perusahaan
                        </div>
                        <div className="leading-[1.875rem] w-text-body-2 text-sooty mt-[1.5rem]">
                            Melalui perjalanan panjang sejarah yang telah diukir, senantiasa selalu berkomitmen untuk memberikan kontribusi terbaik
                        </div>
                    </div>
                    <div className={cn("col-span-2 gap-x-[2.5rem]", data.length > 4 ? "grid grid-cols-2" : "flex flex-col")}>
                        {
                            getMenu().map((menu, index) => {
                                return (
                                    <div key={index} className="flex flex-col w-full col-span-1">
                                        {
                                            menu.map((data, index) => {
                                                return (
                                                    <Menu key={index} item={data} index={index} onClick={(data) => {
                                                        if (!data.child)
                                                            router.push(data.alias)
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
                <div className="w-full flex flex-col">
                    {data.map((item, index) => {
                        return <Menu key={index} item={item} />
                    })}
                </div>
            }
        </>

    )
}

export default ChildMenu