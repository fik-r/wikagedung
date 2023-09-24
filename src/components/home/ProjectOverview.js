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
            <div className={cn("flex", isMobile ? "flex-row gap-x-[1rem] items-center" : "flex-row gap-x-[2.25rem]")}>
                <div className="min-w-[3.75rem] min-h-[4.094rem] max-w-[3.75rem] max-h-[4.094rem] relative">
                    <Image src={url} fill
                        quality={50} placeholder="blur"
                        blurDataURL={url}
                    />
                </div>
                <div className="flex flex-col">
                    <div className={cn("text-neutral font-semibold", isMobile ? "w-text-body-1" : "w-text-subhead-1")}>{title}</div>
                    <div className={cn("w-text-display-2 text-neutral", isMobile ? "w-text-headline-1 mt-[0.375]" : "w-text-display-2")}>{desc}</div>
                </div>
            </div >
        )
    }
    return (
        <>
            <div className={cn("flex flex-col z-10", isMobile ? "px-[1rem] py-[2rem]" : "px-[2.5rem] pt-[2.5rem] pb-[3.75rem]")}>
                <img src="/images/bg_project_overview.svg" className={cn("absolute bottom-0 right-0 z-[-1]", isMobile ? "h-[9.5rem]" : "h-full")} />
                <div className={cn("text-neutral text-center", isMobile ? "w-text-body-2 font-semibold mb-[1.5rem]" : "w-text-headline-1 mb-[2.5rem]")}>Project Overview</div>
                <div className={cn("flex justify-between", isMobile ? "flex-col gap-y-[1.5rem]" : "flex-row")}>
                    <ProjectOverviewItem url="/icons/ic_building_project.svg" title={language == ENGLISH ? data[0].project_ovw_text_en : data[0].project_ovw_text} desc={language == ENGLISH ? data[0].project_ovw_value_en : data[0].project_ovw_value} />
                    <ProjectOverviewItem url="/icons/ic_toll.svg" title={language == ENGLISH ? data[1].project_ovw_text_en : data[1].project_ovw_text} desc={language == ENGLISH ? data[1].project_ovw_value_en : data[1].project_ovw_value} />
                    <ProjectOverviewItem url="/icons/ic_revenue.svg" title={language == ENGLISH ? data[2].project_ovw_text_en : data[2].project_ovw_text} desc={language == ENGLISH ? data[2].project_ovw_value_en : data[2].project_ovw_value} />
                </div>
            </div >

        </>
    )
}

export default ProjectOverview