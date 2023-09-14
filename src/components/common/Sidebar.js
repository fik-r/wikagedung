'use client'
import cn from "classnames"
import { LANGUAGE, ENGLISH } from '@/utils/constants';
import { useEffect, useState } from 'react'
import { usePathname, useRouter } from "next/navigation";

const Sidebar = ({ data }) => {
    const router = useRouter()
    const pathname = usePathname()
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

    function getLastPathname() {
        const segments = pathname.split('/');
        return segments[segments.length - 1].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }

    const SidebarItem = ({ active, number, text, onClick }) => {
        return (
            <div className="flex flex-row items-center cursor-pointer" onClick={() => { onClick() }}>
                <div className="ml-[1rem] text-silver_spoon w-text-caption">{number}</div>
                <div className={cn(active ? "underline text-sooty" : "", "ml-[0.875rem] hover:text-sooty w-text-title-1 text-more_than_a_week hover:underline")}>{text}</div>
            </div>
        )
    }

    return (
        <div className="flex-none flex flex-col gap-y-[0.625rem] border-l-4 border-l-secondary h-fit w-[19em]">
            {data.map((item, index) => {
                return (
                    <SidebarItem key={index}
                        active={item.menu_name.replace(/[^a-zA-Z ]/g, '').replace(/\s+/g, ' ').trim().toLowerCase() == getLastPathname().toLowerCase()}
                        number={index > 8 ? index + 1 : `0${index + 1}`}
                        text={language == ENGLISH ? item.menu_name_en : item.menu_name}
                        onClick={() => {
                            if (item.alias)
                                router.push(item.alias)
                            else {
                                var path = item.child[0].alias;
                                var segments = path.split('/');
                                var queryParam = segments.pop();

                                var newPath = segments.join('/') + '?q=' + queryParam;
                                router.push(newPath)
                            }
                        }} />
                )
            })}
        </div>
    )
}

export default Sidebar