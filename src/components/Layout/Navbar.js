import { useState, useEffect } from "react";
import cn from "classnames";
import { InfoPerusahaan } from "./Menu";
import { useRouter } from 'next/navigation'

export default function Navbar(props) {
    const router = useRouter()
    const [isSticky, setIsSticky] = useState(false)
    const [expandMenu, setExpandMenu] = useState("")
    const [theme, setTheme] = useState(props.theme)
    useEffect(() => {
        window.addEventListener('scroll', stickyListener)
        return () => {
            window.removeEventListener('scroll', stickyListener)
        }

    })

    const stickyListener = (e) => {
        const scrollTop = window.scrollY;
        if (scrollTop >= 200) {
            setIsSticky(true)
            setTheme("light")
        } else if (expandMenu == "") {
            setIsSticky(false)
            setTheme(props.theme)
        }
    };

    const navbarItems = [{
        title: "Info Perusahaan",
        route: "",

    },
    {
        title: "Lini Bisnis",
        route: "",

    },
    {
        title: "Keberlanjutan",
        route: "",

    },
    {
        title: "Investor",
        route: "",

    },
    {
        title: "GCG",
        route: "",

    },
    {
        title: "Media",
        route: "",

    },
    {
        title: "Karir",
        route: "",

    },
    {
        title: "BIM",
        route: "",

    },
    {
        title: "Hubungi Kami",
        route: "/hubungi-kami",

    }]

    const expandInfoPerusahaanMenu = () => {
        setExpandMenu("Info Perusahaan")
        setIsSticky(true)
        setTheme("light")
    }

    const collapseMenu = () => {
        const scrollTop = window.scrollY;
        if (props.theme == "light" && scrollTop < 200)
            setIsSticky(false)
        setExpandMenu("")
    }

    return (
        <div id="navbar" className={cn(props.className, isSticky ? "sticky top-0 z-[999]" : "", theme == "light" ? "bg-white fade-in" : "", "flex flex-col w-full pt-[2.5rem]")}>
            <div className="flex h-[2.625rem] px-[5rem]">
                <img src="/images/ic_wika_gedung.svg" className="items-center hover:cursor-pointer" onClick={() => {
                    router.push("/")
                }} />
                <div className={cn(theme == "light" ? "text-sooty " : "text-white ", "w-text-subhead-1 font-bold self-center ml-[3.5rem]")}>WEGE - IDR 138.00</div>
                <div className="flex items-center ml-[0.719rem]"><img className="w-[1.125rem] h-[1.125rem]" src="/icons/ic_trending_up.svg" />
                    <span className="w-text-body-1 text-garnish ml-[0.25rem]">+3.00 %</span>
                </div>
                <div className="text-white mx-[0.625rem] self-center">|</div>
                <div className={cn(theme == "light" ? "text-jet " : "text-white ", "self-center w-text-body-1 font-normal")}>28 Februari 2023 15:30 GMT+7 </div>
            </div>
            <div className="flex justify-between mt-[1.406rem] w-full px-[5rem]">
                <div className="flex gap-x-[2.75rem]">
                    {
                        navbarItems.map((item, index) => {
                            return <div
                                key={index}
                                className={cn(item == expandMenu ? "text-democrat" : "", theme == "light" ? "text-sooty" : "text-white", "w-text-subhead-1 cursor-pointer hover:text-democrat")}
                                onMouseEnter={() => {
                                    if (item.title == "Info Perusahaan") {
                                        expandInfoPerusahaanMenu()
                                    } else {
                                        collapseMenu()
                                    }
                                }}
                                onClick={() => {
                                    if (item.route != "")
                                        router.push(item.route)
                                }}
                            >{item.title}</div>
                        })
                    }
                </div>
                <div className="flex items-center">
                    <div className="w-text-body-1 font-semibold cursor-pointer text-radiant_yellow">Indonesia</div>
                    <div className={cn(theme == "light" ? "text-jet" : "text-white", "mx-[0.625rem]")}>|</div>
                    <div className={cn(theme == "light" ? "text-jet" : "text-white", "w-text-body-1 font-semibold cursor-pointer mr-[1.688rem] hover:text-orange")}>English</div>
                    <img src={theme == "light" ? "/icons/ic_search_black.svg" : "/icons/ic_search.svg"} className="cursor-pointer" />
                </div>
            </div>
            {theme == "light" && <hr className="mt-[1.656rem]" />}
            {props.showBreadcrumb && expandMenu == "" &&
                <>
                    <div className="flex flex-row justify-between mx-[6.25rem] my-[1.75rem] border-l-4 border-primary">
                        <ul className="breadcrumb ml-[1.25rem]">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Info Perusahaan</a></li>
                            <li><a href="#">Tentang Kami</a></li>
                        </ul>
                        <div className="flex flex-row cursor-pointer items-center gap-x-[0.875rem]" onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}>
                            <img src="/icons/ic_circle_arrow_up.svg" />
                            <div className="font-medium text-primary w-text-body-1">Kembali ke Atas</div>
                        </div>
                    </div>
                    <hr />
                </>
            }
            {isSticky && expandMenu == "Info Perusahaan" &&
                <InfoPerusahaan
                    onMouseEnter={() => {
                        expandInfoPerusahaanMenu()
                    }}
                    onMouseLeave={collapseMenu} />
            }
        </div>
    )
}