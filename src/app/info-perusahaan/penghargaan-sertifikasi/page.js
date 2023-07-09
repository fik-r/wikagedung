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
                    <img className="absolute top-0 h-full right-0 z-[-1]" src="/images/bg_isolation_mode_title.svg" />
                    <div className="w-text-subhead-2 text-secondary font-semibold mt-[2.5rem]">Info Perusahaan</div>
                    <div className="w-text-display-4 text-sooty font-semibold mt-[0.625rem] pb-[2.5rem]">Penghargaan Sertifikasi</div>
                </div>
                {/* sidebar */}
                <div className="px-[6.25rem] relative flex flex-row mt-[3.125rem] gap-x-[3.75rem] pb-[3.125rem]">
                    {/* sidebar */}
                    <div className="flex-none flex flex-col gap-y-[0.625rem]  border-l-4 border-l-secondary">
                        <SidebarItem number={"01"} text={"Tentang Kami"} />
                        <SidebarItem active number={"02"} text={"Penghargaan & Sertifikasi"} />
                        <SidebarItem number={"03"} text={"Sekretaris Perusahaan"} />
                        <SidebarItem number={"04"} text={"Organisasi"} />
                        <SidebarItem number={"05"} text={"Budaya Perusahaan"} />
                        <SidebarItem number={"06"} text={"Struktur Perusahaan"} />
                        <SidebarItem number={"07"} text={"Alamat & Informasi Kontak"} />
                    </div>
                    {/* sidebar content */}
                    
                </div>
            

            </div>
        </Layout>
    )
}