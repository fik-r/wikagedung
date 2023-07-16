import cn from "classnames"
import { useRouter } from 'next/navigation'

const InfoPerusahaan = (props) => {
    const router = useRouter()
    const infoPerusahaanItems = [
        [
            {
                title: "Tentang Kami",
                route: "/info-perusahaan/tentang-kami",
                child: []
            },
            {
                title: "Penghargaan Sertifikat",
                route: "/info-perusahaan/penghargaan-sertifikasi",
                child: []
            },

            {
                title: "Sekretaris Perusahaan",
                route: "",
                child: []
            },
            {
                title: "Organisasi",
                route: "",
                child: [
                    {
                        title: "Sambutan Direktur Utama",
                        route: "/info-perusahaan/organisasi",
                    },
                    {
                        title: "Dewan Komisaris",
                        route: "/info-perusahaan/organisasi",
                    },
                    {
                        title: "Dewan Direksi",
                        route: "/info-perusahaan/organisasi",
                    }
                ]
            }
        ],
        [
            {
                title: "Budaya Perusahaan",
                route: "",
                child: [
                    {
                        title: "Visi & Misi",
                        route: "",
                    },
                    {
                        title: "Nilai Perusahaan",
                        route: "",
                    }
                ]
            },
            {
                title: "Strukrur Perusahaan",
                route: "",
                child: [
                    {
                        title: "Struktur Group Perusahaan",
                        route: "",
                    },
                    {
                        title: "Struktur Organisasi",
                        route: "",
                    },
                    {
                        title: "Perusahaan",
                        route: "",
                    }
                ]
            },
            {
                title: "Alamat & Informasi Kontak",
                route: "",
                child: [
                    {
                        title: "Kantor Pusat",
                        route: "",
                    },
                    {
                        title: "Anak Perusahaan",
                        route: "",
                    },
                    {
                        title: "Investasi & Konsesi",
                        route: "",
                    }
                ]
            },
        ]
    ]

    const Menu = ({ index, item, onClick }) => {
        return (
            <div className="w-100 row-span-1 flex flex-col justify-center cursor-pointer" onClick={() => {
                onClick(item)
            }}>
                <div tabIndex={index} className={cn(item.child.length > 0 ? "collapse-arrow" : "", "collapse cursor-pointer group")}>
                    <span className="collapse-title min-h-fit p-0 w-text-body-2 text-sooty font-medium h-[2.5rem] flex items-center group-focus:text-orange hover:text-orange">{item.title}</span>
                    {item.child.length > 0 &&
                        <div tabIndex={index} className="collapse-content flex flex-col min-h-fit p-0 group-focus:p-0">
                            {
                                item.child.map((child, index) => {
                                    return (<div key={index} onClick={() => {
                                        onClick(child)
                                    }} className="w-text-body-2 text-sooty font-normal h-[2.5rem] flex items-center hover:text-orange">{child.title}</div>)
                                })
                            }
                        </div>
                    }
                </div>
                <hr />
            </div>
        )
    }
    return (
        <div onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} className="relative grid grid-cols-3 p-[2.5rem] gap-x-[6.25rem]">
            {/* <img src="/images/bg_menu_1.svg" className="absolute bottom-0 left-0" />
            <img src="/images/bg_menu_2.svg" className="absolute bottom-0 left-0" /> */}
            <div className="col-span-1 flex flex-col">
                <div className="text-primary w-text-display-3">
                    Info Perusahaan
                </div>
                <div className="leading-[1.875rem] w-text-body-2 text-sooty mt-[1.5rem]">
                    Melalui perjalanan panjang sejarah yang telah diukir, senantiasa selalu berkomitmen untuk memberikan kontribusi terbaik
                </div>
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-x-[2.5rem]">
                {
                    infoPerusahaanItems.map((menu, index) => {
                        return (
                            <div key={index} className="flex flex-col w-full col-span-1">
                                {
                                    menu.map((data, index) => {
                                        return (
                                            <Menu key={index} item={data} index={index} onClick={(data) => {
                                                if (data.route != "") {
                                                    console.log(data)
                                                    router.push(data.route)
                                                }
                                            }} />
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default InfoPerusahaan