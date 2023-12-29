'use client'

import { ENGLISH, LANGUAGE } from "@/utils/constants"
import { useEffect, useState } from "react"
import { getSearch } from "@/api/wege-service"
import cn from "classnames"
import Link from "next/link"
import useResponsive from "@/utils/media-query"
const Search = ({ menu }) => {
    const { isMobile } = useResponsive()
    const [language, setLanguage] = useState("")
    const [data, setData] = useState([])
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

    function fetchSearch(value) {
        getSearch(value, language == ENGLISH ? "en" : "id")
            .then((response) => {

                setData(response.data)
            })
            .catch((error) => {
                // setError(error);
            })
            .finally(() => {
                // setLoading(false);
            });
    }
    return (
        <div className={cn(isMobile ? "min-h-[100vw] w-full px-[1rem] py-[2rem]" : "w-full px-[6.25rem] py-[3rem]")}>
            <div className="flex w-full">
                <div className="rounded-full bg-white border border-silver_spoon flex items-center px-[0.875rem] h-[2.75rem] gap-x-[0.875rem]">
                    <img src="/icons/ic_search_black.svg" />
                    <input
                        type="text"
                        placeholder={language == ENGLISH ? "Search" : "Cari"}
                        className="w-text-body-2 placeholder-robo_master bg-transparent border-none focus:ring-0 outline-none flex-grow"
                        onChange={(e) => {
                            const value = e.target.value
                            fetchSearch(value)
                        }}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-y-[0.5rem] pt-[1rem]">
                {data && data.length > 0 && data[0].news.map((item, index) => {
                    return (
                        <Link className="underline text-primary" key={index} href={`/news/${item.alias}`}>{item.title}</Link>
                    )
                })
                }
                {data && data.length > 0 && data[0].menu.map((item, index) => {
                    return (
                        <Link className="underline text-primary" key={index} href={`/${item.alias}`}>{item.title}</Link>
                    )
                })
                }
            </div>

        </div>
    )
}
export default Search