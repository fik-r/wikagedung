import { Layout, Container } from "@/components/Layout"
import { Sidebar } from "@/components/info-perusahaan"
export default function Index({ heading, subHeading, activeSidebar, titlePage, descriptionPage, sidebarContent, content }) {
    return (
        <Layout showBreadcrumb={true}>
            <div className="w-full">

                {/* header, should change with dynamic data */}
                <div className="px-[6.25rem] relative flex flex-col">
                    <div className="w-text-subhead-2 text-secondary font-semibold mt-[2.5rem]">{heading}</div>
                    <div className="w-text-display-4 text-sooty font-semibold mt-[0.625rem] pb-[2.5rem]">{subHeading}</div>
                </div>
                {/* sidebar */}
                <div className="px-[6.25rem] relative flex flex-row mt-[3.125rem] gap-x-[3.75rem] pb-[3.125rem]">
                    {/* sidebar */}
                    <Sidebar active={activeSidebar} />
                    {/* sidebar content text */}
                    {!sidebarContent && <div className="flex-auto flex flex-col">
                        {titlePage && <div className="inline-block text-jet w-text-title-1 font-bold mb-[0.75rem]">{titlePage}</div>}
                        <div className="inline-block text-jet w-text-title-1 leading-10 font-medium ">
                            {descriptionPage}
                        </div>
                        <div className="mt-[1rem] cursor-pointer  flex flex-row items-center">
                            <span className="w-text-title-1 mr-[2.063rem] text-primary font-semibold">Read more </span>
                            <img src="/icons/ic_dropdown.svg" className="w-[0.563rem] h-[0.938rem]" /></div>
                    </div>}
                    {sidebarContent}
                </div>
            </div>
            {/* Content in bottom sidebar */}
            {content}
        </Layout>
    )
}