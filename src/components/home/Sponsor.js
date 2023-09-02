import cn from "classnames"
import { useState, useEffect } from "react"
import { LANGUAGE, ENGLISH } from "@/utils/constants"

const Sponsor = ({ data, dataHomepage }) => {

    const [language, setLanguage] = useState("")
    const [isExpand, setIsExpand] = useState(false)

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

    const numItemsToShow = isExpand ? data.length : 6;

    return (
        <div className="flex flex-col mt-[3.75rem] px-[4.75rem] gap-y-[1.875rem]">
            {
                <div className="flex flex-col mx-[4.75rem]">
                    <div className="self-center w-text-headline-1 font-bold text-sooty">{language == ENGLISH ? dataHomepage.member_title_en : dataHomepage.member_title}</div>
                    <div className="flex flex-row flex-wrap self-center mt-[0.875rem] gap-x-[0.875rem] justify-center">
                        {
                            data.slice(0, numItemsToShow).map((sponsor, index) => {
                                return (
                                    <img key={index} src={process.env.NEXT_PUBLIC_BASE_URL + sponsor.image_url} alt={sponsor.image_name} className={cn("w-[13.75rem] fade-in h-[6.125rem] hover:cursor-pointer")} onClick={() => {
                                        window.open(sponsor.link, "_blank")
                                    }} />
                                )
                            })
                        }
                    </div>
                </div>
            }
            {data.length > 6 &&
                <div className="btn btn-outline btn-warning mt-[1.5rem] w-[10.75rem] px-0 capitalize self-center" onClick={() => {
                    setIsExpand(!isExpand)
                }}>{isExpand ? language == ENGLISH ? "See Less" : "Lihat Lebih Sedikit" : language == ENGLISH ? "See More" : "Lihat Selengkapnya"}</div>}
        </div>
    )
}

export default Sponsor