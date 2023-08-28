'use client'
import Layout from "@/components/Layout/lini-bisnis"
import { CircleTab } from "@/components/common"
import { useRouter } from "next/navigation"

export default function Index() {
    const router = useRouter()
    const KonstruksiItem = ({ type, name }) => {
        return (
            <div className="flex flex-col rounded-lg shadow-lg w-[16.25rem] hover:cursor-pointer zoom" onClick={() => {
                router.push("/lini-bisnis/konstruksi/detail")
            }}>
                <img src="/images/ic_dummy_apartemen.png" className="rounded-t-lg bg-white_smoke w-full h-[20.25rem]" />
                <div className="w-text-subhead-1 font-normal text-sooty mx-[1rem] mt-[1.25rem]">{type}</div>
                <div className="w-text-subhead-1 font-bold text-primary mx-[1rem] mt-[0.5rem] mb-[1.25rem]">{name}</div>
            </div>
        )
    }
    const content = () => {
        return (
            <div className="border-t border-secondary flex flex-col items-center pt-[4.375rem] pb-[15.625rem] px-[6.25rem]">
                <div className="w-text-display-2 mb-[2rem]">Proyek Konstruksi</div>
                <div className="flex flex-row gap-x-[1.25rem]">
                    <CircleTab active text={"Proyek Berjalan"} />
                    <CircleTab text={"Proyek Selesai"} />
                </div>
                <div className="w-full flex flex-col border-t border-[#D2D2D2] mt-[2.625rem] p-[2.5rem]">
                    <div className="flex justify-center">
                        <div className="flex flex-row flex-wrap">
                            <div className="text-more_than_a_week w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem]">Semua</div>
                            <div className="text-more_than_a_week w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem]">Fasilitas Akademi</div>
                            <div className="text-more_than_a_week w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem]">Bandara</div>
                            <div className="text-more_than_a_week w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem]">Apartemen</div>
                            <div className="text-more_than_a_week w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem]">Komersial</div>
                            <div className="text-more_than_a_week w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem]">Rumah Sakit</div>
                            <div className="text-more_than_a_week w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem]">Hotel</div>
                            <div className="text-more_than_a_week w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem]">Perkantoran</div>
                            <div className="text-more_than_a_week w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem]">Fasilitas Olahraga</div>
                            <div className="text-more_than_a_week w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem]">Fasilitas Umum</div>
                            <div className="text-more_than_a_week w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem] items-start">Fasilitas Umum</div>
                            <div className="text-more_than_a_week w-text-subhead-1 border-b-[0.125rem] px-[1rem] py-[0.75rem] items-start">Fasilitas Umum</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row flex-wrap gap-[2.5rem] px-[2.5rem]">
                    <KonstruksiItem type="Apartemen" name="The Grandstand Apartemen" />
                    <KonstruksiItem type="Apartemen" name="The Grandstand Apartemen" />
                    <KonstruksiItem type="Apartemen" name="The Grandstand Apartemen" />
                    <KonstruksiItem type="Apartemen" name="The Grandstand Apartemen" />
                    <KonstruksiItem type="Apartemen" name="The Grandstand Apartemen" />
                    <KonstruksiItem type="Apartemen" name="The Grandstand Apartemen" />
                    <KonstruksiItem type="Apartemen" name="The Grandstand Apartemen" />
                </div>
            </div>
        )
    }
    return (
        <Layout
            heading={"Lini Bisnis"}
            activeSidebar={"Konstruksi"}
            titlePage={"Lingkup Usaha Konstruksi"}
            descriptionPage={"WIKA Gedung menyediakan layanan konstruksi terintegrasi dengan dukungan teknologi terdepan dalam memberikan solusi pekerjaan konstruksi secara menyeluruh dengan mengutamakan quality & safety untuk melayani pasar pemerintah, BUMN/BUMD dan swasta di Indonesia."}
            content={content()}
        />
    )
}