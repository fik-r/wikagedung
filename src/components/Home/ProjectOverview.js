const ProjectOverview = () => {
    const ProjectOverviewItem = ({ url, title, desc }) => {
        return (
            <div className="flex flex-row gap-x-[2.25rem]">
                <img src={url} className="w-[3.75rem] h-[4.094rem]" />
                <div className="flex flex-col">
                    <div className="w-text-subhead-1 text-neutral font-semibold">{title}</div>
                    <div className="w-text-display-2 text-neutral">{desc}</div>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="flex flex-col px-[2.5rem] pt-[2.5rem] pb-[3.75rem] z-10">
                <div className="text-neutral w-text-headline-1 mb-[2.5rem] text-center">Project Overview</div>
                <div className="flex flex-row justify-between">
                    <ProjectOverviewItem url="/icons/ic_building_project.svg" title="Building Project Completed" desc="200++" />
                    <ProjectOverviewItem url="/icons/ic_toll.svg" title="Toll & Road Project Completed" desc="#10" />
                    <ProjectOverviewItem url="/icons/ic_revenue.svg" title="2022 Revenue" desc="IDR 13 Billion" />
                </div>
            </div>
            <img className="absolute full right-0 h-[15.5rem]" src="/images/bg_project_overview.svg" />
        </>
    )
}

export default ProjectOverview