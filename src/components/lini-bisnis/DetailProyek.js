import { LANGUAGE, ENGLISH } from "@/utils/constants"
import { useState, useEffect } from "react"
import cn from "classnames"

const DetailProyek = ({ data, index }) => {
    const [language, setLanguage] = useState("")
    const [activeIndex, setActiveIndex] = useState(index)
    const ProjectItem = ({ title, description }) => {
        return (
            <div className="flex flex-col">
                <div className="w-text-title-1 text-sooty">{title}</div>
                <div className="w-text-body-2 font-medium text-hard_coal mt-[0.75rem]">{description}</div>
            </div>
        )
    }

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
    return (
        <div className="flex flex-col w-full px-[6.25rem]">
            <div className="flex flex-row justify-between my-[2.5rem]">
                <div className="flex flex-col">
                    <div className="w-text-subhead-2 text-black_oaf font-medium">Konstruksi</div>
                    <div className="w-text-display-2 text-sooty mt-[0.625rem]">Puncak CBD (Central Building District)</div>
                </div>
                <div className="flex flex-row">
                    <img src={activeIndex == 0 ? "/icons/ic_circle_left_disabled.svg" : "/icons/ic_circle_right_black.svg"} className={cn("cursor-pointer w-[2.5rem] h-[2.5rem]", activeIndex == 0 ? "" : "rotate-180")}
                        onClick={() => {
                            if (activeIndex != 0)
                                setActiveIndex(activeIndex - 1)
                        }} />
                    <img src={activeIndex == data.length - 1 ? "/icons/ic_circle_left_disabled.svg" : "/icons/ic_circle_right_black.svg"} className={cn("cursor-pointer ml-[1.25rem] w-[2.5rem] h-[2.5rem]", activeIndex == data.length - 1 ? "rotate-180" : "")}
                        onClick={() => {
                            if (activeIndex != data.length - 1)
                                setActiveIndex(activeIndex + 1)
                        }}
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-x-[2.5rem]">
                <div className="flex flex-col">
                    <div className="text-sooty w-text-title-1 font-bold">Informasi Proyek</div>
                    <div className="w-text-body-2 text-jet mt-[1.5rem]">Berlokasi di daerah Wiyung, Surabaya, proyek apartemen ini merupakan proyek rancang bangun (design & build) yang diperkirakan akan menghabiskan waktu pengerjaan selama 960 hari. Puncak CBD Wiyung adalah proyek dari PT Surya Bumimegah Sejahtera terdiri dari 3 tower, area komersial sebanyak 268 unit ruko, dan total luas area 25.000 meter persegi.</div>
                </div>
                <div className="flex flex-col bg-lynx_white p-[1.5rem] gap-y-[1.5rem] rounded-lg">
                    <ProjectItem title="Project Owner" description="WIKA TIRTA JAYA JATILUHUR" />
                    <ProjectItem title="Project Category" description="Sistem Penyediaan Air Minum" />
                    <ProjectItem title="Project Target" description="2022 - 2023" />
                </div>
            </div>

            <div className="flex flex-col mt-[1.875rem] overflow-x-auto mb-[0.625rem]">
                <div className="w-text-title-1 text-sooty font-bold">Galery Proyek</div>
                <div className="flex flex-row gap-x-[1.5rem] mt-[1.5rem]">
                    <img src="/images/ic_dummy_apartemen.png" className="hover:cursor-pointer  rounded-lg min-w-[15.5rem] max-w-[27rem] h-[16.25rem]" />
                    <img src="/images/ic_dummy_apartemen.png" className="hover:cursor-pointer  rounded-lg min-w-[15.5rem] max-w-[27rem] h-[16.25rem]" />
                    <img src="/images/ic_dummy_apartemen.png" className="hover:cursor-pointer  rounded-lg min-w-[15.5rem] max-w-[27rem] h-[16.25rem]" />
                    <img src="/images/ic_dummy_apartemen.png" className="hover:cursor-pointer  rounded-lg min-w-[15.5rem] max-w-[27rem] h-[16.25rem]" />
                    <img src="/images/ic_dummy_apartemen.png" className="hover:cursor-pointer  rounded-lg min-w-[15.5rem] max-w-[27rem] h-[16.25rem]" />
                    <img src="/images/ic_dummy_apartemen.png" className="hover:cursor-pointer  rounded-lg min-w-[15.5rem] max-w-[27rem] h-[16.25rem]" />
                    <img src="/images/ic_dummy_apartemen.png" className="hover:cursor-pointer  rounded-lg min-w-[15.5rem] max-w-[27rem] h-[16.25rem]" />
                    <img src="/images/ic_dummy_apartemen.png" className="hover:cursor-pointer  rounded-lg min-w-[15.5rem] max-w-[27rem] h-[16.25rem]" />
                </div>
            </div>
        </div>
    )
}

export default DetailProyek