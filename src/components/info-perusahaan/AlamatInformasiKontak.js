import { CircleTab } from "@/components/common"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
const AlamatInformasiKontak = ({ dataAlamatAnakPerusahaan = [], dataAlamatKantorPusat = [], dataAlamatInvestasi = [] }) => {
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
            setData(dataAlamatAnakPerusahaan)
        }
        if (type == "investasi-konsesi") {
            setData(dataAlamatInvestasi)
        }
    }, [query])
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row gap-x-[1.25rem]">
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
                        <div key={index} className="flex flex-row p-[1.875rem] gap-x-[2.5rem] border border-aria rounded-lg">
                            <div>
                                <img className="w-[12.5rem] h-[12.5rem] min-w-[12.5rem] min-h-[12.5rem]  
                                max-w-[12.5rem] max-h-[12.5rem] rounded-lg" src={item.image} />
                            </div>
                            <div className="flex flex-col gap-y-[1rem]">
                                <div className="w-text-headline-1 text-sooty mb-[1.5rem]">{item.name}</div>
                                <div className="flex flex-row gap-x-[1.5rem]">
                                    <div className="w-[5rem] text-jet w-text-subhead-2 font-medium">Alamat</div>
                                    <div className="text-jet w-text-subhead-2 font-normal">{item.alamat}</div>
                                </div>
                                <div className="flex flex-row gap-x-[1.5rem]">
                                    <div className="w-[5rem] text-jet w-text-subhead-2 font-medium">Telepon</div>
                                    <div className="text-jet w-text-subhead-2 font-normal">{item.telepon}</div>
                                </div>
                                {/* <div className="flex flex-row gap-x-[1.5rem]">
                                    <div className="w-[5rem] text-jet w-text-subhead-2 font-medium">Fax</div>
                                    <div className="text-jet w-text-subhead-2 font-normal">corsec@wikagedung.co.id</div>
                                </div> */}
                                <div className="flex flex-row gap-x-[1.5rem]">
                                    <div className="w-[5rem] text-jet w-text-subhead-2 font-medium">Email</div>
                                    <div className="text-jet w-text-subhead-2 font-normal">{item.email}</div>
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