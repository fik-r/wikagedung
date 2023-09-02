'use client'
import { useState, useEffect } from "react"
import { LANGUAGE, ENGLISH } from "@/utils/constants"
const ProjectOverview = ({data}) => {
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
            <div className="flex flex-row gap-x-[2.25rem]">
                <img src={url} className="w-[3.75rem] h-[4.094rem]" />
                <div className="flex flex-col">
                    <div className="w-text-subhead-1 text-neutral font-semibold">{title}</div>
                    <div className="w-text-display-2 text-neutral">{desc}</div>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="flex flex-col px-[2.5rem] pt-[2.5rem] pb-[3.75rem] z-10">
                <div className="text-neutral w-text-headline-1 mb-[2.5rem] text-center">Project Overview</div>
                <div className="flex flex-row justify-between">
                    <ProjectOverviewItem url="/icons/ic_building_project.svg" title={language == ENGLISH ? data[0].project_ovw_text_en : data[0].project_ovw_text } desc={language == ENGLISH ? data[0].project_ovw_value_en : data[0].project_ovw_value } />
                    <ProjectOverviewItem url="/icons/ic_toll.svg" title={language == ENGLISH ? data[1].project_ovw_text_en : data[1].project_ovw_text } desc={language == ENGLISH ? data[1].project_ovw_value_en : data[1].project_ovw_value }  />
                    <ProjectOverviewItem url="/icons/ic_revenue.svg" title={language == ENGLISH ? data[2].project_ovw_text_en : data[2].project_ovw_text } desc={language == ENGLISH ? data[2].project_ovw_value_en : data[2].project_ovw_value }  />
                </div>
            </div>
            <img className="absolute full right-0 h-[15.5rem]" src="/images/bg_project_overview.svg" />
        </>
    )
}

export default ProjectOverview