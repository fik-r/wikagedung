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
            <SidebarItem active={active == "Konstruksi"} number={"01"} text={"Konstruksi"} />
            <SidebarItem active={active == "Investasi & Konsensi"} number={"02"} text={"Investasi & Konsensi"} />
            <SidebarItem active={active == "Konstruksi Off Site Modular"} number={"03"} text={"Konstruksi Off Site Modular"} />
            <SidebarItem active={active == "Konstruksi Off Site Pracetak Gedung"} number={"04"} text={"Konstruksi Off Site Pracetak Gedung"} />
        </div>
    )
}

export default Sidebar