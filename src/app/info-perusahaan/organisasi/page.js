import { Layout, Container } from "@/components/Layout"
import cn from 'classnames'
export default function Index() {
    const SidebarItem = ({ number, text, active }) => {
        return (
            <div className="flex flex-row items-center cursor-pointer">
                <div className="ml-[1rem] text-silver_spoon w-text-caption">{number}</div>
                <div className={cn(active ? "underline text-sooty" : "", "ml-[0.875rem] hover:text-sooty w-text-title-1 text-more_than_a_week hover:underline")}>{text}</div>
            </div>
        )
    }

    const TimelineTransformasiItem = ({ title, text }) => {
        return (
            <div className="flex flex-col">
                <div className="w-text-subhead-1 font-semibold text-sooty">{title}</div>
                <div className="w-text-body-1 font-normal text-jet leading-7 mt-[0.75rem]">{text}</div>
            </div>
        )
    }
    return (
        <Layout showBreadcrumb={true}>
            <div className="w-full">

                {/* header, should change with dynamic data */}
                <div className="px-[6.25rem] relative flex flex-col">
                    <div className="w-text-subhead-2 text-secondary font-semibold mt-[2.5rem]">Info Perusahaan</div>
                    <div className="w-text-display-4 text-sooty font-semibold mt-[0.625rem] pb-[2.5rem]">Organisasi</div>
                </div>
                {/* sidebar */}
                <div className="px-[6.25rem] relative flex flex-row mt-[3.125rem] gap-x-[3.75rem] pb-[3.125rem]">
                    {/* sidebar */}
                    <div className="flex-none flex flex-col gap-y-[0.625rem]  border-l-4 border-l-secondary">
                        <SidebarItem number={"01"} text={"Tentang Kami"} />
                        <SidebarItem number={"02"} text={"Penghargaan & Sertifikasi"} />
                        <SidebarItem number={"03"} text={"Sekretaris Perusahaan"} />
                        <SidebarItem active number={"04"} text={"Organisasi"} />
                        <SidebarItem number={"05"} text={"Budaya Perusahaan"} />
                        <SidebarItem number={"06"} text={"Struktur Perusahaan"} />
                        <SidebarItem number={"07"} text={"Alamat & Informasi Kontak"} />
                    </div>
                    {/* sidebar content */}
                    {/* sidebar content */}
                    <div className="flex-auto flex flex-col">
                        <div className="inline-block text-jet w-text-title-1 font-bold">Sambutan Direktur Utama</div>
                        <div className="inline-block text-jet w-text-title-1 leading-10 font-medium mt-[0.75rem]">Pada tahun 2021, kebijakan strategis yang diimplementasikan berhasil membawa Perusahaan mewujudkan pencapaian yang menggembiraka. Kinerja finansial Perusahaan tercatat mengalami pertumbuhan seiring dengan sentimen positif yang tercermin pada berbagai apresiasi yang diraih, diantaranya yaitu rekor MURI untuk proyek Jakarta International Stadium dan Pit Building Mandalika.
                        </div>
                        <div className="mt-[1rem] cursor-pointer  flex flex-row items-center">
                            <span className="w-text-title-1 mr-[2.063rem] text-primary font-semibold">Read more </span>
                            <img src="/icons/ic_dropdown.svg" className="w-[0.563rem] h-[0.938rem]" /></div>
                    </div>
                </div>


            </div>
        </Layout>
    )
}