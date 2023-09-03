'use client'
import { LANGUAGE, ENGLISH, INDONESIA } from "@/utils/constants"
import { useEffect, useState } from "react"
import useResponsive from "@/utils/media-query"

const CompanyProfile = ({ data }) => {
    const { isMobile } = useResponsive()
    const [language, setLanguage] = useState("")
    const [index, setIndex] = useState(0)
    const totalData = data.length;
    const handleIndexChange = newIndex => {
        if (newIndex < 0) {
            setIndex(totalData - 1); // Reset to last item if going back from the first
        } else if (newIndex >= totalData) {
            setIndex(0); // Reset to first item if going forward from the last
        } else {
            setIndex(newIndex);
        }
    };

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
        <> {!isMobile &&
            <div className="relative">
                <img className="rounded-lg absolute left-0 top-6 bottom-0 z-[3] h-[25.438rem] ml-[8.75rem] w-[17.813rem]" src={process.env.NEXT_PUBLIC_BASE_URL + data[index].image_url} alt={data[index].image_name} />
                <div className="relative bg-primary w-100 mt-[3.75rem] py-[2.125rem] h-[20.938rem]">
                    <div className="relative flex flex-col z-[2] ml-[30.375rem]">
                        <div className="w-text-title-1 text-white h-[1.5rem]">{data[index].year}</div>
                        <div className="w-text-display-3 text-white h-[1.688rem] mt-[-5px]">{language == ENGLISH ? data[index].title_en : data[index].title}</div>
                        <div className="w-text-subhead-1 text-white mt-[2rem]">{language == ENGLISH ? data[index].description_en : data[index].description}</div>
                        <div className="btn btn-warning px-0 capitalize text-white w-text-button w-[12.5rem] mt-[1rem]" onClick={() => {
                            window.open(data[index].link, "_blank")
                        }}>{language == ENGLISH ? "See More" : "Lihat Selengkapnya"}</div>
                        <div className="flex flex-row gap-x-[1.25rem] mt-[2rem]">
                            <img className="hover:cursor-pointer" src="/icons/ic_circle_left.svg" onClick={() => {
                                handleIndexChange(index - 1)
                            }} />
                            <img className="hover:cursor-pointer" src="/icons/ic_circle_right.svg" onClick={() => {
                                handleIndexChange(index + 1)
                            }} />
                        </div>
                    </div>
                    <img src="/images/bg_slider_home.svg" className="absolute top-0 left-0 z-[1]" />
                </div>
            </div>
        }
        </>
    )
}

export default CompanyProfile