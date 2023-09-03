

import { useState } from "react"
import cn from "classnames"
import { useRouter } from "next/navigation"
import useResponsive from "@/utils/media-query"

const SidebarMenu = () => {
    const { isMobile } = useResponsive()
    const router = useRouter()
    const [expandMenu, setExpandMenu] = useState(false)

    return (
        <>
            {
                !isMobile &&
                <div className={cn("flex flex-col bg-dark_blue rounded-tl-lg rounded-bl-lg fixed top-0 mt-[18.75rem] right-0 z-[999] p-4", expandMenu ? "w-[14.813rem]" : "")}>
                    <div className="flex flex-row items-center hover:cursor-pointer zoom" onClick={() => {
                        setExpandMenu(true)
                    }}>
                        <img src="/icons/ic_newspaper.svg" className="w-8 h-8 my-2 " />
                        {expandMenu && <div className="ml-[0.75rem] text-white w-text-title-1">Company Update</div>}

                    </div>
                    <hr className="my-2" />
                    <div className="flex flex-row items-center hover:cursor-pointer zoom" onClick={() => {
                        setExpandMenu(true)
                    }}>
                        <img src="/icons/ic_focus-target.svg" className="w-8 h-8 my-2 " />
                        {expandMenu && <div className="ml-[0.75rem] text-white w-text-title-1">Highlight Project</div>}

                    </div>
                    <hr className="my-2" />
                    <div className="flex flex-row items-center hover:cursor-pointer zoom" onClick={() => {
                        setExpandMenu(true)
                    }}>
                        <img src="/icons/ic_building.svg" className="w-8 h-8 my-2" />
                        {expandMenu && <div className="ml-[0.75rem] text-white w-text-title-1">Company Profile</div>}

                    </div>
                    {expandMenu &&
                        <>
                            <hr className="my-2" />
                            <div className="flex flex-row items-center justify-end hover:cursor-pointer zoom" onClick={() => {
                                setExpandMenu(false)
                            }}>
                                <img src="/icons/ic_close_circle.svg" className="w-[1rem] h-[1rem] my-[2]" />
                                <div className="ml-[0.75rem] w-text-body-2 text-white">Close</div>
                            </div>
                        </>
                    }
                </div>
            }
        </>
    )
}

export default SidebarMenu