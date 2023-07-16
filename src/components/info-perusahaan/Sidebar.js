import cn from "classnames"

const Sidebar = ({active}) => {
    const SidebarItem = ({ active, number, text }) => {
        return (
            <div className="flex flex-row items-center cursor-pointer">
                <div className="ml-[1rem] text-silver_spoon w-text-caption">{number}</div>
                <div className={cn(active ? "underline text-sooty" : "", "ml-[0.875rem] hover:text-sooty w-text-title-1 text-more_than_a_week hover:underline")}>{text}</div>
            </div>
        )
    }

    return (
        <div className="flex-none flex flex-col gap-y-[0.625rem] border-l-4 border-l-secondary h-fit">
            <SidebarItem active={active == "Tentang Kami"} number={"01"} text={"Tentang Kami"} />
            <SidebarItem active={active == "Penghargaan & Sertifikasi"} number={"02"} text={"Penghargaan & Sertifikasi"} />
            <SidebarItem active={active == "Sekretaris Perusahaan"} number={"03"} text={"Sekretaris Perusahaan"} />
            <SidebarItem active={active == "Organisasi"} number={"04"} text={"Organisasi"} />
            <SidebarItem active={active == "Budaya Perusahaan"} number={"05"} text={"Budaya Perusahaan"} />
            <SidebarItem active={active == "Struktur Perusahaan"} number={"06"} text={"Struktur Perusahaan"} />
            <SidebarItem active={active == "Alamat & Informasi Kontak"} number={"07"} text={"Alamat & Informasi Kontak"} />
        </div>
    )
}

export default Sidebar