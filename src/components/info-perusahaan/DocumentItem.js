'use client'
import Image from "next/image"
import { useState } from "react"
import useResponsive from "@/utils/media-query"
import cn from "classnames"
const DocumentItem = ({ title, image, onLihatGambar }) => {
    const { isMobile } = useResponsive();
    const [hoveredItem, setHoveredItem] = useState(false)
    return (
        <div className="flex flex-col">
            <div className="relative flex justify-center items-center">
                <div className={cn("w-full rounded-lg hover:cursor-pointer relative", isMobile ? "min-h-[9.75rem] max-h-[9.75rem]" : "min-h-[16.563rem] max-h-[16.563rem]")}>
                    <Image
                        quality={50} placeholder="blur"
                        blurDataURL={image}
                        style={{ objectFit: "cover" }}
                        alt="document_img"
                        className="rounded-lg" src={image} fill onMouseEnter={() => {
                            setHoveredItem(true)
                        }} />
                </div>
                {hoveredItem && <>
                    <div className="w-full h-[16.563rem] rounded-lg opacity-60 z-9 absolute top-0 bg-overlay" onMouseLeave={() => {
                        setHoveredItem(false)
                    }} />
                    <div className="min-h-[2.125rem] max-h-[2.125rem] h-[2.125rem] w-text-caption py-[0.625rem] px-[0.875rem] absolute btn bg-white border-0 text-secondary z-10 capitalize" onMouseEnter={() => {
                        setHoveredItem(true)
                    }} onClick={() => {
                        onLihatGambar()
                    }}>Lihat Gambar</div>
                </>}
            </div>
            <div className="mt-[0.625rem] w-text-subhead-1 text-jet text-center">{title}</div>
        </div>
    )
}

export default DocumentItem