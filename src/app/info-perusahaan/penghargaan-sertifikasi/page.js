'use client'
import Layout from "@/components/Layout/info-perusahaan"
import { CircleTab } from "@/components/common"
import { useState } from "react"

const DocumentItem = ({ }) => {
    const [hoveredItem, setHoveredItem] = useState(false)
    return (
        <div className="flex flex-col justify-center">
            <div className="relative flex justify-center items-center">
                <img className="w-full h-[16.563rem] rounded-lg hover:cursor-pointer" src={"/images/dummy_document.png"} onMouseEnter={() => {
                    setHoveredItem(true)
                }} />
                {hoveredItem && <>
                    <div className="w-full h-[16.563rem] rounded-lg opacity-60 z-9 absolute top-0 bg-overlay" onMouseLeave={() => {
                        setHoveredItem(false)
                    }} />
                    <div className="min-h-[2.125rem] max-h-[2.125rem] h-[2.125rem] w-text-caption py-[0.625rem] px-[0.875rem] absolute btn bg-white border-0 text-secondary z-10 capitalize" onMouseEnter={() => {
                        setHoveredItem(true)
                    }}>Lihat Gambar</div>
                </>}
            </div>
            <div className="mt-[0.625rem] w-text-subhead-1 text-jet text-center">ISO 9001 Sistem Manajemen Kualitas</div>
        </div>
    )
}
export default function Index() {
    const content = () => {
        return (
            <div className="flex flex-col w-full">
                <div className="flex flex-row w-full justify-between">
                    <div className="flex flex-row gap-x-[1.25rem]">
                        <CircleTab active text="Penghargaan" />
                        <CircleTab text="Sertifikasi" />
                    </div>
                    <div className="rounded-full bg-white border border-silver_spoon flex items-center px-[0.875rem] h-[2.75rem] gap-x-[0.875rem]">
                        <img src="/icons/ic_search_black.svg" />
                        <input
                            type="text"
                            placeholder="Cari"
                            className="w-text-body-2 placeholder-robo_master bg-transparent border-none focus:ring-0 outline-none flex-grow"
                        />
                    </div>
                </div>
                <div className="w-full border border-aria rounded-lg mt-[1.25rem] py-[1.25rem] px-[1.875rem] flex flex-col">
                    <div className="grid grid-cols-4 gap-x-[1.5rem] gap-y-[3.125rem]">
                        <DocumentItem />
                        <DocumentItem />
                        <DocumentItem />
                        <DocumentItem />
                        <DocumentItem />
                        <DocumentItem />
                        <DocumentItem />
                        <DocumentItem />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <Layout
            heading={"Info Perusahaan"}
            subHeading={"Penghargaan dan Sertifikasi"}
            activeSidebar={"Penghargaan & Sertifikasi"}
            sidebarContent={content()}
        />
    )
}