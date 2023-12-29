'use client'
import { Layout, Container } from "@/components/Layout"
import { LANGUAGE, ENGLISH } from '@/utils/constants';
import { Sidebar } from "@/components/info-perusahaan"
import { useState, useEffect } from 'react'
import cn from "classnames"
import useResponsive from "@/utils/media-query"

export default function Index({ showSidebar = true, name, sidebarContent, content, isOnDetailPage, dataMenuHeader, dataHomepage, dataContact, dataContent }) {

    const { isMobile } = useResponsive();
    const [language, setLanguage] = useState("")
    const [readMore, setReadMore] = useState(false)
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


    function findMenuAndParentByName(menuArray, name, parentMenu = null) {

        for (const menu of menuArray) {
            if ((menu.menu_name && menu.menu_name.replace(/[^a-zA-Z ]/g, '').replace(/\s+/g, ' ').trim().toLowerCase() == name.toLowerCase()) ||
                menu.menu_name_en && menu.menu_name_en.replace(/[^a-zA-Z ]/g, '').replace(/\s+/g, ' ').trim().toLowerCase() == name.toLowerCase()
            ) {
                return { child: menu, parent: parentMenu };
            }

            if (menu.child) {
                const result = findMenuAndParentByName(menu.child, name, menu);
                if (result) {
                    return result;
                }
            }
        }

        return null;
    }


    const getMenu = findMenuAndParentByName(dataMenuHeader, name, null)

    return (
        <Layout showBreadcrumb={true} isOnDetailPage={isOnDetailPage} dataMenuHeader={dataMenuHeader} dataHomepage={dataHomepage} dataContact={dataContact}>
            {!isMobile &&
                <div className="w-full">
                    {/* header, should change with dynamic data */}
                    {getMenu && <><div className="px-[6.25rem] relative flex flex-col">
                        <div className="w-text-subhead-2 text-secondary font-semibold mt-[2.5rem]">{getMenu && language == ENGLISH ? getMenu.parent.menu_name_en : getMenu.parent.menu_name}</div>
                        <div className="w-text-display-4 text-sooty font-semibold mt-[0.625rem] pb-[2.5rem]">{getMenu && language == ENGLISH ? getMenu.child.menu_name_en : getMenu.child.menu_name}</div>
                    </div></>}
                    {/* sidebar */}
                    {showSidebar &&
                        <div className="px-[6.25rem] relative flex flex-row mt-[3.125rem] gap-x-[3.75rem] pb-[3.125rem]">
                            {/* sidebar */}
                            <Sidebar data={getMenu.parent.child} />
                            {/* sidebar content text */}
                            {!sidebarContent && <div className="flex-auto flex flex-col">
                                {getMenu && getMenu.child.child && <div className="inline-block text-jet w-text-title-1 font-bold mb-[0.75rem]">{getMenu && language == ENGLISH ? getMenu.child.child[0].menu_name_en : getMenu.child.child[0].menu_name}</div>}
                                {dataContent && dataContent.content_prakata && <div className={cn("text-jet w-text-title-1 leading-10 font-medium", readMore ? "" : "line-clamp-5")}                        >
                                    {language == ENGLISH ? dataContent.content_prakata_en : dataContent.content_prakata}
                                </div>}
                                {dataContent && !dataContent.content_prakata && <div className={cn("text-jet w-text-title-1 leading-10 font-medium", readMore ? "" : "line-clamp-5")}
                                    dangerouslySetInnerHTML={{ __html: language == ENGLISH ? dataContent.content_data_en : dataContent.content_data }}
                                ></div>}
                                <div className="mt-[1rem] cursor-pointer  flex flex-row items-center">
                                    <span className="w-text-title-1 mr-[2.063rem] text-primary font-semibold" onClick={() => {
                                        setReadMore(!readMore)
                                    }}>{!readMore ? (language == ENGLISH ? "Read more" : "Lanjutkan membaca") : (language == ENGLISH ? "Read less" : "Tutup")} </span>
                                    <img src="/icons/ic_dropdown.svg" className={cn("w-[0.563rem] h-[0.938rem] transform transition-transform duration-300", readMore ? "rotate-180" : "")} /></div>
                            </div>}
                            {sidebarContent}
                        </div>
                    }
                </div>}
            {isMobile &&
                <div className="flex flex-col">
                    {getMenu && <div className="w-text-body-2 text-sooty font-semibold mt-[2.5rem] mx-[1rem] mb-[1rem]">{getMenu && language == ENGLISH ? getMenu.child.menu_name_en : getMenu.child.menu_name}</div>}
                    {showSidebar && !sidebarContent &&
                        <>
                            {dataContent && dataContent.content_prakata && <div className={cn("text-jet w-text-body-1 mx-[1rem]", readMore ? "" : "line-clamp-3")}                        >
                                {language == ENGLISH ? dataContent.content_prakata_en : dataContent.content_prakata}
                            </div>}
                            {dataContent && !dataContent.content_prakata && <div className={cn("text-jet w-text-body-1 mx-[1rem]", readMore ? "" : "line-clamp-3")}
                                dangerouslySetInnerHTML={{ __html: language == ENGLISH ? dataContent.content_data_en : dataContent.content_data }}
                            ></div>}
                            <div className="mt-[0.5rem] cursor-pointer  flex flex-row items-center mx-[1rem]">
                                <span className="w-text-caption mr-[2.063rem] text-primary font-semibold" onClick={() => {
                                    setReadMore(!readMore)
                                }}>{!readMore ? (language == ENGLISH ? "Read more" : "Lanjutkan membaca") : (language == ENGLISH ? "Read less" : "Tutup")} </span>
                                <img src="/icons/ic_dropdown.svg" className={cn("w-[0.563rem] h-[0.938rem] transform transition-transform duration-300", readMore ? "rotate-180" : "")} />
                            </div>
                        </>
                    }
                    {sidebarContent}
                </div>
            }
            {/* Content in bottom sidebar */}
            {content}
        </Layout>
    )
}