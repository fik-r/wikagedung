import { CircleTab } from "@/components/common"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"
import cn from "classnames"
import useResponsive from "@/utils/media-query"
const AlamatInformasiKontak = ({ dataAlamatAnakPerusahaan = [], dataAlamatKantorPusat = [], dataAlamatInvestasi = [] }) => {
    const { isMobile } = useResponsive();
    const searchParams = useSearchParams()
    const query = searchParams.get("q")
    const [type, setType] = useState(query)
    const [data, setData] = useState(dataAlamatKantorPusat)

    useEffect(() => {
        setType(query)
        if (type == "anak-perusahaan") {
            setData(dataAlamatAnakPerusahaan)
        }
        if (type == "kantor-pusat") {
            setData(dataAlamatKantorPusat)
        }
        if (type == "investasi-konsesi") {
            setData(dataAlamatInvestasi)
        }
    }, [query])
    return (
        <div className="flex flex-col w-full px-[1rem]">
            <div className={cn("flex flex-row", isMobile ? "gap-x-[0.5rem] flex-wrap gap-y-[0.5rem]" : "gap-x-[1.25rem]")}>
                <CircleTab active={type == "kantor-pusat"} text="Kantor Pusat" onClick={() => {
                    setType("kantor-pusat")
                    setData(dataAlamatKantorPusat)
                }} />
                <CircleTab active={type == "anak-perusahaan"} text="Anak Perusahaan" onClick={() => {
                    setType("anak-perusahaan")
                    setData(dataAlamatAnakPerusahaan)
                }} />
                <CircleTab active={type == "investasi-konsesi"} text="Investasi & Konsesi" onClick={() => {
                    setType("investasi-konsesi")
                    setData(dataAlamatInvestasi)
                }} />
            </div>
            <div className="flex flex-col w-full mt-[1.25rem] gap-y-[1.25rem]">
                {data.map((item, index) => {
                    return (
                        <div key={index} className={cn("flex border border-aria rounded-lg", isMobile ? "flex-col gap-y-[0.75rem] p-[1rem]" : "flex-row p-[1.875rem] gap-x-[2.5rem] ")}>
                            <div className={cn("max-h-[12.5rem] min-h-[12.5rem] rounded-lg relative", isMobile ? "w-full" : "min-w-[12.5rem] max-w-[12.5rem]")}>
                                <Image
                                    quality={50} placeholder="blur"
                                    blurDataURL={item.image}
                                    style={{ objectFit: "cover" }}
                                    fill src={item.image} className="rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-y-[1rem]">
                                <div className={cn("text-sooty", isMobile ? "w-text-body-2 font-bold" : "w-text-headline-1 mb-[1.5rem]")}>{item.name}</div>
                                <div className={cn("flex flex-row", isMobile ? "gap-x-[1rem]" : "gap-x-[1.5rem]")}>
                                    <div className={cn("text-jet font-medium", isMobile ? "w-text-body-1 w-[3rem]" : "w-[5rem] w-text-subhead-2")}>Alamat</div>
                                    <div className={cn("text-jet font-normal", isMobile ? "w-text-body-1" : "w-text-subhead-2")}>{item.alamat}</div>
                                </div>
                                <div className={cn("flex flex-row", isMobile ? "gap-x-[1rem]" : "gap-x-[1.5rem]")}>
                                    <div className={cn("text-jet font-medium", isMobile ? "w-text-body-1 w-[3rem]" : "w-[5rem] w-text-subhead-2")}>Telepon</div>
                                    <div className={cn("text-jet font-normal", isMobile ? "w-text-body-1" : "w-text-subhead-2")}>{item.telepon}</div>
                                </div>
                                {/* <div className={cn("flex flex-row", isMobile ? "gap-x-[1rem]" : "gap-x-[1.5rem]")}>
                                    <div className={cn("text-jet font-medium", isMobile ? "w-text-body-1 w-[3rem]" : "w-[5rem] w-text-subhead-2")}>Fax</div>
                                    <div className={cn("text-jet font-normal", isMobile ? "w-text-body-1" : "w-text-subhead-2")}>corsec@wikagedung.co.id</div>
                                </div> */}
                                <div className={cn("flex flex-row", isMobile ? "gap-x-[1rem]" : "gap-x-[1.5rem]")}>
                                    <div className={cn("text-jet font-medium", isMobile ? "w-text-body-1 w-[3rem]" : "w-[5rem] w-text-subhead-2")}>Email</div>
                                    <div className={cn("text-jet font-normal", isMobile ? "w-text-body-1" : "w-text-subhead-2")}>{item.email}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default AlamatInformasiKontak