'use client'
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

export default DocumentItem