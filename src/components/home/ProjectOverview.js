'use client'
import { useState, useEffect } from "react"
import { LANGUAGE, ENGLISH } from "@/utils/constants"
import useResponsive from "@/utils/media-query"
import cn from "classnames"
import Image from "next/image"

const ProjectOverview = ({ data }) => {
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

    const ProjectOverviewItem = ({ url, title, desc }) => {
        return (
            <div className={cn("flex", isMobile ? "flex-col" : "flex-row gap-x-[2.25rem]")}>
                <div className="min-w-[3.75rem] min-h-[4.094rem] max-w-[3.75rem] max-h-[4.094rem] relative">
                    <Image src={url} fill />
                </div>
                <div className="flex flex-col">
                    <div className={cn("text-neutral font-semibold", isMobile ? "w-text-caption mt-[0.875rem]" : "w-text-subhead-1")}>{title}</div>
                    <div className={cn("w-text-display-2 text-neutral", isMobile ? "w-text-body-1 mt-[0.875rem]" : "w-text-display-2")}>{desc}</div>
                </div>
            </div >
        )
    }
    return (
        <>
            {!isMobile && <div className={cn("flex flex-col z-10", isMobile ? "px-[0.875rem] py-[1.5rem]" : "px-[2.5rem] pt-[2.5rem] pb-[3.75rem]")}>
                <div className={cn("text-neutral text-center", isMobile ? "w-text-body-2 font-semibold mb-[1.5rem]" : "w-text-headline-1 mb-[2.5rem]")}>Project Overview</div>
                <div className="flex flex-row justify-between">
                    <ProjectOverviewItem url="/icons/ic_building_project.svg" title={language == ENGLISH ? data[0].project_ovw_text_en : data[0].project_ovw_text} desc={language == ENGLISH ? data[0].project_ovw_value_en : data[0].project_ovw_value} />
                    <ProjectOverviewItem url="/icons/ic_toll.svg" title={language == ENGLISH ? data[1].project_ovw_text_en : data[1].project_ovw_text} desc={language == ENGLISH ? data[1].project_ovw_value_en : data[1].project_ovw_value} />
                    <ProjectOverviewItem url="/icons/ic_revenue.svg" title={language == ENGLISH ? data[2].project_ovw_text_en : data[2].project_ovw_text} desc={language == ENGLISH ? data[2].project_ovw_value_en : data[2].project_ovw_value} />
                </div>
            </div >
                // {!isMobile && <img className="absolute full right-0 h-[15.5rem]" src="/images/bg_project_overview.svg" />}
            }


        </>
    )
}

export default ProjectOverview